"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7496],{5880:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var l=t(5250),r=t(7449),s=t(8331),a=t(5376);const i={id:"vue-intl",title:"Vue Plugin for formatjs"},o=void 0,c={id:"vue-intl",title:"Vue Plugin for formatjs",description:"This library contains our plugin for Vue.",source:"@site/docs/vue-intl.md",sourceDirName:".",slug:"/vue-intl",permalink:"/docs/vue-intl",draft:!1,unlisted:!1,editUrl:"https://github.com/formatjs/formatjs/edit/main/website/docs/vue-intl.md",tags:[],version:"current",lastUpdatedBy:"Long Ho",lastUpdatedAt:1630949516,formattedLastUpdatedAt:"Sep 6, 2021",frontMatter:{id:"vue-intl",title:"Vue Plugin for formatjs"},sidebar:"api",previous:{title:"Core FormatJS Intl",permalink:"/docs/intl"},next:{title:"Intl MessageFormat",permalink:"/docs/intl-messageformat"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"inject",id:"inject",level:3},{value:"Composition API",id:"composition-api",level:3},{value:"Methods",id:"methods",level:3},{value:"Tooling",id:"tooling",level:2},{value:"Caveats",id:"caveats",level:2},{value:"Using ICU in Vue SFC",id:"using-icu-in-vue-sfc",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"This library contains our plugin for Vue."}),"\n",(0,l.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n","\n","\n",(0,l.jsxs)(s.Z,{groupId:"npm",defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],children:[(0,l.jsx)(a.Z,{value:"npm",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm i -S vue-intl\n"})})}),(0,l.jsx)(a.Z,{value:"yarn",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"yarn add vue-intl\n"})})})]}),"\n",(0,l.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsxs)(n.p,{children:["Initialize ",(0,l.jsx)(n.code,{children:"VueIntl"})," plugin with the same ",(0,l.jsx)(n.code,{children:"IntlConfig"})," documented in ",(0,l.jsx)(n.a,{href:"/docs/intl#IntlShape",children:"@formatjs/intl"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-tsx",children:"import {createIntl} from 'vue-intl'\n\nconst app = createApp(App)\napp.use(\n  createIntl({\n    locale: 'en',\n    defaultLocale: 'en',\n    messages: {\n      foo: 'bar',\n    },\n  })\n)\n"})}),"\n",(0,l.jsx)(n.p,{children:"From there you can use our APIs in 2 ways:"}),"\n",(0,l.jsx)(n.h3,{id:"inject",children:"inject"}),"\n",(0,l.jsxs)(n.p,{children:["By specifying ",(0,l.jsx)(n.code,{children:"inject: {intl: intlKey}"}),", you can use the full ",(0,l.jsx)(n.code,{children:"IntlFormatters"})," API documented in ",(0,l.jsx)(n.a,{href:"/docs/intl#IntlShape",children:"@formatjs/intl"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Note: ",(0,l.jsx)(n.code,{children:"intlKey"})," needs to be imported from ",(0,l.jsx)(n.code,{children:"vue-intl"}),"."]}),"\n",(0,l.jsx)(n.h3,{id:"composition-api",children:"Composition API"}),"\n",(0,l.jsxs)(n.p,{children:["We also support Vue's ",(0,l.jsx)(n.a,{href:"https://composition-api.vuejs.org/",children:"Composition API"})," with ",(0,l.jsx)(n.code,{children:"provideIntl"})," & ",(0,l.jsx)(n.code,{children:"useIntl"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-ts",children:"import {createIntl} from '@formatjs/intl'\nimport {provideIntl, useIntl} from 'vue-intl'\n\nconst Ancestor = {\n  setup() {\n    provideIntl(\n      createIntl({\n        locale: 'en',\n        defaultLocale: 'en',\n        messages: {\n          foo: 'Composed',\n        },\n      })\n    )\n  },\n  render() {\n    return h(Descendant)\n  },\n}\n\nconst Descendant = {\n  setup() {\n    const intl = useIntl()\n    return () =>\n      h(\n        'p',\n        {},\n        intl.formatMessage({\n          id: 'foo',\n          defaultMessage: 'Hello',\n        })\n      )\n  },\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"methods",children:"Methods"}),"\n",(0,l.jsxs)(n.p,{children:["You can also use our formatters in Vue template by prepending ",(0,l.jsx)(n.code,{children:"$"})," like below:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-vue",children:"<template>\n  <p>{{ $formatNumber(3, {style: 'currency', currency: 'USD'}) }}</p>\n</template>\n"})}),"\n",(0,l.jsx)(n.p,{children:"We currently support:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatMessage"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatDate"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatTime"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatRelativeTime"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatTimeRange"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatDisplayName"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"$formatList"})}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["See ",(0,l.jsx)(n.a,{href:"/docs/intl",children:"@formatjs/intl"})," for the full list of API signatures."]}),"\n",(0,l.jsx)(n.h2,{id:"tooling",children:"Tooling"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"formatjs"})," toolchain fully supports ",(0,l.jsx)(n.code,{children:"vue"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/tooling/linter",children:"eslint-plugin-formatjs"}),": This fully supports ",(0,l.jsx)(n.code,{children:".vue"})," and JS/TS."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/tooling/cli",children:"@formatjs/cli"}),": We now support extracting messages from ",(0,l.jsx)(n.code,{children:".vue"})," SFC files."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/tooling/babel-plugin",children:"babel-plugin-formatjs"}),": Compile messages during bundling for ",(0,l.jsx)(n.code,{children:"babel"}),"."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/docs/tooling/ts-transformer",children:"@formatjs/ts-transformer"}),": Compile messages during bundling for ",(0,l.jsx)(n.code,{children:"TypeScript"}),"."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"caveats",children:"Caveats"}),"\n",(0,l.jsx)(n.h3,{id:"using-icu-in-vue-sfc",children:"Using ICU in Vue SFC"}),"\n",(0,l.jsxs)(n.p,{children:["Since ",(0,l.jsx)(n.code,{children:"}}"})," & ",(0,l.jsx)(n.code,{children:"{{"})," are special tokens in ",(0,l.jsx)(n.code,{children:".vue"})," ",(0,l.jsx)(n.code,{children:"<template>"}),", this can cause potential conflict with ICU MessageFormat syntax, e.g:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",metastring:"{4}",children:"<template>\n  <p>\n    {{ $formatMessage({ defaultMessage: '{count, selectordinal, offset:1 one {#}\n    other {# more}}', }) }}\n  </p>\n</template>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Notice the ",(0,l.jsx)(n.code,{children:"{# more}}"})," where it ends with ",(0,l.jsx)(n.code,{children:"}}"}),". This will cause parsing issue in your ",(0,l.jsx)(n.code,{children:"vue"})," template. In order to work around this issue, we recommend using space to turn ",(0,l.jsx)(n.code,{children:"}}"})," into ",(0,l.jsx)(n.code,{children:"} }"}),"."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-vue",metastring:"{6}",children:"<template>\n  <p>\n    {{\n      $formatMessage({\n        defaultMessage:\n          '{count, selectordinal, offset:1 one {#} other {# more} }',\n      })\n    }}\n  </p>\n</template>\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},5376:(e,n,t)=>{t.d(n,{Z:()=>a});t(79);var l=t(9841);const r="tabItem_RPGj";var s=t(5250);function a(e){let{children:n,hidden:t,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,l.Z)(r,a),hidden:t,children:n})}},8331:(e,n,t)=>{t.d(n,{Z:()=>w});var l=t(79),r=t(9841),s=t(1450),a=t(7911),i=t(2743),o=t(1286),c=t(8434),u=t(5496);function d(e){var n,t;return null!=(n=null==(t=l.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))?void 0:t.filter(Boolean))?n:[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)(()=>{const e=null!=n?n:function(e){return d(e).map(e=>{let{props:{value:n,label:t,attributes:l,default:r}}=e;return{value:n,label:t,attributes:l,default:r}})}(t);return function(e){const n=(0,c.l)(e,(e,n)=>e.value===n.value);if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map(e=>e.value).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e},[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some(e=>e.value===n)}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:t});return[(0,o._X)(s),(0,l.useCallback)(e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})},[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[a,o]=(0,l.useState)(()=>function(e){var n;let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:l}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+l.map(e=>e.value).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const r=null!=(n=l.find(e=>e.default))?n:l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s})),[c,d]=m({queryString:t,groupId:r}),[f,j]=function(e){let{groupId:n}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,l.useCallback)(e=>{t&&s.set(e)},[t,s])]}({groupId:r}),x=(()=>{const e=null!=c?c:f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)(()=>{x&&o(x)},[x]);return{selectedValue:a,selectValue:(0,l.useCallback)(e=>{if(!p({value:e,tabValues:s}))throw new Error("Can't select invalid tab value="+e);o(e),d(e),j(e)},[d,j,s]),tabValues:s}}var j=t(7570);const x="tabList_CFtg",g="tabItem_TF0o";var v=t(5250);function b(e){let{className:n,block:t,selectedValue:l,selectValue:a,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=i[t].value;r!==l&&(c(n),a(r))},d=e=>{var n;let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{var l;const n=o.indexOf(e.currentTarget)+1;t=null!=(l=o[n])?l:o[0];break}case"ArrowLeft":{var r;const n=o.indexOf(e.currentTarget)-1;t=null!=(r=o[n])?r:o[o.length-1];break}}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:i.map(e=>{let{value:n,label:t,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",g,null==s?void 0:s.className,{"tabs__item--active":l===n}),children:null!=t?t:n},n)})})}function y(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find(e=>e.props.value===r);return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r}))})}function I(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",x),children:[(0,v.jsx)(b,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},7449:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var l=t(79);const r={},s=l.createContext(r);function a(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);