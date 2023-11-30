"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[922],{8922:function(e,n,r){r.r(n),r.d(n,{default:function(){return L}});var t=r(2791),i=r(9434),a=r(4270),s=r(7047),u=r(9055),c=r(9128),l=r(208),o=r(184),d=function(e){var n=e.contact,r=n.id,t=n.name,a=n.number,d=(0,i.I0)();return(0,o.jsxs)(s.Vp,{children:[(0,o.jsx)("span",{children:t}),(0,o.jsx)("span",{children:a}),(0,o.jsx)(u.z,{type:"button",onClick:function(){return d((0,l.GK)(r))},children:(0,o.jsx)(c._YF,{})})]})},m=r(6916),h=function(e){return e.contacts.items},f=function(e){return e.filter},x=function(e){return e.contacts.isLoading},j=(0,m.P1)([h,f],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().trim().includes(n.toLowerCase().trim())}))})),v=r(6661),b=function(){var e=(0,i.v9)(j);return(0,o.jsx)(v.QI,{children:(0,o.jsx)(v.HC,{children:e.map((function(e){return(0,o.jsxs)("li",{children:[" ",(0,o.jsx)(d,{contact:e})]},e.id)}))})})},p=r(5705),g=r(6582),y=r(824),I=r(89),w=r(5350),C=r(7438),k=r(548),F=r(4137),q=r(8007),N=(r(7427),q.Ry().shape({name:q.Z_().min(3,"Too short!").required("This field is required!"),number:q.Z_().matches(/^\d{3}-\d{3}-\d{4}$/,"Must be in format: 000-000-0000").required("This field is required!")})),S=function(){var e=(0,i.I0)(),n=(0,i.v9)(h),r=(0,p.TA)({initialValues:{name:"",number:""},validationSchema:{quizSchema:N},onSubmit:function(e){alert(JSON.stringify(e,null,2))}});return(0,o.jsx)(g.k,{bg:"gray.100",align:"center",justify:"center",h:"100vh",children:(0,o.jsx)(y.xu,{bg:"white",p:6,rounded:"md",children:(0,o.jsx)("form",{onSubmit:function(r,t){var i=r.name,a=r.number,s=t.resetForm;if(n.some((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})))return s(),alert("WARNING! ".concat(i," is already in contacts"));e((0,l.uK)({name:i,number:a})),s()},children:(0,o.jsxs)(I.g,{spacing:4,align:"flex-start",children:[(0,o.jsxs)(w.NI,{children:[(0,o.jsx)(C.l,{htmlFor:"name",children:"Name"}),(0,o.jsx)(k.I,{id:"name",name:"name",type:"name",variant:"filled",value:r.values.name})]}),(0,o.jsxs)(w.NI,{children:[(0,o.jsx)(C.l,{htmlFor:"number",children:"Tel. Number "}),(0,o.jsx)(k.I,{id:"number",name:"number",type:"number",variant:"filled",value:r.values.email})]}),(0,o.jsx)(u.z,{type:"submit",colorScheme:F.rS.colors.add,width:"full",children:"Add Contact"})]})})})})},T=r(6895),_=function(){var e=(0,i.I0)(),n=(0,i.v9)(f).name;return(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"Find contact by name"}),(0,o.jsx)(k.I,{type:"text",name:"filter",value:n,onChange:function(n){var r=n.currentTarget.value;return e((0,T.T)(r))},placeholder:"Filter by name..."})]})};function L(){var e=(0,i.I0)(),n=(0,i.v9)(x);return(0,t.useEffect)((function(){e((0,l.yF)())}),[e]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.q,{children:(0,o.jsx)("title",{children:"Your contacts"})}),(0,o.jsx)(S,{}),(0,o.jsx)(_,{}),(0,o.jsx)("div",{children:n&&"Request in progress..."}),(0,o.jsx)(b,{})]})}}}]);
//# sourceMappingURL=922.4b7baf71.chunk.js.map