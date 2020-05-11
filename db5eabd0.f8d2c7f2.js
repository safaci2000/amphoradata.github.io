(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{196:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),o=(a(0),a(211)),i={id:"add-signal",title:"Add a Time-Series (Signal) to your Amphora",sidebar_label:"Share Time-Series"},l={id:"add-signal",title:"Add a Time-Series (Signal) to your Amphora",description:"Amphoras are standardised data containers. To share your data, you need to create an Amphora then fill it with whatever data you want.",source:"@site/docs/add-signal.md",permalink:"/docs/add-signal",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/add-signal.md",sidebar_label:"Share Time-Series",sidebar:"someSidebar",previous:{title:"Add File to Amphora",permalink:"/docs/add-file"},next:{title:"Set terms and conditions",permalink:"/docs/set-tncs"}},c=[{value:"Add Signal on web app",id:"add-signal-on-web-app",children:[]},{value:"Add Signal programmatically",id:"add-signal-programmatically",children:[]}],s={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Amphoras are standardised data containers. To share your data, you need to create an Amphora then fill it with whatever data you want."),Object(o.b)("h2",{id:"add-signal-on-web-app"},"Add Signal on web app"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/guides/models/signal.md"}),"Signals")," are numeric data that change over time. Add a signal by clicking ",Object(o.b)("inlineCode",{parentName:"p"},"Signals")," in the top right of your Amphora detail's page, then click the ",Object(o.b)("inlineCode",{parentName:"p"},"+")," button to add a new property (i.e. the name of the signal), e.g. temperature."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../img/add_signal_amphora.png",alt:"Add signal amphora"}))),Object(o.b)("p",null,"Now you can submit a value for that signal (e.g. the current temperature) via the ",Object(o.b)("inlineCode",{parentName:"p"},"New Values")," button. Once submitted, you'll start seeting data on the graph."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"It may take up to a minute for the new value to be processed and to show on the graph.")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"../img/view_signal_amphora.png",alt:"View signal amphora"}))),Object(o.b)("h2",{id:"add-signal-programmatically"},"Add Signal programmatically"),Object(o.b)("p",null,"There are two steps to adding a signal. You first need to add the Signal object then add data to the object."),Object(o.b)("h4",{id:"python"},"Python"),Object(o.b)("p",null,"The basic code for creating the signal is "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'amphora.create_signal("signal_name", attributes={"units":"XYZ"})\n')),Object(o.b)("p",null,"and the basic code for updating a signal is"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"amphora.push_signals_dict_array(Signals) \n")),Object(o.b)("p",null,"You can get started adding and updating Signals with the code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Import Amphora modules\nfrom amphora.client import AmphoraDataRepositoryClient, Credentials\n\n# Import non-Amphora modules\nimport os\n\n# Login to amphoradata.com\ncredentials = Credentials(username=os.getenv(\'username\'), password=os.getenv(\'password\')) \nclient = AmphoraDataRepositoryClient(credentials)\n\n# Create signal object. Update as often as you wish\nSignals = [dict(t = datetime_value, signal_name = signal_value)] \n\n# Get Amphora object\namphora = client.get_amphora(Amphora_id) \n\n# Create signal\namphora.create_signal("signal_name", attributes={"units":"XYZ"})\n\n# Create update signal\namphora.push_signals_dict_array(Signals) \n')),Object(o.b)("p",null,"You can download this code from ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/samples/blob/master/generic_templates/Create_a_Signal.py"}),"GitHub"),". There is also more detailed docs in the Python SDK section. There is also a ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=M6kW4Po1LmY"}),"tutorial video")," you can watch too."),Object(o.b)("h4",{id:"c"},"C#"),Object(o.b)("p",null,"Code for pulling signals can be found on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/dotnet-sdk/tree/master/sample"}),"GitHub"),". We are expanding our docs for C# so stay tuned for more details."),Object(o.b)("h4",{id:"nodejs"},"Node.js"),Object(o.b)("p",null,"Code for pulling signals can be found on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/amphoradata/nodejs-sdk/tree/master/samples"}),"GitHub"),". We are expanding our docs for Node.js so stay tuned for more details."))}p.isMDXComponent=!0},211:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(a),u=n,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return a?r.a.createElement(m,l({ref:t},s,{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);