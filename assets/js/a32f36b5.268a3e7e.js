"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9547],{8132:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"polyfills/intl-pluralrules","title":"Intl.PluralRules","description":"A spec-compliant polyfill for Intl.PluralRules fully tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-pluralrules.md","sourceDirName":"polyfills","slug":"/polyfills/intl-pluralrules","permalink":"/docs/polyfills/intl-pluralrules","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-pluralrules.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1742905718000,"frontMatter":{"id":"intl-pluralrules","title":"Intl.PluralRules"},"sidebar":"polyfills","previous":{"title":"Intl.NumberFormat (ESNext)","permalink":"/docs/polyfills/intl-numberformat"},"next":{"title":"Intl.RelativeTimeFormat","permalink":"/docs/polyfills/intl-relativetimeformat"}}');var n=t(6106),r=t(7389),s=t(5516),i=t(8846);const o={id:"intl-pluralrules",title:"Intl.PluralRules"},u=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"React Native",id:"react-native",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A spec-compliant polyfill for ",(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,n.jsx)(l.code,{children:"Intl.PluralRules"})})," fully tested by the ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-pluralrules",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-pluralrules.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-pluralrules",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(s.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-pluralrules\n"})})}),(0,n.jsx)(i.A,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-pluralrules\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(l.ul,{children:["\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(l.li,{children:[(0,n.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.PluralRules"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(l.code,{children:"Intl.PluralRules.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.PluralRules, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.PluralRules,Intl.PluralRules.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-pluralrules/polyfill'\nimport '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(l.h3,{id:"react-native",children:"React Native"}),"\n",(0,n.jsxs)(l.p,{children:["The polyfill conditional detection code runs ",(0,n.jsx)(l.a,{href:"https://github.com/formatjs/formatjs/issues/4463",children:"very slowly on Android"})," and can slow down your app's startup time by seconds. Since React Native uses Hermes which does not support ",(0,n.jsx)(l.code,{children:"Intl.PluralRules"}),", import ",(0,n.jsx)(l.code,{children:"/polyfill-force"})," instead for much better performance:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-pluralrules/polyfill-force' // instead of /polyfill\nimport '@formatjs/intl-pluralrules/locale-data/en'\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-pluralrules/polyfill-force')\n  await import(`@formatjs/intl-pluralrules/locale-data/${unsupportedLocale}`)\n}\n"})})]})}function f(e={}){const{wrapper:l}={...(0,r.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},8846:(e,l,t)=>{t.d(l,{A:()=>s});t(7378);var a=t(3372);const n={tabItem:"tabItem_HWzn"};var r=t(6106);function s(e){let{children:l,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:t,children:l})}},5516:(e,l,t)=>{t.d(l,{A:()=>I});var a=t(7378),n=t(3372),r=t(485),s=t(1654),i=t(645),o=t(414),u=t(9615),c=t(4928);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:l,children:t}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:a,default:n}}=e;return{value:l,label:t,attributes:a,default:n}}))}(t);return function(e){const l=(0,u.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,t])}function f(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function h(e){let{queryString:l=!1,groupId:t}=e;const n=(0,s.W6)(),r=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:l,groupId:t});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const l=new URLSearchParams(n.location.search);l.set(r,e),n.replace({...n.location,search:l.toString()})}),[r,n])]}function m(e){const{defaultValue:l,queryString:t=!1,groupId:n}=e,r=p(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!f({value:l,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:r}))),[u,d]=h({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:l}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(l),[n,r]=(0,c.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),y=(()=>{const e=u??m;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(1751);const y={tabList:"tabList_YESZ",tabItem:"tabItem_xkch"};var v=t(6106);function j(e){let{className:l,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const l=e.currentTarget,t=o.indexOf(l),n=i[t].value;n!==a&&(u(l),s(n))},d=e=>{let l=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;l=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;l=o[t]??o[o.length-1];break}}l?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},l),children:i.map((e=>{let{value:l,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...r,className:(0,n.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":a===l}),children:t??l},l)}))})}function x(e){let{lazy:l,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==r})))})}function g(e){const l=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,v.jsx)(j,{...l,...e}),(0,v.jsx)(x,{...l,...e})]})}function I(e){const l=(0,b.A)();return(0,v.jsx)(g,{...e,children:d(e.children)},String(l))}},7389:(e,l,t)=>{t.d(l,{R:()=>s,x:()=>i});var a=t(7378);const n={},r=a.createContext(n);function s(e){const l=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function i(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:l},e.children)}}}]);