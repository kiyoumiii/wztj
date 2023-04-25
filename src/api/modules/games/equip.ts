import { get } from "@/api/helper/transfer";

/** @description 获取装备列表 */
const getEquip = () => Promise.resolve(get<Equip.Data[]>({ name: "data_equip" }));

/** @description 获取装备类型列表 */
const getEquipType = () => Promise.resolve(get<General[]>({ name: "data_equiptype" }));

/** @description 获取装备效果列表 */
const getEquipEffect = () => Promise.resolve(get<General[]>({ name: "data_equipeffect" }));

export default {
  getEquip,
  getEquipType,
  getEquipEffect,
};
