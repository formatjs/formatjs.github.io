(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(n),b=a,d=m["".concat(i,".").concat(b)]||m[b]||p[b]||o;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},117:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},118:function(e,t,n){"use strict";var a=n(0),r=n(119);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},119:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(118),i=n(117),s=n(53),c=n.n(s),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.children,m=e.defaultValue,p=e.values,b=e.groupId,d=e.className,f=Object(o.a)(),g=f.tabGroupChoices,j=f.setTabGroupChoices,O=Object(a.useState)(m),h=O[0],v=O[1];if(null!=b){var y=g[b];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=b&&j(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(s.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},s.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},121:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(116)),i=n(120),s=n(121),c={id:"message-distribution",title:"Message Distribution"},l={unversionedId:"getting-started/message-distribution",id:"getting-started/message-distribution",isDocsHomePage:!1,title:"Message Distribution",description:"Now that you've declared your messages, extracted them, sent them to your translation vendor and they have given you back the translated JSON of the same format, it's time to talk about how to distribute & consume the translated JSON.",source:"@site/docs/getting-started/message-distribution.md",slug:"/getting-started/message-distribution",permalink:"/docs/getting-started/message-distribution",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/getting-started/message-distribution.md",version:"current",sidebar:"docs",previous:{title:"Message Extraction",permalink:"/docs/getting-started/message-extraction"},next:{title:"Develop with formatjs",permalink:"/docs/guides/develop"}},u=[{value:"Compiling Messages",id:"compiling-messages",children:[]},{value:"Translation Management System (TMS) Integration",id:"translation-management-system-tms-integration",children:[]},{value:"Distribution",id:"distribution",children:[]}],m={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Now that you've declared your messages, extracted them, sent them to your translation vendor and they have given you back the translated JSON of the same format, it's time to talk about how to distribute & consume the translated JSON."),Object(o.b)("h2",{id:"compiling-messages"},"Compiling Messages"),Object(o.b)("p",null,"Let's take the example from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started/message-extraction"}),"Message Extraction"),", assuming we are working with the French version and the file is called ",Object(o.b)("inlineCode",{parentName:"p"},"lang/fr.json"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "hak27d": {\n    "defaultMessage": "Panneau de configuration",\n    "description": "title of control panel section"\n  },\n  "haqsd": {\n    "defaultMessage": "Supprimer l\'utilisateur {name}",\n    "description": "delete button"\n  },\n  "19hjs": {\n    "defaultMessage": "nouveau mot de passe",\n    "description": "placeholder text"\n  },\n  "explicit-id": {\n    "defaultMessage": "Confirmez le mot de passe",\n    "description": "placeholder text"\n  }\n}\n')),Object(o.b)("p",null,"We can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/tooling/cli"}),"@formatjs/cli")," to compile this into a react-intl consumable JSON file:"),Object(o.b)("p",null,"Add the following command to your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," ",Object(o.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "scripts": {\n    "compile": "formatjs compile"\n  }\n}\n')),Object(o.b)("p",null,"and execute with ",Object(o.b)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run compile -- lang/fr.json --ast --out-file compiled-lang/fr.json\n"))),Object(o.b)(s.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn compile lang/fr.json --ast --out-file compiled-lang/fr.json\n")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"Parsing messages into AST")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We recommending compiling your messages into AST as it allows us to skip parsing them during runtime. This makes your app more performant."))),Object(o.b)("h2",{id:"translation-management-system-tms-integration"},"Translation Management System (TMS) Integration"),Object(o.b)("p",null,"If your TMS/vendor has a different JSON format you can specify a custom formatter with ",Object(o.b)("inlineCode",{parentName:"p"},"--format <formatFile>")," that converts that into ",Object(o.b)("inlineCode",{parentName:"p"},"Record<string,string>")," so ",Object(o.b)("inlineCode",{parentName:"p"},"@formatjs/cli")," can understand. For example:"),Object(o.b)("p",null,"If your vendor accepts the format like"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "[id]": {\n    "string": "[message]",\n    "comment": "[description]"\n  }\n}\n')),Object(o.b)("p",null,"you can run"),Object(o.b)(i.a,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(s.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm run compile -- lang/fr.json --ast --out-file compiled-lang/fr.json --format formatter.js\n"))),Object(o.b)(s.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn compile lang/fr.json --ast --out-file compiled-lang/fr.json --format formatter.js\n")))),Object(o.b)("p",null,"where ",Object(o.b)("inlineCode",{parentName:"p"},"formatter.js")," is:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"exports.compile = function (msgs) {\n  const results = {}\n  for (const [id, msg] of Object.entries(msgs)) {\n    results[id] = msg.string\n  }\n  return results\n}\n")),Object(o.b)("p",null,"In the future we will provide formatters that work with popular TMSes by default."),Object(o.b)("h2",{id:"distribution"},"Distribution"),Object(o.b)("p",null,"While every application has a separate distribution pipeline, the common theme is the ability to map a locale to its translation file. In this example we'll assume your pipeline can understand dynamic ",Object(o.b)("inlineCode",{parentName:"p"},"import"),":"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In a React application")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport {IntlProvider} from 'react-intl'\n\nfunction loadLocaleData(locale: string) {\n  switch (locale) {\n    case 'fr':\n      return import('compiled-lang/fr.json')\n    default:\n      return import('compiled-lang/en.json')\n  }\n}\n\nfunction App(props) {\n  return (\n    <IntlProvider\n      locale={props.locale}\n      defaultLocale=\"en\"\n      messages={props.messages}\n    >\n      <MainApp />\n    </IntlProvider>\n  )\n}\n\nasync function bootstrapApplication(locale, mainDiv) {\n  const messages = await loadLocaleData(locale)\n  ReactDOM.render(<App locale={locale} messages={messages} />, mainDiv)\n}\n")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"In a non-React application")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"import {createIntl, createIntlCache} from 'react-intl'\n\nfunction loadLocaleData(locale: string): Promise<Record<string, string>> {\n  switch (locale) {\n    case 'fr':\n      return import('compiled-lang/fr.json')\n    default:\n      return import('compiled-lang/en.json')\n  }\n}\n\n// A single cache instance can be shared for all locales\nconst intlCache = createIntlCache()\n\nasync function bootstrapApplication(locale) {\n  const messages = await loadLocaleData(locale)\n  const intl = createIntl({locale, messages}, intlCache)\n  // Now the intl object is localized and ready to use\n}\n")))}p.isMDXComponent=!0}}]);