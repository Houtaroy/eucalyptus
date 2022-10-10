var D=Object.defineProperty,S=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var I=(r,t,e)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,g=(r,t)=>{for(var e in t||(t={}))z.call(t,e)&&I(r,e,t[e]);if(A)for(var e of A(t))U.call(t,e)&&I(r,e,t[e]);return r},P=(r,t)=>S(r,q(t));var E=(r,t,e)=>new Promise((b,v)=>{var C=o=>{try{s(e.next(o))}catch(l){v(l)}},c=o=>{try{s(e.throw(o))}catch(l){v(l)}},s=o=>o.done?b(o.value):Promise.resolve(o.value).then(C,c);s((e=e.apply(r,t)).next())});import{a as V,v as f,f as j,k as u,o as K,j as L,z as d,n as p,az as N,c_ as w}from"./index.22b0f670.js";import{T as O}from"./index.c40db61b.js";import{a as W,B as H}from"./index.23d10b2c.js";import{B as J}from"./BasicForm.9f9d1425.js";import{u as Q}from"./useForm.ae6a5675.js";import X from"./CodeTemplateGroupDomainConverterForm.c45c3da6.js";import Y from"./CodeTemplateGroupPropertyTable.d6cc33a0.js";import Z from"./CodeTemplateGroupTemplatesForm.cf7e06a1.js";import{u as ee,c as te}from"./index.c9dffdf6.js";import{T as _}from"./TabPane.0610752d.js";import"./useRefs.a2c95200.js";import"./PlusOutlined.8fa2eb5c.js";import"./useWindowSizeFn.7341961c.js";import"./FullscreenOutlined.abc9bfd2.js";/* empty css              *//* empty css              */import"./index.65ddfc64.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.c4ec8421.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.770768a4.js";import"./get.9e854f98.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useSize.db33a410.js";import"./transButton.bac65e0e.js";import"./index.44f22cbb.js";import"./index.7026b45b.js";import"./index.1fb349fa.js";import"./uuid.2b29000c.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";import"./TableImg.81c8647f.js";import"./index.8f5f8265.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a048c517.js";import"./fromPairs.84aabb58.js";import"./scrollTo.42e1bb96.js";import"./index.be667380.js";import"./useTable.58f676b6.js";import"./uniqueId.195db580.js";import"./index.dba58466.js";function re(){return Q({labelWidth:100,schemas:[{field:"name",label:"\u540D\u79F0",colProps:{span:24},required:!0,component:"Input"},{field:"description",label:"\u63CF\u8FF0",colProps:{span:24},required:!0,component:"InputTextArea",componentProps:{rows:4}}],showActionButtonGroup:!1})}const lt=V({__name:"CodeTemplateGroupModal",emits:["success","register"],setup(r,{emit:t}){const[e,{setFieldsValue:b,resetFields:v,validate:C}]=re(),c=f(null),s=f(null),o=f(null),l=f(!0),M=j(()=>u(l)?"\u7F16\u8F91\u4EE3\u7801\u6A21\u677F\u7EC4":"\u65B0\u589E\u4EE3\u7801\u6A21\u677F\u7EC4"),R=f(),y=f("basic"),[h,{setModalProps:G,closeModal:$}]=W(i=>E(this,null,function*(){var a,m,n,F;G({confirmLoading:!1,defaultFullscreen:!0,canFullscreen:!1}),y.value="basic",l.value=!!(i!=null&&i.id),u(l)&&(R.value=i.id),v(),b(g({},i)),yield(a=c.value)==null?void 0:a.reload(),(m=c.value)==null||m.setSelectedId(i.domainConverterId),(n=s.value)==null||n.setProperties(i.properties||[]),(F=o.value)==null||F.setTemplates(i.templates||[])}));function x(){return E(this,null,function*(){var F,T,k,B;const i=yield C(),a=(F=c.value)==null?void 0:F.getSelectedId();if(!a){w.error("\u8BF7\u9009\u62E9\u9886\u57DF\u8F6C\u6362\u5668");return}const m=(T=o.value)==null?void 0:T.getTemplates();if(!m||(m==null?void 0:m.length)<=0){w.error("\u8BF7\u81F3\u5C11\u521B\u5EFA\u4E00\u4E2A\u6A21\u677F\u6587\u4EF6");return}const n=P(g({id:R.value},i),{domainConverterId:a,properties:(k=s.value)==null?void 0:k.getProperties(),templates:(B=o.value)==null?void 0:B.getTemplates()});n.id?yield ee(n.id,n):yield te(n),$(),t("success")})}return(i,a)=>(K(),L(u(H),N({ref:"modal"},i.$attrs,{onRegister:u(h),title:u(M),onOk:x}),{default:d(()=>[p(u(O),{"active-key":y.value,"onUpdate:active-key":a[0]||(a[0]=m=>y.value=m),"tab-position":"left"},{default:d(()=>[p(u(_),{key:"basic",tab:"\u57FA\u7840\u4FE1\u606F",forceRender:!0},{default:d(()=>[p(u(J),{onRegister:u(e)},null,8,["onRegister"])]),_:1}),p(u(_),{key:"domain-converter",tab:"\u9886\u57DF\u8F6C\u6362\u5668",forceRender:!0},{default:d(()=>[p(X,{ref_key:"domainConverterFormRef",ref:c},null,512)]),_:1}),p(u(_),{key:"properties",tab:"\u5168\u5C40\u53C2\u6570",forceRender:!0},{default:d(()=>[p(Y,{ref_key:"propertyTableRef",ref:s},null,512)]),_:1}),p(u(_),{key:"templates",tab:"\u4EE3\u7801\u6A21\u677F",forceRender:!0},{default:d(()=>[p(Z,{ref_key:"templatesFormRef",ref:o},null,512)]),_:1})]),_:1},8,["active-key"])]),_:1},16,["onRegister","title"]))}});export{lt as default};
