"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9084],{699:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"polyfills/intl-listformat","title":"Intl.ListFormat","description":"A spec-compliant polyfill for Intl.ListFormat fully tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-listformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-listformat","permalink":"/docs/polyfills/intl-listformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-listformat.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1733720228000,"frontMatter":{"id":"intl-listformat","title":"Intl.ListFormat"},"sidebar":"polyfills","previous":{"title":"Intl.getCanonicalLocales","permalink":"/docs/polyfills/intl-getcanonicallocales"},"next":{"title":"Intl.Locale","permalink":"/docs/polyfills/intl-locale"}}');var n=l(7557),r=l(2887),s=l(1994),i=l(2225);const o={id:"intl-listformat",title:"Intl.ListFormat"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A spec-compliant polyfill for Intl.ListFormat fully tested by the ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-listformat",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-listformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-listformat",alt:"size"})]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(s.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(i.A,{value:"npm",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-listformat\n"})})}),(0,n.jsx)(i.A,{value:"yarn",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-listformat\n"})})})]}),"\n",(0,n.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,n.jsx)(t.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,n.jsx)(t.code,{children:"Intl.Locale"})})," or ",(0,n.jsx)(t.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(t.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(t.code,{children:"Intl.ListFormat"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.jsx)(t.code,{children:"Intl.ListFormat.~locale.<locale>"})," to your list of features. For example:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.ListFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.ListFormat,Intl.ListFormat.~locale.en"><\/script>\n'})}),"\n",(0,n.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-listformat/polyfill'\nimport '@formatjs/intl-listformat/locale-data/en' // locale-data for en\n"})}),"\n",(0,n.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-listformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-listformat/polyfill-force')\n  await import(`@formatjs/intl-listformat/locale-data/${unsupportedLocale}`)\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsxs)(t.p,{children:["This library is fully ",(0,n.jsx)(t.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/ListFormat",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2225:(e,t,l)=>{l.d(t,{A:()=>s});l(8225);var a=l(3372);const n={tabItem:"tabItem_eZab"};var r=l(7557);function s(e){let{children:t,hidden:l,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,s),hidden:l,children:t})}},1994:(e,t,l)=>{l.d(t,{A:()=>I});var a=l(8225),n=l(3372),r=l(4244),s=l(1654),i=l(6562),o=l(3921),c=l(3502),u=l(1218);function d(e){var t,l;return null!=(t=null==(l=a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:l.filter(Boolean))?t:[]}function p(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=null!=t?t:function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:n}}=e;return{value:t,label:l,attributes:a,default:n}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,l])}function f(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const n=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=l?l:null}({queryString:t,groupId:l});return[(0,o.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace(Object.assign({},n.location,{search:t.toString()}))}),[r,n])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,r=p(e),[s,o]=(0,a.useState)((()=>function(e){var t;let{defaultValue:l,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!f({value:l,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+l+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return l}const n=null!=(t=a.find((e=>e.default)))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:l,groupId:n}),[h,b]=function(e){let{groupId:t}=e;const l=function(e){return e?"docusaurus.tab."+e:null}(t),[n,r]=(0,u.Dv)(l);return[n,(0,a.useCallback)((e=>{l&&r.set(e)}),[l,r])]}({groupId:n}),y=(()=>{const e=null!=c?c:h;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{y&&o(y)}),[y]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=l(4698);const y={tabList:"tabList_RKXE",tabItem:"tabItem_ohdL"};var v=l(7557);function j(e){let{className:t,block:l,selectedValue:a,selectValue:s,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,l=o.indexOf(t),n=i[l].value;n!==a&&(c(t),s(n))},d=e=>{var t;let l=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var a;const t=o.indexOf(e.currentTarget)+1;l=null!=(a=o[t])?a:o[0];break}case"ArrowLeft":{var n;const t=o.indexOf(e.currentTarget)-1;l=null!=(n=o[t])?n:o[o.length-1];break}}null==(t=l)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":l},t),children:i.map((e=>{let{value:t,label:l,attributes:r}=e;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:d,onClick:u},r,{className:(0,n.A)("tabs__item",y.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=l?l:t}),t)}))})}function g(e){let{lazy:t,children:l,selectedValue:r}=e;const s=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=h(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,v.jsx)(j,Object.assign({},t,e)),(0,v.jsx)(g,Object.assign({},t,e))]})}function I(e){const t=(0,b.default)();return(0,v.jsx)(x,Object.assign({},e,{children:d(e.children)}),String(t))}},2887:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>i});var a=l(8225);const n={},r=a.createContext(n);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);