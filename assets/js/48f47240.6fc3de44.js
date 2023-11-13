"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1145],{6721:(e,l,a)=>{a.r(l),a.d(l,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(5250),t=a(7449),s=a(8331),r=a(5376);const i={id:"intl-displaynames",title:"Intl.DisplayNames"},o=void 0,c={id:"polyfills/intl-displaynames",title:"Intl.DisplayNames",description:"A polyfill for Intl.DisplayNames.",source:"@site/docs/polyfills/intl-displaynames.md",sourceDirName:"polyfills",slug:"/polyfills/intl-displaynames",permalink:"/docs/polyfills/intl-displaynames",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-displaynames.md",tags:[],version:"current",lastUpdatedBy:"Long Ho",lastUpdatedAt:1699157220,formattedLastUpdatedAt:"Nov 5, 2023",frontMatter:{id:"intl-displaynames",title:"Intl.DisplayNames"},sidebar:"polyfills",previous:{title:"Intl.DateTimeFormat (ESNext)",permalink:"/docs/polyfills/intl-datetimeformat"},next:{title:"Intl.getCanonicalLocales",permalink:"/docs/polyfills/intl-getcanonicallocales"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill.io",id:"via-polyfillio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A polyfill for ",(0,n.jsx)(l.a,{href:"https://tc39.es/proposal-intl-displaynames",children:(0,n.jsx)(l.code,{children:"Intl.DisplayNames"})}),"."]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-displaynames",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-displaynames.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-displaynames",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n","\n",(0,n.jsxs)(s.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(r.Z,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-displaynames\n"})})}),(0,n.jsx)(r.Z,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-displaynames\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"features",children:"Features"}),"\n",(0,n.jsxs)(l.p,{children:["Everything in ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/proposal-intl-displaynames",children:"intl-displaynames proposal"}),"."]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfillio",children:"Via polyfill.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill.io/v3/url-builder/",children:"polyfill.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.DisplayNames"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(l.code,{children:"Intl.DisplayNames.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.DisplayNames, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.DisplayNames,Intl.DisplayNames.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-displaynames/polyfill'\nimport '@formatjs/intl-displaynames/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-displaynames/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-displaynames/polyfill-force')\n  await import(`@formatjs/intl-displaynames/locale-data/${locale}`)\n}\n"})})]})}function m(e={}){const{wrapper:l}={...(0,t.a)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5376:(e,l,a)=>{a.d(l,{Z:()=>r});a(79);var n=a(9841);const t="tabItem_RPGj";var s=a(5250);function r(e){let{children:l,hidden:a,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t,r),hidden:a,children:l})}},8331:(e,l,a)=>{a.d(l,{Z:()=>w});var n=a(79),t=a(9841),s=a(1450),r=a(7911),i=a(2743),o=a(1286),c=a(8434),u=a(5496);function d(e){var l,a;return null!=(l=null==(a=n.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))?void 0:a.filter(Boolean))?l:[]}function p(e){const{values:l,children:a}=e;return(0,n.useMemo)(()=>{const e=null!=l?l:function(e){return d(e).map(e=>{let{props:{value:l,label:a,attributes:n,default:t}}=e;return{value:l,label:a,attributes:n,default:t}})}(a);return function(e){const l=(0,c.l)(e,(e,l)=>e.value===l.value);if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map(e=>e.value).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e},[l,a])}function m(e){let{value:l,tabValues:a}=e;return a.some(e=>e.value===l)}function f(e){let{queryString:l=!1,groupId:a}=e;const t=(0,r.k6)(),s=function(e){let{queryString:l=!1,groupId:a}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:l,groupId:a});return[(0,o._X)(s),(0,n.useCallback)(e=>{if(!s)return;const l=new URLSearchParams(t.location.search);l.set(s,e),t.replace({...t.location,search:l.toString()})},[s,t])]}function h(e){const{defaultValue:l,queryString:a=!1,groupId:t}=e,s=p(e),[r,o]=(0,n.useState)(()=>function(e){var l;let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map(e=>e.value).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}const t=null!=(l=n.find(e=>e.default))?l:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:l,tabValues:s})),[c,d]=f({queryString:a,groupId:t}),[h,y]=function(e){let{groupId:l}=e;const a=function(e){return e?"docusaurus.tab."+e:null}(l),[t,s]=(0,u.Nk)(a);return[t,(0,n.useCallback)(e=>{a&&s.set(e)},[a,s])]}({groupId:t}),v=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:s})?e:null})();(0,i.Z)(()=>{v&&o(v)},[v]);return{selectedValue:r,selectValue:(0,n.useCallback)(e=>{if(!m({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),y(e)},[d,y,s]),tabValues:s}}var y=a(7570);const v="tabList_CFtg",b="tabItem_TF0o";var j=a(5250);function g(e){let{className:l,block:a,selectedValue:n,selectValue:r,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const l=e.currentTarget,a=o.indexOf(l),t=i[a].value;t!==n&&(c(l),r(t))},d=e=>{var l;let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var n;const l=o.indexOf(e.currentTarget)+1;a=null!=(n=o[l])?n:o[0];break}case"ArrowLeft":{var t;const l=o.indexOf(e.currentTarget)-1;a=null!=(t=o[l])?t:o[o.length-1];break}}null==(l=a)||l.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},l),children:i.map(e=>{let{value:l,label:a,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,t.Z)("tabs__item",b,null==s?void 0:s.className,{"tabs__item--active":n===l}),children:null!=a?a:l},l)})})}function x(e){let{lazy:l,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(l){const e=s.find(e=>e.props.value===t);return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==t}))})}function I(e){const l=h(e);return(0,j.jsxs)("div",{className:(0,t.Z)("tabs-container",v),children:[(0,j.jsx)(g,{...e,...l}),(0,j.jsx)(x,{...e,...l})]})}function w(e){const l=(0,y.Z)();return(0,j.jsx)(I,{...e,children:d(e.children)},String(l))}},7449:(e,l,a)=>{a.d(l,{Z:()=>i,a:()=>r});var n=a(79);const t={},s=n.createContext(t);function r(e){const l=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(s.Provider,{value:l},e.children)}}}]);