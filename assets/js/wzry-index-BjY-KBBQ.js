import{l as V,M as C,u as e,E as r,F as f,I as m,T as R,P as I,Q as N,X as z,r as S,O as o,a as D,w as Q,n as G,y as X,U as M,G as J,H as W,L as Z}from"./wzry-wzry_vue-BxQEaZ6z.js";import{s as P,u as ee}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{aH as ae,s as te,y as se,m as H,p as A,bs as U,aC as Y,aK as oe,n as ne,aL as ie,Y as re,x as le,ad as ce,k as ue,j as w,ai as E,a9 as F,aj as de}from"./wzry-index-Uq5ghgDZ.js";import{F as me,K as pe}from"./wzry-index-BPj1L2tm.js";import{K as _e}from"./wzry-index-cZRh2pAA.js";import{u as fe}from"./wzry-index.vue_vue_type_style_index_0_scoped_308049e9_lang-CIECVXAO.js";import{L as ke,v as ve}from"./wzry-index-BmZXlK0c.js";import{F as he}from"./wzry-index-BwGvXu5k.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";import"./wzry-index-DsYqfsh8.js";const ge={class:"skin-card"},ye=["src"],Te=["src"],Se={class:"bottom"},Ce=["innerHTML"],be=["innerHTML"],Le={class:"tool"},Ne=V({__name:"index",props:{data:{}},emits:["exchange"],setup($,{emit:k}){const v=k,l=(t,s)=>{v("exchange",t,s)};return(t,s)=>C((r(),f("div",ge,[C(m("img",{class:"bg",src:t.data.posterBlur},null,8,ye),[[e(te),{img:t.data.cover}]]),t.data.link?(r(),f("img",{key:0,class:"type",src:t.data.link},null,8,Te)):R("",!0),m("div",Se,[m("div",{class:"name",innerHTML:t.data.name},null,8,Ce),m("div",{class:"mark",innerHTML:`——${t.data.heroName}`},null,8,be)]),m("div",Le,[C((r(),I(e(se),{type:"warning",class:"k-button",onClick:s[0]||(s[0]=c=>l(c,t.data))},{default:N(()=>s[1]||(s[1]=[z(" 点击兑换 ")])),_:1})),[[e(H)]])])])),[[e(ae)]])}}),$e=A(Ne,[["__scopeId","data-v-32a6a974"]]),xe={class:"skin-toolbar"},Ke={class:"filter-select"},Re=V({__name:"index",emits:["change"],setup($,{expose:k,emit:v}){const l=v,t=U(),{skin_type:s,skin_type_list:c,gender_type:h}=P(t),{filterSkinType:x,filterGender:K,searchSkin:b}=t,u=S(""),n=()=>{u.value="",l("change")},d=p=>{x(c.value[p]),n()},L=p=>{K(p),n()},g=Y(()=>{b(u.value),l("change")},500);return k({_clearName:n}),(p,_)=>(r(),f("div",xe,[o(e(_e),{"prop-key":"KING_CRYSTAL",class:"k-prop-num",height:"3rem","margin-right":"1rem"}),m("div",Ke,[o(oe,{options:e(c),"sort-text":e(s),"list-height":"26.5625rem","min-width":"8.5rem",onSelect:d},null,8,["options","sort-text"])]),o(me,{modelValue:e(h),"onUpdate:modelValue":[_[0]||(_[0]=y=>D(h)?h.value=y:null),L]},null,8,["modelValue"]),C(o(e(ie),{modelValue:u.value,"onUpdate:modelValue":_[1]||(_[1]=y=>u.value=y),required:!1,class:"k-input",placeholder:"英雄/皮肤","no-special":!1,onInput:e(g)},null,8,["modelValue","onInput"]),[[e(H),{text:e(ne).kb43,type:"INPUT"}]])]))}}),Ie=A(Re,[["__scopeId","data-v-a3cd2aa5"]]),Ve={class:"skin"},Ae={class:"skin-main"},Be=V({name:"KingCrystal",__name:"index",props:{visible:{type:Boolean}},setup($){const k=$,v=ee(),l=re(),t=U(),{scroll:s,show_list:c,finish:h,loading:x}=P(t),{playAudio:K}=ue(),{line_num:b}=fe(4,[[2e3,4],[1600,3],[1400,2],[720,1]]),u=S(),n=S(),d=S(!1),L=S(!1);t.getSkin();const g=Y(a=>{t.setScroll(a),L.value=a>250},250),p=()=>{g(0),d.value=!1,G(()=>{d.value=!0})},_=()=>{var a;p(),(a=u.value)==null||a._clearName()},y=(a,i)=>{l.articles.KING_CRYSTAL>0?w({text:E("r36m",{name:`${i.heroName}-${i.name}`,prop:F.KING_CRYSTAL,count:1}),confirm(){l.setGamePropNum("KING_CRYSTAL",1,"SUB").then(()=>{var T;l.addSkin(i.id,a),(T=u.value)==null||T._clearName()})}}):w({text:E("p89n",{prop:F.KING_CRYSTAL}),confirm(){v.push(de.HERO_LOTTERY)}})},O=()=>{t.loadMore().then(()=>{var a;(a=n.value)==null||a._updateStatus()})},j=()=>{var a;(a=n.value)==null||a._setPosition(0,!1)};return Q(()=>k.visible,a=>{d.value=a,G(()=>{var i;(i=n.value)==null||i._setPosition(s.value)})}),X(async()=>{var a;K("h3w0"),(a=n.value)==null||a._setPosition(s.value),await le(250),d.value=!0}),(a,i)=>(r(),f("div",Ve,[m("div",Ae,[o(M,{name:"to-bottom",appear:""},{default:N(()=>[o(Ie,{ref_key:"skinToolbarRef",ref:u,onChange:i[0]||(i[0]=T=>e(g)(0))},null,512)]),_:1}),o(e(pe),{active:L.value,onBackTop:j},null,8,["active"]),o(M,{name:"fade"},{default:N(()=>[e(c).length&&d.value?(r(),I(e(ke),{key:0,ref_key:"libVirtualListRef",ref:n,data:e(c),"column-count":e(b),loading:e(x),finish:e(h),onScroll:e(g),onLoadMore:O},{default:N(({data:T})=>[(r(!0),f(J,null,W(T,(B,q)=>C((r(),f("div",{key:B.id,ref_for:!0,ref:"skinCardRefs",class:"skin-card",style:Z({"transition-delay":q%(e(b)*2)*.1+"s"})},[o($e,{data:B,onExchange:y},null,8,["data"])],4)),[[e(ve)]])),128))]),_:1},8,["data","column-count","loading","finish","onScroll"])):R("",!0)]),_:1}),e(c).length===0?(r(),I(e(ce),{key:0,tip:"暂无可兑换皮肤"})):R("",!0)]),o(e(he),{type:"kingCrystal",onChange:_})]))}}),Xe=A(Be,[["__scopeId","data-v-c13426eb"]]);export{Xe as default};