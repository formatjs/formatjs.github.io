(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),m=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=m(a),b=n,u=p["".concat(r,".").concat(b)]||p[b]||d[b]||l;return a?i.a.createElement(u,o(o({ref:t},s),{},{components:a})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,r=new Array(l);r[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},123:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},124:function(e,t,a){"use strict";var n=a(0),i=a(125);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},126:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(124),r=a(123),o=a(55),c=a.n(o);var s=37,m=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,p=e.values,d=e.groupId,b=e.className,u=Object(l.a)(),f=u.tabGroupChoices,h=u.setTabGroupChoices,j=Object(n.useState)(o),y=j[0],O=j[1],v=n.Children.toArray(e.children),g=[];if(null!=d){var N=f[d];null!=N&&N!==y&&p.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var t=e.target,a=g.indexOf(t),n=v[a].props.value;O(n),null!=d&&(h(d,n),setTimeout((function(){var e,a,n,i,l,r,o,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,l=e.right,r=window,o=r.innerHeight,s=r.innerWidth,a>=0&&l<=s&&i<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((function(){return t.classList.remove(c.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case m:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case s:var i=g.indexOf(e.target)-1;a=g[i]||g[g.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},b)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:Object(r.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:T,onFocus:w,onClick:w},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},127:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},92:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return m})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(8),l=(a(0),a(122)),r=a(126),o=a(127),c={id:"intl-datetimeformat",title:"Intl.DateTimeFormat (ESNext)"},s={unversionedId:"polyfills/intl-datetimeformat",id:"polyfills/intl-datetimeformat",isDocsHomePage:!1,title:"Intl.DateTimeFormat (ESNext)",description:"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-datetimeformat.md",slug:"/polyfills/intl-datetimeformat",permalink:"/docs/polyfills/intl-datetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-datetimeformat.md",version:"current",sidebar:"polyfills",previous:{title:"Polyfills",permalink:"/docs/polyfills"},next:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"}},m=[{value:"Features",id:"features",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]},{value:"Adding IANA Timezone Database",id:"adding-iana-timezone-database",children:[]},{value:"Default Timezone",id:"default-timezone",children:[]}]},{value:"Tests",id:"tests",children:[]}],p={toc:m};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A spec-compliant polyfill for Intl.DateTimeFormat fully tested by the ",Object(l.b)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-datetimeformat"},Object(l.b)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-datetimeformat.svg?style=flat-square",alt:"npm Version"})),"\n",Object(l.b)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-datetimeformat",alt:"size"})),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Right now we only support Gregorian calendar in this polyfill. Therefore we recommend setting ",Object(l.b)("inlineCode",{parentName:"p"},"calendar: 'gregory'")," in your options to be safe."))),Object(l.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"Right now this polyfill supports daylight transition until 2038 due to ",Object(l.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Year_2038_problem"},"Year 2038 problem"),"."))),Object(l.b)("h2",{id:"features"},"Features"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tc39/proposal-intl-datetime-style"},"dateStyle/timeStyle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/tc39/proposal-intl-DateTimeFormat-formatRange"},"formatRange"))),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)(r.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(l.b)(o.a,{value:"npm",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-datetimeformat\n"))),Object(l.b)(o.a,{value:"yarn",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-datetimeformat\n")))),Object(l.b)("h2",{id:"requirements"},"Requirements"),Object(l.b)("p",null,"This package requires the following capabilities:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},Object(l.b)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",Object(l.b)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},Object(l.b)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",Object(l.b)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat"},Object(l.b)("inlineCode",{parentName:"a"},"Intl.NumberFormat")))),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("h3",{id:"via-polyfillio"},"Via polyfill.io"),Object(l.b)("p",null,"You can use ",Object(l.b)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",Object(l.b)("inlineCode",{parentName:"p"},"Intl.DateTimeFormat.~locale.<locale>")," to your list of features. For example:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.DateTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.DateTimeFormat,Intl.DateTimeFormat.~locale.en"><\/script>\n')),Object(l.b)("h3",{id:"simple"},"Simple"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/locale-data/en' // locale-data for en\nimport '@formatjs/intl-datetimeformat/add-all-tz' // Add ALL tz data\n")),Object(l.b)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-datetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (shouldPolyfill()) {\n    // Load the polyfill 1st BEFORE loading data\n    await import('@formatjs/intl-datetimeformat/polyfill')\n  }\n\n  if (Intl.DateTimeFormat.polyfilled) {\n    // Parallelize CLDR data loading\n    const dataPolyfills = [import('@formatjs/intl-datetimeformat/add-all-tz')]\n\n    switch (locale) {\n      default:\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/en')\n        )\n        break\n      case 'fr':\n        dataPolyfills.push(\n          import('@formatjs/intl-datetimeformat/locale-data/fr')\n        )\n        break\n    }\n    await Promise.all(dataPolyfills)\n  }\n}\n")),Object(l.b)("h3",{id:"adding-iana-timezone-database"},"Adding IANA Timezone Database"),Object(l.b)("p",null,"We provide 2 pre-processed IANA Timezone:"),Object(l.b)("h4",{id:"full-contains-all-timezone-from-iana-database"},"Full: contains ALL Timezone from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz'\n")),Object(l.b)("h4",{id:"golden-contains-popular-set-of-timezones-from-iana-database"},"Golden: contains popular set of timezones from IANA database"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-golden-tz'\n")),Object(l.b)("h3",{id:"default-timezone"},"Default Timezone"),Object(l.b)("p",null,"Since JS Engines do not expose default timezone, there's currently no way for us to detect local timezone that a browser is in. Therefore, the default timezone in this polyfill is ",Object(l.b)("inlineCode",{parentName:"p"},"UTC"),"."),Object(l.b)("p",null,"You can change this by either calling ",Object(l.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," or always explicitly pass in ",Object(l.b)("inlineCode",{parentName:"p"},"timeZone")," option for accurate date time calculation."),Object(l.b)("p",null,"Since ",Object(l.b)("inlineCode",{parentName:"p"},"__setDefaultTimeZone")," is not in the spec, you should make sure to check for its existence before calling it & after tz data has been loaded, e.g:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-datetimeformat/polyfill'\nimport '@formatjs/intl-datetimeformat/add-all-tz.js'\n\nif ('__setDefaultTimeZone' in Intl.DateTimeFormat) {\n  Intl.DateTimeFormat.__setDefaultTimeZone('America/Los_Angeles')\n}\n")),Object(l.b)("h2",{id:"tests"},"Tests"),Object(l.b)("p",null,"This library is fully ",Object(l.b)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/DateTimeFormat"},"test262"),"-compliant."))}d.isMDXComponent=!0}}]);