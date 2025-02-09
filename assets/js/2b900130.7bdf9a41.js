"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9092],{6199:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"polyfills/intl-relativetimeformat","title":"Intl.RelativeTimeFormat","description":"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-relativetimeformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-relativetimeformat","permalink":"/docs/polyfills/intl-relativetimeformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md","tags":[],"version":"current","lastUpdatedBy":"SnowyOwl","lastUpdatedAt":1739081178000,"frontMatter":{"id":"intl-relativetimeformat","title":"Intl.RelativeTimeFormat"},"sidebar":"polyfills","previous":{"title":"Intl.PluralRules","permalink":"/docs/polyfills/intl-pluralrules"},"next":{"title":"Intl.Segmenter","permalink":"/docs/polyfills/intl-segmenter"}}');var n=t(6106),r=t(972),i=t(8963),s=t(8055);const o={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function m(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-relativetimeformat\n"})})}),(0,n.jsx)(s.A,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-relativetimeformat\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(l.p,{children:"This package requires the following capabilities:"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,n.jsx)(l.code,{children:"Intl.PluralRules"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-pluralrules",children:"polyfill"}),"."]}),"\n",(0,n.jsxs)(l.li,{children:["If you need ",(0,n.jsx)(l.code,{children:"formatToParts"})," and have to support IE11- or Node 10-, you'd need to polyfill using ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-numberformat",children:(0,n.jsx)(l.code,{children:"@formatjs/intl-numberformat"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.RelativeTimeFormat"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(l.code,{children:"Intl.RelativeTimeFormat.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.RelativeTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.RelativeTimeFormat,Intl.RelativeTimeFormat.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-relativetimeformat/polyfill-force')\n  await import(\n    `@formatjs/intl-relativetimeformat/locale-data/${unsupportedLocale}`\n  )\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsxs)(l.p,{children:["This library is fully ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat",children:"test262"}),"-compliant."]})]})}function p(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8055:(e,l,t)=>{t.d(l,{A:()=>i});t(7378);var a=t(3372);const n={tabItem:"tabItem_FmC5"};var r=t(6106);function i(e){let{children:l,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:l})}},8963:(e,l,t)=>{t.d(l,{A:()=>I});var a=t(7378),n=t(3372),r=t(6493),i=t(1654),s=t(3094),o=t(1814),c=t(2919),u=t(6444);function d(e){var l,t;return null!=(l=null==(t=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?l:[]}function m(e){const{values:l,children:t}=e;return(0,a.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:a,default:n}}=e;return{value:l,label:t,attributes:a,default:n}}))}(t);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,t])}function p(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function f(e){let{queryString:l=!1,groupId:t}=e;const n=(0,i.W6)(),r=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:l,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(n.location.search);l.set(r,e),n.replace(Object.assign({},n.location,{search:l.toString()}))}),[r,n])]}function h(e){const{defaultValue:l,queryString:t=!1,groupId:n}=e,r=m(e),[i,o]=(0,a.useState)((()=>function(e){var l;let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const n=null!=(l=a.find((e=>e.default)))?l:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:l,tabValues:r}))),[c,d]=f({queryString:t,groupId:n}),[h,v]=function(e){let{groupId:l}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(l),[n,r]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),b=(()=>{const e=null!=c?c:h;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=t(8446);const b={tabList:"tabList_Dj0K",tabItem:"tabItem_Gd77"};var y=t(6106);function j(e){let{className:l,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const l=e.currentTarget,t=o.indexOf(l),n=s[t].value;n!==a&&(c(l),i(n))},d=e=>{var l;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const l=o.indexOf(e.currentTarget)+1;t=null!=(a=o[l])?a:o[0];break}case"ArrowLeft":{var n;const l=o.indexOf(e.currentTarget)-1;t=null!=(n=o[l])?n:o[o.length-1];break}}null==(l=t)||l.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},l),children:s.map((e=>{let{value:l,label:t,attributes:r}=e;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},r,{className:(0,n.A)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===l}),children:null!=t?t:l}),l)}))})}function g(e){let{lazy:l,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function x(e){const l=h(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,y.jsx)(j,Object.assign({},l,e)),(0,y.jsx)(g,Object.assign({},l,e))]})}function I(e){const l=(0,v.A)();return(0,y.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(l))}},972:(e,l,t)=>{t.d(l,{R:()=>i,x:()=>s});var a=t(7378);const n={},r=a.createContext(n);function i(e){const l=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:l},e.children)}}}]);