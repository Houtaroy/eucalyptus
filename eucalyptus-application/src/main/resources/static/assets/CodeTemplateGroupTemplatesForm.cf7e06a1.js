var H=Object.defineProperty,J=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var I=(a,t,e)=>t in a?H(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,R=(a,t)=>{for(var e in t||(t={}))Q.call(t,e)&&I(a,e,t[e]);if(T)for(var e of T(t))W.call(t,e)&&I(a,e,t[e]);return a},M=(a,t)=>J(a,L(t));import{ci as X,a as b,v as p,o as d,j as m,z as c,n as v,k as o,b7 as Y,cf as x,l as k,x as Z,I as ee,h as te,t as ne,cG as ae,bl as le,B as D}from"./index.22b0f670.js";/* empty css              */import{C as ue,g as re}from"./index.dba58466.js";import{b as oe}from"./index.1575f4f2.js";import{u as se}from"./uniqueId.195db580.js";import{C as S,R as ie}from"./index.06908fa8.js";import"./useWindowSizeFn.7341961c.js";import"./eagerComputed.bf21e7e9.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";function N(){return{key:se("file"),name:"",content:"",isDirectory:!1,state:{renaming:!0}}}function A(a){const t=[];return a.forEach(e=>{const n=Object.assign(N(),{state:{renaming:!1}},e);e.children&&(n.children=A(e.children)),t.push(n)}),t}function U(a){const t=[];return a.forEach(e=>{const n=X(e,"name","content","isDirectory");e.children&&(n.children=U(e.children)),t.push(n)}),t}function V(a,t){let e=null;if(t.length<=0)return e;if(e=t[t.findIndex(n=>n.key===a)],!e){for(const n of t)e=V(a,n.children||[]);if(e)return e}return e}function C(a,t){if(t.length<=0)return!1;const e=t.findIndex(n=>n.key===a);if(e>=0)return t.splice(e,1),!0;for(const n of t)if(C(a,n.children||[]))return!0;return!1}const ce={key:1},fe=D("\u65B0\u5EFA\u6587\u4EF6..."),de=D("\u91CD\u547D\u540D..."),me=D("\u5220\u9664"),pe=b({__name:"BasicFileTree",props:{title:null,files:null},emits:["select"],setup(a,{expose:t,emit:e}){const n=a,g={mounted:r=>r.focus()};function h(r){u.value[0].children=A(r)}function F(){return U(u.value[0].children||[])}const u=p([{key:"_root",name:n.title,content:"",isDirectory:!0,isRoot:!0,state:{renaming:!1}}]);h(n.files||[]);const i=p(["_root"]),l=p(null);function j(r,s){var f;e("select",(f=s.node)==null?void 0:f.dataRef)}function G(){var s;const r=N();(s=u.value[0].children)==null||s.push(r),l.value=r}function K(r){const s=V(r,u.value);s&&(l.value=s,l.value.state.renaming=!0)}function w(){l.value&&(l.value.name?l.value.state.renaming=!1:(C(l.value.key,u.value),l.value=null))}function q(r){C(r,u.value)}const _=new Map;_.set("newFile",G),_.set("rename",K),_.set("delete",q);function z(r,s){const f=_.get(s);f&&f(r)}return t({setFiles:h,getFiles:F}),(r,s)=>(d(),m(o(oe),{"tree-data":u.value,"expanded-keys":i.value,onSelect:j,onContextmenu:s[0]||(s[0]=le(()=>{},["prevent"]))},{title:c(({key:f,name:O,isDirectory:P,isRoot:B})=>[v(o(ae),{trigger:["contextmenu"]},{overlay:c(()=>[v(o(Y),{onClick:({key:y})=>z(f,y)},{default:c(()=>[P?(d(),m(o(x),{key:"newFile"},{default:c(()=>[fe]),_:1})):k("",!0),B?k("",!0):(d(),m(o(x),{key:"rename"},{default:c(()=>[de]),_:1})),B?k("",!0):(d(),m(o(x),{key:"delete"},{default:c(()=>[me]),_:1}))]),_:2},1032,["onClick"])]),default:c(()=>{var y,E;return[((y=l.value)==null?void 0:y.key)===f&&((E=l.value)==null?void 0:E.state.renaming)?Z((d(),m(o(ee),{key:0,value:l.value.name,"onUpdate:value":$=>l.value.name=$,onBlur:w,onPressEnter:w},null,8,["value","onUpdate:value"])),[[g]]):(d(),te("span",ce,ne(O),1))]}),_:2},1024)]),_:1},8,["tree-data","expanded-keys"]))}}),Be=b({__name:"CodeTemplateGroupTemplatesForm",setup(a,{expose:t}){const e=p(null),n=p(null);function g(u){n.value=u}function h(u){var i;n.value=null,(i=e.value)==null||i.setFiles(u.map(l=>M(R({},l),{isDirectory:!1})))}function F(){const u=[];return e.value&&e.value.getFiles().forEach(i=>{u.push({name:i.name,content:i.content})}),u}return t({setTemplates:h,getTemplates:F}),(u,i)=>(d(),m(o(ie),null,{default:c(()=>[v(o(S),{span:8},{default:c(()=>[v(o(pe),{ref_key:"treeRef",ref:e,title:"\u6A21\u677F\u5217\u8868",onSelect:g},null,512)]),_:1}),v(o(S),{span:16},{default:c(()=>[n.value&&!n.value.isDirectory?(d(),m(o(ue),{key:0,value:n.value.content,"onUpdate:value":i[0]||(i[0]=l=>n.value.content=l),mode:o(re)(n.value.name)},null,8,["value","mode"])):k("",!0)]),_:1})]),_:1}))}});export{Be as default};
