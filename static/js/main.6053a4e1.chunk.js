(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{10:function(e,t,o){e.exports={Trash:"ToDoItem_Trash__2uomJ"}},11:function(e,t,o){e.exports=o(19)},16:function(e,t,o){},17:function(e,t,o){},19:function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),r=o(8),i=o.n(r),l=(o(16),o(6)),s=o(1),c=o(2),u=o(4),m=o(3),d=(o(17),o(18),o(9)),p=o(5),h=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(e){var a;return Object(s.a)(this,o),(a=t.call(this,e)).state={title:""},a.onChange=function(e){return a.setState(Object(d.a)({},e.target.name,e.target.value))},a.onSubmit=function(e){e.preventDefault(),a.props.addToDo(a.state.title),a.setState({title:""})},a.state={opened:!1},a.toggleBox=a.toggleBox.bind(Object(p.a)(a)),a}return Object(c.a)(o,[{key:"toggleBox",value:function(){var e=this.state.opened;this.setState({opened:!e})}},{key:"render",value:function(){return this.state.opened?n.a.createElement("div",null,n.a.createElement("h1",null,"To Do List ",n.a.createElement("i",{className:"fa fa-plus-square",onClick:this.toggleBox})),n.a.createElement("form",{onSubmit:this.onSubmit},n.a.createElement("input",{type:"text",name:"title",value:this.state.title,onChange:this.onChange,placeholder:"Add TO-DO here",required:!0}))):n.a.createElement("div",null,n.a.createElement("h1",null,"To Do List ",n.a.createElement("i",{className:"fa fa-plus-square",onClick:this.toggleBox})))}}]),o}(a.Component),f=o(10),g=o.n(f),b=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(s.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getStyle=function(){return e.props.todo.completed?{textDecoration:"line-through",color:"LightSeaGreen"}:{textDecoration:"none"}},e}return Object(c.a)(o,[{key:"render",value:function(){var e=this.props.todo,t=e.id,o=e.title;return n.a.createElement("li",null,n.a.createElement("span",{className:g.a.Trash,onClick:this.props.removeToDo.bind(this,t)},n.a.createElement("i",{className:"fa fa-trash"})),n.a.createElement("span",{style:this.getStyle(),onClick:this.props.toggleClass.bind(this,t)},o))}}]),o}(a.Component),v=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){return Object(s.a)(this,o),t.apply(this,arguments)}return Object(c.a)(o,[{key:"render",value:function(){var e=this;return this.props.todoitems.map((function(t){return n.a.createElement("ul",null,n.a.createElement(b,{key:t.id,todo:t,toggleClass:e.props.toggleClass,removeToDo:e.props.removeToDo}))}))}}]),o}(a.Component),O=o(21),j=function(e){Object(u.a)(o,e);var t=Object(m.a)(o);function o(){var e;Object(s.a)(this,o);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={todoitems:[{id:Object(O.a)(),title:"CSS lernen",completed:!0},{id:Object(O.a)(),title:"Brief schreiben",completed:!1},{id:Object(O.a)(),title:"Obst kaufen",completed:!1},{id:Object(O.a)(),title:"App erstellen",completed:!1},{id:Object(O.a)(),title:"Staubsaugen",completed:!1}]},e.removeToDo=function(t){e.setState({todoitems:Object(l.a)(e.state.todoitems.filter((function(e){return e.id!==t})))})},e.toggleClass=function(t){e.setState({todoitems:e.state.todoitems.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.addToDo=function(t){var o={id:Object(O.a)(),title:t,completed:!1};e.setState({todoitems:[].concat(Object(l.a)(e.state.todoitems),[o])})},e}return Object(c.a)(o,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(h,{addToDo:this.addToDo}),n.a.createElement(v,{todoitems:this.state.todoitems,toggleClass:this.toggleClass,removeToDo:this.removeToDo}))}}]),o}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.6053a4e1.chunk.js.map