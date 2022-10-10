var b=(a,n,r)=>new Promise((i,_)=>{var p=s=>{try{u(r.next(s))}catch(o){_(o)}},m=s=>{try{u(r.throw(s))}catch(o){_(o)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(p,m);u((r=r.apply(a,n)).next())});import{aw as C,a as k,cD as E,v as g,ao as $,ay as f,bQ as A,x as T,o as v,j as h,z as c,i as D,n as F,h as P,aB as w,az as K,F as V,dM as S,B as y,E as R}from"./index.2084e233.js";import{T as B}from"./index.1d81dd4b.js";import{P as M}from"./index.b67d6c94.js";import{B as W}from"./BasicForm.21eafea1.js";import{u as j}from"./useForm.88884a65.js";import"./useRefs.457ce1af.js";import"./PlusOutlined.0ccd6f9e.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./eagerComputed.0999551d.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";/* empty css              *//* empty css              */import"./index.780e7163.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.84aef3c6.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.6f377f37.js";import"./get.d07fa21b.js";import"./index.7acfb7b4.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./index.42522d25.js";import"./index.2a7c146b.js";import"./FullscreenOutlined.8362b047.js";import"./index.f36943b4.js";import"./index.e1d3633a.js";import"./uuid.2b29000c.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";const N=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:M,CollapseContainer:E,BasicForm:W},setup(){const{createMessage:a}=R(),n=g("tabs2"),r=g(!1),i=[],_={showActionButtonGroup:!1,labelWidth:100},p={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],d={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;p[e]=d,i.push({key:e,tab:e,forceRender:!0,Form:j(Object.assign({schemas:l},_))})}function m(){return b(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return b(this,null,function*(){let o="";r.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:d,getFieldsValue:t}=l.Form[1];yield d(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{r.value=!1}})}function s(){return b(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(p)}})}return{omit:$,loading:r,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:s}}}),z={class:"mb-4"},G=y(" \u91CD\u7F6E\u8868\u5355 "),I=y(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C "),L=y(" \u63D0\u4EA4\u8868\u5355 ");function O(a,n,r,i,_,p){const m=f("a-button"),u=f("BasicForm"),s=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),l=f("PageWrapper"),d=A("loading");return T((v(),h(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:c(()=>[D("div",z,[F(m,{onClick:a.handleReset,class:"mr-2"},{default:c(()=>[G]),_:1},8,["onClick"]),F(m,{onClick:a.handleSetValues,class:"mr-2"},{default:c(()=>[I]),_:1},8,["onClick"]),F(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:c(()=>[L]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:c(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:c(()=>[(v(!0),P(V,null,w(a.tabsFormSchema,t=>(v(),h(s,K({key:t.key},a.omit(t,["Form","key"])),{default:c(()=>[F(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var je=C(N,[["render",O]]);export{je as default};