(self.webpackChunk=self.webpackChunk||[]).push([[4109],{3905:(e,t,l)=>{"use strict";l.d(t,{Zo:()=>c,kt:()=>f});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(l),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||n;return l?r.createElement(d,i(i({ref:t},c),{},{components:l})):r.createElement(d,i({ref:t},c))}));function f(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<n;u++)i[u]=l[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8215:(e,t,l)=>{"use strict";l.d(t,{Z:()=>a});var r=l(7294);const a=function(e){var t=e.children,l=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:l,className:a},t)}},5064:(e,t,l)=>{"use strict";l.d(t,{Z:()=>u});var r=l(7294),a=l(9443);const n=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=l(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";const u=function(e){var t,l=e.lazy,a=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,f=r.Children.toArray(e.children),d=null!=c?c:f.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=u?u:null==(t=f.find((function(e){return e.props.default})))?void 0:t.props.value,v=n(),b=v.tabGroupChoices,h=v.setTabGroupChoices,g=(0,r.useState)(y),k=g[0],N=g[1],j=[];if(null!=p){var w=b[p];null!=w&&w!==k&&d.some((function(e){return e.value===w}))&&N(w)}var O=function(e){var t=e.currentTarget,l=j.indexOf(t),r=d[l].value;N(r),null!=p&&(h(p,r),setTimeout((function(){var e,l,r,a,n,i,o,u;(e=t.getBoundingClientRect(),l=e.top,r=e.left,a=e.bottom,n=e.right,i=window,o=i.innerHeight,u=i.innerWidth,l>=0&&n<=u&&a<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,l=null;switch(e.key){case"ArrowRight":var r=j.indexOf(e.target)+1;l=j[r]||j[0];break;case"ArrowLeft":var a=j.indexOf(e.target)-1;l=j[a]||j[j.length-1]}null==(t=l)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},d.map((function(e){var t=e.value,l=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":k===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:I,onFocus:O,onClick:O},null!=l?l:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,l)=>{"use strict";l.d(t,{Z:()=>r});const r=(0,l(7294).createContext)(void 0)},5237:(e,t,l)=>{"use strict";l.r(t),l.d(t,{frontMatter:()=>u,contentTitle:()=>c,metadata:()=>p,toc:()=>m,default:()=>d});var r=l(2122),a=l(9756),n=(l(7294),l(3905)),i=l(5064),o=l(8215),s=["components"],u={id:"intl-pluralrules",title:"Intl.PluralRules"},c=void 0,p={unversionedId:"polyfills/intl-pluralrules",id:"polyfills/intl-pluralrules",isDocsHomePage:!1,title:"Intl.PluralRules",description:"A spec-compliant polyfill for Intl.PluralRules fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-pluralrules.md",sourceDirName:"polyfills",slug:"/polyfills/intl-pluralrules",permalink:"/docs/polyfills/intl-pluralrules",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-pluralrules.md",tags:[],version:"current",frontMatter:{id:"intl-pluralrules",title:"Intl.PluralRules"},sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ESNext)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.RelativeTimeFormat",permalink:"/docs/polyfills/intl-relativetimeformat"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]}],f={toc:m};function d(e){var t=e.components,l=(0,a.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A spec-compliant polyfill for ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," fully tested by the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-pluralrules"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-pluralrules.svg?style=flat-square",alt:"npm Version"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-pluralrules",alt:"size"})),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-pluralrules\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-pluralrules\n")))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules.~locale.<locale>")," to your list of features. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.PluralRules, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.PluralRules,Intl.PluralRules.~locale.en"><\/script>\n')),(0,n.kt)("h3",{id:"simple"},"Simple"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-pluralrules/polyfill'\nimport '@formatjs/intl-pluralrules/locale-data/en' // locale-data for en\n")),(0,n.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-pluralrules/should-polyfill'\nasync function polyfill(locale: string) {\n  if (!shouldPolyfill(locale)) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-pluralrules/polyfill')\n\n  switch (locale) {\n    default:\n      await import('@formatjs/intl-pluralrules/locale-data/en')\n      break\n    case 'fr':\n      await import('@formatjs/intl-pluralrules/locale-data/fr')\n      break\n  }\n}\n")))}d.isMDXComponent=!0},6010:(e,t,l)=>{"use strict";function r(e){var t,l,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(l=r(e[t]))&&(a&&(a+=" "),a+=l);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,l=0,a="";l<arguments.length;)(e=arguments[l++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}l.d(t,{Z:()=>a})}}]);