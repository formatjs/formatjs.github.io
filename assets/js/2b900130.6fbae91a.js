"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9092],{186:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"polyfills/intl-relativetimeformat","title":"Intl.RelativeTimeFormat","description":"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-relativetimeformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-relativetimeformat","permalink":"/docs/polyfills/intl-relativetimeformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1742700127000,"frontMatter":{"id":"intl-relativetimeformat","title":"Intl.RelativeTimeFormat"},"sidebar":"polyfills","previous":{"title":"Intl.PluralRules","permalink":"/docs/polyfills/intl-pluralrules"},"next":{"title":"Intl.Segmenter","permalink":"/docs/polyfills/intl-segmenter"}}');var n=l(6106),r=l(7389),i=l(5516),s=l(8846);const o={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"})]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-relativetimeformat\n"})})}),(0,n.jsx)(s.A,{value:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-relativetimeformat\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"This package requires the following capabilities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(t.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(t.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,n.jsx)(t.code,{children:"Intl.PluralRules"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-pluralrules",children:"polyfill"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If you need ",(0,n.jsx)(t.code,{children:"formatToParts"})," and have to support IE11- or Node 10-, you'd need to polyfill using ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-numberformat",children:(0,n.jsx)(t.code,{children:"@formatjs/intl-numberformat"})}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(t.code,{children:"Intl.RelativeTimeFormat"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(t.code,{children:"Intl.RelativeTimeFormat.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.RelativeTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.RelativeTimeFormat,Intl.RelativeTimeFormat.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-relativetimeformat/polyfill-force')\n  await import(\n    `@formatjs/intl-relativetimeformat/locale-data/${unsupportedLocale}`\n  )\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsxs)(t.p,{children:["This library is fully ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat",children:"test262"}),"-compliant."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8846:(e,t,l)=>{l.d(t,{A:()=>i});l(7378);var a=l(3372);const n={tabItem:"tabItem_HWzn"};var r=l(6106);function i(e){let{children:t,hidden:l,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:l,children:t})}},5516:(e,t,l)=>{l.d(t,{A:()=>I});var a=l(7378),n=l(3372),r=l(485),i=l(1654),s=l(645),o=l(414),c=l(9615),u=l(4928);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:n}}=e;return{value:t,label:l,attributes:a,default:n}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function p(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:l}=e;const n=(0,i.W6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,r=m(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=f({queryString:l,groupId:n}),[h,v]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(l);return[n,(0,a.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),b=(()=>{const e=c??h;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,r]),tabValues:r}}var v=l(1751);const b={tabList:"tabList_YESZ",tabItem:"tabItem_xkch"};var y=l(6106);function j(e){let{className:t,block:l,selectedValue:a,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,l=o.indexOf(t),n=s[l].value;n!==a&&(c(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;t=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;t=o[l]??o[o.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},t),children:s.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===t}),children:l??t},t)}))})}function x(e){let{lazy:t,children:l,selectedValue:r}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function g(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,y.jsx)(j,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function I(e){const t=(0,v.A)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(t))}},7389:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>s});var a=l(7378);const n={},r=a.createContext(n);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);