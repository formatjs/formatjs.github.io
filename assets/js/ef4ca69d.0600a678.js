(self.webpackChunk=self.webpackChunk||[]).push([[7156],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?l.createElement(f,i(i({ref:t},c),{},{components:n})):l.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var l=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var l=n(7294),a=n(944),r=n(6010);const i="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,p=39;const c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,m=e.values,u=e.groupId,d=e.className,f=(0,a.Z)(),b=f.tabGroupChoices,y=f.setTabGroupChoices,h=(0,l.useState)(c),k=h[0],v=h[1],g=l.Children.toArray(e.children),N=[];if(null!=u){var w=b[u];null!=w&&w!==k&&m.some((function(e){return e.value===w}))&&v(w)}var j=function(e){var t=e.currentTarget,n=N.indexOf(t),l=m[n].value;v(l),null!=u&&(y(u,l),setTimeout((function(){var e,n,l,a,r,i,s,p;(e=t.getBoundingClientRect(),n=e.top,l=e.left,a=e.bottom,r=e.right,i=window,s=i.innerHeight,p=i.innerWidth,n>=0&&r<=p&&a<=s&&l>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case p:var l=N.indexOf(e.target)+1;n=N[l]||N[0];break;case s:var a=N.indexOf(e.target)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d)},m.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:I,onFocus:j,onClick:j},n)}))),t?(0,l.cloneElement)(g.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(7294),a=n(9443);const r=function(){var e=(0,l.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},616:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>p,metadata:()=>c,toc:()=>m,default:()=>d});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(1395),o=n(8215),s=["components"],p={id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},c={unversionedId:"polyfills/intl-numberformat",id:"polyfills/intl-numberformat",isDocsHomePage:!1,title:"Intl.NumberFormat (ESNext)",description:"A polyfill for ESNext Intl.NumberFormat and Number.prototype.toLocaleString.",source:"@site/docs/polyfills/intl-numberformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-numberformat",permalink:"/docs/polyfills/intl-numberformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-numberformat.md",version:"current",frontMatter:{id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},sidebar:"polyfills",previous:{title:"Intl.LocaleMatcher",permalink:"/docs/polyfills/intl-localematcher"},next:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Features",id:"features",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Supported Units",id:"supported-units",children:[{value:"Simple Units",id:"simple-units",children:[]},{value:"Compound Units",id:"compound-units",children:[]}]}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A polyfill for ESNext ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402/#numberformat-objects"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"},(0,r.kt)("inlineCode",{parentName:"a"},"Number.prototype.toLocaleString")),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-numberformat"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-numberformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-numberformat",alt:"size"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-numberformat\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-numberformat\n")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This package requires the following capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"polyfill"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Everything in the ES2020 Internationalization API spec (",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402"},"https://tc39.es/ecma402"),")."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat.~locale.<locale>"),", as well as locale data for any required polyfills, to your list of features. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en"><\/script>\n')),(0,r.kt)("p",null,"Or if ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules")," needs to be polyfilled as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en,Intl.PluralRules.~locale.en"><\/script>\n')),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-numberformat/polyfill'\nimport '@formatjs/intl-numberformat/locale-data/en' // locale-data for en\n")),(0,r.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-numberformat/should-polyfill'\nasync function polyfill(locale: string) {\n  if (!shouldPolyfill()) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-numberformat/polyfill')\n  switch (locale) {\n    default:\n      await import('@formatjs/intl-numberformat/locale-data/en')\n      break\n    case 'fr':\n      await import('@formatjs/intl-numberformat/locale-data/fr')\n      break\n  }\n}\n")),(0,r.kt)("h2",{id:"supported-units"},"Supported Units"),(0,r.kt)("h3",{id:"simple-units"},"Simple Units"),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier"},"the spec")," defines a list of sanctioned units as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Unit =\n  | 'acre'\n  | 'bit'\n  | 'byte'\n  | 'celsius'\n  | 'centimeter'\n  | 'day'\n  | 'degree'\n  | 'fahrenheit'\n  | 'fluid-ounce'\n  | 'foot'\n  | 'gallon'\n  | 'gigabit'\n  | 'gigabyte'\n  | 'gram'\n  | 'hectare'\n  | 'hour'\n  | 'inch'\n  | 'kilobit'\n  | 'kilobyte'\n  | 'kilogram'\n  | 'kilometer'\n  | 'liter'\n  | 'megabit'\n  | 'megabyte'\n  | 'meter'\n  | 'mile'\n  | 'mile-scandinavian'\n  | 'millimeter'\n  | 'milliliter'\n  | 'millisecond'\n  | 'minute'\n  | 'month'\n  | 'ounce'\n  | 'percent'\n  | 'petabyte'\n  | 'pound'\n  | 'second'\n  | 'stone'\n  | 'terabit'\n  | 'terabyte'\n  | 'week'\n  | 'yard'\n  | 'year'\n")),(0,r.kt)("h3",{id:"compound-units"},"Compound Units"),(0,r.kt)("p",null,"You can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"X-per-Y")," unit, where ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," are sanctioned simple units (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"kilometer-per-hour"),").\nThe library will choose the best-fit localized pattern to format this compound unit."))}d.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function l(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);