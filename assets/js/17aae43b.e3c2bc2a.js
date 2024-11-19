"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2937],{1794:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"polyfills/intl-supportedvaluesof","title":"Intl.supportedValuesOf","description":"A spec-compliant polyfill/ponyfill for Intl.supportedValuesOf.","source":"@site/docs/polyfills/intl-supportedvaluesof.md","sourceDirName":"polyfills","slug":"/polyfills/intl-supportedvaluesof","permalink":"/docs/polyfills/intl-supportedvaluesof","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-supportedvaluesof.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1732042617000,"frontMatter":{"id":"intl-supportedvaluesof","title":"Intl.supportedValuesOf"},"sidebar":"polyfills","previous":{"title":"Intl.Segmenter","permalink":"/docs/polyfills/intl-segmenter"}}');var r=l(6106),a=l(2036),s=l(1701),o=l(2120);const i={id:"intl-supportedvaluesof",title:"Intl.supportedValuesOf"},u=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["A spec-compliant polyfill/ponyfill for ",(0,r.jsx)(t.code,{children:"Intl.supportedValuesOf"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-enumerator",children:(0,r.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-enumerator.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,r.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-enumerator",alt:"size"})]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(s.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(o.A,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-enumerator\n"})})}),(0,r.jsx)(o.A,{value:"yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-enumerator\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator",children:(0,r.jsx)(t.code,{children:"Intl.Collator"})})}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat",children:(0,r.jsx)(t.code,{children:"Intl.DateTimeFormat"})})," or ",(0,r.jsx)(t.a,{href:"/docs/polyfills/intl-datetimeformat",children:"polyfill"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",children:(0,r.jsx)(t.code,{children:"Intl.NumberFormat"})})," or ",(0,r.jsx)(t.a,{href:"/docs/polyfills/intl-numberformat",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-enumerator/polyfill'\n"})}),"\n",(0,r.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-enumerator/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.supportedValuesOf\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-enumerator/polyfill')\n  }\n  // Alternatively, force the polyfill regardless of support\n  await import('@formatjs/intl-enumerator/polyfill-force')\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,r.jsxs)(t.p,{children:["This library is ",(0,r.jsx)(t.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/supportedValuesOf",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},2120:(e,t,l)=>{l.d(t,{A:()=>s});l(7378);var n=l(3372);const r={tabItem:"tabItem_d5le"};var a=l(6106);function s(e){let{children:t,hidden:l,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:l,children:t})}},1701:(e,t,l)=>{l.d(t,{A:()=>I});var n=l(7378),r=l(3372),a=l(4582),s=l(505),o=l(5050),i=l(875),u=l(2408),c=l(121);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:r}}=e;return{value:t,label:l,attributes:n,default:r}}))}(l);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function f(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:r}=e,a=p(e),[s,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=m({queryString:l,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(l);return[r,(0,n.useCallback)((e=>{l&&a.set(e)}),[l,a])]}({groupId:r}),v=(()=>{const e=u??h;return f({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=l(562);const v={tabList:"tabList_XbbM",tabItem:"tabItem_Q2w8"};var y=l(6106);function j(e){let{className:t,block:l,selectedValue:n,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const t=e.currentTarget,l=i.indexOf(t),r=o[l].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;t=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;t=i[l]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":l},t),children:o.map((e=>{let{value:t,label:l,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,r.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function g(e){let{lazy:t,children:l,selectedValue:a}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(j,{...t,...e}),(0,y.jsx)(g,{...t,...e})]})}function I(e){const t=(0,b.default)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},2036:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>o});var n=l(7378);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);