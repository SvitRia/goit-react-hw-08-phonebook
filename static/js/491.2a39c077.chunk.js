"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[491],{9128:function(e,t,n){n.d(t,{_YF:function(){return f}});var r=n(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(i),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),u(e.child))}))}function s(e){return function(t){return r.createElement(c,o({attr:o({},e.attr)},t),u(e.child))}}function c(e){var t=function(t){var n,i=e.attr,a=e.size,u=e.title,s=l(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,i,s,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(i)}function f(e){return s({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}}]})(e)}},6916:function(e,t,n){n.d(t,{P1:function(){return u}});var r="NOT_FOUND";var i=function(e,t){return e===t};function a(e,t){var n="object"===typeof t?t:{equalityCheck:t},a=n.equalityCheck,o=void 0===a?i:a,l=n.maxSize,u=void 0===l?1:l,s=n.resultEqualityCheck,c=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,i=0;i<r;i++)if(!e(t[i],n[i]))return!1;return!0}}(o),f=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:r},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(c):function(e,t){var n=[];function i(e){var i=n.findIndex((function(n){return t(e,n.key)}));if(i>-1){var a=n[i];return i>0&&(n.splice(i,1),n.unshift(a)),a.value}return r}return{get:i,put:function(t,a){i(t)===r&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,c);function p(){var t=f.get(arguments);if(t===r){if(t=e.apply(null,arguments),s){var n=f.getEntries(),i=n.find((function(e){return s(e.value,t)}));i&&(t=i.value)}f.put(arguments,t)}return t}return p.clearCache=function(){return f.clear()},p}function o(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function l(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=function(){for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];var a,l=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=u,f=c.memoizeOptions,p=void 0===f?n:f,d=Array.isArray(p)?p:[p],y=o(r),v=e.apply(void 0,[function(){return l++,s.apply(null,arguments)}].concat(d)),m=e((function(){for(var e=[],t=y.length,n=0;n<t;n++)e.push(y[n].apply(null,arguments));return a=v.apply(null,e)}));return Object.assign(m,{resultFunc:s,memoizedResultFunc:v,dependencies:y,lastResult:function(){return a},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),m};return i}var u=l(a)},6661:function(e,t,n){n.d(t,{HC:function(){return C},QI:function(){return w}});var r=n(1413),i=n(4942),a=n(4925),o=n(9439),l=n(9640),u=n(9886),s=n(7200),c=n(5597),f=n(6516),p=n(2996),d=n(5113),y=n(184),v=["children","styleType","stylePosition","spacing"],m=["as"],h=["as"],g=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),x=(0,o.Z)(g,2),Z=x[0],j=x[1],b=(0,c.G)((function(e,t){var n=(0,f.jC)("List",e),o=(0,p.Lr)(e),l=o.children,u=o.styleType,c=void 0===u?"none":u,m=o.stylePosition,h=o.spacing,g=(0,a.Z)(o,v),x=(0,s.W)(l),j=h?(0,i.Z)({},"& > *:not(style) ~ *:not(style)",{mt:h}):{};return(0,y.jsx)(Z,{value:n,children:(0,y.jsx)(d.m.ul,(0,r.Z)((0,r.Z)({ref:t,listStyleType:c,listStylePosition:m,role:"list",__css:(0,r.Z)((0,r.Z)({},n.container),j)},g),{},{children:x}))})}));b.displayName="List",(0,c.G)((function(e,t){e.as;var n=(0,a.Z)(e,m);return(0,y.jsx)(b,(0,r.Z)({ref:t,as:"ol",styleType:"decimal",marginStart:"1em"},n))})).displayName="OrderedList";var w=(0,c.G)((function(e,t){e.as;var n=(0,a.Z)(e,h);return(0,y.jsx)(b,(0,r.Z)({ref:t,as:"ul",styleType:"initial",marginStart:"1em"},n))}));w.displayName="UnorderedList";var C=(0,c.G)((function(e,t){var n=j();return(0,y.jsx)(d.m.li,(0,r.Z)((0,r.Z)({ref:t},e),{},{__css:n.item}))}));C.displayName="ListItem",(0,c.G)((function(e,t){var n=j();return(0,y.jsx)(l.J,(0,r.Z)((0,r.Z)({ref:t,role:"presentation"},e),{},{__css:n.icon}))})).displayName="ListIcon"},7047:function(e,t,n){n.d(t,{Vp:function(){return g}});var r=n(4925),i=n(1413),a=n(9439),o=n(9640),l=n(9886),u=n(5597),s=n(6516),c=n(2996),f=n(5113),p=n(184),d=["isDisabled","children"],y=(0,l.k)({name:"TagStylesContext",errorMessage:"useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Tag />\" "}),v=(0,a.Z)(y,2),m=v[0],h=v[1],g=(0,u.G)((function(e,t){var n=(0,s.jC)("Tag",e),r=(0,c.Lr)(e),a=(0,i.Z)({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return(0,p.jsx)(m,{value:n,children:(0,p.jsx)(f.m.span,(0,i.Z)((0,i.Z)({ref:t},r),{},{__css:a}))})}));g.displayName="Tag",(0,u.G)((function(e,t){var n=h();return(0,p.jsx)(f.m.span,(0,i.Z)((0,i.Z)({ref:t,noOfLines:1},e),{},{__css:n.label}))})).displayName="TagLabel",(0,u.G)((function(e,t){return(0,p.jsx)(o.J,(0,i.Z)({ref:t,verticalAlign:"top",marginEnd:"0.5rem"},e))})).displayName="TagLeftIcon",(0,u.G)((function(e,t){return(0,p.jsx)(o.J,(0,i.Z)({ref:t,verticalAlign:"top",marginStart:"0.5rem"},e))})).displayName="TagRightIcon";var x=function(e){return(0,p.jsx)(o.J,(0,i.Z)((0,i.Z)({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),{},{children:(0,p.jsx)("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"})}))};x.displayName="TagCloseIcon",(0,u.G)((function(e,t){var n=e.isDisabled,a=e.children,o=(0,r.Z)(e,d),l=h(),u=(0,i.Z)({display:"flex",alignItems:"center",justifyContent:"center",outline:"0"},l.closeButton);return(0,p.jsx)(f.m.button,(0,i.Z)((0,i.Z)({ref:t,"aria-label":"close"},o),{},{type:"button",disabled:n,__css:u,children:a||(0,p.jsx)(x,{})}))})).displayName="TagCloseButton"}}]);
//# sourceMappingURL=491.2a39c077.chunk.js.map