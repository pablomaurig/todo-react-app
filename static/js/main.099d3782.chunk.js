(this["webpackJsonptodo-react-app"]=this["webpackJsonptodo-react-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),a=c(8),s=c.n(a),r=(c(13),c(7)),d=c(2),l=c(3),o=c.p+"static/media/logo.6ce24c58.svg",j=c(0),u=function(){return Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(j.jsx)("h1",{children:"To do app"})]})},b=function(e){var t=e.onSave,c=e.onCancel,i=e.taskToEdit,a=Object(n.useState)(i),s=Object(l.a)(a,2),r=s[0],o=s[1];return Object(j.jsxs)("div",{className:"newTask",children:[Object(j.jsx)("h2",{className:"title",children:"New task"}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("input",{className:"form-control",type:"text",onChange:function(e){return o(Object(d.a)(Object(d.a)({},r),{},{title:e.target.value}))},value:r.title?r.title:""})}),Object(j.jsx)("div",{className:"form-group",children:Object(j.jsx)("textarea",{className:"form-control",defaultValue:r.description?r.description:"",onChange:function(e){return o(Object(d.a)(Object(d.a)({},r),{},{description:e.target.value}))}})}),Object(j.jsx)("button",{className:"button",onClick:function(){return t(r)},children:"Save"}),Object(j.jsx)("button",{className:"button cancel",onClick:c,children:"Cancel"})]})},h=c.p+"static/media/trash.3f1a5ad2.svg",O=c.p+"static/media/edit.005b5637.svg",p=function(e){var t=e.title,c=e.description,n=e.checked,i=e.handleDelete,a=e.handleChek,s=e.handleEdit;return Object(j.jsxs)("div",{className:"task",children:[Object(j.jsxs)("div",{onClick:a,children:[Object(j.jsx)("input",{onChange:a,type:"checkbox",checked:n?"checked":""}),Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("h3",{children:t}),Object(j.jsx)("p",{children:c})]})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:s,title:"edit",children:Object(j.jsx)("img",{src:O,className:"icon",alt:"edit"})}),Object(j.jsx)("button",{onClick:i,title:"delete",children:Object(j.jsx)("img",{src:h,className:"icon",alt:"delete"})})]})]})},f=(c(15),[{id:1,title:"Sacar al perro",description:"Dos veces al d\xeda",checked:!0},{id:2,title:"Darle de comer al perro",description:"Una vez al d\xeda",checked:!1},{id:3,title:"Lavar al auto",description:"Cada quince d\xedas",checked:!1},{id:4,title:"Hacer ejercicios de NT2",description:"Cuando se pueda",checked:!1}]);var x=function(){var e=Object(n.useState)(f),t=Object(l.a)(e,2),c=t[0],i=t[1],a=Object(n.useState)({}),s=Object(l.a)(a,2),o=s[0],h=s[1],O=Object(n.useState)(!1),x=Object(l.a)(O,2),m=x[0],v=x[1],k=Object(n.useState)((function(){return c.length})),g=Object(l.a)(k,2),N=g[0],C=g[1],S=Object(n.useState)((function(){return c.filter((function(e){return!0===e.checked})).length})),T=Object(l.a)(S,2),E=T[0],w=T[1];return Object(n.useEffect)((function(){C(c.length),w(c.filter((function(e){return!0===e.checked})).length)}),[c]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("main",{children:[m?Object(j.jsx)(b,{taskToEdit:o,onSave:function(e){var t=e.title,n=e.description,a=e.id;if(a){var s=c.map((function(e){return e.id===a?Object(d.a)(Object(d.a)({},e),{},{title:t,description:n}):e}));i(s)}else{var l=c.length>0?Math.max.apply(Math,Object(r.a)(c.map((function(e){return e.id}))))+1:1,o=Object(d.a)(Object(d.a)({id:l},e),{},{checked:!1});i([].concat(Object(r.a)(c),[o]))}v(!1),h({})},onCancel:function(){v(!1),h({})}}):Object(j.jsxs)("div",{className:"count-container",children:[Object(j.jsxs)("h3",{children:["Total tasks: ",Object(j.jsx)("b",{children:N})]}),Object(j.jsx)("button",{className:"button",onClick:function(){v(!0)},children:"Add new task"}),Object(j.jsxs)("h3",{children:["Completed tasks: ",Object(j.jsx)("b",{children:E})]})]}),Object(j.jsx)("div",{className:"container",children:c.length>0?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"title",children:"My tasks"}),c.slice(0).reverse().map((function(e){return Object(j.jsx)(p,{id:e.id,title:e.title,description:e.description,checked:e.checked,handleChek:function(){return function(e){var t=c.map((function(t){return t.id===e?Object(d.a)(Object(d.a)({},t),{},{checked:!t.checked}):t}));i(t)}(e.id)},handleEdit:function(){return t=e.id,h(c.find((function(e){return e.id===t}))),void v(!0);var t},handleDelete:function(){return t=e.id,void i(c.filter((function(e){return e.id!==t})));var t}},e.id)}))]}):!m&&Object(j.jsx)("h2",{className:"title",children:"Please, create a task"})})]})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),m()}},[[16,1,2]]]);
//# sourceMappingURL=main.099d3782.chunk.js.map