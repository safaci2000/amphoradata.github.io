(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{154:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(1),a=t(9),o=(t(0),t(211)),i={id:"email-amphora",title:"Share Amphora through email",sidebar_label:"Share Amphora through email"},c={id:"email-amphora",title:"Share Amphora through email",description:"> This feature will be deployed by end of April",source:"@site/docs/email-amphora.md",permalink:"/docs/email-amphora",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/email-amphora.md",sidebar_label:"Share Amphora through email",sidebar:"someSidebar",previous:{title:"Set terms and conditions",permalink:"/docs/set-tncs"},next:{title:"Edit an Amphora",permalink:"/docs/edit-amphora"}},l=[{value:"Description",id:"description",children:[]}],p={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This feature will be deployed by end of April")),Object(o.b)("h2",{id:"description"},"Description"),Object(o.b)("p",null,"You can easily share your favourite Amphora with any email address. Simply use"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'amphora = client.get_amphora("id-of-your-favourite-amphora")\namphora.share_with("my_friends_email@gmail.com")\n')),Object(o.b)("p",null,"Note this feature currently only works with the python SDK and will be released end of April."))}u.isMDXComponent=!0},211:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c({},r,{},e)),t},m=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,b=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return t?a.a.createElement(b,c({ref:r},p,{components:t})):a.a.createElement(b,c({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);