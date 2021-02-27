(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return f}));var a=n(3),l=n(7),r=(n(38),n(124)),i=n(128),o=n(129),c={id:"intl-listformat",title:"Intl.ListFormat"},s={unversionedId:"polyfills/intl-listformat",id:"polyfills/intl-listformat",isDocsHomePage:!1,title:"Intl.ListFormat",description:"A spec-compliant polyfill for Intl.ListFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-listformat.md",slug:"/polyfills/intl-listformat",permalink:"/docs/polyfills/intl-listformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-listformat.md",version:"current",sidebar:"polyfills",previous:{title:"Intl.getCanonicalLocales",permalink:"/docs/polyfills/intl-getcanonicallocales"},next:{title:"Intl.Locale",permalink:"/docs/polyfills/intl-locale"}},p=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],u={toc:p};function f(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A spec-compliant polyfill for Intl.ListFormat fully tested by the ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-listformat"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-listformat.svg?style=flat-square",alt:"npm Version"})),"\n",Object(r.b)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-listformat",alt:"size"})),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-listformat\n"))),Object(r.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-listformat\n")))),Object(r.b)("h2",{id:"requirements"},"Requirements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},Object(r.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},Object(r.b)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",Object(r.b)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),".")),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"via-polyfillio"},"Via polyfill.io"),Object(r.b)("p",null,"You can use ",Object(r.b)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",Object(r.b)("inlineCode",{parentName:"p"},"Intl.ListFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",Object(r.b)("inlineCode",{parentName:"p"},"Intl.ListFormat.~locale.<locale>")," to your list of features. For example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.ListFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.ListFormat,Intl.ListFormat.~locale.en"><\/script>\n')),Object(r.b)("h3",{id:"simple"},"Simple"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-listformat/polyfill'\nimport '@formatjs/intl-listformat/locale-data/en' // locale-data for en\n")),Object(r.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-listformat/should-polyfill'\nasync function polyfill(locale: string) {\n  // This platform already supports Intl.ListFormat\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-listformat/polyfill')\n  }\n\n  if (Intl.ListFormat.polyfilled) {\n    switch (locale) {\n      default:\n        await import('@formatjs/intl-listformat/locale-data/en')\n        break\n\n      case 'fr':\n        await import('@formatjs/intl-listformat/locale-data/fr')\n        break\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"tests"},"Tests"),Object(r.b)("p",null,"This library is fully ",Object(r.b)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/ListFormat"},"test262"),"-compliant."))}f.isMDXComponent=!0},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(38),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=l.a.createContext({}),p=function(e){var t=l.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},m=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(i,".").concat(m)]||u[m]||f[m]||r;return n?l.a.createElement(b,o(o({ref:t},s),{},{components:n})):l.a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},125:function(e,t,n){"use strict";function a(e){var t,n,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(l&&(l+=" "),l+=n);else for(t in e)e[t]&&(l&&(l+=" "),l+=t);return l}t.a=function(){for(var e,t,n=0,l="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(l&&(l+=" "),l+=t);return l}},126:function(e,t,n){"use strict";var a=n(38),l=n(127);t.a=function(){var e=Object(a.useContext)(l.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},127:function(e,t,n){"use strict";var a=n(38),l=Object(a.createContext)(void 0);t.a=l},128:function(e,t,n){"use strict";var a=n(38),l=n.n(a),r=n(126),i=n(125),o=n(58),c=n.n(o),s=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,f=e.groupId,m=e.className,b=Object(r.a)(),d=b.tabGroupChoices,y=b.setTabGroupChoices,j=Object(a.useState)(o),O=j[0],h=j[1],v=a.Children.toArray(e.children);if(null!=f){var g=d[f];null!=g&&g!==O&&u.some((function(e){return e.value===g}))&&h(g)}var N=function(e){h(e),null!=f&&y(f,e)},w=[];return l.a.createElement("div",null,l.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return l.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},129:function(e,t,n){"use strict";var a=n(38),l=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}}}]);