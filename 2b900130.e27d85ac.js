(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{120:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=l.a.createContext({}),m=function(e){var t=l.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},f=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),f=n,b=p["".concat(i,".").concat(f)]||p[f]||u[f]||r;return a?l.a.createElement(b,o(o({ref:t},s),{},{components:a})):l.a.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},121:function(e,t,a){"use strict";function n(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(l&&(l+=" "),l+=a);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,a=0,l="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(l&&(l+=" "),l+=t);return l}},122:function(e,t,a){"use strict";var n=a(0),l=a(123);t.a=function(){const e=Object(n.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},123:function(e,t,a){"use strict";var n=a(0);const l=Object(n.createContext)(void 0);t.a=l},124:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(122),i=a(121),o=a(54),c=a.n(o);const s=37,m=39;t.a=function(e){const{lazy:t,block:a,defaultValue:o,values:p,groupId:u,className:f}=e,{tabGroupChoices:b,setTabGroupChoices:d}=Object(r.a)(),[y,j]=Object(n.useState)(o),v=n.Children.toArray(e.children);if(null!=u){const e=b[u];null!=e&&e!==y&&p.some((t=>t.value===e))&&j(e)}const O=e=>{j(e),null!=u&&d(u,e)},h=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":a},f)},p.map((({value:e,label:t})=>l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===e,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case m:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},t)))),t?Object(n.cloneElement)(v.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},125:function(e,t,a){"use strict";var n=a(0),l=a.n(n);t.a=function({children:e,hidden:t,className:a}){return l.a.createElement("div",{role:"tabpanel",hidden:t,className:a},e)}},80:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return u}));var n=a(3),l=a(7),r=(a(0),a(120)),i=a(124),o=a(125),c={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},s={unversionedId:"polyfills/intl-relativetimeformat",id:"polyfills/intl-relativetimeformat",isDocsHomePage:!1,title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-relativetimeformat.md",slug:"/polyfills/intl-relativetimeformat",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={toc:m};function u(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"})),"\n",Object(r.b)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"})),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-relativetimeformat\n"))),Object(r.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-relativetimeformat\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("p",null,"This package requires the following capabilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},Object(r.b)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},Object(r.b)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"polyfill"),"."),Object(r.b)("li",{parentName:"ul"},"If you need ",Object(r.b)("inlineCode",{parentName:"li"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},Object(r.b)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-relativetimeformat/polyfill')\n  }\n\n  if (Intl.RelativeTimeFormat.polyfilled) {\n    switch (locale) {\n      default:\n        await import('@formatjs/intl-relativetimeformat/locale-data/en')\n        break\n      case 'fr':\n        await import('@formatjs/intl-relativetimeformat/locale-data/fr')\n        break\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is fully ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"},"test262"),"-compliant."))}u.isMDXComponent=!0}}]);