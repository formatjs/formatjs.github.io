(self.webpackChunk=self.webpackChunk||[]).push([[9742],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8215:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(7294);const r=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(7294),r=a(9443);const o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var i=a(6010);const l="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,m=39;const d=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,d=e.values,c=e.groupId,u=e.className,f=o(),h=f.tabGroupChoices,k=f.setTabGroupChoices,g=(0,n.useState)(r),N=g[0],v=g[1],b=n.Children.toArray(e.children),C=[];if(null!=c){var y=h[c];null!=y&&y!==N&&d.some((function(e){return e.value===y}))&&v(y)}var x=function(e){var t=e.currentTarget,a=C.indexOf(t),n=d[a].value;v(n),null!=c&&(k(c,n),setTimeout((function(){var e,a,n,r,o,i,l,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,p=i.innerWidth,a>=0&&o<=p&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case m:var n=C.indexOf(e.target)+1;a=C[n]||C[0];break;case p:var r=C.indexOf(e.target)-1;a=C[r]||C[C.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},u)},d.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:w,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},9443:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=(0,a(7294).createContext)(void 0)},3551:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>p,contentTitle:()=>m,metadata:()=>d,toc:()=>c,default:()=>f});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=a(5064),l=a(8215),s=["components"],p={id:"cli",title:"CLI"},m=void 0,d={unversionedId:"tooling/cli",id:"tooling/cli",isDocsHomePage:!1,title:"CLI",description:"Installation",source:"@site/docs/tooling/cli.md",sourceDirName:"tooling",slug:"/tooling/cli",permalink:"/docs/tooling/cli",editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/tooling/cli.md",version:"current",frontMatter:{id:"cli",title:"CLI"},sidebar:"tooling",next:{title:"eslint-plugin-formatjs",permalink:"/docs/tooling/linter"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Extraction",id:"extraction",children:[{value:"<code>--format [path]</code>",id:"--format-path",children:[]},{value:"<code>--out-file [path]</code>",id:"--out-file-path",children:[]},{value:"<code>--id-interpolation-pattern [pattern]</code>",id:"--id-interpolation-pattern-pattern",children:[]},{value:"<code>--extract-source-location</code>",id:"--extract-source-location",children:[]},{value:"<code>--additional-component-names [comma-separated-names]</code>",id:"--additional-component-names-comma-separated-names",children:[]},{value:"<code>--additional-function-names [comma-separated-names]</code>",id:"--additional-function-names-comma-separated-names",children:[]},{value:"<code>--output-empty-json</code>",id:"--output-empty-json",children:[]},{value:"<code>--ignore [files]</code>",id:"--ignore-files",children:[]},{value:"<code>--throws</code>",id:"--throws",children:[]},{value:"<code>--pragma [pragma]</code>",id:"--pragma-pragma",children:[]},{value:"<code>--flatten</code>",id:"--flatten",children:[]}]},{value:"Compilation",id:"compilation",children:[{value:"<code>--format [path]</code>",id:"--format-path-1",children:[]},{value:"<code>--out-file &lt;output&gt;</code>",id:"--out-file-output",children:[]},{value:"<code>--ast</code>",id:"--ast",children:[]},{value:"<code>--pseudo-locale &lt;pseudoLocale&gt;</code>",id:"--pseudo-locale-pseudolocale",children:[]}]},{value:"Folder Compilation",id:"folder-compilation",children:[{value:"<code>--format [path]</code>",id:"--format-path-2",children:[]},{value:"<code>--ast</code>",id:"--ast-1",children:[]},{value:"<code>--skip-errors</code>",id:"--skip-errors",children:[]}]},{value:"Builtin Formatters",id:"builtin-formatters",children:[]},{value:"Custom Formatters",id:"custom-formatters",children:[]},{value:"Node API",id:"node-api",children:[{value:"Extraction",id:"extraction-1",children:[]},{value:"Compilation",id:"compilation-1",children:[]},{value:"Custom Formatter",id:"custom-formatter",children:[]}]}],u={toc:c};function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)(i.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm i -D @formatjs/cli\n"))),(0,o.kt)(l.Z,{value:"yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add -D @formatjs/cli\n")))),(0,o.kt)("p",null,"Add the following command to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,o.kt)("inlineCode",{parentName:"p"},"scripts"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "extract": "formatjs extract",\n    "compile": "formatjs compile"\n  }\n}\n')),(0,o.kt)("p",null,"We've built ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@formatjs/cli"},"https://www.npmjs.com/package/@formatjs/cli")," that helps you extract messages from a list of files. It uses ",(0,o.kt)("a",{parentName:"p",href:"/docs/tooling/ts-transformer"},(0,o.kt)("inlineCode",{parentName:"a"},"@formatjs/ts-transformer"))," under the hood and should be able to extract messages if you're declaring using 1 of the mechanisms below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {defineMessages, defineMessage} from 'react-intl'\n\ndefineMessages({\n  foo: {\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  },\n})\n\ndefineMessage({\n  id: 'single',\n  defaultMessage: 'single message',\n  description: 'header',\n})\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {FormattedMessage} from \'react-intl\'\n;<FormattedMessage id="foo" defaultMessage="foo" description="bar" />\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function Comp(props) {\n  const {intl} = props\n  return intl.formatMessage({\n    // The whole `intl.formatMessage` is required so we can extract\n    id: 'foo',\n    defaultMessage: 'foo',\n    description: 'bar',\n  })\n}\n")),(0,o.kt)("h2",{id:"extraction"},"Extraction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"formatjs extract --help\n# Usage: formatjs extract [options] [files...]\n\n# Extract string messages from React components that use react-intl.\n# The input language is expected to be TypeScript or ES2017 with JSX.\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'formatjs extract "src/**/*.{ts,tsx,vue}" --out-file lang.json\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You should always quote (",(0,o.kt)("inlineCode",{parentName:"p"},'"')," or ",(0,o.kt)("inlineCode",{parentName:"p"},"'"),") your glob pattern (like ",(0,o.kt)("inlineCode",{parentName:"p"},'"src/**/*"'),") to avoid auto shell expansion of those glob, which varies depending on your shell (",(0,o.kt)("inlineCode",{parentName:"p"},"zsh")," vs ",(0,o.kt)("inlineCode",{parentName:"p"},"fish")," vs ",(0,o.kt)("inlineCode",{parentName:"p"},"bash"),")."))),(0,o.kt)("h3",{id:"--format-path"},(0,o.kt)("inlineCode",{parentName:"h3"},"--format [path]")),(0,o.kt)("p",null,"Path to a formatter file that controls the shape of JSON file from ",(0,o.kt)("inlineCode",{parentName:"p"},"--out-file"),".\nThe formatter file must export a function called ",(0,o.kt)("inlineCode",{parentName:"p"},"format")," with the signature."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type FormatFn = <T = Record<string, MessageDescriptor>>(\n  msgs: Record<string, MessageDescriptor>\n) => T\n")),(0,o.kt)("p",null,"This is especially useful to convert from our extracted format to a TMS-specific format."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/tree/main/packages/cli/src/formatters"},"builtin formatters")," for examples."),(0,o.kt)("h3",{id:"--out-file-path"},(0,o.kt)("inlineCode",{parentName:"h3"},"--out-file [path]")),(0,o.kt)("p",null,"The target file path where the plugin will output an aggregated ",(0,o.kt)("inlineCode",{parentName:"p"},".json")," file of allthe translations from the ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," supplied. This flag will ignore ",(0,o.kt)("inlineCode",{parentName:"p"},"--messages-dir")),(0,o.kt)("h3",{id:"--id-interpolation-pattern-pattern"},(0,o.kt)("inlineCode",{parentName:"h3"},"--id-interpolation-pattern [pattern]")),(0,o.kt)("p",null,"If certain message descriptors don't have id, this ",(0,o.kt)("inlineCode",{parentName:"p"},"pattern")," will be used to automatically generate IDs for them. Default to ",(0,o.kt)("inlineCode",{parentName:"p"},"[sha512:contenthash:base64:6]"),". See ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options"},"nodejs crypto createHash")," for hash algorithms & ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings"},"nodejs buffer docs")," for digest encodings."),(0,o.kt)("h3",{id:"--extract-source-location"},(0,o.kt)("inlineCode",{parentName:"h3"},"--extract-source-location")),(0,o.kt)("p",null,"Whether the metadata about the location of the message in the source file should be extracted. If ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", then ",(0,o.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"start"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"end")," fields will exist for each extracted message descriptors. (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("h3",{id:"--additional-component-names-comma-separated-names"},(0,o.kt)("inlineCode",{parentName:"h3"},"--additional-component-names [comma-separated-names]")),(0,o.kt)("p",null,"Additional component names to extract messages from, e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"['FormattedFooBarMessage']"),". ",(0,o.kt)("strong",{parentName:"p"},"NOTE"),": By default we check for the fact that ",(0,o.kt)("inlineCode",{parentName:"p"},"FormattedMessage")," is imported from ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleSourceName")," to make sure variable alias works. This option does not do that so it's less safe."),(0,o.kt)("h3",{id:"--additional-function-names-comma-separated-names"},(0,o.kt)("inlineCode",{parentName:"h3"},"--additional-function-names [comma-separated-names]")),(0,o.kt)("p",null,"Additional function names to extract messages from, e.g: ",(0,o.kt)("inlineCode",{parentName:"p"},"['$t']"),"."),(0,o.kt)("h3",{id:"--output-empty-json"},(0,o.kt)("inlineCode",{parentName:"h3"},"--output-empty-json")),(0,o.kt)("p",null,"Output file with empty [] if src has no messages. For build systems like ",(0,o.kt)("a",{parentName:"p",href:"https://bazel.build/"},"bazel")," that relies on specific output mapping, not writing out a file can cause issues. (default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),")"),(0,o.kt)("h3",{id:"--ignore-files"},(0,o.kt)("inlineCode",{parentName:"h3"},"--ignore [files]")),(0,o.kt)("p",null,"List of glob paths to ",(0,o.kt)("strong",{parentName:"p"},"not")," extract translations from."),(0,o.kt)("h3",{id:"--throws"},(0,o.kt)("inlineCode",{parentName:"h3"},"--throws")),(0,o.kt)("p",null,"Whether to throw an exception when we fail to process any file in the batch."),(0,o.kt)("h3",{id:"--pragma-pragma"},(0,o.kt)("inlineCode",{parentName:"h3"},"--pragma [pragma]")),(0,o.kt)("p",null,"Parse specific additional custom pragma. This allows you to tag certain file with metadata such as ",(0,o.kt)("inlineCode",{parentName:"p"},"project"),". For example with this file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'// @intl-meta project:my-custom-project\nimport {FormattedMessage} from \'react-intl\'\n;<FormattedMessage defaultMessage="foo" id="bar" />\n')),(0,o.kt)("p",null,"and with option ",(0,o.kt)("inlineCode",{parentName:"p"},'{pragma: "intl-meta"}'),", we'll parse out ",(0,o.kt)("inlineCode",{parentName:"p"},"// @intl-meta project:my-custom-project")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"{project: 'my-custom-project'}")," in the result file."),(0,o.kt)("h3",{id:"--flatten"},(0,o.kt)("inlineCode",{parentName:"h3"},"--flatten")),(0,o.kt)("p",null,"Whether to hoist selectors & flatten sentences as much as possible. E.g:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"I have {count, plural, one{a dog} other{many dogs}}\n")),(0,o.kt)("p",null,"becomes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"{count, plural, one{I have a dog} other{I have many dogs}}\n")),(0,o.kt)("p",null,"The goal is to provide as many full sentences as possible since fragmented\nsentences are not translator-friendly."),(0,o.kt)("h2",{id:"compilation"},"Compilation"),(0,o.kt)("p",null,"Compile extracted file from ",(0,o.kt)("inlineCode",{parentName:"p"},"formatjs extract")," to a react-intl consumable\nJSON file. This also does ICU message verification. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/message-distribution"},"Message Distribution")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"formatjs compile --help\n")),(0,o.kt)("h3",{id:"--format-path-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"--format [path]")),(0,o.kt)("p",null,"Path to a formatter file that converts ",(0,o.kt)("inlineCode",{parentName:"p"},"<translation_file>")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Record<string, string>")," so we can compile. The file must export a function named ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," with the signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n")),(0,o.kt)("p",null,"This is especially useful to convert from a TMS-specific format back to react-intl format."),(0,o.kt)("p",null,"See our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/tree/main/packages/cli/src/formatters"},"builtin formatters")," for examples."),(0,o.kt)("h3",{id:"--out-file-output"},(0,o.kt)("inlineCode",{parentName:"h3"},"--out-file <output>")),(0,o.kt)("p",null,"The target file that contains compiled messages."),(0,o.kt)("h3",{id:"--ast"},(0,o.kt)("inlineCode",{parentName:"h3"},"--ast")),(0,o.kt)("p",null,"Whether to compile message into AST instead of just string. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/advanced-usage"},"Advanced Usage")),(0,o.kt)("h3",{id:"--pseudo-locale-pseudolocale"},(0,o.kt)("inlineCode",{parentName:"h3"},"--pseudo-locale <pseudoLocale>")),(0,o.kt)("p",null,"Whether we should compile messages into pseudo locales instead. Available pseudo-locales:"),(0,o.kt)("p",null,"Given the English message ",(0,o.kt)("inlineCode",{parentName:"p"},"my name is {name}")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Locale"),(0,o.kt)("th",{parentName:"tr",align:null},"Message"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"xx-LS")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"my name is {name}SSSSSSSSSSSSSSSSSSSSSSSSS"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"xx-AC")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MY NAME IS {name}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"xx-HA")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"[javascript]my name is {name}"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"en-XA")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"\u1e41\u1e8f \u0144\xe2\u1e41\xe8 \xed\u015b {name}"))))),(0,o.kt)("h2",{id:"folder-compilation"},"Folder Compilation"),(0,o.kt)("p",null,"Batch compile a folder with extracted files from ",(0,o.kt)("inlineCode",{parentName:"p"},"formatjs extract")," to a folder containing react-intl consumable JSON files. This also does ICU message verification. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/getting-started/message-distribution"},"Message Distribution")," for more details."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"formatjs compile-folder [options] <folder> <outFolder>\n")),(0,o.kt)("p",null,"Folder structure should be in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"<folder>/<locale>.json")," and the output would be ",(0,o.kt)("inlineCode",{parentName:"p"},"<outFolder>/<locale>.json"),"."),(0,o.kt)("h3",{id:"--format-path-2"},(0,o.kt)("inlineCode",{parentName:"h3"},"--format [path]")),(0,o.kt)("p",null,"Path to a formatter file that converts ",(0,o.kt)("inlineCode",{parentName:"p"},"<translation_file>")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Record<string, string>")," so we can compile. The file must export a function named ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," with the signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"type CompileFn = <T = Record<string, MessageDescriptor>>(\n  msgs: T\n) => Record<string, string>\n")),(0,o.kt)("p",null,"This is especially useful to convert from a TMS-specific format back to react-intl format"),(0,o.kt)("h3",{id:"--ast-1"},(0,o.kt)("inlineCode",{parentName:"h3"},"--ast")),(0,o.kt)("p",null,"Whether to compile message into AST instead of just string. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/advanced-usage"},"Advanced Usage")),(0,o.kt)("h3",{id:"--skip-errors"},(0,o.kt)("inlineCode",{parentName:"h3"},"--skip-errors")),(0,o.kt)("p",null,"Whether to continue compiling messages after encountering an error parsing one of them. Any keys with errors will not be included in the output file."),(0,o.kt)("h2",{id:"builtin-formatters"},"Builtin Formatters"),(0,o.kt)("p",null,"We provide the following built-in formatters to integrate with 3rd party TMSes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"TMS"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"th"},"--format")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.transifex.com/formats/json/structured-json"},"Transifex's Structured JSON")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transifex"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://help.smartling.com/hc/en-us/articles/360008000733-JSON"},"Smartling ICU JSON")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"smartling"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://lingohub.com/developers/resource-files/json-localization/"},"Lingohub")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"simple"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://help.phrase.com/help/simple-json"},"Phrase")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"simple"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://support.crowdin.com/file-formats/chrome-json/"},"Crowdin Chrome JSON")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"crowdin"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.lokalise.com/en/articles/3229161-structured-json"},"Lokalise Structured JSON")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"lokalise"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://docs.locize.com/integration/supported-formats#json-nested"},"locize")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"simple"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://simplelocalize.io/docs/integrations/format-js-cli/"},"SimpleLocalize")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"simple"))))),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"format"),"s of ",(0,o.kt)("inlineCode",{parentName:"p"},"extract")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"compile")," have to be the same, which means if you ",(0,o.kt)("inlineCode",{parentName:"p"},"extract --format smartling"),", you have to ",(0,o.kt)("inlineCode",{parentName:"p"},"compile --format smartling")," as well & vice versa."))),(0,o.kt)("h2",{id:"custom-formatters"},"Custom Formatters"),(0,o.kt)("p",null,"You can provide your own formatter by using our interfaces:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli'\n\ninterface VendorJson {}\n\n// [Optional] Format @formatjs/cli structure to vendor's structure\nexport const format: FormatFn<VendorJson> = () => {}\n// [Optional] Format vendor's structure to @formatjs/cli structure\nexport const compile: CompileFn<VendorJson> = () => {}\n// [Optional] Sort the messages in a specific order during serialization\nexport const compareMessages: Comparator = () => {}\n")),(0,o.kt)("p",null,"Take a look at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/formatjs/formatjs/tree/main/packages/cli/src/formatters"},"builtin formatter code")," for some examples."),(0,o.kt)("h2",{id:"node-api"},"Node API"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"@formatjs/cli")," can also be consumed programmatically like below:"),(0,o.kt)("h3",{id:"extraction-1"},"Extraction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {extract} from '@formatjs/cli'\n\nconst resultAsString: Promise<string> = extract(files, {\n  idInterpolationPattern: '[sha512:contenthash:base64:6]',\n})\n")),(0,o.kt)("h3",{id:"compilation-1"},"Compilation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {compile} from '@formatjs/cli'\n\nconst resultAsString: Promise<string> = compile(files, {\n  ast: true,\n})\n")),(0,o.kt)("h3",{id:"custom-formatter"},"Custom Formatter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import {FormatFn, CompileFn, Comparator} from '@formatjs/cli'\n\nexport const format: FormatFn = msgs => msgs\n\n// Sort key reverse alphabetically\nexport const compareMessages = (el1, el2) => {\n  return el1.key < el2.key ? 1 : -1\n}\n\nexport const compile: CompileFn = msgs => {\n  const results: Record<string, string> = {}\n  for (const k in msgs) {\n    results[k] = msgs[k].defaultMessage!\n  }\n  return results\n}\n")))}f.isMDXComponent=!0},6010:(e,t,a)=>{"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r})}}]);