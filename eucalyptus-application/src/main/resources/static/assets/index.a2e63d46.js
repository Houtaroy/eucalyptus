import{D as f}from"./index.ffb767e9.js";import{B as _}from"./TableImg.e85007c0.js";import"./BasicForm.21eafea1.js";import{u as l}from"./useTable.55ec82a8.js";import{P as T}from"./index.b67d6c94.js";import{aw as g,a as h,ay as t,o as b,j as D,z as B,n as o}from"./index.2084e233.js";import{D as d}from"./index.780e7163.js";import{refundSchema as v,refundData as S,personSchema as y,personData as C,refundTableData as w,refundTableSchema as F,refundTimeTableSchema as R,refundTimeTableData as E}from"./data.fcf06b40.js";import"./index.1e3e66bf.js";import"./get.d07fa21b.js";import"./index.59027318.js";import"./Checkbox.ca2ecca2.js";import"./index.cb49e90e.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./useForm.88884a65.js";import"./index.1e6d9c89.js";import"./index.f542522f.js";import"./index.84aef3c6.js";import"./uuid.2b29000c.js";import"./index.ac001c45.js";import"./_baseIteratee.4371a21b.js";import"./DeleteOutlined.214888e8.js";import"./index.edd3476c.js";import"./useRefs.457ce1af.js";import"./Form.c55c6f9f.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";import"./useSize.b225aeee.js";import"./useWindowSizeFn.421f2d0c.js";import"./index.2a7c146b.js";import"./FullscreenOutlined.8362b047.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.701d39e5.js";import"./index.e1d3633a.js";import"./fromPairs.84aabb58.js";import"./scrollTo.8f622af1.js";import"./index.b83d2f07.js";/* empty css              *//* empty css              */import"./index.6f377f37.js";import"./transButton.12ac9125.js";import"./index.42522d25.js";import"./index.f36943b4.js";import"./download.5e047479.js";import"./base64Conver.08b9f4ec.js";import"./index.55fb022f.js";import"./index.4fefe693.js";import"./uniqBy.64ebcacd.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";const k=h({components:{Description:f,BasicTable:_,PageWrapper:T,[d.name]:d},setup(){const[e]=l({title:"\u9000\u8D27\u5546\u54C1",dataSource:w,columns:F,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:n}),[p]=l({title:"\u9000\u8D27\u8FDB\u5EA6",columns:R,pagination:!1,dataSource:E,showIndexColumn:!1,scroll:{y:300}});function n(s){let a=0,i=0;return s.forEach(r=>{a+=r.t5,i+=r.t6}),[{t1:"\u603B\u8BA1",t5:a,t6:i}]}return{registerRefundTable:e,registerTimeTable:p,refundSchema:v,refundData:S,personSchema:y,personData:C}}});function x(e,p,n,s,a,i){const r=t("Description"),m=t("a-divider"),u=t("BasicTable"),c=t("PageWrapper");return b(),D(c,{title:"\u57FA\u7840\u8BE6\u60C5\u9875",contentBackground:""},{default:B(()=>[o(r,{size:"middle",title:"\u9000\u6B3E\u7533\u8BF7",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),o(m),o(r,{size:"middle",title:"\u7528\u6237\u4FE1\u606F",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),o(m),o(u,{onRegister:e.registerRefundTable},null,8,["onRegister"]),o(m),o(u,{onRegister:e.registerTimeTable},null,8,["onRegister"])]),_:1})}var Pe=g(k,[["render",x],["__scopeId","data-v-109959ad"]]);export{Pe as default};
