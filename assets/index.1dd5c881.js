import{S as e,i as t,s as n,e as s,a,b as i,c as o,n as l,d as c,f as r,m as d,t as p,g as m,h as u,j as v,l as f,k as h,o as g,p as b,q as k,r as $,u as y,v as w,w as x,x as C,y as j,z as A,A as q,B as L,C as z}from"./vendor.1f847b24.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function E(e){let t,n,r,d,p,m,u;return{c(){t=s("a"),t.textContent="Paper Plane icon by Icons8",n=a(),r=s("a"),r.textContent="LinkedIn icon by Icons8",d=a(),p=s("a"),p.textContent="GitHub icon by Icons8",m=a(),u=s("a"),u.textContent="Download Resume icon by Icons8",i(t,"href","https://icons8.com/icon/12582/paper-plane"),i(r,"href","https://icons8.com/icon/85044/linkedin"),i(p,"href","https://icons8.com/icon/12598/github"),i(u,"href","https://icons8.com/icon/45586/download-resume")},m(e,s){o(e,t,s),o(e,n,s),o(e,r,s),o(e,d,s),o(e,p,s),o(e,m,s),o(e,u,s)},p:l,i:l,o:l,d(e){e&&c(t),e&&c(n),e&&c(r),e&&c(d),e&&c(p),e&&c(m),e&&c(u)}}}class I extends e{constructor(e){super(),t(this,e,null,E,n,{})}}function H(e){let t,n;return t=new I({}),{c(){r(t.$$.fragment)},m(e,s){d(t,e,s),n=!0},i(e){n||(p(t.$$.fragment,e),n=!0)},o(e){m(t.$$.fragment,e),n=!1},d(e){u(t,e)}}}function M(e){let t,n,l,r,d,u,b,k,$=e[0]&&H();return{c(){t=s("div"),t.innerHTML='<div class="container1 svelte-un8fzm"><div><h3>LinkedIn</h3> \n      <a href="https://www.linkedin.com/in/navaneesh-n-amin-1a9660128/" target="_blank"><img src="https://img.icons8.com/material-outlined/96/292f36/linkedin--v1.png" alt="linkedin" id="linkdin" class="svelte-un8fzm"/></a></div> \n\n    <div><h3>Github</h3> \n      <a href="https://github.com/namin-amin\n      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/github--v1.png" alt="github" id="github" class="svelte-un8fzm"/></a></div></div> \n  <div title="thi is me 🤓"><h3>Contact me</h3> \n    <img src="dp.jpeg" alt="profile" class="profilepic svelte-un8fzm"/></div> \n  <div class="container2 svelte-un8fzm"><div title="mail me at:  navaneesh185@gmail.com"><h3>Mail</h3> \n      <a href="mailto:navaneesh185@gmail.com" target="_blank"><img src="https://img.icons8.com/ios/100/292f36/mail.png" alt="mail" id="mail" class="svelte-un8fzm"/></a></div> \n\n    <div title="View Resume"><h3>Resume/CV</h3> \n      <a href="https://drive.google.com/file/d/1nBoT7CwQtnc4BOWbiK_MAK0ospbxUk2z/view?usp=sharing\n      " target="_blank"><img src="https://img.icons8.com/ios/100/292f36/open-resume.png" alt="resume/cv" id="resume" class="svelte-un8fzm"/></a></div></div>',n=a(),l=s("div"),$&&$.c(),r=a(),d=s("button"),d.textContent="showAttributes",i(t,"class","about svelte-un8fzm"),v(l,"display","flex"),v(l,"flex-direction","column"),v(d,"position","fixed"),v(d,"bottom","0"),v(d,"right","0"),v(d,"color","gray"),v(d,"border","none"),v(d,"cursor","pointer")},m(s,a){o(s,t,a),o(s,n,a),o(s,l,a),$&&$.m(l,null),o(s,r,a),o(s,d,a),u=!0,b||(k=f(d,"click",e[1]),b=!0)},p(e,[t]){e[0]?$?1&t&&p($,1):($=H(),$.c(),p($,1),$.m(l,null)):$&&(h(),m($,1,1,(()=>{$=null})),g())},i(e){u||(p($),u=!0)},o(e){m($),u=!1},d(e){e&&c(t),e&&c(n),e&&c(l),$&&$.d(),e&&c(r),e&&c(d),b=!1,k()}}}function T(e,t,n){let s=!1;return[s,()=>n(0,s=!s)]}class S extends e{constructor(e){super(),t(this,e,T,M,n,{})}}function _(e){let t,n,l,r,d,p,m="aero"===e[1]&&N(e),u="dev"===e[1]&&D(e);return{c(){t=s("div"),m&&m.c(),n=a(),u&&u.c(),i(t,"class","backdrop svelte-153q5c")},m(s,a){o(s,t,a),m&&m.m(t,null),b(t,n),u&&u.m(t,null),r=!0,d||(p=f(t,"click",k(e[2])),d=!0)},p(e,s){"aero"===e[1]?m||(m=N(e),m.c(),m.m(t,n)):m&&(m.d(1),m=null),"dev"===e[1]?u||(u=D(e),u.c(),u.m(t,null)):u&&(u.d(1),u=null)},i(e){r||($((()=>{l||(l=y(t,x,{},!0)),l.run(1)})),r=!0)},o(e){l||(l=y(t,x,{},!1)),l.run(0),r=!1},d(e){e&&c(t),m&&m.d(),u&&u.d(),e&&l&&l.end(),d=!1,p()}}}function N(e){let t,n,l,r,d,p,m,u;return{c(){t=s("div"),n=s("div"),n.innerHTML='<h2 class="svelte-153q5c">Expeience</h2> \n          <p>Production Enginner at <a href="https://www.aequs.com/aerospace/" target="_blank" class="svelte-153q5c">Aequs Aerospace Pvt Ltd (2018-2020)</a></p> \n          <br/> \n          <h2 class="svelte-153q5c">Skills</h2> \n          <p>Handson experience with CNC milling</p> \n          <p>Assembly of Aerospace Comonents</p> \n          <p>CAE/CAM</p> \n          <br/> \n          <h2 class="svelte-153q5c">Certifications</h2> \n          <p>3Dexperince from <a href="https://www.linkedin.com/company/aerocoe/about/" target="_blank" class="svelte-153q5c">Centre of Excellence in Aerospace &amp; Defence</a></p> \n          <p><a href="https://drive.google.com/file/d/1sKLa5Iky5W_3LTVi0G-bczrlhuUnzElP/view?usp=sharing" target="_blank" class="svelte-153q5c">introduction to Six-Sigma Concepts</a></p>',l=a(),r=s("div"),r.textContent="Back",d=a(),p=s("div"),p.innerHTML='<img src="industry.gif" alt="" class="svelte-153q5c"/>',v(n,"padding","0 2rem 0 2rem"),v(n,"box-sizing","border-box"),i(r,"class","closebutton svelte-153q5c"),v(p,"padding","0 2rem 0 2rem"),i(t,"class","modal svelte-153q5c")},m(s,a){o(s,t,a),b(t,n),b(t,l),b(t,r),b(t,d),b(t,p),m||(u=f(r,"click",e[4]),m=!0)},d(e){e&&c(t),m=!1,u()}}}function D(e){let t,n,l,r,d,p,m,u;return{c(){t=s("div"),n=s("div"),n.innerHTML='<h2 class="svelte-153q5c">Skills</h2> \n          <p>Web-development</p> \n          <p>React, nodejs , Svelte, Nestjs</p> \n          <p>Electron Apps</p> \n          <p>Python</p> \n          <p>C# .NET beginner</p>',l=a(),r=s("div"),r.innerHTML='<img src="laptop.png" alt="" class="svelte-153q5c"/>',d=a(),p=s("div"),p.textContent="Back",v(n,"padding","0 2rem 0 2rem"),v(n,"box-sizing","border-box"),v(r,"padding","0 2rem 0 2rem"),i(p,"class","closebutton svelte-153q5c"),i(t,"class","modal modal2 svelte-153q5c")},m(s,a){o(s,t,a),b(t,n),b(t,l),b(t,r),b(t,d),b(t,p),m||(u=f(p,"click",e[3]),m=!0)},d(e){e&&c(t),m=!1,u()}}}function P(e){let t,n,s=e[0]&&_(e);return{c(){s&&s.c(),t=w()},m(e,a){s&&s.m(e,a),o(e,t,a),n=!0},p(e,[n]){e[0]?s?(s.p(e,n),1&n&&p(s,1)):(s=_(e),s.c(),p(s,1),s.m(t.parentNode,t)):s&&(h(),m(s,1,1,(()=>{s=null})),g())},i(e){n||(p(s),n=!0)},o(e){m(s),n=!1},d(e){s&&s.d(e),e&&c(t)}}}function B(e,t,n){let{showmodal:s=!1}=t,{skilltype:a}=t;return e.$$set=e=>{"showmodal"in e&&n(0,s=e.showmodal),"skilltype"in e&&n(1,a=e.skilltype)},[s,a,function(t){C.call(this,e,t)},function(t){C.call(this,e,t)},function(t){C.call(this,e,t)}]}class R extends e{constructor(e){super(),t(this,e,B,P,n,{showmodal:0,skilltype:1})}}function W(e){let t,n,l,v,h,g;return t=new R({props:{showmodal:e[0],skilltype:"aero"}}),t.$on("click",e[1]),{c(){r(t.$$.fragment),n=a(),l=s("section"),l.innerHTML='<div><img src="https://img.icons8.com/ios/150/ffffff/paper-plane.png" alt="aeroplane pic" class="svelte-3hy4fn"/> \n    <h1>Aerospace</h1> \n    <p class="svelte-3hy4fn">An expreienced Aerospace manufacturing engineer</p> \n    <p class="svelte-3hy4fn">Hads-on experience in cnc milling and Assemblies</p></div>',i(l,"class","svelte-3hy4fn")},m(s,a){d(t,s,a),o(s,n,a),o(s,l,a),v=!0,h||(g=f(l,"click",e[2]),h=!0)},p(e,[n]){const s={};1&n&&(s.showmodal=e[0]),t.$set(s)},i(e){v||(p(t.$$.fragment,e),v=!0)},o(e){m(t.$$.fragment,e),v=!1},d(e){u(t,e),e&&c(n),e&&c(l),h=!1,g()}}}function K(e,t,n){let s=!1;return[s,()=>n(0,s=!s),()=>n(0,s=!s)]}class G extends e{constructor(e){super(),t(this,e,K,W,n,{})}}function V(e){let t,n,l,v,h,g;return t=new R({props:{showmodal:e[0],skilltype:"dev"}}),t.$on("click",e[1]),{c(){r(t.$$.fragment),n=a(),l=s("section"),l.innerHTML='<div><img src="https://img.icons8.com/ios-glyphs/150/ffffff/laptop.png" alt="laptop pic" class="svelte-3hy4fn"/> \n    <h1>Development</h1> \n    <p class="svelte-3hy4fn">Started with DAQ Development</p> \n    <p class="svelte-3hy4fn">Fluent in Web-technologies Like nodejs and React</p></div>',i(l,"class","svelte-3hy4fn")},m(s,a){d(t,s,a),o(s,n,a),o(s,l,a),v=!0,h||(g=f(l,"click",e[2]),h=!0)},p(e,[n]){const s={};1&n&&(s.showmodal=e[0]),t.$set(s)},i(e){v||(p(t.$$.fragment,e),v=!0)},o(e){m(t.$$.fragment,e),v=!1},d(e){u(t,e),e&&c(n),e&&c(l),h=!1,g()}}}function F(e,t,n){let s=!1;return[s,()=>n(0,s=!s),()=>n(0,s=!s)]}class O extends e{constructor(e){super(),t(this,e,F,V,n,{})}}function Q(e){let t,n,l,f,h,g,k,$,y,w,x,C,L,z,E,I,H,M,T,_,N,D,P,B,R,W,K,V,F,Q;return P=new G({}),R=new O({}),F=new S({}),{c(){t=s("nav"),n=s("ul"),l=s("li"),f=s("a"),f.textContent="Home",h=a(),g=s("li"),k=s("a"),k.textContent="Skills",$=a(),y=s("li"),w=s("a"),w.textContent="Contact",x=a(),C=s("main"),L=s("div"),z=s("div"),E=s("h1"),E.textContent="Navaneesh Amin",I=a(),H=s("div"),M=s("h2"),T=j(e[1]),_=a(),N=s("div"),D=s("div"),r(P.$$.fragment),B=a(),r(R.$$.fragment),W=a(),K=s("div"),V=s("div"),r(F.$$.fragment),i(f,"href","#intro"),i(f,"class","active svelte-1h7dvpj"),A(f,"active","intro"===e[0]),i(l,"class","svelte-1h7dvpj"),i(k,"href","#skills"),i(k,"class","svelte-1h7dvpj"),A(k,"active-skills","skills"===e[0]),i(g,"class","svelte-1h7dvpj"),i(w,"href","#contact"),i(w,"class","svelte-1h7dvpj"),A(w,"active","contact"===e[0]),i(y,"class","svelte-1h7dvpj"),i(n,"class","navbar svelte-1h7dvpj"),i(t,"class","svelte-1h7dvpj"),i(E,"class","heading svelte-1h7dvpj"),i(M,"class","subtitle svelte-1h7dvpj"),v(H,"display","flex"),i(z,"class","content svelte-1h7dvpj"),i(z,"data-aos","slide-down"),i(z,"data-aos-offset","200"),i(z,"data-aos-delay","70"),i(z,"data-aos-duration","1000"),i(z,"data-aos-easing","ease-in-out"),i(z,"data-aos-mirror","true"),i(z,"data-aos-once","false"),i(z,"data-aos-anchor-placement","top-center"),v(z,"flex-direction","column"),i(L,"class","page svelte-1h7dvpj"),i(L,"id","intro"),i(D,"class","content svelte-1h7dvpj"),i(D,"data-aos","fade"),i(D,"data-aos-offset","200"),i(D,"data-aos-delay","50"),i(D,"data-aos-duration","800"),i(D,"data-aos-easing","ease-in-out"),i(D,"data-aos-mirror","true"),i(D,"data-aos-once","false"),i(D,"data-aos-anchor-placement","top-center"),i(N,"class","page svelte-1h7dvpj"),i(N,"id","skills"),i(V,"class","content svelte-1h7dvpj"),i(V,"data-aos","fade"),i(V,"data-aos-offset","200"),i(V,"data-aos-delay","50"),i(V,"data-aos-duration","1000"),i(V,"data-aos-easing","ease-in-out"),i(V,"data-aos-mirror","true"),i(V,"data-aos-once","false"),i(V,"data-aos-anchor-placement","top-center"),i(V,"data-aos-id","contact-in"),i(K,"class","page svelte-1h7dvpj"),i(K,"id","contact"),i(C,"class","container")},m(e,s){o(e,t,s),b(t,n),b(n,l),b(l,f),b(n,h),b(n,g),b(g,k),b(n,$),b(n,y),b(y,w),o(e,x,s),o(e,C,s),b(C,L),b(L,z),b(z,E),b(z,I),b(z,H),b(H,M),b(M,T),b(C,_),b(C,N),b(N,D),d(P,D,null),b(D,B),d(R,D,null),b(C,W),b(C,K),b(K,V),d(F,V,null),Q=!0},p(e,[t]){1&t&&A(f,"active","intro"===e[0]),1&t&&A(k,"active-skills","skills"===e[0]),1&t&&A(w,"active","contact"===e[0]),(!Q||2&t)&&q(T,e[1])},i(e){Q||(p(P.$$.fragment,e),p(R.$$.fragment,e),p(F.$$.fragment,e),Q=!0)},o(e){m(P.$$.fragment,e),m(R.$$.fragment,e),m(F.$$.fragment,e),Q=!1},d(e){e&&c(t),e&&c(x),e&&c(C),u(P),u(R),u(F)}}}function U(e,t,n){L.init();let s,a="intro",i=window.innerHeight,o="Iam an Aeronautical Engineer";z((()=>{document.addEventListener("scroll",(e=>{n(2,s=window.scrollY)})),setInterval(l,4e3)}));const l=()=>{n(1,o="Iam an Aeronautical Engineer"===o?"And a Web Developer for Fun 😉":"Iam an Aeronautical Engineer")};return e.$$.update=()=>{4&e.$$.dirty&&(s<i?n(0,a="intro"):s>=i&&s<2*i?n(0,a="skills"):s===2*i&&n(0,a="contact"))},[a,o,s]}new class extends e{constructor(e){super(),t(this,e,U,Q,n,{})}}({target:document.getElementById("app")});
