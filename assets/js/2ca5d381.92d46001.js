"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2770],{9418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"guides/distribute-libraries","title":"Distributing i18n-friendly libraries","description":"In larger scale applications/monorepos, not all components/libraries live within the same repo/project and they might get distributed differently. While there are multiple ways to solve this problem, this guide aims to provide a guidance that we\'ve seen working quite well with large engineering orgs.","source":"@site/docs/guides/distribute-libraries.md","sourceDirName":"guides","slug":"/guides/distribute-libraries","permalink":"/docs/guides/distribute-libraries","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/guides/distribute-libraries.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1739762471000,"frontMatter":{"id":"distribute-libraries","title":"Distributing i18n-friendly libraries"},"sidebar":"docs","previous":{"title":"Testing with formatjs","permalink":"/docs/guides/testing"},"next":{"title":"Runtime Requirements","permalink":"/docs/guides/runtime-requirements"}}');var r=t(6106),s=t(972),a=t(4008),l=t(701);const o={id:"distribute-libraries",title:"Distributing i18n-friendly libraries"},c=void 0,u={},d=[{value:"High level concept",id:"high-level-concept",level:2},{value:"Declaring in package.json",id:"declaring-in-packagejson",level:2},{value:"Declaring with a convention",id:"declaring-with-a-convention",level:2},{value:"Passing down <code>intl</code> object",id:"passing-down-intl-object",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"In larger scale applications/monorepos, not all components/libraries live within the same repo/project and they might get distributed differently. While there are multiple ways to solve this problem, this guide aims to provide a guidance that we've seen working quite well with large engineering orgs."}),"\n",(0,r.jsx)(n.h2,{id:"high-level-concept",children:"High level concept"}),"\n",(0,r.jsx)(n.p,{children:"Translated strings are basically assets, just like CSS, static configuration or images. The high level structure typically contains several layers:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Reusable Components/Libraries that have translated strings, which can be nested."}),"\n",(0,r.jsx)(n.li,{children:"Consuming higher-level applications that consumes those components/libraries."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Distribution Hierarchy",src:t(1623).A+"",width:"560",height:"293"})}),"\n",(0,r.jsx)(n.p,{children:"Each feature/library would be in charge of:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/getting-started/message-declaration",children:"Declaring its messages"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Integrating with the ",(0,r.jsx)(n.a,{href:"/docs/getting-started/application-workflow",children:"translation pipeline"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Declaring its translated & aggregated strings using either a ",(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/files/package.json",children:"manifest like package.json"})," or a convention (always output to a specific location) or both."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"declaring-in-packagejson",children:"Declaring in package.json"}),"\n",(0,r.jsxs)(n.p,{children:["This is similar to using ",(0,r.jsx)(n.code,{children:"style"})," attribute to declare CSS. You can declare something like"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "name": "my-library",\n  "version": "1.0.0",\n  "lang": "my-strings",\n  "supportedLocales": ["en", "en-GB", "ja"]\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"my-strings"})," is the folder containing your translated strings in your ",(0,r.jsx)(n.code,{children:"supportedLocales"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"my-strings\n|- en.json\n|- en-GB.json\n|- ja.json\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Consuming application can walk through ",(0,r.jsx)(n.code,{children:"node_modules"})," looking for ",(0,r.jsx)(n.code,{children:"package.json"})," files with these fields and aggregate the strings together into a single bundle (or multiple bundles) and serve those JSON however it chooses to."]}),"\n",(0,r.jsxs)(n.p,{children:["This provides flexibility to output translations to any location you want as long as it's declared in ",(0,r.jsx)(n.code,{children:"package.json"}),". However, this also incurs additional processing cost at the application level and also encourages inconsistency in output location."]}),"\n",(0,r.jsx)(n.h2,{id:"declaring-with-a-convention",children:"Declaring with a convention"}),"\n",(0,r.jsxs)(n.p,{children:["This is similar to ",(0,r.jsx)(n.a,{href:"#declaring-in-packagejson",children:"Declaring in package.json"}),", except translation is always output to ",(0,r.jsx)(n.code,{children:"lang/{locale}.json"}),". Upstream application can do"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'formatjs compile "node_modules/**/lang/en.json" --ast --out-file lang/en.json\n'})}),"\n",(0,r.jsx)(n.p,{children:"to aggregate all its libraries' pre-translated strings."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"my-lib\n|- src\n|- lang\n    |- en.json\n    |- en-GB.json\n    |- ja.json\n|- node_modules\n    |- library1\n        |- lang\n            |- en.json\n            |- en-GB.json\n            |- ja.json\n    |- library2\n        |- lang\n            |- en.json\n            |- en-GB.json\n            |- ja.json\n"})}),"\n",(0,r.jsx)(n.p,{children:"This provides consistency and minimize processing cost of different manifest files but also is less flexible."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["We've seen ",(0,r.jsx)(n.code,{children:"convention"})," approach working better in large engineering org due to enforcement of convention & structure while ",(0,r.jsx)(n.code,{children:"manifest"})," approach working in a more open environment."]})}),"\n",(0,r.jsxs)(n.h2,{id:"passing-down-intl-object",children:["Passing down ",(0,r.jsx)(n.code,{children:"intl"})," object"]}),"\n",(0,r.jsxs)(n.p,{children:["The core of a i18n application is the ",(0,r.jsx)(n.code,{children:"intl"})," object, which contains precompiled messages, locale settings, format settings and cache. Therefore, this should only be initialized at the top level in the application."]}),"\n",(0,r.jsxs)(n.p,{children:["Component libraries can declare ",(0,r.jsx)(n.code,{children:"intl: IntlShape"})," as a prop and subsequently pass it down directly like:"]}),"\n",(0,r.jsxs)(a.A,{groupId:"engine",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue3",value:"vue"}],children:[(0,r.jsxs)(l.A,{value:"react",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {IntlShape} from 'react-intl'\nimport {MyButton, MyForm} from 'my-components'\ninterface Props {\n  intl: IntlShape\n}\n\nfunction MyFeature(props: Props) {\n  return (\n    <div>\n      <MyButton intl={props.intl} />\n      <MyForm intl={props.intl} />\n    </div>\n  )\n}\n"})}),(0,r.jsxs)(n.p,{children:["or passing down via ",(0,r.jsx)(n.code,{children:"context"})," using ",(0,r.jsx)(n.code,{children:"RawIntlProvider"}),":"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import {IntlShape, RawIntlProvider} from 'react-intl'\nimport {MyButton, MyForm} from 'my-components'\ninterface Props {\n  intl: IntlShape\n}\n\nfunction MyFeature(props: Props) {\n  return (\n    <RawIntlProvider value={props.intl}>\n      <MyButton />\n      <MyForm />\n    </RawIntlProvider>\n  )\n}\n"})})]}),(0,r.jsxs)(l.A,{value:"vue",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {useIntl} from 'vue-intl'\n\nconst MyFeature = {\n  setup() {\n    const intl = useIntl()\n    return () =>\n      h(\n        'p',\n        {},\n        intl.formatMessage({\n          id: 'foo',\n          defaultMessage: 'Hello',\n        })\n      )\n  },\n}\n"})}),(0,r.jsxs)(n.p,{children:["or passing down via ",(0,r.jsx)(n.code,{children:"provideIntl"})]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import {createIntl} from '@formatjs/intl'\nimport {provideIntl, useIntl} from 'vue-intl'\n\nconst Ancestor = {\n  setup() {\n    provideIntl(\n      createIntl({\n        locale: 'en',\n        defaultLocale: 'en',\n        messages: {\n          foo: 'Composed',\n        },\n      })\n    )\n  },\n  render() {\n    return h(MyFeature)\n  },\n}\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},701:(e,n,t)=>{t.d(n,{A:()=>a});t(7378);var i=t(3372);const r={tabItem:"tabItem_kWfR"};var s=t(6106);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:t,children:n})}},4008:(e,n,t)=>{t.d(n,{A:()=>w});var i=t(7378),r=t(3372),s=t(6551),a=t(1654),l=t(1624),o=t(8040),c=t(9369),u=t(4322);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[c,d]=g({queryString:t,groupId:r}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,i.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),b=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(2212);const b={tabList:"tabList_VoPX",tabItem:"tabItem_x220"};var j=t(6106);function v(e){let{className:n,block:t,selectedValue:i,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==i&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{o.push(e)},onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(x,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},1623:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/distribute-libs-6dd93d10e579935a5db51016ef6e7404.svg"},972:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(7378);const r={},s=i.createContext(r);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);