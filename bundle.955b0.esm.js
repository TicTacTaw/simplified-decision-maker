!function(e){function n(o){if(t[o])return t[o].exports;var _=t[o]={i:o,l:!1,exports:{}};return e[o].call(_.exports,_,_.exports,n),_.l=!0,_.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var _ in e)n.d(o,_,function(n){return e[n]}.bind(null,_));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/simplified-decision-maker/",n(n.s="mdyV")}({"8ukQ":function(e){e.exports={answer:"answer__3EhXo",answer__text:"answer__text__1Z-eE","answer__text--old":"answer__text--old__3sMtX",answer__button:"answer__button__JBxWD"}},GnG7:function(){},QfWi:function(e,n,t){"use strict";function o(e,n){p.options.__h&&p.options.__h(a,e,d||n),d=0;var t=a.__H||(a.__H={__:[],__h:[]});return e>=t.__.length&&t.__.push({}),t.__[e]}function _(e){return d=1,function(e,n){var t=o(s++,2);return t.t=e,t.__c||(t.__c=a,t.__=[c(void 0,n),function(e){var n=t.t(t.__[0],e);t.__[0]!==n&&(t.__[0]=n,t.__c.setState({}))}]),t.__}(c,e)}function r(e,n){var t=o(s++,3);!p.options.__s&&function(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}(t.__H,n)&&(t.__=e,t.__H=n,a.__H.__h.push(t))}function i(){h.some((function(e){if(e.__P)try{e.__H.__h.forEach(u),e.__H.__h.forEach(l),e.__H.__h=[]}catch(n){return e.__H.__h=[],p.options.__e(n,e.__v),!0}})),h=[]}function u(e){"function"==typeof e.u&&e.u()}function l(e){e.u=e.__()}function c(e,n){return"function"==typeof n?n(e):n}t.r(n);var s,a,f,p=t("hosL"),d=0,h=[],v=p.options.__r,m=p.options.diffed,y=p.options.__c,b=p.options.unmount;p.options.__r=function(e){v&&v(e),s=0;var n=(a=e.__c).__H;n&&(n.__h.forEach(u),n.__h.forEach(l),n.__h=[])},p.options.diffed=function(e){m&&m(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==h.push(n)&&f===p.options.requestAnimationFrame||((f=p.options.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(o),cancelAnimationFrame(n),setTimeout(e)},o=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(i))},p.options.__c=function(e,n){n.some((function(e){try{e.__h.forEach(u),e.__h=e.__h.filter((function(e){return!e.__||l(e)}))}catch(t){n.some((function(e){e.__h&&(e.__h=[])})),n=[],p.options.__e(t,e.__v)}})),y&&y(e,n)},p.options.unmount=function(e){b&&b(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(u)}catch(e){p.options.__e(e,n.__v)}};var g=t("j4wE"),k=t.n(g),w=()=>Object(p.h)("input",{type:"text",className:k.a.inputText}),x=t("gnr7"),C=t.n(x),S=()=>Object(p.h)("div",{className:C.a.question},Object(p.h)("span",{className:C.a.question__title},"Should I "),Object(p.h)(w,null),Object(p.h)("span",{className:C.a.question__title}," ?")),O=t("8ukQ"),E=t.n(O),N=({onButtonClick:e,initialAnswer:n,answerCount:t})=>{const[o,i]=_([]);return r(()=>{},[n]),r(()=>{i(1!==t?e=>[...e,t%2==0?!n:n]:[n])},[n,t]),Object(p.h)("div",{className:E.a.answer},o.map((e,n)=>Object(p.h)("span",{className:`${E.a.answer__text} ${n!==o.length-1?E.a["answer__text--old"]:""}`},e?"Yes":"No")),1===o.length&&Object(p.h)("div",null,Object(p.h)("button",{className:E.a.answer__button,onClick:e},"I'm not fully satisfied of this answer")))},j=t("n8OY"),P=t.n(j),A=({onClick:e,children:n})=>Object(p.h)("button",{onClick:e,className:P.a.button},n);t("GnG7"),n.default=()=>{const[e,n]=_(0),[t,o]=_();return Object(p.h)("div",{id:"app"},Object(p.h)(S,null),Object(p.h)(A,{onClick:()=>{n(1),o(Math.random()>.5)}},"Decide for me"),void 0!==t&&Object(p.h)(N,{onButtonClick:()=>{n(e+1)},answerCount:e,initialAnswer:t}))}},gnr7:function(e){e.exports={question:"question__f-GN_",question__title:"question__title__3brVv"}},hosL:function(e,n,t){"use strict";function o(e,n){for(var t in n)e[t]=n[t];return e}function _(e){var n=e.parentNode;n&&n.removeChild(e)}function r(e,n,t){var o,_=arguments,r={};for(o in n)"key"!==o&&"ref"!==o&&(r[o]=n[o]);if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(_[o]);if(null!=t&&(r.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===r[o]&&(r[o]=e.defaultProps[o]);return i(e,r,n&&n.key,n&&n.ref,null)}function i(e,n,t,o,_){var r={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:_};return null==_&&(r.__v=r),j.vnode&&j.vnode(r),r}function u(){return{}}function l(e){return e.children}function c(e,n){this.props=e,this.context=n}function s(e,n){if(null==n)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?s(e):null}function a(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return a(e)}}function f(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!T++||H!==j.debounceRendering)&&((H=j.debounceRendering)||D)(p)}function p(){for(var e;T=A.length;)e=A.sort((function(e,n){return e.__v.__b-n.__v.__b})),A=[],e.some((function(e){var n,t,_,r,i,u,l;e.__d&&(u=(i=(n=e).__v).__e,(l=n.__P)&&(t=[],(_=o({},i)).__v=_,r=b(l,i,_,n.__n,void 0!==l.ownerSVGElement,null,t,null==u?s(i):u),g(t,i),r!=u&&a(i)))}))}function d(e,n,t,o,r,u,c,a,f,p){var d,h,v,m,y,g,k,C,S,O=o&&o.__k||U,E=O.length;for(f==L&&(f=null!=c?c[0]:E?s(o,0):null),t.__k=[],d=0;d<n.length;d++)if(null!=(m=t.__k[d]=null==(m=n[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(l,{children:m},null,null,null):null!=m.__e||null!=m.__c?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(v=O[d])||v&&m.key==v.key&&m.type===v.type)O[d]=void 0;else for(h=0;h<E;h++){if((v=O[h])&&m.key==v.key&&m.type===v.type){O[h]=void 0;break}v=null}if(y=b(e,m,v=v||L,r,u,c,a,f,p),(h=m.ref)&&v.ref!=h&&(C||(C=[]),v.ref&&C.push(v.ref,null,m),C.push(h,m.__c||y,m)),null!=y){if(null==k&&(k=y),S=void 0,void 0!==m.__d)S=m.__d,m.__d=void 0;else if(c==v||y!=f||null==y.parentNode){e:if(null==f||f.parentNode!==e)e.appendChild(y),S=null;else{for(g=f,h=0;(g=g.nextSibling)&&h<E;h+=2)if(g==y)break e;e.insertBefore(y,f),S=f}"option"==t.type&&(e.value="")}f=void 0!==S?S:y.nextSibling,"function"==typeof t.type&&(t.__d=f)}else f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}if(t.__e=k,null!=c&&"function"!=typeof t.type)for(d=c.length;d--;)null!=c[d]&&_(c[d]);for(d=E;d--;)null!=O[d]&&x(O[d],O[d]);if(C)for(d=0;d<C.length;d++)w(C[d],C[++d],C[++d])}function h(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?U.concat.apply([],e.map(h)):[e]}function v(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===F.test(n)?t+"px":null==t?"":t}function m(e,n,t,o,_){var r,i,u,l,c;if(_?"className"===n&&(n="class"):"class"===n&&(n="className"),"style"===n)if(r=e.style,"string"==typeof t)r.cssText=t;else{if("string"==typeof o&&(r.cssText="",o=null),o)for(l in o)t&&l in t||v(r,l,"");if(t)for(c in t)o&&t[c]===o[c]||v(r,c,t[c])}else"o"===n[0]&&"n"===n[1]?(i=n!==(n=n.replace(/Capture$/,"")),u=n.toLowerCase(),n=(u in e?u:n).slice(2),t?(o||e.addEventListener(n,y,i),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,y,i)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&"size"!==n&&!_&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t&&!/^ar/.test(n)?e.removeAttribute(n):e.setAttribute(n,t))}function y(e){this.l[e.type](j.event?j.event(e):e)}function b(e,n,t,_,r,i,u,s,a){var f,p,h,v,m,y,b,g,w,x,S,O=n.type;if(void 0!==n.constructor)return null;(f=j.__b)&&f(n);try{e:if("function"==typeof O){if(g=n.props,w=(f=O.contextType)&&_[f.__c],x=f?w?w.props.value:f.__:_,t.__c?b=(p=n.__c=t.__c).__=p.__E:("prototype"in O&&O.prototype.render?n.__c=p=new O(g,x):(n.__c=p=new c(g,x),p.constructor=O,p.render=C),w&&w.sub(p),p.props=g,p.state||(p.state={}),p.context=x,p.__n=_,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=O.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,O.getDerivedStateFromProps(g,p.__s))),v=p.props,m=p.state,h)null==O.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==O.getDerivedStateFromProps&&g!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,x)||n.__v===t.__v){for(p.props=g,p.state=p.__s,n.__v!==t.__v&&(p.__d=!1),p.__v=n,n.__e=t.__e,n.__k=t.__k,p.__h.length&&u.push(p),f=0;f<n.__k.length;f++)n.__k[f]&&(n.__k[f].__=n);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,x),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,m,y)}))}p.context=x,p.props=g,p.state=p.__s,(f=j.__r)&&f(n),p.__d=!1,p.__v=n,p.__P=e,f=p.render(p.props,p.state,p.context),null!=p.getChildContext&&(_=o(o({},_),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(y=p.getSnapshotBeforeUpdate(v,m)),S=null!=f&&f.type==l&&null==f.key?f.props.children:f,d(e,Array.isArray(S)?S:[S],n,t,_,r,i,u,s,a),p.base=n.__e,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=k(t.__e,n,t,_,r,i,u,a);(f=j.diffed)&&f(n)}catch(e){n.__v=null,j.__e(e,n,t)}return n.__e}function g(e,n){j.__c&&j.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){j.__e(e,n.__v)}}))}function k(e,n,t,o,_,r,i,u){var l,c,s,a,f,p=t.props,h=n.props;if(_="svg"===n.type||_,null!=r)for(l=0;l<r.length;l++)if(null!=(c=r[l])&&((null===n.type?3===c.nodeType:c.localName===n.type)||e==c)){e=c,r[l]=null;break}if(null==e){if(null===n.type)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type,h.is&&{is:h.is}),r=null,u=!1}if(null===n.type)p!==h&&e.data!=h&&(e.data=h);else{if(null!=r&&(r=U.slice.call(e.childNodes)),s=(p=t.props||L).dangerouslySetInnerHTML,a=h.dangerouslySetInnerHTML,!u){if(null!=r)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(a||s)&&(a&&s&&a.__html==s.__html||(e.innerHTML=a&&a.__html||""))}(function(e,n,t,o,_){var r;for(r in t)"children"===r||"key"===r||r in n||m(e,r,null,t[r],o);for(r in n)_&&"function"!=typeof n[r]||"children"===r||"key"===r||"value"===r||"checked"===r||t[r]===n[r]||m(e,r,n[r],t[r],o)})(e,h,p,_,u),a?n.__k=[]:(l=n.props.children,d(e,Array.isArray(l)?l:[l],n,t,o,"foreignObject"!==n.type&&_,r,i,L,u)),u||("value"in h&&void 0!==(l=h.value)&&l!==e.value&&m(e,"value",l,p.value,!1),"checked"in h&&void 0!==(l=h.checked)&&l!==e.checked&&m(e,"checked",l,p.checked,!1))}return e}function w(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){j.__e(e,t)}}function x(e,n,t){var o,r,i;if(j.unmount&&j.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||w(o,null,n)),t||"function"==typeof e.type||(t=null!=(r=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){j.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&x(o[i],n,t);null!=r&&_(r)}function C(e,n,t){return this.constructor(e,t)}function S(e,n,t){var o,_,i;j.__&&j.__(e,n),_=(o=t===M)?null:t&&t.__k||n.__k,e=r(l,null,[e]),i=[],b(n,(o?n:t||n).__k=e,_||L,L,void 0!==n.ownerSVGElement,t&&!o?[t]:_?null:n.childNodes.length?U.slice.call(n.childNodes):null,i,t||L,o),g(i,e)}function O(e,n){S(e,n,M)}function E(e,n){var t,_;for(_ in n=o(o({},e.props),n),arguments.length>2&&(n.children=U.slice.call(arguments,2)),t={},n)"key"!==_&&"ref"!==_&&(t[_]=n[_]);return i(e.type,t,n.key||e.key,n.ref||e.ref,null)}function N(e){var n={},t={__c:"__cC"+W++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var o,_=this;return this.getChildContext||(o=[],this.getChildContext=function(){return n[t.__c]=_,n},this.shouldComponentUpdate=function(e){_.props.value!==e.value&&o.some((function(n){n.context=e.value,f(n)}))},this.sub=function(e){o.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){o.splice(o.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Consumer.contextType=t,t.Provider.__=t,t}t.r(n),t.d(n,"render",(function(){return S})),t.d(n,"hydrate",(function(){return O})),t.d(n,"createElement",(function(){return r})),t.d(n,"h",(function(){return r})),t.d(n,"Fragment",(function(){return l})),t.d(n,"createRef",(function(){return u})),t.d(n,"isValidElement",(function(){return P})),t.d(n,"Component",(function(){return c})),t.d(n,"cloneElement",(function(){return E})),t.d(n,"createContext",(function(){return N})),t.d(n,"toChildArray",(function(){return h})),t.d(n,"_unmount",(function(){return x})),t.d(n,"options",(function(){return j}));var j,P,A,T,D,H,M,W,L={},U=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;j={__e:function(e,n){for(var t,o;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError&&(o=!0,t.setState(t.constructor.getDerivedStateFromError(e))),null!=t.componentDidCatch&&(o=!0,t.componentDidCatch(e)),o)return f(t.__E=t)}catch(n){e=n}throw e}},P=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&o(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=l,A=[],T=0,D="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,M=L,W=0},j4wE:function(e){e.exports={inputText:"inputText__FwOM8"}},mdyV:function(e,n,t){"use strict";t.r(n);var o=t("hosL");const{h:_,render:r}=o,i=e=>e&&e.default?e.default:e;if("serviceWorker"in navigator&&navigator.serviceWorker.register(t.p+"sw-esm.js"),"function"==typeof i(t("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;(()=>{let n=i(t("QfWi")),o={};const u=document.querySelector('[type="__PREACT_CLI_DATA__"]');u&&(o=JSON.parse(u.innerHTML).preRenderData||o),e=r(_(n,{CLI_DATA:{preRenderData:o}}),document.body,e)})()}},n8OY:function(e){e.exports={button:"button__4ZD5v"}}});
//# sourceMappingURL=bundle.955b0.esm.js.map