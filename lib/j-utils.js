!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.webJs=t():e.webJs=t()}(self,(()=>(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>r});const r=new class{__random(e,t){return 2===arguments.length?Math.floor(e+Math.random()*(t+1-e)):null}__containsElement(e,t){return-1!=e.indexOf(t)}__sort(e,t){return e.sort(((r,n)=>{switch(t){case 1:return r-n;case 2:return n-r;case 3:return Math.random()-.5;default:return e}}))}__formArray(e){let t=[];return t=Array.isArray(e)?e:Array.prototype.slice.call(e),t}__max(e){return Math.max.apply(null,e)}__min(e){return Math.min.apply(null,e)}__sum(e){return e.reduce(((e,t)=>e+t))}__average(e){return this.__sum(e)/e.length}__trim(e,t){switch(t=t||1){case 1:return e.replace(/\s+/g,"");case 2:return e.replace(/(^\s*)|(\s*$)/g,"");case 3:return e.replace(/(^\s*)/g,"");case 4:return e.replace(/(\s*$)/g,"");default:return e}}__changeCase(e,t){switch(t=t||4){case 1:return e.replace(/\b\w+\b/g,(function(e){return e.substring(0,1).toUpperCase()+e.substring(1).toLowerCase()}));case 2:return e.replace(/\b\w+\b/g,(function(e){return e.substring(0,1).toLowerCase()+e.substring(1).toUpperCase()}));case 3:return e.split("").map((function(e){return/[a-z]/.test(e)?e.toUpperCase():e.toLowerCase()})).join("");case 4:return e.toUpperCase();case 5:return e.toLowerCase();default:return e}}__getDate(e){let t;const r=new Date;let n=r.getFullYear(),a=r.getMonth()+1,o=r.getDate(),l=r.getHours(),s=r.getMinutes(),u=r.getSeconds();return a=a>9?a:"0"+a,o=o>9?o:"0"+o,l=l>9?l:"0"+l,s=s>9?s:"0"+s,u=u>9?u:"0"+u,"month"==e?t=`${n}-${a}`:"day"==e?t=`${n}-${a}-${o}`:"hour"==e&&(t=`${n}-${a}-${o}  ${l}:${s}:${u}`),t}__formatterDate(e){let t=(e=new Date(e)).getFullYear(),r=e.getMonth()+1;r=r<10?"0"+r:r;let n=e.getDate();n=n<10?"0"+n:n;let a=e.getHours();a=a<10?"0"+a:a;let o=e.getMinutes();o=o<10?"0"+o:o;let l=e.getSeconds();return l=l<10?"0"+l:l,t+"-"+r+"-"+n+" "+a+":"+o+":"+l}__filterymd(e){return e&&(e=(e+"").split(/[ ]+/),e=/^(\d{4})-(\d{1,2})-(\d{1,2})$/.exec(e[0])[0]),e}__formateSecond(e){let t=parseInt(e);return t=`${Math.floor(t/3600)<10?"0"+Math.floor(t/3600):Math.floor(t/3600)}:${Math.floor(t/60%60)<10?"0"+Math.floor(t/60%60):Math.floor(t/60%60)}:${Math.floor(t%60)<10?"0"+Math.floor(t%60):Math.floor(t%60)}`,t}__formatDate(e){let t=e.getFullYear(),r=e.getMonth()+1,n=e.getDate();return r=r>9?r:"0"+r,n=n>9?n:"0"+n,t+"-"+r+"-"+n}__judgeEndDays(e){let t,r,n,a,o;return n=Number(e.split("-")[0]),a=Number(e.split("-")[1])-1,n&&a>=0&&(t=this.__formatDate(new Date(n,a,1)),r=this.__formatDate(new Date(n,a+1,0))),o={begin:t,end:r},o}__besExtract(e,t){return Math.floor(e/t)*t}__handleMinus(e){return e.replace(/-/g,"")}__hiddenMidPhone(e){return e.replace(/(\d{3})(\d{4})(\d{4})/,"$1 **** $2")}__rulesPhone(e){return/^(13[0-9]|14[5|7]|15[0-9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/.test(e)}__combine(e,t){let r="";return e&&e.length>0?(r+=e+("/"===e.charAt(e.length-1)?"":"/"),r+="/"===t.charAt(0)?t.substring(1):t,r):t}__timestampToTime(e){10==e.toString().length?e*=1e3:e.toString().length;let t=new Date(e);return t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2)+" "+("0"+t.getHours()).slice(-2)+":"+("0"+t.getMinutes()).slice(-2)+":"+("0"+t.getSeconds()).slice(-2)}__judgTrueAndFalse(e){return!!e}charAtFindStr(e,t){return e.charAt(t)}__getParam(e){let t=window.location.search.substring(1).split("&");for(let r=0;r<t.length;r++){let n=t[r].split("=");if(n[0]==e)return n[1]}return!1}__setCookie(e,t){document.cookie=`${e}=`+t}__getCookie(e){let t,r=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(r))?unescape(t[2]):null}__setStorage(e,t){localStorage.setItem(e,t)}__getStorage(e){return localStorage.getItem(e)}__delNullLeafNode(e,t){return e.forEach((e=>{""===e[t]||void 0===e[t]||null===e[t]||e[t].length<1?delete e[t]:__delNullLeafNode(e[t],t)})),e}__jsonUnique(e,t){let r=new Map;for(let n of e)r.has(n[t])||r.set(n[t],n);return[...r.values()]}__arrUnique(e){return[...new Set(e)]}__arrFlatten(e){return e.flat(1/0)}__treeToArray(e,t,r){let n=[],a=[];if(!Array.isArray(e)&&!e.length)return[];if("string"!=typeof t)return[];!Array.isArray(r)||Array.isArray(r)&&!r.length?(n=Object.keys(e[0]),n.splice(n.indexOf(t),1)):n=r;const o=e=>(e.forEach((e=>{let r={};n.forEach((t=>{r[t]=e[t]})),a.push(r),e[t]&&o(e[t])})),a);return o(e)}__arrToTree(e){let t=[],r={};return e.forEach((e=>{r[e.id]=e})),e.forEach((e=>{let n=r[e.pid];n?(n.children||(n.children=[])).push(e):t.push(e)})),t}__deepClone(e){let t;if("object"==typeof e){t=Array.isArray(e)?[]:{};for(let r in e)e.hasOwnProperty(r)&&("object"!=typeof e[r]?t[r]=e[r]:t[r]=__deepClone(e[r]))}else t=e;return t}__arrayUnion(e,t){return[...new Set([...e,...t])]}__arrayIntersect(e,t){return[...new Set([...e].filter((e=>t.includes(e))))]}__arrayDiff(e,t){return[...new Set([...e].filter((e=>!t.includes(e))))]}__formatMoney(e){let t=e.toString(),r=t.length;if(r<=3)return t;{let e="",n=r%3;return n>0?t.slice(0,n)+","+t.slice(n,r).match(/\d{3}/g).join(",")+e:t.slice(0,r).match(/\d{3}/g).join(",")+e}}__camelCaseTo(e){return e.replace(/[A-Z]/g,(e=>"-"+e.toLowerCase()))}__toCamelCase(e){return e.replace(/-([a-z])/g,((e,t)=>t.toUpperCase()))}__getNowTimestamp(e){let t;return 10===e?t=Math.round((new Date).getTime()/1e3):13===e&&(t=Date.now()),t}__getTimeToStamp(e){return new Date(e).getTime()}__dateComputed(e){let t=new Date;e=new Date(e),t=t.getTime();let r=((e=e.getTime())-t)/1e3,n=Math.floor(r/86400/365);r%=31536e3;let a=Math.floor(r/86400/30);r%=2592e3;let o=Math.floor(r/86400);r%=86400;let l=Math.floor(r/3600);r%=3600;let s=Math.floor(r/60);return r%=60,n+"年"+a+"月"+o+"天 "+l+"小时"+s+"分"+r.toFixed(0)+"秒"}__diffTime(e,t){let r,n=new Date,a=(e=new Date(e)).getTime()-n.getTime(),o=Math.floor(a/864e5),l=a%864e5,s=Math.floor(l/36e5),u=l%36e5,i=Math.floor(u/6e4),c=u%6e4,_=Math.round(c/1e3);switch(t){case"day":r=o;break;case"hours":r=o+"天"+s+"小时";break;case"minutes":r=o+"天"+s+"小时"+i+"分";break;case"seconds":r=o+"天"+s+"小时"+i+"分"+_+"秒"}return r}__isType(e){return Object.prototype.toString.call(e).replace(/\[object (\w+)\]/,"$1").toLowerCase()}__findNode(e,t,r,n){if(!e)return[];for(const a of e){let e={};for(const t in n)e[t]=a[t];if(r.push(e),t(a))return r;if(a.children){const e=this.findNode(a.children,t,r,n);if(e.length)return e}r.pop()}return[]}};return t.default})()));