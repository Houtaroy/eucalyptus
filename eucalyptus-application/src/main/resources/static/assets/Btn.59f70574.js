var C=(t,n,c)=>new Promise((l,_)=>{var E=i=>{try{r(c.next(i))}catch(e){_(e)}},p=i=>{try{r(c.throw(i))}catch(e){_(e)}},r=i=>i.done?l(i.value):Promise.resolve(i.value).then(E,p);r((c=c.apply(t,n)).next())});import{aw as k,a as P,dz as v,bw as b,bG as g,s as w,f as M,ay as m,bQ as S,o as a,j as d,z as u,n as o,i as A,t as x,h as T,l as f,x as h,F as $,fw as N,B as s}from"./index.22b0f670.js";import{A as V}from"./index.7026b45b.js";import{D as W}from"./index.65ddfc64.js";import j from"./CurrentPermissionMode.2a4e37b2.js";import{A as z}from"./index.bdac0f38.js";import{P as I}from"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useSize.db33a410.js";import"./eagerComputed.bf21e7e9.js";import"./useWindowSizeFn.7341961c.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./transButton.bac65e0e.js";const U=P({components:{Alert:V,PageWrapper:I,CurrentPermissionMode:j,Divider:W,Authority:z},setup(){const{hasPermission:t}=v(),n=b(),c=g(),l=w(),_=M(()=>c.getProjectConfig.permissionMode===N.BACK);function E(p){return C(this,null,function*(){const r="fakeToken"+p;l.setToken(r),l.getUserInfoAction(),n.changePermissionCode()})}return{hasPermission:t,permissionStore:n,switchToken:E,isBackPermissionMode:_}}}),G=s(" \u5F53\u524D\u62E5\u6709\u7684code\u5217\u8868: "),K=s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A2) "),L=s(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A1,\u9ED8\u8BA4) "),Q=s("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650"),q=s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),H=s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),J=s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),O=s("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650"),R=s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),X=s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),Y=s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),Z=s("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),uu=s(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),eu=s(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),ou=s(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function su(t,n,c,l,_,E){const p=m("CurrentPermissionMode"),r=m("Divider"),i=m("Alert"),e=m("a-button"),F=m("Authority"),y=m("PageWrapper"),B=S("auth");return a(),d(y,{contentBackground:"",title:"\u6309\u94AE\u6743\u9650\u63A7\u5236",contentClass:"p-4"},{default:u(()=>[o(p),A("p",null,[G,A("a",null,x(t.permissionStore.getPermCodeList),1)]),o(r),o(i,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316(\u5FC5\u987B\u5904\u4E8E\u540E\u53F0\u6743\u9650\u6A21\u5F0F\u624D\u53EF\u6D4B\u8BD5\u6B64\u9875\u9762\u6240\u5C55\u793A\u7684\u529F\u80FD)","show-icon":""}),o(r),o(e,{type:"primary",class:"mr-2",onClick:n[0]||(n[0]=D=>t.switchToken(2)),disabled:!t.isBackPermissionMode},{default:u(()=>[K]),_:1},8,["disabled"]),o(e,{type:"primary",onClick:n[1]||(n[1]=D=>t.switchToken(1)),disabled:!t.isBackPermissionMode},{default:u(()=>[L]),_:1},8,["disabled"]),t.isBackPermissionMode?(a(),T($,{key:0},[o(r,null,{default:u(()=>[Q]),_:1}),o(F,{value:"1000"},{default:u(()=>[o(e,{type:"primary",class:"mx-4"},{default:u(()=>[q]),_:1})]),_:1}),o(F,{value:"2000"},{default:u(()=>[o(e,{color:"success",class:"mx-4"},{default:u(()=>[H]),_:1})]),_:1}),o(F,{value:["1000","2000"]},{default:u(()=>[o(e,{color:"error",class:"mx-4"},{default:u(()=>[J]),_:1})]),_:1}),o(r,null,{default:u(()=>[O]),_:1}),t.hasPermission("1000")?(a(),d(e,{key:0,type:"primary",class:"mx-4"},{default:u(()=>[R]),_:1})):f("",!0),t.hasPermission("2000")?(a(),d(e,{key:1,color:"success",class:"mx-4"},{default:u(()=>[X]),_:1})):f("",!0),t.hasPermission(["1000","2000"])?(a(),d(e,{key:2,color:"error",class:"mx-4"},{default:u(()=>[Y]),_:1})):f("",!0),o(r,null,{default:u(()=>[Z]),_:1}),h((a(),d(e,{type:"primary",class:"mx-4"},{default:u(()=>[uu]),_:1})),[[B,"1000"]]),h((a(),d(e,{color:"success",class:"mx-4"},{default:u(()=>[eu]),_:1})),[[B,"2000"]]),h((a(),d(e,{color:"error",class:"mx-4"},{default:u(()=>[ou]),_:1})),[[B,["1000","2000"]]])],64)):f("",!0)]),_:1})}var Cu=k(U,[["render",su],["__scopeId","data-v-d0b34b42"]]);export{Cu as default};
