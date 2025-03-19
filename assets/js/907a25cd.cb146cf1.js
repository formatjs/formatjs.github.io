"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5386],{5950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"react-intl/upgrade-guide-2x","title":"Upgrade Guide (v1 -> v2)","description":"Use React 0.14 or 15","source":"@site/docs/react-intl/upgrade-guide-2.x.md","sourceDirName":"react-intl","slug":"/react-intl/upgrade-guide-2x","permalink":"/docs/react-intl/upgrade-guide-2x","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/upgrade-guide-2.x.md","tags":[],"version":"current","lastUpdatedBy":"dependabot[bot]","lastUpdatedAt":1742399989000,"frontMatter":{"id":"upgrade-guide-2x","title":"Upgrade Guide (v1 -> v2)"},"sidebar":"api","previous":{"title":"Upgrade Guide (v2 -> v3)","permalink":"/docs/react-intl/upgrade-guide-3x"},"next":{"title":"Core FormatJS Intl","permalink":"/docs/intl"}}');var a=n(6106),i=n(7389);const d={id:"upgrade-guide-2x",title:"Upgrade Guide (v1 -> v2)"},r=void 0,o={},c=[{value:"Use React 0.14 or 15",id:"use-react-014-or-15",level:2},{value:"Update How Locale Data is Added",id:"update-how-locale-data-is-added",level:2},{value:"Add Call to <code>addLocaleData()</code> in Browser",id:"add-call-to-addlocaledata-in-browser",level:3},{value:"Remove Intl Mixin",id:"remove-intl-mixin",level:2},{value:"Update to <code>IntlProvider</code>",id:"update-to-intlprovider",level:3},{value:"Update to <code>injectIntl()</code>",id:"update-to-injectintl",level:3},{value:"Change How Messages are Formatted",id:"change-how-messages-are-formatted",level:2},{value:"Flatten <code>messages</code> Object",id:"flatten-messages-object",level:3},{value:"Replace <code>getIntlMessage()</code> Calls with Message Descriptors",id:"replace-getintlmessage-calls-with-message-descriptors",level:3},{value:"Update <code>formatMessage()</code> Calls",id:"update-formatmessage-calls",level:3},{value:"Update <code>FormattedMessage</code> and <code>FormattedHTMLMessage</code> Instances",id:"update-formattedmessage-and-formattedhtmlmessage-instances",level:3},{value:"Update How Relative Times are Formatted",id:"update-how-relative-times-are-formatted",level:2},{value:"Rename <code>FormattedRelative</code>&#39;s <code>now</code> Prop to <code>initialNow</code>",id:"rename-formattedrelatives-now-prop-to-initialnow",level:3},{value:"Merge <code>formatRelative()</code>&#39;s Second and Third Arguments",id:"merge-formatrelatives-second-and-third-arguments",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"use-react-014-or-15",children:"Use React 0.14 or 15"}),"\n",(0,a.jsxs)(t.p,{children:["React Intl v2 has a peer dependency on ",(0,a.jsx)(t.code,{children:"react@^0.14.0 || ^15.0.0-0"})," and now takes advantage of features and changes in React 0.14 and also works with React 15."]}),"\n",(0,a.jsx)(t.h2,{id:"update-how-locale-data-is-added",children:"Update How Locale Data is Added"}),"\n",(0,a.jsxs)(t.p,{children:["The locale data modules in React Intl v2 have been refactored to ",(0,a.jsx)(t.em,{children:"provide"})," data, instead of mutating React Intl's internal locale data registry. The ",(0,a.jsx)(t.code,{children:"react-intl/locale-data/*"})," files are also decoupled from the ",(0,a.jsx)(t.code,{children:"ReactIntl"})," global and instead provide UMD modules with a new ",(0,a.jsx)(t.code,{children:"ReactIntlLocaleData"})," global. These changes, mean apps need update how they are registering the locale data they need in the browser."]}),"\n",(0,a.jsxs)(t.h3,{id:"add-call-to-addlocaledata-in-browser",children:["Add Call to ",(0,a.jsx)(t.code,{children:"addLocaleData()"})," in Browser"]}),"\n",(0,a.jsxs)(t.p,{children:["There is now an ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#addlocaledata",children:(0,a.jsx)(t.code,{children:"addLocaleData()"})})," function that needs to be called with the locale data that has been loaded. You can do the following in your main client JavaScript entry point:"]}),"\n",(0,a.jsxs)(t.p,{children:["This assumes a locale data ",(0,a.jsx)(t.code,{children:"<script>"})," is added based on the request; e.g., for French speaking users:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-html",children:'<script src="react-intl/locale-data/fr.js"><\/script>\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsxs)(t.strong,{children:["Using ",(0,a.jsx)(t.code,{children:'<script src="react-intl/dist/react-intl.js>'})]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"if ('ReactIntl' in window && 'ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    ReactIntl.addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Using Browserify/Webpack to Load React Intl"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import {addLocaleData} from 'react-intl'\n\nif ('ReactIntlLocaleData' in window) {\n  Object.keys(ReactIntlLocaleData).forEach(lang => {\n    addLocaleData(ReactIntlLocaleData[lang])\n  })\n}\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This decoupling of the library from the locale data, allows for the files to be loaded via ",(0,a.jsx)(t.code,{children:"<script async>"}),". When using async scripts, your client bootstrapping code will need to wait for the ",(0,a.jsx)(t.code,{children:"load"})," event, including the code above."]})}),"\n",(0,a.jsx)(t.h2,{id:"remove-intl-mixin",children:"Remove Intl Mixin"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsxs)(t.strong,{children:["The ",(0,a.jsx)(t.code,{children:"IntlMixin"})," has been removed from React Intl v2."]})," The mixin did two things: it automatically propagated ",(0,a.jsx)(t.code,{children:"locales"}),", ",(0,a.jsx)(t.code,{children:"formats"}),", and ",(0,a.jsx)(t.code,{children:"messages"})," throughout an app's hierarchy, and it provided an imperative API via ",(0,a.jsx)(t.code,{children:"format*()"})," functions. These jobs are now handled by ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#intlprovider",children:(0,a.jsx)(t.code,{children:"<IntlProvider>"})})," and ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#injection-api",children:(0,a.jsx)(t.code,{children:"injectIntl()"})}),", respectively:"]}),"\n",(0,a.jsxs)(t.h3,{id:"update-to-intlprovider",children:["Update to ",(0,a.jsx)(t.code,{children:"IntlProvider"})]}),"\n",(0,a.jsxs)(t.p,{children:["In React Intl v1, you would add the ",(0,a.jsx)(t.code,{children:"IntlMixin"})," to your root component; e.g., ",(0,a.jsx)(t.code,{children:"<App>"}),". Remove the ",(0,a.jsx)(t.code,{children:"IntlMixin"})," and instead wrap your root component with ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#intlprovider",children:(0,a.jsx)(t.code,{children:"<IntlProvider>"})}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom'\nimport {IntlProvider} from 'react-intl'\n\nReactDOM.render(\n  <IntlProvider locale=\"en\">\n    <App />\n  </IntlProvider>,\n  document.getElementById('container')\n)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"locale"})," prop is ",(0,a.jsx)(t.strong,{children:"singular"}),", required, and only accepts a string value. This is a simplification of the plural ",(0,a.jsx)(t.code,{children:"locales"})," prop used by the ",(0,a.jsx)(t.code,{children:"IntlMixin"}),"."]})}),"\n",(0,a.jsxs)(t.h3,{id:"update-to-injectintl",children:["Update to ",(0,a.jsx)(t.code,{children:"injectIntl()"})]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"IntlMixin"})," also provided the imperative API for custom components to use the ",(0,a.jsx)(t.code,{children:"format*()"})," methods; e.g., ",(0,a.jsx)(t.code,{children:"formatDate()"})," to get formatted strings for using in places like ",(0,a.jsx)(t.code,{children:"title"})," and ",(0,a.jsx)(t.code,{children:"aria"})," attribute. Remove the ",(0,a.jsx)(t.code,{children:"IntlMixin"})," and instead use the ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#injectintl",children:(0,a.jsx)(t.code,{children:"injectIntl()"})})," Hight Order Component (HOC) factory function to inject the imperative API via ",(0,a.jsx)(t.code,{children:"props"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Here's an example of a custom ",(0,a.jsx)(t.code,{children:"<RelativeTime>"})," stateless component which uses ",(0,a.jsx)(t.code,{children:"injectIntl()"})," and the imperative ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#formatdate",children:(0,a.jsx)(t.code,{children:"formatDate()"})})," API:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import React from 'react'\nimport {injectIntl, FormattedRelative} from 'react-intl'\n\nconst to2Digits = num => `${num < 10 ? `0${num}` : num}`\n\nconst RelativeTime = ({date, intl}) => {\n  date = new Date(date)\n\n  let year = date.getFullYear()\n  let month = date.getMonth() + 1\n  let day = date.getDate()\n\n  let formattedDate = intl.formatDate(date, {\n    year: 'long',\n    month: 'numeric',\n    day: 'numeric',\n  })\n\n  return (\n    <time\n      dateTime={`${year}-${to2Digits(month)}-${to2Digits(day)}`}\n      title={formattedDate}\n    >\n      <FormattedRelative value={date} />\n    </time>\n  )\n}\n\nexport default injectIntl(RelativeTime)\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"injectIntl()"})," is similar to a ",(0,a.jsx)(t.code,{children:"connect()"})," HOC factory function you might find in a Flux framework to connect a component to a store."]}),"\n",(0,a.jsx)(t.h2,{id:"change-how-messages-are-formatted",children:"Change How Messages are Formatted"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"The way string messages are formatted in React Intl v2 has changed significantly!"})," This is the most disruptive set of change when upgrading from v1 to v2; but it enables many great new features."]}),"\n",(0,a.jsxs)(t.p,{children:["React Intl v2 introduces a new ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#message-descriptor",children:(0,a.jsx)(t.strong,{children:"Message Descriptor"})})," concept which can be used to define an app's default string messages. A Message Descriptor is an object with the following properties, ",(0,a.jsx)(t.code,{children:"id"})," is the only required prop:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"id"})}),": A unique, stable identifier for the message"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"description"})}),": Context for the translator about how it's used in the UI"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"defaultMessage"})}),": The default message (probably in English)"]}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["This upgrade guide will focus on using Message Descriptors that only contain an ",(0,a.jsx)(t.code,{children:"id"})," property."]})}),"\n",(0,a.jsxs)(t.h3,{id:"flatten-messages-object",children:["Flatten ",(0,a.jsx)(t.code,{children:"messages"})," Object"]}),"\n",(0,a.jsxs)(t.p,{children:["React Intl v2 no longer supports nested ",(0,a.jsx)(t.code,{children:"messages"})," objects, instead the collection of translated string messages passed to ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#intlprovider",children:(0,a.jsx)(t.code,{children:"<IntlProvider>"})})," must be flat. This is an explicit design choice which simplifies while increasing flexibility. React Intl v2 does not apply any special semantics to strings with dots; e.g., ",(0,a.jsx)(t.code,{children:'"namespaced.string_id"'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Apps using a nested ",(0,a.jsx)(t.code,{children:"messages"})," object structure could use the following function to flatten their object according to React Intl v1's semantics:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"function flattenMessages(nestedMessages, prefix = '') {\n  return Object.keys(nestedMessages).reduce((messages, key) => {\n    let value = nestedMessages[key]\n    let prefixedKey = prefix ? `${prefix}.${key}` : key\n\n    if (typeof value === 'string') {\n      messages[prefixedKey] = value\n    } else {\n      Object.assign(messages, flattenMessages(value, prefixedKey))\n    }\n\n    return messages\n  }, {})\n}\n\nlet messages = flattenMessages(nestedMessages)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["Message ids can still contain ",(0,a.jsx)(t.code,{children:'"."'}),"s, so the ids themselves remain the same, it's only the ",(0,a.jsx)(t.code,{children:"messages"})," object structure that needs to change."]})}),"\n",(0,a.jsxs)(t.h3,{id:"replace-getintlmessage-calls-with-message-descriptors",children:["Replace ",(0,a.jsx)(t.code,{children:"getIntlMessage()"})," Calls with Message Descriptors"]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"getIntlMessage()"})," method that was provided by the ",(0,a.jsx)(t.code,{children:"IntlMixin"})," has been removed in React Intl v2. It was simply a helper that interpreted a message id string with ",(0,a.jsx)(t.code,{children:'"."'}),"s by looking up the translated message in a nested ",(0,a.jsx)(t.code,{children:"messages"})," object. With the removal of ",(0,a.jsx)(t.code,{children:"IntlMixin"})," and the change to a flat ",(0,a.jsx)(t.code,{children:"messages"})," object, this method has been removed."]}),"\n",(0,a.jsxs)(t.p,{children:["All calls to ",(0,a.jsx)(t.code,{children:"getIntlMessage()"})," need to be replaced with a Message Descriptor."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Replace:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"this.getIntlMessage('some.message.id')\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"With:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"{\n  id: 'some.message.id'\n}\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"update-formatmessage-calls",children:["Update ",(0,a.jsx)(t.code,{children:"formatMessage()"})," Calls"]}),"\n",(0,a.jsxs)(t.p,{children:["A typical pattern when calling ",(0,a.jsx)(t.code,{children:"formatMessage()"})," is to nest a call to ",(0,a.jsx)(t.code,{children:"getIntlMessage()"}),". These can be easily updated:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"let message = this.formatMessage(this.getIntlMessage('some.message.id'), values)\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"let message = this.props.intl.formatMessage({id: 'some.message.id'}, values)\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["In React Intl v2, the ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#formatmessage",children:(0,a.jsx)(t.code,{children:"formatMessage()"})})," function is injected via ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#injectintl",children:(0,a.jsx)(t.code,{children:"injectIntl()"})}),"."]})}),"\n",(0,a.jsxs)(t.h3,{id:"update-formattedmessage-and-formattedhtmlmessage-instances",children:["Update ",(0,a.jsx)(t.code,{children:"FormattedMessage"})," and ",(0,a.jsx)(t.code,{children:"FormattedHTMLMessage"})," Instances"]}),"\n",(0,a.jsxs)(t.p,{children:["The props for these two components have completely changed in React Intl v2. Instead of taking a ",(0,a.jsx)(t.code,{children:"message"})," prop and treating all other props as values to fill in placeholders in a message, ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#formattedmessage",children:(0,a.jsx)(t.code,{children:"<FormattedMessage>"})})," and ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#formattedhtmlmessage",children:(0,a.jsx)(t.code,{children:"<FormattedHTMLMessage>"})})," now the same props as a Message Descriptor plus a new ",(0,a.jsx)(t.code,{children:"values"})," prop."]}),"\n",(0,a.jsxs)(t.p,{children:["The new ",(0,a.jsx)(t.code,{children:"values"})," prop groups all of the message's placeholder values together into an object."]}),"\n",(0,a.jsxs)(t.p,{children:["The following example shows up to update a ",(0,a.jsx)(t.code,{children:"<FormattedMessage>"})," instance to use the new props and remove the call to ",(0,a.jsx)(t.code,{children:"getIntlMessage()"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"<FormattedMessage message={this.getIntlMessage('greeting')} name=\"Eric\" />\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"<FormattedMessage id=\"greeting\" values={{name: 'Eric'}} />\n"})}),"\n",(0,a.jsx)(t.h2,{id:"update-how-relative-times-are-formatted",children:"Update How Relative Times are Formatted"}),"\n",(0,a.jsx)(t.p,{children:'Minor changes have been made to how the "now" reference time is specified when formatting relative times in React Intl v2. It\'s uncommon to specify this value outside of test code, so it might not exist in your app.'}),"\n",(0,a.jsxs)(t.h3,{id:"rename-formattedrelatives-now-prop-to-initialnow",children:["Rename ",(0,a.jsx)(t.code,{children:"FormattedRelative"}),"'s ",(0,a.jsx)(t.code,{children:"now"})," Prop to ",(0,a.jsx)(t.code,{children:"initialNow"})]}),"\n",(0,a.jsxs)(t.p,{children:["A new feature has been added to ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#formattedrelative",children:(0,a.jsx)(t.code,{children:"<FormattedRelative>"})}),' instances in React Intl v2, they now "tick" and stay up to date. Since time moves forward, it was confusing to have a prop named ',(0,a.jsx)(t.code,{children:"now"}),", so it has been renamed to ",(0,a.jsx)(t.code,{children:"initialNow"}),". Any ",(0,a.jsx)(t.code,{children:"<FormattedRelative>"})," instances that use ",(0,a.jsx)(t.code,{children:"now"})," should update to prop name to ",(0,a.jsx)(t.code,{children:"initialNow"}),":"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"<FormattedRelative value={date} now={otherDate} />\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"<FormattedRelative value={date} initialNow={otherDate} />\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#intlprovider",children:(0,a.jsx)(t.code,{children:"<IntlProvider>"})})," component also has a ",(0,a.jsx)(t.code,{children:"initialNow"}),' prop which can be assigned a value to stabilize the "now" reference time for ',(0,a.jsx)(t.em,{children:"all"})," ",(0,a.jsx)(t.a,{href:"/docs/react-intl/components#formattedrelative",children:(0,a.jsx)(t.code,{children:"<FormattedRelative>"})})," instances. This is useful for universal/isomorphic apps to proper React checksums between the server and client initial render."]})}),"\n",(0,a.jsxs)(t.h3,{id:"merge-formatrelatives-second-and-third-arguments",children:["Merge ",(0,a.jsx)(t.code,{children:"formatRelative()"}),"'s Second and Third Arguments"]}),"\n",(0,a.jsxs)(t.p,{children:["The signature of the ",(0,a.jsx)(t.code,{children:"formatRelative()"})," function has been aligned with the other ",(0,a.jsx)(t.code,{children:"format*()"})," functions and in React Intl v2, it only accepts two arguments: ",(0,a.jsx)(t.code,{children:"value"})," and ",(0,a.jsx)(t.code,{children:"options"}),'. To specify a "now" reference time, add it to the ',(0,a.jsx)(t.code,{children:"options"})," argument, and remove the third ",(0,a.jsx)(t.code,{children:"formatOptions"})," argument:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"1.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"let relative = this.formatRelative(date, {units: 'hour'}, {now: otherDate})\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"2.0:"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"let relative = this.props.intl.formatRelative(date, {\n  units: 'hour',\n  now: otherDate,\n})\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["In React Intl v2, the ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#formatrelative",children:(0,a.jsx)(t.code,{children:"formatRelative()"})})," function is injected via ",(0,a.jsx)(t.a,{href:"/docs/react-intl/api#injectintl",children:(0,a.jsx)(t.code,{children:"injectIntl()"})}),"."]})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},7389:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>r});var s=n(7378);const a={},i=s.createContext(a);function d(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);