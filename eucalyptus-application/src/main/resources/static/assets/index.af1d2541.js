var k=(h,n,t)=>new Promise((e,p)=>{var f=r=>{try{i(t.next(r))}catch(a){p(a)}},d=r=>{try{i(t.throw(r))}catch(a){p(a)}},i=r=>r.done?e(r.value):Promise.resolve(r.value).then(f,d);i((t=t.apply(h,n)).next())});import{cV as x,a as T,v as C,c as B,ft as D,a7 as A,al as R,ah as V,ay as j,o as u,h as _,F as I,aB as S,x as M,y as N,n as s,k as o,z as m,B as y,t as b,j as F,l as $}from"./index.2084e233.js";import z from"./DetailModal.586d9532.js";import{B as H}from"./TableImg.e85007c0.js";import{j as q}from"./BasicForm.21eafea1.js";import{u as G}from"./useTable.55ec82a8.js";import{b as J}from"./index.2a7c146b.js";import{getColumns as K}from"./data.a9f39400.js";import"./index.ffb767e9.js";import"./index.1e3e66bf.js";import"./get.d07fa21b.js";import"./useDescription.95167e2f.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./useForm.88884a65.js";import"./index.b67d6c94.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./index.780e7163.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./FullscreenOutlined.8362b047.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";const O=()=>x.get({url:"/error"}),P={class:"p-4"},Q=["src"],Zr=T({__name:"index",setup(h){const n=C(),t=C([]),{t:e}=B(),p=D(),[f,{setTableData:d}]=G({title:e("sys.errorLog.tableTitle"),columns:K(),actionColumn:{width:80,title:"Action",dataIndex:"action"}}),[i,{openModal:r}]=J();A(()=>p.getErrorLogInfoList,l=>{R(()=>{d(V(l))})},{immediate:!0});function a(l){n.value=l,r(!0)}function E(){throw new Error("fire vue error!")}function L(){t.value.push(`${new Date().getTime()}.png`)}function v(){return k(this,null,function*(){yield O()})}return(l,U)=>{const g=j("a-button");return u(),_("div",P,[(u(!0),_(I,null,S(t.value,c=>M((u(),_("img",{key:c,src:c,alt:""},null,8,Q)),[[N,!1]])),128)),s(z,{info:n.value,onRegister:o(i)},null,8,["info","onRegister"]),s(o(H),{onRegister:o(f),class:"error-handle-table"},{toolbar:m(()=>[s(g,{onClick:E,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireVueError")),1)]),_:1}),s(g,{onClick:L,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireResourceError")),1)]),_:1}),s(g,{onClick:v,type:"primary"},{default:m(()=>[y(b(o(e)("sys.errorLog.fireAjaxError")),1)]),_:1})]),bodyCell:m(({column:c,record:w})=>[c.key==="action"?(u(),F(o(q),{key:0,actions:[{label:o(e)("sys.errorLog.tableActionDesc"),onClick:a.bind(null,w)}]},null,8,["actions"])):$("",!0)]),_:1},8,["onRegister"])])}}});export{Zr as default};
