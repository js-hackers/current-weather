(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(0),r=n.n(o),a=n(2),c=n(1);function i(){var e=Object(a.a)(["\n    background-color: hsla(0, 0%, 50%, 0.15);\n    border-radius: 0.25em;\n    overflow: auto;\n    padding: 1rem;\n  "]);return i=function(){return e},e}var s=Object(o.memo)((function(e){var t={};t.component=Object(c.b)(i());return Object(c.c)("pre",{css:t.component},Object(c.c)("code",null,JSON.stringify(e.data,null,2)))}));function l(){var e=Object(a.a)(["\n    margin-bottom: 2rem;\n  "]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n    margin: 4rem 1rem;\n  "]);return u=function(){return e},e}var b=Object(o.memo)((function(e){var t={};return t.component=Object(c.b)(u()),t.title=Object(c.b)(l()),Object(c.c)("div",{css:t.component},e.title?Object(c.c)("h2",{css:t.title},e.title):null,Object(c.c)(s,{data:e.data}))})),f=n(4),m=n.n(f),p=n(5),d=n(3),h=function(){var e=function(e,t){var n=Object(o.useState)(null),r=Object(d.a)(n,2),a=r[0],c=r[1],i=Object(o.useState)(null),s=Object(d.a)(i,2),l=s[0],u=s[1],b=Object(o.useState)(!0),f=Object(d.a)(b,2),h=f[0],g=f[1];return Object(o.useEffect)((function(){g(!0),c(null),u(null),Object(p.a)(m.a.mark((function n(){var o,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://weather-api.js-hackers.now.sh/current",o="number"===typeof e&&"number"===typeof t?"?lat=".concat(e,"&lon=").concat(t):"",n.next=5,fetch("".concat("https://weather-api.js-hackers.now.sh/current").concat(o));case 5:if((r=n.sent).ok){n.next=8;break}throw Object.assign(new Error,{message:"Fetch response not OK",name:"FetchError",response:r});case 8:return n.t0=c,n.next=11,r.json();case 11:n.t1=n.sent,(0,n.t0)(n.t1),n.next=18;break;case 15:n.prev=15,n.t2=n.catch(0),u(n.t2);case 18:return n.prev=18,g(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})))()}),[e,t]),{data:a,error:l,isLoading:h}}(),t=e.data,n=e.error;return e.isLoading?Object(c.c)("p",null,"Loading..."):n?Object(c.c)("p",null,n.message):Object(c.c)(b,{data:t,title:"Current Weather Data"})},g=function(){var e=function(e,t){var n=Object(o.useState)(null),r=Object(d.a)(n,2),a=r[0],c=r[1],i=Object(o.useState)(null),s=Object(d.a)(i,2),l=s[0],u=s[1],b=Object(o.useState)(!0),f=Object(d.a)(b,2),h=f[0],g=f[1];return Object(o.useEffect)((function(){g(!0),c(null),u(null),Object(p.a)(m.a.mark((function n(){var o,r;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,"https://weather-api.js-hackers.now.sh/forecast",o="number"===typeof e&&"number"===typeof t?"?lat=".concat(e,"&lon=").concat(t):"",n.next=5,fetch("".concat("https://weather-api.js-hackers.now.sh/forecast").concat(o));case 5:if((r=n.sent).ok){n.next=8;break}throw Object.assign(new Error,{message:"Fetch response not OK",name:"FetchError",response:r});case 8:return n.t0=c,n.next=11,r.json();case 11:n.t1=n.sent,(0,n.t0)(n.t1),n.next=18;break;case 15:n.prev=15,n.t2=n.catch(0),u(n.t2);case 18:return n.prev=18,g(!1),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[0,15,18,21]])})))()}),[e,t]),{data:a,error:l,isLoading:h}}(),t=e.data,n=e.error;return e.isLoading?Object(c.c)("p",null,"Loading..."):n?Object(c.c)("p",null,n.message):Object(c.c)(b,{data:t,title:"Forecasted Weather Data"})},j=n(6),O=function(e,t){for(var n=Object(o.useRef)(e.apply(void 0,Object(j.a)(t))),r=function(e){var t=Object(o.useRef)(e);return Object(o.useEffect)((function(){t.current=e})),t.current}(t),a=t.length===r.length,c=0;c<t.length&&a;c+=1)a=Object.is(t[c],r[c]);return a||(n.current=e.apply(void 0,Object(j.a)(t))),n.current};function v(){var e=Object(a.a)(["\n    ",";\n    color: ",";\n  "]);return v=function(){return e},e}function w(){var e=Object(a.a)(["\n    ",";\n    margin: 4rem 1rem;\n  "]);return w=function(){return e},e}function y(){var e=Object(a.a)(["\n    font-size: ","rem;\n    font-weight: bold;\n  "]);return y=function(){return e},e}var k=function(e,t){var n,o={};switch(t){case"small":n="1.5";break;case"large":n="4";break;default:n="2"}return o.base=Object(c.b)(y(),n),o.component=Object(c.b)(w(),o.base),o.name=Object(c.b)(v(),o.base,e),o},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.color,n=void 0===t?"blue":t,o=e.size,r=void 0===o?"medium":o,a=O(k,[n,r]);return Object(c.c)("h1",{css:a.component},"Hello ",Object(c.c)("span",{css:a.name},"world"))},z=function(){return Object(c.c)("div",null,Object(c.c)(x,{color:"red",size:"large"}),Object(c.c)(h,null),Object(c.c)(g,null))};function E(){var e=Object(a.a)(["\n  /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}\n\n  /*! Modifications to normalize */\n\n  *,\n  *::before,\n  *::after {\n    border: 0;\n    box-sizing: inherit;\n    font-weight: normal;\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    box-sizing: border-box;\n    font-size: 16px;\n  }\n\n  body {\n    font-family: sans-serif;\n  }\n\n  /*! End modifications to normalize */\n\n  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700|Roboto+Mono|Roboto:400,700&display=swap&subset=latin-ext');\n  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');\n\n  :root {\n    --color-bg--dark: hsl(210, 10%, 15%);\n    --color-fg--dark: hsl(0, 0%, 85%);\n    --color-bg--light: hsl(0, 0%, 100%);\n    --color-fg--light: hsl(0, 0%, 0%);\n    --color-accent: hsl(210, 100%, 50%);\n    --font-mono: 'Roboto Mono', monospace;\n    /* --font-sans: 'Roboto', sans-serif; */\n    --font-sans: 'Nunito Sans', sans-serif;\n  }\n\n  body {\n    --color-bg: var(--color-bg--dark);\n    --color-fg: var(--color-fg--dark);\n    background-color: var(--color-bg);\n    color: var(--color-fg);\n    font-family: var(--font-sans);\n  }\n\n  code {\n    font-family: var(--font-mono);\n  }\n"]);return E=function(){return e},e}var S=Object(c.b)(E()),L=function(){return Object(o.createElement)(c.a,{styles:S})},F=n(9);Object(F.render)(r.a.createElement(o.Fragment,null,r.a.createElement(L,null),r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.bb89f231.chunk.js.map