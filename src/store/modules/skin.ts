import { ref } from "vue";
import { defineStore } from "pinia";
import _cloneDeep from "lodash/cloneDeep";

import { $tool } from "@/utils";
import { usePagingLoad } from "@/hooks";
import { GAME_HERO, KVP_TYPE } from "@/api";

/** @description 皮肤列表页 */
const SkinStore = defineStore("skin", () => {
  const $usePagingLoad = usePagingLoad<Game.Hero.Skin>();

  const ExposeData = {
    /** 是否处于加载中 */
    loading: $usePagingLoad.loading,
    /** 滚动坐标 */
    scroll: $usePagingLoad.scroll,
    /** 暂无更多 */
    finish: $usePagingLoad.finish,
    /** 筛选后的数据列表 */
    filter_list: $usePagingLoad.filter_list,
    /** 展示的数据列表 */
    show_list: $usePagingLoad.show_list,

    /** 职业类型 */
    profession: ref<Game.Hero.Profession>("全部"),
    /** 价格排序类型 */
    price_type: ref("全部价格"),
    /** 皮肤筛选类型 */
    skin_type: ref("全部类型"),
    /** 同名皮肤筛选类型 */
    same_name: ref("全部同名"),
    /** 性别筛选类型 */
    gender_type: ref<Game.GenderId>(0),
    /** 统计大于3个同名的皮肤名 */
    same_name_list: ref<Global.General[]>([]),
    /** 统计皮肤类型列表 */
    skin_type_list: ref<Global.General[]>([]),
  };
  const {
    scroll,
    filter_list,
    gender_type,
    profession,
    price_type,
    skin_type,
    same_name,
    same_name_list,
    skin_type_list,
  } = ExposeData;

  /* 统计相同皮肤名 */
  const getSameName = (skin_list: Game.Hero.Skin[]) => {
    const count: Record<string, number> = {};
    skin_list.forEach((item) => {
      count[item.name] ??= 0;
      count[item.name]++;
    });

    //收集相同数大于3的皮肤名
    for (const key in count) {
      if (count[key] < 3) {
        delete count[key];
      }
    }

    same_name_list.value = Object.keys(count).map((item) => {
      return {
        label: item,
        value: item,
      };
    });

    same_name_list.value.unshift({
      label: "全部同名",
      value: "全部同名",
    });
  };

  /* 统计皮肤类型列表 */
  const getSkinType = (skin_list: Game.Hero.Skin[]) => {
    const options = [
      ...new Set(skin_list.sort((a, b) => a.typeSort - b.typeSort).map((item) => item.alias)),
    ];

    skin_type_list.value = options.map((item) => {
      return {
        label: item,
        value: item,
      };
    });

    skin_type_list.value.unshift({
      label: "全部类型",
      value: "全部类型",
    });
  };

  /* 一键排序 */
  const sortAll = () => {
    scroll.value = 0;

    /** 职业筛选 */
    const filterProfession = () => {
      const { all_data } = $usePagingLoad;

      if (profession.value === "全部") {
        //为了解决排序拷贝问题
        filter_list.value = [...all_data.value];
      } else {
        filter_list.value = all_data.value.filter((item: Game.Hero.Skin) => {
          return item.profession.includes(profession.value);
        });
      }
    };

    /** 性别筛选 */
    const filterGender = () => {
      const boy: Game.Hero.Skin[] = [];
      const girl: Game.Hero.Skin[] = [];
      filter_list.value.forEach((item) => {
        if (item.gender === "男") {
          boy.push(item);
        } else {
          girl.push(item);
        }
      });

      if (gender_type.value === 1) {
        filter_list.value = boy;
      } else if (gender_type.value === 2) {
        filter_list.value = girl;
      }
    };

    /** 皮肤类型筛选 */
    const filterSkinType = () => {
      if (skin_type.value === "全部类型") return;
      filter_list.value = filter_list.value.filter((item) => item.alias === skin_type.value);
    };

    /** 同名皮肤筛选 */
    const filterSameName = () => {
      if (same_name.value === "全部同名") return;

      filter_list.value = filter_list.value.filter((item) => {
        return item.name === same_name.value;
      });
    };

    /** 价格排序 */
    const sortPrice = () => {
      if (price_type.value === "全部价格") return;

      const sort_strategy: Record<string, (list: Game.Hero.Skin[]) => Game.Hero.Skin[]> = {
        免费: (list) => {
          const noFree = [
            "积分夺宝",
            "星会员15级",
            "贵族专属",
            "荣耀战令获取",
            "会员限定",
            "限时兑换",
          ];
          const noNum = list.filter(
            (item) => !noFree.includes(item.price.toString()) && isNaN(Number(item.price)),
          );
          return $tool.typeSort(noNum, "price");
        },
        由低到高: (list) => {
          const isNum = list.filter((item) => !isNaN(Number(item.price)));
          return isNum.sort((a, b) => Number(a.price) - Number(b.price));
        },
        由高到低: (list) => {
          const isNum = list.filter((item) => !isNaN(Number(item.price)));

          //筛选出荣耀典藏
          const strange = list.filter((item) => item.type.toString().indexOf("26.png") !== -1);
          return [...strange, ...isNum].sort((a, b) => Number(b.price) - Number(a.price));
        },
      };

      filter_list.value = sort_strategy[price_type.value](filter_list.value);
    };

    filterProfession();
    filterGender();
    filterSkinType();
    filterSameName();
    filter_list.value.reverse();
    sortPrice();
    ExposeMethods.resetPage();
  };

  const ExposeMethods = {
    /** @description 设置滚动坐标 */
    setScroll: $usePagingLoad.setScroll,
    /** @description 重新计算分页 */
    resetPage: $usePagingLoad.resetPage,
    /** @description 加载更多 */
    loadMore: $usePagingLoad.loadMore,

    /** @description 获取皮肤列表并设置皮肤类型图片及类型命 */
    getSkin() {
      const skin_list = GAME_HERO.getSkinList();
      const skinTypes = KVP_TYPE.getSkinKvp();

      skin_list.forEach((skin) => {
        const type = skinTypes[skin.type];
        skin.link = type.link;
        skin.category = type.name;

        //设置备用名称，解决高亮问题
        skin.skin_name = skin.name;
        skin.hero_name = skin.heroName;
      });

      $usePagingLoad.all_data.value = skin_list;

      sortAll();
      getSameName(skin_list);
      getSkinType(skin_list);
    },

    /**
     * @description: 设置职业
     * @param name 职业名称
     */
    setProfessional(name: Game.Hero.Profession) {
      if (profession.value === name) return;
      profession.value = name;
      sortAll();
    },

    /**
     * @description: 性别筛选
     * @param type 性别标识符
     */
    filterGender(type: Game.GenderId) {
      if (gender_type.value === type) return;
      gender_type.value = type;
      sortAll();
    },

    /**
     * @description: 皮肤类型筛选
     * @param type 皮肤类型名称
     */
    filterSkinType(type: string) {
      if (skin_type.value === type) return;
      skin_type.value = type;

      //筛选皮肤类型时要重置同名皮肤
      same_name.value = "全部同名";
      sortAll();
    },

    /**
     * @description: 同名皮肤名称筛选
     * @param type 皮肤名称
     */
    filterSameName(name: string) {
      if (same_name.value === name) return;
      same_name.value = name;

      //筛选同名皮肤时要重置其他
      skin_type.value = "全部类型";
      price_type.value = "全部价格";
      sortAll();
    },

    /**
     * @description: 价格排序
     * @param type 价格排序方式
     */
    sortPrice(type: string) {
      if (price_type.value === type) return;
      price_type.value = type;

      //价格排序时要重置同名皮肤
      same_name.value = "全部同名";
      sortAll();
    },

    /** @description 搜索皮肤 */
    searchSkin(name: string) {
      /* 搜索英雄时重置下拉菜单 */
      profession.value = "全部";
      price_type.value = "全部价格";
      skin_type.value = "全部类型";
      same_name.value = "全部同名";
      gender_type.value = 0;

      if (name) {
        filter_list.value = $tool.search(
          _cloneDeep($usePagingLoad.all_data.value),
          name,
          ["skin_name", "hero_name", "category"],
          true,
        );
      } else {
        sortAll();
      }

      ExposeMethods.resetPage();
    },
  };

  return {
    ...ExposeData,
    ...ExposeMethods,
  };
});

export { SkinStore };
