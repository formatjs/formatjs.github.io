"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9001],{1420:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"getting-started/message-distribution","title":"Message Distribution","description":"Now that you\'ve declared your messages, extracted them, sent them to your translation vendor and they have given you back the translated JSON of the same format, it\'s time to talk about how to distribute & consume the translated JSON.","source":"@site/docs/getting-started/message-distribution.md","sourceDirName":"getting-started","slug":"/getting-started/message-distribution","permalink":"/docs/getting-started/message-distribution","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-distribution.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1733624275000,"frontMatter":{"id":"message-distribution","title":"Message Distribution"},"sidebar":"docs","previous":{"title":"Message Extraction","permalink":"/docs/getting-started/message-extraction"},"next":{"title":"Develop with formatjs","permalink":"/docs/guides/develop"}}');var s=t(7557),r=t(2887),l=t(9883),o=t(4706);const i={id:"message-distribution",title:"Message Distribution"},c=void 0,u={},d=[{value:"Compiling Messages",id:"compiling-messages",level:2},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",level:2},{value:"Distribution",id:"distribution",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Now that you've declared your messages, extracted them, sent them to your translation vendor and they have given you back the translated JSON of the same format, it's time to talk about how to distribute & consume the translated JSON."}),"\n",(0,s.jsx)(n.h2,{id:"compiling-messages",children:"Compiling Messages"}),"\n",(0,s.jsxs)(n.p,{children:["Let's take the example from ",(0,s.jsx)(n.a,{href:"/docs/getting-started/message-extraction",children:"Message Extraction"}),", assuming we are working with the French version and the file is called ",(0,s.jsx)(n.code,{children:"lang/fr.json"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "hak27d": {\n    "defaultMessage": "Panneau de configuration",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Supprimer l\'utilisateur {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "nouveau mot de passe",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirmez le mot de passe",\n    "description": "placeholder text"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["We can use ",(0,s.jsx)(n.a,{href:"/docs/tooling/cli",children:"@formatjs/cli"})," to compile this into a react-intl consumable JSON file:"]}),"\n",(0,s.jsxs)(n.p,{children:["Add the following command to your ",(0,s.jsx)(n.code,{children:"package.json"})," ",(0,s.jsx)(n.code,{children:"scripts"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "compile": "formatjs compile"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and execute with ",(0,s.jsx)(n.code,{children:"npm"}),":"]}),"\n","\n",(0,s.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(o.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm run compile -- lang/fr.json --ast --out-file compiled-lang/fr.json\n"})})}),(0,s.jsx)(o.A,{value:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn compile lang/fr.json --ast --out-file compiled-lang/fr.json\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{title:"Parsing messages into AST",type:"info",children:(0,s.jsx)(n.p,{children:"We recommending compiling your messages into AST as it allows us to skip parsing them during runtime. This makes your app more performant."})}),"\n",(0,s.jsx)(n.h2,{id:"translation-management-system-tms-integration",children:"Translation Management System (TMS) Integration"}),"\n",(0,s.jsxs)(n.p,{children:["If your TMS/vendor has a different JSON format you can specify a custom formatter with ",(0,s.jsx)(n.code,{children:"--format <formatFile>"})," that converts that into ",(0,s.jsx)(n.code,{children:"Record<string,string>"})," so ",(0,s.jsx)(n.code,{children:"@formatjs/cli"})," can understand. For example:"]}),"\n",(0,s.jsx)(n.p,{children:"If your vendor accepts the format like"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"you can run"}),"\n",(0,s.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,s.jsx)(o.A,{value:"npm",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"npm run compile -- lang/fr.json --ast --out-file compiled-lang/fr.json --format formatter.js\n"})})}),(0,s.jsx)(o.A,{value:"yarn",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"yarn compile lang/fr.json --ast --out-file compiled-lang/fr.json --format formatter.js\n"})})})]}),"\n",(0,s.jsxs)(n.p,{children:["where ",(0,s.jsx)(n.code,{children:"formatter.js"})," is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"exports.compile = function (msgs) {\n  const results = {}\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = msg.string\n  }\n  return results\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the future we will provide formatters that work with popular TMSes by default."}),"\n",(0,s.jsx)(n.h2,{id:"distribution",children:"Distribution"}),"\n",(0,s.jsxs)(n.p,{children:["While every application has a separate distribution pipeline, the common theme is the ability to map a locale to its translation file. In this example we'll assume your pipeline can understand dynamic ",(0,s.jsx)(n.code,{children:"import"}),":"]}),"\n",(0,s.jsxs)(l.A,{groupId:"engine",defaultValue:"react",values:[{label:"Node",value:"node"},{label:"React",value:"react"},{label:"Vue3",value:"vue"}],children:[(0,s.jsx)(o.A,{value:"node",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import {createIntl, createIntlCache} from '@formatjs/intl'\n\nfunction loadLocaleData(locale: string): Promise<Record<string, string>> {\n  switch (locale) {\n    case 'fr':\n      return import('compiled-lang/fr.json')\n    default:\n      return import('compiled-lang/en.json')\n  }\n}\n\n// A single cache instance can be shared for all locales\nconst intlCache = createIntlCache()\n\nasync function bootstrapApplication(locale) {\n  const messages = await loadLocaleData(locale)\n  const intl = createIntl({locale, messages}, intlCache)\n  // Now the intl object is localized and ready to use\n}\n"})})}),(0,s.jsx)(o.A,{value:"react",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport {IntlProvider} from 'react-intl'\n\nfunction loadLocaleData(locale: string) {\n  switch (locale) {\n    case 'fr':\n      return import('compiled-lang/fr.json')\n    default:\n      return import('compiled-lang/en.json')\n  }\n}\n\nfunction App(props) {\n  return (\n    <IntlProvider\n      locale={props.locale}\n      defaultLocale=\"en\"\n      messages={props.messages}\n    >\n      <MainApp />\n    </IntlProvider>\n  )\n}\n\nasync function bootstrapApplication(locale, mainDiv) {\n  const messages = await loadLocaleData(locale)\n  ReactDOM.render(<App locale={locale} messages={messages} />, mainDiv)\n}\n"})})}),(0,s.jsx)(o.A,{value:"vue",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import VueIntl from 'vue-intl'\nimport {createApp} from 'vue'\n\nfunction loadLocaleData(locale: string) {\n  switch (locale) {\n    case 'fr':\n      return import('compiled-lang/fr.json')\n    default:\n      return import('compiled-lang/en.json')\n  }\n}\n\nasync function bootstrapApplication(locale, mainDiv) {\n  const messages = await loadLocaleData(locale)\n  const app = createApp(App)\n  app.use(VueIntl, {\n    locale: 'en',\n    defaultLocale: 'en',\n    messages,\n  })\n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},4706:(e,n,t)=>{t.d(n,{A:()=>l});t(8225);var a=t(3372);const s={tabItem:"tabItem_L5fe"};var r=t(7557);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,l),hidden:t,children:n})}},9883:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(8225),s=t(3372),r=t(5086),l=t(1654),o=t(2735),i=t(7571),c=t(4928),u=t(6393);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=m(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=h({queryString:t,groupId:s}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),b=(()=>{const e=c??g;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(9213);const b={tabList:"tabList_z0Yg",tabItem:"tabItem_Kbbm"};var j=t(7557);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==a&&(c(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,s.A)("tabs-container",b.tabList),children:[(0,j.jsx)(v,{...n,...e}),(0,j.jsx)(x,{...n,...e})]})}function w(e){const n=(0,f.default)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},2887:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(8225);const s={},r=a.createContext(s);function l(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);