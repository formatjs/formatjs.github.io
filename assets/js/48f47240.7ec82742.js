(self.webpackChunk=self.webpackChunk||[]).push([[1145],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>c,kt:()=>d});var a=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(l),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return l?a.createElement(f,i(i({ref:t},c),{},{components:l})):a.createElement(f,i({ref:t},c))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8215:(e,t,l)=>{"use strict";l.d(t,{Z:()=>n});var a=l(7294);const n=function(e){var t=e.children,l=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:l,className:n},t)}},5064:(e,t,l)=>{"use strict";l.d(t,{Z:()=>p});var a=l(7294),n=l(9443);const r=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=l(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const p=function(e){var t,l=e.lazy,n=e.block,p=e.defaultValue,c=e.values,u=e.groupId,m=e.className,d=a.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=p?p:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,v=r(),h=v.tabGroupChoices,b=v.setTabGroupChoices,g=(0,a.useState)(y),k=g[0],N=g[1],j=[];if(null!=u){var O=h[u];null!=O&&O!==k&&f.some((function(e){return e.value===O}))&&N(O)}var w=function(e){var t=e.currentTarget,l=j.indexOf(t),a=f[l].value;N(a),null!=u&&(b(u,a),setTimeout((function(){var e,l,a,n,r,i,o,p;(e=t.getBoundingClientRect(),l=e.top,a=e.left,n=e.bottom,r=e.right,i=window,o=i.innerHeight,p=i.innerWidth,l>=0&&r<=p&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,l=null;switch(e.key){case"ArrowRight":var a=j.indexOf(e.target)+1;l=j[a]||j[0];break;case"ArrowLeft":var n=j.indexOf(e.target)-1;l=j[n]||j[j.length-1]}null==(t=l)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},m)},f.map((function(e){var t=e.value,l=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:w,onClick:w},null!=l?l:t)}))),l?(0,a.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});const a=(0,l(7294).createContext)(void 0)},6777:(e,t,l)=>{"use strict";l.r(t),l.d(t,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>u,toc:()=>m,default:()=>f});var a=l(2122),n=l(9756),r=(l(7294),l(3905)),i=l(5064),o=l(8215),s=["components"],p={id:"intl-displaynames",title:"Intl.DisplayNames"},c=void 0,u={unversionedId:"polyfills/intl-displaynames",id:"polyfills/intl-displaynames",isDocsHomePage:!1,title:"Intl.DisplayNames",description:"A polyfill for Intl.DisplayNames.",source:"@site/docs/polyfills/intl-displaynames.md",sourceDirName:"polyfills",slug:"/polyfills/intl-displaynames",permalink:"/docs/polyfills/intl-displaynames",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-displaynames.md",tags:[],version:"current",frontMatter:{id:"intl-displaynames",title:"Intl.DisplayNames"},sidebar:"polyfills",previous:{title:"Intl.DateTimeFormat (ESNext)",permalink:"/docs/polyfills/intl-datetimeformat"},next:{title:"Intl.getCanonicalLocales",permalink:"/docs/polyfills/intl-getcanonicallocales"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]}],d={toc:m};function f(e){var t=e.components,l=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A polyfill for ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/proposal-intl-displaynames"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.DisplayNames")),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-displaynames"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-displaynames.svg?style=flat-square",alt:"npm Version"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-displaynames",alt:"size"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-displaynames\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-displaynames\n")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Everything in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/proposal-intl-displaynames"},"https://github.com/tc39/proposal-intl-displaynames"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.DisplayNames"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.DisplayNames.~locale.<locale>")," to your list of features. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.DisplayNames, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.DisplayNames,Intl.DisplayNames.~locale.en"><\/script>\n')),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-displaynames/polyfill'\nimport '@formatjs/intl-displaynames/locale-data/en' // locale-data for en\n")),(0,r.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-displaynames/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-displaynames/polyfill-force')\n  await import(`@formatjs/intl-displaynames/locale-data/${unsupportedLocale}`)\n}\n")))}f.isMDXComponent=!0},6010:(e,t,l)=>{"use strict";function a(e){var t,l,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(l=a(e[t]))&&(n&&(n+=" "),n+=l);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,l=0,n="";l<arguments.length;)(e=arguments[l++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}l.d(t,{Z:()=>n})}}]);