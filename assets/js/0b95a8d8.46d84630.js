"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5880],{8221:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"polyfills/intl-getcanonicallocales","title":"Intl.getCanonicalLocales","description":"A spec-compliant polyfill/ponyfill for Intl.getCanonicalLocales tested by the official ECMAScript Conformance test suite","source":"@site/docs/polyfills/intl-getcanonicallocales.md","sourceDirName":"polyfills","slug":"/polyfills/intl-getcanonicallocales","permalink":"/docs/polyfills/intl-getcanonicallocales","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-getcanonicallocales.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1733589232000,"frontMatter":{"id":"intl-getcanonicallocales","title":"Intl.getCanonicalLocales"},"sidebar":"polyfills","previous":{"title":"Intl.DurationFormat","permalink":"/docs/polyfills/intl-durationformat"},"next":{"title":"Intl.ListFormat","permalink":"/docs/polyfills/intl-listformat"}}');var n=t(7557),s=t(6847),i=t(3083),r=t(4187);const o={id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},c=void 0,u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Via polyfill-fastly.io",id:"via-polyfill-fastlyio",level:3},{value:"Simple",id:"simple",level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",level:3},{value:"Tests",id:"tests",level:2}];function p(e){const l={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.p,{children:["A spec-compliant polyfill/ponyfill for ",(0,n.jsx)(l.code,{children:"Intl.getCanonicalLocales"})," tested by the ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262",children:"official ECMAScript Conformance test suite"})]}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.a,{href:"https://www.npmjs.org/package/@formatjs/intl-getcanonicallocales",children:(0,n.jsx)(l.img,{src:"https://img.shields.io/npm/v/@formatjs/intl-getcanonicallocales.svg?style=flat-square",alt:"npm Version"})}),"\n",(0,n.jsx)(l.img,{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-getcanonicallocales",alt:"size"})]}),"\n",(0,n.jsx)(l.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,n.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,n.jsx)(r.A,{value:"npm",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"npm i @formatjs/intl-getcanonicallocales\n"})})}),(0,n.jsx)(r.A,{value:"yarn",children:(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-sh",children:"yarn add @formatjs/intl-getcanonicallocales\n"})})})]}),"\n",(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l.h3,{id:"via-polyfill-fastlyio",children:"Via polyfill-fastly.io"}),"\n",(0,n.jsxs)(l.p,{children:["You can use ",(0,n.jsx)(l.a,{href:"https://polyfill-fastly.io/",children:"polyfill-fastly.io URL Builder"})," to create a polyfill script tag for ",(0,n.jsx)(l.code,{children:"Intl.GetCanonicalLocales"}),". For example:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-html",children:'\x3c!-- Polyfill Intl.GetCanonicalLocales & its dependencies --\x3e\n<script src="https://polyfill-fastly.io/v3/polyfill.min.js?features=Intl.GetCanonicalLocales"><\/script>\n'})}),"\n",(0,n.jsx)(l.h3,{id:"simple",children:"Simple"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import '@formatjs/intl-getcanonicallocales/polyfill'\n"})}),"\n",(0,n.jsx)(l.h3,{id:"dynamic-import--capability-detection",children:"Dynamic import + capability detection"}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import {shouldPolyfill} from '@formatjs/intl-getcanonicallocales/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.getCanonicalLocales\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-getcanonicallocales/polyfill')\n  }\n  // Alternatively, force the polyfill regardless of support\n  await import('@formatjs/intl-getcanonicallocales/polyfill-force')\n}\n"})}),"\n",(0,n.jsx)(l.h2,{id:"tests",children:"Tests"}),"\n",(0,n.jsxs)(l.p,{children:["This library is ",(0,n.jsx)(l.a,{href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/getCanonicalLocales",children:"test262"}),"-compliant."]})]})}function f(e={}){const{wrapper:l}={...(0,s.R)(),...e.components};return l?(0,n.jsx)(l,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},4187:(e,l,t)=>{t.d(l,{A:()=>i});t(8225);var a=t(3372);const n={tabItem:"tabItem_Xiaj"};var s=t(7557);function i(e){let{children:l,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(n.tabItem,i),hidden:t,children:l})}},3083:(e,l,t)=>{t.d(l,{A:()=>I});var a=t(8225),n=t(3372),s=t(3791),i=t(1654),r=t(1565),o=t(4960),c=t(4449),u=t(8536);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:l}=e;return!!l&&"object"==typeof l&&"value"in l}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:l,children:t}=e;return(0,a.useMemo)((()=>{const e=l??function(e){return d(e).map((e=>{let{props:{value:l,label:t,attributes:a,default:n}}=e;return{value:l,label:t,attributes:a,default:n}}))}(t);return function(e){const l=(0,c.XI)(e,((e,l)=>e.value===l.value));if(l.length>0)throw new Error(`Docusaurus error: Duplicate values "${l.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[l,t])}function f(e){let{value:l,tabValues:t}=e;return t.some((e=>e.value===l))}function m(e){let{queryString:l=!1,groupId:t}=e;const n=(0,i.W6)(),s=function(e){let{queryString:l=!1,groupId:t}=e;if("string"==typeof l)return l;if(!1===l)return null;if(!0===l&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:l,groupId:t});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const l=new URLSearchParams(n.location.search);l.set(s,e),n.replace({...n.location,search:l.toString()})}),[s,n])]}function h(e){const{defaultValue:l,queryString:t=!1,groupId:n}=e,s=p(e),[i,o]=(0,a.useState)((()=>function(e){let{defaultValue:l,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(l){if(!f({value:l,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${l}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return l}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:s}))),[c,d]=m({queryString:t,groupId:n}),[h,g]=function(e){let{groupId:l}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(l),[n,s]=(0,u.Dv)(t);return[n,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:n}),y=(()=>{const e=c??h;return f({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{y&&o(y)}),[y]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(1407);const y={tabList:"tabList_f5BN",tabItem:"tabItem_xc5d"};var b=t(7557);function v(e){let{className:l,block:t,selectedValue:a,selectValue:i,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const l=e.currentTarget,t=o.indexOf(l),n=r[t].value;n!==a&&(c(l),i(n))},d=e=>{let l=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;l=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;l=o[t]??o[o.length-1];break}}l?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},l),children:r.map((e=>{let{value:l,label:t,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===l?0:-1,"aria-selected":a===l,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,n.A)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":a===l}),children:t??l},l)}))})}function x(e){let{lazy:l,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(l){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,l)=>(0,a.cloneElement)(e,{key:l,hidden:e.props.value!==s})))})}function j(e){const l=h(e);return(0,b.jsxs)("div",{className:(0,n.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...l,...e}),(0,b.jsx)(x,{...l,...e})]})}function I(e){const l=(0,g.default)();return(0,b.jsx)(j,{...e,children:d(e.children)},String(l))}},6847:(e,l,t)=>{t.d(l,{R:()=>i,x:()=>r});var a=t(8225);const n={},s=a.createContext(n);function i(e){const l=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:l},e.children)}}}]);