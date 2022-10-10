import{B as S}from"./TableImg.81c8647f.js";import{j as w}from"./BasicForm.9f9d1425.js";import{u as B}from"./useTable.58f676b6.js";import{g as F}from"./system.8773b1de.js";import{P as D}from"./index.8f5f8265.js";import y from"./DeptTree.0dcb7b95.js";import{b as A}from"./index.23d10b2c.js";import{A as k,c as I,s as M}from"./AccountModal.1f7bbd14.js";import{aw as E,a as R,aZ as V,w as P,ay as t,o as C,j as _,z as n,n as r,l as W,B as $}from"./index.22b0f670.js";import"./index.e6899fd0.js";import"./Checkbox.9ea2f65b.js";import"./index.2279836f.js";import"./index.1575f4f2.js";import"./eagerComputed.bf21e7e9.js";import"./useForm.ae6a5675.js";import"./index.31ae1630.js";import"./index.372f9a54.js";import"./index.c4ec8421.js";import"./uuid.2b29000c.js";import"./index.7175f62e.js";import"./_baseIteratee.50bb3834.js";import"./get.9e854f98.js";import"./DeleteOutlined.d5ca8ebc.js";import"./index.22575899.js";import"./useRefs.a2c95200.js";import"./Form.17486a43.js";import"./Col.35934fe0.js";import"./useFlexGapSupport.b40f0b61.js";import"./useSize.db33a410.js";import"./useWindowSizeFn.7341961c.js";import"./index.65ddfc64.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a048c517.js";import"./FullscreenOutlined.abc9bfd2.js";import"./index.1fb349fa.js";import"./fromPairs.84aabb58.js";import"./scrollTo.42e1bb96.js";import"./index.be667380.js";/* empty css              *//* empty css              */import"./index.770768a4.js";import"./transButton.bac65e0e.js";import"./index.44f22cbb.js";import"./index.7026b45b.js";import"./download.5e0b5ba6.js";import"./base64Conver.08b9f4ec.js";import"./index.7c52c84e.js";import"./index.06908fa8.js";import"./uniqBy.9000d3e7.js";import"./index.ef91b7e2.js";import"./index.f2bdea16.js";import"./useContentViewHeight.339c4f2a.js";import"./ArrowLeftOutlined.64371a5a.js";import"./index.d80d1a3f.js";import"./index.42e860e6.js";import"./useContextMenu.9f64126a.js";const N=R({name:"AccountManagement",components:{BasicTable:S,PageWrapper:D,DeptTree:y,AccountModal:k,TableAction:w},setup(){const e=V(),[h,{openModal:i}]=A(),a=P({}),[g,{reload:l,updateTableDataRecord:s}]=B({title:"\u8D26\u53F7\u5217\u8868",api:F,rowKey:"id",columns:I,formConfig:{labelWidth:120,schemas:M,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(o){return o},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action"}});function c(){i(!0,{isUpdate:!1})}function p(o){i(!0,{record:o,isUpdate:!0})}function m(o){}function u({isUpdate:o,values:b}){if(o){const T=s(b.id,b)}else l()}function d(o=""){a.deptId=o,l()}function f(o){e("/system/account_detail/"+o.id)}return{registerTable:g,registerModal:h,handleCreate:c,handleEdit:p,handleDelete:m,handleSuccess:u,handleSelect:d,handleView:f,searchInfo:a}}}),j=$("\u65B0\u589E\u8D26\u53F7");function v(e,h,i,a,g,l){const s=t("DeptTree"),c=t("a-button"),p=t("TableAction"),m=t("BasicTable"),u=t("AccountModal"),d=t("PageWrapper");return C(),_(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:n(()=>[r(s,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),r(m,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:e.searchInfo},{toolbar:n(()=>[r(c,{type:"primary",onClick:e.handleCreate},{default:n(()=>[j]),_:1},8,["onClick"])]),bodyCell:n(({column:f,record:o})=>[f.key==="action"?(C(),_(p,{key:0,actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])):W("",!0)]),_:1},8,["onRegister","searchInfo"]),r(u,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var zo=E(N,[["render",v]]);export{zo as default};
