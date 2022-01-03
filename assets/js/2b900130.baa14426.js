"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9173],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>f});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(l),f=r,d=m["".concat(s,".").concat(f)]||m[f]||c[f]||n;return l?a.createElement(d,i(i({ref:t},p),{},{components:l})):a.createElement(d,i({ref:t},p))}));function f(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<n;u++)i[u]=l[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}m.displayName="MDXCreateElement"},8215:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(7294);const r=function(e){var t=e.children,l=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:l,className:r},t)}},6396:(e,t,l)=>{l.d(t,{Z:()=>m});var a=l(7462),r=l(7294),n=l(2389),i=l(9443);const o=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var s=l(3616),u=l(6010);const p="tabItem_1uMI";function c(e){var t,l,n,i=e.lazy,c=e.block,m=e.defaultValue,f=e.values,d=e.groupId,v=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,s.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===m?m:null!=(t=null!=m?m:null==(l=y.find((function(e){return e.props.default})))?void 0:l.props.value)?t:null==(n=y[0])?void 0:n.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=o(),N=g.tabGroupChoices,T=g.setTabGroupChoices,w=(0,r.useState)(k),j=w[0],O=w[1],I=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var C=N[d];null!=C&&C!==j&&h.some((function(e){return e.value===C}))&&O(C)}var x=function(e){var t=e.currentTarget,l=I.indexOf(t),a=h[l].value;a!==j&&(E(t),O(a),null!=d&&T(d,a))},R=function(e){var t,l=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;l=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;l=I[r]||I[I.length-1]}null==(t=l)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,l=e.label,n=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return I.push(e)},onKeyDown:R,onFocus:x,onClick:x},n,{className:(0,u.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":j===t})}),null!=l?l:t)}))),i?(0,r.cloneElement)(y.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function m(e){var t=(0,n.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},6154:(e,t,l)=>{l.r(t),l.d(t,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>c,toc:()=>m,default:()=>d});var a=l(7462),r=l(3366),n=(l(7294),l(3905)),i=l(6396),o=l(8215),s=["components"],u={id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},p=void 0,c={unversionedId:"polyfills/intl-relativetimeformat",id:"polyfills/intl-relativetimeformat",title:"Intl.RelativeTimeFormat",description:"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-relativetimeformat.md",sourceDirName:"polyfills",slug:"/polyfills/intl-relativetimeformat",permalink:"/docs/polyfills/intl-relativetimeformat",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-relativetimeformat.md",tags:[],version:"current",frontMatter:{id:"intl-relativetimeformat",title:"Intl.RelativeTimeFormat"},sidebar:"polyfills",previous:{title:"Intl.PluralRules",permalink:"/docs/polyfills/intl-pluralrules"}},m=[{value:"Installation",id:"installation",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[],level:3},{value:"Simple",id:"simple",children:[],level:3},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[],level:3}],level:2},{value:"Tests",id:"tests",children:[],level:2}],f={toc:m};function d(e){var t=e.components,l=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A spec-compliant polyfill for Intl.RelativeTimeFormat fully tested by the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-relativetimeformat"},(0,n.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-relativetimeformat.svg?style=flat-square",alt:"npm Version"})),"\n",(0,n.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-relativetimeformat",alt:"size"})),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-relativetimeformat\n"))),(0,n.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-relativetimeformat\n")))),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"This package requires the following capabilities:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/getCanonicalLocales"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.getCanonicalLocales"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-getcanonicallocales"},"polyfill")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.Locale"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-locale"},"polyfill"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules"},(0,n.kt)("inlineCode",{parentName:"a"},"Intl.PluralRules"))," or ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-pluralrules"},"polyfill"),"."),(0,n.kt)("li",{parentName:"ul"},"If you need ",(0,n.kt)("inlineCode",{parentName:"li"},"formatToParts")," and have to support IE11- or Node 10-, you'd need to polyfill using ",(0,n.kt)("a",{parentName:"li",href:"/docs/polyfills/intl-numberformat"},(0,n.kt)("inlineCode",{parentName:"a"},"@formatjs/intl-numberformat")),".")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,n.kt)("p",null,"You can use ",(0,n.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.RelativeTimeFormat"),". By default the created URL does not come with any locale data. In order to add locale data, append ",(0,n.kt)("inlineCode",{parentName:"p"},"Intl.RelativeTimeFormat.~locale.<locale>")," to your list of features. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.RelativeTimeFormat, its dependencies & `en` locale data --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.RelativeTimeFormat,Intl.RelativeTimeFormat.~locale.en"><\/script>\n')),(0,n.kt)("h3",{id:"simple"},"Simple"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-relativetimeformat/polyfill'\nimport '@formatjs/intl-relativetimeformat/locale-data/en' // locale-data for en\n")),(0,n.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-relativetimeformat/should-polyfill'\nasync function polyfill(locale: string) {\n  const unsupportedLocale = shouldPolyfill(locale)\n  // This locale is supported\n  if (!unsupportedLocale) {\n    return\n  }\n  // Load the polyfill 1st BEFORE loading data\n  await import('@formatjs/intl-relativetimeformat/polyfill-force')\n  await import(\n    `@formatjs/intl-relativetimeformat/locale-data/${unsupportedLocale}`\n  )\n}\n")),(0,n.kt)("h2",{id:"tests"},"Tests"),(0,n.kt)("p",null,"This library is fully ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/RelativeTimeFormat"},"test262"),"-compliant."))}d.isMDXComponent=!0}}]);