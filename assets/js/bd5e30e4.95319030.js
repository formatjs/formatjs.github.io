"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2277],{6190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"intl","title":"Core FormatJS Intl","description":"This library contains core intl API that is used by react-intl.","source":"@site/docs/intl.md","sourceDirName":".","slug":"/intl","permalink":"/docs/intl","draft":false,"unlisted":false,"editUrl":"https://github.com/formatjs/formatjs/edit/main/website/docs/intl.md","tags":[],"version":"current","lastUpdatedBy":"longlho","lastUpdatedAt":1731909055000,"frontMatter":{"id":"intl","title":"Core FormatJS Intl"},"sidebar":"api","previous":{"title":"Upgrade Guide (v1 -> v2)","permalink":"/docs/react-intl/upgrade-guide-2x"},"next":{"title":"Vue Plugin for formatjs","permalink":"/docs/vue-intl"}}');var a=t(6106),r=t(2036),i=t(2944),l=t(2971);const o={id:"intl",title:"Core FormatJS Intl"},c=void 0,d={},h=[{value:"Installation",id:"installation",level:2},{value:"The <code>intl</code> object",id:"the-intl-object",level:2},{value:"createIntl",id:"createintl",level:2},{value:"createIntlCache",id:"createintlcache",level:2},{value:"IntlShape",id:"intlshape",level:2},{value:"locale, formats, and messages",id:"locale-formats-and-messages",level:3},{value:"defaultLocale and defaultFormats",id:"defaultlocale-and-defaultformats",level:3},{value:"onError",id:"onerror",level:3},{value:"defaultRichTextElements",id:"defaultrichtextelements",level:3},{value:"fallbackOnEmptyString",id:"fallbackonemptystring",level:3},{value:"formatDate",id:"formatdate",level:2},{value:"formatTime",id:"formattime",level:2},{value:"formatRelativeTime",id:"formatrelativetime",level:2},{value:"formatNumber",id:"formatnumber",level:2},{value:"formatPlural",id:"formatplural",level:2},{value:"formatList",id:"formatlist",level:2},{value:"formatDisplayName",id:"formatdisplayname",level:2},{value:"formatMessage",id:"formatmessage",level:2},{value:"Message Syntax",id:"message-syntax",level:3},{value:"Message Descriptor",id:"message-descriptor",level:3},{value:"Message Formatting Fallbacks",id:"message-formatting-fallbacks",level:3},{value:"Usage",id:"usage",level:3},{value:"defineMessages/defineMessage",id:"definemessagesdefinemessage",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["This library contains core intl API that is used by ",(0,a.jsx)(n.code,{children:"react-intl"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n",(0,a.jsxs)(i.A,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,a.jsx)(l.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm i -S @formatjs/intl\n"})})}),(0,a.jsx)(l.A,{value:"yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn add @formatjs/intl\n"})})})]}),"\n",(0,a.jsxs)(n.h2,{id:"the-intl-object",children:["The ",(0,a.jsx)(n.code,{children:"intl"})," object"]}),"\n",(0,a.jsxs)(n.p,{children:["The core of ",(0,a.jsx)(n.code,{children:"@formatjs/intl"})," is the ",(0,a.jsx)(n.code,{children:"intl"})," object (of type ",(0,a.jsx)(n.a,{href:"#intlshape",children:(0,a.jsx)(n.code,{children:"IntlShape"})}),"), which is the instance to store a cache of all ",(0,a.jsx)(n.code,{children:"Intl.*"})," APIs, configurations, compiled messages and such. The lifecycle of the ",(0,a.jsx)(n.code,{children:"intl"})," object is typically tied to the ",(0,a.jsx)(n.code,{children:"locale"})," & the list of ",(0,a.jsx)(n.code,{children:"messages"})," that it contains, which means when you switch ",(0,a.jsx)(n.code,{children:"locale"}),", this object should be recreated."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"intl"})," object should be reused as much as possible for performance."]})}),"\n",(0,a.jsx)(n.h2,{id:"createintl",children:"createIntl"}),"\n",(0,a.jsxs)(n.p,{children:["This allows you to create an ",(0,a.jsx)(n.code,{children:"IntlShape"})," object that contains all ",(0,a.jsx)(n.code,{children:"format*"})," methods. For example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"import {createIntl, createIntlCache} from '@formatjs/intl'\n\n// This is optional but highly recommended\n// since it prevents memory leak\nconst cache = createIntlCache()\n\nconst intl = createIntl(\n  {\n    locale: 'fr-FR',\n    messages: {},\n  },\n  cache\n)\n\n// Call imperatively\nintl.formatNumber(20)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"createintlcache",children:"createIntlCache"}),"\n",(0,a.jsxs)(n.p,{children:["Creates a cache instance to be used globally across locales. This memoizes previously created ",(0,a.jsx)(n.code,{children:"Intl.*"})," constructors for performance and is only an in-memory cache."]}),"\n",(0,a.jsx)(n.h2,{id:"intlshape",children:"IntlShape"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface IntlConfig {\n  locale: string\n  timeZone?: string\n  fallbackOnEmptyString?: boolean\n  formats: CustomFormats\n  messages: Record<string, string> | Record<string, MessageFormatElement[]>\n  defaultLocale: string\n  defaultRichTextElements?: Record<string, FormatXMLElementFn<React.ReactNode>>\n  defaultFormats: CustomFormats\n  onError(err: string): void\n  onWarn(warning: string): void\n}\n\ninterface IntlFormatters {\n  formatDate(value: number | Date | string, opts?: FormatDateOptions): string\n  formatTime(value: number | Date | string, opts?: FormatDateOptions): string\n  formatDateToParts(\n    value: number | Date | string,\n    opts?: FormatDateOptions\n  ): Intl.DateTimeFormatPart[]\n  formatTimeToParts(\n    value: number | Date | string,\n    opts?: FormatDateOptions\n  ): Intl.DateTimeFormatPart[]\n  formatRelativeTime(\n    value: number,\n    unit?: FormattableUnit,\n    opts?: FormatRelativeTimeOptions\n  ): string\n  formatNumber(value: number, opts?: FormatNumberOptions): string\n  formatNumberToParts(\n    value: number,\n    opts?: FormatNumberOptions\n  ): Intl.NumberFormatPart[]\n  formatPlural(\n    value: number | string,\n    opts?: FormatPluralOptions\n  ): ReturnType<Intl.PluralRules['select']>\n  formatMessage(\n    descriptor: MessageDescriptor,\n    values?: Record<string, PrimitiveType | FormatXMLElementFn<string, string>>\n  ): string\n  formatMessage(\n    descriptor: MessageDescriptor,\n    values?: Record<string, PrimitiveType | T | FormatXMLElementFn<T, R>>\n  ): R\n  formatList(values: Array<string>, opts?: FormatListOptions): string\n  formatList(\n    values: Array<string | T>,\n    opts?: FormatListOptions\n  ): T | string | Array<string | T>\n  formatListToParts(values: Array<string | T>, opts?: FormatListOptions): Part[]\n  formatDisplayName(\n    value: string,\n    opts?: FormatDisplayNameOptions\n  ): string | undefined\n}\n\ntype IntlShape = IntlConfig & IntlFormatters\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The definition above shows what the ",(0,a.jsx)(n.code,{children:"intl"})," object will look like. It's made up of two parts:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"IntlConfig"}),":"]})," The intl metadata passed as props into the parent ",(0,a.jsx)(n.code,{children:"<IntlProvider>"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"IntlFormatters"}),":"]})," The imperative formatting API described below."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"locale-formats-and-messages",children:"locale, formats, and messages"}),"\n",(0,a.jsxs)(n.p,{children:["The user's current locale and what the app should be rendered in. While ",(0,a.jsx)(n.code,{children:"defaultLocale"})," and ",(0,a.jsx)(n.code,{children:"defaultFormats"})," are for fallbacks or during development and represent the app's default. Notice how there is no ",(0,a.jsx)(n.code,{children:"defaultMessages"}),", that's because each ",(0,a.jsx)(n.a,{href:"#message-descriptor",children:"Message Descriptor"})," provides a ",(0,a.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"defaultlocale-and-defaultformats",children:"defaultLocale and defaultFormats"}),"\n",(0,a.jsxs)(n.p,{children:["Default locale & formats for when a message is not translated (missing from ",(0,a.jsx)(n.code,{children:"messages"}),"). ",(0,a.jsx)(n.code,{children:"defaultLocale"})," should be the locale that ",(0,a.jsx)(n.code,{children:"defaultMessage"}),"s are declared in so that a sentence is coherent in a single locale. Without ",(0,a.jsx)(n.code,{children:"defaultLocale"})," and/or if it's set incorrectly, you might run into scenario where a sentence is in English but embedded date/time is in Spanish."]}),"\n",(0,a.jsx)(n.h3,{id:"onerror",children:"onError"}),"\n",(0,a.jsxs)(n.p,{children:["Allows the user to provide a custom error handler. By default, error messages are logged using ",(0,a.jsx)(n.code,{children:"console.error"})," if ",(0,a.jsx)(n.code,{children:"NODE_ENV"})," is not set to ",(0,a.jsx)(n.code,{children:"production"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"defaultrichtextelements",children:"defaultRichTextElements"}),"\n",(0,a.jsxs)(n.p,{children:["A map of tag to rich text formatting function. This is meant to provide a centralized way to format common tags such as ",(0,a.jsx)(n.code,{children:"<b>"}),", ",(0,a.jsx)(n.code,{children:"<p>"}),"... or enforcing certain Design System in the codebase (e.g standardized ",(0,a.jsx)(n.code,{children:"<a>"})," or ",(0,a.jsx)(n.code,{children:"<button>"}),"...). See ",(0,a.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/issues/1752",children:"https://github.com/formatjs/formatjs/issues/1752"})," for more context."]}),"\n",(0,a.jsx)(n.h3,{id:"fallbackonemptystring",children:"fallbackOnEmptyString"}),"\n",(0,a.jsxs)(n.p,{children:["Defaults to ",(0,a.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This boolean option can be useful if you want to intentionally provide empty values for certain locales via empty strings. When ",(0,a.jsx)(n.code,{children:"fallbackOnEmptyString"})," is ",(0,a.jsx)(n.code,{children:"false"}),', empty strings will be returned instead of triggering the fallback procedure. This behaviour can be leveraged to "skip" content in specific locales.']}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"https://github.com/formatjs/formatjs/issues/607",children:"this issue"})," for more context."]}),"\n",(0,a.jsx)(n.h2,{id:"formatdate",children:"formatDate"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function formatDate(\n  value: number | Date,\n  options?: Intl.DateTimeFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function will return a formatted date string. It expects a ",(0,a.jsx)(n.code,{children:"value"})," which can be parsed as a date (i.e., ",(0,a.jsx)(n.code,{children:"isFinite(new Date(value))"}),"), and accepts ",(0,a.jsx)(n.code,{children:"options"})," that conform to ",(0,a.jsx)(n.code,{children:"DateTimeFormatOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"intl.formatDate(Date.now(), {\n  year: 'numeric',\n  month: 'numeric',\n  day: 'numeric',\n})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formattime",children:"formatTime"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"function formatTime(\n  value: number | Date,\n  options?: Intl.DateTimeFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function will return a formatted date string, but it differs from ",(0,a.jsx)(n.a,{href:"#formatdate",children:(0,a.jsx)(n.code,{children:"formatDate"})})," by having the following default options:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"{\n    hour: 'numeric',\n    minute: 'numeric',\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["It expects a ",(0,a.jsx)(n.code,{children:"value"})," which can be parsed as a date (i.e., ",(0,a.jsx)(n.code,{children:"isFinite(new Date(value))"}),"), and accepts ",(0,a.jsx)(n.code,{children:"options"})," that conform to ",(0,a.jsx)(n.code,{children:"DateTimeFormatOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:'intl.formatTime(Date.now()) // "4:03 PM"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"formatrelativetime",children:"formatRelativeTime"}),"\n",(0,a.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,a.jsxs)(n.p,{children:["This requires ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat",children:"Intl.RelativeTimeFormat"})," which has limited browser support. Please use our ",(0,a.jsx)(n.a,{href:"/docs/polyfills/intl-relativetimeformat",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type Unit =\n  | 'second'\n  | 'minute'\n  | 'hour'\n  | 'day'\n  | 'week'\n  | 'month'\n  | 'quarter'\n  | 'year'\n\ntype RelativeTimeFormatOptions = {\n  numeric?: 'always' | 'auto'\n  style?: 'long' | 'short' | 'narrow'\n}\n\nfunction formatRelativeTime(\n  value: number,\n  unit: Unit,\n  options?: Intl.RelativeTimeFormatOptions & {\n    format?: string\n  }\n): string\n"})}),"\n",(0,a.jsxs)(n.p,{children:['This function will return a formatted relative time string (e.g., "1 hour ago"). It expects a ',(0,a.jsx)(n.code,{children:"value"})," which is a number, a ",(0,a.jsx)(n.code,{children:"unit"})," and ",(0,a.jsx)(n.code,{children:"options"})," that conform to ",(0,a.jsx)(n.code,{children:"Intl.RelativeTimeFormatOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatRelativeTime(0)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatRelativeTime(-24, 'hour', {style: 'narrow'})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formatnumber",children:"formatNumber"}),"\n",(0,a.jsxs)(n.p,{children:["This function uses ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat",children:(0,a.jsx)(n.code,{children:"Intl.NumberFormat"})})," options."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"function formatNumber(\n  value: number,\n  options?: Intl.NumberFormatOptions & {format?: string}\n): string\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function will return a formatted number string. It expects a ",(0,a.jsx)(n.code,{children:"value"})," which can be parsed as a number, and accepts ",(0,a.jsx)(n.code,{children:"options"})," that conform to ",(0,a.jsx)(n.code,{children:"NumberFormatOptions"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {style: 'currency', currency: 'USD'})\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsxs)(n.strong,{children:["Formatting Number using ",(0,a.jsx)(n.code,{children:"unit"})]})}),"\n",(0,a.jsxs)(n.p,{children:["Currently this is part of ES2020 ",(0,a.jsx)(n.a,{href:"https://tc39.es/ecma402/#numberformat-objects",children:"NumberFormat"}),".\nWe've provided a polyfill ",(0,a.jsx)(n.a,{href:"/docs/polyfills/intl-numberformat",children:"here"})," and ",(0,a.jsx)(n.code,{children:"@formatjs/intl"})," types allow users to pass\nin a ",(0,a.jsx)(n.a,{href:"/docs/polyfills/intl-numberformat#SupportedUnits",children:"sanctioned unit"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {\n  style: 'unit',\n  unit: 'kilobyte',\n  unitDisplay: 'narrow',\n})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatNumber(1000, {\n  unit: 'fahrenheit',\n  unitDisplay: 'long',\n  style: 'unit',\n})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formatplural",children:"formatPlural"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type PluralFormatOptions = {\n  type?: 'cardinal' | 'ordinal' = 'cardinal'\n}\n\nfunction formatPlural(\n  value: number,\n  options?: Intl.PluralFormatOptions\n): 'zero' | 'one' | 'two' | 'few' | 'many' | 'other'\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function will return a plural category string: ",(0,a.jsx)(n.code,{children:'"zero"'}),", ",(0,a.jsx)(n.code,{children:'"one"'}),", ",(0,a.jsx)(n.code,{children:'"two"'}),", ",(0,a.jsx)(n.code,{children:'"few"'}),", ",(0,a.jsx)(n.code,{children:'"many"'}),", or ",(0,a.jsx)(n.code,{children:'"other"'}),". It expects a ",(0,a.jsx)(n.code,{children:"value"})," which can be parsed as a number, and accepts ",(0,a.jsx)(n.code,{children:"options"})," that conform to ",(0,a.jsx)(n.code,{children:"PluralFormatOptions"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["This is a low-level utility whose output could be provided to a ",(0,a.jsx)(n.code,{children:"switch"})," statement to select a particular string to display."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(1)\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(3, {style: 'ordinal'})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatPlural(4, {style: 'ordinal'})\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"multiple language support",type:"danger",children:(0,a.jsxs)(n.p,{children:["This function should only be used in apps that only need to support one language. If your app supports multiple languages use ",(0,a.jsx)(n.a,{href:"#formatmessage",children:(0,a.jsx)(n.code,{children:"formatMessage"})})," instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"formatlist",children:"formatList"}),"\n",(0,a.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,a.jsxs)(n.p,{children:["This requires ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat",children:"Intl.ListFormat"})," which has limited browser support. Please use our ",(0,a.jsx)(n.a,{href:"/docs/polyfills/intl-listformat",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type ListFormatOptions = {\n  type?: 'disjunction' | 'conjunction' | 'unit'\n  style?: 'long' | 'short' | 'narrow'\n}\n\nfunction formatList(\n  elements: (string | React.ReactNode)[],\n  options?: Intl.ListFormatOptions\n): string | React.ReactNode[]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function allows you to join list of things together in an i18n-safe way. For example, when the locale is ",(0,a.jsx)(n.code,{children:"en"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatList(['Me', 'myself', 'I'], {type: 'conjunction'})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:"live",live:!0,children:"intl.formatList(['5 hours', '3 minutes'], {type: 'unit'})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formatdisplayname",children:"formatDisplayName"}),"\n",(0,a.jsx)(n.admonition,{title:"browser support",type:"caution",children:(0,a.jsxs)(n.p,{children:["This requires ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames",children:"Intl.DisplayNames"})," which has limited browser support. Please use our ",(0,a.jsx)(n.a,{href:"/docs/polyfills/intl-displaynames",children:"polyfill"})," if you plan to support them."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type FormatDisplayNameOptions = {\n  style?: 'narrow' | 'short' | 'long'\n  type?: 'language' | 'region' | 'script' | 'currency'\n  fallback?: 'code' | 'none'\n}\n\nfunction formatDisplayName(\n  value: string | number | Record<string, unknown>,\n  options: FormatDisplayNameOptions\n): string | undefined\n"})}),"\n",(0,a.jsx)(n.p,{children:"Usage examples:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"intl.formatDisplayName('zh-Hans-SG', {type: 'language'})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-15924 four letters script code to localized display name\nintl.formatDisplayName('Deva', {type: 'script'})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-4217 currency code to localized display name\nintl.formatDisplayName('CNY', {type: 'currency'})\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"// ISO-3166 two letters region code to localized display name\nintl.formatDisplayName('UN', {type: 'region'})\n"})}),"\n",(0,a.jsx)(n.h2,{id:"formatmessage",children:"formatMessage"}),"\n",(0,a.jsx)(n.h3,{id:"message-syntax",children:"Message Syntax"}),"\n",(0,a.jsxs)(n.p,{children:["String/Message formatting is a paramount feature of React Intl and it builds on ",(0,a.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/format_parse/messages",children:"ICU Message Formatting"})," by using the ",(0,a.jsx)(n.a,{href:"/docs/core-concepts/icu-syntax",children:"ICU Message Syntax"}),". This message syntax allows for simple to complex messages to be defined, translated, and then formatted at runtime."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Simple Message:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, {name}\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Complex Message:"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"Hello, {name}, you have {itemCount, plural,\n    =0 {no items}\n    one {# item}\n    other {# items}\n}.\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"See:"})," The ",(0,a.jsx)(n.a,{href:"/docs/core-concepts/icu-syntax",children:"Message Syntax Guide"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"message-descriptor",children:"Message Descriptor"}),"\n",(0,a.jsxs)(n.p,{children:["React Intl has a Message Descriptor concept which is used to define your app's default messages/strings and is passed into ",(0,a.jsx)(n.code,{children:"formatMessage"}),". The Message Descriptors work very well for providing the data necessary for having the strings/messages translated, and they contain the following properties:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"id"}),":"]})," A unique, stable identifier for the message"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"description"}),":"]})," Context for the translator about how it's used in the UI"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.code,{children:"defaultMessage"}),":"]})," The default message (probably in English)"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"type MessageDescriptor = {\n  id: string\n  defaultMessage?: string\n  description?: string | object\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Extracting Message Descriptor",type:"info",children:(0,a.jsxs)(n.p,{children:["You can extract inline-declared messages from source files using ",(0,a.jsx)(n.a,{href:"/docs/getting-started/message-extraction",children:"our CLI"}),"."]})}),"\n",(0,a.jsx)(n.h3,{id:"message-formatting-fallbacks",children:"Message Formatting Fallbacks"}),"\n",(0,a.jsx)(n.p,{children:"The message formatting APIs go the extra mile to provide fallbacks for the common situations where formatting fails; at the very least a non-empty string should always be returned. Here's the message formatting fallback algorithm:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Lookup and format the translated message at ",(0,a.jsx)(n.code,{children:"id"}),", passed to ",(0,a.jsx)(n.code,{children:"<IntlProvider>"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Fallback to formatting the ",(0,a.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Fallback to source of translated message at ",(0,a.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Fallback to source of ",(0,a.jsx)(n.code,{children:"defaultMessage"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Fallback to the literal message ",(0,a.jsx)(n.code,{children:"id"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:'Above, "source" refers to using the template as is, without any substitutions made.'}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"type MessageFormatPrimitiveValue = string | number | boolean | null | undefined\nfunction formatMessage(\n  descriptor: MessageDescriptor,\n  values?: Record<string, MessageFormatPrimitiveValue>\n): string\nfunction formatMessage(\n  descriptor: MessageDescriptor,\n  values?: Record<\n    string,\n    MessageFormatPrimitiveValue | React.ReactElement | FormatXMLElementFn\n  >\n): string | React.ReactNode[]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This function will return a formatted message string. It expects a ",(0,a.jsx)(n.code,{children:"MessageDescriptor"})," with at least an ",(0,a.jsx)(n.code,{children:"id"})," property, and accepts a shallow ",(0,a.jsx)(n.code,{children:"values"})," object which are used to fill placeholders in the message."]}),"\n",(0,a.jsxs)(n.p,{children:["If a translated message with the ",(0,a.jsx)(n.code,{children:"id"})," has been passed to the ",(0,a.jsx)(n.code,{children:"<IntlProvider>"})," via its ",(0,a.jsx)(n.code,{children:"messages"})," prop it will be formatted, otherwise it will fallback to formatting ",(0,a.jsx)(n.code,{children:"defaultMessage"}),". See: ",(0,a.jsx)(n.a,{href:"#message-formatting-fallbacks",children:"Message Formatting Fallbacks"})," for more details."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, {name}!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {name: 'Eric'})\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["with ",(0,a.jsx)(n.code,{children:"ReactElement"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, {name}!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {name: <b>Eric</b>})\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"with rich text formatting"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:"live",live:!0,children:"function () {\n  const messages = defineMessages({\n    greeting: {\n      id: 'app.greeting',\n      defaultMessage: 'Hello, <bold>{name}</bold>!',\n      description: 'Greeting to welcome the user to the app',\n    },\n  })\n\n  return intl.formatMessage(messages.greeting, {\n    name: 'Eric',\n    bold: str => <b>{str}</b>,\n  })\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The message we defined using ",(0,a.jsx)(n.a,{href:"#definemessages",children:(0,a.jsx)(n.code,{children:"defineMessages"})})," to support extraction via ",(0,a.jsx)(n.code,{children:"babel-plugin-formatjs"}),", but it doesn't have to be if you're not using the Babel plugin."]}),"\n",(0,a.jsx)(n.admonition,{title:"simple message",type:"info",children:(0,a.jsxs)(n.p,{children:["Messages can be simple strings ",(0,a.jsx)(n.em,{children:"without"})," placeholders, and that's the most common type of message."]})}),"\n",(0,a.jsx)(n.h2,{id:"definemessagesdefinemessage",children:"defineMessages/defineMessage"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"interface MessageDescriptor {\n  id?: string\n  description?: string | object\n  defaultMessage?: string\n}\n\nfunction defineMessages(\n  messageDescriptors: Record<string, MessageDescriptor>\n): Record<string, MessageDescriptor>\n\nfunction defineMessage(messageDescriptor: MessageDescriptor): MessageDescriptor\n"})}),"\n",(0,a.jsxs)(n.p,{children:["These functions are exported by the ",(0,a.jsx)(n.code,{children:"@formatjs/intl"})," package and are simply a ",(0,a.jsx)(n.em,{children:"hook"})," for our CLI & babel/TS plugin to use when compiling default messages defined in JavaScript source files. This function simply returns the Message Descriptor map object that's passed-in."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import {defineMessages, defineMessage} from '@formatjs/intl'\n\nconst messages = defineMessages({\n  greeting: {\n    id: 'app.home.greeting',\n    description: 'Message to greet the user.',\n    defaultMessage: 'Hello, {name}!',\n  },\n})\n\nconst msg = defineMessage({\n  id: 'single',\n  defaultMessage: 'single message',\n  description: 'header',\n})\n"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},2971:(e,n,t)=>{t.d(n,{A:()=>i});t(7378);var s=t(3372);const a={tabItem:"tabItem_G3IM"};var r=t(6106);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:t,children:n})}},2944:(e,n,t)=>{t.d(n,{A:()=>w});var s=t(7378),a=t(3372),r=t(5856),i=t(505),l=t(3031),o=t(7517),c=t(6642),d=t(6223);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=p({queryString:t,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),x=(()=>{const e=c??g;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,r]),tabValues:r}}var f=t(2069);const x={tabList:"tabList_wHRw",tabItem:"tabItem_YftW"};var j=t(6106);function b(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=l[t].value;a!==s&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:d,...r,className:(0,a.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(b,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function w(e){const n=(0,f.default)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},2036:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(7378);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);