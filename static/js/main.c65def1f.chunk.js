(this["webpackJsonptodo-hooks"]=this["webpackJsonptodo-hooks"]||[]).push([[0],{24:function(e,t,n){},36:function(e,t,n){},40:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(2),a=n.n(i),o=n(29),r=n.n(o),s=(n(36),n(24),n(25)),l=n(5),u=n(13),d=n(18);n(37),n(46);d.a.initializeApp({apiKey:"AIzaSyDRoIAlW3caflcx-ax6o40VbfNcqxXI0F4",authDomain:"plantime-7d8e2.firebaseapp.com",projectId:"plantime-7d8e2",storageBucket:"plantime-7d8e2.appspot.com",messagingSenderId:"175309483958",appId:"1:175309483958:web:d6c2aef9adc0f03eecdb17",measurementId:"G-N1HDPPBVPV"});var j=d.a.auth(),b=(d.a.firestore(),new d.a.auth.GoogleAuthProvider),h=Object(i.createContext)({user:null}),f=function(e){var t=e.children,n=Object(i.useState)(null),a=Object(u.a)(n,2),o=a[0],r=a[1];return Object(i.useEffect)((function(){j.onAuthStateChanged((function(e){return r(e)}))}),[]),Object(c.jsx)(h.Provider,{value:{user:o},children:t})},O=function(){var e=Object(i.useContext)(h).user;return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("button",{className:"loginbutton",onClick:function(){e||j.signInWithPopup(b)},children:"Log In"})})},x=n(21),g=(n(40),function(e){var t=e.add,n=Object(i.useContext)(h).user,a=(new Date).toISOString().slice(0,10),o=1*a.slice(0,4)+1;o+="-12-31";var r=Object(i.useState)(""),s=Object(u.a)(r,2),l=s[0],d=s[1],j=Object(i.useState)(!1),b=Object(u.a)(j,2),f=b[0],O=b[1],x=Object(i.useState)(a),g=Object(u.a)(x,2),p=g[0],v=g[1];return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Wpisz zadanie...",value:l,onChange:function(e){d(e.target.value)}}),Object(c.jsx)("input",{type:"checkbox",checked:f,id:"important",onChange:function(e){O(e.target.checked)}}),Object(c.jsx)("label",{htmlFor:"important",children:"Priorytet"}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{htmlFor:"date",children:"Do kiedy zrobi\u0107: "}),Object(c.jsx)("input",{type:"date",id:"date",value:p,min:a,max:o,onChange:function(e){v(e.target.value)}}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){n?l&&(t(l,p,f)?(d(l),O(!1),v(a)):alert("Wprowad\u017a tre\u015b\u0107 zadania!")):alert("Musisz si\u0119 zalogowa\u0107")},children:"Dodaj"}),Object(c.jsx)("hr",{})]})}),p=function(e){var t=e.task,n=e.deleteTask,i=e.change,a=t.text,o=t.date,r=t.id,s=t.active,l=t.important,u=t.finishDate;if(s)return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{style:l?{color:"red"}:null,children:a})," - do ",Object(c.jsxs)("span",{children:[o," "]}),Object(c.jsx)("button",{onClick:function(){return i(r)},children:"Zosta\u0142o zrobione"}),Object(c.jsx)("button",{onClick:function(){return n(r)},children:"X"})]})});var d=new Date(u).toLocaleString();return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("p",{children:[Object(c.jsx)("strong",{children:a})," ",Object(c.jsxs)("em",{children:["(do ",o,")"]}),Object(c.jsx)("br",{}),"- potwierdzenie wykonania: ",Object(c.jsxs)("span",{children:[d," "]}),Object(c.jsx)("button",{onClick:function(){return n(r)},children:"X"})]})})},v=function(e){var t=e.tasks,n=e.deleteTask,i=e.change,a=t.filter((function(e){return e.active})),o=t.filter((function(e){return!e.active}));o.length>=2&&o.sort((function(e,t){return t.finishDate-e.finishDate})),a.length>=2&&a.sort((function(e,t){return(e=e.text.toLowerCase())<(t=t.text.toLowerCase())?-1:e>t?1:0}));var r=a.map((function(e){return Object(c.jsx)(p,{task:e,deleteTask:n,change:i},e.id)})),s=o.map((function(e){return Object(c.jsx)(p,{task:e,deleteTask:n,change:i},e.id)}));return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"active",children:[Object(c.jsx)("h2",{children:"Zadania do zrobienia:"}),r.length>0?r:Object(c.jsx)("p",{children:"Ale szcz\u0119\u015bcie :)"})]}),Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"done",children:[Object(c.jsxs)("h2",{children:["Zadania zrobione ",Object(c.jsxs)("em",{children:["(",o.length,")"]}),":"]}),o.length>5&&Object(c.jsx)("span",{style:{fontSize:"10px"},children:"Wy\u015bwietlonych jest ostatnich 5 zada\u0144"}),s.slice(0,5)]})]})},m=function(){var e=Object(i.useState)([{id:0,text:"Doda\u0107 osobne taski dla ka\u017cdego u\u017cytkownika",date:"2021-03-01",important:!1,finishDate:null,active:!0},{id:1,text:"Dostosowa\u0107 CSS",date:"2021-03-01",important:!1,finishDate:null,active:!0}]),t=Object(u.a)(e,2),n=t[0],a=t[1],o=n.length;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"PlanTime App"}),Object(c.jsx)("button",{className:"signout",onClick:function(){j.signOut(),alert("You were signed out")},children:"Log Out"}),Object(c.jsx)(g,{tasks:n,add:function(e,t,n){var c={id:o,text:e,date:t,important:n,finishDate:null,active:!0};return o++,a((function(e){return[].concat(Object(x.a)(e),[c])})),!0}}),Object(c.jsx)(v,{tasks:n,deleteTask:function(e){var t=Object(x.a)(n);t=t.filter((function(t){return t.id!==e})),a(t)},change:function(e){var t=Object(x.a)(n);t.forEach((function(n){n.id===e&&(n.active=!1,n.finishDate=(new Date).getTime()),a(t)}))}})]})},k=function(){var e=Object(i.useContext)(h).user;return Object(c.jsxs)(l.d,{children:[Object(c.jsx)(l.b,{exact:!0,path:"/",render:function(){return e?Object(c.jsx)(m,{}):Object(c.jsx)(l.a,{to:"/login"})}}),Object(c.jsx)(l.b,{path:"/login",render:function(){return e?Object(c.jsx)(l.a,{to:"/"}):Object(c.jsx)(O,{})}}),Object(c.jsx)(l.b,{render:function(){return e?Object(c.jsx)(l.a,{to:"/"}):Object(c.jsx)(l.a,{to:"/login"})}})]})},w=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f,{children:Object(c.jsx)(s.a,{basename:"/plan-time",children:Object(c.jsx)(k,{})})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/plan-time",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/plan-time","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):y(t,e)}))}}(),C()}},[[45,1,2]]]);
//# sourceMappingURL=main.c65def1f.chunk.js.map