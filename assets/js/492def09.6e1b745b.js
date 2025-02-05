"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[808],{4935:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"react-intl/api","title":"Imperative API","description":"There are a few API layers that React Intl provides and is built on. When using React Intl you\'ll be interacting with its API (documented here) and its React components.","source":"@site/docs/react-intl/api.md","sourceDirName":"react-intl","slug":"/react-intl/api","permalink":"/docs/react-intl/api","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/react-intl/api.md","tags":[],"version":"current","lastUpdatedBy":"Long Ho","lastUpdatedAt":1738776236000,"frontMatter":{"id":"api","title":"Imperative API"},"sidebar":"api","previous":{"title":"Components","permalink":"/docs/react-intl/components"},"next":{"title":"Upgrade Guide (v4 -> v5)","permalink":"/docs/react-intl/upgrade-guide-5x"}}');var i=t(6106),a=t(972);const r={id:"api",title:"Imperative API"},o=void 0,l={},c=[{value:"Why Imperative API?",id:"why-imperative-api",level:2},{value:"The <code>intl</code> object",id:"the-intl-object",level:2},{value:"useIntl hook",id:"useintl-hook",level:2},{value:"injectIntl HOC",id:"injectintl-hoc",level:2},{value:"createIntl",id:"createintl",level:2},{value:"createIntlCache",id:"createintlcache",level:2},{value:"IntlShape",id:"intlshape",level:2},{value:"locale, formats, and messages",id:"locale-formats-and-messages",level:3},{value:"defaultLocale and defaultFormats",id:"defaultlocale-and-defaultformats",level:3},{value:"textComponent",id:"textcomponent",level:3},{value:"onError",id:"onerror",level:3},{value:"wrapRichTextChunksInFragment",id:"wraprichtextchunksinfragment",level:3},{value:"defaultRichTextElements",id:"defaultrichtextelements",level:3},{value:"formatDate",id:"formatdate",level:2},{value:"formatTime",id:"formattime",level:2},{value:"formatDateTimeRange",id:"formatdatetimerange",level:2},{value:"formatRelativeTime",id:"formatrelativetime",level:2},{value:"formatNumber",id:"formatnumber",level:2},{value:"formatPlural",id:"formatplural",level:2},{value:"formatList",id:"formatlist",level:2},{value:"formatDisplayName",id:"formatdisplayname",level:2},{value:"formatMessage",id:"formatmessage",level:2},{value:"Message Syntax",id:"message-syntax",level:3},{value:"Message Descriptor",id:"message-descriptor",level:3},{value:"Message Formatting Fallbacks",id:"message-formatting-fallbacks",level:3},{value:"Usage",id:"usage",level:3},{value:"defineMessages/defineMessage",id:"definemessagesdefinemessage",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["There are a few API layers that React Intl provides and is built on. When using React Intl you'll be interacting with its API (documented here) and its React ",(0,i.jsx)(n.a,{href:"/docs/react-intl/components",children:"components"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"why-imperative-api",children:"Why Imperative API?"}),"\n",(0,i.jsxs)(n.p,{children:["While our ",(0,i.jsx)(n.a,{href:"/docs/react-intl/components",children:"components"})," provide a seamless integration with React, the imperative API are recommended (sometimes required) in several use cases:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Setting text attributes such as ",(0,i.jsx)(n.code,{children:"title"}),", ",(0,i.jsx)(n.code,{children:"aria-label"})," and the like where a React component cannot be used (e.g ",(0,i.jsx)(n.code,{children:"<img title/>"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"Formatting text/datetime... in non-React environment such as Node, Server API, Redux store, testing..."}),"\n",(0,i.jsx)(n.li,{children:"High performance scenarios where the number of React components rendered becomes the bottleneck (e.g Finance stock portfolio rendering, virtual tables with a lot of cells...)"}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"the-intl-object",children:["The ",(0,i.jsx)(n.code,{children:"intl"})," object"]}),"\n",(0,i.jsxs)(n.p,{children:["The core of ",(0,i.jsx)(n.code,{children:"react-intl"})," is the ",(0,i.jsx)(n.code,{children:"intl"})," object (of type ",(0,i.jsx)(n.a,{href:"#intlshape",children:(0,i.jsx)(n.code,{children:"IntlShape"})}),"), which is the instance to store a cache of all ",(0,i.jsx)(n.code,{children:"Intl.*"})," APIs, configurations, compiled messages and such. The lifecycle of the ",(0,i.jsx)(n.code,{children:"intl"})," object is typically tied to the ",(0,i.jsx)(n.code,{children:"locale"})," & the list of ",(0,i.jsx)(n.code,{children:"messages"})," that it contains, which means when you switch ",(0,i.jsx)(n.code,{children:"locale"}),", this object should be recreated."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"intl"})," object should be reused as much as possible for performance."]})}),"\n",(0,i.jsxs)(n.p,{children:["There are a few ways to get access to the ",(0,i.jsx)(n.code,{children:"intl"})," object:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"useIntl"})," hook: Once you've declared your ",(0,i.jsx)(n.code,{children:"IntlProvider"}),", you can get access to the ",(0,i.jsx)(n.code,{children:"intl"})," object via calling this hook in your functional React component"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"injectIntl"})," HOC: In ",(0,i.jsx)(n.code,{children:"class"}),"-based React components, you can wrap them with the ",(0,i.jsx)(n.code,{children:"injectIntl"})," HOC and ",(0,i.jsx)(n.code,{children:"intl"})," should be available as a ",(0,i.jsx)(n.code,{children:"prop"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"createIntl"}),": In a non-React environment (Node, vue, angular, testing... you name it), you can directly create a ",(0,i.jsx)(n.code,{children:"intl"})," object by calling this function with the same configuration as the ",(0,i.jsx)(n.code,{children:"IntlProvider"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"useintl-hook",children:"useIntl hook"}),"\n",(0,i.jsxs)(n.p,{children:["If a component can be expressed in a form of function component, using ",(0,i.jsx)(n.code,{children:"useIntl"})," hook can be handy. This ",(0,i.jsx)(n.code,{children:"useIntl"})," hook does not expect any option as its argument when being called. Typically, here is how you would like to use:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport {useIntl, FormattedDate} from 'react-intl'\n\nconst FunctionComponent: React.FC<{date: number | Date}> = ({date}) => {\n  const intl = useIntl()\n  return (\n    <span title={intl.formatDate(date)}>\n      <FormattedDate value={date} />\n    </span>\n  )\n}\n\nexport default FunctionComponent\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To keep the API surface clean and simple, we only provide ",(0,i.jsx)(n.code,{children:"useIntl"})," hook in the package. If preferable, user can wrap this built-in hook to make customized hook like ",(0,i.jsx)(n.code,{children:"useFormatMessage"})," easily. Please visit React's official website for more general ",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/hooks-intro.html",children:"introduction on React hooks"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"injectintl-hoc",children:"injectIntl HOC"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type WrappedComponentProps<IntlPropName extends string = 'intl'> = {\n  [k in IntlPropName]: IntlShape\n}\n\ntype WithIntlProps<P> = Omit<P, keyof WrappedComponentProps> & {\n  forwardedRef?: React.Ref<any>\n}\n\nfunction injectIntl<\n  IntlPropName extends string = 'intl',\n  P extends WrappedComponentProps<IntlPropName> = WrappedComponentProps<any>,\n>(\n  WrappedComponent: React.ComponentType<P>,\n  options?: Opts<IntlPropName>\n): React.ComponentType<WithIntlProps<P>> & {\n  WrappedComponent: typeof WrappedComponent\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function is exported by the ",(0,i.jsx)(n.code,{children:"react-intl"})," package and is a High-Order Component (HOC) factory. It will wrap the passed-in React component with another React component which provides the imperative formatting API into the wrapped component via its ",(0,i.jsx)(n.code,{children:"props"}),". (This is similar to the connect-to-stores pattern found in many Flux implementations.)"]}),"\n",(0,i.jsxs)(n.p,{children:["By default, the formatting API will be provided to the wrapped component via ",(0,i.jsx)(n.code,{children:"props.intl"}),", but this can be overridden when specifying ",(0,i.jsx)(n.code,{children:"options.intlPropName"}),". The value of the prop will be of type ",(0,i.jsx)(n.a,{href:"#Intlshape",children:(0,i.jsx)(n.code,{children:"IntlShape"})}),", defined in the next section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import React from 'react'\nimport {injectIntl, FormattedDate} from 'react-intl'\n\ninterface Props {\n  date: Date | number\n}\n\nconst FunctionalComponent: React.FC<Props> = props => {\n  const {\n    date,\n    intl, // Injected by `injectIntl`\n  } = props\n  return (\n    <span title={intl.formatDate(date)}>\n      <FormattedDate value={date} />\n    </span>\n  )\n}\n\nexport default injectIntl(FunctionalComponent)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"createintl",children:"createIntl"}),"\n",(0,i.jsxs)(n.p,{children:["This allows you to create an ",(0,i.jsx)(n.code,{children:"IntlShape"})," object without using ",(0,i.jsx)(n.code,{children:"Provider"}),". This allows you to format things outside of React lifecycle while reusing the same ",(0,i.jsx)(n.code,{children:"intl"})," object. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"import {createIntl, createIntlCache, RawIntlProvider} from 'react-intl'\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\nconst intl = createIntl({\n  locale: 'fr-FR',\n  messages: {}\n}, cache)\n\n// Call imperatively\nintl.formatNumber(20)\n\n// Pass it to IntlProvider\n<RawIntlProvider value={intl}>{foo}</RawIntlProvider>\n"})}),"\n",(0,i.jsx)(n.h2,{id:"createintlcache",children:"createIntlCache"}),"\n",(0,i.jsxs)(n.p,{children:["Creates a cache instance to be used globally across locales. This memoizes previously created ",(0,i.jsx)(n.code,{children:"Intl.*"})," constructors for performance and is only an in-memory cache."]}),"\n",(0,i.jsx)(n.h2,{id:"intlshape",children:"IntlShape"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface IntlConfig {\n  locale: string\n  timeZone?: string\n  formats: CustomFormats\n  textComponent?: React.ComponentType | keyof React.JSX.IntrinsicElements\n  messages: Record<string, string> | Record<string, MessageFormatElement[]>\n  defaultLocale: string\n  defaultFormats: CustomFormats\n  onError(err: string): void\n  onWarn(warning: string): void\n}\n\ninterface IntlFormatters {\n  formatDate(value: number | Date | string, opts?: FormatDateOptions): string\n  formatTime(value: number | Date | string, opts?: FormatDateOptions): string\n  formatDateToParts(\n    value: number | Date | string,\n    opts?: FormatDateOptions\n  ): Intl.DateTimeFormatPart[]\n  formatTimeToParts(\n    value: number | Date | string,\n    opts?: FormatDateOptions\n  ): Intl.DateTimeFormatPart[]\n  formatRelativeTime(\n    value: number,\n    unit?: FormattableUnit,\n    opts?: FormatRelativeTimeOptions\n  ): string\n  formatNumber(value: number, opts?: FormatNumberOptions): string\n  formatNumberToParts(\n    value: number,\n    opts?: FormatNumberOptions\n  ): Intl.NumberFormatPart[]\n  formatPlural(\n    value: number | string,\n    opts?: FormatPluralOptions\n  ): ReturnType<Intl.PluralRules['select']>\n  formatMessage(\n    descriptor: MessageDescriptor,\n    values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>\n  ): string\n  formatMessage(\n    descriptor: MessageDescriptor,\n    values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T, R>>\n  ): R\n  formatList(values: Array<string>, opts?: FormatListOptions): string\n  formatList(\n    values: Array<string | T>,\n    opts?: FormatListOptions\n  ): T | string | Array<string | T>\n  formatListToParts(values: Array<string | T>, opts?: FormatListOptions): Part[]\n  formatDisplayName(\n    value: string,\n    opts?: FormatDisplayNameOptions\n  ): string | undefined\n}\n\ntype IntlShape = IntlConfig & IntlFormatters\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This interface is exported by the ",(0,i.jsx)(n.code,{children:"react-intl"})," package that can be used in conjunction with the ",(0,i.jsx)(n.a,{href:"#injectintl",children:(0,i.jsx)(n.code,{children:"injectIntl"})})," HOC factory function."]}),"\n",(0,i.jsxs)(n.p,{children:["The definition above shows what the ",(0,i.jsx)(n.code,{children:"props.intl"})," object will look like that's injected to your component via ",(0,i.jsx)(n.code,{children:"injectIntl"}),". It's made up of two parts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"IntlConfig"}),":"]})," The intl metadata passed as props into the parent ",(0,i.jsx)(n.code,{children:"<IntlProvider>"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"IntlFormatters"}),":"]})," The imperative formatting API described below."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"locale-formats-and-messages",children:"locale, formats, and messages"}),"\n",(0,i.jsxs)(n.p,{children:["The user's current locale and what the app should be rendered in. While ",(0,i.jsx)(n.code,{children:"defaultLocale"})," and ",(0,i.jsx)(n.code,{children:"defaultFormats"})," are for fallbacks or during development and represent the app's default. Notice how there is no ",(0,i.jsx)(n.code,{children:"defaultMessages"}),", that's because each ",(0,i.jsx)(n.a,{href:"#message-descriptor",children:"Message Descriptor"})," provides a ",(0,i.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultlocale-and-defaultformats",children:"defaultLocale and defaultFormats"}),"\n",(0,i.jsxs)(n.p,{children:["Default locale & formats for when a message is not translated (missing from ",(0,i.jsx)(n.code,{children:"messages"}),"). ",(0,i.jsx)(n.code,{children:"defaultLocale"})," should be the locale that ",(0,i.jsx)(n.code,{children:"defaultMessage"}),"s are declared in so that a sentence is coherent in a single locale. Without ",(0,i.jsx)(n.code,{children:"defaultLocale"})," and/or if it's set incorrectly, you might run into scenario where a sentence is in English but embedded date/time is in Spanish."]}),"\n",(0,i.jsx)(n.h3,{id:"textcomponent",children:"textComponent"}),"\n",(0,i.jsxs)(n.p,{children:["Provides a way to configure the default wrapper for React Intl's ",(0,i.jsx)(n.code,{children:"<Formatted*>"})," components. If not specified, ",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/fragments.html",children:(0,i.jsx)(n.code,{children:"<React.Fragment>"})})," is used. Before V3, ",(0,i.jsx)(n.code,{children:"span"})," was used instead; check the ",(0,i.jsx)(n.a,{href:"/docs/react-intl/upgrade-guide-3x",children:"migration guide"})," for more info."]}),"\n",(0,i.jsx)(n.h3,{id:"onerror",children:"onError"}),"\n",(0,i.jsxs)(n.p,{children:["Allows the user to provide a custom error handler. By default, error messages are logged using ",(0,i.jsx)(n.code,{children:"console.error"})," if ",(0,i.jsx)(n.code,{children:"NODE_ENV"})," is not set to ",(0,i.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"wraprichtextchunksinfragment",children:"wrapRichTextChunksInFragment"}),"\n",(0,i.jsxs)(n.p,{children:["When formatting rich text message, the output we produced is of type ",(0,i.jsx)(n.code,{children:"Array<string | React.ReactElement>"}),", which will trigger key error. This wraps the output in a single ",(0,i.jsx)(n.code,{children:"React.Fragment"})," to suppress that."]}),"\n",(0,i.jsx)(n.h3,{id:"defaultrichtextelements",children:"defaultRichTextElements"}),"\n",(0,i.jsxs)(n.p,{children:["A map of tag to rich text formatting function. This is meant to provide a centralized way to format common tags such as ",(0,i.jsx)(n.code,{children:"<b>"}),", ",(0,i.jsx)(n.code,{children:"<p>"}),"... or enforcing certain Design System in the codebase (e.g standardized ",(0,i.jsx)(n.code,{children:"<a>"})," or ",(0,i.jsx)(n.code,{children:"<button>"}),"...). See ",(0,i.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/issues/1752",children:"https://github.com/formatjs/formatjs/issues/1752"})," for more context."]}),"\n",(0,i.jsx)(n.h2,{id:"formatdate",children:"formatDate"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function formatDate(\n  value: number | Date | string,\n  options?: Intl.DateTimeFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a formatted date string. It expects a ",(0,i.jsx)(n.code,{children:"value"})," which can be parsed as a date (i.e., ",(0,i.jsx)(n.code,{children:"isFinite(new Date(value))"}),"), and accepts ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"DateTimeFormatOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"intl.formatDate(Date.now(), {\n  year: 'numeric',\n  month: 'numeric',\n  day: 'numeric',\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formattime",children:"formatTime"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function formatTime(\n  value: number | Date | string,\n  options?: Intl.DateTimeFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a formatted date string, but it differs from ",(0,i.jsx)(n.a,{href:"#formatdate",children:(0,i.jsx)(n.code,{children:"formatDate"})})," by having the following default options:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"{\n    hour: 'numeric',\n    minute: 'numeric',\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["It expects a ",(0,i.jsx)(n.code,{children:"value"})," which can be parsed as a date (i.e., ",(0,i.jsx)(n.code,{children:"isFinite(new Date(value))"}),"), and accepts ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"DateTimeFormatOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:'intl.formatTime(Date.now()) /* "4:03 PM" */\n'})}),"\n",(0,i.jsx)(n.h2,{id:"formatdatetimerange",children:"formatDateTimeRange"}),"\n",(0,i.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,i.jsxs)(n.p,{children:["This requires ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/formatRange",children:"Intl.DateTimeFormat.prototype.formatRange"})," which has limited browser support. Please use our ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-datetimeformat",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"function formatDateTimeRange(\n  from: number | Date | string,\n  to: number | Date | string,\n  options?: Intl.DateTimeFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a formatted date/time range string. Both ",(0,i.jsx)(n.code,{children:"from"})," & ",(0,i.jsx)(n.code,{children:"to"})," must be values which can be parsed as a date (i.e., ",(0,i.jsx)(n.code,{children:"isFinite(new Date(value))"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["It expects 2 values (a ",(0,i.jsx)(n.code,{children:"from"})," Date & a ",(0,i.jsx)(n.code,{children:"to"})," Date) and accepts ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"DateTimeFormatOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatDateTimeRange(new Date('2020-1-1'), new Date('2020-1-15'))\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formatrelativetime",children:"formatRelativeTime"}),"\n",(0,i.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,i.jsxs)(n.p,{children:["This requires ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"})," which has limited browser support. Please use our ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-relativetimeformat",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"type Unit =\n  | 'second'\n  | 'minute'\n  | 'hour'\n  | 'day'\n  | 'week'\n  | 'month'\n  | 'quarter'\n  | 'year'\n\ntype RelativeTimeFormatOptions = {\n  numeric?: 'always' | 'auto'\n  style?: 'long' | 'short' | 'narrow'\n}\n\nfunction formatRelativeTime(\n  value: number,\n  unit: Unit,\n  options?: Intl.RelativeTimeFormatOptions & {\n    format?: string\n  }\n): string\n"})}),"\n",(0,i.jsxs)(n.p,{children:['This function will return a formatted relative time string (e.g., "1 hour ago"). It expects a ',(0,i.jsx)(n.code,{children:"value"})," which is a number, a ",(0,i.jsx)(n.code,{children:"unit"})," and ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatRelativeTime(0)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatRelativeTime(-24, 'hour', {style: 'narrow'})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formatnumber",children:"formatNumber"}),"\n",(0,i.jsxs)(n.p,{children:["This function uses ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:(0,i.jsx)(n.code,{children:"Intl.NumberFormat"})})," options."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"function formatNumber(\n  value: number,\n  options?: Intl.NumberFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a formatted number string. It expects a ",(0,i.jsx)(n.code,{children:"value"})," which can be parsed as a number, and accepts ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"NumberFormatOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {style: 'currency', currency: 'USD'})\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Formatting Number using ",(0,i.jsx)(n.code,{children:"unit"})]})}),"\n",(0,i.jsxs)(n.p,{children:["Currently this is part of ES2020 ",(0,i.jsx)(n.a,{href:"https://tc39.es/ecma402/#numberformat-objects",children:"NumberFormat"}),".\nWe've provided a polyfill ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-numberformat",children:"here"})," and ",(0,i.jsx)(n.code,{children:"react-intl"})," types allow users to pass\nin a ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-numberformat#SupportedUnits",children:"sanctioned unit"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {\n  style: 'unit',\n  unit: 'kilobyte',\n  unitDisplay: 'narrow',\n})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {\n  unit: 'fahrenheit',\n  unitDisplay: 'long',\n  style: 'unit',\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formatplural",children:"formatPlural"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type PluralFormatOptions = {\n  type?: 'cardinal' | 'ordinal' = 'cardinal'\n}\n\nfunction formatPlural(\n  value: number,\n  options?: Intl.PluralFormatOptions\n): 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a plural category string: ",(0,i.jsx)(n.code,{children:'"zero"'}),", ",(0,i.jsx)(n.code,{children:'"one"'}),", ",(0,i.jsx)(n.code,{children:'"two"'}),", ",(0,i.jsx)(n.code,{children:'"few"'}),", ",(0,i.jsx)(n.code,{children:'"many"'}),", or ",(0,i.jsx)(n.code,{children:'"other"'}),". It expects a ",(0,i.jsx)(n.code,{children:"value"})," which can be parsed as a number, and accepts ",(0,i.jsx)(n.code,{children:"options"})," that conform to ",(0,i.jsx)(n.code,{children:"PluralFormatOptions"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This is a low-level utility whose output could be provided to a ",(0,i.jsx)(n.code,{children:"switch"})," statement to select a particular string to display."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(1)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(3, {style: 'ordinal'})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(4, {style: 'ordinal'})\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"multiple language support",type:"danger",children:(0,i.jsxs)(n.p,{children:["This function should only be used in apps that only need to support one language. If your app supports multiple languages use ",(0,i.jsx)(n.a,{href:"#formatmessage",children:(0,i.jsx)(n.code,{children:"formatMessage"})})," instead."]})}),"\n",(0,i.jsx)(n.h2,{id:"formatlist",children:"formatList"}),"\n",(0,i.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,i.jsxs)(n.p,{children:["This requires ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat",children:"Intl.ListFormat"})," which has limited browser support. Please use our ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-listformat",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type ListFormatOptions = {\n  type?: 'disjunction' | 'conjunction' | 'unit'\n  style?: 'long' | 'short' | 'narrow'\n}\n\nfunction formatList(\n  elements: (string | React.ReactNode)[],\n  options?: Intl.ListFormatOptions\n): string | React.ReactNode[]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function allows you to join list of things together in an i18n-safe way. For example, when the locale is ",(0,i.jsx)(n.code,{children:"en"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatList(['Me', 'myself', 'I'], {type: 'conjunction'})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatList(['5 hours', '3 minutes'], {type: 'unit'})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formatdisplayname",children:"formatDisplayName"}),"\n",(0,i.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,i.jsxs)(n.p,{children:["This requires ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames",children:"Intl.DisplayNames"})," which has limited browser support. Please use our ",(0,i.jsx)(n.a,{href:"/docs/polyfills/intl-displaynames",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type FormatDisplayNameOptions = {\n  style?: 'narrow' | 'short' | 'long'\n  type?: 'language' | 'region' | 'script' | 'currency'\n  fallback?: 'code' | 'none'\n}\n\nfunction formatDisplayName(\n  value: string | number | Record<string, unknown>,\n  options?: FormatDisplayNameOptions\n): string | undefined\n"})}),"\n",(0,i.jsx)(n.p,{children:"Usage examples:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"intl.formatDisplayName('zh-Hans-SG', {type: 'language'})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-15924 four letters script code to localized display name\nintl.formatDisplayName('Deva', {type: 'script'})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-4217 currency code to localized display name\nintl.formatDisplayName('CNY', {type: 'currency'})\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-3166 two letters region code to localized display name\nintl.formatDisplayName('UN', {type: 'region'})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"formatmessage",children:"formatMessage"}),"\n",(0,i.jsx)(n.h3,{id:"message-syntax",children:"Message Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["String/Message formatting is a paramount feature of React Intl and it builds on ",(0,i.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message Formatting"})," by using the ",(0,i.jsx)(n.a,{href:"/docs/core-concepts/icu-syntax",children:"ICU Message Syntax"}),". This message syntax allows for simple to complex messages to be defined, translated, and then formatted at runtime."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Simple Message:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello, {name}\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Complex Message:"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hello, {name}, you have {itemCount, plural,\n    =0 {no items}\n    one {# item}\n    other {# items}\n}.\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"See:"})," The ",(0,i.jsx)(n.a,{href:"/docs/core-concepts/icu-syntax",children:"Message Syntax Guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"message-descriptor",children:"Message Descriptor"}),"\n",(0,i.jsxs)(n.p,{children:["React Intl has a Message Descriptor concept which is used to define your app's default messages/strings and is passed into ",(0,i.jsx)(n.code,{children:"formatMessage"}),". The Message Descriptors work very well for providing the data necessary for having the strings/messages translated, and they contain the following properties:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"id"}),":"]})," A unique, stable identifier for the message"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"description"}),":"]})," Context for the translator about how it's used in the UI"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.code,{children:"defaultMessage"}),":"]})," The default message (probably in English)"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:"type MessageDescriptor = {\n  id: string\n  defaultMessage?: string\n  description?: string | object\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Extracting Message Descriptor",type:"info",children:(0,i.jsxs)(n.p,{children:["You can extract inline-declared messages from source files using ",(0,i.jsx)(n.a,{href:"/docs/getting-started/message-extraction",children:"our CLI"}),"."]})}),"\n",(0,i.jsx)(n.h3,{id:"message-formatting-fallbacks",children:"Message Formatting Fallbacks"}),"\n",(0,i.jsx)(n.p,{children:"The message formatting APIs go the extra mile to provide fallbacks for the common situations where formatting fails; at the very least a non-empty string should always be returned. Here's the message formatting fallback algorithm:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Lookup and format the translated message at ",(0,i.jsx)(n.code,{children:"id"}),", passed to ",(0,i.jsx)(n.code,{children:"<IntlProvider>"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fallback to formatting the ",(0,i.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fallback to source of translated message at ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fallback to source of ",(0,i.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Fallback to the literal message ",(0,i.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:'Above, "source" refers to using the template as is, without any substitutions made.'}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"type MessageFormatPrimitiveValue = string | number | boolean | null | undefined\nfunction formatMessage(\n  descriptor: MessageDescriptor,\n  values?: Record<string, MessageFormatPrimitiveValue>\n): string\nfunction formatMessage(\n  descriptor: MessageDescriptor,\n  values?: Record<\n    string,\n    MessageFormatPrimitiveValue | React.ReactElement | FormatXMLElementFn\n  >\n): string | React.ReactNode[]\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This function will return a formatted message string. It expects a ",(0,i.jsx)(n.code,{children:"MessageDescriptor"})," with at least an ",(0,i.jsx)(n.code,{children:"id"})," property, and accepts a shallow ",(0,i.jsx)(n.code,{children:"values"})," object which are used to fill placeholders in the message."]}),"\n",(0,i.jsxs)(n.p,{children:["If a translated message with the ",(0,i.jsx)(n.code,{children:"id"})," has been passed to the ",(0,i.jsx)(n.code,{children:"<IntlProvider>"})," via its ",(0,i.jsx)(n.code,{children:"messages"})," prop it will be formatted, otherwise it will fallback to formatting ",(0,i.jsx)(n.code,{children:"defaultMessage"}),". See: ",(0,i.jsx)(n.a,{href:"#message-formatting-fallbacks",children:"Message Formatting Fallbacks"})," for more details."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, {name}!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {name: 'Eric'})\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["with ",(0,i.jsx)(n.code,{children:"ReactElement"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, {name}!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {name: <b>Eric</b>})\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"with rich text formatting"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, <bold>{name}</bold>!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {\n    name: 'Eric',\n    bold: str => <b>{str}</b>,\n  })\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The message we defined using ",(0,i.jsx)(n.a,{href:"#definemessages",children:(0,i.jsx)(n.code,{children:"defineMessages"})})," to support extraction via ",(0,i.jsx)(n.code,{children:"babel-plugin-formatjs"}),", but it doesn't have to be if you're not using the Babel plugin."]}),"\n",(0,i.jsx)(n.admonition,{title:"simple message",type:"info",children:(0,i.jsxs)(n.p,{children:["Messages can be simple strings ",(0,i.jsx)(n.em,{children:"without"})," placeholders, and that's the most common type of message."]})}),"\n",(0,i.jsx)(n.h2,{id:"definemessagesdefinemessage",children:"defineMessages/defineMessage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface MessageDescriptor {\n  id?: string\n  description?: string | object\n  defaultMessage?: string\n}\n\nfunction defineMessages(\n  messageDescriptors: Record<string, MessageDescriptor>\n): Record<string, MessageDescriptor>\n\nfunction defineMessage(messageDescriptor: MessageDescriptor): MessageDescriptor\n"})}),"\n",(0,i.jsxs)(n.p,{children:["These functions are exported by the ",(0,i.jsx)(n.code,{children:"react-intl"})," package and are simply a ",(0,i.jsx)(n.em,{children:"hook"})," for our CLI & babel/TS plugin to use when compiling default messages defined in JavaScript source files. This function simply returns the Message Descriptor map object that's passed-in."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"import {defineMessages, defineMessage} from 'react-intl'\n\nconst messages = defineMessages({\n  greeting: {\n    id: 'app.home.greeting',\n    description: 'Message to greet the user.',\n    defaultMessage: 'Hello, {name}!',\n  },\n})\n\nconst msg = defineMessage({\n  id: 'single',\n  defaultMessage: 'single message',\n  description: 'header',\n})\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},972:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(7378);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);