function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const n=Number(t.currentTarget.elements.step.value),o=Number(t.currentTarget.elements.amount.value);let r=Number(t.currentTarget.elements.delay.value);for(let t=1;t<=o;t+=1)r+=n,l(t,r).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`),console.log(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`),console.log(`❌ Rejected promise ${t} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.f0b26c19.js.map
