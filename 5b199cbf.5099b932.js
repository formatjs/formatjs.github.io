(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(d,o(o({ref:t},b),{},{components:a})):r.a.createElement(d,o({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(104)),l={id:"runtime-requirements",title:"Runtime Requirements"},o={unversionedId:"guides/runtime-requirements",id:"guides/runtime-requirements",isDocsHomePage:!1,title:"Runtime Requirements",description:"Browser",source:"@site/docs/guides/runtime-requirements.md",permalink:"/docs/guides/runtime-requirements",editUrl:"https://github.com/formatjs/formatjs/edit/master/website/docs/guides/runtime-requirements.md",sidebar:"docs",previous:{title:"Distributing i18n-friendly libraries",permalink:"/docs/guides/distribute-libraries"},next:{title:"Advanced Usage",permalink:"/docs/guides/advanced-usage"}},c=[{value:"Browser",id:"browser",children:[]},{value:"Node.js",id:"nodejs",children:[{value:"full-icu",id:"full-icu",children:[]}]},{value:"React Native",id:"react-native",children:[{value:"React Native on iOS",id:"react-native-on-ios",children:[]}]}],b={rightToc:c};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"browser"},"Browser"),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Browser Support")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We support ",Object(i.b)("strong",{parentName:"p"},"IE11")," & ",Object(i.b)("strong",{parentName:"p"},"2 most recent versions of Edge, Chrome, Firefox & Safari"),". If you need older browser support, take a look at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Financial-Times/polyfill-library"}),"polyfill-library")," that also uses ",Object(i.b)("inlineCode",{parentName:"p"},"formatjs")," but pre-bundle other polyfills that we use."))),Object(i.b)("p",null,"React Intl relies on these ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," APIs:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat"),": Available on IE11+"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat"}),"Intl.DateTimeFormat"),": Available on IE11+"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),"Intl.PluralRules"),": This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"this package"),"."),Object(i.b)("li",{parentName:"ul"},"(Optional) ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat"}),"Intl.RelativeTimeFormat"),": Required if you use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/api#formatrelativetime"}),Object(i.b)("inlineCode",{parentName:"a"},"formatRelativeTime")),"\nor ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formattedrelativetime"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedRelativeTime")),". This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-relativetimeformat"}),"this package"),"."),Object(i.b)("li",{parentName:"ul"},"(Optional) ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://tc39.es/proposal-intl-displaynames/"}),"Intl.DisplayNames"),": Required if you use ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/api#formatdisplayname"}),Object(i.b)("inlineCode",{parentName:"a"},"formatDisplayName")),"\nor ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/react-intl/components#formatteddisplayname"}),Object(i.b)("inlineCode",{parentName:"a"},"FormattedDisplayName")),". This can be polyfilled using ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-displaynames"}),"this package"),".")),Object(i.b)("p",null,"We officially support IE11 along with 2 most recent versions of Edge, Chrome & Firefox."),Object(i.b)("h2",{id:"nodejs"},"Node.js"),Object(i.b)("h3",{id:"full-icu"},"full-icu"),Object(i.b)("p",null,"Starting with Node.js 13.0.0 full-icu is supported by default."),Object(i.b)("p",null,"If using React Intl in an earlier version of Node.js, your ",Object(i.b)("inlineCode",{parentName:"p"},"node")," binary has to either:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Get compiled with ",Object(i.b)("inlineCode",{parentName:"li"},"full-icu")," using these ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/intl.html"}),"instructions"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"OR")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Uses ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/package/full-icu"}),Object(i.b)("inlineCode",{parentName:"a"},"full-icu")," npm package"))),Object(i.b)("p",null,"If your ",Object(i.b)("inlineCode",{parentName:"p"},"node")," version is missing any of the ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," APIs above, you'd have to polyfill them accordingly."),Object(i.b)("h2",{id:"react-native"},"React Native"),Object(i.b)("p",null,"If you're using ",Object(i.b)("inlineCode",{parentName:"p"},"react-intl")," in React Native, make sure your runtime has built-in ",Object(i.b)("inlineCode",{parentName:"p"},"Intl")," support (similar to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant"}),"JSC International variant"),"). See these issues for more details:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formatjs/formatjs/issues/1356"}),"https://github.com/formatjs/formatjs/issues/1356")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/formatjs/formatjs/issues/992"}),"https://github.com/formatjs/formatjs/issues/992"))),Object(i.b)("h3",{id:"react-native-on-ios"},"React Native on iOS"),Object(i.b)("p",null,"If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills"}),"polyfills")," to polyfill the following APIs (in this order):"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-getcanonicallocales"}),"Intl.getCanonicalLocales")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"Intl.PluralRules")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-numberformat"}),"Intl.NumberFormat")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/polyfills/intl-datetimeformat"}),"Intl.DateTimeFormat"))))}s.isMDXComponent=!0}}]);