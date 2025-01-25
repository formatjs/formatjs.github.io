"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6572],{5324:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"guides/runtime-requirements","title":"Runtime Requirements","description":"Browser","source":"@site/docs/guides/runtime-requirements.md","sourceDirName":"guides","slug":"/guides/runtime-requirements","permalink":"/docs/guides/runtime-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/runtime-requirements.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737821077000,"frontMatter":{"id":"runtime-requirements","title":"Runtime Requirements"},"sidebar":"docs","previous":{"title":"Distributing i18n-friendly libraries","permalink":"/docs/guides/distribute-libraries"},"next":{"title":"Advanced Usage","permalink":"/docs/guides/advanced-usage"}}');var l=s(6106),t=s(972);const r={id:"runtime-requirements",title:"Runtime Requirements"},o=void 0,a={},c=[{value:"Browser",id:"browser",level:2},{value:"Node.js",id:"nodejs",level:2},{value:"full-icu",id:"full-icu",level:3},{value:"React Native",id:"react-native",level:2},{value:"React Native on iOS",id:"react-native-on-ios",level:3}];function d(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"browser",children:"Browser"}),"\n",(0,l.jsx)(i.admonition,{title:"Browser Support",type:"info",children:(0,l.jsxs)(i.p,{children:["We support ",(0,l.jsx)(i.strong,{children:"IE11"})," & ",(0,l.jsx)(i.strong,{children:"2 most recent versions of Edge, Chrome, Firefox & Safari"}),". If you need older browser support, take a look at ",(0,l.jsx)(i.a,{href:"https://github.com/Financial-Times/polyfill-library",children:"polyfill-library"})," that also uses ",(0,l.jsx)(i.code,{children:"formatjs"})," but pre-bundle other polyfills that we use."]})}),"\n",(0,l.jsxs)(i.p,{children:["React Intl relies on these ",(0,l.jsx)(i.code,{children:"Intl"})," APIs:"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:"Intl.NumberFormat"}),": Available on IE11+"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat",children:"Intl.DateTimeFormat"}),": Available on IE11+"]}),"\n",(0,l.jsxs)(i.li,{children:[(0,l.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules",children:"Intl.PluralRules"}),": This can be polyfilled using ",(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-pluralrules",children:"this package"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:["(Optional) ",(0,l.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"}),": Required if you use ",(0,l.jsx)(i.a,{href:"/docs/react-intl/api#formatrelativetime",children:(0,l.jsx)(i.code,{children:"formatRelativeTime"})}),"\nor ",(0,l.jsx)(i.a,{href:"/docs/react-intl/components#formattedrelativetime",children:(0,l.jsx)(i.code,{children:"FormattedRelativeTime"})}),". This can be polyfilled using ",(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-relativetimeformat",children:"this package"}),"."]}),"\n",(0,l.jsxs)(i.li,{children:["(Optional) ",(0,l.jsx)(i.a,{href:"https://tc39.es/proposal-intl-displaynames/",children:"Intl.DisplayNames"}),": Required if you use ",(0,l.jsx)(i.a,{href:"/docs/react-intl/api#formatdisplayname",children:(0,l.jsx)(i.code,{children:"formatDisplayName"})}),"\nor ",(0,l.jsx)(i.a,{href:"/docs/react-intl/components#formatteddisplayname",children:(0,l.jsx)(i.code,{children:"FormattedDisplayName"})}),". This can be polyfilled using ",(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-displaynames",children:"this package"}),"."]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"We officially support IE11 along with 2 most recent versions of Edge, Chrome & Firefox."}),"\n",(0,l.jsx)(i.h2,{id:"nodejs",children:"Node.js"}),"\n",(0,l.jsx)(i.h3,{id:"full-icu",children:"full-icu"}),"\n",(0,l.jsx)(i.p,{children:"Starting with Node.js 13.0.0 full-icu is supported by default."}),"\n",(0,l.jsxs)(i.p,{children:["If using React Intl in an earlier version of Node.js, your ",(0,l.jsx)(i.code,{children:"node"})," binary has to either:"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Get compiled with ",(0,l.jsx)(i.code,{children:"full-icu"})," using these ",(0,l.jsx)(i.a,{href:"https://nodejs.org/api/intl.html",children:"instructions"})]}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"OR"})}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsxs)(i.li,{children:["Uses ",(0,l.jsxs)(i.a,{href:"https://www.npmjs.com/package/full-icu",children:[(0,l.jsx)(i.code,{children:"full-icu"})," npm package"]})]}),"\n"]}),"\n",(0,l.jsxs)(i.p,{children:["If your ",(0,l.jsx)(i.code,{children:"node"})," version is missing any of the ",(0,l.jsx)(i.code,{children:"Intl"})," APIs above, you'd have to polyfill them accordingly."]}),"\n",(0,l.jsx)(i.h2,{id:"react-native",children:"React Native"}),"\n",(0,l.jsxs)(i.p,{children:["If you're using ",(0,l.jsx)(i.code,{children:"react-intl"})," in React Native, make sure your runtime has built-in ",(0,l.jsx)(i.code,{children:"Intl"})," support (similar to ",(0,l.jsx)(i.a,{href:"https://github.com/react-native-community/jsc-android-buildscripts#international-variant",children:"JSC International variant"}),"). See these issues for more details:"]}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/formatjs/formatjs/issues/1356",children:"https://github.com/formatjs/formatjs/issues/1356"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"https://github.com/formatjs/formatjs/issues/992",children:"https://github.com/formatjs/formatjs/issues/992"})}),"\n"]}),"\n",(0,l.jsx)(i.h3,{id:"react-native-on-ios",children:"React Native on iOS"}),"\n",(0,l.jsxs)(i.p,{children:["If you cannot use the Intl variant of JSC (e.g on iOS), follow the instructions in ",(0,l.jsx)(i.a,{href:"/docs/polyfills",children:"polyfills"})," to polyfill the following APIs (in this order):"]}),"\n",(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-getcanonicallocales",children:"Intl.getCanonicalLocales"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-locale",children:"Intl.Locale"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-pluralrules",children:"Intl.PluralRules"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-numberformat",children:"Intl.NumberFormat"})}),"\n",(0,l.jsx)(i.li,{children:(0,l.jsx)(i.a,{href:"/docs/polyfills/intl-datetimeformat",children:"Intl.DateTimeFormat"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},972:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>o});var n=s(7378);const l={},t=n.createContext(l);function r(e){const i=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(t.Provider,{value:i},e.children)}}}]);