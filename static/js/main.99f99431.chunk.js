(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{20:function(e,t,a){e.exports=a(31)},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(3),l=a.n(i),o=a(4),r=(a(25),a(17)),s=a(18),m=function(e){return n.a.createElement("form",{className:"input-form ".concat(e.theme)},n.a.createElement("input",{value:e.input,onChange:function(t){e.setInput(t.target.value)},type:"text",name:"input-text",id:"input-text",placeholder:"New To-Do...",className:"input-text ".concat(e.theme),autoFocus:!0}),n.a.createElement("button",{className:"addBtn ".concat(e.theme),onClick:function(t){t.preventDefault(),e.input.trim().match(/^\S/)&&(e.setToDoList([].concat(Object(r.a)(e.toDoList),[{title:e.input,id:Object(s.a)(),completed:!1}])),e.setInput(""))},type:"submit"},n.a.createElement("i",{className:"fas fa-plus"})))},u=a(34),d=a(33),h=a(8),f=a(9),p=function(e){var t=Object(c.useState)(!1),a=Object(o.a)(t,2),i=a[0],l=a[1],r=Object(c.useState)(e.item.title),s=Object(o.a)(r,2),m=s[0],u=s[1],d=function(t,a){var c=e.toDoList.map((function(e){return t===e.id?Object(f.a)(Object(f.a)({},e),{},{title:a}):e}));e.setToDoList(c)},p=function(){var t="toDoList__item ".concat(e.theme);return e.item.completed?"toDoList__item ".concat(e.theme," completed"):t},b=n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:e.item.completed?"toDoList__item-title ".concat(e.theme," completed"):"toDoList__item-title ".concat(e.theme)},e.item.title),n.a.createElement("div",{className:"btn-group ".concat(e.theme)},n.a.createElement("button",{className:"viewBtn edit ".concat(e.theme),onClick:function(){return l(!0)}},n.a.createElement("i",{className:"far fa-edit"})),n.a.createElement("button",{className:"viewBtn trash ".concat(e.theme),onClick:function(){e.setToDoList(e.toDoList.filter((function(t){return t.id!==e.item.id})))}},n.a.createElement("i",{className:"fas fa-trash-alt"})),n.a.createElement("button",{className:e.item.completed?"viewBtn check ".concat(e.theme," completed"):"viewBtn check ".concat(e.theme),onClick:function(){e.setToDoList(e.toDoList.map((function(t){return t.id===e.item.id?Object(f.a)(Object(f.a)({},t),{},{completed:!t.completed}):t})))}},n.a.createElement("i",{className:"far fa-check-square"})))),E=n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:function(t){t.preventDefault(),m.trim().match(/^\S/)&&(t.preventDefault(),d(e.item.id,m),l(!1))}},n.a.createElement("input",{value:m,id:"todo-edit",type:"text",onChange:function(e){u(e.target.value)},autoFocus:!0}),n.a.createElement("div",{className:"btn-group ".concat(e.theme)},n.a.createElement("button",{className:"editBtn cancel ".concat(e.theme),type:"button",onClick:function(){l(!1),u(e.item.title)}},n.a.createElement("i",{className:"far fa-times-circle"})),n.a.createElement("button",{className:"editBtn submit ".concat(e.theme),type:"submit"},n.a.createElement("i",{className:"far fa-check-circle"})))));return n.a.createElement(h.b,{key:e.index,draggableId:e.index+"",index:e.index},(function(e){return n.a.createElement("li",Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{className:p()}),i?E:b)}))},b=function(e){return n.a.createElement(h.a,{onDragEnd:function(t){var a=t.destination,c=t.source,n=t.reason;if(a&&"CANCEL"!==n&&(a.droppableId!==c.droppableId||a.index!==c.index)){var i=e.filteredList,l=e.filteredList[c.index];i.splice(c.index,1),i.splice(a.index,0,l)}}},n.a.createElement(h.c,{droppableId:"dp1"},(function(t){return n.a.createElement("ul",Object.assign({className:"toDoList ".concat(e.theme),ref:t.innerRef},t.droppableProps),n.a.createElement(u.a,{className:"toDoList"},e.filteredList.map((function(t,a){return n.a.createElement(d.a,{key:t.id,timeout:500,classNames:"toDoList__item"},n.a.createElement(p,{item:t,toDoList:e.toDoList,setToDoList:e.setToDoList,theme:e.theme,index:a}))}))),t.placeholder)})))},E=function(e){var t=function(t){e.setFilter(t.target.value),a(t.target.value)},a=function(t){switch(t){case"active":e.setFilterBtnClass({all:"",active:"__active",completed:""});break;case"completed":e.setFilterBtnClass({all:"",active:"",completed:"__active"});break;default:e.setFilterBtnClass({all:"__active",active:"",completed:""})}};return Object(c.useEffect)((function(){switch(e.filter){case"completed":e.setFilteredList(e.toDoList.filter((function(e){return!0===e.completed})));break;case"active":e.setFilteredList(e.toDoList.filter((function(e){return!1===e.completed})));break;default:e.setFilteredList(e.toDoList)}}),[e.filter,e.toDoList]),n.a.createElement("div",{className:"filter ".concat(e.theme)},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("button",{value:"all",className:"filter-btn ".concat(e.theme," ").concat(e.filterBtnClass.all),onClick:t},"All")),n.a.createElement("li",null,n.a.createElement("button",{value:"active",className:"filter-btn ".concat(e.theme," ").concat(e.filterBtnClass.active),onClick:t},"Active")),n.a.createElement("li",null,n.a.createElement("button",{value:"completed",className:"filter-btn ".concat(e.theme," ").concat(e.filterBtnClass.completed),onClick:t},"Completed"))))},v=function(e){return n.a.createElement("div",{className:"themeSwitchSection ".concat(e.theme)},n.a.createElement("h2",{className:"themeSwitchTitle ".concat(e.theme)},"Select A Theme:"),n.a.createElement("div",{className:"themeSwitcher"},n.a.createElement("div",{onClick:function(){return e.setTheme("theme_darkmode")},className:"themeSwitcher__darkmode"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_darkblue")},className:"themeSwitcher__darkblue"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_grey")},className:"themeSwitcher__grey"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_midblue")},className:"themeSwitcher__midblue"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_red")},className:"themeSwitcher__red"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_purple")},className:"themeSwitcher__purple"}),n.a.createElement("div",{onClick:function(){return e.setTheme("theme_orange")},className:"themeSwitcher__orange"})))};var _=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(c.useState)([]),r=Object(o.a)(l,2),s=r[0],u=r[1],d=Object(c.useState)("all"),h=Object(o.a)(d,2),f=h[0],p=h[1],_=Object(c.useState)([]),L=Object(o.a)(_,2),N=L[0],k=L[1],D=Object(c.useState)({all:"__active",active:"",completed:""}),g=Object(o.a)(D,2),C=g[0],O=g[1],j=Object(c.useState)("theme_darkblue"),w=Object(o.a)(j,2),S=w[0],T=w[1];return n.a.createElement("div",{className:"App ".concat(S)},n.a.createElement("h1",{className:"title ".concat(S)},"Obligatory React To-Do List"),n.a.createElement(m,{input:a,setInput:i,toDoList:s,setToDoList:u,theme:S}),n.a.createElement(E,{filter:f,setFilter:p,filterBtnClass:C,setFilterBtnClass:O,setFilteredList:k,toDoList:s,theme:S}),n.a.createElement(b,{toDoList:s,setToDoList:u,filteredList:N,setFilteredList:k,theme:S}),n.a.createElement(v,{theme:S,setTheme:T}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.99f99431.chunk.js.map