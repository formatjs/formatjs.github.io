(self.webpackChunk=self.webpackChunk||[]).push([[4097],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>p,kt:()=>f});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(l),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||r;return l?n.createElement(d,i(i({ref:t},p),{},{components:l})):n.createElement(d,i({ref:t},p))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<r;c++)i[c]=l[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8215:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});var n=l(7294);const a=function(e){var t=e.children,l=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:l,className:a},t)}},5064:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var n=l(7294),a=l(9443);const r=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=l(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const c=function(e){var t,l=e.lazy,a=e.block,c=e.defaultValue,p=e.values,u=e.groupId,m=e.className,f=n.Children.toArray(e.children),d=null!=p?p:f.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=c?c:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),h=v.tabGroupChoices,b=v.setTabGroupChoices,g=(0,n.useState)(y),k=g[0],N=g[1],j=[];if(null!=u){var O=h[u];null!=O&&O!==k&&d.some((function(e){return e.value===O}))&&N(O)}var w=function(e){var t=e.currentTarget,l=j.indexOf(t),n=d[l].value;N(n),null!=u&&(b(u,n),setTimeout((function(){var e,l,n,a,r,i,o,c;(e=t.getBoundingClientRect(),l=e.top,n=e.left,a=e.bottom,r=e.right,i=window,o=i.innerHeight,c=i.innerWidth,l>=0&&r<=c&&a<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,l=null;switch(e.key){case"ArrowRight":var n=j.indexOf(e.target)+1;l=j[n]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.target)-1;l=j[a]||j[j.length-1]}null==(t=l)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,l=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:w,onClick:w},null!=l?l:t)}))),l?(0,n.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});const n=(0,l(7294).createContext)(void 0)},6128:(e,t,l)=>{"use strict";l.r(t),l.d(t,{frontMatter:()=>c,contentTitle:()=>p,metadata:()=>u,toc:()=>m,default:()=>d});var n=l(2122),a=l(9756),r=(l(7294),l(3905)),i=l(5064),o=l(8215),s=["components"],c={id:"intl-listformat",title:"Intl.ListFormat"},p=void 0,u={unversionedId:"polyfills/intl-listformat",id:"polyfills/intl-listformat",isDocsHomePage:!1,title:"Intl.ListFormat",description:"A spec-compliant polyfill for Intl.ListFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-listformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-listformat",permalink:"/docs/polyfills/intl-listformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-listformat.md",tags:[],version:"current",frontMatter:{id:"intl-listformat",title:"Intl.ListFormat"},sidebar:"polyfills",previous:{title:"Intl.getCanonicalLocales",permalink:"/docs/polyfills/intl-getcanonicallocales"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],f={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A spec-compliant polyfill for Intl.ListFormat fully tested by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-listformat"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-listformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-listformat",alt:"size"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-listformat\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-listformat\n")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),".")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.ListFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.ListFormat.~locale.<locale>")," to your list of features. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.ListFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.ListFormat,Intl.ListFormat.~locale.en"><\/script>\n')),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-listformat/polyfill'\nimport '@formatjs/intl-listformat/locale-data/en' // locale-data for en\n")),(0,r.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-listformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-listformat/polyfill-force')\n  await import(`@formatjs/intl-listformat/locale-data/${unsupportedLocale}`)\n}\n")),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("p",null,"This library is fully ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/ListFormat"},"test262"),"-compliant."))}d.isMDXComponent=!0},6010:(e,t,l)=>{"use strict";function n(e){var t,l,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(l=n(e[t]))&&(a&&(a+=" "),a+=l);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,l=0,a="";l<arguments.length;)(e=arguments[l++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}l.d(t,{Z:()=>a})}}]);