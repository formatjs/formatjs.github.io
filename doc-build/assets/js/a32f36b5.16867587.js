"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9547],{7637:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(9214),a=t(9813),r=t(823),s=t(9168);const i={id:"intl-pluralrules",title:"Intl.PluralRules"},o=void 0,u={id:"polyfills/intl-pluralrules",title:"Intl.PluralRules",description:"A spec-compliant polyfill for Intl.PluralRules fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-pluralrules.md",sourceDirName:"polyfills",slug:"/polyfills/intl-pluralrules",permalink:"/docs/polyfills/intl-pluralrules",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-pluralrules.md",tags:[],version:"current",frontMatter:{id:"intl-pluralrules",title:"Intl.PluralRules"},sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ESNext)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.RelativeTimeFormat",permalink:"/docs/polyfills/intl-relativetimeformat"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A spec-compliant polyfill for ",(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,n.jsx)(l.code,{children:"Intl.PluralRules"})})," fully tested by the ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-pluralrules",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-pluralrules.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-pluralrules",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(r.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(s.A,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-pluralrules\n"})})}),(0,n.jsx)(s.A,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-pluralrules\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.PluralRules"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(l.code,{children:"Intl.PluralRules.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.PluralRules, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.PluralRules,Intl.PluralRules.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-pluralrules/polyfill'\nimport '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-pluralrules/polyfill-force')\n  await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`)\n}\n"})})]})}function f(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9168:(e,l,t)=>{t.d(l,{A:()=>s});t(8318);var n=t(3372);const a={tabItem:"tabItem_Mnzc"};var r=t(9214);function s(e){let{children:l,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:l})}},823:(e,l,t)=>{t.d(l,{A:()=>I});var n=t(8318),a=t(3372),r=t(424),s=t(6325),i=t(9255),o=t(9253),u=t(4506),c=t(2648);function d(e){var l,t;return null!=(l=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?l:[]}function p(e){const{values:l,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:n,default:a}}=e;return{value:l,label:t,attributes:n,default:a}}))}(t);return function(e){const l=(0,u.X)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,t])}function f(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function h(e){let{queryString:l=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:l,groupId:t});return[(0,o.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(a.location.search);l.set(r,e),a.replace({...a.location,search:l.toString()})}),[r,a])]}function m(e){const{defaultValue:l,queryString:t=!1,groupId:a}=e,r=p(e),[s,o]=(0,n.useState)((()=>function(e){var l;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const a=null!=(l=n.find((e=>e.default)))?l:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:r}))),[u,d]=h({queryString:t,groupId:a}),[m,b]=function(e){let{groupId:l}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(l),[a,r]=(0,c.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),v=(()=>{const e=null!=u?u:m;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{v&&o(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(7141);const v={tabList:"tabList_i3aU",tabItem:"tabItem_RMkq"};var y=t(9214);function j(e){let{className:l,block:t,selectedValue:n,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const l=e.currentTarget,t=o.indexOf(l),a=i[t].value;a!==n&&(u(l),s(a))},d=e=>{var l;let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var n;const l=o.indexOf(e.currentTarget)+1;t=null!=(n=o[l])?n:o[0];break}case"ArrowLeft":{var a;const l=o.indexOf(e.currentTarget)-1;t=null!=(a=o[l])?a:o[o.length-1];break}}null==(l=t)||l.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},l),children:i.map((e=>{let{value:l,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===l?0:-1,"aria-selected":n===l,ref:e=>o.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",v.tabItem,null==r?void 0:r.className,{"tabs__item--active":n===l}),children:null!=t?t:l},l)}))})}function x(e){let{lazy:l,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,l)=>(0,n.cloneElement)(e,{key:l,hidden:e.props.value!==a})))})}function g(e){const l=m(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(j,{...l,...e}),(0,y.jsx)(x,{...l,...e})]})}function I(e){const l=(0,b.default)();return(0,y.jsx)(g,{...e,children:d(e.children)},String(l))}},9813:(e,l,t)=>{t.d(l,{R:()=>s,x:()=>i});var n=t(8318);const a={},r=n.createContext(a);function s(e){const l=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:l},e.children)}}}]);