import{_ as T}from"./index.39d92cee.js";import{t as C}from"./data.ec134722.js";import{P as B}from"./index.b67d6c94.js";import{aw as k,a as E,b1 as A,v as p,ay as u,o as v,j as K,z as n,n as e,ah as y,al as R,k as _,dw as $,ba as L,B as D}from"./index.2084e233.js";import{C as w}from"./index.e1c48539.js";import"./index.1d81dd4b.js";/* empty css              */import{R as b,C as P}from"./index.4fefe693.js";import"./fromPairs.84aabb58.js";import"./index.7acfb7b4.js";import"./eagerComputed.0999551d.js";import"./useContextMenu.50d63ae4.js";import"./index.780e7163.js";import"./get.d07fa21b.js";import"./index.b8e65b24.js";import"./index.21f688c3.js";import"./useSize.b225aeee.js";import"./useWindowSizeFn.421f2d0c.js";import"./useContentViewHeight.2b6a2bfd.js";import"./ArrowLeftOutlined.03a40cf3.js";import"./index.10838f0f.js";import"./transButton.12ac9125.js";import"./index.861ad678.js";import"./TabPane.94c20b7e.js";import"./useRefs.457ce1af.js";import"./PlusOutlined.0ccd6f9e.js";import"./Col.f25059a0.js";import"./useFlexGapSupport.c2b52231.js";const x=E({components:{BasicTree:T,PageWrapper:B,Card:w,Row:b,Col:P,Spin:A},setup(){const t=p(null),d=p(null),F=p(null),c=p([]),l=p(!1);function h(a,i){}function o(){l.value=!0,setTimeout(()=>{c.value=y(C),l.value=!1,R(()=>{var a;_(d),(a=_(d))==null||a.expandAll(!0)})},2e3)}function r(){l.value=!0,setTimeout(()=>{c.value=y(C),l.value=!1},2e3)}const m=p([{title:"parent ",key:"0-0"}]);function f(a){return new Promise(i=>{if($(a.children)&&a.children.length>0){i();return}setTimeout(()=>{const s=_(t);if(s){const g=[{title:`Child Node ${a.eventKey}-0`,key:`${a.eventKey}-0`},{title:`Child Node ${a.eventKey}-1`,key:`${a.eventKey}-1`}];s.updateNodeByKey(a.eventKey,{children:g}),s.setExpandedKeys(L([a.eventKey,...s.getExpandedKeys()]))}i()},300)})}return{treeData:C,handleCheck:h,tree:m,onLoadData:f,asyncTreeRef:t,asyncExpandTreeRef:d,loadTreeRef:F,tree2:c,loadTreeData:o,treeLoading:l,loadTreeData2:r}}}),S=D(" 123123 "),W=D("\u52A0\u8F7D\u6570\u636E"),V=D("\u8BF7\u6C42\u6570\u636E");function j(t,d,F,c,l,h){const o=u("BasicTree"),r=u("Col"),m=u("a-button"),f=u("Spin"),a=u("Card"),i=u("Row"),s=u("PageWrapper");return v(),K(s,{title:"Tree\u57FA\u7840\u793A\u4F8B"},{default:n(()=>[e(i,{gutter:[16,16]},{default:n(()=>[e(r,{span:8},{default:n(()=>[e(o,{title:"\u57FA\u7840\u793A\u4F8B\uFF0C\u9ED8\u8BA4\u5C55\u5F00\u7B2C\u4E00\u5C42",treeData:t.treeData,defaultExpandLevel:"1"},{title:n(()=>[S]),_:1},8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u53EF\u52FE\u9009\uFF0C\u9ED8\u8BA4\u5168\u90E8\u5C55\u5F00",treeData:t.treeData,checkable:!0,defaultExpandAll:"",onCheck:t.handleCheck},null,8,["treeData","onCheck"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u6307\u5B9A\u9ED8\u8BA4\u5C55\u5F00/\u52FE\u9009\u793A\u4F8B",treeData:t.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])]),_:1}),e(r,{span:8},{default:n(()=>[e(o,{title:"\u61D2\u52A0\u8F7D\u5F02\u6B65\u6811",ref:"asyncTreeRef",treeData:t.tree,"load-data":t.onLoadData},null,8,["treeData","load-data"])]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"\u5F02\u6B65\u6570\u636E\uFF0C\u9ED8\u8BA4\u5C55\u5F00"},{extra:n(()=>[e(m,{onClick:t.loadTreeData,loading:t.treeLoading},{default:n(()=>[W]),_:1},8,["onClick","loading"])]),default:n(()=>[e(f,{spinning:t.treeLoading},{default:n(()=>[e(o,{ref:"asyncExpandTreeRef",treeData:t.tree2},null,8,["treeData"])]),_:1},8,["spinning"])]),_:1})]),_:1}),e(r,{span:8},{default:n(()=>[e(a,{title:"BasicTree\u5185\u7F6E\u52A0\u8F7D"},{extra:n(()=>[e(m,{onClick:t.loadTreeData2,loading:t.treeLoading},{default:n(()=>[V]),_:1},8,["onClick","loading"])]),default:n(()=>[e(o,{ref:"loadTreeRef",treeData:t.tree2,loading:t.treeLoading},null,8,["treeData","loading"])]),_:1})]),_:1})]),_:1})]),_:1})}var fe=k(x,[["render",j]]);export{fe as default};