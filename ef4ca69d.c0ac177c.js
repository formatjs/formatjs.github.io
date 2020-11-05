(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{102:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),i=(n(0),n(108)),l=n(112),o=n(113),c={id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},s={unversionedId:"polyfills/intl-numberformat",id:"polyfills/intl-numberformat",isDocsHomePage:!1,title:"Intl.NumberFormat (ESNext)",description:"A polyfill for ESNext Intl.NumberFormat and Number.prototype.toLocaleString.",source:"@site/docs/polyfills/intl-numberformat.md",slug:"/polyfills/intl-numberformat",permalink:"/docs/polyfills/intl-numberformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-numberformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"},next:{title:"Intl.DateTimeFormat (ESNext)",permalink:"/docs/polyfills/intl-datetimeformat"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Supported Units",id:"supported-units",children:[{value:"Simple Units",id:"simple-units",children:[]},{value:"Compound Units",id:"compound-units",children:[]}]}],u={rightToc:m};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A polyfill for ESNext ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tc39.es/ecma402/#numberformat-objects"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"}),Object(i.b)("inlineCode",{parentName:"a"},"Number.prototype.toLocaleString")),"."),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.org/package/@formatjs/intl-numberformat"}),Object(i.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/@formatjs/intl-numberformat.svg?style=flat-square",alt:"npm Version"}))),"\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-numberformat",alt:"size"}))),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)(l.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm i @formatjs/intl-numberformat\n"))),Object(i.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add @formatjs/intl-numberformat\n")))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("p",null,"This package requires the following capabilities:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.PluralRules")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you're supporting IE11-, this requires ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/polyfills/intl-getcanonicallocales"}),Object(i.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales")),"."))),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"Everything in the ES2020 Internationalization API spec (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tc39.es/ecma402"}),"https://tc39.es/ecma402"),")."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"simple"},"Simple"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import '@formatjs/intl-numberformat/polyfill'\nimport '@formatjs/intl-numberformat/locale-data/en' // locale-data for en\n")),Object(i.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {shouldPolyfill} from '@formatjs/intl-numberformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-numberformat/polyfill')\n  }\n  if (Intl.NumberFormat.polyfilled) {\n    switch (locale) {\n      default:\n        await import('@formatjs/intl-numberformat/locale-data/en')\n        break\n      case 'fr':\n        await import('@formatjs/intl-numberformat/locale-data/fr')\n        break\n    }\n  }\n}\n")),Object(i.b)("h2",{id:"supported-units"},"Supported Units"),Object(i.b)("h3",{id:"simple-units"},"Simple Units"),Object(i.b)("p",null,"Currently ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier"}),"the spec")," defines a list of sanctioned units as below."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"type Unit =\n  | 'acre'\n  | 'bit'\n  | 'byte'\n  | 'celsius'\n  | 'centimeter'\n  | 'day'\n  | 'degree'\n  | 'fahrenheit'\n  | 'fluid-ounce'\n  | 'foot'\n  | 'gallon'\n  | 'gigabit'\n  | 'gigabyte'\n  | 'gram'\n  | 'hectare'\n  | 'hour'\n  | 'inch'\n  | 'kilobit'\n  | 'kilobyte'\n  | 'kilogram'\n  | 'kilometer'\n  | 'liter'\n  | 'megabit'\n  | 'megabyte'\n  | 'meter'\n  | 'mile'\n  | 'mile-scandinavian'\n  | 'millimeter'\n  | 'milliliter'\n  | 'millisecond'\n  | 'minute'\n  | 'month'\n  | 'ounce'\n  | 'percent'\n  | 'petabyte'\n  | 'pound'\n  | 'second'\n  | 'stone'\n  | 'terabit'\n  | 'terabyte'\n  | 'week'\n  | 'yard'\n  | 'year'\n")),Object(i.b)("h3",{id:"compound-units"},"Compound Units"),Object(i.b)("p",null,"You can specify ",Object(i.b)("inlineCode",{parentName:"p"},"X-per-Y")," unit, where ",Object(i.b)("inlineCode",{parentName:"p"},"X")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Y")," are sactioned simple units (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"kilometer-per-hour"),").\nThe library will choose the best-fit localized pattern to format this compound unit."))}b.isMDXComponent=!0},108:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),m=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=m(n),p=a,d=u["".concat(l,".").concat(p)]||u[p]||b[p]||i;return n?r.a.createElement(d,o(o({ref:t},s),{},{components:n})):r.a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},109:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},110:function(e,t,n){"use strict";var a=n(0),r=n(111);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},111:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},112:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(110),l=n(109),o=n(48),c=n.n(o);const s=37,m=39;t.a=function(e){const{block:t,children:n,defaultValue:o,values:u,groupId:b,className:p}=e,{tabGroupChoices:d,setTabGroupChoices:f}=Object(i.a)(),[j,y]=Object(a.useState)(o),[O,h]=Object(a.useState)(!1);if(null!=b){const e=d[b];null!=e&&e!==j&&u.some((t=>t.value===e))&&y(e)}const g=e=>{y(e),null!=b&&f(b,e)},v=[],N=e=>{e.metaKey||e.altKey||e.ctrlKey||h(!0)},w=()=>{h(!1)};return Object(a.useEffect)((()=>(window.addEventListener("keydown",N),window.addEventListener("mousedown",w),()=>{window.removeEventListener("keydown",N),window.removeEventListener("mousedown",w)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},p)},u.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===e,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":j===e}),style:O?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case m:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),N(e)},onFocus:()=>g(e),onClick:()=>{g(e),h(!1)},onPointerDown:()=>h(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((e=>e.props.value===j))[0]))}},113:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);