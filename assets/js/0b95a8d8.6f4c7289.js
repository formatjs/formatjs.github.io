(self.webpackChunk=self.webpackChunk||[]).push([[2106],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),s=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||r;return n?l.createElement(d,i(i({ref:t},p),{},{components:n})):l.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var l=n(7294);const a=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1395:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var l=n(7294),a=n(944),r=n(6010);const i="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,s=39;const p=function(e){var t=e.lazy,n=e.block,p=e.defaultValue,u=e.values,m=e.groupId,f=e.className,d=(0,a.Z)(),y=d.tabGroupChoices,g=d.setTabGroupChoices,v=(0,l.useState)(p),h=v[0],b=v[1],k=l.Children.toArray(e.children),C=[];if(null!=m){var N=y[m];null!=N&&N!==h&&u.some((function(e){return e.value===N}))&&b(N)}var O=function(e){var t=e.currentTarget,n=C.indexOf(t),l=u[n].value;b(l),null!=m&&(g(m,l),setTimeout((function(){var e,n,l,a,r,i,c,s;(e=t.getBoundingClientRect(),n=e.top,l=e.left,a=e.bottom,r=e.right,i=window,c=i.innerHeight,s=i.innerWidth,n>=0&&r<=s&&a<=c&&l>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case s:var l=C.indexOf(e.target)+1;n=C[l]||C[0];break;case c:var a=C.indexOf(e.target)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":h===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:j,onFocus:O,onClick:O},n)}))),t?(0,l.cloneElement)(k.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});const l=(0,n(7294).createContext)(void 0)},944:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var l=n(7294),a=n(9443);const r=function(){var e=(0,l.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7062:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>p,toc:()=>u,default:()=>f});var l=n(2122),a=n(9756),r=(n(7294),n(3905)),i=n(1395),o=n(8215),c=["components"],s={id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},p={unversionedId:"polyfills/intl-getcanonicallocales",id:"polyfills/intl-getcanonicallocales",isDocsHomePage:!1,title:"Intl.getCanonicalLocales",description:"A spec-compliant polyfill/ponyfill for Intl.getCanonicalLocales tested by the official ECMAScript Conformance test suite",source:"@site/docs/polyfills/intl-getcanonicallocales.md",sourceDirName:"polyfills",slug:"/polyfills/intl-getcanonicallocales",permalink:"/docs/polyfills/intl-getcanonicallocales",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/polyfills/intl-getcanonicallocales.md",version:"current",frontMatter:{id:"intl-getcanonicallocales",title:"Intl.getCanonicalLocales"},sidebar:"polyfills",previous:{title:"Intl.DisplayNames",permalink:"/docs/polyfills/intl-displaynames"},next:{title:"Intl.ListFormat",permalink:"/docs/polyfills/intl-listformat"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"Via polyfill.io",id:"via-polyfillio",children:[]},{value:"Simple",id:"simple",children:[]},{value:"Dynamic import + capability detection",id:"dynamic-import--capability-detection",children:[]}]},{value:"Tests",id:"tests",children:[]}],m={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A spec-compliant polyfill/ponyfill for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.getCanonicalLocales")," tested by the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262"},"official ECMAScript Conformance test suite")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.org/package/@formatjs/intl-getcanonicallocales"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@formatjs/intl-getcanonicallocales.svg?style=flat-square",alt:"npm Version"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://badgen.net/bundlephobia/minzip/@formatjs/intl-getcanonicallocales",alt:"size"})),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm i @formatjs/intl-getcanonicallocales\n"))),(0,r.kt)(o.Z,{value:"yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add @formatjs/intl-getcanonicallocales\n")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"via-polyfillio"},"Via polyfill.io"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://polyfill.io/v3/url-builder/"},"polyfill.io URL Builder")," to create a polyfill script tag for ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.GetCanonicalLocales"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Polyfill Intl.GetCanonicalLocales & its dependencies --\x3e\n<script src="https://polyfill.io/v3/polyfill.min.js?features=Intl.GetCanonicalLocales"><\/script>\n')),(0,r.kt)("h3",{id:"simple"},"Simple"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import '@formatjs/intl-getcanonicallocales/polyfill'\n")),(0,r.kt)("h3",{id:"dynamic-import--capability-detection"},"Dynamic import + capability detection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {shouldPolyfill} from '@formatjs/intl-getcanonicallocales/should-polyfill'\nasync function polyfill() {\n  // This platform already supports Intl.getCanonicalLocales\n  if (shouldPolyfill()) {\n    await import('@formatjs/intl-getcanonicallocales/polyfill')\n  }\n}\n")),(0,r.kt)("h2",{id:"tests"},"Tests"),(0,r.kt)("p",null,"This library is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tc39/test262/tree/master/test/intl402/Intl/getCanonicalLocales"},"test262"),"-compliant."))}f.isMDXComponent=!0},6010:(e,t,n)=>{"use strict";function l(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=l(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=l(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:()=>a})}}]);