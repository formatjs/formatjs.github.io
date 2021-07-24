(self.webpackChunk=self.webpackChunk||[]).push([[5266],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(a),g=i,h=c["".concat(l,".").concat(g)]||c[g]||m[g]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5663:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>d,toc:()=>p,default:()=>c});var n=a(2122),i=a(9756),o=(a(7294),a(3905)),r=["components"],s={id:"upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)"},l=void 0,d={unversionedId:"react-intl/upgrade-guide-2x",id:"react-intl/upgrade-guide-2x",isDocsHomePage:!1,title:"Upgrade Guide (v1 -> v2)",description:"Use React 0.14 or 15",source:"@site/docs/react-intl/upgrade-guide-2.x.md",sourceDirName:"react-intl",slug:"/react-intl/upgrade-guide-2x",permalink:"/docs/react-intl/upgrade-guide-2x",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-2.x.md",version:"current",frontMatter:{id:"upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)"},sidebar:"api",previous:{title:"Upgrade Guide (v2 -> v3)",permalink:"/docs/react-intl/upgrade-guide-3x"},next:{title:"Core FormatJS Intl",permalink:"/docs/intl"}},p=[{value:"Use React 0.14 or 15",id:"use-react-014-or-15",children:[]},{value:"Update How Locale Data is Added",id:"update-how-locale-data-is-added",children:[{value:"Add Call to <code>addLocaleData()</code> in Browser",id:"add-call-to-addlocaledata-in-browser",children:[]}]},{value:"Remove Intl Mixin",id:"remove-intl-mixin",children:[{value:"Update to <code>IntlProvider</code>",id:"update-to-intlprovider",children:[]},{value:"Update to <code>injectIntl()</code>",id:"update-to-injectintl",children:[]}]},{value:"Change How Messages are Formatted",id:"change-how-messages-are-formatted",children:[{value:"Flatten <code>messages</code> Object",id:"flatten-messages-object",children:[]},{value:"Replace <code>getIntlMessage()</code> Calls with Message Descriptors",id:"replace-getintlmessage-calls-with-message-descriptors",children:[]},{value:"Update <code>formatMessage()</code> Calls",id:"update-formatmessage-calls",children:[]},{value:"Update <code>FormattedMessage</code> and <code>FormattedHTMLMessage</code> Instances",id:"update-formattedmessage-and-formattedhtmlmessage-instances",children:[]}]},{value:"Update How Relative Times are Formatted",id:"update-how-relative-times-are-formatted",children:[{value:"Rename <code>FormattedRelative</code>&#39;s <code>now</code> Prop to <code>initialNow</code>",id:"rename-formattedrelatives-now-prop-to-initialnow",children:[]},{value:"Merge <code>formatRelative()</code>&#39;s Second and Third Arguments",id:"merge-formatrelatives-second-and-third-arguments",children:[]}]}],m={toc:p};function c(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"use-react-014-or-15"},"Use React 0.14 or 15"),(0,o.kt)("p",null,"React Intl v2 has a peer dependency on ",(0,o.kt)("inlineCode",{parentName:"p"},"react@^0.14.0 || ^15.0.0-0")," and now takes advantage of features and changes in React 0.14 and also works with React 15."),(0,o.kt)("h2",{id:"update-how-locale-data-is-added"},"Update How Locale Data is Added"),(0,o.kt)("p",null,"The locale data modules in React Intl v2 have been refactored to ",(0,o.kt)("em",{parentName:"p"},"provide")," data, instead of mutating React Intl's internal locale data registry. The ",(0,o.kt)("inlineCode",{parentName:"p"},"react-intl/locale-data/*")," files are also decoupled from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactIntl")," global and instead provide UMD modules with a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ReactIntlLocaleData")," global. These changes, mean apps need update how they are registering the locale data they need in the browser."),(0,o.kt)("h3",{id:"add-call-to-addlocaledata-in-browser"},"Add Call to ",(0,o.kt)("inlineCode",{parentName:"h3"},"addLocaleData()")," in Browser"),(0,o.kt)("p",null,"There is now an ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#addlocaledata"},(0,o.kt)("inlineCode",{parentName:"a"},"addLocaleData()"))," function that needs to be called with the locale data that has been loaded. You can do the following in your main client JavaScript entry point:"),(0,o.kt)("p",null,"This assumes a locale data ",(0,o.kt)("inlineCode",{parentName:"p"},"<script>")," is added based on the request; e.g., for French speaking users:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="react-intl/locale-data/fr.js"><\/script>\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using ",(0,o.kt)("inlineCode",{parentName:"strong"},'<script src="react-intl/dist/react-intl.js>'),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"if ('ReactIntl' in window && 'ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    ReactIntl.addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Browserify/Webpack to Load React Intl:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {addLocaleData} from 'react-intl'\n\nif ('ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n")),(0,o.kt)("p",null,"::info\nThis decoupling of the library from the locale data, allows for the files to be loaded via ",(0,o.kt)("inlineCode",{parentName:"p"},"<script async>"),". When using async scripts, your client bootstrapping code will need to wait for the ",(0,o.kt)("inlineCode",{parentName:"p"},"load")," event, including the code above.\n:::"),(0,o.kt)("h2",{id:"remove-intl-mixin"},"Remove Intl Mixin"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The ",(0,o.kt)("inlineCode",{parentName:"strong"},"IntlMixin")," has been removed from React Intl v2.")," The mixin did two things: it automatically propagated ",(0,o.kt)("inlineCode",{parentName:"p"},"locales"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"formats"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," throughout an app's hierarchy, and it provided an imperative API via ",(0,o.kt)("inlineCode",{parentName:"p"},"format*()")," functions. These jobs are now handled by ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"<IntlProvider>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#injection-api"},(0,o.kt)("inlineCode",{parentName:"a"},"injectIntl()")),", respectively:"),(0,o.kt)("h3",{id:"update-to-intlprovider"},"Update to ",(0,o.kt)("inlineCode",{parentName:"h3"},"IntlProvider")),(0,o.kt)("p",null,"In React Intl v1, you would add the ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," to your root component; e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"<App>"),". Remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," and instead wrap your root component with ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"<IntlProvider>")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import ReactDOM from 'react-dom'\nimport {IntlProvider} from 'react-intl'\n\nReactDOM.render(\n  <IntlProvider locale=\"en\">\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," prop is ",(0,o.kt)("strong",{parentName:"p"},"singular"),", required, and only accepts a string value. This is a simplification of the plural ",(0,o.kt)("inlineCode",{parentName:"p"},"locales")," prop used by the ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin"),"."))),(0,o.kt)("h3",{id:"update-to-injectintl"},"Update to ",(0,o.kt)("inlineCode",{parentName:"h3"},"injectIntl()")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," also provided the imperative API for custom components to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"format*()")," methods; e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"formatDate()")," to get formatted strings for using in places like ",(0,o.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"aria")," attribute. Remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," and instead use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},(0,o.kt)("inlineCode",{parentName:"a"},"injectIntl()"))," Hight Order Component (HOC) factory function to inject the imperative API via ",(0,o.kt)("inlineCode",{parentName:"p"},"props"),"."),(0,o.kt)("p",null,"Here's an example of a custom ",(0,o.kt)("inlineCode",{parentName:"p"},"<RelativeTime>")," stateless component which uses ",(0,o.kt)("inlineCode",{parentName:"p"},"injectIntl()")," and the imperative ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#formatdate"},(0,o.kt)("inlineCode",{parentName:"a"},"formatDate()"))," API:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport {injectIntl, FormattedRelative} from 'react-intl'\n\nconst to2Digits = num => `${num < 10 ? `0${num}` : num}`\n\nconst RelativeTime = ({date, intl}) => {\n  date = new Date(date)\n\n  let year = date.getFullYear()\n  let month = date.getMonth() + 1\n  let day = date.getDate()\n\n  let formattedDate = intl.formatDate(date, {\n    year: 'long',\n    month: 'numeric',\n    day: 'numeric',\n  })\n\n  return (\n    <time\n      dateTime={`${year}-${to2Digits(month)}-${to2Digits(day)}`}\n      title={formattedDate}\n    >\n      <FormattedRelative value={date} />\n    </time>\n  )\n}\n\nexport default injectIntl(RelativeTime)\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"injectIntl()")," is similar to a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," HOC factory function you might find in a Flux framework to connect a component to a store."),(0,o.kt)("h2",{id:"change-how-messages-are-formatted"},"Change How Messages are Formatted"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The way string messages are formatted in React Intl v2 has changed significantly!")," This is the most disruptive set of change when upgrading from v1 to v2; but it enables many great new features."),(0,o.kt)("p",null,"React Intl v2 introduces a new ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#message-descriptor"},(0,o.kt)("strong",{parentName:"a"},"Message Descriptor"))," concept which can be used to define an app's default string messages. A Message Descriptor is an object with the following properties, ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," is the only required prop:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"id")),": A unique, stable identifier for the message"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"description")),": Context for the translator about how it's used in the UI"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"defaultMessage")),": The default message (probably in English)")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This upgrade guide will focus on using Message Descriptors that only contain an ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," property."))),(0,o.kt)("h3",{id:"flatten-messages-object"},"Flatten ",(0,o.kt)("inlineCode",{parentName:"h3"},"messages")," Object"),(0,o.kt)("p",null,"React Intl v2 no longer supports nested ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," objects, instead the collection of translated string messages passed to ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"<IntlProvider>"))," must be flat. This is an explicit design choice which simplifies while increasing flexibility. React Intl v2 does not apply any special semantics to strings with dots; e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},'"namespaced.string_id"'),"."),(0,o.kt)("p",null,"Apps using a nested ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," object structure could use the following function to flatten their object according to React Intl v1's semantics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function flattenMessages(nestedMessages, prefix = '') {\n  return Object.keys(nestedMessages).reduce((messages, key) => {\n    let value = nestedMessages[key]\n    let prefixedKey = prefix ? `${prefix}.${key}` : key\n\n    if (typeof value === 'string') {\n      messages[prefixedKey] = value\n    } else {\n      Object.assign(messages, flattenMessages(value, prefixedKey))\n    }\n\n    return messages\n  }, {})\n}\n\nlet messages = flattenMessages(nestedMessages)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Message ids can still contain ",(0,o.kt)("inlineCode",{parentName:"p"},'"."'),"s, so the ids themselves remain the same, it's only the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," object structure that needs to change."))),(0,o.kt)("h3",{id:"replace-getintlmessage-calls-with-message-descriptors"},"Replace ",(0,o.kt)("inlineCode",{parentName:"h3"},"getIntlMessage()")," Calls with Message Descriptors"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"getIntlMessage()")," method that was provided by the ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," has been removed in React Intl v2. It was simply a helper that interpreted a message id string with ",(0,o.kt)("inlineCode",{parentName:"p"},'"."'),"s by looking up the translated message in a nested ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," object. With the removal of ",(0,o.kt)("inlineCode",{parentName:"p"},"IntlMixin")," and the change to a flat ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," object, this method has been removed."),(0,o.kt)("p",null,"All calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"getIntlMessage()")," need to be replaced with a Message Descriptor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Replace:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"this.getIntlMessage('some.message.id')\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"{\n  id: 'some.message.id'\n}\n")),(0,o.kt)("h3",{id:"update-formatmessage-calls"},"Update ",(0,o.kt)("inlineCode",{parentName:"h3"},"formatMessage()")," Calls"),(0,o.kt)("p",null,"A typical pattern when calling ",(0,o.kt)("inlineCode",{parentName:"p"},"formatMessage()")," is to nest a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"getIntlMessage()"),". These can be easily updated:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let message = this.formatMessage(this.getIntlMessage('some.message.id'), values)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let message = this.props.intl.formatMessage({id: 'some.message.id'}, values)\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In React Intl v2, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#formatmessage"},(0,o.kt)("inlineCode",{parentName:"a"},"formatMessage()"))," function is injected via ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},(0,o.kt)("inlineCode",{parentName:"a"},"injectIntl()")),"."))),(0,o.kt)("h3",{id:"update-formattedmessage-and-formattedhtmlmessage-instances"},"Update ",(0,o.kt)("inlineCode",{parentName:"h3"},"FormattedMessage")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"FormattedHTMLMessage")," Instances"),(0,o.kt)("p",null,"The props for these two components have completely changed in React Intl v2. Instead of taking a ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," prop and treating all other props as values to fill in placeholders in a message, ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#formattedmessage"},(0,o.kt)("inlineCode",{parentName:"a"},"<FormattedMessage>"))," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#formattedhtmlmessage"},(0,o.kt)("inlineCode",{parentName:"a"},"<FormattedHTMLMessage>"))," now the same props as a Message Descriptor plus a new ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," prop."),(0,o.kt)("p",null,"The new ",(0,o.kt)("inlineCode",{parentName:"p"},"values")," prop groups all of the message's placeholder values together into an object."),(0,o.kt)("p",null,"The following example shows up to update a ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormattedMessage>")," instance to use the new props and remove the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"getIntlMessage()"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<FormattedMessage message={this.getIntlMessage('greeting')} name=\"Eric\" />\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<FormattedMessage id=\"greeting\" values={{name: 'Eric'}} />\n")),(0,o.kt)("h2",{id:"update-how-relative-times-are-formatted"},"Update How Relative Times are Formatted"),(0,o.kt)("p",null,'Minor changes have been made to how the "now" reference time is specified when formatting relative times in React Intl v2. It\'s uncommon to specify this value outside of test code, so it might not exist in your app.'),(0,o.kt)("h3",{id:"rename-formattedrelatives-now-prop-to-initialnow"},"Rename ",(0,o.kt)("inlineCode",{parentName:"h3"},"FormattedRelative"),"'s ",(0,o.kt)("inlineCode",{parentName:"h3"},"now")," Prop to ",(0,o.kt)("inlineCode",{parentName:"h3"},"initialNow")),(0,o.kt)("p",null,"A new feature has been added to ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#formattedrelative"},(0,o.kt)("inlineCode",{parentName:"a"},"<FormattedRelative>")),' instances in React Intl v2, they now "tick" and stay up to date. Since time moves forward, it was confusing to have a prop named ',(0,o.kt)("inlineCode",{parentName:"p"},"now"),", so it has been renamed to ",(0,o.kt)("inlineCode",{parentName:"p"},"initialNow"),". Any ",(0,o.kt)("inlineCode",{parentName:"p"},"<FormattedRelative>")," instances that use ",(0,o.kt)("inlineCode",{parentName:"p"},"now")," should update to prop name to ",(0,o.kt)("inlineCode",{parentName:"p"},"initialNow"),":"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<FormattedRelative value={date} now={otherDate} />\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<FormattedRelative value={date} initialNow={otherDate} />\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},(0,o.kt)("inlineCode",{parentName:"a"},"<IntlProvider>"))," component also has a ",(0,o.kt)("inlineCode",{parentName:"p"},"initialNow"),' prop which can be assigned a value to stabilize the "now" reference time for ',(0,o.kt)("em",{parentName:"p"},"all")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/components#formattedrelative"},(0,o.kt)("inlineCode",{parentName:"a"},"<FormattedRelative>"))," instances. This is useful for universal/isomorphic apps to proper React checksums between the server and client initial render."))),(0,o.kt)("h3",{id:"merge-formatrelatives-second-and-third-arguments"},"Merge ",(0,o.kt)("inlineCode",{parentName:"h3"},"formatRelative()"),"'s Second and Third Arguments"),(0,o.kt)("p",null,"The signature of the ",(0,o.kt)("inlineCode",{parentName:"p"},"formatRelative()")," function has been aligned with the other ",(0,o.kt)("inlineCode",{parentName:"p"},"format*()")," functions and in React Intl v2, it only accepts two arguments: ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"options"),'. To specify a "now" reference time, add it to the ',(0,o.kt)("inlineCode",{parentName:"p"},"options")," argument, and remove the third ",(0,o.kt)("inlineCode",{parentName:"p"},"formatOptions")," argument:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let relative = this.formatRelative(date, {units: 'hour'}, {now: otherDate})\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.0:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"let relative = this.props.intl.formatRelative(date, {\n  units: 'hour',\n  now: otherDate,\n})\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In React Intl v2, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#formatrelative"},(0,o.kt)("inlineCode",{parentName:"a"},"formatRelative()"))," function is injected via ",(0,o.kt)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},(0,o.kt)("inlineCode",{parentName:"a"},"injectIntl()")),"."))))}c.isMDXComponent=!0}}]);