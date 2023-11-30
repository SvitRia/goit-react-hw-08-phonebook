"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[70],{6070:function(e,n,t){t.r(n),t.d(n,{default:function(){return me}});var r=t(4270),a=t(9434),i=t(9328),o=t(5705),s=t(6582),l=t(824),d=t(89),c=t(5350),u=t(7438),v=t(548),m=t(3004),h=t(4925),f=t(1413),p=t(9439),b=t(2791);var k=(0,t(9886).k)({name:"CheckboxGroupContext",strict:!1}),g=(0,p.Z)(k,2),y=(g[0],g[1]),x=t(5113),Z=t(184),w=["isIndeterminate","isChecked"];function C(e){return(0,Z.jsx)(x.m.svg,(0,f.Z)((0,f.Z)({width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16}},e),{},{children:(0,Z.jsx)("polyline",{points:"1.5 6 4.5 9 10.5 1"})}))}function P(e){return(0,Z.jsx)(x.m.svg,(0,f.Z)((0,f.Z)({width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4}},e),{},{children:(0,Z.jsx)("line",{x1:"21",x2:"3",y1:"12",y2:"12"})}))}function j(e){var n=e.isIndeterminate,t=e.isChecked,r=(0,h.Z)(e,w),a=n?P:C;return t||n?(0,Z.jsx)(x.m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:(0,Z.jsx)(a,(0,f.Z)({},r))}):null}var I=t(7762),B=t(467),E=t(9205),S=t(5280),_=t(6367),M=t(4591),N=t(6992),L={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"};var F=function(){return"undefined"!==typeof document};var D=!1,R=null,A=!1,q=!1,K=new Set;function G(e,n){K.forEach((function(t){return t(e,n)}))}var z="undefined"!==typeof window&&null!=window.navigator&&/^Mac/.test(window.navigator.platform);function J(e){var n;A=!0,(n=e).metaKey||!z&&n.altKey||n.ctrlKey||"Control"===n.key||"Shift"===n.key||"Meta"===n.key||(R="keyboard",G("keyboard",e))}function O(e){if(R="pointer","mousedown"===e.type||"pointerdown"===e.type){A=!0;var n=e.composedPath?e.composedPath()[0]:e.target,t=!1;try{t=n.matches(":focus-visible")}catch(r){}if(t)return;G("pointer",e)}}function W(e){var n;(0===(n=e).mozInputSource&&n.isTrusted||0===n.detail&&!n.pointerType)&&(A=!0,R="virtual")}function T(e){e.target!==window&&e.target!==document&&(A||q||(R="virtual",G("virtual",e)),A=!1,q=!1)}function U(){A=!1,q=!0}function H(){return"pointer"!==R}function X(){if(F()&&!D){var e=HTMLElement.prototype.focus;HTMLElement.prototype.focus=function(){A=!0;for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];e.apply(this,t)},document.addEventListener("keydown",J,!0),document.addEventListener("keyup",J,!0),document.addEventListener("click",W,!0),window.addEventListener("focus",T,!0),window.addEventListener("blur",U,!1),"undefined"!==typeof PointerEvent?(document.addEventListener("pointerdown",O,!0),document.addEventListener("pointermove",O,!0),document.addEventListener("pointerup",O,!0)):(document.addEventListener("mousedown",O,!0),document.addEventListener("mousemove",O,!0),document.addEventListener("mouseup",O,!0)),D=!0}}function V(e){X(),e(H());var n=function(){return e(H())};return K.add(n),function(){K.delete(n)}}var Q=["defaultChecked","isChecked","isFocusable","onChange","isIndeterminate","name","value","tabIndex","aria-label","aria-labelledby","aria-invalid"];function Y(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),a=(0,I.Z)(t);try{for(a.s();!(n=a.n()).done;){var i=n.value;i in r&&delete r[i]}}catch(o){a.e(o)}finally{a.f()}return r}function $(e){e.preventDefault(),e.stopPropagation()}var ee=t(2554),ne=t(5597),te=t(6516),re=t(2996),ae=["spacing","className","children","iconColor","iconSize","icon","isChecked","isDisabled","onChange","inputProps"],ie={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},oe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},se=(0,ee.F4)({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),le=(0,ee.F4)({from:{opacity:0},to:{opacity:1}}),de=(0,ee.F4)({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),ce=(0,ne.G)((function(e,n){var t=y(),r=(0,f.Z)((0,f.Z)({},t),e),a=(0,te.jC)("Checkbox",r),i=(0,re.Lr)(e),o=i.spacing,s=void 0===o?"0.5rem":o,l=i.className,d=i.children,c=i.iconColor,u=i.iconSize,v=i.icon,m=void 0===v?(0,Z.jsx)(j,{}):v,k=i.isChecked,g=i.isDisabled,w=void 0===g?null==t?void 0:t.isDisabled:g,C=i.onChange,P=i.inputProps,I=(0,h.Z)(i,ae),F=k;(null==t?void 0:t.value)&&i.value&&(F=t.value.includes(i.value));var D=C;(null==t?void 0:t.onChange)&&i.value&&(D=(0,N.PP)(t.onChange,C));var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(0,B.K)(e),t=n.isDisabled,r=n.isReadOnly,a=n.isRequired,i=n.isInvalid,o=n.id,s=n.onBlur,l=n.onFocus,d=n["aria-describedby"],c=e.defaultChecked,u=e.isChecked,v=e.isFocusable,m=e.onChange,k=e.isIndeterminate,g=e.name,y=e.value,x=e.tabIndex,Z=void 0===x?void 0:x,w=e["aria-label"],C=e["aria-labelledby"],P=e["aria-invalid"],j=Y((0,h.Z)(e,Q),["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),I=(0,_.W)(m),F=(0,_.W)(s),D=(0,_.W)(l),R=(0,b.useState)(!1),A=(0,p.Z)(R,2),q=A[0],K=A[1],G=(0,b.useState)(!1),z=(0,p.Z)(G,2),J=z[0],O=z[1],W=(0,b.useState)(!1),T=(0,p.Z)(W,2),U=T[0],H=T[1],X=(0,b.useState)(!1),ee=(0,p.Z)(X,2),ne=ee[0],te=ee[1];(0,b.useEffect)((function(){return V(K)}),[]);var re=(0,b.useRef)(null),ae=(0,b.useState)(!0),ie=(0,p.Z)(ae,2),oe=ie[0],se=ie[1],le=(0,b.useState)(!!c),de=(0,p.Z)(le,2),ce=de[0],ue=de[1],ve=void 0!==u,me=ve?u:ce,he=(0,b.useCallback)((function(e){r||t?e.preventDefault():(ve||ue(me?e.target.checked:!!k||e.target.checked),null==I||I(e))}),[r,t,me,ve,k,I]);(0,E.G)((function(){re.current&&(re.current.indeterminate=Boolean(k))}),[k]),(0,S.r)((function(){t&&O(!1)}),[t,O]),(0,E.G)((function(){var e=re.current;if(null==e?void 0:e.form){var n=function(){ue(!!c)};return e.form.addEventListener("reset",n),function(){var t;return null==(t=e.form)?void 0:t.removeEventListener("reset",n)}}}),[]);var fe=t&&!v,pe=(0,b.useCallback)((function(e){" "===e.key&&te(!0)}),[te]),be=(0,b.useCallback)((function(e){" "===e.key&&te(!1)}),[te]);(0,E.G)((function(){re.current&&re.current.checked!==me&&ue(re.current.checked)}),[re.current]);var ke=(0,b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=function(e){J&&e.preventDefault(),te(!0)};return(0,f.Z)((0,f.Z)({},e),{},{ref:n,"data-active":(0,N.PB)(ne),"data-hover":(0,N.PB)(U),"data-checked":(0,N.PB)(me),"data-focus":(0,N.PB)(J),"data-focus-visible":(0,N.PB)(J&&q),"data-indeterminate":(0,N.PB)(k),"data-disabled":(0,N.PB)(t),"data-invalid":(0,N.PB)(i),"data-readonly":(0,N.PB)(r),"aria-hidden":!0,onMouseDown:(0,N.v0)(e.onMouseDown,a),onMouseUp:(0,N.v0)(e.onMouseUp,(function(){return te(!1)})),onMouseEnter:(0,N.v0)(e.onMouseEnter,(function(){return H(!0)})),onMouseLeave:(0,N.v0)(e.onMouseLeave,(function(){return H(!1)}))})}),[ne,me,t,J,q,U,k,i,r]),ge=(0,b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,f.Z)((0,f.Z)({},e),{},{ref:n,"data-active":(0,N.PB)(ne),"data-hover":(0,N.PB)(U),"data-checked":(0,N.PB)(me),"data-focus":(0,N.PB)(J),"data-focus-visible":(0,N.PB)(J&&q),"data-indeterminate":(0,N.PB)(k),"data-disabled":(0,N.PB)(t),"data-invalid":(0,N.PB)(i),"data-readonly":(0,N.PB)(r)})}),[ne,me,t,J,q,U,k,i,r]),ye=(0,b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,f.Z)((0,f.Z)((0,f.Z)({},j),e),{},{ref:(0,M.lq)(n,(function(e){e&&se("LABEL"===e.tagName)})),onClick:(0,N.v0)(e.onClick,(function(){var e;oe||(null==(e=re.current)||e.click(),requestAnimationFrame((function(){var e;null==(e=re.current)||e.focus({preventScroll:!0})})))})),"data-disabled":(0,N.PB)(t),"data-checked":(0,N.PB)(me),"data-invalid":(0,N.PB)(i)})}),[j,t,me,i,oe]),xe=(0,b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,f.Z)((0,f.Z)({},e),{},{ref:(0,M.lq)(re,n),type:"checkbox",name:g,value:y,id:o,tabIndex:Z,onChange:(0,N.v0)(e.onChange,he),onBlur:(0,N.v0)(e.onBlur,F,(function(){return O(!1)})),onFocus:(0,N.v0)(e.onFocus,D,(function(){return O(!0)})),onKeyDown:(0,N.v0)(e.onKeyDown,pe),onKeyUp:(0,N.v0)(e.onKeyUp,be),required:a,checked:me,disabled:fe,readOnly:r,"aria-label":w,"aria-labelledby":C,"aria-invalid":P?Boolean(P):i,"aria-describedby":d,"aria-disabled":t,style:L})}),[g,y,o,he,F,D,pe,be,a,me,fe,r,w,C,P,i,d,t,Z]),Ze=(0,b.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,f.Z)((0,f.Z)({},e),{},{ref:n,onMouseDown:(0,N.v0)(e.onMouseDown,$),"data-disabled":(0,N.PB)(t),"data-checked":(0,N.PB)(me),"data-invalid":(0,N.PB)(i)})}),[me,t,i]);return{state:{isInvalid:i,isFocused:J,isChecked:me,isActive:ne,isHovered:U,isIndeterminate:k,isDisabled:t,isReadOnly:r,isRequired:a},getRootProps:ye,getCheckboxProps:ke,getIndicatorProps:ge,getInputProps:xe,getLabelProps:Ze,htmlProps:j}}((0,f.Z)((0,f.Z)({},I),{},{isDisabled:w,isChecked:F,onChange:D})),A=R.state,q=R.getInputProps,K=R.getCheckboxProps,G=R.getLabelProps,z=R.getRootProps,J=function(e){var n=(0,b.useState)(e),t=(0,p.Z)(n,2),r=t[0],a=t[1],i=(0,b.useState)(!1),o=(0,p.Z)(i,2),s=o[0],l=o[1];return e!==r&&(l(!0),a(e)),s}(A.isChecked),O=(0,b.useMemo)((function(){return(0,f.Z)({animation:J?A.isIndeterminate?"".concat(le," 20ms linear, ").concat(de," 200ms linear"):"".concat(se," 200ms linear"):void 0,fontSize:u,color:c},a.icon)}),[c,u,J,A.isIndeterminate,a.icon]),W=(0,b.cloneElement)(m,{__css:O,isIndeterminate:A.isIndeterminate,isChecked:A.isChecked});return(0,Z.jsxs)(x.m.label,(0,f.Z)((0,f.Z)({__css:(0,f.Z)((0,f.Z)({},oe),a.container),className:(0,N.cx)("chakra-checkbox",l)},z()),{},{children:[(0,Z.jsx)("input",(0,f.Z)({className:"chakra-checkbox__input"},q(P,n))),(0,Z.jsx)(x.m.span,(0,f.Z)((0,f.Z)({__css:(0,f.Z)((0,f.Z)({},ie),a.control),className:"chakra-checkbox__control"},K()),{},{children:W})),d&&(0,Z.jsx)(x.m.span,(0,f.Z)((0,f.Z)({className:"chakra-checkbox__label"},G()),{},{__css:(0,f.Z)({marginStart:s},a.label),children:d}))]}))}));ce.displayName="Checkbox";var ue=t(9055),ve=function(){var e=(0,a.I0)();return(0,Z.jsx)(s.k,{bg:"bisque_lite",align:"center",justify:"center",h:"100vh",children:(0,Z.jsx)(l.xu,{bg:"white",w:"40vw",p:6,rounded:"md",children:(0,Z.jsx)(o.J9,{initialValues:{name:"",email:"",password:"",rememberMe:!1},onSubmit:function(n,t){var r=n.name,a=n.email,o=n.password,s=t.resetForm;e((0,i.z2)({name:r,email:a,password:o})),s()},children:function(e){var n=e.handleSubmit,t=e.errors,r=e.touched;return(0,Z.jsx)("form",{onSubmit:n,children:(0,Z.jsxs)(d.g,{spacing:4,align:"flex-start",children:[(0,Z.jsxs)(c.NI,{children:[(0,Z.jsx)(u.l,{htmlFor:"name",children:"Name"}),(0,Z.jsx)(o.gN,{as:v.I,id:"name",name:"name",type:"name",variant:"filled"})]}),(0,Z.jsxs)(c.NI,{children:[(0,Z.jsx)(u.l,{htmlFor:"email",children:"Email Address"}),(0,Z.jsx)(o.gN,{as:v.I,id:"email",name:"email",type:"email",variant:"filled"})]}),(0,Z.jsxs)(c.NI,{isInvalid:!!t.password&&r.password,children:[(0,Z.jsx)(u.l,{htmlFor:"password",children:"Password"}),(0,Z.jsx)(o.gN,{as:v.I,id:"password",name:"password",type:"password",variant:"filled",validate:function(e){var n;return e.length<6&&(n="Password must contain at least 6 characters"),n}}),(0,Z.jsx)(m.J1,{children:t.password})]}),(0,Z.jsx)(o.gN,{as:ce,id:"rememberMe",name:"rememberMe",colorScheme:"purple",children:"Remember me?"}),(0,Z.jsx)(ue.z,{type:"submit",colorScheme:"purple",width:"full",children:"Register me"})]})})}})})})};function me(){return(0,Z.jsxs)("div",{children:[(0,Z.jsx)(r.q,{children:(0,Z.jsx)("title",{children:"Registration"})}),(0,Z.jsx)(ve,{})]})}},3004:function(e,n,t){t.d(n,{J1:function(){return k}});var r=t(1413),a=t(9439),i=t(5350),o=t(9640),s=t(9886),l=t(5597),d=t(6516),c=t(2996),u=t(5113),v=t(6992),m=t(184),h=(0,s.k)({name:"FormErrorStylesContext",errorMessage:"useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormError />\" "}),f=(0,a.Z)(h,2),p=f[0],b=f[1],k=(0,l.G)((function(e,n){var t=(0,d.jC)("FormError",e),a=(0,c.Lr)(e),o=(0,i.NJ)();return(null==o?void 0:o.isInvalid)?(0,m.jsx)(p,{value:t,children:(0,m.jsx)(u.m.div,(0,r.Z)((0,r.Z)({},null==o?void 0:o.getErrorMessageProps(a,n)),{},{className:(0,v.cx)("chakra-form__error-message",e.className),__css:(0,r.Z)({display:"flex",alignItems:"center"},t.text)}))}):null}));k.displayName="FormErrorMessage",(0,l.G)((function(e,n){var t=b(),a=(0,i.NJ)();if(!(null==a?void 0:a.isInvalid))return null;var s=(0,v.cx)("chakra-form__error-icon",e.className);return(0,m.jsx)(o.J,(0,r.Z)((0,r.Z)({ref:n,"aria-hidden":!0},e),{},{__css:t.icon,className:s,children:(0,m.jsx)("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})}))})).displayName="FormErrorIcon"}}]);
//# sourceMappingURL=70.46d6df93.chunk.js.map