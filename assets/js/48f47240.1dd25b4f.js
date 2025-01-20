"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5866],{99:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"polyfills/intl-displaynames","title":"Intl.DisplayNames","description":"A polyfill for Intl.DisplayNames.","source":"@site/docs/polyfills/intl-displaynames.md","sourceDirName":"polyfills","slug":"/polyfills/intl-displaynames","permalink":"/docs/polyfills/intl-displaynames","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-displaynames.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737387451000,"frontMatter":{"id":"intl-displaynames","title":"Intl.DisplayNames"},"sidebar":"polyfills","previous":{"title":"Intl.DateTimeFormat (ESNext)","permalink":"/docs/polyfills/intl-datetimeformat"},"next":{"title":"Intl.DurationFormat","permalink":"/docs/polyfills/intl-durationformat"}}');var n=a(6106),s=a(5809),r=a(9911),i=a(6423);const o={id:"intl-displaynames",title:"Intl.DisplayNames"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A polyfill for ",(0,n.jsx)(l.a,{href:"https://tc39.es/proposal-intl-displaynames",children:(0,n.jsx)(l.code,{children:"Intl.DisplayNames"})}),"."]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-displaynames",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-displaynames.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-displaynames",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(r.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-displaynames\n"})})}),(0,n.jsx)(i.A,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-displaynames\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(l.p,{children:["Everything in ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/proposal-intl-displaynames",children:"intl-displaynames proposal"}),"."]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.DisplayNames"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(l.code,{children:"Intl.DisplayNames.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.DisplayNames, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.DisplayNames,Intl.DisplayNames.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-displaynames/polyfill'\nimport '@formatjs/intl-displaynames/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-displaynames/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-displaynames/polyfill-force')\n  await import(`@formatjs/intl-displaynames/locale-data/${locale}`)\n}\n"})})]})}function m(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},6423:(e,l,a)=>{a.d(l,{A:()=>r});a(7378);var t=a(3372);const n={tabItem:"tabItem_vxlI"};var s=a(6106);function r(e){let{children:l,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(n.tabItem,r),hidden:a,children:l})}},9911:(e,l,a)=>{a.d(l,{A:()=>I});var t=a(7378),n=a(3372),s=a(7864),r=a(1654),i=a(5034),o=a(1717),c=a(4506),u=a(6982);function d(e){var l,a;return null!=(l=null==(a=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?l:[]}function p(e){const{values:l,children:a}=e;return(0,t.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:a,attributes:t,default:n}}=e;return{value:l,label:a,attributes:t,default:n}}))}(a);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,a])}function m(e){let{value:l,tabValues:a}=e;return a.some((e=>e.value===l))}function f(e){let{queryString:l=!1,groupId:a}=e;const n=(0,r.W6)(),s=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:l,groupId:a});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const l=new URLSearchParams(n.location.search);l.set(s,e),n.replace(Object.assign({},n.location,{search:l.toString()}))}),[s,n])]}function h(e){const{defaultValue:l,queryString:a=!1,groupId:n}=e,s=p(e),[r,o]=(0,t.useState)((()=>function(e){var l;let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const n=null!=(l=t.find((e=>e.default)))?l:t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:s}))),[c,d]=f({queryString:a,groupId:n}),[h,y]=function(e){let{groupId:l}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(l),[n,s]=(0,u.Dv)(a);return[n,(0,t.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),b=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:r,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=a(642);const b={tabList:"tabList_h3K6",tabItem:"tabItem_EuYH"};var v=a(6106);function j(e){let{className:l,block:a,selectedValue:t,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const l=e.currentTarget,a=o.indexOf(l),n=i[a].value;n!==t&&(c(l),r(n))},d=e=>{var l;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const l=o.indexOf(e.currentTarget)+1;a=null!=(t=o[l])?t:o[0];break}case"ArrowLeft":{var n;const l=o.indexOf(e.currentTarget)-1;a=null!=(n=o[l])?n:o[o.length-1];break}}null==(l=a)||l.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},l),children:i.map((e=>{let{value:l,label:a,attributes:s}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===l?0:-1,"aria-selected":t===l,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,n.A)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===l}),children:null!=a?a:l}),l)}))})}function g(e){let{lazy:l,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,l)=>(0,t.cloneElement)(e,{key:l,hidden:e.props.value!==s})))})}function x(e){const l=h(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},l,e)),(0,v.jsx)(g,Object.assign({},l,e))]})}function I(e){const l=(0,y.default)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(l))}},5809:(e,l,a)=>{a.d(l,{R:()=>r,x:()=>i});var t=a(7378);const n={},s=t.createContext(n);function r(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);