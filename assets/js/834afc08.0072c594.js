"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6748],{8489:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"polyfills/intl-localematcher","title":"Intl.LocaleMatcher","description":"A spec-compliant ponyfill for Intl.LocaleMatcher. Since this is only stage-1 this package is a ponyfill instead of polyfill.","source":"@site/docs/polyfills/intl-localematcher.md","sourceDirName":"polyfills","slug":"/polyfills/intl-localematcher","permalink":"/docs/polyfills/intl-localematcher","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-localematcher.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1737387918000,"frontMatter":{"id":"intl-localematcher","title":"Intl.LocaleMatcher"},"sidebar":"polyfills","previous":{"title":"Intl.Locale","permalink":"/docs/polyfills/intl-locale"},"next":{"title":"Intl.NumberFormat (ESNext)","permalink":"/docs/polyfills/intl-numberformat"}}');var a=t(6106),r=t(5809),s=t(9911),o=t(6423);const i={id:"intl-localematcher",title:"Intl.LocaleMatcher"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3}];function h(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.p,{children:["A spec-compliant ponyfill for ",(0,a.jsx)(l.a,{href:"https://github.com/tc39/proposal-intl-localematcher",children:"Intl.LocaleMatcher"}),". Since this is only stage-1 this package is a ponyfill instead of polyfill."]}),"\n",(0,a.jsxs)(l.p,{children:[(0,a.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-localematcher",children:(0,a.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-localematcher.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,a.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-localematcher",alt:"size"})]}),"\n",(0,a.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsxs)(s.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-localematcher\n"})})}),(0,a.jsx)(o.A,{value:"yarn",children:(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-localematcher\n"})})})]}),"\n",(0,a.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(l.ul,{children:["\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,a.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,a.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,a.jsxs)(l.li,{children:[(0,a.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,a.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,a.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"})]}),"\n"]}),"\n",(0,a.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(l.pre,{children:(0,a.jsx)(l.code,{className:"language-tsx",children:"import {match} from '@formatjs/intl-localematcher'\n\nmatch(['fr-XX', 'en'], ['fr', 'en'], 'en') // 'fr'\n\nmatch(['zh'], ['fr', 'en'], 'en') // 'en'\n"})})]})}function p(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,a.jsx)(l,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},6423:(e,l,t)=>{t.d(l,{A:()=>s});t(7378);var n=t(3372);const a={tabItem:"tabItem_vxlI"};var r=t(6106);function s(e){let{children:l,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:l})}},9911:(e,l,t)=>{t.d(l,{A:()=>I});var n=t(7378),a=t(3372),r=t(7864),s=t(1654),o=t(5034),i=t(1717),c=t(4506),u=t(6982);function d(e){var l,t;return null!=(l=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?l:[]}function h(e){const{values:l,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:n,default:a}}=e;return{value:l,label:t,attributes:n,default:a}}))}(t);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,t])}function p(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:l,groupId:t});return[(0,i.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(a.location.search);l.set(r,e),a.replace(Object.assign({},a.location,{search:l.toString()}))}),[r,a])]}function f(e){const{defaultValue:l,queryString:t=!1,groupId:a}=e,r=h(e),[s,i]=(0,n.useState)((()=>function(e){var l;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(l=n.find((e=>e.default)))?l:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:r}))),[c,d]=m({queryString:t,groupId:a}),[f,b]=function(e){let{groupId:l}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(l),[a,r]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(642);const v={tabList:"tabList_h3K6",tabItem:"tabItem_EuYH"};var g=t(6106);function j(e){let{className:l,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const l=e.currentTarget,t=i.indexOf(l),a=o[t].value;a!==n&&(c(l),s(a))},d=e=>{var l;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const l=i.indexOf(e.currentTarget)+1;t=null!=(n=i[l])?n:i[0];break}case"ArrowLeft":{var a;const l=i.indexOf(e.currentTarget)-1;t=null!=(a=i[l])?a:i[i.length-1];break}}null==(l=t)||l.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},l),children:o.map((e=>{let{value:l,label:t,attributes:r}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>{i.push(e)},onKeyDown:d,onClick:u},r,{className:(0,a.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===l}),children:null!=t?t:l}),l)}))})}function x(e){let{lazy:l,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function y(e){const l=f(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(j,Object.assign({},l,e)),(0,g.jsx)(x,Object.assign({},l,e))]})}function I(e){const l=(0,b.default)();return(0,g.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(l))}},5809:(e,l,t)=>{t.d(l,{R:()=>s,x:()=>o});var n=t(7378);const a={},r=n.createContext(a);function s(e){const l=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function o(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);