import{l as R,M as k,u as e,E as t,F as l,I as n,T as h,P as v,Q as c,X as x,r as f,c as A,y as B,O as r,U as y,W as E,G as M,H as b,L as w}from"./wzry-wzry_vue-BxQEaZ6z.js";import{u as K}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{aH as Y,s as G,y as I,m as P,p as $,Y as V,x as U,ad as j,k as F,bt as z,j as T,ai as N,a9 as S,aj as D}from"./wzry-index-Uq5ghgDZ.js";import{u as Q}from"./wzry-index.vue_vue_type_style_index_0_scoped_308049e9_lang-CIECVXAO.js";import{L as W}from"./wzry-index-BsFbf2g2.js";import{K as X}from"./wzry-index-cZRh2pAA.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";import"./wzry-index-DsYqfsh8.js";const q={class:"skin-card"},J=["src"],Z=["src"],ss={class:"bottom"},es=["innerHTML"],as=["innerHTML"],ts={class:"tool"},ns=R({__name:"index",props:{data:{}},emits:["exchange"],setup(C,{emit:u}){const o=u,p=(s,a)=>{o("exchange",s,a)};return(s,a)=>k((t(),l("div",q,[k(n("img",{class:"bg",src:s.data.posterBlur},null,8,J),[[e(G),{img:s.data.cover}]]),s.data.link?(t(),l("img",{key:0,class:"type",src:s.data.link},null,8,Z)):h("",!0),n("div",ss,[n("div",{class:"name",innerHTML:s.data.name},null,8,es),n("div",{class:"mark",innerHTML:`——${s.data.heroName}`},null,8,as)]),n("div",ts,[k((t(),v(e(I),{type:"warning",class:"k-button",onClick:a[0]||(a[0]=d=>p(d,s.data))},{default:c(()=>a[1]||(a[1]=[x(" 点击兑换 ")])),_:1})),[[e(P)]])])])),[[e(Y)]])}}),os=$(ns,[["__scopeId","data-v-f5dfe74a"]]),is={class:"skin"},rs={class:"skin-main"},cs={class:"tool-bar"},ls=R({name:"HonorCrystal",__name:"index",setup(C){const u=K(),o=V(),{playAudio:p}=F(),{line_num:s}=Q(5,[[2400,5],[2e3,4],[1600,3],[1400,2],[720,1]]),a=f(),d=f(!1),L=f([]),_=A(()=>L.value.filter(i=>i.type===26&&!o.skin_list.includes(i.id)));(async()=>{L.value=await z()})();const H=(i,m)=>{o.articles.HONOR_CRYSTAL>0?T({text:N("r36m",{name:`${m.heroName}-${m.name}`,prop:S.KING_CRYSTAL,count:1}),confirm(){o.setGamePropNum("HONOR_CRYSTAL",1,"SUB").then(()=>{o.addSkin(m.id,i)})}}):T({text:N("p89n",{prop:S.HONOR_CRYSTAL}),confirm(){u.push(D.SKIN_LOTTERY)}})};return B(async()=>{p("h3w0"),await U(250),d.value=!0}),(i,m)=>(t(),l("div",is,[n("div",rs,[r(y,{name:"to-bottom",appear:""},{default:c(()=>[n("div",cs,[r(e(X),{"prop-key":"HONOR_CRYSTAL",height:"3rem","margin-right":"1rem"})])]),_:1}),r(y,{name:"card-list"},{default:c(()=>[_.value.length&&d.value?(t(),v(e(W),{key:0,ref_key:"skinListRef",ref:a,gap:"1rem",count:e(s),"load-more":!1},{default:c(()=>[r(E,{name:"skin-card",appear:""},{default:c(()=>[(t(!0),l(M,null,b(_.value,(g,O)=>(t(),l("div",{key:g.id,class:"skin-card",style:w({"transition-delay":O%(e(s)*2)*.1+"s"})},[r(os,{data:g,onExchange:H},null,8,["data"])],4))),128))]),_:1})]),_:1},8,["count"])):h("",!0)]),_:1}),_.value.length===0?(t(),v(e(j),{key:0,tip:"暂无可兑换皮肤"})):h("",!0)])]))}}),Ss=$(ls,[["__scopeId","data-v-87a316c6"]]);export{Ss as default};