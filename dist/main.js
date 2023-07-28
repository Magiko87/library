(()=>{"use strict";var n={625:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),i=t(645),a=t.n(i)()(r());a.push([n.id,"body {\n  background: radial-gradient(circle, #86d8ed, #043e65);\n  \n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\nh1 {\n  font-family: Cambria, Cochin, Georgia, Times, \"Times New Roman\", serif;\n}\nh2{\n    margin-bottom:8px ;\n}\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  margin-top:30px ;\n  margin-bottom: 10px;\n}\n\n.input-group {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 20px;\n}\n\n.form-outline {\n  display: flex;\n  align-items: center;\n}\n\n.form-control {\n  width: 200px;\n  height: 30px;\n  margin-right: 5px;\n}\nul  {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 50px; \n  padding-left: 0;\n\n}\n\nul  li {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  color: #ffffff;\n  width: calc(18% - 5px); /* Calcola la larghezza sottraendo il margine */\n  height: 100px; /* Aumenta l'altezza degli elementi */\n  cursor: pointer;\n  list-style: none;\n  margin: 5px; /* Riduci il margine ai lati degli elementi */\n  box-shadow: 0px 8px 24px rgba(149, 157, 165, 0.4); /* Cambia i valori dell'ombra */\n  border-radius: 7px;\n  /* background:radial-gradient(circle, #61c3dc, #022740); */\n  background-color: rgba(0, 0, 0, 0.2); \n}\n\n\nul  .list-item .material-icons {\n  font-size: 48px;\n}\n\n\nul .category-title {\n  margin-top: 5px; \n}\n.loading .loading-message {\n  grid-row: 2; \n  text-align: center; \n  margin-bottom: 500px;\n  font-size: 24px;\n  font-weight: 600;\n  color: white;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.list-item .material-icons {\n  font-size: 48px;\n}\n\n.list-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #ffffff;\n  width: 20%;\n  height: 80px;\n  cursor: pointer;\n  list-style: none;\n  margin: 7px;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  border-radius: 7px;\n}\n.category-title {\n  margin-top: 8px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n}\n.btn-primary {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  padding: 0 20px;\n  font-size: 16px;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  border-radius: 5px;\n  color: #fff;\n  transition: background 0.3s ease;\n  background-color: rgba(0, 0, 0, 0.2); \n  color: #ffffff; \n  border: none;\n}\n\n.btn-primary i {\n  margin-right: 5px;\n}\n#btn-closer:hover {\n  color: #000000 ; \n}\n.btn-primary:hover {\n  background: radial-gradient(circle, #86d8ed, #043e65);\n  color: #000000 ;\n}\n\n\nul li:hover {\n  background: radial-gradient(circle, #86d8ed, #043e65);\n  color: #000000; \n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.3); \n}\nul li:active {\n  color: white;\n}\n.btn-primary:active {\n  color:white;\n}\n#btn-closer:hover:active{\n  color: rgba(0, 0, 0, 0.5);;\n}\n.img-book{\n    width: 100px;\n}\n.loading {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: grid; \n    place-items: center; \n    background: radial-gradient(circle, rgba(134, 216, 237, 0.85), rgba(4, 62, 101, 0.8));\n     z-index: 499; \n    pointer-events: none; \n}\n  .loading .img-book {\n    width: 100px;\n    height: 100px;\n    grid-row: 1; \n    margin-top: 350px;\n    \n  }\n  \n  .hidden {\n    display: none;\n    visibility: hidden;\n    opacity: 0;\n  }\n.modal-content{\n    background: transparent;\n    border: 2px solid rgba(0, 0, 0, 0.5);\n    position: relative;\n    max-height: 500px;\n    min-width: 400px;\n    padding: 16px;\n    overflow: auto;\n    \n}\n.cover-container img {\n  transition: opacity 0.3s ease;\n  max-width: 200px;\n  max-height: 300px;\n}\n\n.cover-container img:hover {\n  cursor: pointer;\n  opacity: 0.7;\n}\n\n\n .btn-close {\n  z-index: 999;\n  margin: 5px;\n  margin-right: 15px;\n  margin-left: auto;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-description{\n  color: white;\n  background-color: rgba(2, 47, 77, 0.9);\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n  overflow: auto;\n  max-height: 200px;\n}\n.modal {\n  max-height: 80vh;\n  position: fixed;\n  overflow: auto;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(2, 47, 77, 0.9);\n  padding: 24px;\n  overflow: auto;\n  overscroll-behavior: contain;\n}\n.book-modal {\n  display: none;\n  /* Aggiungi stili per la modale */\n}\n\n\n.description {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 1.4;\n}\n  \n.modal-close{\n    position: absolute;\n    right: 0;\n    margin-right: 20px;\n    padding: 4px;\n    width: 35px;\n    height: 35px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n}\n.result {\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n\n.result h3 {\n  margin-bottom: 0;\n}\n\n.result .author {\n  margin-top: 0.5em;\n  font-style: italic;\n  color: #ffffff;\n}\n\n\n.cover-container {\n  margin-top: 10px; /* Aggiungi uno spazio tra il titolo e la copertina */\n}\n\n\n.recipe-content{\n    padding: 16px 14px;\n    text-align: left;\n    max-height: 300px; \n    overflow: auto; \n    color: white;\n    font-style: italic;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n\n}\n\n\nfooter {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    text-align: center;\n    color: white;\n    padding: 10px 0;\n    font-family: 'Times New Roman', Times, serif;\n    font-size: large;\n    z-index: 999;\n}\n\n  \n  @media screen and (max-width: 768px) {\n    footer {\n      position: static;\n    }\n  }",""]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(a[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=i[s]||0,p="".concat(s," ").concat(d);i[s]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var l=o(n,r),s=0;s<i.length;s++){var d=t(i[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),i=t(569),a=t.n(i),c=t(565),l=t.n(c),s=t(216),d=t.n(s),p=t(589),u=t.n(p),m=t(625),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=document.createElement("footer");g.textContent="Daniele Camodeca-© Copyright",document.getElementById("footer-container").appendChild(g);const h=document.querySelector(".btn-close"),x=document.querySelector(".modal"),v=document.querySelector(".loading"),y=document.querySelector(".btn-primary");function b(n){v.classList.remove("hidden"),w(n)}function w(n){fetch(`https://openlibrary.org/search.json?q=${n}`).then((n=>n.json())).then((n=>{const e=n.docs.map((n=>{const e=n.title,t=n.author_name?n.author_name[0]:"Unknown Author",o=`https://covers.openlibrary.org/b/id/${n.cover_i}-M.jpg`,r=n.key;return`<div class="result" data-key="${r}">\n                  <h3>${e}</h3>\n                  <p class="author">Autore: ${t}</p>\n                  <div class="cover-container">\n                    ${n.cover_i?`<img src="${o}" alt="Copertina del libro" data-key="${r}">`:`<img src="https://picsum.photos/seed/picsum/200/300" data-key="${r}">`}\n                  </div>\n                 </div>`})).join("");document.querySelector(".modal .recipe-content").innerHTML=""===e?'<div class="empty-message">No results found.</div>':`<div class="results-container">${e}</div>`,v.classList.add("hidden"),x.classList.remove("hidden"),document.querySelectorAll(".modal .recipe-content .cover-container img").forEach((n=>{n.addEventListener("click",(()=>{var e;e=n.getAttribute("data-key"),fetch(`https://openlibrary.org${e}.json`).then((n=>n.json())).then((n=>{let e="No description available";n.description&&("object"==typeof n.description?e=n.description.value||e:"string"==typeof n.description&&(e=n.description||e)),x.classList.remove("hidden"),document.querySelector(".modal-description").textContent=e})).catch((n=>{console.error(n)}))}))}))})).catch((n=>{console.error(n),v.classList.add("hidden")}))}document.querySelectorAll(".list-item"),document.querySelector(".modal .recipe-content"),h.addEventListener("click",(()=>function(n=null){const e=document.querySelector(".modal"),t=document.querySelector(".modal-description");"boolean"==typeof n?e.classList.toggle("hidden",!n):e.classList.toggle("hidden"),e.classList.contains("hidden")&&(t.textContent="")}(!1))),y.addEventListener("click",b),document.getElementById("list-container").addEventListener("click",(n=>{let e=n.target.closest(".list-item");e&&(v.classList.remove("hidden"),w(e.getAttribute("data-categoria")))})),document.getElementById("search-form").addEventListener("submit",(function(n){n.preventDefault(),b(document.getElementById("form1").value)})),document.querySelector(".modal-description").textContent=""})()})();