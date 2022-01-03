"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||c[d]||r;return n?l.createElement(f,o(o({ref:t},p),{},{components:n})):l.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},6396:(e,t,n)=>{n.d(t,{Z:()=>m});var l=n(7462),a=n(7294),r=n(2389),o=n(9443);const i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var u=n(3616),s=n(6010);const p="tabItem_1uMI";function c(e){var t,n,r,o=e.lazy,c=e.block,m=e.defaultValue,d=e.values,f=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,u.lx)(h,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=i(),N=g.tabGroupChoices,w=g.setTabGroupChoices,I=(0,a.useState)(k),j=I[0],O=I[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=N[f];null!=C&&C!==j&&h.some((function(e){return e.value===C}))&&O(C)}var S=function(e){var t=e.currentTarget,n=x.indexOf(t),l=h[n].value;l!==j&&(E(t),O(l),null!=f&&w(f,l))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var l=x.indexOf(e.currentTarget)+1;n=x[l]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":c},b)},h.map((function(e){var t=e.value,n=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return x.push(e)},onKeyDown:T,onFocus:S,onClick:S},r,{className:(0,s.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),o?(0,a.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,r.Z)();return a.createElement(c,(0,l.Z)({key:String(t)},e))}},4801:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>f});var l=n(7462),a=n(3366),r=(n(7294),n(3905)),o=n(6396),i=n(8215),u=["components"],s={id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},p=void 0,c={unversionedId:"polyfills/intl-numberformat",id:"polyfills/intl-numberformat",title:"Intl.NumberFormat (ESNext)",description:"A polyfill for ESNext Intl.NumberFormat and Number.prototype.toLocaleString.",source:"@site/docs/polyfills/intl-numberformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-numberformat",permalink:"/docs/polyfills/intl-numberformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-numberformat.md",tags:[],version:"current",frontMatter:{id:"intl-numberformat",title:"Intl.NumberFormat (ESNext)"},sidebar:"polyfills",previous:{title:"Intl.LocaleMatcher",permalink:"/docs/polyfills/intl-localematcher"},next:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Features",id:"features",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[],level:3},{value:"Simple",id:"simple",children:[],level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[],level:3}],level:2},{value:"Supported Units",id:"supported-units",children:[{value:"Simple Units",id:"simple-units",children:[],level:3},{value:"Compound Units",id:"compound-units",children:[],level:3}],level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,r.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A polyfill for ESNext ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402/#numberformat-objects"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.NumberFormat"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString"},(0,r.kt)("inlineCode",{parentName:"a"},"Number.prototype.toLocaleString")),"."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-numberformat"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-numberformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-numberformat",alt:"size"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(o.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-numberformat\n"))),(0,r.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-numberformat\n")))),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"This package requires the following capabilities:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,r.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"polyfill"),".")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("p",null,"Everything in the ES2020 Internationalization API spec (",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402"},"https://tc39.es/ecma402"),")."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.NumberFormat.~locale.<locale>"),", as well as locale data for any required polyfills, to your list of features. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en"><\/script>\n')),(0,r.kt)("p",null,"Or if ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.PluralRules")," needs to be polyfilled as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.NumberFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.NumberFormat,Intl.NumberFormat.~locale.en,Intl.PluralRules.~locale.en"><\/script>\n')),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-numberformat/polyfill'\nimport '@formatjs/intl-numberformat/locale-data/en' // locale-data for en\n")),(0,r.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-numberformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-numberformat/polyfill-force')\n  await import(`@formatjs/intl-numberformat/locale-data/${unsupportedLocale}`)\n}\n")),(0,r.kt)("h2",{id:"supported-units"},"Supported Units"),(0,r.kt)("h3",{id:"simple-units"},"Simple Units"),(0,r.kt)("p",null,"Currently, ",(0,r.kt)("a",{parentName:"p",href:"https://tc39.es/ecma402/#sec-issanctionedsimpleunitidentifier"},"the spec")," defines a list of sanctioned units as below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"type Unit =\n  | 'acre'\n  | 'bit'\n  | 'byte'\n  | 'celsius'\n  | 'centimeter'\n  | 'day'\n  | 'degree'\n  | 'fahrenheit'\n  | 'fluid-ounce'\n  | 'foot'\n  | 'gallon'\n  | 'gigabit'\n  | 'gigabyte'\n  | 'gram'\n  | 'hectare'\n  | 'hour'\n  | 'inch'\n  | 'kilobit'\n  | 'kilobyte'\n  | 'kilogram'\n  | 'kilometer'\n  | 'liter'\n  | 'megabit'\n  | 'megabyte'\n  | 'meter'\n  | 'mile'\n  | 'mile-scandinavian'\n  | 'millimeter'\n  | 'milliliter'\n  | 'millisecond'\n  | 'minute'\n  | 'month'\n  | 'ounce'\n  | 'percent'\n  | 'petabyte'\n  | 'pound'\n  | 'second'\n  | 'stone'\n  | 'terabit'\n  | 'terabyte'\n  | 'week'\n  | 'yard'\n  | 'year'\n")),(0,r.kt)("h3",{id:"compound-units"},"Compound Units"),(0,r.kt)("p",null,"You can specify ",(0,r.kt)("inlineCode",{parentName:"p"},"X-per-Y")," unit, where ",(0,r.kt)("inlineCode",{parentName:"p"},"X")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Y")," are sanctioned simple units (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"kilometer-per-hour"),").\nThe library will choose the best-fit localized pattern to format this compound unit."))}f.isMDXComponent=!0}}]);