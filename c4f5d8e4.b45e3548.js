(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{255:function(e){e.exports=JSON.parse('{"demo":"{name} took {numPhotos, plural, =0 {no photos} =1 {one photo} other {# photos}} on {takenDate, date, long}."}')},256:function(e){e.exports=JSON.parse('{"demo":"Le {takenDate, date, long}, {name} {numPhotos, plural, =0 {n\'a pas pris de photographie.} =1 {a pris une photographie.} other {a pris # photographies.}}"}')},257:function(e){e.exports=JSON.parse('{"demo":"{name}\u306f{takenDate, date, long}\u306b{numPhotos, plural, =0 {1\u679a\u3082\u5199\u771f\u3092\u64ae\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002} =1 {1\u679a\u5199\u771f\u3092\u64ae\u308a\u307e\u3057\u305f\u3002} other {#\u679a\u5199\u771f\u3092\u64ae\u308a\u307e\u3057\u305f\u3002}}"}')},258:function(e){e.exports=JSON.parse('{"demo":"{takenDate, date, long} {name} {numPhotos, plural,=0 {nevyfotila} other {vyfotila} } {numPhotos, plural, =0 {\u017e\xe1dnou fotku} one {jednu fotku} few {# fotky} other {# fotek}}."}')},259:function(e){e.exports=JSON.parse('{"demo":"Em {takenDate, date, long}, {name} {numPhotos, plural, =0 {n\xe3o} other {} } tirou {numPhotos, plural, =0 {nenhuma foto.} =1 {uma foto.} other {# fotos.}}"}')},260:function(e){e.exports=JSON.parse('{"demo":"{name} tog {numPhotos, plural, =0 {inte n\xe5gra foton} =1 {ett foto} other {# foton} } den {takenDate, date, long}."}')},261:function(e){e.exports=JSON.parse('{"demo":"El {takenDate, date, long}, {name} {numPhotos, plural, =0 {no} other {} } sac\xf3 {numPhotos, plural, =0 {ninguna foto.} =1 {una foto.} other {# fotos.}}"}')},97:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(152),s=t.n(r),o=t(125),c=t(117),i=t(115),m=t(119),u=t(98),d=t.n(u),p=t(175),g=t(176),E=t(144),h=t(255),f=t(256),v=t(257),b=t(258),N=t(259),S=t(260),w=t(261),O={"en-US":h,"fr-FR":f,"ja-JP":v,"cs-CZ":b,"pt-BR":N,"sv-SE":S,"es-AR":w};function j(e){var a=e.className,t=Object(p.a)();return l.a.createElement("div",{className:s()(a,d.a.integration)},l.a.createElement("div",{className:"row "+d.a.imgs},l.a.createElement("a",{className:"col col--6",href:"https://github.com/formatjs/react-intl"},l.a.createElement("img",{src:Object(m.a)("/img/react.svg"),alt:t.formatMessage({id:"integration-react",defaultMessage:"React"})})),l.a.createElement("a",{className:"col col--6",href:"https://github.com/ember-intl/ember-intl"},l.a.createElement("img",{src:Object(m.a)("/img/ember.svg"),alt:t.formatMessage({id:"integration-ember",defaultMessage:"Ember"})}))),l.a.createElement("h3",null,l.a.createElement(g.a,{id:"integration-title",defaultMessage:"Integrates with other libraries."})),l.a.createElement("p",null,l.a.createElement(g.a,{id:"integration-desc",defaultMessage:"For most web projects, internationalization happens in the template or view layer, so we've built integrations with React."})))}function M(e){var a=e.className;return l.a.createElement("div",{className:s()(a,d.a.intro)},l.a.createElement("div",{className:d.a.layers},l.a.createElement("div",{className:d.a.layer},l.a.createElement("p",null,l.a.createElement(g.a,{id:"intro-layer1",defaultMessage:"FORMATJS INTEGRATIONS"}))),l.a.createElement("div",{className:d.a.layer},l.a.createElement("p",null,l.a.createElement(g.a,{id:"intro-layer2",defaultMessage:"FORMATJS CORE LIBS"}))),l.a.createElement("div",{className:d.a.layer},l.a.createElement("p",null,l.a.createElement(g.a,{id:"intro-layer3",defaultMessage:"ECMA-402 + FORMATJS POLYFILLS"})))),l.a.createElement("h3",null,l.a.createElement(g.a,{id:"intro-title",defaultMessage:"FormatJS is a set of JavaScript libraries."})),l.a.createElement("p",null,l.a.createElement(g.a,{id:"intro-desc",defaultMessage:"FormatJS is a modular collection of JavaScript libraries for internationalization that are focused on formatting numbers, dates, and strings for displaying to people. It includes a set of core libraries that build on the JavaScript Intl built-ins and industry-wide i18n standards, plus a set of integrations for common template and component libraries."})))}function J(e){var a=e.className;Object(p.a)();return l.a.createElement("div",{className:s()(a,d.a.env)},l.a.createElement("div",{className:s()("row",d.a.logos)},l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/chrome.png")})),l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/firefox.png")})),l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/safari.png")})),l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/edge.png")})),l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/ie11.png")})),l.a.createElement("div",{className:"col col--2"},l.a.createElement("img",{src:Object(m.a)("/img/node.svg")}))),l.a.createElement("h3",null,l.a.createElement(g.a,{id:"env-title",defaultMessage:"Runs in the browser and Node.js."})),l.a.createElement("p",null,l.a.createElement(g.a,{id:"env-desc",defaultMessage:"FormatJS has been tested in all the major browsers (IE11, Chrome, FF & Safari) on both desktop and mobile devices. For many web apps rendering happens on the server, so we made sure FormatJS works perfectly in Node.js. This allows developers to use FormatJS on both the server and client-side of their apps."})))}function y(e){var a=e.className;return l.a.createElement("div",{className:s()(a,d.a.standards)},l.a.createElement("img",{src:Object(m.a)("/img/js.svg")}),l.a.createElement("h3",null,l.a.createElement(g.a,{id:"standards-title",defaultMessage:"Built on standards."})),l.a.createElement("p",null,l.a.createElement(g.a,{id:"standards-desc",defaultMessage:"FormatJS is aligned with: <ecma>ECMAScript Internationalization API (ECMA-402)</ecma>, <cldr>Unicode CLDR</cldr>, and <icu>ICU Message syntax</icu>. By building on these industry standards, FormatJS leverages APIs in modern browsers and works with the message syntax used by professional translators.",values:{ecma:function(e){return l.a.createElement("a",{href:"https://www.ecma-international.org/ecma-402/"},e)},cldr:function(e){return l.a.createElement("a",{href:"http://cldr.unicode.org/"},e)},icu:function(e){return l.a.createElement("a",{href:"http://userguide.icu-project.org/formatparse/messages"},e)}}})))}function k(e){var a=e.className,t=Object(n.useState)(0),r=t[0],o=t[1],c=Object(n.useState)("en-US"),i=c[0],m=c[1];return l.a.createElement("div",{className:s()(a,d.a.demo)},l.a.createElement("p",null,l.a.createElement("span",{className:d.a.exampleTitle},l.a.createElement(g.a,{id:"demo-tagline",defaultMessage:"Example"})),l.a.createElement("span",{className:d.a.example},l.a.createElement(E.b,{locale:i,defaultLocale:"en-US",messages:O[i]},l.a.createElement(g.a,{id:"demo",values:{numPhotos:r,takenDate:new Date,name:"Annie"}})))),l.a.createElement("label",null,l.a.createElement(g.a,{id:"demo-photos",defaultMessage:"# Photos"})," ",l.a.createElement("input",{value:r,type:"number",onChange:function(e){return o(+e.target.value)}})),l.a.createElement("label",null,l.a.createElement(g.a,{id:"demo-langs",defaultMessage:"Locale"})," ",l.a.createElement("select",{onChange:function(e){return m(e.target.value)}},l.a.createElement("option",{value:"en-US"},"en-US"),l.a.createElement("option",{value:"fr-FR"},"fr-FR"),l.a.createElement("option",{value:"ja-JP"},"ja-JP"),l.a.createElement("option",{value:"cs-CZ"},"cs-CZ"),l.a.createElement("option",{value:"pt-BR"},"pt-BR"),l.a.createElement("option",{value:"sv-SE"},"sv-SE"),l.a.createElement("option",{value:"es-AR"},"es-AR"))))}function F(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:s()("hero hero--primary",d.a.heroBanner),style:{backgroundImage:"url("+Object(m.a)("/img/splash-head.jpg")+")"}},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"hero__title"},l.a.createElement("img",{src:Object(m.a)("/img/logo-header.svg")})),l.a.createElement("p",{className:s()("hero__subtitle",d.a.heroSubtitle)},a.tagline),l.a.createElement(k,null),l.a.createElement("div",{className:d.a.buttons},l.a.createElement(c.a,{className:s()("button button--outline button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/core-concepts/basic-internationalization-principles")},l.a.createElement(g.a,{defaultMessage:"Get Started",id:"header-started"}))))),l.a.createElement("main",{className:d.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(M,{className:"col col--4"}),l.a.createElement(j,{className:"col col--4"}),l.a.createElement(y,{className:"col col--4"})),l.a.createElement("div",{className:"row"},l.a.createElement(J,{className:"col col--12"})))))}a.default=function(){var e=Object(i.a)().siteConfig,a=void 0===e?{}:e;return l.a.createElement(E.b,{locale:"en",messages:{}},l.a.createElement(o.a,{title:a.title,description:a.tagline},l.a.createElement(F,null)))}}}]);