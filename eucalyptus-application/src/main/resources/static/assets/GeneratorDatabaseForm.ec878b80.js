var n=(u,e,o)=>new Promise((p,r)=>{var a=t=>{try{i(o.next(t))}catch(m){r(m)}},s=t=>{try{i(o.throw(t))}catch(m){r(m)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(a,s);i((o=o.apply(u,e)).next())});import{B as c}from"./BasicForm.9f9d1425.js";import{u as d}from"./useForm.ae6a5675.js";import{a as f,o as b,j as B,k as l}from"./index.22b0f670.js";/* empty css              *//* empty css              */import"./index.65ddfc64.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.c4ec8421.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.770768a4.js";import"./get.9e854f98.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useSize.db33a410.js";import"./transButton.bac65e0e.js";import"./index.44f22cbb.js";import"./index.23d10b2c.js";import"./useWindowSizeFn.7341961c.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.7026b45b.js";import"./index.1fb349fa.js";import"./uuid.2b29000c.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";const rt=f({__name:"GeneratorDatabaseForm",emits:["next"],setup(u,{emit:e}){function o(){return n(this,null,function*(){e("next",yield r())})}const[p,{validate:r}]=d({labelWidth:100,schemas:[{field:"url",component:"Input",label:"JDBC\u94FE\u63A5\u5730\u5740",required:!0,defaultValue:"jdbc:mysql://bj-cdb-9amt73r4.sql.tencentcdb.com:59997/eucalyptus",colProps:{span:24}},{field:"user",component:"Input",label:"\u7528\u6237\u540D",required:!0,defaultValue:"test",colProps:{span:24}},{field:"password",component:"Input",label:"\u5BC6\u7801",required:!0,defaultValue:"test@5015021301",colProps:{span:24}},{field:"catalog",component:"Input",label:"\u6570\u636E\u5E93\u540D\u79F0",required:!0,defaultValue:"eucalyptus",colProps:{span:24}}],actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"\u4E0B\u4E00\u6B65"},submitFunc:o});return(a,s)=>(b(),B(l(c),{onRegister:l(p)},null,8,["onRegister"]))}});export{rt as default};
