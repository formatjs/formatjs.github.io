(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=m(n),d=a,u=b["".concat(i,".").concat(d)]||b[d]||p[d]||o;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},123:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},124:function(e,t,n){"use strict";var a=n(0),r=n(125);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},125:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},126:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(124),i=n(123),l=n(55),s=n.n(l);var c=37,m=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,u=Object(o.a)(),g=u.tabGroupChoices,f=u.setTabGroupChoices,j=Object(a.useState)(l),h=j[0],O=j[1],v=a.Children.toArray(e.children),N=[];if(null!=p){var y=g[p];null!=y&&y!==h&&b.some((function(e){return e.value===y}))&&O(y)}var w=function(e){var t=e.target,n=N.indexOf(t),a=v[n].props.value;O(a),null!=p&&(f(p,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s.a.tabItemActive),setTimeout((function(){return t.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case m:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null===(t=n)||void 0===t||t.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},127:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},91:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),o=(n(0),n(122)),i=n(126),l=n(127),s={id:"message-extraction",title:"Message Extraction"},c={unversionedId:"getting-started/message-extraction",id:"getting-started/message-extraction",isDocsHomePage:!1,title:"Message Extraction",description:"Now that you've declared some messages, it's time to extract them.",source:"@site/docs/getting-started/message-extraction.md",slug:"/getting-started/message-extraction",permalink:"/docs/getting-started/message-extraction",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-extraction.md",version:"current",sidebar:"docs",previous:{title:"Message Declaration",permalink:"/docs/getting-started/message-declaration"},next:{title:"Message Distribution",permalink:"/docs/getting-started/message-distribution"}},m=[{value:"Installation",id:"installation",children:[]},{value:"Extraction",id:"extraction",children:[]},{value:"Automatic ID Generation",id:"automatic-id-generation",children:[]},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",children:[]}],b={toc:m};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you've declared some messages, it's time to extract them."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm i -D @formatjs/cli\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @formatjs/cli\n")))),Object(o.b)("h2",{id:"extraction"},"Extraction"),Object(o.b)("p",null,"Add the following command to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(o.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "extract": "formatjs extract"\n  }\n}\n')),Object(o.b)("p",null,"and execute with ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run extract -- 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn extract 'src/**/*.ts*' --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]'\n")))),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"ID Interpolation Pattern")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Make sure this pattern matches ",Object(o.b)("inlineCode",{parentName:"p"},"idInterpolationPattern")," when you use ",Object(o.b)("inlineCode",{parentName:"p"},"babel-plugin-formatjs")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/ts-transformer")," in ",Object(o.b)("a",{parentName:"p",href:"https://formatjs.io/docs/guides/bundler-plugins"},"Bundling with formatjs")," or you'll get a ",Object(o.b)("inlineCode",{parentName:"p"},"MISSING_TRANSLATION")," error."))),Object(o.b)("p",null,"Given a file that has the following messages:"),Object(o.b)(i.a,{groupId:"engine",defaultValue:"react",values:[{label:"React",value:"react"},{label:"Vue3",value:"vue"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"react",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react'\nimport {FormattedMessage, useIntl, injectIntl} from 'react-intl'\n\nclass PasswordChangeWithIntl extends React.Component {\n  render() {\n    const {intl} = this.props\n    return (\n      <li>\n        <input\n          placeholder={intl.formatMessage({\n            defaultMessage: 'New Password',\n            description: 'placeholder text',\n          })}\n        />\n        <input\n          placeholder={intl.formatMessage({\n            id: 'explicit-id',\n            defaultMessage: 'Confirm Password',\n            description: 'placeholder text',\n          })}\n        />\n      </li>\n    )\n  }\n}\n\nconst PasswordChange = injectIntl(PasswordChangeWithIntl)\n\nexport function List(props) {\n  const intl = useIntl()\n  return (\n    <section>\n      <header>\n        <FormattedMessage\n          defaultMessage=\"Control Panel\"\n          description=\"title of control panel section\"\n        />\n      </header>\n      <ul>\n        <li>\n          <button>\n            <FormattedMessage\n              defaultMessage=\"Delete user {name}\"\n              description=\"Delete button\"\n              values={{\n                name: props.name,\n              }}\n            />\n          </button>\n        </li>\n        <PasswordChange />\n      </ul>\n    </section>\n  )\n}\n"))),Object(o.b)(l.a,{value:"vue",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-vue"},"<template>\n  <section>\n    <header>\n      {{\n        $formatMessage({\n          defaultMessage: 'Control Panel',\n          description: 'title of control panel section',\n        })\n      }}\n    </header>\n    <ul>\n      <li>\n        <button>\n          {{\n            $formatMessage(\n              {\n                defaultMessage: 'Delete user {name}',\n                description: 'Delete button',\n              },\n              {\n                name: props.name,\n              }\n            )\n          }}\n        </button>\n      </li>\n      <li>\n        <input :placeholder=\"newPwdPlaceholder\" />\n        <input :placeholder=\"confirmPwdPlaceholder\" />\n      </li>\n    </ul>\n  </section>\n</template>\n\n<script>\nexport default {\n  inject: ['intl'],\n  props: ['name'],\n  data() {\n    return {\n      name: this.name,\n      newPwdPlaceholder: intl.formatMessage({\n        defaultMessage: 'New Password',\n        description: 'placeholder text',\n      }),\n      confirmPwdPlaceholder: intl.formatMessage({\n        id: 'explicit-id',\n        defaultMessage: 'Confirm Password',\n        description: 'placeholder text',\n      }),\n    }\n  },\n}\n<\/script>\n")))),Object(o.b)("p",null,"running the above command will create a file called ",Object(o.b)("inlineCode",{parentName:"p"},"lang/en.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "hak27d": {\n    "defaultMessage": "Control Panel",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Delete user {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "New Password",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirm Password",\n    "description": "placeholder text"\n  }\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Message ID")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"During extraction, we'll preserve explicit declared IDs and insert a hash as an ID for messages without. We recommend against explicit IDs since it can cause collision."))),Object(o.b)("h2",{id:"automatic-id-generation"},"Automatic ID Generation"),Object(o.b)("p",null,"Since manual IDs are discouraged, we've provided a ",Object(o.b)("inlineCode",{parentName:"p"},"babel")," plugin and a ",Object(o.b)("inlineCode",{parentName:"p"},"TypeScript")," AST transformer that will automatically insert message IDs in your transpiled code. For more details please visit ",Object(o.b)("a",{parentName:"p",href:"https://formatjs.io/docs/guides/bundler-plugins"},"Bundling with formatjs"),"."),Object(o.b)("h2",{id:"translation-management-system-tms-integration"},"Translation Management System (TMS) Integration"),Object(o.b)("p",null,"The default format generated from ",Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/cli")," might not work with the specific TMS/vendor you're working with. You can specify a custom formatter with ",Object(o.b)("inlineCode",{parentName:"p"},"--format <formatFile>")," that allows you to convert that format into something tailored to your TMS. For example:"),Object(o.b)("p",null,"If your vendor accepts the format like"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n')),Object(o.b)("p",null,"you can run"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(l.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"npm run extract -- \"src/**/*.{ts,tsx,vue}\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n"))),Object(o.b)(l.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-sh"},"yarn extract \"src/**/*.{ts,tsx,vue}\" --out-file lang/en.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format formatter.js\n")))),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"formatter.js")," is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"exports.format = function (msgs) {\n  const results = {}\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = {\n      string: msg.defaultMessage,\n      comment: msg.description,\n    }\n  }\n  return results\n}\n")),Object(o.b)("p",null,"We also provide several ",Object(o.b)("a",{parentName:"p",href:"/docs/tooling/cli#builtin-formatters"},"builtin formatters")," to integrate with 3rd party TMSes so feel free to create PRs to add more."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:null},"TMS"),Object(o.b)("th",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"th"},"--format")))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://docs.transifex.com/formats/json/structured-json"},"Transifex's Structured JSON")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"transifex"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON"},"Smartling ICU JSON")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"smartling"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://lingohub.com/developers/resource-files/json-localization/"},"Lingohub")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://help.phrase.com/help/simple-json"},"Phrase")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"simple"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://support.crowdin.com/file-formats/chrome-json/"},"Crowdin Chrome JSON")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"crowdin"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://docs.lokalise.com/en/articles/3229161-structured-json"},"Lokalise Structured JSON")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"lokalise"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("a",{parentName:"td",href:"https://simplelocalize.io/docs/file-formats/simplelocalize-json/"},"SimpleLocalize JSON")),Object(o.b)("td",{parentName:"tr",align:null},Object(o.b)("inlineCode",{parentName:"td"},"simple"))))))}p.isMDXComponent=!0}}]);