"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8848],{1889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"getting-started/message-extraction","title":"Message Extraction","description":"Now that you\'ve declared some messages, it\'s time to extract them.","source":"@site/docs/getting-started/message-extraction.md","sourceDirName":"getting-started","slug":"/getting-started/message-extraction","permalink":"/docs/getting-started/message-extraction","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-extraction.md","tags":[],"version":"current","lastUpdatedBy":"renovate[bot]","lastUpdatedAt":1737387451000,"frontMatter":{"id":"message-extraction","title":"Message Extraction"},"sidebar":"docs","previous":{"title":"Message Declaration","permalink":"/docs/getting-started/message-declaration"},"next":{"title":"Message Distribution","permalink":"/docs/getting-started/message-distribution"}}');var r=t(6106),a=t(5809),l=t(9911),i=t(6423);const o={id:"message-extraction",title:"Message Extraction"},c=void 0,d={},u=[{value:"Installation",id:"installation",level:2},{value:"Extraction",id:"extraction",level:2},{value:"Automatic ID Generation",id:"automatic-id-generation",level:2},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Now that you've declared some messages, it's time to extract them."}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm i -D @formatjs/cli\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn add -D @formatjs/cli\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"extraction",children:"Extraction"}),"\n",(0,r.jsxs)(n.p,{children:["Add the following command to your ",(0,r.jsx)(n.code,{children:"package.json"})," ",(0,r.jsx)(n.code,{children:"scripts"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "extract": "formatjs extract"\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["and execute with ",(0,r.jsx)(n.code,{children:"npm"}),":"]}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm run extract -- 'src/**/*.ts*' --ignore='**/*.d.ts' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn extract 'src/**/*.ts*' --ignore='**/*.d.ts' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n"})})})]}),"\n",(0,r.jsx)(n.admonition,{title:"ID Interpolation Pattern",type:"caution",children:(0,r.jsxs)(n.p,{children:["Make sure this pattern matches ",(0,r.jsx)(n.code,{children:"idInterpolationPattern"})," when you use ",(0,r.jsx)(n.code,{children:"babel-plugin-formatjs"})," or ",(0,r.jsx)(n.code,{children:"@formatjs/ts-transformer"})," in ",(0,r.jsx)(n.a,{href:"https://formatjs.github.io/docs/guides/bundler-plugins",children:"Bundling with formatjs"})," or you'll get a ",(0,r.jsx)(n.code,{children:"MISSING_TRANSLATION"})," error."]})}),"\n",(0,r.jsx)(n.p,{children:"Given a file that has the following messages:"}),"\n",(0,r.jsxs)(l.A,{groupId:"engine",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue3",value:"vue"}],children:[(0,r.jsx)(i.A,{value:"react",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import * as React from 'react'\nimport {FormattedMessage, useIntl, injectIntl} from 'react-intl'\n\nclass PasswordChangeWithIntl extends React.Component {\n  render() {\n    const {intl} = this.props\n    return (\n      <li>\n        <input\n          placeholder={intl.formatMessage({\n            defaultMessage: 'New Password',\n            description: 'placeholder text',\n          })}\n        />\n        <input\n          placeholder={intl.formatMessage({\n            id: 'explicit-id',\n            defaultMessage: 'Confirm Password',\n            description: 'placeholder text',\n          })}\n        />\n      </li>\n    )\n  }\n}\n\nconst PasswordChange = injectIntl(PasswordChangeWithIntl)\n\nexport function List(props) {\n  const intl = useIntl()\n  return (\n    <section>\n      <header>\n        <FormattedMessage\n          defaultMessage=\"Control Panel\"\n          description=\"title of control panel section\"\n        />\n      </header>\n      <ul>\n        <li>\n          <button>\n            <FormattedMessage\n              defaultMessage=\"Delete user {name}\"\n              description=\"Delete button\"\n              values={{\n                name: props.name,\n              }}\n            />\n          </button>\n        </li>\n        <PasswordChange />\n      </ul>\n    </section>\n  )\n}\n"})})}),(0,r.jsx)(i.A,{value:"vue",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-vue",children:"<template>\n  <section>\n    <header>\n      {{\n        $formatMessage({\n          defaultMessage: 'Control Panel',\n          description: 'title of control panel section',\n        })\n      }}\n    </header>\n    <ul>\n      <li>\n        <button>\n          {{\n            $formatMessage(\n              {\n                defaultMessage: 'Delete user {name}',\n                description: 'Delete button',\n              },\n              {\n                name: props.name,\n              }\n            )\n          }}\n        </button>\n      </li>\n      <li>\n        <input :placeholder=\"newPwdPlaceholder\" />\n        <input :placeholder=\"confirmPwdPlaceholder\" />\n      </li>\n    </ul>\n  </section>\n</template>\n\n<script>\nexport default {\n  inject: ['intl'],\n  props: ['name'],\n  data() {\n    return {\n      name: this.name,\n      newPwdPlaceholder: intl.formatMessage({\n        defaultMessage: 'New Password',\n        description: 'placeholder text',\n      }),\n      confirmPwdPlaceholder: intl.formatMessage({\n        id: 'explicit-id',\n        defaultMessage: 'Confirm Password',\n        description: 'placeholder text',\n      }),\n    }\n  },\n}\n<\/script>\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["running the above command will create a file called ",(0,r.jsx)(n.code,{children:"lang/en.json"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "hak27d": {\n    "defaultMessage": "Control Panel",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Delete user {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "New Password",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirm Password",\n    "description": "placeholder text"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"Message ID",type:"info",children:(0,r.jsx)(n.p,{children:"During extraction, we'll preserve explicit declared IDs and insert a hash as an ID for messages without. We recommend against explicit IDs since it can cause collision."})}),"\n",(0,r.jsx)(n.h2,{id:"automatic-id-generation",children:"Automatic ID Generation"}),"\n",(0,r.jsxs)(n.p,{children:["Since manual IDs are discouraged, we've provided a ",(0,r.jsx)(n.code,{children:"babel"})," plugin and a ",(0,r.jsx)(n.code,{children:"TypeScript"})," AST transformer that will automatically insert message IDs in your transpiled code. For more details please visit ",(0,r.jsx)(n.a,{href:"https://formatjs.github.io/docs/guides/bundler-plugins",children:"Bundling with formatjs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"translation-management-system-tms-integration",children:"Translation Management System (TMS) Integration"}),"\n",(0,r.jsxs)(n.p,{children:["The default format generated from ",(0,r.jsx)(n.code,{children:"@formatjs/cli"})," might not work with the specific TMS/vendor you're working with. You can specify a custom formatter with ",(0,r.jsx)(n.code,{children:"--format <formatFile>"})," that allows you to convert that format into something tailored to your TMS. For example:"]}),"\n",(0,r.jsx)(n.p,{children:"If your vendor accepts the format like"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"you can run"}),"\n",(0,r.jsxs)(l.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,r.jsx)(i.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm run extract -- \"src/**/*.{ts,tsx,vue}\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n"})})}),(0,r.jsx)(i.A,{value:"yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn extract \"src/**/*.{ts,tsx,vue}\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"formatter.js"})," is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"exports.format = function (msgs) {\n  const results = {}\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = {\n      string: msg.defaultMessage,\n      comment: msg.description,\n    }\n  }\n  return results\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["We also provide several ",(0,r.jsx)(n.a,{href:"/docs/tooling/cli#builtin-formatters",children:"builtin formatters"})," to integrate with 3rd party TMSes so feel free to create PRs to add more."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"TMS"}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"--format"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://www.codeandweb.com/babeledit/format-js",children:"BabelEdit"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://support.crowdin.com/file-formats/chrome-json/",children:"Crowdin Chrome JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"crowdin"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://lingohub.com/developers/resource-files/json-localization/",children:"Lingohub"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://developers.localizejs.com/docs/simple-json-import-export",children:"Localize's Simple JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://localizely.com/flat-json-file/?tab=react-intl",children:"Localizely"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://docs.locize.com/integration/supported-formats#json-nested",children:"locize"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://docs.lokalise.com/en/articles/3229161-structured-json",children:"Lokalise Structured JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lokalise"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://support.phrase.com/hc/en-us/articles/6111390065948--JSON-React-Intl-Simple-Strings-",children:"Phrase Strings"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://poeditor.com/localization/files/key-value-json",children:"POEditor Key-Value JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://simplelocalize.io/docs/file-formats/simplelocalize-json/",children:"SimpleLocalize JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"simple"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON",children:"Smartling ICU JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"smartling"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://docs.transifex.com/formats/json/structured-json",children:"Transifex's Structured JSON"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"transifex"})})]})]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},6423:(e,n,t)=>{t.d(n,{A:()=>l});t(7378);var s=t(3372);const r={tabItem:"tabItem_vxlI"};var a=t(6106);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(r.tabItem,l),hidden:t,children:n})}},9911:(e,n,t)=>{t.d(n,{A:()=>y});var s=t(7378),r=t(3372),a=t(7864),l=t(1654),i=t(5034),o=t(1717),c=t(4506),d=t(6982);function u(e){var n,t;return null!=(n=null==(t=s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=null!=n?n:function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.W6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace(Object.assign({},r.location,{search:n.toString()}))}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=h(e),[l,o]=(0,s.useState)((()=>function(e){var n;let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+s.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=s.find((e=>e.default)))?n:s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,u]=p({queryString:t,groupId:r}),[x,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,a]=(0,d.Dv)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),f=(()=>{const e=null!=c?c:x;return m({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error("Can't select invalid tab value="+e);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(642);const f={tabList:"tabList_h3K6",tabItem:"tabItem_EuYH"};var g=t(6106);function b(e){let{className:n,block:t,selectedValue:s,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==s&&(c(n),l(r))},u=e=>{var n;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var s;const n=o.indexOf(e.currentTarget)+1;t=null!=(s=o[n])?s:o[0];break}case"ArrowLeft":{var r;const n=o.indexOf(e.currentTarget)-1;t=null!=(r=o[n])?r:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>{o.push(e)},onKeyDown:u,onClick:d},a,{className:(0,r.A)("tabs__item",f.tabItem,null==a?void 0:a.className,{"tabs__item--active":s===n}),children:null!=t?t:n}),n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,g.jsx)(b,Object.assign({},n,e)),(0,g.jsx)(v,Object.assign({},n,e))]})}function y(e){const n=(0,j.default)();return(0,g.jsx)(w,Object.assign({},e,{children:u(e.children)}),String(n))}},5809:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var s=t(7378);const r={},a=s.createContext(r);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);