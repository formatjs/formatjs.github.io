"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1470],{2971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"polyfills/intl-durationformat","title":"Intl.DurationFormat","description":"A spec-compliant polyfill for Intl.DurationFormat","source":"@site/docs/polyfills/intl-durationformat.md","sourceDirName":"polyfills","slug":"/polyfills/intl-durationformat","permalink":"/docs/polyfills/intl-durationformat","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-durationformat.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1732308084000,"frontMatter":{"id":"intl-durationformat","title":"Intl.DurationFormat"},"sidebar":"polyfills","previous":{"title":"Intl.DisplayNames","permalink":"/docs/polyfills/intl-displaynames"},"next":{"title":"Intl.getCanonicalLocales","permalink":"/docs/polyfills/intl-getcanonicallocales"}}');var a=n(6106),r=n(2036),o=n(6011),i=n(7093);const s={id:"intl-durationformat",title:"Intl.DurationFormat"},u=void 0,c={},d=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Usage",id:"usage",level:2},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"A spec-compliant polyfill for Intl.DurationFormat"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-durationformat",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-durationformat.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,a.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-durationformat",alt:"size"})]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(i.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-durationformat\n"})})}),(0,a.jsx)(i.A,{value:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-durationformat\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat",children:(0,a.jsx)(t.code,{children:"Intl.ListFormat"})})," or ",(0,a.jsx)(t.a,{href:"/docs/polyfills/intl-listformat",children:"polyfill"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",children:(0,a.jsx)(t.code,{children:"Intl.NumberFormat"})})," or ",(0,a.jsx)(t.a,{href:"/docs/polyfills/intl-numberformat",children:"polyfill"}),"."]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-durationformat/polyfill'\n"})}),"\n",(0,a.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-durationformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-durationformat/polyfill-force')\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},7093:(e,t,n)=>{n.d(t,{A:()=>o});n(7378);var l=n(3372);const a={tabItem:"tabItem_Bn0o"};var r=n(6106);function o(e){let{children:t,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.A)(a.tabItem,o),hidden:n,children:t})}},6011:(e,t,n)=>{n.d(t,{A:()=>I});var l=n(7378),a=n(3372),r=n(3778),o=n(505),i=n(3954),s=n(7527),u=n(8572),c=n(1085);function d(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:a}}=e;return{value:t,label:n,attributes:l,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s.aZ)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,d]=f({queryString:n,groupId:a}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Dv)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),v=(()=>{const e=u??h;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(9610);const v={tabList:"tabList_S6lQ",tabItem:"tabItem_Se8m"};var y=n(6106);function g(e){let{className:t,block:n,selectedValue:l,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=s.indexOf(t),a=i[n].value;a!==l&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,ref:e=>s.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":l===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...t,...e}),(0,y.jsx)(j,{...t,...e})]})}function I(e){const t=(0,b.default)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},2036:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var l=n(7378);const a={},r=l.createContext(a);function o(e){const t=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),l.createElement(r.Provider,{value:t},e.children)}}}]);