var ue=Object.defineProperty,fe=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var we=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var G=(e,o,r)=>o in e?ue(e,o,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[o]=r,m=(e,o)=>{for(var r in o||(o={}))we.call(o,r)&&G(e,r,o[r]);if(x)for(var r of x(o))be.call(o,r)&&G(e,r,o[r]);return e},H=(e,o)=>fe(e,ge(o));var Q=(e,o,r)=>new Promise((c,i)=>{var p=l=>{try{a(r.next(l))}catch(d){i(d)}},t=l=>{try{a(r.throw(l))}catch(d){i(d)}},a=l=>l.done?c(l.value):Promise.resolve(l.value).then(p,t);a((r=r.apply(e,o)).next())});import{c as Y,a as R,b as N,f as w,aw as j,ay as y,o as f,h as $,F as he,aC as g,j as P,z as b,B as z,t as S,az as T,l as B,q as C,bm as Z,ed as ve,aG as V,i as U,n as A,bE as me,v as D,cA as ye,a7 as J,dM as K,k as n,am as _,cz as De,al as ee,ax as te,bQ as Ce,aA as W,x as ke,aB as _e,aD as $e,aE as Be,at as O,w as re,av as oe,cE as Pe,ap as Se,dL as ae,L as Te,aF as Oe}from"./index.22b0f670.js";import{D as Fe}from"./index.a1f74369.js";import{A as Le}from"./ArrowLeftOutlined.64371a5a.js";const{t:X}=Y(),se={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:X("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:X("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},He=m({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},se);const Ve=R({name:"BasicDrawerFooter",props:H(m({},se),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:o}){const{prefixCls:r}=N("basic-drawer-footer"),c=w(()=>{const t=`${e.height}`;return{height:t,lineHeight:`calc(${t} - 1px)`}});function i(){o("ok")}function p(){o("close")}return{handleOk:i,prefixCls:r,handleClose:p,getStyle:c}}});function ze(e,o,r,c,i,p){const t=y("a-button");return e.showFooter||e.$slots.footer?(f(),$("div",{key:0,class:C(e.prefixCls),style:Z(e.getStyle)},[e.$slots.footer?g(e.$slots,"footer",{key:1}):(f(),$(he,{key:0},[g(e.$slots,"insertFooter"),e.showCancelBtn?(f(),P(t,T({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:b(()=>[z(S(e.cancelText),1)]),_:1},16,["onClick"])):B("",!0),g(e.$slots,"centerFooter"),e.showOkBtn?(f(),P(t,T({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:b(()=>[z(S(e.okText),1)]),_:1},16,["type","onClick","loading"])):B("",!0),g(e.$slots,"appendFooter")],64))],6)):B("",!0)}var Ae=j(Ve,[["render",ze]]);const Ee=R({name:"BasicDrawerHeader",components:{BasicTitle:ve,ArrowLeftOutlined:Le},props:{isDetail:V.bool,showDetailBack:V.bool,title:V.string},emits:["close"],setup(e,{emit:o}){const{prefixCls:r}=N("basic-drawer-header");function c(){o("close")}return{prefixCls:r,handleClose:c}}}),Re={key:1};function Ne(e,o,r,c,i,p){const t=y("BasicTitle"),a=y("ArrowLeftOutlined");return e.isDetail?(f(),$("div",{key:1,class:C([e.prefixCls,`${e.prefixCls}--detail`])},[U("span",{class:C(`${e.prefixCls}__twrap`)},[e.showDetailBack?(f(),$("span",{key:0,onClick:o[0]||(o[0]=(...l)=>e.handleClose&&e.handleClose(...l))},[A(a,{class:C(`${e.prefixCls}__back`)},null,8,["class"])])):B("",!0),e.title?(f(),$("span",Re,S(e.title),1)):B("",!0)],2),U("span",{class:C(`${e.prefixCls}__toolbar`)},[g(e.$slots,"titleToolbar")],2)],2)):(f(),P(t,{key:0,class:C(e.prefixCls)},{default:b(()=>[g(e.$slots,"title"),z(" "+S(e.$slots.title?"":e.title),1)]),_:3},8,["class"]))}var je=j(Ee,[["render",Ne]]);const Me=R({components:{Drawer:Fe,ScrollContainer:me,DrawerFooter:Ae,DrawerHeader:je},inheritAttrs:!1,props:He,emits:["visible-change","ok","close","register"],setup(e,{emit:o}){const r=D(!1),c=ye(),i=D(null),{t:p}=Y(),{prefixVar:t,prefixCls:a}=N("basic-drawer"),l={setDrawerProps:ce,emitVisible:void 0},d=O();d&&o("register",l,d.uid);const v=w(()=>K(_(e),n(i))),h=w(()=>{const s=H(m(m({placement:"right"},n(c)),n(v)),{visible:n(r)});s.title=void 0;const{isDetail:u,width:L,wrapClassName:q,getContainer:pe}=s;if(u){L||(s.width="100%");const I=`${a}__detail`;s.class=q?`${q} ${I}`:I,pe||(s.getContainer=`.${t}-layout-content`)}return s}),F=w(()=>m(m({},c),n(h))),M=w(()=>{const{footerHeight:s,showFooter:u}=n(h);return u&&s?De(s)?`${s}px`:`${s.replace("px","")}px`:"0px"}),ne=w(()=>{const s=n(M);return{position:"relative",height:`calc(100% - ${s})`}}),ie=w(()=>{var s;return!!((s=n(h))!=null&&s.loading)});J(()=>e.visible,(s,u)=>{s!==u&&(r.value=s)},{deep:!0}),J(()=>r.value,s=>{ee(()=>{var u;o("visible-change",s),d&&((u=l.emitVisible)==null||u.call(l,s,d.uid))})});function le(s){return Q(this,null,function*(){const{closeFunc:u}=n(h);if(o("close",s),u&&te(u)){const L=yield u();r.value=!L;return}r.value=!1})}function ce(s){i.value=K(n(i)||{},s),Reflect.has(s,"visible")&&(r.value=!!s.visible)}function de(){o("ok")}return{onClose:le,t:p,prefixCls:a,getMergeProps:v,getScrollContentStyle:ne,getProps:h,getLoading:ie,getBindValues:F,getFooterHeight:M,handleOk:de}}});function qe(e,o,r,c,i,p){const t=y("DrawerHeader"),a=y("ScrollContainer"),l=y("DrawerFooter"),d=y("Drawer"),v=Ce("loading");return f(),P(d,T({class:e.prefixCls,onClose:e.onClose},e.getBindValues),W({default:b(()=>[ke((f(),P(a,{style:Z(e.getScrollContentStyle),"loading-tip":e.loadingText||e.t("common.loadingText")},{default:b(()=>[g(e.$slots,"default")]),_:3},8,["style","loading-tip"])),[[v,e.getLoading]]),A(l,T(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),W({_:2},[_e(Object.keys(e.$slots),h=>({name:h,fn:b(F=>[g(e.$slots,h,$e(Be(F||{})))])}))]),1040,["onClose","onOk","height"])]),_:2},[e.$slots.title?{name:"title",fn:b(()=>[g(e.$slots,"title")])}:{name:"title",fn:b(()=>[A(t,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:b(()=>[g(e.$slots,"titleToolbar")]),_:3},8,["title","isDetail","showDetailBack","onClose"])])}]),1040,["class","onClose"])}var Ie=j(Me,[["render",qe]]);const k=re({}),E=re({});function Je(){if(!O())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=D(null),o=D(!1),r=D("");function c(t,a){oe(()=>{e.value=null,o.value=null,k[n(r)]=null}),!(n(o)&&Pe()&&t===n(e))&&(r.value=a,e.value=t,o.value=!0,t.emitVisible=(l,d)=>{E[d]=l})}const i=()=>{const t=n(e);return t||ae("useDrawer instance is undefined!"),t},p={setDrawerProps:t=>{var a;(a=i())==null||a.setDrawerProps(t)},getVisible:w(()=>E[~~n(r)]),openDrawer:(t=!0,a,l=!0)=>{var v;if((v=i())==null||v.setDrawerProps({visible:t}),!a)return;if(l){k[n(r)]=null,k[n(r)]=_(a);return}Se(_(k[n(r)]),_(a))||(k[n(r)]=_(a))},closeDrawer:()=>{var t;(t=i())==null||t.setDrawerProps({visible:!1})}};return[c,p]}const Ke=e=>{const o=D(null),r=O(),c=D("");if(!O())throw new Error("useDrawerInner() can only be used inside setup() or functional components!");const i=()=>{const t=n(o);if(!t){ae("useDrawerInner instance is undefined!");return}return t},p=(t,a)=>{oe(()=>{o.value=null}),c.value=a,o.value=t,r==null||r.emit("register",t,a)};return Te(()=>{const t=k[n(c)];!t||!e||!te(e)||ee(()=>{e(t)})}),[p,{changeLoading:(t=!0)=>{var a;(a=i())==null||a.setDrawerProps({loading:t})},changeOkLoading:(t=!0)=>{var a;(a=i())==null||a.setDrawerProps({confirmLoading:t})},getVisible:w(()=>E[~~n(c)]),closeDrawer:()=>{var t;(t=i())==null||t.setDrawerProps({visible:!1})},setDrawerProps:t=>{var a;(a=i())==null||a.setDrawerProps(t)}}]},We=Oe(Ie);export{We as B,Ke as a,Je as u};
