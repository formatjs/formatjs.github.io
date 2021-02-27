(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),o=(a(38),a(124)),r={id:"upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)"},s={unversionedId:"react-intl/upgrade-guide-2x",id:"react-intl/upgrade-guide-2x",isDocsHomePage:!1,title:"Upgrade Guide (v1 -> v2)",description:"Use React 0.14 or 15",source:"@site/docs/react-intl/upgrade-guide-2.x.md",slug:"/react-intl/upgrade-guide-2x",permalink:"/docs/react-intl/upgrade-guide-2x",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-2.x.md",version:"current",sidebar:"api",previous:{title:"Upgrade Guide (v2 -> v3)",permalink:"/docs/react-intl/upgrade-guide-3x"},next:{title:"Core FormatJS Intl",permalink:"/docs/intl"}},c=[{value:"Use React 0.14 or 15",id:"use-react-014-or-15",children:[]},{value:"Update How Locale Data is Added",id:"update-how-locale-data-is-added",children:[{value:"Add Call to <code>addLocaleData()</code> in Browser",id:"add-call-to-addlocaledata-in-browser",children:[]}]},{value:"Remove Intl Mixin",id:"remove-intl-mixin",children:[{value:"Update to <code>IntlProvider</code>",id:"update-to-intlprovider",children:[]},{value:"Update to <code>injectIntl()</code>",id:"update-to-injectintl",children:[]}]},{value:"Change How Messages are Formatted",id:"change-how-messages-are-formatted",children:[{value:"Flatten <code>messages</code> Object",id:"flatten-messages-object",children:[]},{value:"Replace <code>getIntlMessage()</code> Calls with Message Descriptors",id:"replace-getintlmessage-calls-with-message-descriptors",children:[]},{value:"Update <code>formatMessage()</code> Calls",id:"update-formatmessage-calls",children:[]},{value:"Update <code>FormattedMessage</code> and <code>FormattedHTMLMessage</code> Instances",id:"update-formattedmessage-and-formattedhtmlmessage-instances",children:[]}]},{value:"Update How Relative Times are Formatted",id:"update-how-relative-times-are-formatted",children:[{value:"Rename <code>FormattedRelative</code>&#39;s <code>now</code> Prop to <code>initialNow</code>",id:"rename-formattedrelatives-now-prop-to-initialnow",children:[]},{value:"Merge <code>formatRelative()</code>&#39;s Second and Third Arguments",id:"merge-formatrelatives-second-and-third-arguments",children:[]}]}],l={toc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"use-react-014-or-15"},"Use React 0.14 or 15"),Object(o.b)("p",null,"React Intl v2 has a peer dependency on ",Object(o.b)("inlineCode",{parentName:"p"},"react@^0.14.0 || ^15.0.0-0")," and now takes advantage of features and changes in React 0.14 and also works with React 15."),Object(o.b)("h2",{id:"update-how-locale-data-is-added"},"Update How Locale Data is Added"),Object(o.b)("p",null,"The locale data modules in React Intl v2 have been refactored to ",Object(o.b)("em",{parentName:"p"},"provide")," data, instead of mutating React Intl's internal locale data registry. The ",Object(o.b)("inlineCode",{parentName:"p"},"react-intl/locale-data/*")," files are also decoupled from the ",Object(o.b)("inlineCode",{parentName:"p"},"ReactIntl")," global and instead provide UMD modules with a new ",Object(o.b)("inlineCode",{parentName:"p"},"ReactIntlLocaleData")," global. These changes, mean apps need update how they are registering the locale data they need in the browser."),Object(o.b)("h3",{id:"add-call-to-addlocaledata-in-browser"},"Add Call to ",Object(o.b)("inlineCode",{parentName:"h3"},"addLocaleData()")," in Browser"),Object(o.b)("p",null,"There is now an ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#addlocaledata"},Object(o.b)("inlineCode",{parentName:"a"},"addLocaleData()"))," function that needs to be called with the locale data that has been loaded. You can do the following in your main client JavaScript entry point:"),Object(o.b)("p",null,"This assumes a locale data ",Object(o.b)("inlineCode",{parentName:"p"},"<script>")," is added based on the request; e.g., for French speaking users:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-html"},'<script src="react-intl/locale-data/fr.js"><\/script>\n')),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Using ",Object(o.b)("inlineCode",{parentName:"strong"},'<script src="react-intl/dist/react-intl.js>'),":")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"if ('ReactIntl' in window && 'ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    ReactIntl.addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Using Browserify/Webpack to Load React Intl:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import {addLocaleData} from 'react-intl'\n\nif ('ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n")),Object(o.b)("p",null,"::info\nThis decoupling of the library from the locale data, allows for the files to be loaded via ",Object(o.b)("inlineCode",{parentName:"p"},"<script async>"),". When using async scripts, your client bootstrapping code will need to wait for the ",Object(o.b)("inlineCode",{parentName:"p"},"load")," event, including the code above.\n:::"),Object(o.b)("h2",{id:"remove-intl-mixin"},"Remove Intl Mixin"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The ",Object(o.b)("inlineCode",{parentName:"strong"},"IntlMixin")," has been removed from React Intl v2.")," The mixin did two things: it automatically propagated ",Object(o.b)("inlineCode",{parentName:"p"},"locales"),", ",Object(o.b)("inlineCode",{parentName:"p"},"formats"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," throughout an app's hierarchy, and it provided an imperative API via ",Object(o.b)("inlineCode",{parentName:"p"},"format*()")," functions. These jobs are now handled by ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},Object(o.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#injection-api"},Object(o.b)("inlineCode",{parentName:"a"},"injectIntl()")),", respectively:"),Object(o.b)("h3",{id:"update-to-intlprovider"},"Update to ",Object(o.b)("inlineCode",{parentName:"h3"},"IntlProvider")),Object(o.b)("p",null,"In React Intl v1, you would add the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," to your root component; e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"<App>"),". Remove the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," and instead wrap your root component with ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},Object(o.b)("inlineCode",{parentName:"a"},"<IntlProvider>")),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import ReactDOM from 'react-dom'\nimport {IntlProvider} from 'react-intl'\n\nReactDOM.render(\n  <IntlProvider locale=\"en\">\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("inlineCode",{parentName:"p"},"locale")," prop is ",Object(o.b)("strong",{parentName:"p"},"singular"),", required, and only accepts a string value. This is a simplification of the plural ",Object(o.b)("inlineCode",{parentName:"p"},"locales")," prop used by the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin"),"."))),Object(o.b)("h3",{id:"update-to-injectintl"},"Update to ",Object(o.b)("inlineCode",{parentName:"h3"},"injectIntl()")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," also provided the imperative API for custom components to use the ",Object(o.b)("inlineCode",{parentName:"p"},"format*()")," methods; e.g., ",Object(o.b)("inlineCode",{parentName:"p"},"formatDate()")," to get formatted strings for using in places like ",Object(o.b)("inlineCode",{parentName:"p"},"title")," and ",Object(o.b)("inlineCode",{parentName:"p"},"aria")," attribute. Remove the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," and instead use the ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},Object(o.b)("inlineCode",{parentName:"a"},"injectIntl()"))," Hight Order Component (HOC) factory function to inject the imperative API via ",Object(o.b)("inlineCode",{parentName:"p"},"props"),"."),Object(o.b)("p",null,"Here's an example of a custom ",Object(o.b)("inlineCode",{parentName:"p"},"<RelativeTime>")," stateless component which uses ",Object(o.b)("inlineCode",{parentName:"p"},"injectIntl()")," and the imperative ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#formatdate"},Object(o.b)("inlineCode",{parentName:"a"},"formatDate()"))," API:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react'\nimport {injectIntl, FormattedRelative} from 'react-intl'\n\nconst to2Digits = num => `${num < 10 ? `0${num}` : num}`\n\nconst RelativeTime = ({date, intl}) => {\n  date = new Date(date)\n\n  let year = date.getFullYear()\n  let month = date.getMonth() + 1\n  let day = date.getDate()\n\n  let formattedDate = intl.formatDate(date, {\n    year: 'long',\n    month: 'numeric',\n    day: 'numeric',\n  })\n\n  return (\n    <time\n      dateTime={`${year}-${to2Digits(month)}-${to2Digits(day)}`}\n      title={formattedDate}\n    >\n      <FormattedRelative value={date} />\n    </time>\n  )\n}\n\nexport default injectIntl(RelativeTime)\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"injectIntl()")," is similar to a ",Object(o.b)("inlineCode",{parentName:"p"},"connect()")," HOC factory function you might find in a Flux framework to connect a component to a store."),Object(o.b)("h2",{id:"change-how-messages-are-formatted"},"Change How Messages are Formatted"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The way string messages are formatted in React Intl v2 has changed significantly!")," This is the most disruptive set of change when upgrading from v1 to v2; but it enables many great new features."),Object(o.b)("p",null,"React Intl v2 introduces a new ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#message-descriptor"},Object(o.b)("strong",{parentName:"a"},"Message Descriptor"))," concept which can be used to define an app's default string messages. A Message Descriptor is an object with the following properties, ",Object(o.b)("inlineCode",{parentName:"p"},"id")," is the only required prop:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"id")),": A unique, stable identifier for the message"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"description")),": Context for the translator about how it's used in the UI"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"strong"},"defaultMessage")),": The default message (probably in English)")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"This upgrade guide will focus on using Message Descriptors that only contain an ",Object(o.b)("inlineCode",{parentName:"p"},"id")," property."))),Object(o.b)("h3",{id:"flatten-messages-object"},"Flatten ",Object(o.b)("inlineCode",{parentName:"h3"},"messages")," Object"),Object(o.b)("p",null,"React Intl v2 no longer supports nested ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," objects, instead the collection of translated string messages passed to ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},Object(o.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," must be flat. This is an explicit design choice which simplifies while increasing flexibility. React Intl v2 does not apply any special semantics to strings with dots; e.g., ",Object(o.b)("inlineCode",{parentName:"p"},'"namespaced.string_id"'),"."),Object(o.b)("p",null,"Apps using a nested ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," object structure could use the following function to flatten their object according to React Intl v1's semantics:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"function flattenMessages(nestedMessages, prefix = '') {\n  return Object.keys(nestedMessages).reduce((messages, key) => {\n    let value = nestedMessages[key]\n    let prefixedKey = prefix ? `${prefix}.${key}` : key\n\n    if (typeof value === 'string') {\n      messages[prefixedKey] = value\n    } else {\n      Object.assign(messages, flattenMessages(value, prefixedKey))\n    }\n\n    return messages\n  }, {})\n}\n\nlet messages = flattenMessages(nestedMessages)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Message ids can still contain ",Object(o.b)("inlineCode",{parentName:"p"},'"."'),"s, so the ids themselves remain the same, it's only the ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," object structure that needs to change."))),Object(o.b)("h3",{id:"replace-getintlmessage-calls-with-message-descriptors"},"Replace ",Object(o.b)("inlineCode",{parentName:"h3"},"getIntlMessage()")," Calls with Message Descriptors"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getIntlMessage()")," method that was provided by the ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," has been removed in React Intl v2. It was simply a helper that interpreted a message id string with ",Object(o.b)("inlineCode",{parentName:"p"},'"."'),"s by looking up the translated message in a nested ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," object. With the removal of ",Object(o.b)("inlineCode",{parentName:"p"},"IntlMixin")," and the change to a flat ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," object, this method has been removed."),Object(o.b)("p",null,"All calls to ",Object(o.b)("inlineCode",{parentName:"p"},"getIntlMessage()")," need to be replaced with a Message Descriptor."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Replace:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"this.getIntlMessage('some.message.id')\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"With:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"{\n  id: 'some.message.id'\n}\n")),Object(o.b)("h3",{id:"update-formatmessage-calls"},"Update ",Object(o.b)("inlineCode",{parentName:"h3"},"formatMessage()")," Calls"),Object(o.b)("p",null,"A typical pattern when calling ",Object(o.b)("inlineCode",{parentName:"p"},"formatMessage()")," is to nest a call to ",Object(o.b)("inlineCode",{parentName:"p"},"getIntlMessage()"),". These can be easily updated:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"let message = this.formatMessage(this.getIntlMessage('some.message.id'), values)\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"let message = this.props.intl.formatMessage({id: 'some.message.id'}, values)\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In React Intl v2, the ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#formatmessage"},Object(o.b)("inlineCode",{parentName:"a"},"formatMessage()"))," function is injected via ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},Object(o.b)("inlineCode",{parentName:"a"},"injectIntl()")),"."))),Object(o.b)("h3",{id:"update-formattedmessage-and-formattedhtmlmessage-instances"},"Update ",Object(o.b)("inlineCode",{parentName:"h3"},"FormattedMessage")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"FormattedHTMLMessage")," Instances"),Object(o.b)("p",null,"The props for these two components have completely changed in React Intl v2. Instead of taking a ",Object(o.b)("inlineCode",{parentName:"p"},"message")," prop and treating all other props as values to fill in placeholders in a message, ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#formattedmessage"},Object(o.b)("inlineCode",{parentName:"a"},"<FormattedMessage>"))," and ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#formattedhtmlmessage"},Object(o.b)("inlineCode",{parentName:"a"},"<FormattedHTMLMessage>"))," now the same props as a Message Descriptor plus a new ",Object(o.b)("inlineCode",{parentName:"p"},"values")," prop."),Object(o.b)("p",null,"The new ",Object(o.b)("inlineCode",{parentName:"p"},"values")," prop groups all of the message's placeholder values together into an object."),Object(o.b)("p",null,"The following example shows up to update a ",Object(o.b)("inlineCode",{parentName:"p"},"<FormattedMessage>")," instance to use the new props and remove the call to ",Object(o.b)("inlineCode",{parentName:"p"},"getIntlMessage()"),":"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"<FormattedMessage message={this.getIntlMessage('greeting')} name=\"Eric\" />\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"<FormattedMessage id=\"greeting\" values={{name: 'Eric'}} />\n")),Object(o.b)("h2",{id:"update-how-relative-times-are-formatted"},"Update How Relative Times are Formatted"),Object(o.b)("p",null,'Minor changes have been made to how the "now" reference time is specified when formatting relative times in React Intl v2. It\'s uncommon to specify this value outside of test code, so it might not exist in your app.'),Object(o.b)("h3",{id:"rename-formattedrelatives-now-prop-to-initialnow"},"Rename ",Object(o.b)("inlineCode",{parentName:"h3"},"FormattedRelative"),"'s ",Object(o.b)("inlineCode",{parentName:"h3"},"now")," Prop to ",Object(o.b)("inlineCode",{parentName:"h3"},"initialNow")),Object(o.b)("p",null,"A new feature has been added to ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#formattedrelative"},Object(o.b)("inlineCode",{parentName:"a"},"<FormattedRelative>")),' instances in React Intl v2, they now "tick" and stay up to date. Since time moves forward, it was confusing to have a prop named ',Object(o.b)("inlineCode",{parentName:"p"},"now"),", so it has been renamed to ",Object(o.b)("inlineCode",{parentName:"p"},"initialNow"),". Any ",Object(o.b)("inlineCode",{parentName:"p"},"<FormattedRelative>")," instances that use ",Object(o.b)("inlineCode",{parentName:"p"},"now")," should update to prop name to ",Object(o.b)("inlineCode",{parentName:"p"},"initialNow"),":"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"<FormattedRelative value={date} now={otherDate} />\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"<FormattedRelative value={date} initialNow={otherDate} />\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#intlprovider"},Object(o.b)("inlineCode",{parentName:"a"},"<IntlProvider>"))," component also has a ",Object(o.b)("inlineCode",{parentName:"p"},"initialNow"),' prop which can be assigned a value to stabilize the "now" reference time for ',Object(o.b)("em",{parentName:"p"},"all")," ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/components#formattedrelative"},Object(o.b)("inlineCode",{parentName:"a"},"<FormattedRelative>"))," instances. This is useful for universal/isomorphic apps to proper React checksums between the server and client initial render."))),Object(o.b)("h3",{id:"merge-formatrelatives-second-and-third-arguments"},"Merge ",Object(o.b)("inlineCode",{parentName:"h3"},"formatRelative()"),"'s Second and Third Arguments"),Object(o.b)("p",null,"The signature of the ",Object(o.b)("inlineCode",{parentName:"p"},"formatRelative()")," function has been aligned with the other ",Object(o.b)("inlineCode",{parentName:"p"},"format*()")," functions and in React Intl v2, it only accepts two arguments: ",Object(o.b)("inlineCode",{parentName:"p"},"value")," and ",Object(o.b)("inlineCode",{parentName:"p"},"options"),'. To specify a "now" reference time, add it to the ',Object(o.b)("inlineCode",{parentName:"p"},"options")," argument, and remove the third ",Object(o.b)("inlineCode",{parentName:"p"},"formatOptions")," argument:"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"1.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"let relative = this.formatRelative(date, {units: 'hour'}, {now: otherDate})\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"2.0:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"let relative = this.props.intl.formatRelative(date, {\n  units: 'hour',\n  now: otherDate,\n})\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"In React Intl v2, the ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#formatrelative"},Object(o.b)("inlineCode",{parentName:"a"},"formatRelative()"))," function is injected via ",Object(o.b)("a",{parentName:"p",href:"/docs/react-intl/api#injectintl"},Object(o.b)("inlineCode",{parentName:"a"},"injectIntl()")),"."))))}d.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return g}));var n=a(38),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,g=p["".concat(r,".").concat(m)]||p[m]||b[m]||o;return a?i.a.createElement(g,s(s({ref:t},l),{},{components:a})):i.a.createElement(g,s({ref:t},l))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);