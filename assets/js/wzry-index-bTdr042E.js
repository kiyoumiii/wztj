import{l as C,M as f,u as e,E as u,F as k,I as l,T as R,P as $,Q as I,X as z,r as b,O as a,a as Q,w as X,n as F,y as J,U as M,G as W,H as Z,L as ee}from"./wzry-wzry_vue-BxQEaZ6z.js";import{s as H,u as te}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{aH as se,s as ae,F as oe,G as ne,aP as ie,y as re,m as U,p as V,bv as O,aC as j,aK as P,n as le,aL as ce,Y as ue,x as de,ad as me,k as pe,j as w,ai as A,a9 as G,aj as _e}from"./wzry-index-Uq5ghgDZ.js";import{F as fe,K as ke}from"./wzry-index-BPj1L2tm.js";import{K as ve}from"./wzry-index-cZRh2pAA.js";import{u as he}from"./wzry-index.vue_vue_type_style_index_0_scoped_308049e9_lang-CIECVXAO.js";import{L as Se,v as be}from"./wzry-index-BmZXlK0c.js";import{F as ge}from"./wzry-index-BwGvXu5k.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";import"./wzry-index-DsYqfsh8.js";const ye={class:"skin-card"},Ne=["src"],Te=["src"],Ie={class:"price"},xe=["src"],Le={class:"bottom"},Be=["innerHTML"],Ee=["innerHTML"],Ke={class:"tool"},Pe=C({__name:"index",props:{data:{}},emits:["exchange"],setup(x,{emit:v}){const h=v,d=(s,o)=>{h("exchange",s,o)};return(s,o)=>f((u(),k("div",ye,[f(l("img",{class:"bg",src:s.data.posterBlur},null,8,Ne),[[e(ae),{img:s.data.cover}]]),s.data.link?(u(),k("img",{key:0,class:"type",src:s.data.link},null,8,Te)):R("",!0),l("div",Ie,[l("img",{src:e(oe)(e(ne).ICON.SKIN_DEBRIS),alt:"",class:"icon"},null,8,xe),f(l("span",null,null,512),[[e(ie),{num:s.data.debris,duration:2e3}]])]),l("div",Le,[l("div",{class:"name",innerHTML:s.data.name},null,8,Be),l("div",{class:"mark",innerHTML:`——${s.data.heroName}`},null,8,Ee)]),l("div",Ke,[f((u(),$(e(re),{type:"warning",class:"k-button",onClick:o[0]||(o[0]=m=>d(m,s.data))},{default:I(()=>o[1]||(o[1]=[z(" 点击兑换 ")])),_:1})),[[e(U)]])])])),[[e(se)]])}}),Re=V(Pe,[["__scopeId","data-v-bee3e527"]]),$e={class:"skin-toolbar"},Ce={class:"filter-select"},Ve=C({__name:"index",emits:["change"],setup(x,{expose:v,emit:h}){const d=h,s=O(),{price_type:o,skin_type_list:m,skin_type:L,same_name:B,same_name_list:g,gender_type:p}=H(s),S=["全部价格","由低到高","由高到低"],i=b(""),n=()=>{i.value="",d("change")},y=r=>{s.sortPrice(S[r]),n()},N=r=>{s.filterSkinType(m.value[r]),n()},T=r=>{s.filterSameName(g.value[r]),n()},E=r=>{s.filterGender(r),n()},K=j(()=>{s.searchSkin(i.value),d("change")},500);return v({_clearName:n}),(r,_)=>(u(),k("div",$e,[a(e(ve),{"prop-key":"SKIN_DEBRIS",class:"k-prop-num",height:"3rem","margin-right":"1rem"}),l("div",Ce,[a(P,{options:S,"sort-text":e(o),onSelect:y},null,8,["sort-text"]),a(P,{options:e(m),"sort-text":e(L),"list-height":"31.25rem","min-width":"8.5rem",onSelect:N},null,8,["options","sort-text"]),a(P,{options:e(g),"sort-text":e(B),onSelect:T},null,8,["options","sort-text"])]),a(fe,{modelValue:e(p),"onUpdate:modelValue":[_[0]||(_[0]=t=>Q(p)?p.value=t:null),E]},null,8,["modelValue"]),f(a(e(ce),{modelValue:i.value,"onUpdate:modelValue":_[1]||(_[1]=t=>i.value=t),required:!1,class:"k-input",placeholder:"英雄/皮肤","no-special":!1,onInput:e(K)},null,8,["modelValue","onInput"]),[[e(U),{text:e(le).kb43,type:"INPUT"}]])]))}}),De=V(Ve,[["__scopeId","data-v-e97311ab"]]),Fe={class:"skin"},Me={class:"skin-main"},we=C({name:"SkinDebrisShop",__name:"index",props:{visible:{type:Boolean}},setup(x){const v=x,h=te(),d=ue(),s=O(),{scroll:o,show_list:m,finish:L,loading:B}=H(s),{playAudio:g}=pe(),{line_num:p}=he(6,[[2400,5],[2e3,4],[1600,3],[1400,2],[720,1]]),S=b(),i=b(),n=b(!1),y=b(!1);s.getSkin();const N=j(t=>{s.setScroll(t),y.value=t>250},250),T=()=>{N(0),n.value=!1,F(()=>{n.value=!0})},E=()=>{var t;T(),(t=S.value)==null||t._clearName()},K=()=>{var t;(t=i.value)==null||t._setPosition(0,!1)},r=(t,c)=>{d.articles.SKIN_DEBRIS>=Number(c.debris)?w({text:A("r36m",{name:c.name,prop:G.SKIN_DEBRIS,count:c.debris}),confirm(){d.setGamePropNum("SKIN_DEBRIS",Number(c.debris),"SUB").then(()=>{d.addSkin(c.id,t)})}}):w({text:A("p89n",{prop:G.SKIN_DEBRIS}),confirm(){h.push(_e.SKIN_LOTTERY)}})},_=()=>{s.loadMore().then(()=>{var t;(t=i.value)==null||t._updateStatus()})};return X(()=>v.visible,t=>{n.value=t,F(()=>{var c;(c=i.value)==null||c._setPosition(o.value)})}),J(async()=>{var t;g("h3w0"),(t=i.value)==null||t._setPosition(o.value),await de(250),n.value=!0}),(t,c)=>(u(),k("div",Fe,[l("div",Me,[a(M,{name:"to-bottom",appear:""},{default:I(()=>[a(De,{ref_key:"skinToolbarRef",ref:S,onChange:T},null,512)]),_:1}),a(e(ke),{active:y.value,onBackTop:K},null,8,["active"]),a(M,{name:"card-list"},{default:I(()=>[e(m).length&&n.value?(u(),$(e(Se),{key:0,ref_key:"libVirtualListRef",ref:i,data:e(m),"column-count":e(p),loading:e(B),finish:e(L),onScroll:e(N),onLoadMore:_},{default:I(({data:Y})=>[(u(!0),k(W,null,Z(Y,(D,q)=>f((u(),k("div",{key:D.id,class:"skin-card",style:ee({"transition-delay":q%(e(p)*2)*.1+"s"})},[a(Re,{data:D,onExchange:r},null,8,["data"])],4)),[[e(be)]])),128))]),_:1},8,["data","column-count","loading","finish","onScroll"])):R("",!0)]),_:1}),e(m).length===0?(u(),$(e(me),{key:0,tip:"暂无可兑换皮肤"})):R("",!0)]),a(e(ge),{type:"skinDebris",onChange:E})]))}}),tt=V(we,[["__scopeId","data-v-572b5f99"]]);export{tt as default};
