(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},d=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||r;return t?i.a.createElement(m,l(l({ref:n},c),{},{components:t})):i.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},117:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},118:function(e,n,t){"use strict";var a=t(0),i=t(119);n.a=function(){const e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,n,t){"use strict";var a=t(0);const i=Object(a.createContext)(void 0);n.a=i},120:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(118),o=t(117),l=t(52),s=t.n(l);const c=37,p=39;n.a=function(e){const{lazy:n,block:t,children:l,defaultValue:b,values:u,groupId:d,className:m}=e,{tabGroupChoices:g,setTabGroupChoices:j}=Object(r.a)(),[f,h]=Object(a.useState)(b);if(null!=d){const e=g[d];null!=e&&e!==f&&u.some((n=>n.value===e))&&h(e)}const O=e=>{h(e),null!=d&&j(d,e)},v=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},m)},u.map((({value:e,label:n})=>i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,n,t)=>{switch(t.keyCode){case p:((e,n)=>{const t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()})(e,n);break;case c:((e,n)=>{const t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,n)}})(v,e.target,e)},onFocus:()=>O(e),onClick:()=>{O(e)}},n)))),n?Object(a.cloneElement)(l.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},l.map(((e,n)=>Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}},121:function(e,n,t){"use strict";var a=t(3),i=t(0),r=t.n(i);n.a=function({children:e,hidden:n,className:t}){return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:t}),e)}},280:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/distribute-libs-6dd93d10e579935a5db51016ef6e7404.svg"},78:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),r=(t(0),t(116)),o=t(120),l=t(121),s={id:"distribute-libraries",title:"Distributing i18n-friendly libraries"},c={unversionedId:"guides/distribute-libraries",id:"guides/distribute-libraries",isDocsHomePage:!1,title:"Distributing i18n-friendly libraries",description:"In larger scale applications/monorepos, not all components/libraries live within the same repo/project and they might get distributed differently. While there are multiple ways to solve this problem, this guide aims to provide a guidance that we've seen working quite well with large engineering orgs.",source:"@site/docs/guides/distribute-libraries.md",slug:"/guides/distribute-libraries",permalink:"/docs/guides/distribute-libraries",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/distribute-libraries.md",version:"current",sidebar:"docs",previous:{title:"Testing with formatjs",permalink:"/docs/guides/testing"},next:{title:"Runtime Requirements",permalink:"/docs/guides/runtime-requirements"}},p=[{value:"High level concept",id:"high-level-concept",children:[]},{value:"Declaring in package.json",id:"declaring-in-packagejson",children:[]},{value:"Declaring with a convention",id:"declaring-with-a-convention",children:[]},{value:"Passing down <code>intl</code> object",id:"passing-down-intl-object",children:[]}],b={rightToc:p};function u(e){var n=e.components,s=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,s,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In larger scale applications/monorepos, not all components/libraries live within the same repo/project and they might get distributed differently. While there are multiple ways to solve this problem, this guide aims to provide a guidance that we've seen working quite well with large engineering orgs."),Object(r.b)("h2",{id:"high-level-concept"},"High level concept"),Object(r.b)("p",null,"Translated strings are basically assets, just like CSS, static configuration or images. The high level structure typically contains several layers:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reusable Components/Libraries that have translated strings, which can be nested."),Object(r.b)("li",{parentName:"ul"},"Consuming higher-level applications that consumes those components/libraries.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"Distribution Hierarchy",src:t(280).default})),Object(r.b)("p",null,"Each feature/library would be in charge of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/getting-started/message-declaration"}),"Declaring its messages"),"."),Object(r.b)("li",{parentName:"ul"},"Integrating with the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/getting-started/application-workflow"}),"translation pipeline"),"."),Object(r.b)("li",{parentName:"ul"},"Declaring its translated & aggregated strings using either a ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://docs.npmjs.com/files/package.json"}),"manifest like package.json")," or a convention (always output to a specific location) or both.")),Object(r.b)("h2",{id:"declaring-in-packagejson"},"Declaring in package.json"),Object(r.b)("p",null,"This is similar to using ",Object(r.b)("inlineCode",{parentName:"p"},"style")," attribute to declare CSS. You can declare something like"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "my-library",\n  "version": "1.0.0",\n  "lang": "my-strings",\n  "supportedLocales": ["en", "en-GB", "ja"]\n}\n')),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"my-strings")," is the folder containing your translated strings in your ",Object(r.b)("inlineCode",{parentName:"p"},"supportedLocales"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"my-strings\n|- en.json\n|- en-GB.json\n|- ja.json\n")),Object(r.b)("p",null,"Consuming application can walk through ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules")," looking for ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," files with these fields and aggregate the strings together into a single bundle (or multiple bundles) and serve those JSON however it chooses to."),Object(r.b)("p",null,"This provides flexibility to output translations to any location you want as long as it's declared in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),". However, this also incurs additional processing cost at the application level and also encourages inconsistency in output location."),Object(r.b)("h2",{id:"declaring-with-a-convention"},"Declaring with a convention"),Object(r.b)("p",null,"This is similar to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#declaring-in-packagejson"}),"Declaring in package.json"),", except translation is always output to ",Object(r.b)("inlineCode",{parentName:"p"},"lang/{locale}.json"),". Upstream application can do"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'formatjs compile "node_modules/**/lang/en.json" --ast --out-file lang/en.json\n')),Object(r.b)("p",null,"to aggregate all its libraries' pre-translated strings."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"my-lib\n|- src\n|- lang\n    |- en.json\n    |- en-GB.json\n    |- ja.json\n|- node_modules\n    |- library1\n        |- lang\n            |- en.json\n            |- en-GB.json\n            |- ja.json\n    |- library2\n        |- lang\n            |- en.json\n            |- en-GB.json\n            |- ja.json\n")),Object(r.b)("p",null,"This provides consistency and minimize processing cost of different manifest files but also is less flexible."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We've seen ",Object(r.b)("inlineCode",{parentName:"p"},"convention")," approach working better in large engineering org due to enforcement of convention & structure while ",Object(r.b)("inlineCode",{parentName:"p"},"manifest")," approach working in a more open environment."))),Object(r.b)("h2",{id:"passing-down-intl-object"},"Passing down ",Object(r.b)("inlineCode",{parentName:"h2"},"intl")," object"),Object(r.b)("p",null,"The core of a i18n application is the ",Object(r.b)("inlineCode",{parentName:"p"},"intl")," object, which contains precompiled messages, locale settings, format settings and cache. Therefore, this should only be initialized at the top level in the application."),Object(r.b)("p",null,"Component libraries can declare ",Object(r.b)("inlineCode",{parentName:"p"},"intl: IntlShape")," as a prop and subsequently pass it down directly like:"),Object(r.b)(o.a,{groupId:"engine",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue3",value:"vue"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"react",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {IntlShape} from 'react-intl'\nimport {MyButton, MyForm} from 'my-components'\ninterface Props {\n  intl: IntlShape\n}\n\nfunction MyFeature(props: Props) {\n  return (\n    <div>\n      <MyButton intl={props.intl} />\n      <MyForm intl={props.intl} />\n    </div>\n  )\n}\n")),Object(r.b)("p",null,"or passing down via ",Object(r.b)("inlineCode",{parentName:"p"},"context")," using ",Object(r.b)("inlineCode",{parentName:"p"},"RawIntlProvider"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {IntlShape, RawIntlProvider} from 'react-intl'\nimport {MyButton, MyForm} from 'my-components'\ninterface Props {\n  intl: IntlShape\n}\n\nfunction MyFeature(props: Props) {\n  return (\n    <RawIntlProvider value={intl}>\n      <MyButton />\n      <MyForm />\n    </RawIntlProvider>\n  )\n}\n"))),Object(r.b)(l.a,{value:"vue",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {useIntl} from '@formatjs/vue-intl'\n\nconst MyFeature = {\n  setup() {\n    const intl = useIntl()\n    return () =>\n      h(\n        'p',\n        {},\n        intl.formatMessage({\n          id: 'foo',\n          defaultMessage: 'Hello',\n        })\n      )\n  },\n}\n")),Object(r.b)("p",null,"or passing down via ",Object(r.b)("inlineCode",{parentName:"p"},"provideIntl")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import {createIntl} from '@formatjs/intl'\nimport {provideIntl, useIntl} from '@formatjs/vue-intl'\n\nconst Ancestor = {\n  setup() {\n    provideIntl(\n      createIntl({\n        locale: 'en',\n        defaultLocale: 'en',\n        messages: {\n          foo: 'Composed',\n        },\n      })\n    )\n  },\n  render() {\n    return h(MyFeature)\n  },\n}\n")))))}u.isMDXComponent=!0}}]);