var c=(f,u,t)=>new Promise((s,r)=>{var l=o=>{try{e(t.next(o))}catch(p){r(p)}},d=o=>{try{e(t.throw(o))}catch(p){r(p)}},e=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,d);e((t=t.apply(f,u)).next())});import{P as F}from"./index.b67d6c94.js";import{B as b}from"./TableImg.e85007c0.js";import{j as x}from"./BasicForm.21eafea1.js";import{u as h}from"./useTable.55ec82a8.js";import{b as B}from"./index.2a7c146b.js";import{a as y,ay as T,o as A,j as k,z as m,n as a,k as i,B as w}from"./index.2084e233.js";import{u as D}from"./useLoading.c5863553.js";import I from"./CodeTemplateGroupModal.c9c092e5.js";import{b as R,l as E,d as G}from"./index.b5c06baf.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./eagerComputed.0999551d.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./useForm.88884a65.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./get.d07fa21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./index.780e7163.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./FullscreenOutlined.8362b047.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";import"./index.1d81dd4b.js";import"./PlusOutlined.0ccd6f9e.js";import"./CodeTemplateGroupDomainConverterForm.24b9b08e.js";import"./CodeTemplateGroupPropertyTable.64695220.js";import"./uniqueId.11619467.js";import"./CodeTemplateGroupTemplatesForm.7a019482.js";import"./index.295da945.js";import"./TabPane.94c20b7e.js";const L=w(" \u65B0\u589E "),Wo=y({__name:"index",setup(f){const[u,{openModal:t}]=B(),[s,{reload:r}]=h({rowKey:"id",columns:[{title:"\u6A21\u677F\u540D\u79F0",dataIndex:"name"},{title:"\u6A21\u677F\u63CF\u8FF0",dataIndex:"description"}],api:R,actionColumn:{width:250,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}}),[l,d]=D({tip:"\u52A0\u8F7D\u4E2D..."});function e(){t(!0,{})}function o(n){return c(this,null,function*(){l();const _=yield E(n.id);d(),t(!0,_)})}function p(n){return c(this,null,function*(){n.id&&(yield G(n.id),r())})}return(n,_)=>{const C=T("a-button");return A(),k(i(F),{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:m(()=>[a(i(b),{onRegister:i(s)},{action:m(({record:g})=>[a(i(x),{actions:[{icon:"ant-design:edit-outlined",tooltip:"\u7F16\u8F91",onClick:o.bind(null,g)},{icon:"ic:outline-delete-outline",color:"error",tooltip:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:p.bind(null,g)}}]},null,8,["actions"])]),toolbar:m(()=>[a(C,{"pre-icon":"ant-design:plus-outlined",type:"primary",onClick:e},{default:m(()=>[L]),_:1})]),_:1},8,["onRegister"]),a(I,{onRegister:i(u),onSuccess:i(r)},null,8,["onRegister","onSuccess"])]),_:1})}}});export{Wo as default};
