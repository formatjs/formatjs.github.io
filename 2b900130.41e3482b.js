(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{116:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return f}));var l=a(0),n=a.n(l);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),m=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),u=l,f=p["".concat(i,".").concat(u)]||p[u]||b[u]||r;return a?n.a.createElement(f,o(o({ref:t},s),{},{components:a})):n.a.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},117:function(e,t,a){"use strict";function l(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=l(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=l(e))&&(n&&(n+=" "),n+=t);return n}},118:function(e,t,a){"use strict";var l=a(0),n=a(119);t.a=function(){const e=Object(l.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,a){"use strict";var l=a(0);const n=Object(l.createContext)(void 0);t.a=n},120:function(e,t,a){"use strict";var l=a(0),n=a.n(l),r=a(118),i=a(117),o=a(52),c=a.n(o);const s=37,m=39;t.a=function(e){const{lazy:t,block:a,children:o,defaultValue:p,values:b,groupId:u,className:f}=e,{tabGroupChoices:d,setTabGroupChoices:j}=Object(r.a)(),[O,y]=Object(l.useState)(p);if(null!=u){const e=d[u];null!=e&&e!==O&&b.some((t=>t.value===e))&&y(e)}const v=e=>{y(e),null!=u&&j(u,e)},h=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},f)},b.map((({value:e,label:t})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>v(e),onClick:()=>{v(e)}},t)))),t?Object(l.cloneElement)(o.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},o.map(((e,t)=>Object(l.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},121:function(e,t,a){"use strict";var l=a(3),n=a(0),r=a.n(n);t.a=function({children:e,hidden:t,className:a}){return r.a.createElement("div",Object(l.a)({role:"tabpanel"},{hidden:t,className:a}),e)}},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return b}));var l=a(3),n=a(7),r=(a(0),a(116)),i=a(120),o=a(121),c={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},s={unversionedId:"polyfills/intl-relativetimeformat",id:"polyfills/intl-relativetimeformat",isDocsHomePage:!1,title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-relativetimeformat.md",slug:"/polyfills/intl-relativetimeformat",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"},next:{title:"Intl.ListFormat",permalink:"/docs/polyfills/intl-listformat"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={rightToc:m};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262"}),"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"}),Object(r.b)("img",Object(l.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(r.b)("img",Object(l.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"}))),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-relativetimeformat\n"))),Object(r.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-relativetimeformat\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"This package requires the following capabilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/polyfills/intl-getcanonicallocales"}),"polyfill")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/polyfills/intl-locale"}),"polyfill"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),Object(r.b)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/polyfills/intl-pluralrules"}),"polyfill"),"."),Object(r.b)("li",{parentName:"ul"},"If you need ",Object(r.b)("inlineCode",{parentName:"li"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"/docs/polyfills/intl-numberformat"}),Object(r.b)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-relativetimeformat/polyfill')\n  }\n\n  if (Intl.RelativeTimeFormat.polyfilled) {\n    switch (locale) {\n      default:\n        await import('@formatjs/intl-relativetimeformat/locale-data/en')\n        break\n      case 'fr':\n        await import('@formatjs/intl-relativetimeformat/locale-data/fr')\n        break\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is fully ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"}),"test262"),"-compliant."))}b.isMDXComponent=!0}}]);