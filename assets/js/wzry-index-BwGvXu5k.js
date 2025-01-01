import{r as h,f as W,l as Z,c as I,w as X,E as K,P as ee,Q as te,I as C,J as T,u as A,F as G,G as ae,H as se,M as O,S as ie,L as ne,N as oe,U as re}from"./wzry-wzry_vue-BxQEaZ6z.js";import{d as $}from"./wzry-wzry_vuePlugin-CVcqpH4P.js";import{aY as D,L as N,B as j,bw as le,bx as ue,aZ as ce,aN as J,by as pe,aV as V,J as Q,aR as H,x as R,Y as ve,bt as de,bz as Y,aG as fe,bs as ge,bv as _e,bu as ye,O as he,m as me,k as we,p as Ee}from"./wzry-index-Uq5ghgDZ.js";const qe=async()=>await D(N.equip),ke=async()=>await D(N.equipDesc),Se=async()=>await D(N.equipEffect),be=async()=>await D(N.equipImage),De=async()=>await D(N.equipLevel),Ne=async()=>await D(N.equipMotivation),Be=async()=>await D(N.equipName),Le=async()=>await D(N.equipNote),Pe=async()=>await D(N.equipPrice),ze=async()=>await D(N.equipSynthetic),Fe=async()=>await D(N.equipType),Me=async()=>{const s=await ke(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},xe=async()=>{const s=await Se(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},Ce=async()=>{const s=await be(),t={};return s.forEach(i=>{t[i.id]={icon:j.IMGBED+i.icon,iconBlur:j.IMGBED+i.iconBlur}}),t},Ke=async()=>{const s=await De(),t={};return s.forEach(i=>{t[i.id]=i}),t},Te=async()=>{const s=await Ne(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},Ae=async()=>{const s=await Be(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},$e=async()=>{const s=await Le(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},Ie=async()=>{const s=await Pe(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},F=async()=>{const s=await ze(),t={};return s.forEach(i=>{t[i.id]=i}),t},Ge=async()=>{const s=await Fe(),t={};return s.forEach(i=>{t[i.id]=i.value}),t},Oe=async()=>{const s=await qe(),t=await Me(),i=await xe(),E=await Ce(),d=await Ke(),f=await Te(),p=await Ae(),g=await $e(),y=await Ie(),k=await Ge(),v=await le(),e=await ue(),l=[];for(let u=0;u<s.length;u++){const _=s[u],{icon:m,iconBlur:b}=E[_],a=i[_].map(c=>({name:e[c.name],num:c.num}));l[u]={id:_,desc:t[_],effect:a,icon:m,iconBlur:ce(b),level:d[_].value,motivation:f[_],name:p[_],note:g[_],price:y[_],type:v[k[_]]}}return l},je=$("atlas",()=>{const s=J(),{all_data:t,setFilterData:i,filter_list:E}=s,d={scroll:s.scroll,loading:s.loading,finish:s.finish,show_list:s.show_list,sort_type:h("倒序"),profession:h("全部"),gender_type:h(0)},{sort_type:f,profession:p,gender_type:g}=d,y=()=>{s.setScroll(0);const v=()=>{if(p.value==="全部")i([...t.value]);else{const u=t.value.filter(_=>_.profession.includes(p.value));i(u)}},e=()=>{const u=[],_=[];E.value.forEach(m=>{m.gender==="男"?u.push(m):_.push(m)}),g.value===1?i(u):g.value===2&&i(_)},l=()=>{f.value==="倒序"&&s.reverseFilterData()};v(),e(),l(),s.resetPage(),H.emit("update-waterfall")},k={setScroll:s.setScroll,loadMore:s.loadMore,async getAtlasList(){const v=await pe(),e=[];v.forEach(l=>{e.push({id:l.id,cover:l.cover,coverBlur:l.coverBlur,poster:l.poster,name:l.name,heroName:"",heroId:l.id,type:"HERO",profession:l.profession,gender:l.gender,posterBlur:l.posterBlur,posterBig:l.posterBig}),l.skins.forEach(u=>{e.push({id:u.id,heroId:l.id,cover:u.cover,coverBlur:u.posterBlur,name:u.name,heroName:l.name,type:"SKIN",profession:l.profession,gender:l.gender,poster:u.poster,posterBlur:u.posterBlur,posterBig:u.posterBig})})}),s.pushAllData(e),y()},setProfessional(v){p.value!==v&&(p.value=v,y())},filterGender(v){g.value=v,y()},sortType(v){f.value!==v&&(f.value=v,y())},searchAtlas(v){f.value="倒序",p.value="全部",g.value=0;const{all_data:e,setFilterData:l}=s;if(v){const u=V(Q(e.value),v,["name","heroName"]);l(u),H.emit("update-waterfall")}else y();s.resetPage()}};return{...d,...k}}),z=s=>Number(s.toString().slice(2)),M=(s,t)=>z(s)<z(t)?(z(s)-1)*100/16+"rem":(z(t)-1)*100/16+"rem",x=(s,t,i)=>{const E=z(s),d=z(t),f=z(i);let p=Math.abs(d-f);return E<d&&(p=Math.abs(E-f)),E>d&&(p=Math.abs(d-f)),E>f&&(p=Math.abs(E-d)),p*100/16+"rem"},He=$("equip",()=>{let s=[],t=[];const i={攻击:[[],[],[]],法术:[[],[],[]],防御:[[],[],[]],移动:[[],[],[]],打野:[[],[],[]],游走:[[],[],[]]},E={攻击:1,法术:2,防御:3,移动:4,打野:5,游走:6},d=W([]),f={category:h(""),active_id:h(0),show_details:h(!1),active_data:h(),synthetic:h({id:0,name:""}),synthetic_id:h([[],[],[]]),equip_list_column:h([[],[],[]]),vertical_line:h([{},{top:"0",height:"0"},{top:"0",height:"0"}])},{category:p,active_id:g,show_details:y,active_data:k,synthetic:v,synthetic_id:e,equip_list_column:l,vertical_line:u}=f,_=async a=>{var c,S,L,w;if(s[1]==="1"){if(e.value[0][0]=a,e.value[1]=[],a.to)for(let o=0;o<a.to.length;o++){const n=a.to[o],r=(await F())[n.id];e.value[1].push(r)}e.value[1].sort((o,n)=>o.id-n.id),e.value[2]=[];for(let o=0;o<e.value[1].length;o++){const n=e.value[1][o],r=(await F())[n.id];r!=null&&r.to&&e.value[2].push(...r.to.map(q=>({id:q.id,name:q.value}))),e.value[2].sort((q,P)=>q.id-P.id)}e.value[1][0]&&(u.value[1]={top:M(g.value,e.value[1][0].id),height:x(g.value,e.value[1][0].id,e.value[1].at(-1).id)}),e.value[2][0]&&(u.value[2]={top:M(e.value[1][0].id,e.value[2][0].id),height:x(e.value[1][0].id,e.value[2][0].id,((c=e.value[2].at(-1))==null?void 0:c.id)||0)})}if(s[1]==="2"){if(e.value[1][0]=a,e.value[0]=[],a.need)for(let o=0;o<a.need.length;o++){const n=a.need[o],r=(await F())[n.id];e.value[0].push(r)}e.value[0].sort(function(o,n){return o.id-n.id}),e.value[2]=[],e.value[2]=((S=a.to)==null?void 0:S.map(o=>({id:o.id,name:o.value})))||[],e.value[0][0]&&(u.value[1]={top:M(e.value[0][0].id,e.value[1][0].id),height:x(e.value[1][0].id,e.value[0][0].id,e.value[0].at(-1).id)}),e.value[2][0]&&(u.value[2]={top:M(e.value[1][0].id,e.value[2][0].id),height:x(e.value[1][0].id,e.value[2][0].id,((L=e.value[2].at(-1))==null?void 0:L.id)||0)})}if(s[1]==="3"){e.value[2][0]=a,e.value[1]=[];for(let o=0;o<a.need.length;o++){const n=a.need[o],r=(await F())[n.id];e.value[1].push(r)}e.value[1].sort(function(o,n){return o.id-n.id}),e.value[0]=[];for(let o=0;o<e.value[1].length;o++){const n=e.value[1][o].need;if(n)for(let r=0;r<(n==null?void 0:n.length);r++){const q=(await F())[n[r].id];e.value[0].push(q)}}e.value[0].sort(function(o,n){return o.id-n.id}),u.value[1]={top:M(e.value[0][0].id,e.value[1][0].id),height:x(e.value[1].at(-1).id,e.value[0][0].id,e.value[0].at(-1).id)},e.value[2][0]&&(u.value[2]={top:M(e.value[1][0].id,e.value[2][0].id),height:x(((w=e.value[2].at(-1))==null?void 0:w.id)||0,e.value[1][0].id,e.value[1].at(-1).id)})}},m=()=>{u.value=[{},{top:"0",height:"0"},{top:"0",height:"0"}],e.value=[[],[],[]]},b={async getEquipList(){t=await Oe(),t.forEach(a=>{i[a.type][a.level-1].push(a)}),b.setType("攻击")},setEquipElement(a){d.push(a)},async setType(a){p.value!==a&&(m(),l.value=i[a],await R(200),p.value=a,y.value=!1,await R(500),this.setEquipActive(+(E[a]+"11")))},async setEquipActive(a=0){if(m(),g.value===a){g.value=0;return}g.value=a,y.value=!0,k.value=t.find(S=>S.id===a);const c=(await F())[a];c&&(s=c.id.toString().split("")||[],v.value=c,_(c))}};return{...f,...b}}),Re=$("skin",()=>{const s=ve(),t=J(),i={loading:t.loading,scroll:t.scroll,finish:t.finish,all_data:t.all_data,filter_list:t.filter_list,show_list:t.show_list,profession:h("全部"),price_type:h("全部价格"),skin_type:h("全部类型"),same_name:h("全部同名"),have_type:h("全部皮肤"),gender_type:h(0),same_name_list:h([]),skin_type_list:h([])},{all_data:E,filter_list:d,gender_type:f,profession:p,price_type:g,skin_type:y,same_name:k,same_name_list:v,skin_type_list:e,have_type:l}=i,u=a=>{const c={};a.forEach(S=>{var L;c[L=S.name]??(c[L]=0),c[S.name]++});for(const S in c)c[S]<3&&delete c[S];v.value=Object.keys(c),v.value.unshift("全部同名")},_=a=>{e.value=[...new Set(a.map(c=>c.alias))],Y(e.value,"label"),e.value.unshift("全部类型")},m=()=>{t.setScroll(0);const a=()=>{if(p.value==="全部")t.setFilterData([...E.value]);else{const n=E.value.filter(r=>r.profession.includes(p.value));t.setFilterData([...n])}},c=()=>{const n=[],r=[];d.value.forEach(q=>{q.gender==="男"?n.push(q):r.push(q)}),f.value===1?t.setFilterData(n):f.value===2&&t.setFilterData(r)},S=()=>{if(y.value==="全部类型")return;const n=d.value.filter(r=>r.alias===y.value);t.setFilterData(n)},L=()=>{if(k.value==="全部同名")return;const n=d.value.filter(r=>r.name===k.value);t.setFilterData(n)},w=()=>{if(g.value==="全部价格")return;const n={免费:r=>{const q=["积分夺宝","星会员15级","贵族专属","荣耀战令获取","会员限定","限时兑换"],P=r.filter(B=>!q.includes(B.price.toString())&&isNaN(Number(B.price)));return Y(P,"price")},由低到高:r=>r.filter(P=>!isNaN(Number(P.price))).sort((P,B)=>Number(P.price)-Number(B.price)),由高到低:r=>{const q=r.filter(B=>!isNaN(Number(B.price)));return[...r.filter(B=>B.type.toString().indexOf("26.png")!==-1),...q].sort((B,U)=>Number(U.price)-Number(B.price))}};t.setFilterData(n[g.value](d.value))},o=()=>{let n=[];l.value!=="全部皮肤"&&(l.value==="未拥有"&&(n=d.value.filter(r=>!s.skin_list.includes(r.id))),l.value==="已拥有"&&(n=d.value.filter(r=>s.skin_list.includes(r.id))),t.setFilterData(n))};a(),c(),S(),L(),t.reverseFilterData(),w(),o(),b.resetPage()},b={setScroll:t.setScroll,resetPage:t.resetPage,loadMore:t.loadMore,async getSkin(){const a=await de();t.pushAllData(a),m(),u(a),_(a)},setProfessional(a){p.value!==a&&(p.value=a,m())},filterGender(a){f.value=a,m()},filterSkinType(a){y.value!==a&&(y.value=a,k.value="全部同名",m())},filterSameName(a){k.value!==a&&(k.value=a,y.value="全部类型",g.value="全部价格",m())},sortPrice(a){g.value!==a&&(g.value=a,k.value="全部同名",m())},haveType(a){l.value!==a&&(l.value=a,m())},searchSkin(a){if(p.value="全部",g.value="全部价格",y.value="全部类型",k.value="全部同名",l.value="全部皮肤",f.value=0,a){const c=V(Q(E.value),a,["name","heroName","category"],!0);t.setFilterData(c)}else m();b.resetPage()}};return{...i,...b}}),Ye=["onClick"],Je={class:"name"},Ve=Z({__name:"index",props:{type:{default:"hero"}},emits:["change"],setup(s,{emit:t}){const i=s,E=t,d=fe(),f=Re(),p=je(),g=He(),y=ge(),k=_e(),v=ye(),{playAudio:e}=we(),{collapse:l,setCollapse:u}=he(),_=[{name:"全部",icon:"wzry-quanbu"},{name:"坦克",icon:"wzry-tanke"},{name:"战士",icon:"wzry-zhanshi"},{name:"刺客",icon:"wzry-cike"},{name:"法师",icon:"wzry-fashi"},{name:"射手",icon:"wzry-sheshou"},{name:"辅助",icon:"wzry-fuzhu"}],m=[{name:"攻击",icon:"wzry-gongji"},{name:"法术",icon:"wzry-fashu"},{name:"防御",icon:"wzry-fangyu"},{name:"移动",icon:"wzry-yidong"},{name:"打野",icon:"wzry-daye"},{name:"游走",icon:"wzry-youzou"}],b=h(0),a=I(()=>["hero","heroDebris","skin","skinDebris","atlas","kingCrystal"].includes(i.type)?_:m),c=I(()=>({hero:d.profession,heroDebris:v.profession,skin:f.profession,skinDebris:k.profession,kingCrystal:y.profession,atlas:p.profession,equip:g.category})[i.type]),S=w=>{({hero:()=>d.setProfessional(w),heroDebris:()=>v.setProfessional(w),skin:()=>f.setProfessional(w),skinDebris:()=>k.setProfessional(w),kingCrystal:()=>y.setProfessional(w),atlas:()=>p.setProfessional(w),equip:()=>g.setType(w)})[i.type](),window.innerWidth<960&&u(!0),E("change"),e()},L=w=>{const o=w.target;b.value=o.getBoundingClientRect().top-75};return X(c,w=>{w==="全部"&&(b.value=0)}),(w,o)=>(K(),ee(re,{name:"to-left",appear:""},{default:te(()=>[C("div",{class:T(["filter-sidebar",{collapse:A(l)}])},[(K(!0),G(ae,null,se(a.value,(n,r)=>O((K(),G("div",{key:r,class:T(["filter-type",{active:n.name===c.value}]),onClick:q=>(S(n.name),L(q))},[C("i",{class:T(["iconfont",n.icon])},null,2),C("span",Je,ie(w.$t(n.name)),1)],10,Ye)),[[A(me),{text:"分类："+n.name}]])),128)),O(C("div",{class:"slider",style:ne({top:b.value+"px"})},null,4),[[oe,!A(l)]])],2)]),_:1}))}}),Ze=Ee(Ve,[["__scopeId","data-v-34dbc844"]]);export{je as A,He as E,Ze as F,Re as S};
