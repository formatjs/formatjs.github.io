(self.webpackChunk=self.webpackChunk||[]).push([[1843],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),f=l,u=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=a[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8215:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(7294);const l=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},5064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(7294),l=a(9443);const i=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var r=a(6010);const o="tabItem_1uMI",s="tabItemActive_2DSg";var m=37,p=39;const c=function(e){var t=e.lazy,a=e.block,l=e.defaultValue,c=e.values,d=e.groupId,f=e.className,u=i(),h=u.tabGroupChoices,y=u.setTabGroupChoices,v=(0,n.useState)(l),g=v[0],k=v[1],b=n.Children.toArray(e.children),N=[];if(null!=d){var w=h[d];null!=w&&w!==g&&c.some((function(e){return e.value===w}))&&k(w)}var T=function(e){var t=e.currentTarget,a=N.indexOf(t),n=c[a].value;k(n),null!=d&&(y(d,n),setTimeout((function(){var e,a,n,l,i,r,o,m;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,i=e.right,r=window,o=r.innerHeight,m=r.innerWidth,a>=0&&i<=m&&l<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case m:var l=N.indexOf(e.target)-1;a=N[l]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},f)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,r.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=(0,a(7294).createContext)(void 0)},6128:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>m,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>u});var n=a(2122),l=a(9756),i=(a(7294),a(3905)),r=a(5064),o=a(8215),s=["components"],m={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ESNext)"},p=void 0,c={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat (ESNext)",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-datetimeformat",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",version:"current",frontMatter:{id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ESNext)"},sidebar:"polyfills",previous:{title:"Polyfills",permalink:"/docs/polyfills"},next:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"}},d=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],f={toc:d};function u(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,i.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"})),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Right now we only support Gregorian calendar in this polyfill. Therefore we recommend setting ",(0,i.kt)("inlineCode",{parentName:"p"},"calendar: 'gregory'")," in your options to be safe."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Right now this polyfill supports daylight transition until 2038 due to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Year_2038_problem"},"Year 2038 problem"),"."))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-intl-datetime-style"},"dateStyle/timeStyle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tc39/proposal-intl-DateTimeFormat-formatRange"},"formatRange"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)(r.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-datetimeformat\n"))),(0,i.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-datetimeformat\n")))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"This package requires the following capabilities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,i.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,i.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"},(0,i.kt)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},"polyfill"),".")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat.~locale.<locale>"),", as well as locale data for any required polyfills, to your list of features. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.DateTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.DateTimeFormat,Intl.DateTimeFormat.~locale.en,Intl.NumberFormat.~locale.en"><\/script>\n')),(0,i.kt)("h3",{id:"simple"},"Simple"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),(0,i.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (!shouldPolyfill(locale)) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-datetimeformat/polyfill')\n\n  // Parallelize CLDR data loading\n  const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')]\n\n  switch (locale) {\n    default:\n      dataPolyfills.push(import('@formatjs/intl-datetimeformat/locale-data/en'))\n      break\n    case 'fr':\n      dataPolyfills.push(import('@formatjs/intl-datetimeformat/locale-data/fr'))\n      break\n  }\n  await Promise.all(dataPolyfills)\n}\n")),(0,i.kt)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),(0,i.kt)("p",null,"We provide 2 pre-processed IANA Timezone:"),(0,i.kt)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),(0,i.kt)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),(0,i.kt)("h3",{id:"default-timezone"},"Default Timezone"),(0,i.kt)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",(0,i.kt)("inlineCode",{parentName:"p"},"UTC"),"."),(0,i.kt)("p",null,"You can change this by either calling ",(0,i.kt)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",(0,i.kt)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),(0,i.kt)("h2",{id:"tests"},"Tests"),(0,i.kt)("p",null,"This library is fully ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"},"test262"),"-compliant."))}u.isMDXComponent=!0},6010:(e,t,a)=>{"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}function l(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}a.d(t,{Z:()=>l})}}]);