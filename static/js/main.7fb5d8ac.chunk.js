(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=a(7),u=a(1),i=a(5),s=a(6);var m=function(e){var t=Object(n.useState)(e),a=Object(u.a)(t,2),r=a[0],l=a[1];return{handleChange:function(e){l(e.target.value)},setValue:l,value:r}};a(15);var d=function(e){var t=e.addIdlessPost,a=m(""),n=m("");return r.a.createElement("form",{className:"FeedForm",onSubmit:function(e){e.preventDefault();var r={url:a.value,title:n.value};t(r),a.setValue(""),n.setValue("")}},r.a.createElement("input",{type:"text",value:a.value,onChange:a.handleChange,placeholder:"Enter Image URL"}),r.a.createElement("div",{className:"FeedFormLastRow"},r.a.createElement("input",{className:"FeedFormLastRow__input",type:"text",value:n.value,onChange:n.handleChange,placeholder:"Title"}),r.a.createElement("button",{type:"submit"},"New Post")))};a(16);var v=function(e){var t=e.title,a=e.url;return r.a.createElement("div",{className:"FeedPost"},r.a.createElement("div",{className:"FeedPost__title"},t),r.a.createElement("img",{className:"FeedPost__image",src:a,alt:""}))};a(17);var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{className:"Feed"},r.a.createElement(d,{addIdlessPost:function(e){var t=Object(c.a)({id:Object(s.uniqueId)("post")},e);l(Object(i.a)(function(e){e.unshift(t)}))}}),a.map(function(e){return r.a.createElement(v,{key:e.id,title:e.title,url:e.url})}))};a(18);var p=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(19);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.7fb5d8ac.chunk.js.map