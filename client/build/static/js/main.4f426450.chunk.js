(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(e,t,c){},33:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),l=c(19),r=c.n(l),i=(c(26),c(5)),o=(c(33),c(4)),j=c(3),d=c.n(j),b=function(e){var t=Object(n.useState)(),c=Object(o.a)(t,2),a=c[0],l=c[1];return Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pets").then((function(e){console.log(e.data.pets),l(e.data.pets)})).catch((function(e){return console.log(e)}))}),[]),Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h2",{className:"col-7",children:"These pets are looking for a good home"}),Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-3",children:Object(s.jsx)("a",{href:"/new",children:"add a pet to the shelter"})})]}),Object(s.jsxs)("table",{className:"table table-bordered",children:[Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Type"}),Object(s.jsx)("th",{children:"Actions"})]}),a?a.map((function(e,t){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:e.name}),Object(s.jsx)("td",{children:e.type}),Object(s.jsxs)("td",{children:[Object(s.jsx)("a",{href:"http://localhost:3000/pets/".concat(e._id),children:"Details"}),"\xa0|\xa0",Object(s.jsx)("a",{href:"http://localhost:3000/pets/update/".concat(e._id),children:"Edit"})]})]})})):""]})]})},h=function(e){var t=Object(n.useState)({}),c=Object(o.a)(t,2),a=c[0],l=c[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e.data.pet),l(e.data.pet)}))}),[]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("h2",{className:"col-6",children:["Details about: ",a.name]}),Object(s.jsx)("div",{className:"col-2"}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsxs)("button",{className:"btn btn-danger",onClick:function(){return e=a._id,void d.a.delete("http://localhost:8000/api/pets/delete/".concat(e)).then((function(e){console.log("Pet adopted!"),Object(i.b)("/")})).catch((function(e){return console.log(e)}));var e},children:["Adopt ",a.name]})}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("a",{href:"/",className:"btn btn-info",children:"Home"})})]}),Object(s.jsxs)("div",{className:"border border-dark p-4",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Pet type:"})})}),Object(s.jsx)("div",{className:"col",children:a.type})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Description:"})})}),Object(s.jsx)("div",{className:"col",children:a.description})]}),Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("h3",{children:Object(s.jsx)("strong",{children:"Skills:"})})}),Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("p",{children:a.skill1}),Object(s.jsx)("p",{children:a.skill2}),Object(s.jsx)("p",{children:a.skill3})]})]})]})]})},O=c(6),m=c(8),p=function(e){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"border border-dark p-4",children:Object(s.jsx)("form",{onSubmit:e.onSubmitHandler,children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"col-5",children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Name:"}),Object(s.jsx)("input",{type:"text",name:"name",className:"form-control",onChange:e.onChangeHandler,value:e.form.name}),e.error.name?Object(s.jsx)("span",{className:"text-danger",children:e.error.name.message}):""]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Type:"}),Object(s.jsx)("input",{type:"text",name:"type",className:"form-control",onChange:e.onChangeHandler,value:e.form.type}),e.error.type?Object(s.jsx)("span",{className:"text-danger",children:e.error.type.message}):""]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Pet Description:"}),Object(s.jsx)("input",{type:"text",name:"description",className:"form-control",onChange:e.onChangeHandler,value:e.form.description}),e.error.description?Object(s.jsx)("span",{className:"text-danger",children:e.error.description.message}):""]}),Object(s.jsx)("input",{type:"submit",value:"Submit",className:"btn btn-primary"})]}),Object(s.jsx)("div",{className:"col-2"}),Object(s.jsxs)("div",{className:"col-5",children:[Object(s.jsx)("p",{children:Object(s.jsx)("strong",{children:"Skills (Optional)"})}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 1:"}),Object(s.jsx)("input",{type:"text",name:"skill1",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill1})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 2:"}),Object(s.jsx)("input",{type:"text",name:"skill2",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill2})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Skill 3:"}),Object(s.jsx)("input",{type:"text",name:"skill3",className:"form-control",onChange:e.onChangeHandler,value:e.form.skill3})]})]})]})})})})},x=function(e){var t=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),c=Object(o.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)({}),j=Object(o.a)(r,2),b=j[0],h=j[1];return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("h2",{className:"col-6",children:"Know a pet needing a home?"}),Object(s.jsx)("div",{className:"col-4"}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("a",{href:"/",className:"btn btn-info",children:"Home"})})]}),Object(s.jsx)(p,{form:a,onChangeHandler:function(e){e.preventDefault(),l(Object(m.a)(Object(m.a)({},a),{},Object(O.a)({},e.target.name,e.target.value)))},onSubmitHandler:function(e){e.preventDefault(),d.a.post("http://localhost:8000/api/pets/new",a).then((function(e){e.data.error?(console.log(e.data.error.errors),h(e.data.error.errors)):(console.log("It worked!"),Object(i.b)("/"))})).catch(console.log("Something went wrong!"))},error:b})]})},u=function(e){var t=Object(n.useState)({name:"",type:"",description:"",skill1:"",skill2:"",skill3:""}),c=Object(o.a)(t,2),a=c[0],l=c[1],r=Object(n.useState)({}),j=Object(o.a)(r,2),b=j[0],h=j[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e.data.pet),l(e.data.pet)})).catch((function(e){return console.log(e)}))}),[]);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("h2",{className:"col-6",children:["Edit ",a.name]}),Object(s.jsx)("div",{className:"col-4"}),Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("a",{href:"/",className:"btn btn-info",children:"Home"})})]}),Object(s.jsx)(p,{form:a,onChangeHandler:function(e){e.preventDefault(),l(Object(m.a)(Object(m.a)({},a),{},Object(O.a)({},e.target.name,e.target.value)))},onSubmitHandler:function(t){t.preventDefault(),d.a.put("http://localhost:8000/api/pets/update/".concat(e._id),a).then((function(e){e.data.error?h(e.data.error.errors):Object(i.b)("/")}))},error:b})]})};var f=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"Pet Shelter"}),Object(s.jsxs)(i.a,{children:[Object(s.jsx)(b,{path:"/"}),Object(s.jsx)(h,{path:"/pets/:_id"}),Object(s.jsx)(x,{path:"/new"}),Object(s.jsx)(u,{path:"/pets/update/:_id"})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,l=t.getTTFB;c(e),s(e),n(e),a(e),l(e)}))};c(51);r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root")),v()}},[[52,1,2]]]);
//# sourceMappingURL=main.4f426450.chunk.js.map