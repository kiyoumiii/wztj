import{l as B,M as T,u as e,E as u,F as b,I as a,S as M,P as $,Q as y,X as Y,r as _,f as z,O as r,a as Q,w as W,y as X,U as J,W as Z,G as ee,H as oe,L as se,T as O}from"./wzry-wzry_vue-BxQEaZ6z.js";import{s as F,e as te,u as ae}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{aH as re,y as ne,m as K,s as ie,F as le,G as ce,p as I,bu as U,aM as ue,aC as x,aK as de,n as pe,aL as me,Y as _e,aN as he,x as fe,ad as ve,k as ge,j as w,ai as G,a9 as V,aj as be}from"./wzry-index-Uq5ghgDZ.js";import{v as Se}from"./wzry-sweep-light-kDX43eZR.js";import{K as Ee}from"./wzry-index-cZRh2pAA.js";import{F as ke,K as Re}from"./wzry-index-BPj1L2tm.js";import{u as Te}from"./wzry-index.vue_vue_type_style_index_0_scoped_308049e9_lang-CIECVXAO.js";import{F as ye}from"./wzry-index-BwGvXu5k.js";import{L as He}from"./wzry-index-BsFbf2g2.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";import"./wzry-index-DsYqfsh8.js";const Le={class:"hero-card"},Ne={class:"id"},$e={class:"select-mask"},xe=["src"],Be={class:"bottom"},Ie=["innerHTML"],Pe={class:"price"},De=["src"],Ce={class:"count"},Me=B({__name:"index",props:{data:{}},emits:["exchange"],setup(P,{emit:h}){const f=h,i=s=>{f("exchange",s)};return(s,l)=>T((u(),b("div",Le,[a("span",Ne,"No."+M(s.data.id),1),a("div",$e,[T((u(),$(e(ne),{class:"k-button",type:"warning",onClick:l[0]||(l[0]=c=>i(s.data))},{default:y(()=>l[1]||(l[1]=[Y(" 点击兑换 ")])),_:1})),[[e(K)]])]),T(a("img",{class:"bg",src:s.data.coverBlur},null,8,xe),[[e(ie),{img:s.data.cover}]]),a("div",Be,[a("div",{class:"name",innerHTML:s.data.name},null,8,Ie),a("div",Pe,[a("img",{src:e(le)(e(ce).ICON.HERO_DEBRIS),alt:"",class:"icon"},null,8,De),a("div",Ce,M(s.data.price),1)])])])),[[e(re),{color:"#000"}],[e(Se)]])}}),Oe=I(Me,[["__scopeId","data-v-45d4e930"]]),we={class:"hero-toolbar"},Ge={class:"filter-select"},Ve=B({__name:"index",emits:["change"],setup(P,{expose:h,emit:f}){const i=f,s=U(),{price_type:l,gender_type:c}=F(s),S=["全部价格","由低到高","由高到低"],d=_(""),E=z([]);ue().then(n=>{n.forEach(t=>{E.push({label:t.value,value:t.value})})});const v=()=>{d.value="",i("change")},H=n=>{s.sortPrice(S[n]),v()},k=n=>{s.filterGender(n),v()},g=x(()=>{s.searchHero(d.value),i("change")},500);return h({_clearName:v}),(n,t)=>(u(),b("div",we,[r(e(Ee),{"prop-key":"HERO_DEBRIS",height:"3rem",class:"k-prop-num","margin-right":"1rem"}),a("div",Ge,[r(e(de),{options:S,"sort-text":e(l),onSelect:H},null,8,["sort-text"])]),r(e(ke),{modelValue:e(c),"onUpdate:modelValue":[t[0]||(t[0]=p=>Q(c)?c.value=p:null),k]},null,8,["modelValue"]),T(r(e(me),{modelValue:d.value,"onUpdate:modelValue":t[1]||(t[1]=p=>d.value=p),required:!1,class:"k-input",placeholder:"英雄/字母","no-special":!1,onInput:e(g)},null,8,["modelValue","onInput"]),[[e(K),{text:e(pe).kb43,type:"INPUT"}]])]))}}),Fe=I(Ve,[["__scopeId","data-v-bc1c0509"]]),Ke={class:"hero"},Ue={class:"hero__main"},Ae=B({name:"HeroDebrisShop",__name:"index",setup(P){const h=te(),f=ae(),i=_e(),s=U(),{scroll:l,show_list:c,finish:S,loading:d}=F(s),{playAudio:E}=ge(),{page_count:v}=he(),{line_num:H}=Te(9,[[2200,8],[1800,7],[1600,6],[1400,5],[1024,4],[720,3],[480,2]]),k=_(),g=_(),n=_(!1),t=_(!1),p=_(!1);s.getHeroList();const R=x(()=>{E("n4r4")},100),L=x(o=>{s.setScroll(o),p.value=o>250},250),A=()=>{var o;(o=g.value)==null||o._setPosition(0,!0)},j=()=>{var o;L(0),(o=k.value)==null||o._clearName()},q=o=>{i.articles.HERO_DEBRIS>=Number(o.price)?w({text:G("r36m",{name:o.name,prop:V.HERO_DEBRIS,count:o.price}),confirm(){i.setGamePropNum("HERO_DEBRIS",Number(o.price),"SUB").then(()=>{i.addHero(o.id)})}}):w({text:G("p89n",{prop:V.HERO_DEBRIS}),confirm(){f.push(be.HERO_LOTTERY)}})};return W(()=>h.query,o=>{o.id?setTimeout(()=>{n.value=!0},100):n.value=!1},{immediate:!0}),X(async()=>{var o;E("h3w0"),(o=g.value)==null||o._setPosition(l.value),await fe(250),t.value=!0}),(o,m)=>(u(),b("div",Ke,[a("div",Ue,[r(J,{name:"to-bottom",appear:""},{default:y(()=>[r(Fe,{ref_key:"heroToolbarRef",ref:k,onChange:m[0]||(m[0]=D=>e(L)(0))},null,512)]),_:1}),r(e(Re),{active:p.value,onBackTop:A},null,8,["active"]),e(c).length&&t.value?(u(),$(e(He),{key:0,ref_key:"heroListRef",ref:g,finish:e(S),loading:e(d),gap:"1rem",count:e(H),onScroll:e(L),onLoadMore:e(s).loadMore},{default:y(()=>[r(Z,{name:"card",appear:""},{default:y(()=>[(u(!0),b(ee,null,oe(e(c),(D,C)=>(u(),b("div",{key:C,class:"hero-card",style:se({"transition-delay":C%e(v)*.025+"s"}),onMouseenter:m[1]||(m[1]=(...N)=>e(R)&&e(R)(...N)),"on@touchstart":m[2]||(m[2]=(...N)=>e(R)&&e(R)(...N))},[r(Oe,{data:D,onExchange:q},null,8,["data"])],36))),128))]),_:1})]),_:1},8,["finish","loading","count","onScroll","onLoadMore"])):O("",!0),e(c).length===0?(u(),$(e(ve),{key:1,tip:"暂无可兑换英雄"})):O("",!0)]),r(e(ye),{type:"heroDebris",onChange:j})]))}}),io=I(Ae,[["__scopeId","data-v-52565a15"]]);export{io as default};
