(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{108:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=m(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),u=n,d=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return a?i.a.createElement(d,l(l({ref:t},s),{},{components:a})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},109:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},110:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},111:function(e,t,a){"use strict";var n=a(0),i=a(110);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},112:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(111),o=a(109),l=a(48),c=a.n(l),s=37,m=39;t.a=function(e){var t=e.block,a=e.children,l=e.defaultValue,p=e.values,b=e.groupId,u=Object(r.a)(),d=u.tabGroupChoices,f=u.setTabGroupChoices,j=Object(n.useState)(l),O=j[0],y=j[1],h=Object(n.useState)(!1),g=h[0],v=h[1];if(null!=b){var N=d[b];null!=N&&N!==O&&p.some((function(e){return e.value===N}))&&y(N)}var w=function(e){y(e),null!=b&&f(b,e)},T=[],z=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},x=function(){v(!1)};return Object(n.useEffect)((function(){window.addEventListener("keydown",z),window.addEventListener("mousedown",x)}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),style:g?{}:{outline:"none"},key:t,ref:function(e){return T.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case m:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(T,e.target,e),z(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===O}))[0]))}},113:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(6),r=(a(0),a(108)),o=a(112),l=a(113),c={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ES2020)"},s={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat (ES2020)",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",slug:"/polyfills/intl-datetimeformat",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.NumberFormat (ES2020)",permalink:"/docs/polyfills/intl-numberformat"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={rightToc:m};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"}),Object(r.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(r.b)("img",Object(n.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"}))),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Right now we only support Gregorian calendar in this polyfill. Therefore we recommend setting ",Object(r.b)("inlineCode",{parentName:"p"},"calendar: 'gregory'")," in your options to be safe."))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(o.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-datetimeformat\n"))),Object(r.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-datetimeformat\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"This package requires the following capabilities:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"}),"Intl.NumberFormat")))),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-datetimeformat/polyfill')\n  }\n\n  if (Intl.DateTimeFormat.polyfilled) {\n    // Parallelize CLDR data loading\n    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')]\n\n    switch (locale) {\n      default:\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/en')\n        )\n        break\n      case 'fr':\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/fr')\n        )\n        break\n    }\n    await Promise.all(polyfills)\n  }\n}\n")),Object(r.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(r.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(r.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),Object(r.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),Object(r.b)("h3",{id:"default-timezone"},"Default Timezone"),Object(r.b)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",Object(r.b)("inlineCode",{parentName:"p"},"UTC"),"."),Object(r.b)("p",null,"You can change this by either calling ",Object(r.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",Object(r.b)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),Object(r.b)("p",null,"Since ",Object(r.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is fully ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"}),"test262"),"-compliant."))}b.isMDXComponent=!0}}]);