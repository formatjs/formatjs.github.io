(self.webpackChunk=self.webpackChunk||[]).push([[2080],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(7294),a=n(9443);const o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=n(6010);const l="tabItem_1uMI",s="tabItemActive_2DSg";const u=function(e){var t,n=e.lazy,a=e.block,u=e.defaultValue,c=e.values,d=e.groupId,p=e.className,m=r.Children.toArray(e.children),f=null!=c?c:m.map((function(e){return{value:e.props.value,label:e.props.label}})),g=null!=u?u:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,v=o(),h=v.tabGroupChoices,k=v.setTabGroupChoices,b=(0,r.useState)(g),y=b[0],N=b[1],w=[];if(null!=d){var O=h[d];null!=O&&O!==y&&f.some((function(e){return e.value===O}))&&N(O)}var T=function(e){var t=e.currentTarget,n=w.indexOf(t),r=f[n].value;N(r),null!=d&&(k(d,r),setTimeout((function(){var e,n,r,a,o,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case"ArrowLeft":var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:T,onClick:T},null!=n?n:t)}))),n?(0,r.cloneElement)(m.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r=(0,n(7294).createContext)(void 0)},115:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>d,toc:()=>p,default:()=>f});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=n(5064),l=n(8215),s=["components"],u={id:"develop",title:"Develop with formatjs"},c=void 0,d={unversionedId:"guides/develop",id:"guides/develop",isDocsHomePage:!1,title:"Develop with formatjs",description:"Aside from a strong focus on facilitating i18n production pipeline, formatjs also aims to improve i18n DevEx with our eslint-plugin-formatjs.",source:"@site/docs/guides/develop.md",sourceDirName:"guides",slug:"/guides/develop",permalink:"/docs/guides/develop",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/develop.md",tags:[],version:"current",frontMatter:{id:"develop",title:"Develop with formatjs"},sidebar:"docs",previous:{title:"Message Distribution",permalink:"/docs/getting-started/message-distribution"},next:{title:"Bundling with formatjs",permalink:"/docs/guides/bundler-plugins"}},p=[{value:"Linter Installation",id:"linter-installation",children:[]},{value:"Error Codes",id:"error-codes",children:[{value:"<code>FORMAT_ERROR</code>",id:"format_error",children:[]},{value:"<code>UNSUPPORTED_FORMATTER</code>",id:"unsupported_formatter",children:[]},{value:"<code>INVALID_CONFIG</code>",id:"invalid_config",children:[]},{value:"<code>MISSING_DATA</code>",id:"missing_data",children:[]},{value:"<code>MISSING_TRANSLATION</code>",id:"missing_translation",children:[]}]}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aside from a strong focus on facilitating i18n production pipeline, ",(0,o.kt)("inlineCode",{parentName:"p"},"formatjs")," also aims to improve i18n DevEx with our ",(0,o.kt)("a",{parentName:"p",href:"/docs/tooling/linter"},"eslint-plugin-formatjs"),"."),(0,o.kt)("h2",{id:"linter-installation"},"Linter Installation"),(0,o.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D eslint-plugin-formatjs eslint\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D eslint-plugin-formatjs eslint\n")))),(0,o.kt)("p",null,"Then in your eslint config:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "plugins": ["formatjs"],\n  "rules": {\n    "formatjs/no-offset": "error"\n  }\n}\n')),(0,o.kt)("p",null,"Head over to ",(0,o.kt)("a",{parentName:"p",href:"/docs/tooling/linter"},"eslint-plugin-formatjs")," for more details on our rules."),(0,o.kt)("h2",{id:"error-codes"},"Error Codes"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"react-intl")," is designed to fail fast when there's a configuration issue but fall back to ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultLocale")," when there's a translation issues. Below are the list of errors that we emit out that can be caught during testing:"),(0,o.kt)("h3",{id:"format_error"},(0,o.kt)("inlineCode",{parentName:"h3"},"FORMAT_ERROR")),(0,o.kt)("p",null,"Issue when we try to format a sentence but some of the placeholder values are malformed, e.g passing in a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Date")," or such."),(0,o.kt)("h3",{id:"unsupported_formatter"},(0,o.kt)("inlineCode",{parentName:"h3"},"UNSUPPORTED_FORMATTER")),(0,o.kt)("p",null,"We trigger this error when a custom format is being declared but there's no corresponding formatter with it. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"intl.formatMessage({\n  defaultMessage: 'the price is {p, number, customCurrency}',\n})\n")),(0,o.kt)("p",null,"and there's no formatter for ",(0,o.kt)("inlineCode",{parentName:"p"},"customCurrency"),"."),(0,o.kt)("h3",{id:"invalid_config"},(0,o.kt)("inlineCode",{parentName:"h3"},"INVALID_CONFIG")),(0,o.kt)("p",null,"When some config values are misconfigured such as missing ",(0,o.kt)("inlineCode",{parentName:"p"},"locale"),"."),(0,o.kt)("h3",{id:"missing_data"},(0,o.kt)("inlineCode",{parentName:"h3"},"MISSING_DATA")),(0,o.kt)("p",null,"When some native Intl APIs don't support certain locales, or missing ",(0,o.kt)("inlineCode",{parentName:"p"},"locale-data")," when polyfills are setup. This typically happens when you're running on an older browsers/Node, or try to use newer APIs in browsers that have not supported them."),(0,o.kt)("h3",{id:"missing_translation"},(0,o.kt)("inlineCode",{parentName:"h3"},"MISSING_TRANSLATION")),(0,o.kt)("p",null,"This gets triggered whenever we try to look up a translated message in ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," for a given ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," and it's not there, thus falling back to ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultMessage"),"."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"verbosity")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This error will be triggered very often since it happens for every message that does not have a translation. Therefore if you do log it remotely there should be throttling in place."))))}f.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);