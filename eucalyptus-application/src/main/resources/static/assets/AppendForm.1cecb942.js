var B=(e,n,r)=>new Promise((s,i)=>{var t=o=>{try{p(r.next(o))}catch(m){i(m)}},a=o=>{try{p(r.throw(o))}catch(m){i(m)}},p=o=>o.done?s(o.value):Promise.resolve(o.value).then(t,a);p((r=r.apply(e,n)).next())});import{B as h}from"./BasicForm.21eafea1.js";import{u as $}from"./useForm.88884a65.js";import{aw as P,a as g,cD as F,I as _,dF as k,v as I,ay as u,o as d,j as f,z as l,n as b,l as C,B as v}from"./index.2084e233.js";import{P as y}from"./index.b67d6c94.js";/* empty css              *//* empty css              */import"./index.780e7163.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.84aef3c6.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.6f377f37.js";import"./get.d07fa21b.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./useSize.b225aeee.js";import"./transButton.12ac9125.js";import"./index.42522d25.js";import"./index.2a7c146b.js";import"./useWindowSizeFn.421f2d0c.js";import"./FullscreenOutlined.8362b047.js";import"./index.f36943b4.js";import"./index.e1d3633a.js";import"./uuid.2b29000c.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";const S=g({components:{BasicForm:h,CollapseContainer:F,PageWrapper:y,[_.name]:_,Button:k},setup(){const[e,{appendSchemaByField:n,removeSchemaByFiled:r,validate:s}]=$({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function i(){return B(this,null,function*(){try{const o=yield s()}catch(o){}})}const t=I(1);function a(){n({field:`field${t.value}a`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`field${t.value}b`,component:"Input",label:"\u5B57\u6BB5"+t.value,colProps:{span:8},required:!0},""),n({field:`${t.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),t.value++}function p(o){r([`field${o}a`,`field${o}b`,`${o}`]),t.value--}return{register:e,handleSubmit:i,add:a,del:p}}}),q=v("+"),N=v("-");function W(e,n,r,s,i,t){const a=u("Button"),p=u("BasicForm"),o=u("CollapseContainer"),m=u("PageWrapper");return d(),f(m,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:l(()=>[b(o,{title:"\u8868\u5355\u589E\u5220"},{default:l(()=>[b(p,{onRegister:e.register,onSubmit:e.handleSubmit},{add:l(({field:c})=>[Number(c)===0?(d(),f(a,{key:0,onClick:e.add},{default:l(()=>[q]),_:1},8,["onClick"])):C("",!0),c>0?(d(),f(a,{key:1,onClick:w=>e.del(c)},{default:l(()=>[N]),_:2},1032,["onClick"])):C("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ko=P(S,[["render",W]]);export{ko as default};