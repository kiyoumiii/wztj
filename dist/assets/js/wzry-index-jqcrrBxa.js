import{l as K,r as F,c as st,E as a,F as l,I as s,u as t,T as A,L as k,G as b,H as G,S,M as f,P as E,Q as i,y as et,O as n,U as h}from"./wzry-wzry_vue-BxQEaZ6z.js";import{u as at,L as ot,S as lt}from"./wzry-useLotteryPlay-_Zs7slVZ.js";import{s as V}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{bj as it,A as nt,a2 as rt,g as z,F as p,G as r,bk as U,bl as dt,m as O,n as x,y as g,x as d,p as j,k as ut}from"./wzry-index-CXWpIXXI.js";import"./wzry-index-6eIXka_u.js";import"./wzry-index-xiKPlI87.js";import"./wzry-index-iFGEKDVB.js";import"./wzry-wzry_axios-C_xhNtcK.js";import"./wzry-wzry_dayjs-RHYc_Oz-.js";import"./wzry-wzry_lodash-BosuxZz1.js";import"./wzry-wzry_pinyin_pro-CKM55ih0.js";import"./wzry-wzry_i18n-DZ3KhxG4.js";import"./wzry-wzry_vueuse-CaHOeI9T.js";const ct={class:"play-area"},_t={class:"double-status"},pt={key:0,class:"status"},vt=["src"],mt={key:1,class:"status"},yt=["src"],kt={class:"fix-position"},bt={class:"award"},ft={key:0,class:"tag"},Et=["src"],Ot={class:"text"},xt={class:"spin"},gt={class:"content"},Tt={class:"luck"},Rt={class:"luck-value"},Lt=["data-text"],Ct={class:"base"},wt=["src"],Nt=["src"],At=["src"],St=["src"],ht=K({__name:"index",setup(q){const v=it(),I=nt(),H=rt(),{setLuckValue:$,resetHeroLuck:Q}=v,{hero_lucky:T}=V(v),{user_data:P}=V(I),{gift_index:m,getLotteryIndex:M,last_reward_position:u,checkAloneNotCount:W,setLastPosition:J,have_alone_free:y,have_multiple_free:R,have_alone_discount:L,have_multiple_discount:C,calcAloneReward:X,calcMultipleReward:Z,checkMultipleNotCount:tt}=at("HERO"),c=F(),w=F(0),Y=st(()=>H.config.lotteryAnimation),N=async()=>{W()||(M(),await d(),w.value=2,await d(),c.value=u.value-u.value%360+m.value*36+360*2,await d(2e3),J(c.value),$("HERO"),X())},D=B=>{if(tt(B,N))return;const e=[],o=async()=>{if(await d(),w.value=1,await d(),c.value=u.value-u.value%360+m.value*36+360*1,await d(Y.value?1e3:0),$("HERO"),U.HERO[m.value].type==="KING_CRYSTAL"&&Q(),u.value=c.value,e.push(m.value),M(),e.length<5){setTimeout(o,Y.value?250:0);return}Z(e)};o()};return(B,e)=>(a(),l("div",ct,[s("div",_t,[t(P).doubleGoldCardExpireTime!==0?(a(),l("div",pt,[s("img",{src:t(z)("double_gold_status"),alt:"",class:"icon"},null,8,vt),e[2]||(e[2]=s("span",{class:"text"},"×2倍",-1))])):A("",!0),t(P).doubleExpCardExpireTime!==0?(a(),l("div",mt,[s("img",{src:t(z)("double_exp_status"),alt:"",class:"icon"},null,8,yt),e[3]||(e[3]=s("span",{class:"text"},"×2倍",-1))])):A("",!0)]),s("div",kt,[s("div",{class:"turntable",style:k({transform:`rotate(${-c.value}deg)`,transitionDuration:w.value+"s"})},[s("div",bt,[(a(!0),l(b,null,G(t(U).HERO,(o,_)=>(a(),l("div",{key:_,class:"award-item",style:k(`--i:${_}`)},[o.num?(a(),l("div",ft,S(o.num),1)):A("",!0),s("img",{src:t(p)(t(r).ICON[o.type]),alt:"",class:"icon"},null,8,Et),s("div",Ot,S(t(r).NAME[o.type]),1)],4))),128))])],4),e[5]||(e[5]=s("div",{class:"turntable-mask"},null,-1)),s("div",xt,[s("div",gt,[s("div",Tt,[s("div",Rt,[s("div",{class:"value","data-text":t(T)},S(t(T)),9,Lt)]),e[4]||(e[4]=s("div",{class:"luck-label","data-text":"幸运值"},"幸运值",-1))])]),s("div",{class:"waves",style:k(`--height:${t(T)/t(dt).hero[1]*100}%`)},[(a(),l(b,null,G(50,(o,_)=>s("div",{key:_,style:k({animationDelay:_*.05+"s"}),class:"wave"},null,4)),64))],4)])]),s("div",Ct,[t(y)?(a(),l(b,{key:0},[f((a(),E(t(g),{disabled:!t(y),class:"k-button",type:"warning",onClick:N},{default:i(()=>[s("img",{src:t(p)(t(r).ICON.HERO_LOTTERY_COIN),alt:"",class:"icon"},null,8,wt),e[6]||(e[6]=s("span",{class:"num"},"×1",-1)),e[7]||(e[7]=s("div",{class:"text"},"夺宝一次",-1))]),_:1},8,["disabled"])),[[t(O),{disabled:!t(y),text:t(y)?"":t(x).zk84}]]),f((a(),E(t(g),{disabled:!t(R),class:"k-button",type:"warning",onClick:e[0]||(e[0]=o=>D("FREE"))},{default:i(()=>[s("img",{src:t(p)(t(r).ICON.HERO_LOTTERY_COIN),alt:"",class:"icon"},null,8,Nt),e[8]||(e[8]=s("span",{class:"num"},"×5",-1)),e[9]||(e[9]=s("div",{class:"text"},"夺宝五次",-1))]),_:1},8,["disabled"])),[[t(O),{disabled:!t(R),text:t(R)?"":t(x).c2y9}]])],64)):(a(),l(b,{key:1},[f((a(),E(t(g),{disabled:!t(L),class:"k-button",type:"warning",onClick:N},{default:i(()=>[s("img",{src:t(p)(t(r).ICON.HERO_LOTTERY_STONE),alt:"",class:"icon"},null,8,At),e[10]||(e[10]=s("span",{class:"num"},"×1",-1)),e[11]||(e[11]=s("div",{class:"text"},"夺宝一次",-1))]),_:1},8,["disabled"])),[[t(O),{disabled:!t(L),text:t(L)?"":t(x).zk84}]]),f((a(),E(t(g),{disabled:!t(C),class:"k-button",type:"warning",onClick:e[1]||(e[1]=o=>D("DEDUCTION"))},{default:i(()=>[s("img",{src:t(p)(t(r).ICON.HERO_LOTTERY_STONE),alt:"",class:"icon"},null,8,St),e[12]||(e[12]=s("span",{class:"num"},"×5",-1)),e[13]||(e[13]=s("div",{class:"text"},"夺宝五次",-1))]),_:1},8,["disabled"])),[[t(O),{disabled:!t(C),text:t(C)?"":t(x).c2y9}]])],64))])]))}}),It=j(ht,[["__scopeId","data-v-0cd73ee1"]]),Ht={class:"seize-treasures"},$t={class:"main"},Pt=K({name:"LotteryHero",__name:"index",setup(q){const{playAudio:v}=ut();return et(()=>{v("bq69")}),(I,H)=>(a(),l("div",Ht,[n(h,{name:"to-bottom",appear:""},{default:i(()=>[n(ot,{type:"HERO"})]),_:1}),s("div",$t,[n(h,{name:"to-right-opacity",appear:""},{default:i(()=>[n(It)]),_:1}),n(h,{name:"to-left-opacity",appear:""},{default:i(()=>[n(lt,{type:"HERO"})]),_:1})])]))}}),Wt=j(Pt,[["__scopeId","data-v-272c7f17"]]);export{Wt as default};
