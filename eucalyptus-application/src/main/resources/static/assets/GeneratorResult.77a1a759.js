import{a as g,v as d,ay as j,o as u,h as v,n as o,z as e,k as a,F as y,aB as C,j as k,B as E,a2 as P}from"./index.2084e233.js";/* empty css              */import{T as V}from"./index.1d81dd4b.js";import{C as R,g as D}from"./index.295da945.js";import{T as b}from"./TabPane.94c20b7e.js";import"./index.861ad678.js";import{R as w,C as B}from"./index.4fefe693.js";import"./useRefs.457ce1af.js";import"./PlusOutlined.0ccd6f9e.js";import"./useWindowSizeFn.421f2d0c.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";const M=E("\u4E0A\u4E00\u6B65"),N=E("\u4E0B\u8F7D"),X=g({__name:"GeneratorResult",emits:["prev","download"],setup(z,{expose:h,emit:_}){const s=d(),i=d(),m=d(),p=d(new Map);function x(){_("prev")}function T(){_("download")}function U(f){s.value=f,i.value=P(f),m.value=i.value[0],i.value.forEach(n=>{var l;p.value.set(n,(l=s.value)==null?void 0:l[n][0].name)})}return h({setPreview:U}),(f,n)=>{const l=j("a-button");return u(),v("div",null,[o(a(w),{type:"flex",justify:"center"},{default:e(()=>[o(a(V),{modelValue:m.value,"onUpdate:modelValue":n[0]||(n[0]=c=>m.value=c),"tab-position":"left"},{default:e(()=>[(u(!0),v(y,null,C(s.value,(c,r)=>(u(),k(a(b),{key:r,tab:r},{default:e(()=>[o(a(V),{modelValue:p.value[r],"onUpdate:modelValue":t=>p.value[r]=t,"tab-position":"top"},{default:e(()=>[(u(!0),v(y,null,C(c,t=>(u(),k(a(b),{key:t.name,tab:t.name},{default:e(()=>[o(a(R),{value:t.code,"onUpdate:value":F=>t.code=F,mode:a(D)(t.name),readonly:""},null,8,["value","onUpdate:value","mode"])]),_:2},1032,["tab"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1032,["tab"]))),128))]),_:1},8,["modelValue"])]),_:1}),o(a(w),{type:"flex",justify:"center"},{default:e(()=>[o(a(B),{span:4},{default:e(()=>[o(l,{onClick:x},{default:e(()=>[M]),_:1})]),_:1}),o(a(B),{span:4},{default:e(()=>[o(l,{type:"primary",onClick:T},{default:e(()=>[N]),_:1})]),_:1})]),_:1})])}}});export{X as default};