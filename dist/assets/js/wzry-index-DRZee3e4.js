import{l as s,r as n,w as l,E as c,F as u}from"./wzry-wzry_vue-BxQEaZ6z.js";import{p as d}from"./wzry-index-CXWpIXXI.js";const p=["src"],i=s({__name:"index",props:{link:{},muted:{type:Boolean,default:!1}},setup(r){const t=r,e=n(),o=async()=>{try{if(!e.value)return;await e.value.play(),e.value.volume=.25,e.value.muted=t.muted}catch{setTimeout(()=>{o()},1e3)}};return l(()=>t.muted,a=>{e.value&&(e.value.muted=a)}),(a,m)=>(c(),u("video",{ref_key:"videoPlayer",ref:e,autoplay:"",muted:"",src:a.link,class:"k-video",onCanplay:o,onEnded:o},null,40,p))}}),f=d(i,[["__scopeId","data-v-e593963b"]]);export{f as K};
