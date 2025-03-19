"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8557],{640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"guides/develop","title":"Develop with formatjs","description":"Aside from a strong focus on facilitating i18n production pipeline, formatjs also aims to improve i18n DevEx with our eslint-plugin-formatjs.","source":"@site/docs/guides/develop.md","sourceDirName":"guides","slug":"/guides/develop","permalink":"/docs/guides/develop","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/develop.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1742399024000,"frontMatter":{"id":"develop","title":"Develop with formatjs"},"sidebar":"docs","previous":{"title":"Message Distribution","permalink":"/docs/getting-started/message-distribution"},"next":{"title":"Bundling with formatjs","permalink":"/docs/guides/bundler-plugins"}}');var s=t(6106),a=t(6039),o=t(3744),i=t(1818);const l={id:"develop",title:"Develop with formatjs"},c=void 0,u={},d=[{value:"Linter Installation",id:"linter-installation",level:2},{value:"Error Codes",id:"error-codes",level:2},{value:"<code>FORMAT_ERROR</code>",id:"format_error",level:3},{value:"<code>UNSUPPORTED_FORMATTER</code>",id:"unsupported_formatter",level:3},{value:"<code>INVALID_CONFIG</code>",id:"invalid_config",level:3},{value:"<code>MISSING_DATA</code>",id:"missing_data",level:3},{value:"<code>MISSING_TRANSLATION</code>",id:"missing_translation",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Aside from a strong focus on facilitating i18n production pipeline, ",(0,s.jsx)(n.code,{children:"formatjs"})," also aims to improve i18n DevEx with our ",(0,s.jsx)(n.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"linter-installation",children:"Linter Installation"}),"\n","\n",(0,s.jsxs)(o.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(i.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm i -D eslint-plugin-formatjs eslint\n"})})}),(0,s.jsx)(i.A,{value:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn add -D eslint-plugin-formatjs eslint\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"Then in your eslint config:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/no-offset": "error"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Head over to ",(0,s.jsx)(n.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"})," for more details on our rules."]}),"\n",(0,s.jsx)(n.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"react-intl"})," is designed to fail fast when there's a configuration issue but fall back to ",(0,s.jsx)(n.code,{children:"defaultLocale"})," when there's a translation issues. Below are the list of errors that we emit out that can be caught during testing:"]}),"\n",(0,s.jsx)(n.h3,{id:"format_error",children:(0,s.jsx)(n.code,{children:"FORMAT_ERROR"})}),"\n",(0,s.jsxs)(n.p,{children:["Issue when we try to format a sentence but some of the placeholder values are malformed, e.g passing in a ",(0,s.jsx)(n.code,{children:"string"})," for a ",(0,s.jsx)(n.code,{children:"Date"})," or such."]}),"\n",(0,s.jsx)(n.h3,{id:"unsupported_formatter",children:(0,s.jsx)(n.code,{children:"UNSUPPORTED_FORMATTER"})}),"\n",(0,s.jsx)(n.p,{children:"We trigger this error when a custom format is being declared but there's no corresponding formatter with it. For example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"intl.formatMessage({\n  defaultMessage: 'the price is {p, number, customCurrency}',\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and there's no formatter for ",(0,s.jsx)(n.code,{children:"customCurrency"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"invalid_config",children:(0,s.jsx)(n.code,{children:"INVALID_CONFIG"})}),"\n",(0,s.jsxs)(n.p,{children:["When some config values are misconfigured such as missing ",(0,s.jsx)(n.code,{children:"locale"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"missing_data",children:(0,s.jsx)(n.code,{children:"MISSING_DATA"})}),"\n",(0,s.jsxs)(n.p,{children:["When some native Intl APIs don't support certain locales, or missing ",(0,s.jsx)(n.code,{children:"locale-data"})," when polyfills are setup. This typically happens when you're running on an older browsers/Node, or try to use newer APIs in browsers that have not supported them."]}),"\n",(0,s.jsx)(n.h3,{id:"missing_translation",children:(0,s.jsx)(n.code,{children:"MISSING_TRANSLATION"})}),"\n",(0,s.jsxs)(n.p,{children:["This gets triggered whenever we try to look up a translated message in ",(0,s.jsx)(n.code,{children:"messages"})," for a given ",(0,s.jsx)(n.code,{children:"id"})," and it's not there and there is no fallback ",(0,s.jsx)(n.code,{children:"defaultMessage"})," for the given ",(0,s.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,s.jsx)(n.admonition,{title:"verbosity",type:"caution",children:(0,s.jsx)(n.p,{children:"This error will be triggered very often since it happens for every message that does not have a translation. Therefore if you do log it remotely there should be throttling in place."})})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1818:(e,n,t)=>{t.d(n,{A:()=>o});t(7378);var r=t(3372);const s={tabItem:"tabItem_ZSL2"};var a=t(6106);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:t,children:n})}},3744:(e,n,t)=>{t.d(n,{A:()=>y});var r=t(7378),s=t(3372),a=t(6189),o=t(1654),i=t(5421),l=t(6326),c=t(9239),u=t(6864);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,d]=f({queryString:t,groupId:s}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,u.Dv)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=t(1151);const v={tabList:"tabList_WXuh",tabItem:"tabItem_SJmg"};var b=t(6106);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=m(e);return(0,b.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(x,{...n,...e})]})}function y(e){const n=(0,g.A)();return(0,b.jsx)(w,{...e,children:d(e.children)},String(n))}},6039:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var r=t(7378);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);