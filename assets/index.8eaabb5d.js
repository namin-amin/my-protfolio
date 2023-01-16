const pt=function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if("childList"===o.type)for(const s of o.addedNodes)"LINK"===s.tagName&&"modulepreload"===s.rel&&i(s)}).observe(document,{childList:!0,subtree:!0})}function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),"use-credentials"===r.crossorigin?o.credentials="include":"anonymous"===r.crossorigin?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};function F(){}pt();const Ve=t=>t;function Ke(t){return t()}function Oe(){return Object.create(null)}function J(t){t.forEach(Ke)}function Qe(t){return"function"==typeof t}function Z(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function vt(t){return 0===Object.keys(t).length}const Xe="undefined"!=typeof window;let ht=Xe?()=>window.performance.now():()=>Date.now(),Ee=Xe?t=>requestAnimationFrame(t):F;const Q=new Set;function Je(t){Q.forEach(e=>{e.c(t)||(Q.delete(e),e.f())}),0!==Q.size&&Ee(Je)}function bt(t){let e;return 0===Q.size&&Ee(Je),{promise:new Promise(n=>{Q.add(e={c:t,f:n})}),abort(){Q.delete(e)}}}function b(t,e){t.appendChild(e)}function Ze(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=h("style");return yt(Ze(t),e),e.sheet}function yt(t,e){b(t.head||t,e)}function k(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function Ce(t){return document.createTextNode(t)}function C(){return Ce(" ")}function kt(){return Ce("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function wt(t){return function(e){e.target===this&&t.call(this,e)}}function f(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return Array.from(t.childNodes)}function $t(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e,n,i){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function K(t,e,n){t.classList[n?"add":"remove"](e)}function xt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}const ve=new Map;let he=0,le;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Ct(t,e){const n={stylesheet:gt(e),rules:{}};return ve.set(t,n),n}function Se(t,e,n,i,r,o,s,a=0){const c=16.666/i;let l="{\n";for(let A=0;A<=1;A+=c){const $=e+(n-e)*o(A);l+=100*A+`%{${s($,1-$)}}\n`}const d=l+`100% {${s(n,1-n)}}\n}`,m=`__svelte_${Et(d)}_${a}`,u=Ze(t),{stylesheet:v,rules:g}=ve.get(u)||Ct(u,t);g[m]||(g[m]=!0,v.insertRule(`@keyframes ${m} ${d}`,v.cssRules.length));const j=t.style.animation||"";return t.style.animation=`${j?`${j}, `:""}${m} ${i}ms linear ${r}ms 1 both`,he+=1,m}function At(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>-1===o.indexOf("__svelte")),r=n.length-i.length;r&&(t.style.animation=i.join(", "),he-=r,he||jt())}function jt(){Ee(()=>{he||(ve.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),ve.clear())})}function se(t){le=t}function Ot(){if(!le)throw new Error("Function called outside component initialization");return le}function St(t){Ot().$$.on_mount.push(t)}function ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const ae=[],ze=[],de=[],Ne=[],zt=Promise.resolve();let $e=!1;function Nt(){$e||($e=!0,zt.then(et))}function ce(t){de.push(t)}const ye=new Set;let fe=0,oe;function et(){const t=le;do{for(;fe<ae.length;){const e=ae[fe];fe++,se(e),Tt(e.$$)}for(se(null),ae.length=0,fe=0;ze.length;)ze.pop()();for(let e=0;e<de.length;e+=1){const n=de[e];ye.has(n)||(ye.add(n),n())}de.length=0}while(ae.length);for(;Ne.length;)Ne.pop()();$e=!1,ye.clear(),se(t)}function Tt(t){if(null!==t.fragment){t.update(),J(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ce)}}function Lt(){return oe||(oe=Promise.resolve(),oe.then(()=>{oe=null})),oe}function ke(t,e,n){t.dispatchEvent(xt(`${e?"intro":"outro"}${n}`))}const me=new Set;let H;function tt(){H={r:0,c:[],p:H}}function nt(){H.r||J(H.c),H=H.p}function T(t,e){t&&t.i&&(me.delete(t),t.i(e))}function I(t,e,n,i){if(t&&t.o){if(me.has(t))return;me.add(t),H.c.push(()=>{me.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Mt={duration:0};function Te(t,e,n,i){let r=e(t,n),o=i?0:1,s=null,a=null,c=null;function l(){c&&At(t,c)}function d(u,v){const g=u.b-o;return v*=Math.abs(g),{a:o,b:u.b,d:g,duration:v,start:u.start,end:u.start+v,group:u.group}}function m(u){const{delay:v=0,duration:g=300,easing:j=Ve,tick:A=F,css:$}=r||Mt,S={start:ht()+v,b:u};u||(S.group=H,H.r+=1),s||a?a=S:($&&(l(),c=Se(t,o,u,g,v,j,$)),u&&A(0,1),s=d(S,g),ce(()=>ke(t,u,"start")),bt(L=>{if(a&&L>a.start&&(s=d(a,g),a=null,ke(t,s.b,"start"),$&&(l(),c=Se(t,o,s.b,s.duration,0,j,r.css))),s)if(L>=s.end)A(o=s.b,1-o),ke(t,s.b,"end"),a||(s.b?l():--s.group.r||J(s.group.c)),s=null;else if(L>=s.start){const D=L-s.start;o=s.a+s.d*j(D/s.duration),A(o,1-o)}return!(!s&&!a)}))}return{run(u){Qe(r)?Lt().then(()=>{r=r(),m(u)}):m(u)},end(){l(),s=a=null}}}function X(t){t&&t.c()}function G(t,e,n,i){const{fragment:r,on_mount:o,on_destroy:s,after_update:a}=t.$$;r&&r.m(e,n),i||ce(()=>{const c=o.map(Ke).filter(Qe);s?s.push(...c):J(c),t.$$.on_mount=[]}),a.forEach(ce)}function U(t,e){const n=t.$$;null!==n.fragment&&(J(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){-1===t.$$.dirty[0]&&(ae.push(t),Nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,r,o,s,a=[-1]){const c=le;se(t);const l=t.$$={fragment:null,ctx:null,props:o,update:F,not_equal:r,bound:Oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Oe(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(m,u,...v)=>{const g=v.length?v[0]:u;return l.ctx&&r(l.ctx[m],l.ctx[m]=g)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](g),d&&It(t,m)),u}):[],l.update(),d=!0,J(l.before_update),l.fragment=!!i&&i(l.ctx),e.target){if(e.hydrate){const m=_t(e.target);l.fragment&&l.fragment.l(m),m.forEach(y)}else l.fragment&&l.fragment.c();e.intro&&T(t.$$.fragment),G(t,e.target,e.anchor,e.customElement),et()}se(c)}class ne{$destroy(){U(this,1),this.$destroy=F}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);-1!==r&&i.splice(r,1)}}$set(e){this.$$set&&!vt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var R="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},it="Expected a function",Le=NaN,Pt="[object Symbol]",Ht=/^\s+|\s+$/g,Dt=/^[-+]0x[0-9a-f]+$/i,qt=/^0b[01]+$/i,Rt=/^0o[0-7]+$/i,Bt=parseInt,Wt="object"==typeof R&&R&&R.Object===Object&&R,Ft="object"==typeof self&&self&&self.Object===Object&&self,Gt=Wt||Ft||Function("return this")(),Ut=Object.prototype,Yt=Ut.toString,Vt=Math.max,Kt=Math.min,we=function(){return Gt.Date.now()};function Qt(t,e,n){var i,r,o,s,a,c,l=0,d=!1,m=!1,u=!0;if("function"!=typeof t)throw new TypeError(it);function v(p){var x=i,w=r;return i=r=void 0,l=p,s=t.apply(w,x)}function g(p){return l=p,a=setTimeout($,e),d?v(p):s}function j(p){var x,w,M=e-(p-c);return m?Kt(M,o-(p-l)):M}function A(p){var x=p-c,w;return void 0===c||x>=e||x<0||m&&p-l>=o}function $(){var p=we();if(A(p))return S(p);a=setTimeout($,j(p))}function S(p){return a=void 0,u&&i?v(p):(i=r=void 0,s)}function L(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0}function D(){return void 0===a?s:S(we())}function O(){var p=we(),x=A(p);if(i=arguments,r=this,c=p,x){if(void 0===a)return g(c);if(m)return a=setTimeout($,e),v(c)}return void 0===a&&(a=setTimeout($,e)),s}return e=Me(e)||0,be(n)&&(d=!!n.leading,o=(m="maxWait"in n)?Vt(Me(n.maxWait)||0,e):o,u="trailing"in n?!!n.trailing:u),O.cancel=L,O.flush=D,O}function Xt(t,e,n){var i=!0,r=!0;if("function"!=typeof t)throw new TypeError(it);return be(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),Qt(t,e,{leading:i,maxWait:e,trailing:r})}function be(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return!!t&&"object"==typeof t}function Zt(t){return"symbol"==typeof t||Jt(t)&&Yt.call(t)==Pt}function Me(t){if("number"==typeof t)return t;if(Zt(t))return Le;if(be(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=be(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Ht,"");var n=qt.test(t);return n||Rt.test(t)?Bt(t.slice(2),n?2:8):Dt.test(t)?Le:+t}var en=Xt,tn="Expected a function",Ie=NaN,nn="[object Symbol]",rn=/^\s+|\s+$/g,on=/^[-+]0x[0-9a-f]+$/i,an=/^0b[01]+$/i,sn=/^0o[0-7]+$/i,ln=parseInt,cn="object"==typeof R&&R&&R.Object===Object&&R,fn="object"==typeof self&&self&&self.Object===Object&&self,un=cn||fn||Function("return this")(),dn=Object.prototype,mn=dn.toString,pn=Math.max,vn=Math.min,_e=function(){return un.Date.now()};function hn(t,e,n){var i,r,o,s,a,c,l=0,d=!1,m=!1,u=!0;if("function"!=typeof t)throw new TypeError(tn);function v(p){var x=i,w=r;return i=r=void 0,l=p,s=t.apply(w,x)}function g(p){return l=p,a=setTimeout($,e),d?v(p):s}function j(p){var x,w,M=e-(p-c);return m?vn(M,o-(p-l)):M}function A(p){var x=p-c,w;return void 0===c||x>=e||x<0||m&&p-l>=o}function $(){var p=_e();if(A(p))return S(p);a=setTimeout($,j(p))}function S(p){return a=void 0,u&&i?v(p):(i=r=void 0,s)}function L(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0}function D(){return void 0===a?s:S(_e())}function O(){var p=_e(),x=A(p);if(i=arguments,r=this,c=p,x){if(void 0===a)return g(c);if(m)return a=setTimeout($,e),v(c)}return void 0===a&&(a=setTimeout($,e)),s}return e=Pe(e)||0,xe(n)&&(d=!!n.leading,o=(m="maxWait"in n)?pn(Pe(n.maxWait)||0,e):o,u="trailing"in n?!!n.trailing:u),O.cancel=L,O.flush=D,O}function xe(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function bn(t){return!!t&&"object"==typeof t}function gn(t){return"symbol"==typeof t||bn(t)&&mn.call(t)==nn}function Pe(t){if("number"==typeof t)return t;if(gn(t))return Ie;if(xe(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=xe(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(rn,"");var n=an.test(t);return n||sn.test(t)?ln(t.slice(2),n?2:8):on.test(t)?Ie:+t}var He=hn,rt=function(){};function ot(t){var e=void 0,n=void 0,i=void 0;for(e=0;e<t.length;e+=1)if((n=t[e]).dataset&&n.dataset.aos||(i=n.children&&ot(n.children)))return!0;return!1}function yn(t){!t||t.forEach((function(e){var n=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes),r;if(ot(n.concat(i)))return rt()}))}function at(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function kn(){return!!at()}function wn(t,e){var n=window.document,i,r=new(at())(yn);rt=e,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var De={isSupported:kn,ready:wn},_n=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},$n=function(){function t(e,n){for(var i=0;i<n.length;i++){var r=n[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),xn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},En=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Cn=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,An=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,jn=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function qe(){return navigator.userAgent||navigator.vendor||window.opera||""}var On=function(){function t(){_n(this,t)}return $n(t,[{key:"phone",value:function(){var n=qe();return!(!En.test(n)&&!Cn.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=qe();return!(!An.test(n)&&!jn.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),pe=new On,Sn=function(e,n){return n&&n.forEach((function(i){return e.classList.add(i)}))},zn=function(e,n){return n&&n.forEach((function(i){return e.classList.remove(i)}))},ue=function(e,n){var i=void 0;return pe.ie11()?(i=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:n}):i=new CustomEvent(e,{detail:n}),document.dispatchEvent(i)},Nn=function(e,n){var i=e.options,r=e.position,o=e.node;e.data;var s=function(){!e.animated||(zn(o,i.animatedClassNames),ue("aos:out",o),e.options.id&&ue("aos:in:"+e.options.id,o),e.animated=!1)},a=function(){e.animated||(Sn(o,i.animatedClassNames),ue("aos:in",o),e.options.id&&ue("aos:in:"+e.options.id,o),e.animated=!0)};i.mirror&&n>=r.out&&!i.once?s():n>=r.in?a():e.animated&&!i.once&&s()},Re=function(e){return e.forEach((function(n,i){return Nn(n,window.pageYOffset)}))},st=function(e){for(var n=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)n+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:n}},B=function(t,e,n){var i=t.getAttribute("data-aos-"+e);if(void 0!==i){if("true"===i)return!0;if("false"===i)return!1}return i||n},Tn=function(e,n,i){var r=window.innerHeight,o=B(e,"anchor"),s=B(e,"anchor-placement"),a=Number(B(e,"offset",s?0:n)),c=s||i,l=e;o&&document.querySelectorAll(o)&&(l=document.querySelectorAll(o)[0]);var d=st(l).top-r;switch(c){case"top-bottom":break;case"center-bottom":d+=l.offsetHeight/2;break;case"bottom-bottom":d+=l.offsetHeight;break;case"top-center":d+=r/2;break;case"center-center":d+=r/2+l.offsetHeight/2;break;case"bottom-center":d+=r/2+l.offsetHeight;break;case"top-top":d+=r;break;case"bottom-top":d+=r+l.offsetHeight;break;case"center-top":d+=r+l.offsetHeight/2}return d+a},Ln=function(e,n){var i=B(e,"anchor"),r=B(e,"offset",n),o=e,s;return i&&document.querySelectorAll(i)&&(o=document.querySelectorAll(i)[0]),st(o).top+o.offsetHeight-r},Mn=function(e,n){return e.forEach((function(i,r){var o=B(i.node,"mirror",n.mirror),s=B(i.node,"once",n.once),a=B(i.node,"id"),c=n.useClassNames&&i.node.getAttribute("data-aos"),l=[n.animatedClassName].concat(c?c.split(" "):[]).filter((function(d){return"string"==typeof d}));n.initClassName&&i.node.classList.add(n.initClassName),i.position={in:Tn(i.node,n.offset,n.anchorPlacement),out:o&&Ln(i.node,n.offset)},i.options={once:s,mirror:o,animatedClassNames:l,id:a}})),e},lt=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,(function(e){return{node:e}}))},P=[],Be=!1,_={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ct=function(){return document.all&&!window.atob},In=function(){return P=Mn(P,_),Re(P),window.addEventListener("scroll",en((function(){Re(P,_.once)}),_.throttleDelay)),P},W=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(Be=!0),Be&&In()},ft=function(){if(P=lt(),dt(_.disable)||ct())return ut();W()},ut=function(){P.forEach((function(e,n){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),_.initClassName&&e.node.classList.remove(_.initClassName),_.animatedClassName&&e.node.classList.remove(_.animatedClassName)}))},dt=function(e){return!0===e||"mobile"===e&&pe.mobile()||"phone"===e&&pe.phone()||"tablet"===e&&pe.tablet()||"function"==typeof e&&!0===e()},Pn=function(e){return _=xn(_,e),P=lt(),!_.disableMutationObserver&&!De.isSupported()&&(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),_.disableMutationObserver=!0),_.disableMutationObserver||De.ready("[data-aos]",ft),dt(_.disable)||ct()?ut():(document.querySelector("body").setAttribute("data-aos-easing",_.easing),document.querySelector("body").setAttribute("data-aos-duration",_.duration),document.querySelector("body").setAttribute("data-aos-delay",_.delay),-1===["DOMContentLoaded","load"].indexOf(_.startEvent)?document.addEventListener(_.startEvent,(function(){W(!0)})):window.addEventListener("load",(function(){W(!0)})),"DOMContentLoaded"===_.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&W(!0),window.addEventListener("resize",He(W,_.debounceDelay,!0)),window.addEventListener("orientationchange",He(W,_.debounceDelay,!0)),P)},Hn={init:Pn,refresh:W,refreshHard:ft};function Dn(t){let e,n,i,r,o,s,a,c,l,d,m;return{c(){e=h("a"),e.textContent="Paper Plane icon by Icons8",n=C(),i=h("a"),i.textContent="LinkedIn icon by Icons8",r=C(),o=h("a"),o.textContent="GitHub icon by Icons8",s=C(),a=h("a"),a.textContent="Download Resume icon by Icons8",c=C(),l=h("a"),l.textContent="Laptop icon by Icons8",d=C(),m=h("a"),m.textContent="Mail icon by Icons8",f(e,"href","https://icons8.com/icon/12582/paper-plane"),f(i,"href","https://icons8.com/icon/85044/linkedin"),f(o,"href","https://icons8.com/icon/12598/github"),f(a,"href","https://icons8.com/icon/45586/download-resume"),f(l,"href","https://icons8.com/icon/59820/laptop"),f(m,"href","https://icons8.com/icon/53388/mail")},m(u,v){k(u,e,v),k(u,n,v),k(u,i,v),k(u,r,v),k(u,o,v),k(u,s,v),k(u,a,v),k(u,c,v),k(u,l,v),k(u,d,v),k(u,m,v)},p:F,i:F,o:F,d(u){u&&y(e),u&&y(n),u&&y(i),u&&y(r),u&&y(o),u&&y(s),u&&y(a),u&&y(c),u&&y(l),u&&y(d),u&&y(m)}}}class qn extends ne{constructor(e){super(),te(this,e,null,Dn,Z,{})}}function We(t){let e,n;return e=new qn({}),{c(){X(e.$$.fragment)},m(i,r){G(e,i,r),n=!0},i(i){n||(T(e.$$.fragment,i),n=!0)},o(i){I(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function Rn(t){let e,n,i,r,o,s,a,c,l=t[0]&&We();return{c(){e=h("div"),e.innerHTML='<div class="container1 svelte-un8fzm"><div><h3>LinkedIn</h3> \n      <a href="https://www.linkedin.com/in/navaneesh-n-amin-1a9660128/" target="_blank"><img src="https://img.icons8.com/material-outlined/96/292f36/linkedin--v1.png" alt="linkedin" id="linkdin" class="svelte-un8fzm"/></a></div> \n\n    <div><h3>Github</h3> \n      <a href="https://github.com/namin-amin\n      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/github--v1.png" alt="github" id="github" class="svelte-un8fzm"/></a></div></div> \n  <div title="thi is me 🤓"><h3>Contact me</h3> \n    <img src="dp.jpeg" alt="profile" class="profilepic svelte-un8fzm"/></div> \n  <div class="container2 svelte-un8fzm"><div title="mail me at:  navaneesh185@gmail.com"><h3>Mail</h3> \n      <a href="mailto:navaneesh185@gmail.com" target="_blank"><img src="https://img.icons8.com/ios/100/292f36/mail.png" alt="mail" id="mail" class="svelte-un8fzm"/></a></div> \n\n    <div title="View Resume"><h3>Resume/CV</h3> \n      <a href="https://drive.google.com/file/d/1glbKA5bYXqVmK1M8xj7lq9wd-aJWsdoh/view?usp=sharing\n      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/open-resume.png" alt="resume/cv" id="resume" class="svelte-un8fzm"/></a></div></div>',n=C(),i=h("div"),l&&l.c(),r=C(),o=h("button"),o.textContent="showAttributes",f(e,"class","about svelte-un8fzm"),z(i,"display","flex"),z(i,"flex-direction","column"),z(o,"position","fixed"),z(o,"bottom","0"),z(o,"right","0"),z(o,"color","gray"),z(o,"border","none"),z(o,"cursor","pointer")},m(d,m){k(d,e,m),k(d,n,m),k(d,i,m),l&&l.m(i,null),k(d,r,m),k(d,o,m),s=!0,a||(c=ee(o,"click",t[1]),a=!0)},p(d,[m]){d[0]?l?1&m&&T(l,1):(l=We(),l.c(),T(l,1),l.m(i,null)):l&&(tt(),I(l,1,1,()=>{l=null}),nt())},i(d){s||(T(l),s=!0)},o(d){I(l),s=!1},d(d){d&&y(e),d&&y(n),d&&y(i),l&&l.d(),d&&y(r),d&&y(o),a=!1,c()}}}function Bn(t,e,n){let i=!1;return[i,()=>n(0,i=!i)]}class Wn extends ne{constructor(e){super(),te(this,e,Bn,Rn,Z,{})}}function Fe(t,{delay:e=0,duration:n=400,easing:i=Ve}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:o=>`opacity: ${o*r}`}}function Ge(t){let e,n,i,r,o,s,a="aero"===t[1]&&Ue(t),c="dev"===t[1]&&Ye(t);return{c(){e=h("div"),a&&a.c(),n=C(),c&&c.c(),f(e,"class","backdrop svelte-h9phdx")},m(l,d){k(l,e,d),a&&a.m(e,null),b(e,n),c&&c.m(e,null),r=!0,o||(s=ee(e,"click",wt(t[2])),o=!0)},p(l,d){"aero"===l[1]?a||(a=Ue(l),a.c(),a.m(e,n)):a&&(a.d(1),a=null),"dev"===l[1]?c||(c=Ye(l),c.c(),c.m(e,null)):c&&(c.d(1),c=null)},i(l){r||(ce(()=>{i||(i=Te(e,Fe,{},!0)),i.run(1)}),r=!0)},o(l){i||(i=Te(e,Fe,{},!1)),i.run(0),r=!1},d(l){l&&y(e),a&&a.d(),c&&c.d(),l&&i&&i.end(),o=!1,s()}}}function Ue(t){let e,n,i,r,o,s;return{c(){e=h("div"),n=h("div"),n.innerHTML='<h2 class="svelte-h9phdx">Expeience</h2> \n          <p>Production Enginner at <a href="https://www.aequs.com/aerospace/" target="_blank" class="svelte-h9phdx">Aequs Aerospace Pvt Ltd (2018-2020)</a></p> \n          <br/> \n          <h2 class="svelte-h9phdx">Skills</h2> \n          <p>Handson experience with CNC milling</p> \n          <p>Assembly of Aerospace Comonents</p> \n          <p>CAE/CAM</p> \n          <br/> \n          <h2 class="svelte-h9phdx">Certifications</h2> \n          <p>3Dexperince from <a href="https://www.linkedin.com/company/aerocoe/about/" target="_blank" class="svelte-h9phdx">Centre of Excellence in Aerospace &amp; Defence</a></p> \n          <p><a href="https://drive.google.com/file/d/1sKLa5Iky5W_3LTVi0G-bczrlhuUnzElP/view?usp=sharing" target="_blank" class="svelte-h9phdx">introduction to Six-Sigma Concepts</a></p>',i=C(),r=h("div"),r.textContent="Back",z(n,"padding","0 2rem 0 2rem"),z(n,"box-sizing","border-box"),f(r,"class","closebutton svelte-h9phdx"),f(e,"class","modal svelte-h9phdx")},m(a,c){k(a,e,c),b(e,n),b(e,i),b(e,r),o||(s=ee(r,"click",t[4]),o=!0)},d(a){a&&y(e),o=!1,s()}}}function Ye(t){let e,n,i,r,o,s;return{c(){e=h("div"),n=h("div"),n.innerHTML='<h2 class="svelte-h9phdx">Experience</h2> \n          <p>Programming Engineer @<a href="https://www.winmansoftware.com/" class="svelte-h9phdx">Winman Software</a></p> \n          \n          <h2 class="svelte-h9phdx">Skills</h2> \n          <p>.NET Framework &amp; .NET core</p> \n          <p>React, nodejs , Svelte, Nestjs, ASP.NET</p> \n          <p>Electronjs</p> \n          <p>Python</p> \n\n          <h2 class="svelte-h9phdx">Certifications</h2> \n          <p><a href="https://www.udemy.com/certificate/UC-4480aeb2-1a93-427c-822e-44d5a83ebd32/" class="svelte-h9phdx">Web Development Bootcamp</a></p>',i=C(),r=h("div"),r.textContent="Back",z(n,"padding","0 2rem 0 2rem"),z(n,"box-sizing","border-box"),f(r,"class","closebutton svelte-h9phdx"),f(e,"class","modal modal2 svelte-h9phdx")},m(a,c){k(a,e,c),b(e,n),b(e,i),b(e,r),o||(s=ee(r,"click",t[3]),o=!0)},d(a){a&&y(e),o=!1,s()}}}function Fn(t){let e,n,i=t[0]&&Ge(t);return{c(){i&&i.c(),e=kt()},m(r,o){i&&i.m(r,o),k(r,e,o),n=!0},p(r,[o]){r[0]?i?(i.p(r,o),1&o&&T(i,1)):(i=Ge(r),i.c(),T(i,1),i.m(e.parentNode,e)):i&&(tt(),I(i,1,1,()=>{i=null}),nt())},i(r){n||(T(i),n=!0)},o(r){I(i),n=!1},d(r){i&&i.d(r),r&&y(e)}}}function Gn(t,e,n){let{showmodal:i=!1}=e,{skilltype:r}=e;function o(c){ge.call(this,t,c)}function s(c){ge.call(this,t,c)}function a(c){ge.call(this,t,c)}return t.$$set=c=>{"showmodal"in c&&n(0,i=c.showmodal),"skilltype"in c&&n(1,r=c.skilltype)},[i,r,o,s,a]}class mt extends ne{constructor(e){super(),te(this,e,Gn,Fn,Z,{showmodal:0,skilltype:1})}}function Un(t){let e,n,i,r,o,s;return e=new mt({props:{showmodal:t[0],skilltype:"aero"}}),e.$on("click",t[1]),{c(){X(e.$$.fragment),n=C(),i=h("section"),i.innerHTML='<div><img src="https://img.icons8.com/ios/150/ffffff/paper-plane.png" alt="aeroplane pic" class="svelte-e3ojkd"/> \n    <h1>Aerospace</h1> \n    <p class="svelte-e3ojkd">An expreienced Aerospace manufacturing engineer</p> \n    <p class="svelte-e3ojkd">Hads-on experience in cnc milling and Assemblies</p></div>',f(i,"class","svelte-e3ojkd")},m(a,c){G(e,a,c),k(a,n,c),k(a,i,c),r=!0,o||(s=ee(i,"click",t[2]),o=!0)},p(a,[c]){const l={};1&c&&(l.showmodal=a[0]),e.$set(l)},i(a){r||(T(e.$$.fragment,a),r=!0)},o(a){I(e.$$.fragment,a),r=!1},d(a){U(e,a),a&&y(n),a&&y(i),o=!1,s()}}}function Yn(t,e,n){let i=!1;return[i,()=>n(0,i=!i),()=>n(0,i=!i)]}class Vn extends ne{constructor(e){super(),te(this,e,Yn,Un,Z,{})}}function Kn(t){let e,n,i,r,o,s;return e=new mt({props:{showmodal:t[0],skilltype:"dev"}}),e.$on("click",t[1]),{c(){X(e.$$.fragment),n=C(),i=h("section"),i.innerHTML='<div><img src="https://img.icons8.com/ios-glyphs/150/ffffff/laptop.png" alt="laptop pic" class="svelte-e3ojkd"/> \n    <h1>Development</h1> \n    <p class="svelte-e3ojkd">Started with DAQ Development</p> \n    <p class="svelte-e3ojkd">Feel like home with .NET</p></div>',f(i,"class","svelte-e3ojkd")},m(a,c){G(e,a,c),k(a,n,c),k(a,i,c),r=!0,o||(s=ee(i,"click",t[2]),o=!0)},p(a,[c]){const l={};1&c&&(l.showmodal=a[0]),e.$set(l)},i(a){r||(T(e.$$.fragment,a),r=!0)},o(a){I(e.$$.fragment,a),r=!1},d(a){U(e,a),a&&y(n),a&&y(i),o=!1,s()}}}function Qn(t,e,n){let i=!1;return[i,()=>n(0,i=!i),()=>n(0,i=!i)]}class Xn extends ne{constructor(e){super(),te(this,e,Qn,Kn,Z,{})}}function Jn(t){let e,n,i,r,o,s,a,c,l,d,m,u,v,g,j,A,$,S,L,D,O,p,x,w,M,Ae,Y,je,ie,N,V,re;return M=new Xn({}),Y=new Vn({}),V=new Wn({}),{c(){e=h("nav"),n=h("ul"),i=h("li"),r=h("a"),r.textContent="Home",o=C(),s=h("li"),a=h("a"),a.textContent="Skills",c=C(),l=h("li"),d=h("a"),d.textContent="Contact",m=C(),u=h("main"),v=h("div"),g=h("div"),j=h("h1"),j.textContent="Navaneesh Amin",A=C(),$=h("div"),S=h("h2"),L=Ce(t[1]),D=C(),O=h("div"),p=h("div"),p.innerHTML='<h1 class="skillhead svelte-17z15fv">Things Iam good at 💻💻🚀</h1>',x=C(),w=h("div"),X(M.$$.fragment),Ae=C(),X(Y.$$.fragment),je=C(),ie=h("div"),N=h("div"),X(V.$$.fragment),f(r,"href","#intro"),f(r,"class","active svelte-17z15fv"),K(r,"active","intro"===t[0]),f(i,"class","svelte-17z15fv"),f(a,"href","#skills"),f(a,"class","svelte-17z15fv"),K(a,"active-skills","skills"===t[0]),f(s,"class","svelte-17z15fv"),f(d,"href","#contact"),f(d,"class","svelte-17z15fv"),K(d,"active","contact"===t[0]),f(l,"class","svelte-17z15fv"),f(n,"class","navbar svelte-17z15fv"),f(e,"class","svelte-17z15fv"),f(j,"class","heading svelte-17z15fv"),f(S,"class","subtitle svelte-17z15fv"),z($,"display","flex"),f(g,"class","content svelte-17z15fv"),f(g,"data-aos","slide-down"),f(g,"data-aos-offset","200"),f(g,"data-aos-delay","70"),f(g,"data-aos-duration","1000"),f(g,"data-aos-easing","ease-in-out"),f(g,"data-aos-mirror","true"),f(g,"data-aos-once","false"),f(g,"data-aos-anchor-placement","top-center"),z(g,"flex-direction","column"),f(v,"class","page svelte-17z15fv"),f(v,"id","intro"),f(p,"class","skillhead svelte-17z15fv"),f(w,"class","skillcontent svelte-17z15fv"),f(w,"data-aos","fade"),f(w,"data-aos-offset","100"),f(w,"data-aos-delay","50"),f(w,"data-aos-duration","800"),f(w,"data-aos-easing","ease-in-out"),f(w,"data-aos-mirror","true"),f(w,"data-aos-once","false"),f(w,"data-aos-anchor-placement","top-center"),f(O,"class","page svelte-17z15fv"),f(O,"id","skills"),f(N,"class","content svelte-17z15fv"),f(N,"data-aos","fade"),f(N,"data-aos-offset","200"),f(N,"data-aos-delay","50"),f(N,"data-aos-duration","1000"),f(N,"data-aos-easing","ease-in-out"),f(N,"data-aos-mirror","true"),f(N,"data-aos-once","false"),f(N,"data-aos-anchor-placement","top-center"),f(N,"data-aos-id","contact-in"),f(ie,"class","page svelte-17z15fv"),f(ie,"id","contact"),f(u,"class","container")},m(E,q){k(E,e,q),b(e,n),b(n,i),b(i,r),b(n,o),b(n,s),b(s,a),b(n,c),b(n,l),b(l,d),k(E,m,q),k(E,u,q),b(u,v),b(v,g),b(g,j),b(g,A),b(g,$),b($,S),b(S,L),b(u,D),b(u,O),b(O,p),b(O,x),b(O,w),G(M,w,null),b(w,Ae),G(Y,w,null),b(u,je),b(u,ie),b(ie,N),G(V,N,null),re=!0},p(E,[q]){1&q&&K(r,"active","intro"===E[0]),1&q&&K(a,"active-skills","skills"===E[0]),1&q&&K(d,"active","contact"===E[0]),(!re||2&q)&&$t(L,E[1])},i(E){re||(T(M.$$.fragment,E),T(Y.$$.fragment,E),T(V.$$.fragment,E),re=!0)},o(E){I(M.$$.fragment,E),I(Y.$$.fragment,E),I(V.$$.fragment,E),re=!1},d(E){E&&y(e),E&&y(m),E&&y(u),U(M),U(Y),U(V)}}}function Zn(t,e,n){Hn.init();let i="intro",r,o=window.innerHeight,s="Software Developer 🤓";St(()=>{document.addEventListener("scroll",c=>{n(2,r=window.scrollY)}),setInterval(a,4e3)});const a=()=>{n(1,s="Software Developer 🤓"===s?"And An Aero Engineer 😉":"Software Developer 🤓")};return t.$$.update=()=>{4&t.$$.dirty&&(r<o?n(0,i="intro"):r>=o&&r<2*o?n(0,i="skills"):r===2*o&&n(0,i="contact"))},[i,s,r]}class ei extends ne{constructor(e){super(),te(this,e,Zn,Jn,Z,{})}}new ei({target:document.getElementById("app")});