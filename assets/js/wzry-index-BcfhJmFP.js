import{l as P,r as m,E as S,F as y,I as M,O as _,u as s,a as X,C as U,o as Z,c as V,w as ee,y as te,x as oe,Q as ae,U as se,M as H,G as ne,H as le,L as re,J as ie,S as K,T as R}from"./wzry-wzry_vue-BxQEaZ6z.js";import{s as G}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{A as W,F as ue}from"./wzry-index-BwGvXu5k.js";import{aK as ce,p as J,Y as de,O as pe,aD as A,n as ve,aC as D,aQ as fe,aR as F,r as he,s as me,m as _e,aS as ge,k as xe,aJ as O,t as z}from"./wzry-index-Uq5ghgDZ.js";import{F as Se,K as ye}from"./wzry-index-BPj1L2tm.js";import{S as we}from"./wzry-index-HlKTNfsj.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";const be={class:"savor-toolbar"},ke={class:"filter-select"},Ie=P({__name:"index",emits:["change"],setup(k,{expose:c,emit:o}){const l=o,n=W(),{sort_type:u,gender_type:g}=G(n),d=["正序","倒序"],r=m(""),v=()=>{r.value="",l("change")},t=x=>{n.sortType(d[x]),v()},f=x=>{n.filterGender(x),v()},p=()=>{n.searchAtlas(r.value),l("change")};return c({_clearName:v}),(x,h)=>(S(),y("div",be,[M("div",ke,[_(s(ce),{"sort-text":s(u),options:d,onSelect:t},null,8,["sort-text"])]),_(s(Se),{modelValue:s(g),"onUpdate:modelValue":[h[0]||(h[0]=w=>X(g)?g.value=w:null),f]},null,8,["modelValue"]),_(s(we),{modelValue:r.value,"onUpdate:modelValue":h[1]||(h[1]=w=>r.value=w),onChange:p},null,8,["modelValue"])]))}}),Te=J(Ie,[["__scopeId","data-v-fc6c7fce"]]),Me=k=>{const c={count:m(2)},{count:o}=c,l=()=>{const n=window.innerWidth;n>=3e3?o.value=8:n>=2500?o.value=7:n>=2e3?o.value=6:n>=1500?o.value=5:n>=1e3?o.value=4:n>=500?o.value=3:n<500&&(o.value=2),k()};return U(()=>{l()}),window.addEventListener("resize",l),Z(()=>{window.removeEventListener("resize",l)}),{...c}},$e=k=>{const{count:c,gap:o,num:l}=k,n={children_position:m([])},{children_position:u}=n;return{...n,...{updatePosition:async()=>{var v;if(l.value===0)return;const d=[],r={minHeight:0,minIndex:0};for(let t=0;t<l.value;t++){const{offsetWidth:f,offsetHeight:p}=document.querySelector(`#item-${t}`)||{};(v=u.value)[t]??(v[t]={left:0,top:0}),c.value>t?(u.value[t].left=(f+o)*t,u.value[t].top=0,d.push(u.value[t].top+p)):(r.minHeight=Math.min(...d),r.minIndex=d.indexOf(r.minHeight),u.value[t].top=r.minHeight+o,u.value[t].left=(f+o)*r.minIndex,d[r.minIndex]=u.value[t].top+p)}}}}},He={class:"savor"},Re={class:"savor-main"},Ce=["id","onMouseenter","onMouseup","onTouchstart"],Ee={key:0,class:"hero-name"},Be={key:1,class:"skin-name"},Le=["src"],Ne=P({name:"Savor",__name:"index",setup(k){const c=de(),o=W(),{show_list:l,scroll:n,finish:u,loading:g}=G(o),{playAudio:d}=xe(),{count:r}=Me(()=>{b()}),{updatePosition:v,children_position:t}=$e({count:r,gap:15,num:V(()=>l.value.length)});pe(()=>{b()});const f=m(),p=m(),x=m(),h=m(0),w=m(!1);o.getAtlasList();const C=V(()=>(a,i)=>a==="HERO"&&!c.hero_list[i]?{text:A("a20t",{v:"英雄"}),disabled:!0}:a==="SKIN"&&!c.skin_list.includes(i)?{text:A("a20t",{v:"皮肤"}),disabled:!0}:{text:ve.o12u,disabled:!1}),E=(a,i)=>{h.value=a,new Image().src=i},Q=(a,i,e)=>{if(i==="HERO"){if(!O(e))return;z({id:e,parent:a.target,type:"SKIN"})}else{if(!O(e,"SKIN"))return;z({id:e,parent:a.target,type:"SKIN"})}},b=D(()=>{v(),p.value.style.height="0",setTimeout(()=>{p.value.style.height=p.value.scrollHeight+"px"},250)},250),B=D(a=>{o.setScroll(a),w.value=a>250},250),q=()=>{o.loadMore()},I=(a,i=!1)=>{var e;(e=f.value)==null||e.scroll({top:a,behavior:i?"smooth":"auto"})},Y=()=>{I(0,!0)},j=()=>{var a;I(0),b(),(a=x.value)==null||a._clearName()};return ee(()=>l.value.length,b),U(()=>{new fe({parent:f.value,loadHeight:10},{load(){g.value||u.value||q()},scroll:a=>{B(a)}})}),te(()=>{d("gz76"),b(),I(n.value),F.on("update-waterfall",()=>{I(0),b()})}),oe(()=>{F.off("update-waterfall")}),(a,i)=>(S(),y("div",He,[M("div",Re,[_(se,{name:"to-bottom",appear:""},{default:ae(()=>[_(Te,{ref_key:"savorToolbarRef",ref:x,onChange:i[0]||(i[0]=e=>s(B)(0))},null,512)]),_:1}),_(s(ye),{active:w.value,onBackTop:Y},null,8,["active"]),H((S(),y("div",{ref_key:"waterfallBoxRef",ref:f,class:"waterfall-box"},[M("div",{ref_key:"waterfallRef",ref:p,class:"waterfall"},[s(l).length?(S(!0),y(ne,{key:0},le(s(l),(e,$)=>{var L,N;return H((S(),y("div",{id:"item-"+$,key:e.poster,style:re({left:((L=s(t)[$])==null?void 0:L.left)+"px",top:((N=s(t)[$])==null?void 0:N.top)+"px"}),class:ie([{active:h.value===e.heroId},"atlas-card"]),onMouseenter:T=>E(e.heroId,e.posterBlur),onMouseup:T=>Q(T,e.type,e.heroId),onTouchstart:T=>E(e.heroId,e.posterBlur),onMouseleave:i[1]||(i[1]=T=>h.value=0)},[e.type==="HERO"?(S(),y("div",Ee,K(e.name),1)):R("",!0),e.type==="SKIN"?(S(),y("div",Be,K(e.name),1)):R("",!0),H(M("img",{class:"bg",src:e.coverBlur},null,8,Le),[[s(me),{img:e.cover}]])],46,Ce)),[[s(_e),{disabled:C.value(e.type,e.id).disabled,text:C.value(e.type,e.id).text}]])}),128)):R("",!0)],512),_(s(ge),{loading:s(g),class:"load-more",finish:s(u)},null,8,["loading","finish"])])),[[s(he)]])]),_(s(ue),{type:"atlas",onChange:j})]))}}),Qe=J(Ne,[["__scopeId","data-v-1f03eb62"]]);export{Qe as default};
