(()=>{"use strict";var e,t,n,r,a={520:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.onCreateTask=void 0;var r=n(241),a=n(957),o=n(771);t.onCreateTask=function(){var e=document.querySelector(".task-input"),t=e.value;if(t){e.value="";var n={text:t,done:!1,createDate:(new Date).toISOString()};(0,o.createTask)(n).then((function(){return(0,o.getTasksList)()})).then((function(e){(0,a.setItem)("tasksList",e),(0,r.renderTasks)()}))}}},241:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.renderTasks=void 0;var r=n(957);function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelector(".list"),s=function(e,t){return e.done?e.done-t.done||new Date(t.finishDate)-new Date(e.finishDate):new Date(t.createDate)-new Date(e.createDate)},i=function(e){var t=e.text,n=e.done,r=e.id,a=document.createElement("li");a.classList.add("list__item");var o=function(e){var t=e.done,n=e.id,r=document.createElement("input");return r.setAttribute("type","checkbox"),r.setAttribute("data-id",n),r.checked=t,r.classList.add("list__item-checkbox"),r}({done:n,id:r}),s=document.createElement("span");s.classList.add("list__item-text"),s.textContent=t,n&&s.classList.add("item_done");var i=document.createElement("button");return i.classList.add("list__item-delete_btn"),a.append(o,s,i),a};t.renderTasks=function(){var e=(0,r.getItem)("tasksList")||[];console.log(e),o.innerHTML="";var t,n=e.sort(s).map(i);o.append.apply(o,function(e){if(Array.isArray(e))return a(e)}(t=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},957:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getItem=t.setItem=void 0,t.setItem=function(e,t){localStorage.setItem(e,JSON.stringify(t))},t.getItem=function(e){return JSON.parse(localStorage.getItem(e))}},771:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteTask=t.updateTask=t.createTask=t.getTasksList=void 0;var n="https://614785ed65467e0017384b96.mockapi.io/api/v1/tasks";t.getTasksList=function(){return fetch(n).then((function(e){return e.json()}))},t.createTask=function(e){return fetch(n,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(e)})},t.updateTask=function(e,t){return fetch("".concat(n,"/").concat(e),{method:"PUT",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)})},t.deleteTask=function(e){return fetch("".concat(n,"/").concat(e),{method:"DELETE"})}},516:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initTodoListHandlers=void 0;var r=n(520),a=n(80);t.initTodoListHandlers=function(){document.querySelector(".create-task-btn").addEventListener("click",r.onCreateTask),document.querySelector(".list").addEventListener("click",a.onToggleTask)}},80:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.onToggleTask=void 0;var r=n(241),a=n(957),o=n(771);t.onToggleTask=function(e){if(e.target.classList.contains("list__item-checkbox")){var t=e.target.dataset.id,n=(0,a.getItem)("tasksList"),s=n.find((function(e){return e.id===t})),i=s.text,c=s.createDate,d=e.target.checked;console.log(n);var u={text:i,createDate:c,done:d,finishDate:d?(new Date).toISOString():null};(0,o.updateTask)(t,u).then((function(){return(0,o.getTasksList)()})).then((function(e){(0,a.setItem)("tasksList",e),(0,r.renderTasks)()}))}}}},o={};function s(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return a[e](n,n.exports,s),n.exports}e=s(516),t=s(241),n=s(771),r=s(957),document.addEventListener("DOMContentLoaded",(function(){(0,n.getTasksList)().then((function(e){(0,r.setItem)("tasksList",e),(0,t.renderTasks)()})),(0,e.initTodoListHandlers)()})),window.addEventListener("storage",(function(e){"tasksList"===e.key&&(0,t.renderTasks)()}))})();