import{aw as f,a as E,bE as v,v as A,ay as c,o as _,j as C,z as s,i as a,n as l,h as k,aB as B,t as F,F as g,B as u,k as D}from"./index.22b0f670.js";import{P as $}from"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./eagerComputed.bf21e7e9.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";const w=E({components:{ScrollContainer:v,PageWrapper:$},setup(){const t=A(null),o=()=>{const r=D(t);if(!r)throw new Error("scroll is Null");return r};function i(r){o().scrollTo(r)}function p(){o().scrollBottom()}return{scrollTo:i,scrollRef:t,scrollBottom:p}}}),y={class:"my-4"},b=u(" \u6EDA\u52A8\u5230100px\u4F4D\u7F6E "),h=u(" \u6EDA\u52A8\u5230800px\u4F4D\u7F6E "),T=u(" \u6EDA\u52A8\u5230\u9876\u90E8 "),x=u(" \u6EDA\u52A8\u5230\u5E95\u90E8 "),S={class:"scroll-wrap"},N={class:"p-3"};function P(t,o,i,p,r,V){const n=c("a-button"),d=c("ScrollContainer"),m=c("PageWrapper");return _(),C(m,{title:"\u6EDA\u52A8\u7EC4\u4EF6\u51FD\u6570\u793A\u4F8B",content:"\u57FA\u4E8Eel-scrollbar"},{default:s(()=>[a("div",y,[l(n,{onClick:o[0]||(o[0]=e=>t.scrollTo(100)),class:"mr-2"},{default:s(()=>[b]),_:1}),l(n,{onClick:o[1]||(o[1]=e=>t.scrollTo(800)),class:"mr-2"},{default:s(()=>[h]),_:1}),l(n,{onClick:o[2]||(o[2]=e=>t.scrollTo(0)),class:"mr-2"},{default:s(()=>[T]),_:1}),l(n,{onClick:o[3]||(o[3]=e=>t.scrollBottom()),class:"mr-2"},{default:s(()=>[x]),_:1})]),a("div",S,[l(d,{class:"mt-4",ref:"scrollRef"},{default:s(()=>[a("ul",N,[(_(),k(g,null,B(100,e=>a("li",{key:e,class:"p-2",style:{border:"1px solid #eee"}},F(e),1)),64))])]),_:1},512)])]),_:1})}var M=f(w,[["render",P],["__scopeId","data-v-83ef995e"]]);export{M as default};
