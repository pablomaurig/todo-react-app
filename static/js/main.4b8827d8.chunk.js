(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(8),s=c.n(i),r=(c(13),c(2)),l=c(7),d=c(3),o=c.p+"static/media/logo.6ce24c58.svg",j=c(0),u=function(){return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(j.jsx)("h1",{children:"To do app"})]})},h=function(e){var t=e.onSave,c=e.onCancel,a=Object(n.useState)({}),i=Object(d.a)(a,2),s=i[0],l=i[1];return Object(n.useEffect)((function(){l({})}),[]),Object(j.jsxs)("div",{className:"newTask",children:[Object(j.jsx)("h2",{className:"title",children:"New task"}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return l(Object(r.a)(Object(r.a)({},s),{},{title:e.target.value}))},value:s.title})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control",onChange:function(e){return l(Object(r.a)(Object(r.a)({},s),{},{description:e.target.value}))},children:s.description})}),Object(j.jsx)("button",{className:"button",onClick:function(){return t(s)},children:"Save"}),Object(j.jsx)("button",{className:"button cancel",onClick:c,children:"Cancel"})]})},b=c.p+"static/media/trash.3f1a5ad2.svg",O=function(e){var t=e.title,c=e.description,n=e.checked,a=e.handleDelete,i=e.handleChek;return Object(j.jsxs)("div",{className:"task",children:[Object(j.jsxs)("div",{onClick:i,children:[Object(j.jsx)("input",{onChange:i,type:"checkbox",checked:n?"checked":""}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:c})]})]}),Object(j.jsx)("button",{onClick:a,children:Object(j.jsx)("img",{src:b,className:"delete",alt:"delete"})})]})},p=(c(15),[{id:1,title:"Sacar al perro",description:"Dos veces al d\xeda",checked:!0},{id:2,title:"Darle de comer al perro",description:"Una vez al d\xeda",checked:!1},{id:3,title:"Lavar al auto",description:"Cada quince d\xedas",checked:!1},{id:4,title:"Hacer ejercicios de NT2",description:"Cuando se pueda",checked:!1}]);var f=function(){var e=Object(n.useState)(p),t=Object(d.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!1),s=Object(d.a)(i,2),o=s[0],b=s[1],f=Object(n.useState)((function(){return c.length})),x=Object(d.a)(f,2),m=x[0],k=x[1],v=Object(n.useState)((function(){return c.filter((function(e){return!0===e.checked})).length})),g=Object(d.a)(v,2),N=g[0],C=g[1];return console.log(c),Object(n.useEffect)((function(){k(c.length),C(c.filter((function(e){return!0===e.checked})).length)}),[c]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("main",{children:[o?Object(j.jsx)(h,{onSave:function(e){var t=e.title,n=e.description;if(t||n){var i=c.length>0?Math.max.apply(Math,Object(l.a)(c.map((function(e){return e.id}))))+1:1,s=Object(r.a)(Object(r.a)({id:i},e),{},{checked:!1});a([].concat(Object(l.a)(c),[s]))}b(!1)},onCancel:function(){b(!1)}}):Object(j.jsxs)("div",{className:"count-container",children:[Object(j.jsxs)("h3",{children:["Total tasks: ",Object(j.jsx)("b",{children:m})]}),Object(j.jsx)("button",{className:"button",onClick:function(){b(!0)},children:"Add new task"}),Object(j.jsxs)("h3",{children:["Completed tasks: ",Object(j.jsx)("b",{children:N})]})]}),Object(j.jsx)("div",{className:"container",children:c.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"title",children:"My tasks"}),c.slice(0).reverse().map((function(e){return Object(j.jsx)(O,{id:e.id,title:e.title,description:e.description,checked:e.checked,handleChek:function(){return function(e){var t=c.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{checked:!t.checked}):t}));a(t)}(e.id)},handleDelete:function(){return t=e.id,void a(c.filter((function(e){return e.id!==t})));var t}},e.id)}))]}):!o&&Object(j.jsx)("h2",{className:"title",children:"Please, create a task"})})]})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.4b8827d8.chunk.js.map