"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{5698:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"polyfills/intl-getcanonicallocales","title":"Intl.getCanonicalLocales","description":"A spec-compliant polyfill/ponyfill for Intl.getCanonicalLocales tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-getcanonicallocales.md","sourceDirName":"polyfills","slug":"/polyfills/intl-getcanonicallocales","permalink":"/docs/polyfills/intl-getcanonicallocales","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-getcanonicallocales.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1739762287000,"frontMatter":{"id":"intl-getcanonicallocales","title":"Intl.getCanonicalLocales"},"sidebar":"polyfills","previous":{"title":"Intl.DurationFormat","permalink":"/docs/polyfills/intl-durationformat"},"next":{"title":"Intl.ListFormat","permalink":"/docs/polyfills/intl-listformat"}}');var a=l(6106),s=l(972),i=l(4008),r=l(701);const o={id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["A spec-compliant polyfill/ponyfill for ",(0,a.jsx)(t.code,{children:"Intl.getCanonicalLocales"})," tested by the ",(0,a.jsx)(t.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://www.npmjs.org/package/@formatjs/intl-getcanonicallocales",children:(0,a.jsx)(t.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-getcanonicallocales.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,a.jsx)(t.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-getcanonicallocales",alt:"size"})]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(r.A,{value:"npm",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"npm i @formatjs/intl-getcanonicallocales\n"})})}),(0,a.jsx)(r.A,{value:"yarn",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"yarn add @formatjs/intl-getcanonicallocales\n"})})})]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,a.jsx)(t.code,{children:"Intl.GetCanonicalLocales"}),". For example:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.GetCanonicalLocales & its dependencies --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.GetCanonicalLocales"><\/script>\n'})}),"\n",(0,a.jsx)(t.h3,{id:"simple",children:"Simple"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import '@formatjs/intl-getcanonicallocales/polyfill'\n"})}),"\n",(0,a.jsx)(t.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-getcanonicallocales/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.getCanonicalLocales\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-getcanonicallocales/polyfill')\n  }\n  // Alternatively, force the polyfill regardless of support\n  await import('@formatjs/intl-getcanonicallocales/polyfill-force')\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"tests",children:"Tests"}),"\n",(0,a.jsxs)(t.p,{children:["This library is ",(0,a.jsx)(t.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/getCanonicalLocales",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},701:(e,t,l)=>{l.d(t,{A:()=>i});l(7378);var n=l(3372);const a={tabItem:"tabItem_kWfR"};var s=l(6106);function i(e){let{children:t,hidden:l,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,i),hidden:l,children:t})}},4008:(e,t,l)=>{l.d(t,{A:()=>I});var n=l(7378),a=l(3372),s=l(6551),i=l(1654),r=l(1624),o=l(8040),c=l(9369),u=l(4322);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:l}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:a}}=e;return{value:t,label:l,attributes:n,default:a}}))}(l);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function f(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,o.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:l=!1,groupId:a}=e,s=p(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,d]=m({queryString:l,groupId:a}),[h,g]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(l);return[a,(0,n.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:a}),y=(()=>{const e=c??h;return f({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=l(2212);const y={tabList:"tabList_VoPX",tabItem:"tabItem_x220"};var b=l(6106);function v(e){let{className:t,block:l,selectedValue:n,selectValue:i,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,l=o.indexOf(t),a=r[l].value;a!==n&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=o.indexOf(e.currentTarget)+1;t=o[l]??o[0];break}case"ArrowLeft":{const l=o.indexOf(e.currentTarget)-1;t=o[l]??o[o.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":l},t),children:r.map((e=>{let{value:t,label:l,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":n===t}),children:l??t},t)}))})}function x(e){let{lazy:t,children:l,selectedValue:s}=e;const i=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=h(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...t,...e}),(0,b.jsx)(x,{...t,...e})]})}function I(e){const t=(0,g.A)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(t))}},972:(e,t,l)=>{l.d(t,{R:()=>i,x:()=>r});var n=l(7378);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);