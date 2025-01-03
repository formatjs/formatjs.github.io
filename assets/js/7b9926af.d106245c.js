"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6775],{1374:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"polyfills/intl-datetimeformat","title":"Intl.DateTimeFormat (ESNext)","description":"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-datetimeformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-datetimeformat","permalink":"/docs/polyfills/intl-datetimeformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1735916246000,"frontMatter":{"id":"intl-datetimeformat","title":"Intl.DateTimeFormat (ESNext)"},"sidebar":"polyfills","previous":{"title":"Polyfills","permalink":"/docs/polyfills"},"next":{"title":"Intl.DisplayNames","permalink":"/docs/polyfills/intl-displaynames"}}');var n=l(7557),i=l(7266),r=l(5716),o=l(9903);const s={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ESNext)"},c=void 0,d={},u=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",level:3},{value:"Full: contains ALL Timezone from IANA database",id:"full-contains-all-timezone-from-iana-database",level:4},{value:"Golden: contains popular set of timezones from IANA database",id:"golden-contains-popular-set-of-timezones-from-iana-database",level:4},{value:"Default Timezone",id:"default-timezone",level:3},{value:"Tests",id:"tests",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"})]}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Right now we only support Gregorian calendar in this polyfill. Therefore we recommend setting ",(0,n.jsx)(t.code,{children:"calendar: 'gregory'"})," in your options to be safe."]})}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"Right now this polyfill supports daylight transition until 2100 to reduce the dataset size"})}),"\n",(0,n.jsx)(t.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/tc39/proposal-intl-datetime-style",children:"dateStyle/timeStyle"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/tc39/proposal-intl-DateTimeFormat-formatRange",children:"formatRange"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(r.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(o.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-datetimeformat\n"})})}),(0,n.jsx)(o.A,{value:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-datetimeformat\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsx)(t.p,{children:"This package requires the following capabilities:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(t.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(t.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:(0,n.jsx)(t.code,{children:"Intl.NumberFormat"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-numberformat",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(t.code,{children:"Intl.DateTimeFormat"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(t.code,{children:"Intl.DateTimeFormat.~locale.<locale>"}),", as well as locale data for any required polyfills, to your list of features. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.DateTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.DateTimeFormat,Intl.DateTimeFormat.~locale.en,Intl.NumberFormat.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-datetimeformat/polyfill-force')\n\n  // Parallelize CLDR data loading\n  const dataPolyfills = [\n    import('@formatjs/intl-datetimeformat/add-all-tz'),\n    import(`@formatjs/intl-datetimeformat/locale-data/${unsupportedLocale}`),\n  ]\n  await Promise.all(dataPolyfills)\n}\n"})}),"\n",(0,n.jsx)(t.h3,{id:"adding-iana-timezone-database",children:"Adding IANA Timezone Database"}),"\n",(0,n.jsx)(t.p,{children:"We provide 2 pre-processed IANA Timezone:"}),"\n",(0,n.jsx)(t.h4,{id:"full-contains-all-timezone-from-iana-database",children:"Full: contains ALL Timezone from IANA database"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n"})}),"\n",(0,n.jsx)(t.h4,{id:"golden-contains-popular-set-of-timezones-from-iana-database",children:"Golden: contains popular set of timezones from IANA database"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n"})}),"\n",(0,n.jsx)(t.h3,{id:"default-timezone",children:"Default Timezone"}),"\n",(0,n.jsxs)(t.p,{children:["Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",(0,n.jsx)(t.code,{children:"UTC"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can change this by either calling ",(0,n.jsx)(t.code,{children:"__setDefaultTimeZone"})," or always explicitly pass in ",(0,n.jsx)(t.code,{children:"timeZone"})," option for accurate date time calculation."]}),"\n",(0,n.jsxs)(t.p,{children:["Since ",(0,n.jsx)(t.code,{children:"__setDefaultTimeZone"})," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsxs)(t.p,{children:["This library is fully ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},9903:(e,t,l)=>{l.d(t,{A:()=>r});l(8225);var a=l(3372);const n={tabItem:"tabItem_odys"};var i=l(7557);function r(e){let{children:t,hidden:l,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,r),hidden:l,children:t})}},5716:(e,t,l)=>{l.d(t,{A:()=>I});var a=l(8225),n=l(3372),i=l(9686),r=l(1654),o=l(5290),s=l(5259),c=l(2376),d=l(9656);function u(e){var t,l;return null!=(t=null==(l=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?t:[]}function m(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return u(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:n}}=e;return{value:t,label:l,attributes:a,default:n}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,l])}function f(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:l}=e;const n=(0,r.W6)(),i=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:t,groupId:l});return[(0,s.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace(Object.assign({},n.location,{search:t.toString()}))}),[i,n])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,i=m(e),[r,s]=(0,a.useState)((()=>function(e){var t;let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!f({value:l,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,u]=p({queryString:l,groupId:n}),[h,b]=function(e){let{groupId:t}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(t),[n,i]=(0,d.Dv)(l);return[n,(0,a.useCallback)((e=>{l&&i.set(e)}),[l,i])]}({groupId:n}),j=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{j&&s(j)}),[j]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);s(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=l(9346);const j={tabList:"tabList_RFFG",tabItem:"tabItem_piEz"};var y=l(7557);function x(e){let{className:t,block:l,selectedValue:a,selectValue:r,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,l=s.indexOf(t),n=o[l].value;n!==a&&(c(t),r(n))},u=e=>{var t;let l=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=s.indexOf(e.currentTarget)+1;l=null!=(a=s[t])?a:s[0];break}case"ArrowLeft":{var n;const t=s.indexOf(e.currentTarget)-1;l=null!=(n=s[t])?n:s[s.length-1];break}}null==(t=l)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},t),children:o.map((e=>{let{value:t,label:l,attributes:i}=e;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>s.push(e),onKeyDown:u,onClick:d},i,{className:(0,n.A)("tabs__item",j.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=l?l:t}),t)}))})}function g(e){let{lazy:t,children:l,selectedValue:i}=e;const r=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,n.A)("tabs-container",j.tabList),children:[(0,y.jsx)(x,Object.assign({},t,e)),(0,y.jsx)(g,Object.assign({},t,e))]})}function I(e){const t=(0,b.default)();return(0,y.jsx)(v,Object.assign({},e,{children:u(e.children)}),String(t))}},7266:(e,t,l)=>{l.d(t,{R:()=>r,x:()=>o});var a=l(8225);const n={},i=a.createContext(n);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);