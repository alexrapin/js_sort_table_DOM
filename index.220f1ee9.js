function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r=function(t){return t.slice(1).split(",").join("")};document.addEventListener("click",function(e){if("THEAD"!==e.target.parentElement.parentElement.tagName)return 0;var n,o=e.target.cellIndex,i=document.querySelector("tbody");((function(r){if(Array.isArray(r))return t(r)})(n=i.children)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(n)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort(function(t,e){var n=t.children[o].textContent,i=e.children[o].textContent,a=!isNaN(parseFloat(n))&&isFinite(n),l="$"===n[0];return a?i-n:l?r(i)-r(n):i.localeCompare(n)}).forEach(function(t){return i.prepend(t)})});
//# sourceMappingURL=index.220f1ee9.js.map