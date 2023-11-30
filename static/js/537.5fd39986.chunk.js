"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[537],{9128:function(t,e,n){n.d(e,{_YF:function(){return f}});var r=n(2791),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=r.createContext&&r.createContext(i),a=function(){return a=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},a.apply(this,arguments)},u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n};function l(t){return t&&t.map((function(t,e){return r.createElement(t.tag,a({key:e},t.attr),l(t.child))}))}function c(t){return function(e){return r.createElement(s,a({attr:a({},t.attr)},e),l(t.child))}}function s(t){var e=function(e){var n,i=t.attr,o=t.size,l=t.title,c=u(t,["attr","size","title"]),s=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,c,{className:n,style:a(a({color:t.color||e.color},e.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==o?r.createElement(o.Consumer,null,(function(t){return e(t)})):e(i)}function f(t){return c({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"}}]})(t)}},6916:function(t,e,n){n.d(e,{P1:function(){return l}});var r="NOT_FOUND";var i=function(t,e){return t===e};function o(t,e){var n="object"===typeof e?e:{equalityCheck:e},o=n.equalityCheck,a=void 0===o?i:o,u=n.maxSize,l=void 0===u?1:u,c=n.resultEqualityCheck,s=function(t){return function(e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!t(e[i],n[i]))return!1;return!0}}(a),f=1===l?function(t){var e;return{get:function(n){return e&&t(e.key,n)?e.value:r},put:function(t,n){e={key:t,value:n}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(t,e){var n=[];function i(t){var i=n.findIndex((function(n){return e(t,n.key)}));if(i>-1){var o=n[i];return i>0&&(n.splice(i,1),n.unshift(o)),o.value}return r}return{get:i,put:function(e,o){i(e)===r&&(n.unshift({key:e,value:o}),n.length>t&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(l,s);function p(){var e=f.get(arguments);if(e===r){if(e=t.apply(null,arguments),c){var n=f.getEntries(),i=n.find((function(t){return c(t.value,e)}));i&&(e=i.value)}f.put(arguments,e)}return e}return p.clearCache=function(){return f.clear()},p}function a(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var n=e.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function u(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o,u=0,l={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(l=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=l,f=s.memoizeOptions,p=void 0===f?n:f,v=Array.isArray(p)?p:[p],y=a(r),d=t.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(v)),m=t((function(){for(var t=[],e=y.length,n=0;n<e;n++)t.push(y[n].apply(null,arguments));return o=d.apply(null,t)}));return Object.assign(m,{resultFunc:c,memoizedResultFunc:d,dependencies:y,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),m};return i}var l=u(o)},6661:function(t,e,n){n.d(e,{HC:function(){return x},QI:function(){return k}});var r=n(1413),i=n(4942),o=n(4925),a=n(9439),u=n(9640),l=n(9886),c=n(7200),s=n(5597),f=n(6516),p=n(2996),v=n(5113),y=n(184),d=["children","styleType","stylePosition","spacing"],m=["as"],h=["as"],g=(0,l.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),w=(0,a.Z)(g,2),O=w[0],b=w[1],j=(0,s.G)((function(t,e){var n=(0,f.jC)("List",t),a=(0,p.Lr)(t),u=a.children,l=a.styleType,s=void 0===l?"none":l,m=a.stylePosition,h=a.spacing,g=(0,o.Z)(a,d),w=(0,c.W)(u),b=h?(0,i.Z)({},"& > *:not(style) ~ *:not(style)",{mt:h}):{};return(0,y.jsx)(O,{value:n,children:(0,y.jsx)(v.m.ul,(0,r.Z)((0,r.Z)({ref:e,listStyleType:s,listStylePosition:m,role:"list",__css:(0,r.Z)((0,r.Z)({},n.container),b)},g),{},{children:w}))})}));j.displayName="List",(0,s.G)((function(t,e){t.as;var n=(0,o.Z)(t,m);return(0,y.jsx)(j,(0,r.Z)({ref:e,as:"ol",styleType:"decimal",marginStart:"1em"},n))})).displayName="OrderedList";var k=(0,s.G)((function(t,e){t.as;var n=(0,o.Z)(t,h);return(0,y.jsx)(j,(0,r.Z)({ref:e,as:"ul",styleType:"initial",marginStart:"1em"},n))}));k.displayName="UnorderedList";var x=(0,s.G)((function(t,e){var n=b();return(0,y.jsx)(v.m.li,(0,r.Z)((0,r.Z)({ref:e},t),{},{__css:n.item}))}));x.displayName="ListItem",(0,s.G)((function(t,e){var n=b();return(0,y.jsx)(u.J,(0,r.Z)((0,r.Z)({ref:e,role:"presentation"},t),{},{__css:n.icon}))})).displayName="ListIcon"}}]);
//# sourceMappingURL=537.5fd39986.chunk.js.map