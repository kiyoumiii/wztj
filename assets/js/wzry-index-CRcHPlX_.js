import{l as O,r as J,C as oe,E as a,F as l,I as c,u as e,S as M,M as N,P as p,Q as b,X as G,O as m,c as D,K as ce,J as j,L as x,v as be,G as $,H as P,T as g,a4 as ge,V as Ce,a0 as $e,A as ke,y as Oe,U as re}from"./wzry-wzry_vue-BxQEaZ6z.js";import{s as L,o as Ie}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{b9 as z,_ as he,a6 as de,b1 as ue,b2 as W,F as B,m as w,y as U,az as Re,ab as Pe,a9 as Ne,p as I,ba as H,bb as we,bc as Ae,bd as Se,be as Y,Y as se,bf as d,r as Ee,K as Te,j as Q,ai as _e,$ as V,b as X,M as ne,C as Ke,bg as pe,n as Me,k as q,J as Le,bh as Ye,G as le}from"./wzry-index-Uq5ghgDZ.js";import{K as Fe}from"./wzry-index-GqFZL04X.js";import{K as Ge}from"./wzry-index-Bksdmu3W.js";import{u as Ue}from"./wzry-wzry_vueuse-CaHOeI9T.js";import{K as ie}from"./wzry-index-DsYqfsh8.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";const Be={class:"reward"},xe=["src"],je={class:"num"},Ve={class:"desc"},Je=O({__name:"index",setup(f){const o=z(),{jump_count:s,receive_coin:n}=L(o),{resetJumpCoinReceive:i}=o,r=J(),y=()=>{n.value!==0&&(Pe({icon:B("jump_coin"),name:Ne.JUMP_COIN,num:n.value,key:"JUMP_COIN"}),i())};return oe(()=>{he&&setTimeout(()=>{de({align:"right-bottom",color:!1,text:ue.ma67,createFn(){W.show(r.value)},btnFn(){W.close()}})},5e3)}),(k,A)=>(a(),l("div",{ref_key:"jumpCoinReceiveRef",ref:r,class:"jump-coin-receive"},[c("div",Be,[c("img",{src:e(B)("jump_coin"),alt:"",class:"icon"},null,8,xe),c("span",je,"×"+M(e(n)),1)]),N((a(),p(e(U),{type:"warning",class:"k-button",disabled:e(n)===0,onClick:y},{default:b(()=>A[0]||(A[0]=[G(" 领取 ")])),_:1},8,["disabled"])),[[e(w),{disabled:e(n)===0}]]),c("div",Ve,"还需跳跃"+M(e(Re).JUMP_COIN_RECEIVE_CLAIM-e(s))+"次",1)],512))}}),De=I(Je,[["__scopeId","data-v-6bc1bece"]]),ze={class:"yi-bao-stage"},We={class:"switch-list"},He=O({__name:"index",setup(f){const o=J(!1),s=n=>{H.toggleDragMove(n)};return oe(()=>{H.body_dom.style.transform="translateY(-75vh)",setTimeout(()=>{we(Ae)},500)}),(n,i)=>(a(),l("div",ze,[c("div",We,[N(m(e(Fe),{modelValue:o.value,"onUpdate:modelValue":[i[0]||(i[0]=r=>o.value=r),s],text:"拖拽浏览"},null,8,["modelValue"]),[[e(w)]])]),m(De),m(e(Se),{type:"big",class:"big-yi-bao"})]))}}),Qe=I(He,[["__scopeId","data-v-630fd405"]]),Xe=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},mode:{},bgColor:{},borderColor:{},bgImg:{}},setup(f){const o=f,s=D(()=>o.mode==="COLOR"?`
      --rate: ${o.rate};
      --bg-color:${o.bgColor};
      --border-color:${o.borderColor};
    `:`
      --rate: ${o.rate};
      --bg-img:url(${o.bgImg});
    `);return(n,i)=>(a(),l("div",{class:j(["antenna",[{animate:n.animate},n.mode]]),style:x(s.value)},i[0]||(i[0]=[ce('<div class="antenna-side antenna-top" data-v-cfc9429e></div><div class="antenna-side antenna-bottom" data-v-cfc9429e></div><div class="antenna-side antenna-left" data-v-cfc9429e></div><div class="antenna-side antenna-right" data-v-cfc9429e></div><div class="antenna-side antenna-front" data-v-cfc9429e></div><div class="antenna-side antenna-back" data-v-cfc9429e></div>',6)]),6))}}),Z=I(Xe,[["__scopeId","data-v-cfc9429e"]]),qe=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},mode:{default:"COLOR"},sides:{},bgColor:{},borderColor:{}},setup(f){const o=f,s=D(()=>o.mode==="COLOR"?`
      --rate: ${o.rate};
      --bg-color:${o.bgColor};
      --border-color:${o.borderColor};
    `:`
      --rate: ${o.rate};
      --side-front-bg:url(${Y(o.sides.front)});
      --side-back-bg:url(${Y(o.sides.back)});
      --side-left-bg:url(${Y(o.sides.left)});
      --side-right-bg:url(${Y(o.sides.right)});
      --side-top-bg:url(${Y(o.sides.top)});
      --side-bottom-bg:url(${Y(o.sides.bottom)});
    `);return(n,i)=>{var r;return a(),l("div",{class:j(["side",[{animate:n.animate},n.mode,{shadow:((r=n.sides)==null?void 0:r.shadow)==="1"}]]),style:x(s.value)},i[0]||(i[0]=[ce('<div class="side-item front" data-v-1221bc84></div><div class="side-item back" data-v-1221bc84></div><div class="side-item top" data-v-1221bc84></div><div class="side-item bottom" data-v-1221bc84></div><div class="side-item left" data-v-1221bc84></div><div class="side-item right" data-v-1221bc84></div>',6)]),6)}}}),ee=I(qe,[["__scopeId","data-v-1221bc84"]]),Ze=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},colors:{}},setup(f){return(o,s)=>(a(),l("div",{class:j(["eye",{animate:o.animate}]),style:x(`--rate: ${o.rate};--iris-color-one:${o.colors[0]};--iris-color-two:${o.colors[1]};`)},s[0]||(s[0]=[c("div",{class:"iris"},[c("div",{class:"pupil"})],-1)]),6))}}),ve=I(Ze,[["__scopeId","data-v-4d71df67"]]),et=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},innerColor:{},tongueColor:{}},setup(f){const o=f;let s;const n=J(!1);return o.animate&&(s=setInterval(()=>{n.value=!n.value},1500)),be(()=>{clearInterval(s)}),(i,r)=>(a(),l("div",{class:j(["mouth",{smile:n.value}]),style:x(`--rate: ${i.rate};--inner-color:${i.innerColor};--tongue-color:${i.tongueColor};`)},r[0]||(r[0]=[c("div",{class:"hole"},[c("div",{class:"teeth"}),c("div",{class:"tongue"})],-1)]),6))}}),me=I(et,[["__scopeId","data-v-97981f08"]]),tt=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},mode:{},borderColor:{},bgImg:{}},setup(f){const o=f,s=D(()=>o.mode==="COLOR"?`
      --rate: ${o.rate};
      --border-color:${o.borderColor};
    `:`
      --rate: ${o.rate};
      --bg-img:url(${o.bgImg});
    `);return(n,i)=>(a(),l("div",{class:j(["annulus",[{animate:n.animate},n.mode]]),style:x(s.value)},[(a(),l($,null,P(4,(r,y)=>c("div",{key:y,style:x(`--i:${r}`),class:"circle"},null,4)),64))],6))}}),te=I(tt,[["__scopeId","data-v-2fe6af2d"]]),at=O({__name:"index",props:{rate:{default:1},animate:{type:Boolean,default:!0},mode:{},bgColor:{},bgImg:{}},setup(f){const o=f,s=D(()=>o.mode==="COLOR"?`
      --rate: ${o.rate};
      --bg-color:${o.bgColor};
    `:`
      --rate: ${o.rate};
      --bg-img:url(${o.bgImg});
    `);return(n,i)=>(a(),l("div",{class:j(["wing",[{animate:n.animate},n.mode]]),style:x(s.value)},i[0]||(i[0]=[c("div",{class:"left-wing"},null,-1)]),6))}}),ae=I(at,[["__scopeId","data-v-c393b91b"]]),ot=O({__name:"index",props:{rate:{default:1},bgColor:{}},setup(f){return(o,s)=>(a(),l("div",{class:"blush",style:x(`--rate: ${o.rate};--bg-color:${o.bgColor}`)},null,4))}}),ye=I(ot,[["__scopeId","data-v-3ec7ed19"]]),fe=O({__name:"index",props:{partKey:{},rate:{default:1}},setup(f){const o=z(),{part_color:s,part_texture:n,temp_part_detail:i}=L(o);return(r,y)=>(a(),l($,null,[r.partKey==="annulus"?(a(),p(te,{key:0,mode:e(i).annulus.type,"bg-img":e(n).annulus,"border-color":e(s).annulus,rate:r.rate},null,8,["mode","bg-img","border-color","rate"])):g("",!0),r.partKey==="antenna"?(a(),p(Z,{key:1,"bg-color":e(s).antenna[0],mode:e(i).antenna.type,"bg-img":e(n).antenna,"border-color":e(s).antenna[1],rate:r.rate},null,8,["bg-color","mode","bg-img","border-color","rate"])):g("",!0),r.partKey==="side"?(a(),p(ee,{key:2,"bg-color":e(s).side[0],mode:e(i).side.type,sides:e(n).side,"border-color":e(s).side[1],rate:r.rate},null,8,["bg-color","mode","sides","border-color","rate"])):g("",!0),r.partKey==="eye"?(a(),p(ve,{key:3,colors:e(s).eye,rate:r.rate},null,8,["colors","rate"])):g("",!0),r.partKey==="mouth"?(a(),p(me,{key:4,"inner-color":e(s).mouth[0],rate:r.rate,"tongue-color":e(s).mouth[1]},null,8,["inner-color","rate","tongue-color"])):g("",!0),r.partKey==="wing"?(a(),p(ae,{key:5,mode:e(i).wing.type,rate:r.rate,"bg-img":e(n).wing,"bg-color":e(s).wing},null,8,["mode","rate","bg-img","bg-color"])):g("",!0),r.partKey==="blush"?(a(),p(ye,{key:6,"bg-color":e(s).blush,rate:r.rate},null,8,["bg-color","rate"])):g("",!0)],64))}}),st={class:"pay-order-detail"},nt={class:"pay-order-list"},rt={class:"left"},lt={class:"part-box"},it={class:"part-name"},ct={class:"right"},dt=["src"],ut={class:"price"},_t=["onClick"],pt={class:"pay-btn"},vt={class:"total-price"},mt={key:0,class:"jump-coin"},yt=["src"],ft={class:"price"},bt={key:1,class:"guess-coin"},gt=["src"],Ct={class:"price"},$t={class:"btns"},kt=O({__name:"index",setup(f){const o=z(),s=se(),{pay_order:n}=L(o),{articles:i}=L(s),{setGamePropNum:r}=s,y=J(),k=D(()=>{let h=0,C=0;return n.value.forEach(_=>{_.partStyle==="COLOR"?h+=Number(_.partPrice):C+=Number(_.partPrice)}),{jumpCoin:h,guessCoin:C}}),A=(h,C)=>{Q({text:_e("vt39",{order:C}),confirm(){o.setPayPart(h,!0),o.resetCurrentPartStyle(h),n.value.length===0&&y.value._close()}})},R=async()=>{if(k.value.jumpCoin>i.value.JUMP_COIN){V(X("wa83",{v:"跳跳币"}),"error");return}if(k.value.guessCoin>i.value.GUESS_COIN){V(X("wa83",{v:"竞猜币"}),"error");return}await r("JUMP_COIN",k.value.jumpCoin,"SUB"),await r("GUESS_COIN",k.value.guessCoin,"SUB"),o.buyAllPart(),await y.value._close(),H.playChangePartAnimation(),V(ne.dl57)},T=()=>{Q({text:Ke.nl88,confirm(){o.resetPayPart(),y.value._close()}})};return(h,C)=>(a(),p(Ce,{to:"body"},[m(e(Te),ge({ref_key:"kDialogRef",ref:y},h.$attrs,{title:"订单详情",width:"50rem",ratio:1,top:"7rem"}),{default:b(()=>[c("div",st,[N((a(),l("div",nt,[(a(!0),l($,null,P(e(n),(_,v)=>(a(),l("div",{key:v,class:"order-item"},[c("div",rt,[c("div",lt,[m(fe,{"part-key":_.partName},null,8,["part-key"])]),c("div",it,M(e(d).PART_KEY_INFO[_.id].name)+"-"+M(e(d).PARTS_KEY_NAME[_.partName]),1)]),c("div",ct,[c("img",{class:"coin-icon",src:e(B)(`${_.partStyle==="COLOR"?"jump_coin":"guess_coin"}`),alt:""},null,8,dt),c("div",ut,M(_.partPrice),1)]),N((a(),l("div",{class:"remove",onClick:S=>A(_.partName,`${e(d).PART_KEY_INFO[_.id].name}-${e(d).PARTS_KEY_NAME[_.partName]}`)},C[0]||(C[0]=[G(" 删除订单 ")]),8,_t)),[[e(w)]])]))),128))])),[[e(Ee)]]),c("div",pt,[c("div",vt,[k.value.jumpCoin>0?(a(),l("div",mt,[c("img",{class:"coin-icon",src:e(B)("jump_coin"),alt:""},null,8,yt),c("div",ft,M(k.value.jumpCoin),1)])):g("",!0),k.value.guessCoin>0?(a(),l("div",bt,[c("img",{class:"coin-icon",src:e(B)("guess_coin"),alt:""},null,8,gt),c("div",Ct,M(k.value.guessCoin),1)])):g("",!0)]),c("div",$t,[N((a(),p(e(U),{type:"warning",onClick:R},{default:b(()=>C[1]||(C[1]=[G("全部购买")])),_:1})),[[e(w)]]),N((a(),p(e(U),{type:"error",onClick:T},{default:b(()=>C[2]||(C[2]=[G("一键清空")])),_:1})),[[e(w)]])])])])]),_:1},16)]))}}),Ot=I(kt,[["__scopeId","data-v-07b1ee73"]]),It={class:"menu-tool"},ht=O({__name:"index",setup(f){const o=z(),{pay_order:s,is_change_part:n,part_type:i}=L(o),{saveOwnedPart:r,resetCurrentPartStyle:y,resetAllPartStyle:k}=o,{playAudio:A}=q(),R=J(!1),T=()=>{R.value=!0},h=()=>{n.value&&(y(),A("pj83"))},C=()=>{n.value&&(k(),A("pj83"))};return Ie((_,v,S)=>{s.value.length?(T(),V(ne.m21j,"error"),S(!1)):s.value.length===0&&n.value?Q({text:"你还未保存部件装扮，是否保存？",confirm(){r(),S()},cancel(){S()}}):S()}),(_,v)=>(a(),l($,null,[c("div",It,[e(s).length===0&&e(n)?N((a(),p(e(U),{key:0,class:"k-button",onClick:e(r)},{default:b(()=>v[1]||(v[1]=[G(" 保存部件 ")])),_:1},8,["onClick"])),[[e(w)]]):g("",!0),e(s).length?N((a(),p(e(U),{key:1,class:"k-button",onClick:T},{default:b(()=>v[2]||(v[2]=[G(" 提交订单 ")])),_:1})),[[e(w)]]):g("",!0),N((a(),p(e(U),{type:"warning",class:"k-button",disabled:!e(n),onClick:h},{default:b(()=>v[3]||(v[3]=[G(" 还原当前部件 ")])),_:1},8,["disabled"])),[[e(w),{text:e(n)?`只还原上次${e(pe)[e(i)]}部件样式`:"",disabled:!e(n)}]]),N((a(),p(e(U),{type:"error",class:"k-button",disabled:!e(n),onClick:C},{default:b(()=>v[4]||(v[4]=[G(" 还原所有部件 ")])),_:1},8,["disabled"])),[[e(w),{text:e(n)?e(Me).i73w:"",disabled:!e(n)}]])]),R.value?(a(),p(Ot,{key:0,modelValue:R.value,"onUpdate:modelValue":v[0]||(v[0]=S=>R.value=S)},null,8,["modelValue"])):g("",!0)],64))}}),Rt=I(ht,[["__scopeId","data-v-6bd2e003"]]),Pt={key:0,class:"mask"},Nt={class:"name"},wt=O({__name:"index",props:{name:{},active:{type:Boolean},owned:{type:Boolean},price:{}},setup(f){const{playAudio:o}=q();return(s,n)=>N((a(),l("div",{class:"shop-window",onClick:n[0]||(n[0]=i=>e(o)("n4r4"))},[c("div",{class:j(["part",{active:s.active}])},[$e(s.$slots,"default",{},void 0,!0),s.owned?g("",!0):(a(),l("div",Pt,n[1]||(n[1]=[c("i",{class:"iconfont wzry-lock"},null,-1)])))],2),c("div",Nt,M(s.name),1)])),[[e(w)]])}}),E=I(wt,[["__scopeId","data-v-a176c5c1"]]),At={class:"colors-textures"},St={key:7,class:"tip"},Et=O({__name:"index",setup(f){const o=z(),{owned_part_id:s,temp_part_detail:n,part_style_type:i,part_type:r}=L(o),{setAnnulusId:y,setAntennaId:k,setBlushId:A,setEyeId:R,setMouthId:T,setSideId:h,setWingId:C}=o,_=()=>S=>{const F=Le(S);return F.sort((t,u)=>s.value.includes(t.id)?-1:s.value.includes(u.id)?1:0),F},v=D(()=>n.value[r.value].id);return(S,F)=>(a(),l("div",At,[e(r)==="annulus"?(a(),l($,{key:0},[e(i)==="COLOR"?(a(!0),l($,{key:0},P(_()(e(d).ANNULUS_COLOR),(t,u)=>(a(),p(E,{key:u,active:v.value===t.id,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),onClick:K=>e(y)(t.id,"COLOR")},{default:b(()=>[m(te,{mode:"COLOR",animate:!1,"border-color":t.color},null,8,["border-color"])]),_:2},1032,["active","name","price","owned","onClick"]))),128)):(a(!0),l($,{key:1},P(_()(e(d).ANNULUS_IMG),(t,u)=>(a(),p(E,{key:u,active:v.value===t.id,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),onClick:K=>e(y)(t.id,"IMG")},{default:b(()=>[m(te,{"bg-img":e(Y)(t.img),animate:!1,mode:"IMG"},null,8,["bg-img"])]),_:2},1032,["active","name","price","owned","onClick"]))),128))],64)):g("",!0),e(r)==="antenna"?(a(),l($,{key:1},[e(i)==="COLOR"?(a(!0),l($,{key:0},P(_()(e(d).ANTENNA_COLOR),(t,u)=>(a(),p(E,{key:u,active:v.value===t.id,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),onClick:K=>e(k)(t.id,"COLOR")},{default:b(()=>[m(Z,{animate:!1,mode:"COLOR","bg-color":t.colors[0],"border-color":t.colors[1]},null,8,["bg-color","border-color"])]),_:2},1032,["active","name","price","owned","onClick"]))),128)):(a(!0),l($,{key:1},P(_()(e(d).ANTENNA_IMG),(t,u)=>(a(),p(E,{key:u,active:v.value===t.id,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),onClick:K=>e(k)(t.id,"IMG")},{default:b(()=>[m(Z,{animate:!1,mode:"IMG","bg-img":e(Y)(t.img)},null,8,["bg-img"])]),_:2},1032,["active","name","price","owned","onClick"]))),128))],64)):g("",!0),e(r)==="blush"?(a(!0),l($,{key:2},P(_()(e(d).BLUSH_COLOR),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(A)(t.id,"COLOR")},{default:b(()=>[m(ye,{animate:!1,"bg-color":t.color},null,8,["bg-color"])]),_:2},1032,["name","price","owned","active","onClick"]))),128)):g("",!0),e(r)==="eye"?(a(!0),l($,{key:3},P(_()(e(d).EYE_COLOR),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(R)(t.id,"COLOR")},{default:b(()=>[m(ve,{animate:!1,colors:t.colors},null,8,["colors"])]),_:2},1032,["name","price","owned","active","onClick"]))),128)):g("",!0),e(r)==="mouth"?(a(!0),l($,{key:4},P(_()(e(d).MOUTH_COLOR),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(T)(t.id,"COLOR")},{default:b(()=>[m(me,{animate:!1,"inner-color":t.colors[0],"tongue-color":t.colors[1]},null,8,["inner-color","tongue-color"])]),_:2},1032,["name","price","owned","active","onClick"]))),128)):g("",!0),e(r)==="side"?(a(),l($,{key:5},[e(i)==="COLOR"?(a(!0),l($,{key:0},P(_()(e(d).SIDE_COLOR),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(h)(t.id,"COLOR")},{default:b(()=>[m(ee,{animate:!1,"bg-color":t.colors[0],"border-color":t.colors[1]},null,8,["bg-color","border-color"])]),_:2},1032,["name","price","owned","active","onClick"]))),128)):(a(!0),l($,{key:1},P(_()(e(d).SIDE_IMG),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(h)(t.id,"IMG")},{default:b(()=>[m(ee,{animate:!1,sides:t,mode:"IMG"},null,8,["sides"])]),_:2},1032,["name","price","owned","active","onClick"]))),128))],64)):g("",!0),e(r)==="wing"?(a(),l($,{key:6},[e(i)==="COLOR"?(a(!0),l($,{key:0},P(_()(e(d).WING_COLOR),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(C)(t.id,"COLOR")},{default:b(()=>[m(ae,{animate:!1,mode:"COLOR","bg-color":t.color},null,8,["bg-color"])]),_:2},1032,["name","price","owned","active","onClick"]))),128)):(a(!0),l($,{key:1},P(_()(e(d).WING_IMG),(t,u)=>(a(),p(E,{key:u,name:e(d).PART_KEY_INFO[t.id].name,price:e(d).PART_KEY_INFO[t.id].price,owned:e(s).includes(t.id),active:v.value===t.id,onClick:K=>e(C)(t.id,"IMG")},{default:b(()=>[m(ae,{animate:!1,mode:"IMG","bg-img":e(Y)(t.img)},null,8,["bg-img"])]),_:2},1032,["name","price","owned","active","onClick"]))),128))],64)):g("",!0),e(i)==="IMG"?(a(),l("div",St,"想要更多贴图可在群内发送贴图名称")):g("",!0)]))}}),Tt=I(Et,[["__scopeId","data-v-7976a0ba"]]),Kt={class:"part-list"},Mt={class:"title"},Lt=["data-text"],Yt={class:"pay-status"},Ft=["src"],Gt={class:"price"},Ut={key:1,class:"owned"},Bt=O({__name:"index",setup(f){const o=z(),s=se(),{articles:n}=L(s),{part_type:i,part_style_type:r,part_selected:y}=L(o),{setPartStyle:k,buyAlonePart:A,setPartType:R}=o,{setGamePropNum:T}=s,h=J(),C=J(0),_={annulus:"圆环",antenna:"天线",blush:"腮红",eye:"眼睛",mouth:"嘴巴",side:"六面",wing:"羽翅"},v=F=>{k(F===0?"COLOR":"IMG")},S=async()=>{const F=y.value.id,t=y.value.type,u=Number(y.value.price);if(t==="COLOR"&&u>n.value.JUMP_COIN){V(X("wa83",{v:"跳跳币"}),"error");return}if(t==="IMG"&&u>n.value.GUESS_COIN){V(X("wa83",{v:"竞猜币"}),"error");return}Q({text:_e("vk62",{name:t==="COLOR"?"跳跳币":"竞猜币",price:u,part:`${Ye[F].name}-${pe[i.value]}`}),confirm(){T(t==="COLOR"?"JUMP_COIN":"GUESS_COIN",u,"SUB"),A(),H.playChangePartAnimation(),V(ne.dl57)}})};return ke(()=>{C.value=r.value==="COLOR"?0:1}),oe(()=>{de({align:"right-bottom",color:!1,text:ue.mu63,createFn(){W.show(h.value._el)},btnFn(){W.close(),R("side"),k("IMG")}})}),(F,t)=>(a(),l("div",Kt,[c("div",Mt,[c("span",{class:"label","data-text":_[e(i)]},M(_[e(i)]),9,Lt),e(d).PART_SUPPORT_IMG.includes(e(i))?(a(),p(e(Ge),{key:0,ref_key:"kSelectRef",ref:h,modelValue:C.value,"onUpdate:modelValue":[t[0]||(t[0]=u=>C.value=u),v],width:"7rem",option:["配色","贴图"]},null,8,["modelValue"])):g("",!0)]),m(Tt),c("div",Yt,[e(y).owned?(a(),l("div",Ut,"已拥有")):(a(),p(e(U),{key:0,type:"warning",class:"k-button",onClick:S},{default:b(()=>[c("img",{src:e(B)(`${e(y).type==="COLOR"?"jump_coin":"guess_coin"}`),alt:"",class:"icon"},null,8,Ft),c("div",Gt,M(e(y).price),1)]),_:1}))])]))}}),xt=I(Bt,[["__scopeId","data-v-559f7af5"]]),jt={class:"personalized-menu"},Vt=["onClick"],Jt=O({__name:"index",setup(f){const o=z(),{part_type:s}=L(o),{setPartType:n}=o,{playAudio:i}=q(),r=Ue("(max-width: 640px)"),y=D(()=>r.value?.65:.75);return(k,A)=>(a(),l("div",jt,[(a(!0),l($,null,P(e(d).PART_KEY_LIST,(R,T)=>N((a(),l("div",{key:T,class:"menu-item",onClick:h=>(e(i)(),e(n)(R))},[c("div",{class:j(["part",{active:e(s)===R}])},[m(fe,{rate:y.value,"part-key":R},null,8,["rate","part-key"])],2)],8,Vt)),[[e(w)]])),128))]))}}),Dt=I(Jt,[["__scopeId","data-v-6a50732e"]]),zt={class:"nav-bar"},Wt={class:"coins"},Ht={class:"jump"},Qt=["src"],Xt={class:"guess"},qt=["src"],Zt=O({__name:"index",setup(f){const o=se(),{articles:s}=L(o);return(n,i)=>(a(),l("div",zt,[i[0]||(i[0]=c("div",{class:"title","data-text":"我的乂宝"},"我的乂宝",-1)),c("div",Wt,[N((a(),l("div",Ht,[c("img",{class:"icon",src:e(B)("jump_coin"),alt:""},null,8,Qt),m(e(ie),{"font-size":"1.5rem",value:e(s).JUMP_COIN},null,8,["value"])])),[[e(w),{type:"TIP",text:e(le).DESC.JUMP_COIN}]]),N((a(),l("div",Xt,[c("img",{class:"icon",src:e(B)("guess_coin"),alt:""},null,8,qt),m(e(ie),{"font-size":"1.5rem",value:e(s).GUESS_COIN},null,8,["value"])])),[[e(w),{type:"TIP",text:e(le).DESC.GUESS_COIN}]])])]))}}),ea=I(Zt,[["__scopeId","data-v-fc77a093"]]),ta={class:"yi-bao"},aa={class:"left"},oa={class:"right"},sa=O({name:"YiBao",__name:"index",setup(f){const{playAudio:o}=q();return Oe(()=>{o("jy55")}),(s,n)=>(a(),l("div",ta,[m(re,{name:"to-right-opacity",appear:""},{default:b(()=>[c("div",aa,[m(ea),m(Qe),m(Rt)])]),_:1}),m(re,{name:"to-left-opacity",appear:""},{default:b(()=>[c("div",oa,[m(xt),m(Dt)])]),_:1})]))}}),fa=I(sa,[["__scopeId","data-v-308d5964"]]);export{fa as default};