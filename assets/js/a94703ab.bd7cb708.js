"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4368],{6053:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var a=n(79),i=n(9841),s=n(9755),o=n(8133),l=n(6611),r=n(6688),c=n(5802),d=n(1450),u=n(8810);const m="backToTopButton_Ra1t",b="backToTopButtonShow_SFcv";var h=n(5250);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,i]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:o,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)((e,n)=>{let{scrollY:a}=e;const o=null==n?void 0:n.scrollY;o&&(s.current?s.current=!1:a>=o?(l(),i(!1)):a<t?i(!1):a+window.innerHeight<document.documentElement.scrollHeight&&i(!0))}),(0,u.S)(e=>{e.location.hash&&(s.current=!0,i(!1))}),{shown:n,scrollToTop:()=>o(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.k.common.backToTopButton,m,e&&b),type:"button",onClick:t})}var x=n(5775),f=n(7911),j=n(5549),v=n(9588),_=n(6133);function C(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g="collapseSidebarButton_swcm",k="collapseSidebarButtonIcon_MP2v";function S(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",g),onClick:t,children:(0,h.jsx)(C,{className:k})})}var I=n(5772),N=n(3402);const Z=Symbol("EmptyContext"),T=a.createContext(Z);function y(e){let{children:t}=e;const[n,i]=(0,a.useState)(null),s=(0,a.useMemo)(()=>({expandedItem:n,setExpandedItem:i}),[n]);return(0,h.jsx)(T.Provider,{value:s,children:t})}var w=n(9055),A=n(4869),L=n(9488),B=n(7570);function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.I)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.I)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),type:"button",className:"clean-btn menu__caret",onClick:a})}function H(e){let{item:t,onItemClick:n,activePath:s,level:r,index:c,...d}=e;const{items:u,label:m,collapsible:b,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,v.L)(),j=function(e){const t=(0,B.Z)();return(0,a.useMemo)(()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0,[e,t])}(t),_=(0,l._F)(t,s),C=(0,A.Mg)(x,s),{collapsed:g,setCollapsed:k}=(0,w.u)({initialState:()=>!!b&&(!_&&t.collapsed)}),{expandedItem:S,setExpandedItem:I}=function(){const e=(0,a.useContext)(T);if(e===Z)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),y=function(e){void 0===e&&(e=!g),I(e?null:c),k(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:i}=e;const s=(0,N.D9)(t);(0,a.useEffect)(()=>{t&&!s&&n&&i(!1)},[t,s,n,i])}({isActive:_,collapsed:g,updateCollapsed:y}),(0,a.useEffect)(()=>{b&&null!=S&&S!==c&&f&&k(!0)},[b,S,c,k,f]),(0,h.jsxs)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":g},p),children:[(0,h.jsxs)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":C}),children:[(0,h.jsx)(L.Z,{className:(0,i.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!x&&b,"menu__link--active":_}),onClick:b?e=>{null==n||n(t),x?y(!1):(e.preventDefault(),y())}:()=>{null==n||n(t)},"aria-current":C?"page":void 0,"aria-expanded":b?!g:void 0,href:b?null!=j?j:"#":j,...d,children:m}),x&&b&&(0,h.jsx)(E,{collapsed:g,categoryLabel:m,onClick:e=>{e.preventDefault(),y()}})]}),(0,h.jsx)(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:g,children:(0,h.jsx)(U,{items:u,tabIndex:g?-1:0,onItemClick:n,activePath:s,level:r+1})})]})}var M=n(4431),R=n(7420);const F="menuExternalLink_fedZ";function P(e){let{item:t,onItemClick:n,activePath:a,level:s,index:r,...c}=e;const{href:d,label:u,className:m,autoAddBaseUrl:b}=t,p=(0,l._F)(t,a),x=(0,M.Z)(d);return(0,h.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",m),children:(0,h.jsxs)(L.Z,{className:(0,i.Z)("menu__link",!x&&F,{"menu__link--active":p}),autoAddBaseUrl:b,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[u,!x&&(0,h.jsx)(R.Z,{})]})},u)}const D="menuHtmlItem_IrpD";function V(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:r}=t;return(0,h.jsx)("li",{className:(0,i.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(n),l&&[D,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},a)}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(H,{item:t,...n});case"html":return(0,h.jsx)(V,{item:t,...n});case"link":default:return(0,h.jsx)(P,{item:t,...n})}}function z(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,h.jsx)(y,{children:a.map((e,t)=>(0,h.jsx)(W,{item:e,index:t,...n},t))})}const U=(0,a.memo)(z),G="menu_tnrH",Y="menuWithAnnouncementBar_VGNl";function K(e){let{path:t,sidebar:n,className:s}=e;const l=function(){const{isActive:e}=(0,I.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)(t=>{let{scrollY:a}=t;e&&n(0===a)},[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,c.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,i.Z)("menu thin-scrollbar",G,l&&Y,s),children:(0,h.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(U,{items:n,activePath:t,level:1})})})}const X="sidebar_BTTR",O="sidebarWithHideableNavbar_ZXiK",q="sidebarHidden_wVpC",J="sidebarLogo_Sbsm";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:l}}}=(0,v.L)();return(0,h.jsxs)("div",{className:(0,i.Z)(X,o&&O,s&&q),children:[o&&(0,h.jsx)(_.Z,{tabIndex:-1,className:J}),(0,h.jsx)(K,{path:t,sidebar:n}),l&&(0,h.jsx)(S,{onClick:a})]})}const $=a.memo(Q);var ee=n(4875),te=n(3307);const ne=e=>{let{sidebar:t,path:n}=e;const a=(0,te.e)();return(0,h.jsx)("ul",{className:(0,i.Z)(o.k.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ae(e){return(0,h.jsx)(ee.Zo,{component:ne,props:e})}const ie=a.memo(ae);function se(e){const t=(0,j.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)($,{...e}),a&&(0,h.jsx)(ie,{...e})]})}const oe="expandButton_sexU",le="expandButtonIcon_vrln";function re(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:oe,title:(0,c.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(C,{className:le})})}const ce={docSidebarContainer:"docSidebarContainer_Iyl5",docSidebarContainerHidden:"docSidebarContainerHidden_W1Bd",sidebarViewport:"sidebarViewport_tvXt"};function de(e){var t;let{children:n}=e;const i=(0,r.V)();return(0,h.jsx)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function ue(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,f.TH)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)(()=>{r&&c(!1),!r&&(0,x.n)()&&c(!0),s(e=>!e)},[s,r]);return(0,h.jsx)("aside",{className:(0,i.Z)(o.k.docs.docSidebarContainer,ce.docSidebarContainer,n&&ce.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ce.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(de,{children:(0,h.jsxs)("div",{className:(0,i.Z)(ce.sidebarViewport,r&&ce.sidebarViewportHidden),children:[(0,h.jsx)(se,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,h.jsx)(re,{toggleSidebar:d})]})})})}const me={docMainContainer:"docMainContainer_BICi",docMainContainerEnhanced:"docMainContainerEnhanced_CGIl",docItemWrapperEnhanced:"docItemWrapperEnhanced_jl9m"};function be(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.V)();return(0,h.jsx)("main",{className:(0,i.Z)(me.docMainContainer,(t||!a)&&me.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",me.docItemWrapper,t&&me.docItemWrapperEnhanced),children:n})})}const he="docRoot_o2N1",pe="docsWrapper_omzp";function xe(e){let{children:t}=e;const n=(0,r.V)(),[i,s]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:pe,children:[(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:he,children:[n&&(0,h.jsx)(ue,{sidebar:n.items,hiddenSidebarContainer:i,setHiddenSidebarContainer:s}),(0,h.jsx)(be,{hiddenSidebarContainer:i,children:t})]})]})}var fe=n(8350);function je(e){const t=(0,l.SN)(e);if(!t)return(0,h.jsx)(fe.Z,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,h.jsx)(s.FG,{className:(0,i.Z)(o.k.page.docsDocPage),children:(0,h.jsx)(r.b,{name:a,items:c,children:(0,h.jsx)(xe,{children:n})})})}},8350:(e,t,n)=>{n.d(t,{Z:()=>l});n(79);var a=n(9841),i=n(5802),s=n(7027),o=n(5250);function l(e){let{className:t}=e;return(0,o.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,o.jsx)(s.Z,{as:"h1",className:"hero__title",children:(0,o.jsx)(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.jsx)("p",{children:(0,o.jsx)(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);