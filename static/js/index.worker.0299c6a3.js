/*! For license information please see index.worker.0299c6a3.js.LICENSE.txt */
(()=>{"use strict";var e={497:(e,n,t)=>{e.exports=t.p+"static/media/fuzzy_search_bg.dc2ec66c389cb7da1620.wasm"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.p="/nthw_search_engine/",t.b=self.location+"/../../../",(()=>{const e=Symbol("Comlink.proxy"),n=Symbol("Comlink.endpoint"),r=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.finalizer"),a=Symbol("Comlink.thrown"),i=e=>"object"===typeof e&&null!==e||"function"===typeof e,s=new Map([["proxy",{canHandle:n=>i(n)&&n[e],serialize(e){const{port1:n,port2:t}=new MessageChannel;return c(e,n),[t,[t]]},deserialize(e){return e.start(),b(e,[],n);var n}}],["throw",{canHandle:e=>i(e)&&a in e,serialize(e){let n,{value:t}=e;return n=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function c(n){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:globalThis,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["*"];t.addEventListener("message",(function i(s){if(!s||!s.data)return;if(!function(e,n){for(const t of e){if(n===t||"*"===t)return!0;if(t instanceof RegExp&&t.test(n))return!0}return!1}(r,s.origin))return void console.warn("Invalid origin '".concat(s.origin,"' for comlink proxy"));const{id:l,type:f,path:d}=Object.assign({path:[]},s.data),g=(s.data.argumentList||[]).map(y);let b;try{const t=d.slice(0,-1).reduce(((e,n)=>e[n]),n),r=d.reduce(((e,n)=>e[n]),n);switch(f){case"GET":b=r;break;case"SET":t[d.slice(-1)[0]]=y(s.data.value),b=!0;break;case"APPLY":b=r.apply(t,g);break;case"CONSTRUCT":b=function(n){return Object.assign(n,{[e]:!0})}(new r(...g));break;case"ENDPOINT":{const{port1:e,port2:t}=new MessageChannel;c(n,t),b=function(e,n){return p.set(e,n),e}(e,[e])}break;case"RELEASE":b=void 0;break;default:return}}catch(w){b={value:w,[a]:0}}Promise.resolve(b).catch((e=>({value:e,[a]:0}))).then((e=>{const[r,a]=_(e);t.postMessage(Object.assign(Object.assign({},r),{id:l}),a),"RELEASE"===f&&(t.removeEventListener("message",i),u(t),o in n&&"function"===typeof n[o]&&n[o]())})).catch((e=>{const[n,r]=_({value:new TypeError("Unserializable return value"),[a]:0});t.postMessage(Object.assign(Object.assign({},n),{id:l}),r)}))})),t.start&&t.start()}function u(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){return h(e,{type:"RELEASE"}).then((()=>{u(e)}))}const d=new WeakMap,g="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const n=(d.get(e)||0)-1;d.set(e,n),0===n&&f(e)}));function b(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],o=!1;const a=new Proxy(arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},{get(n,i){if(l(o),i===r)return()=>{!function(e){g&&g.unregister(e)}(a),f(e),o=!0};if("then"===i){if(0===t.length)return{then:()=>a};const n=h(e,{type:"GET",path:t.map((e=>e.toString()))}).then(y);return n.then.bind(n)}return b(e,[...t,i])},set(n,r,a){l(o);const[i,s]=_(a);return h(e,{type:"SET",path:[...t,r].map((e=>e.toString())),value:i},s).then(y)},apply(r,a,i){l(o);const s=t[t.length-1];if(s===n)return h(e,{type:"ENDPOINT"}).then(y);if("bind"===s)return b(e,t.slice(0,-1));const[c,u]=w(i);return h(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(y)},construct(n,r){l(o);const[a,i]=w(r);return h(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:a},i).then(y)}});return function(e,n){const t=(d.get(n)||0)+1;d.set(n,t),g&&g.register(e,n,e)}(a,e),a}function w(e){const n=e.map(_);return[n.map((e=>e[0])),(t=n.map((e=>e[1])),Array.prototype.concat.apply([],t))];var t}const p=new WeakMap;function _(e){for(const[n,t]of s)if(t.canHandle(e)){const[r,o]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},o]}return[{type:"RAW",value:e},p.get(e)||[]]}function y(e){switch(e.type){case"HANDLER":return s.get(e.name).deserialize(e.value);case"RAW":return e.value}}function h(e,n,t){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===o&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},n),t)}))}let m;const v=new Array(128).fill(void 0);function E(e){return v[e]}v.push(void 0,null,!0,!1);let A=v.length;function x(e){const n=E(e);return function(e){e<132||(v[e]=A,A=e)}(e),n}const R="undefined"!==typeof TextDecoder?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};"undefined"!==typeof TextDecoder&&R.decode();let T=null;function S(){return null!==T&&0!==T.byteLength||(T=new Uint8Array(m.memory.buffer)),T}function k(e,n){return e>>>=0,R.decode(S().subarray(e,e+n))}function L(e){A===v.length&&v.push(v.length+1);const n=A;return A=v[n],v[n]=e,n}let O=0;const M="undefined"!==typeof TextEncoder?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},j="function"===typeof M.encodeInto?function(e,n){return M.encodeInto(e,n)}:function(e,n){const t=M.encode(e);return n.set(t),{read:e.length,written:t.length}};let z=null;function C(){return null!==z&&0!==z.byteLength||(z=new Int32Array(m.memory.buffer)),z}function P(e,n,t){try{const a=m.__wbindgen_add_to_stack_pointer(-16),i=function(e,n,t){if(void 0===t){const t=M.encode(e),r=n(t.length,1)>>>0;return S().subarray(r,r+t.length).set(t),O=t.length,r}let r=e.length,o=n(r,1)>>>0;const a=S();let i=0;for(;i<r;i++){const n=e.charCodeAt(i);if(n>127)break;a[o+i]=n}if(i!==r){0!==i&&(e=e.slice(i)),o=t(o,r,r=i+3*e.length,1)>>>0;const n=S().subarray(o+i,o+r);i+=j(e,n).written,o=t(o,r,i,1)>>>0}return O=i,o}(e,m.__wbindgen_export_0,m.__wbindgen_export_1),s=O;m.search(a,i,s,n,t);var r=C()[a/4+0],o=C()[a/4+1];if(C()[a/4+2])throw x(o);return x(r)}finally{m.__wbindgen_add_to_stack_pointer(16)}}"undefined"===typeof FinalizationRegistry||new FinalizationRegistry((e=>m.__wbg_searchresult_free(e>>>0)));function N(){const e={wbg:{}};return e.wbg.__wbindgen_object_drop_ref=function(e){x(e)},e.wbg.__wbindgen_error_new=function(e,n){return L(new Error(k(e,n)))},e.wbg.__wbindgen_number_new=function(e){return L(e)},e.wbg.__wbindgen_bigint_from_u64=function(e){return L(BigInt.asUintN(64,e))},e.wbg.__wbindgen_object_clone_ref=function(e){return L(E(e))},e.wbg.__wbindgen_string_new=function(e,n){return L(k(e,n))},e.wbg.__wbg_set_f975102236d3c502=function(e,n,t){E(e)[x(n)]=x(t)},e.wbg.__wbg_new_16b304a2cfa7ff4a=function(){return L(new Array)},e.wbg.__wbg_new_72fb9a18b5ae2624=function(){return L(new Object)},e.wbg.__wbg_set_d4638f722068f043=function(e,n,t){E(e)[n>>>0]=x(t)},e.wbg.__wbindgen_throw=function(e,n){throw new Error(k(e,n))},e}function W(e,n){return m=e.exports,I.__wbindgen_wasm_module=n,z=null,T=null,m}async function I(e){if(void 0!==m)return m;"undefined"===typeof e&&(e=new URL(t(497),t.b));const n=N();("string"===typeof e||"function"===typeof Request&&e instanceof Request||"function"===typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:r,module:o}=await async function(e,n){if("function"===typeof Response&&e instanceof Response){if("function"===typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(e,n)}catch(t){if("application/wasm"==e.headers.get("Content-Type"))throw t;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t)}const r=await e.arrayBuffer();return await WebAssembly.instantiate(r,n)}{const t=await WebAssembly.instantiate(e,n);return t instanceof WebAssembly.Instance?{instance:t,module:e}:t}}(await e,n);return W(r,o)}const D=I;c(class{constructor(){this.loaded=!1}async init(){await D()}async search(e,n,t){return this.loaded||await this.init(),P(e,n,t)}})})()})();