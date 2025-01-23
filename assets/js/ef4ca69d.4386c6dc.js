"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5383],{5897:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"polyfills/intl-numberformat","title":"Intl.NumberFormat (ESNext)","description":"A polyfill for ESNext Intl.NumberFormat and Number.prototype.toLocaleString.","source":"@site/docs/polyfills/intl-numberformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-numberformat","permalink":"/docs/polyfills/intl-numberformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-numberformat.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737657233000,"frontMatter":{"id":"intl-numberformat","title":"Intl.NumberFormat (ESNext)"},"sidebar":"polyfills","previous":{"title":"Intl.LocaleMatcher","permalink":"/docs/polyfills/intl-localematcher"},"next":{"title":"Intl.PluralRules","permalink":"/docs/polyfills/intl-pluralrules"}}');var r=n(6106),a=n(972),i=n(288),s=n(4083);const o={id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Supported Units",id:"supported-units",level:2},{value:"Simple Units",id:"simple-units",level:3},{value:"Compound Units",id:"compound-units",level:3}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.p,{children:["A polyfill for ESNext ",(0,r.jsx)(l.a,{href:"https://tc39.es/ecma402/#numberformat-objects",children:(0,r.jsx)(l.code,{children:"Intl.NumberFormat"})})," and ",(0,r.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString",children:(0,r.jsx)(l.code,{children:"Number.prototype.toLocaleString"})}),"."]}),"\n",(0,r.jsxs)(l.p,{children:[(0,r.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-numberformat",children:(0,r.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-numberformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,r.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-numberformat",alt:"size"})]}),"\n",(0,r.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(s.A,{value:"npm",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-numberformat\n"})})}),(0,r.jsx)(s.A,{value:"yarn",children:(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-numberformat\n"})})})]}),"\n",(0,r.jsx)(l.h2,{id:"requirements",children:"Requirements"}),"\n",(0,r.jsx)(l.p,{children:"This package requires the following capabilities:"}),"\n",(0,r.jsxs)(l.ul,{children:["\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales",children:(0,r.jsx)(l.code,{children:"Intl.getCanonicalLocales"})})," or ",(0,r.jsx)(l.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"polyfill"})]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale",children:(0,r.jsx)(l.code,{children:"Intl.Locale"})})," or ",(0,r.jsx)(l.a,{href:"/docs/polyfills/intl-locale",children:"polyfill"}),"."]}),"\n",(0,r.jsxs)(l.li,{children:[(0,r.jsx)(l.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:(0,r.jsx)(l.code,{children:"Intl.PluralRules"})})," or ",(0,r.jsx)(l.a,{href:"/docs/polyfills/intl-pluralrules",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,r.jsx)(l.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(l.p,{children:["Everything in the ES2020 Internationalization API spec (",(0,r.jsx)(l.a,{href:"https://tc39.es/ecma402",children:"https://tc39.es/ecma402"}),")."]}),"\n",(0,r.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,r.jsxs)(l.p,{children:["You can use ",(0,r.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,r.jsx)(l.code,{children:"Intl.NumberFormat"}),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,r.jsx)(l.code,{children:"Intl.NumberFormat.~locale.<locale>"}),", as well as locale data for any required polyfills, to your list of features. For example:"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en"><\/script>\n'})}),"\n",(0,r.jsxs)(l.p,{children:["Or if ",(0,r.jsx)(l.code,{children:"Intl.PluralRules"})," needs to be polyfilled as well:"]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en,Intl.PluralRules.~locale.en"><\/script>\n'})}),"\n",(0,r.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-numberformat/polyfill'\nimport '@formatjs/intl-numberformat/locale-data/en' // locale-data for en\n"})}),"\n",(0,r.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-numberformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-numberformat/polyfill-force')\n  await import(`@formatjs/intl-numberformat/locale-data/${unsupportedLocale}`)\n}\n"})}),"\n",(0,r.jsx)(l.h2,{id:"supported-units",children:"Supported Units"}),"\n",(0,r.jsx)(l.h3,{id:"simple-units",children:"Simple Units"}),"\n",(0,r.jsxs)(l.p,{children:["Currently, ",(0,r.jsx)(l.a,{href:"https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier",children:"the spec"})," defines a list of sanctioned units as below."]}),"\n",(0,r.jsx)(l.pre,{children:(0,r.jsx)(l.code,{className:"language-tsx",children:"type Unit =\n  | 'acre'\n  | 'bit'\n  | 'byte'\n  | 'celsius'\n  | 'centimeter'\n  | 'day'\n  | 'degree'\n  | 'fahrenheit'\n  | 'fluid-ounce'\n  | 'foot'\n  | 'gallon'\n  | 'gigabit'\n  | 'gigabyte'\n  | 'gram'\n  | 'hectare'\n  | 'hour'\n  | 'inch'\n  | 'kilobit'\n  | 'kilobyte'\n  | 'kilogram'\n  | 'kilometer'\n  | 'liter'\n  | 'megabit'\n  | 'megabyte'\n  | 'meter'\n  | 'mile'\n  | 'mile-scandinavian'\n  | 'millimeter'\n  | 'milliliter'\n  | 'millisecond'\n  | 'minute'\n  | 'month'\n  | 'ounce'\n  | 'percent'\n  | 'petabyte'\n  | 'pound'\n  | 'second'\n  | 'stone'\n  | 'terabit'\n  | 'terabyte'\n  | 'week'\n  | 'yard'\n  | 'year'\n"})}),"\n",(0,r.jsx)(l.h3,{id:"compound-units",children:"Compound Units"}),"\n",(0,r.jsxs)(l.p,{children:["You can specify ",(0,r.jsx)(l.code,{children:"X-per-Y"})," unit, where ",(0,r.jsx)(l.code,{children:"X"})," and ",(0,r.jsx)(l.code,{children:"Y"})," are sanctioned simple units (e.g. ",(0,r.jsx)(l.code,{children:"kilometer-per-hour"}),").\nThe library will choose the best-fit localized pattern to format this compound unit."]})]})}function m(e={}){const{wrapper:l}={...(0,a.R)(),...e.components};return l?(0,r.jsx)(l,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},4083:(e,l,n)=>{n.d(l,{A:()=>i});n(7378);var t=n(3372);const r={tabItem:"tabItem_GNoz"};var a=n(6106);function i(e){let{children:l,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,i),hidden:n,children:l})}},288:(e,l,n)=>{n.d(l,{A:()=>I});var t=n(7378),r=n(3372),a=n(229),i=n(1654),s=n(8890),o=n(7710),c=n(6940),u=n(9834);function d(e){var l,n;return null!=(l=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?l:[]}function p(e){const{values:l,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=l?l:function(e){return d(e).map((e=>{let{props:{value:l,label:n,attributes:t,default:r}}=e;return{value:l,label:n,attributes:t,default:r}}))}(n);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error('Docusaurus error: Duplicate values "'+l.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[l,n])}function m(e){let{value:l,tabValues:n}=e;return n.some((e=>e.value===l))}function f(e){let{queryString:l=!1,groupId:n}=e;const r=(0,i.W6)(),a=function(e){let{queryString:l=!1,groupId:n}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:l,groupId:n});return[(0,o.aZ)(a),(0,t.useCallback)((e=>{if(!a)return;const l=new URLSearchParams(r.location.search);l.set(a,e),r.replace(Object.assign({},r.location,{search:l.toString()}))}),[a,r])]}function h(e){const{defaultValue:l,queryString:n=!1,groupId:r}=e,a=p(e),[i,o]=(0,t.useState)((()=>function(e){var l;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(l=t.find((e=>e.default)))?l:t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:a}))),[c,d]=f({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:l}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(l),[r,a]=(0,u.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),y=(()=>{const e=null!=c?c:h;return m({value:e,tabValues:a})?e:null})();(0,s.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(1682);const y={tabList:"tabList_DGQs",tabItem:"tabItem_k9HR"};var j=n(6106);function x(e){let{className:l,block:n,selectedValue:t,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const l=e.currentTarget,n=o.indexOf(l),r=s[n].value;r!==t&&(c(l),i(r))},d=e=>{var l;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var t;const l=o.indexOf(e.currentTarget)+1;n=null!=(t=o[l])?t:o[0];break}case"ArrowLeft":{var r;const l=o.indexOf(e.currentTarget)-1;n=null!=(r=o[l])?r:o[o.length-1];break}}null==(l=n)||l.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},l),children:s.map((e=>{let{value:l,label:n,attributes:a}=e;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:t===l?0:-1,"aria-selected":t===l,ref:e=>{o.push(e)},onKeyDown:d,onClick:u},a,{className:(0,r.A)("tabs__item",y.tabItem,null==a?void 0:a.className,{"tabs__item--active":t===l}),children:null!=n?n:l}),l)}))})}function v(e){let{lazy:l,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(l){const e=i.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,l)=>(0,t.cloneElement)(e,{key:l,hidden:e.props.value!==a})))})}function g(e){const l=h(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",y.tabList),children:[(0,j.jsx)(x,Object.assign({},l,e)),(0,j.jsx)(v,Object.assign({},l,e))]})}function I(e){const l=(0,b.default)();return(0,j.jsx)(g,Object.assign({},e,{children:d(e.children)}),String(l))}},972:(e,l,n)=>{n.d(l,{R:()=>i,x:()=>s});var t=n(7378);const r={},a=t.createContext(r);function i(e){const l=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function s(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:l},e.children)}}}]);