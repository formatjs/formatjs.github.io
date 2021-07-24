(self.webpackChunk=self.webpackChunk||[]).push([[7190],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>m,default:()=>c});var r=a(2122),n=a(9756),i=(a(7294),a(3905)),l=["components"],o={id:"runtime-requirements",title:"Runtime Requirements"},s=void 0,p={unversionedId:"guides/runtime-requirements",id:"guides/runtime-requirements",isDocsHomePage:!1,title:"Runtime Requirements",description:"Browser",source:"@site/docs/guides/runtime-requirements.md",sourceDirName:"guides",slug:"/guides/runtime-requirements",permalink:"/docs/guides/runtime-requirements",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/runtime-requirements.md",version:"current",frontMatter:{id:"runtime-requirements",title:"Runtime Requirements"},sidebar:"docs",previous:{title:"Distributing i18n-friendly libraries",permalink:"/docs/guides/distribute-libraries"},next:{title:"Advanced Usage",permalink:"/docs/guides/advanced-usage"}},m=[{value:"Browser",id:"browser",children:[]},{value:"Node.js",id:"nodejs",children:[{value:"full-icu",id:"full-icu",children:[]}]},{value:"React Native",id:"react-native",children:[{value:"React Native on iOS",id:"react-native-on-ios",children:[]}]}],u={toc:m};function c(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"browser"},"Browser"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Browser Support")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We support ",(0,i.kt)("strong",{parentName:"p"},"IE11")," & ",(0,i.kt)("strong",{parentName:"p"},"2 most recent versions of Edge, Chrome, Firefox & Safari"),". If you need older browser support, take a look at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Financial-Times/polyfill-library"},"polyfill-library")," that also uses ",(0,i.kt)("inlineCode",{parentName:"p"},"formatjs")," but pre-bundle other polyfills that we use."))),(0,i.kt)("p",null,"React Intl relies on these ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"},"Intl.NumberFormat"),": Available on IE11+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"},"Intl.DateTimeFormat"),": Available on IE11+"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},"Intl.PluralRules"),": This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"this package"),"."),(0,i.kt)("li",{parentName:"ul"},"(Optional) ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"},"Intl.RelativeTimeFormat"),": Required if you use ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api#formatrelativetime"},(0,i.kt)("inlineCode",{parentName:"a"},"formatRelativeTime")),"\nor ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formattedrelativetime"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedRelativeTime")),". This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-relativetimeformat"},"this package"),"."),(0,i.kt)("li",{parentName:"ul"},"(Optional) ",(0,i.kt)("a",{parentName:"li",href:"https://tc39.es/proposal-intl-displaynames/"},"Intl.DisplayNames"),": Required if you use ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/api#formatdisplayname"},(0,i.kt)("inlineCode",{parentName:"a"},"formatDisplayName")),"\nor ",(0,i.kt)("a",{parentName:"li",href:"/docs/react-intl/components#formatteddisplayname"},(0,i.kt)("inlineCode",{parentName:"a"},"FormattedDisplayName")),". This can be polyfilled using ",(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-displaynames"},"this package"),".")),(0,i.kt)("p",null,"We officially support IE11 along with 2 most recent versions of Edge, Chrome & Firefox."),(0,i.kt)("h2",{id:"nodejs"},"Node.js"),(0,i.kt)("h3",{id:"full-icu"},"full-icu"),(0,i.kt)("p",null,"Starting with Node.js 13.0.0 full-icu is supported by default."),(0,i.kt)("p",null,"If using React Intl in an earlier version of Node.js, your ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," binary has to either:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get compiled with ",(0,i.kt)("inlineCode",{parentName:"li"},"full-icu")," using these ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/intl.html"},"instructions"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OR")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Uses ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/full-icu"},(0,i.kt)("inlineCode",{parentName:"a"},"full-icu")," npm package"))),(0,i.kt)("p",null,"If your ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," version is missing any of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," APIs above, you'd have to polyfill them accordingly."),(0,i.kt)("h2",{id:"react-native"},"React Native"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"react-intl")," in React Native, make sure your runtime has built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl")," support (similar to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant"},"JSC International variant"),"). See these issues for more details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/formatjs/formatjs/issues/1356"},"https://github.com/formatjs/formatjs/issues/1356")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/formatjs/formatjs/issues/992"},"https://github.com/formatjs/formatjs/issues/992"))),(0,i.kt)("h3",{id:"react-native-on-ios"},"React Native on iOS"),(0,i.kt)("p",null,"If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/polyfills"},"polyfills")," to polyfill the following APIs (in this order):"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"Intl.getCanonicalLocales")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"Intl.Locale")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"Intl.PluralRules")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},"Intl.NumberFormat")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-datetimeformat"},"Intl.DateTimeFormat"))))}c.isMDXComponent=!0}}]);