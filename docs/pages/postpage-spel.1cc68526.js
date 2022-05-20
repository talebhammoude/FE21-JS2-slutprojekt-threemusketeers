function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=e.parcelRequire9600;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){s[t]=e},e.parcelRequire9600=i),i.register("eQcrH",(function(e,n){t(e.exports,"Post",(function(){return s}));var s=function(t,e,n,s){this.username=t,this.text=e,this.category=n,this.time=s}})),i.register("83ZX7",(function(e,n){t(e.exports,"getFirestore",(function(){return i("3PjDZ").getFirestore})),t(e.exports,"addDoc",(function(){return i("3PjDZ").addDoc})),t(e.exports,"collection",(function(){return i("3PjDZ").collection})),t(e.exports,"deleteDoc",(function(){return i("3PjDZ").deleteDoc})),t(e.exports,"doc",(function(){return i("3PjDZ").doc})),t(e.exports,"query",(function(){return i("3PjDZ").query})),t(e.exports,"where",(function(){return i("3PjDZ").where})),t(e.exports,"orderBy",(function(){return i("3PjDZ").orderBy})),t(e.exports,"getDocs",(function(){return i("3PjDZ").getDocs})),i("3PjDZ")})),i.register("3PjDZ",(function(e,n){t(e.exports,"collection",(function(){return xr})),t(e.exports,"doc",(function(){return Mr})),t(e.exports,"getFirestore",(function(){return Or})),t(e.exports,"query",(function(){return vo})),t(e.exports,"where",(function(){return Eo})),t(e.exports,"orderBy",(function(){return Io})),t(e.exports,"getDocs",(function(){return Do})),t(e.exports,"deleteDoc",(function(){return ko})),t(e.exports,"addDoc",(function(){return Ro}));var s=i("ix4Jr"),r=i("4a6xH"),o=i("7vF8m"),a=i("ffjl9"),u=i("lW9Fu");i("4TNnu");const h="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let l="9.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new o.Logger("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${l}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${l}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${l}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${l}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function w(t,e){t||v()}function E(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(c.UNAUTHENTICATED)))}shutdown(){}}class C{start(t,e){let n=this.i;const s=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new b;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new b,t.enqueueRetryable((()=>s(this.currentUser)))};const r=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await s(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new b)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(w("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return w(null===t||"string"==typeof t),new c(t)}constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class N{constructor(t,e,n){this.type="FirstParty",this.user=c.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const s=t.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class _{getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(c.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class D{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class k{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const s=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>s(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?s(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(w("string"==typeof t.token),this.p=t.token,new D(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.I(t),this.T=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.A=-1;class x{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=L(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function M(t,e){return t<e?-1:t>e?1:0}function V(t,e,n){return t.length===e.length&&t.every(((t,s)=>n(t,e[s])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static fromTimestamp(t){return new O(t)}static min(){return new O(new P(0,0))}static max(){return new O(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function F(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function q(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{get length(){return this.len}isEqual(t){return 0===B.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof B?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const n=t.get(s),i=e.get(s);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class j extends B{construct(t,e,n){return new j(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new I(T.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new j(e)}static emptyPath(){return new j([])}}const K=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class G extends B{construct(t,e,n){return new G(t,e,n)}static isValidIdentifier(t){return K.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),G.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new G(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(0===n.length)throw new I(T.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;s<t.length;){const e=t[s];if("\\"===e){if(s+1===t.length)throw new I(T.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[s+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new I(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,s+=2}else"`"===e?(r=!r,s++):"."!==e||r?(n+=e,s++):(i(),s++)}if(i(),r)throw new I(T.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new G(e)}static emptyPath(){return new G([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return V(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(G.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let z=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{static fromBase64String(t){const e=atob(t);return new H(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new H(e)}[z](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}H.EMPTY_BYTE_STRING=new H("");const W=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(t){if(w(!!t),"string"==typeof t){let e=0;const n=W.exec(t);if(w(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(t.seconds),nanos:Q(t.nanos)}}function Q(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Y(t){return"string"==typeof t?H.fromBase64String(t):H.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Z(t){const e=t.mapValue.fields.__previous_value__;return J(e)?Z(e):e}function tt(t){const e=X(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(t,e,n,s,i,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class nt{static empty(){return new nt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof nt&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return null==t}function it(t){return 0===t&&1/t==-1/0}function rt(t){return"number"==typeof t&&Number.isInteger(t)&&!it(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static fromPath(t){return new ot(j.fromString(t))}static fromName(t){return new ot(j.fromString(t).popFirst(5))}static empty(){return new ot(j.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===j.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return j.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ot(new j(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ut(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?J(t)?4:It(t)?9007199254740991:10:v()}function ht(t,e){if(t===e)return!0;const n=ut(t);if(n!==ut(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return tt(t).isEqual(tt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=X(t.timestampValue),s=X(e.timestampValue);return n.seconds===s.seconds&&n.nanos===s.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return s=e,Y(t.bytesValue).isEqual(Y(s.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Q(t.geoPointValue.latitude)===Q(e.geoPointValue.latitude)&&Q(t.geoPointValue.longitude)===Q(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Q(t.integerValue)===Q(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Q(t.doubleValue),s=Q(e.doubleValue);return n===s?it(n)===it(s):isNaN(n)&&isNaN(s)}return!1}(t,e);case 9:return V(t.arrayValue.values||[],e.arrayValue.values||[],ht);case 10:return function(t,e){const n=t.mapValue.fields||{},s=e.mapValue.fields||{};if(U(n)!==U(s))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===s[t]||!ht(n[t],s[t])))return!1;return!0}(t,e);default:return v()}var s}function ct(t,e){return void 0!==(t.values||[]).find((t=>ht(t,e)))}function lt(t,e){if(t===e)return 0;const n=ut(t),s=ut(e);if(n!==s)return M(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Q(t.integerValue||t.doubleValue),s=Q(e.integerValue||e.doubleValue);return n<s?-1:n>s?1:n===s?0:isNaN(n)?isNaN(s)?0:-1:1}(t,e);case 3:return dt(t.timestampValue,e.timestampValue);case 4:return dt(tt(t),tt(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Y(t),s=Y(e);return n.compareTo(s)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),s=e.split("/");for(let t=0;t<n.length&&t<s.length;t++){const e=M(n[t],s[t]);if(0!==e)return e}return M(n.length,s.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=M(Q(t.latitude),Q(e.latitude));return 0!==n?n:M(Q(t.longitude),Q(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],s=e.values||[];for(let t=0;t<n.length&&t<s.length;++t){const e=lt(n[t],s[t]);if(e)return e}return M(n.length,s.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===at.mapValue&&e===at.mapValue)return 0;if(t===at.mapValue)return 1;if(e===at.mapValue)return-1;const n=t.fields||{},s=Object.keys(n),i=e.fields||{},r=Object.keys(i);s.sort(),r.sort();for(let t=0;t<s.length&&t<r.length;++t){const e=M(s[t],r[t]);if(0!==e)return e;const o=lt(n[s[t]],i[r[t]]);if(0!==o)return o}return M(s.length,r.length)}(t.mapValue,e.mapValue);default:throw v()}}function dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return M(t,e);const n=X(t),s=X(e),i=M(n.seconds,s.seconds);return 0!==i?i:M(n.nanos,s.nanos)}function ft(t){return pt(t)}function pt(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=X(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Y(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ot.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const s of t.values||[])n?n=!1:e+=",",e+=pt(s);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of e)s?s=!1:n+=",",n+=`${i}:${pt(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function gt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function mt(t){return!!t&&"integerValue"in t}function yt(t){return!!t&&"arrayValue"in t}function vt(t){return!!t&&"nullValue"in t}function wt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Et(t){return!!t&&"mapValue"in t}function Tt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return F(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Tt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Tt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function It(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{static empty(){return new bt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Et(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Tt(e)}setAll(t){let e=G.emptyPath(),n={},s=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,s),n={},s=[],e=i.popLast()}t?n[i.lastSegment()]=Tt(t):s.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Et(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ht(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Et(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){F(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new bt(Tt(this.value))}constructor(t){this.value=t}}function St(t){const e=[];return F(t.fields,((t,n)=>{const s=new G([t]);if(Et(n)){const t=St(n.mapValue).fields;if(0===t.length)e.push(s);else for(const n of t)e.push(s.child(n))}else e.push(s)})),new $(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class At{static newInvalidDocument(t){return new At(t,0,O.min(),O.min(),bt.empty(),0)}static newFoundDocument(t,e,n){return new At(t,1,e,O.min(),n,0)}static newNoDocument(t,e){return new At(t,2,e,O.min(),bt.empty(),0)}static newUnknownDocument(t,e){return new At(t,3,e,O.min(),bt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof At&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new At(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,s,i,r){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.data=i,this.documentState=r}}class Ct{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}Ct.UNKNOWN_ID=-1;function Nt(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=O.fromTimestamp(1e9===s?new P(n+1,0):new P(n,s));return new Dt(i,ot.empty(),e)}function _t(t){return new Dt(t.readTime,t.key,-1)}class Dt{static min(){return new Dt(O.min(),ot.empty(),-1)}static max(){return new Dt(O.max(),ot.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function kt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ot.comparator(t.documentKey,e.documentKey),0!==n?n:M(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{insert(t,e){return new Rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(0===s)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Lt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Lt(this.root,t,this.comparator,!1)}getReverseIterator(){return new Lt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Lt(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||xt.EMPTY}}class Lt{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class xt{copy(t,e,n,s,i){return new xt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=s?s:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):0===i?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return xt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),0===e(t,s.key)){if(s.right.isEmpty())return xt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=null!=n?n:xt.RED,this.left=null!=s?s:xt.EMPTY,this.right=null!=i?i:xt.EMPTY,this.size=this.left.size+1+this.right.size}}xt.EMPTY=null,xt.RED=!0,xt.BLACK=!1,xt.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,s,i){return this}insert(t,e,n){return new xt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vt(this.data.getIterator())}getIteratorFrom(t){return new Vt(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Mt))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(0!==this.comparator(t,s))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Mt(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}}class Vt{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(t,e=null,n=[],s=[],i=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=r,this.endAt=o,this.P=null}}function Ot(t,e=null,n=[],s=[],i=null,r=null,o=null){return new Pt(t,e,n,s,i,r,o)}function Ut(t){const e=E(t);if(null===e.P){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+ft(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),st(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ft(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ft(t))).join(",")),e.P=t}return e.P}function Ft(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Jt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],s=e.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!ht(n.value,s.value))return!1;var n,s;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!te(t.startAt,e.startAt)&&te(t.endAt,e.endAt)}function qt(t){return ot.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Bt extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.V(t,e,n):new jt(t,e,n):"array-contains"===e?new zt(t,n):"in"===e?new Ht(t,n):"not-in"===e?new Wt(t,n):"array-contains-any"===e?new Xt(t,n):new Bt(t,e,n)}static V(t,e,n){return"in"===e?new Kt(t,n):new Gt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(lt(e,this.value)):null!==e&&ut(this.value)===ut(e)&&this.v(lt(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class jt extends Bt{matches(t){const e=ot.comparator(t.key,this.key);return this.v(e)}constructor(t,e,n){super(t,e,n),this.key=ot.fromName(n.referenceValue)}}class Kt extends Bt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=$t("in",e)}}class Gt extends Bt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=$t("not-in",e)}}function $t(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ot.fromName(t.referenceValue)))}class zt extends Bt{matches(t){const e=t.data.field(this.field);return yt(e)&&ct(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Ht extends Bt{matches(t){const e=t.data.field(this.field);return null!==e&&ct(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Wt extends Bt{matches(t){if(ct(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ct(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Xt extends Bt{matches(t){const e=t.data.field(this.field);return!(!yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ct(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class Qt{constructor(t,e){this.position=t,this.inclusive=e}}class Yt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Jt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Zt(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(s=r.field.isKeyField()?ot.comparator(ot.fromName(o.referenceValue),n.key):lt(o,n.data.field(r.field)),"desc"===r.dir&&(s*=-1),0!==s)break}return s}function te(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ht(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e=null,n=[],s=[],i=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=r,this.startAt=o,this.endAt=a,this.D=null,this.C=null,this.startAt,this.endAt}}function ne(t,e,n,s,i,r,o,a){return new ee(t,e,n,s,i,r,o,a)}function se(t){return new ee(t)}function ie(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function re(t){for(const e of t.filters)if(e.S())return e.field;return null}function oe(t){return null!==t.collectionGroup}function ae(t){const e=E(t);if(null===e.D){e.D=[];const t=re(e),n=ie(e);if(null!==t&&null===n)t.isKeyField()||e.D.push(new Yt(t)),e.D.push(new Yt(G.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.D.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Yt(G.keyField(),t))}}}return e.D}function ue(t){const e=E(t);if(!e.C)if("F"===e.limitType)e.C=Ot(e.path,e.collectionGroup,ae(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of ae(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Yt(n.field,e))}const n=e.endAt?new Qt(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Qt(e.startAt.position,e.startAt.inclusive):null;e.C=Ot(e.path,e.collectionGroup,t,e.filters,e.limit,n,s)}return e.C}function he(t,e,n){return new ee(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ce(t,e){return Ft(ue(t),ue(e))&&t.limitType===e.limitType}function le(t){return`${Ut(ue(t))}|lt:${t.limitType}`}function de(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${ft(e.value)}`})).join(", ")}]`),st(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ft(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ft(t))).join(",")),`Target(${e})`}(ue(t))}; limitType=${t.limitType})`}function fe(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ot.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(s=e,!((n=t).startAt&&!function(t,e,n){const s=Zt(t,e,n);return t.inclusive?s<=0:s<0}(n.startAt,ae(n),s)||n.endAt&&!function(t,e,n){const s=Zt(t,e,n);return t.inclusive?s>=0:s>0}(n.endAt,ae(n),s)));var n,s}function pe(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function ge(t){return(e,n)=>{let s=!1;for(const i of ae(t)){const t=me(i,e,n);if(0!==t)return t;s=s||i.field.isKeyField()}return 0}}function me(t,e,n){const s=t.field.isKeyField()?ot.comparator(e.key,n.key):function(t,e,n){const s=e.data.field(t),i=n.data.field(t);return null!==s&&null!==i?lt(s,i):v()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t,e){if(t.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:it(e)?"-0":e}}function ve(t){return{integerValue:""+t}}function we(t,e){return rt(e)?ve(e):ye(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this._=void 0}}function Te(t,e,n){return t instanceof Se?Ae(t,e):t instanceof Ce?Ne(t,e):n}function Ie(t,e){var n,s;return t instanceof _e?mt(n=e)||(s=n)&&"doubleValue"in s?e:{integerValue:0}:null}class be extends Ee{}class Se extends Ee{constructor(t){super(),this.elements=t}}function Ae(t,e){const n=ke(e);for(const e of t.elements)n.some((t=>ht(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ce extends Ee{constructor(t){super(),this.elements=t}}function Ne(t,e){let n=ke(e);for(const e of t.elements)n=n.filter((t=>!ht(t,e)));return{arrayValue:{values:n}}}class _e extends Ee{constructor(t,e){super(),this.M=t,this.k=e}}function De(t){return Q(t.integerValue||t.doubleValue)}function ke(t){return yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.version=t,this.transformResults=e}}class Le{static none(){return new Le}static exists(t){return new Le(void 0,t)}static updateTime(t){return new Le(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function xe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Me{}function Ve(t,e,n){var s;t instanceof qe?function(t,e,n){const s=t.value.clone(),i=Ke(t.fieldTransforms,e,n.transformResults);s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):t instanceof Be?function(t,e,n){if(!xe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const s=Ke(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(je(t)),i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(s=n,e.convertToNoDocument(s.version).setHasCommittedMutations())}function Pe(t,e,n){var s;t instanceof qe?function(t,e,n){if(!xe(t.precondition,e))return;const s=t.value.clone(),i=Ge(t.fieldTransforms,n,e);s.setAll(i),e.convertToFoundDocument(Fe(e),s).setHasLocalMutations()}(t,e,n):t instanceof Be?function(t,e,n){if(!xe(t.precondition,e))return;const s=Ge(t.fieldTransforms,n,e),i=e.data;i.setAll(je(t)),i.setAll(s),e.convertToFoundDocument(Fe(e),i).setHasLocalMutations()}(t,e,n):(s=e,xe(t.precondition,s)&&s.convertToNoDocument(O.min()))}function Oe(t,e){let n=null;for(const s of t.fieldTransforms){const t=e.data.field(s.field),i=Ie(s.transform,t||null);null!=i&&(null==n&&(n=bt.empty()),n.set(s.field,i))}return n||null}function Ue(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,s=e.fieldTransforms,!!(void 0===n&&void 0===s||n&&s&&V(n,s,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,s=e.transform,n instanceof Se&&s instanceof Se||n instanceof Ce&&s instanceof Ce?V(n.elements,s.elements,ht):n instanceof _e&&s instanceof _e?ht(n.k,s.k):n instanceof be&&s instanceof be);var n,s}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,s}function Fe(t){return t.isFoundDocument()?t.version:O.min()}class qe extends Me{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}}class Be extends Me{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}})),e}function Ke(t,e,n){const s=new Map;w(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,Te(o,a,n[i]))}return s}function Ge(t,e,n){const s=new Map;for(const a of t){const t=a.transform,u=n.data.field(a.field);s.set(a.field,(r=u,o=e,(i=t)instanceof be?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):i instanceof Se?Ae(i,r):i instanceof Ce?Ne(i,r):function(t,e){const n=Ie(t,e),s=De(n)+De(t.k);return mt(n)&&mt(t.k)?ve(s):ye(t.M,s)}(i,r)))}var i,r,o;return s}class $e extends Me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class ze extends Me{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,Xe;function Qe(t){switch(t){default:return v();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function Ye(t){if(void 0===t)return g("GRPC error has no .code"),T.UNKNOWN;switch(t){case We.OK:return T.OK;case We.CANCELLED:return T.CANCELLED;case We.UNKNOWN:return T.UNKNOWN;case We.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case We.INTERNAL:return T.INTERNAL;case We.UNAVAILABLE:return T.UNAVAILABLE;case We.UNAUTHENTICATED:return T.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case We.NOT_FOUND:return T.NOT_FOUND;case We.ALREADY_EXISTS:return T.ALREADY_EXISTS;case We.PERMISSION_DENIED:return T.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case We.ABORTED:return T.ABORTED;case We.OUT_OF_RANGE:return T.OUT_OF_RANGE;case We.UNIMPLEMENTED:return T.UNIMPLEMENTED;case We.DATA_LOSS:return T.DATA_LOSS;default:return v()}}(Xe=We||(We={}))[Xe.OK=0]="OK",Xe[Xe.CANCELLED=1]="CANCELLED",Xe[Xe.UNKNOWN=2]="UNKNOWN",Xe[Xe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xe[Xe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xe[Xe.NOT_FOUND=5]="NOT_FOUND",Xe[Xe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xe[Xe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xe[Xe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xe[Xe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xe[Xe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xe[Xe.ABORTED=10]="ABORTED",Xe[Xe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xe[Xe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xe[Xe.INTERNAL=13]="INTERNAL",Xe[Xe.UNAVAILABLE=14]="UNAVAILABLE",Xe[Xe.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,s]of n)if(this.equalsFn(e,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(void 0===s)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<s.length;n++)if(this.equalsFn(s[n][0],t))return void(s[n]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return 1===n.length?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){F(this.inner,((e,n)=>{for(const[e,s]of n)t(e,s)}))}isEmpty(){return q(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Rt(ot.comparator);function tn(){return Ze}const en=new Rt(ot.comparator);function nn(...t){let e=en;for(const n of t)e=e.insert(n.key,n);return e}function sn(){return new Je((t=>t.toString()),((t,e)=>t.isEqual(e)))}const rn=new Rt(ot.comparator),on=new Mt(ot.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const un=new Mt(M);function hn(){return un}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e)),new cn(O.min(),n,hn(),tn(),an())}constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}}class ln{static createSynthesizedTargetChangeForCurrentChange(t,e){return new ln(H.EMPTY_BYTE_STRING,e,an(),an(),an())}constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e,n,s){this.O=t,this.removedTargetIds=e,this.key=n,this.F=s}}class fn{constructor(t,e){this.targetId=t,this.$=e}}class pn{constructor(t,e,n=H.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class gn{get current(){return this.q}get resumeToken(){return this.U}get G(){return 0!==this.B}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=an(),e=an(),n=an();return this.L.forEach(((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:v()}})),new ln(this.U,this.q,t,e,n)}J(){this.K=!1,this.L=vn()}Y(t,e){this.K=!0,this.L=this.L.insert(t,e)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}constructor(){this.B=0,this.L=vn(),this.U=H.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}}class mn{ut(t){for(const e of t.O)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ht(t){this.forEachTarget(t,(e=>{const n=this.lt(e);switch(t.state){case 0:this.ft(e)&&n.W(t.resumeToken);break;case 1:n.tt(),n.G||n.J(),n.W(t.resumeToken);break;case 2:n.tt(),n.G||this.removeTarget(e);break;case 3:this.ft(e)&&(n.et(),n.W(t.resumeToken));break;case 4:this.ft(e)&&(this.dt(e),n.W(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.st.forEach(((t,n)=>{this.ft(n)&&e(n)}))}_t(t){const e=t.targetId,n=t.$.count,s=this.wt(e);if(s){const t=s.target;if(qt(t))if(0===n){const n=new ot(t.path);this.ct(e,n,At.newNoDocument(n,O.min()))}else w(1===n);else this.gt(e)!==n&&(this.dt(e),this.ot=this.ot.add(e))}}yt(t){const e=new Map;this.st.forEach(((n,s)=>{const i=this.wt(s);if(i){if(n.current&&qt(i.target)){const e=new ot(i.target.path);null!==this.it.get(e)||this.It(s,e)||this.ct(s,e,At.newNoDocument(e,t))}n.j&&(e.set(s,n.H()),n.J())}}));let n=an();this.rt.forEach(((t,e)=>{let s=!0;e.forEachWhile((t=>{const e=this.wt(t);return!e||2===e.purpose||(s=!1,!1)})),s&&(n=n.add(t))})),this.it.forEach(((e,n)=>n.setReadTime(t)));const s=new cn(t,e,this.ot,this.it,n);return this.it=tn(),this.rt=yn(),this.ot=new Mt(M),s}at(t,e){if(!this.ft(t))return;const n=this.It(t,e.key)?2:0;this.lt(t).Y(e.key,n),this.it=this.it.insert(e.key,e),this.rt=this.rt.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.ft(t))return;const s=this.lt(t);this.It(t,e)?s.Y(e,1):s.X(e),this.rt=this.rt.insert(e,this.Tt(e).delete(t)),n&&(this.it=this.it.insert(e,n))}removeTarget(t){this.st.delete(t)}gt(t){const e=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let e=this.st.get(t);return e||(e=new gn,this.st.set(t,e)),e}Tt(t){let e=this.rt.get(t);return e||(e=new Mt(M),this.rt=this.rt.insert(t,e)),e}ft(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.st.get(t);return e&&e.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new gn),this.nt.getRemoteKeysForTarget(t).forEach((e=>{this.ct(t,e,null)}))}It(t,e){return this.nt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.nt=t,this.st=new Map,this.it=tn(),this.rt=yn(),this.ot=new Mt(M)}}function yn(){return new Rt(ot.comparator)}function vn(){return new Rt(ot.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn={asc:"ASCENDING",desc:"DESCENDING"},En={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Tn{constructor(t,e){this.databaseId=t,this.N=e}}function In(t,e){return t.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bn(t,e){return t.N?e.toBase64():e.toUint8Array()}function Sn(t,e){return In(t,e.toTimestamp())}function An(t){return w(!!t),O.fromTimestamp(function(t){const e=X(t);return new P(e.seconds,e.nanos)}(t))}function Cn(t,e){return(n=t,new j(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Nn(t){const e=j.fromString(t);return w(zn(e)),e}function _n(t,e){return Cn(t.databaseId,e.path)}function Dn(t,e){const n=Nn(e);if(n.get(1)!==t.databaseId.projectId)throw new I(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new I(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ot(xn(n))}function kn(t,e){return Cn(t.databaseId,e)}function Rn(t){const e=Nn(t);return 4===e.length?j.emptyPath():xn(e)}function Ln(t){return new j(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xn(t){return w(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Mn(t,e,n){return{name:_n(t,e),fields:n.value.mapValue.fields}}function Vn(t,e){let n;if(e instanceof qe)n={update:Mn(t,e.key,e.value)};else if(e instanceof $e)n={delete:_n(t,e.key)};else if(e instanceof Be)n={update:Mn(t,e.key,e.data),updateMask:$n(e.fieldMask)};else{if(!(e instanceof ze))return v();n={verify:_n(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof be)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Se)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ce)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _e)return{fieldPath:e.field.canonicalString(),increment:n.k};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(s=t,void 0!==(i=e.precondition).updateTime?{updateTime:Sn(s,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var s,i}function Pn(t,e){return{documents:[kn(t,e.path)]}}function On(t,e){const n={structuredQuery:{}},s=e.path;null!==e.collectionGroup?(n.parent=kn(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=kn(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(wt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NAN"}};if(vt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(wt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NAN"}};if(vt(t.value))return{unaryFilter:{field:jn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jn(t.field),op:Bn(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const r=function(t){if(0!==t.length)return t.map((t=>{return{field:jn((e=t).field),direction:qn(e.dir)};var e}))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=(a=t,u=e.limit,a.N||st(u)?u:{value:u});var a,u,h;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(h=e.startAt).inclusive,values:h.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Un(t){let e=Rn(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){w(1===s);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Fn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Yt(Kn((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,st(e)?null:e}(n.limit));let u=null;n.startAt&&(u=function(t){const e=!!t.before,n=t.values||[];return new Qt(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new Qt(n,e)}(n.endAt)),ne(e,i,o,r,a,"F",u,h)}function Fn(t){return t?void 0!==t.unaryFilter?[Gn(t)]:void 0!==t.fieldFilter?[(e=t,Bt.create(Kn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Fn(t))).reduce(((t,e)=>t.concat(e))):v():[];var e}function qn(t){return wn[t]}function Bn(t){return En[t]}function jn(t){return{fieldPath:t.canonicalString()}}function Kn(t){return G.fromServerFormat(t.fieldPath)}function Gn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Kn(t.unaryFilter.field);return Bt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Kn(t.unaryFilter.field);return Bt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Kn(t.unaryFilter.field);return Bt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Kn(t.unaryFilter.field);return Bt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function $n(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Wn=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Xn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Yn(((n,s)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,s)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,s)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Yn?e:Yn.resolve(e)}catch(t){return Yn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Yn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Yn.reject(e)}static resolve(t){return new Yn(((e,n)=>{e(t)}))}static reject(t){return new Yn(((e,n)=>{n(t)}))}static waitFor(t){return new Yn(((e,n)=>{let s=0,i=0,r=!1;t.forEach((t=>{++s,t.next((()=>{++i,r&&i===s&&e()}),(t=>n(t)))})),r=!0,i===s&&e()}))}static or(t){let e=Yn.resolve(!1);for(const n of t)e=e.next((t=>t?Yn.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,s)=>{n.push(e.call(this,t,s))})),this.waitFor(n)}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const s=this.mutations[e];s.key.isEqual(t.key)&&Ve(s,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Pe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Pe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach((e=>{const n=t.get(e.key),s=n;this.applyToLocalView(s),n.isValidDocument()||s.convertToNoDocument(O.min())}))}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),an())}isEqual(t){return this.batchId===t.batchId&&V(this.mutations,t.mutations,((t,e)=>Ue(t,e)))&&V(this.baseMutations,t.baseMutations,((t,e)=>Ue(t,e)))}constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}}class ts{static from(t,e,n){w(t.mutations.length===n.length);let s=rn;const i=t.mutations;for(let t=0;t<i.length;t++)s=s.insert(i[t].key,n[t].version);return new ts(t,e,n,s)}constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{withSequenceNumber(t){return new ns(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,s,i=O.min(),r=O.min(),o=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.Jt=t}}function is(t){const e=Un({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?he(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{Zt(t,e){this.te(t,e),e.ee()}te(t,e){if("nullValue"in t)this.ne(e,5);else if("booleanValue"in t)this.ne(e,10),e.se(t.booleanValue?1:0);else if("integerValue"in t)this.ne(e,15),e.se(Q(t.integerValue));else if("doubleValue"in t){const n=Q(t.doubleValue);isNaN(n)?this.ne(e,13):(this.ne(e,15),it(n)?e.se(0):e.se(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ne(e,20),"string"==typeof n?e.ie(n):(e.ie(`${n.seconds||""}`),e.se(n.nanos||0))}else if("stringValue"in t)this.re(t.stringValue,e),this.oe(e);else if("bytesValue"in t)this.ne(e,30),e.ue(Y(t.bytesValue)),this.oe(e);else if("referenceValue"in t)this.ae(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ne(e,45),e.se(n.latitude||0),e.se(n.longitude||0)}else"mapValue"in t?It(t)?this.ne(e,Number.MAX_SAFE_INTEGER):(this.ce(t.mapValue,e),this.oe(e)):"arrayValue"in t?(this.he(t.arrayValue,e),this.oe(e)):v()}re(t,e){this.ne(e,25),this.le(t,e)}le(t,e){e.ie(t)}ce(t,e){const n=t.fields||{};this.ne(e,55);for(const t of Object.keys(n))this.re(t,e),this.te(n[t],e)}he(t,e){const n=t.values||[];this.ne(e,50);for(const t of n)this.te(t,e)}ae(t,e){this.ne(e,37),ot.fromName(t).path.forEach((t=>{this.ne(e,60),this.le(t,e)}))}ne(t,e){t.se(e)}oe(t){t.se(2)}constructor(){}}rs.fe=new rs;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{addToCollectionParentIndex(t,e){return this.qe.add(e),Yn.resolve()}getCollectionParents(t,e){return Yn.resolve(this.qe.getEntries(e))}addFieldIndex(t,e){return Yn.resolve()}deleteFieldIndex(t,e){return Yn.resolve()}getDocumentsMatchingTarget(t,e){return Yn.resolve(null)}getIndexType(t,e){return Yn.resolve(0)}getFieldIndexes(t,e){return Yn.resolve([])}getNextCollectionGroupToUpdate(t){return Yn.resolve(null)}getMinOffset(t,e){return Yn.resolve(Dt.min())}updateCollectionGroup(t,e,n){return Yn.resolve()}updateIndexEntries(t,e){return Yn.resolve()}constructor(){this.qe=new as}}class as{add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new Mt(j.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new Mt(j.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class us{static withCacheSize(t){return new us(t,us.DEFAULT_COLLECTION_PERCENTILE,us.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */us.DEFAULT_COLLECTION_PERCENTILE=10,us.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,us.DEFAULT=new us(41943040,us.DEFAULT_COLLECTION_PERCENTILE,us.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),us.DISABLED=new us(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{next(){return this.mn+=2,this.mn}static gn(){return new hs(0)}static yn(){return new hs(-1)}constructor(t){this.mn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function cs(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==Xn)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ls{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,At.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Yn.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Je((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{Ls(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,e).next((n=>this.Us(t,e,n)))}Us(t,e,n){return this.ds.getEntry(t,e).next((t=>{for(const e of n)e.applyToLocalView(t);return t}))}qs(t,e){t.forEach(((t,n)=>{for(const t of e)t.applyToLocalView(n)}))}Ks(t,e){return this.ds.getEntries(t,e).next((e=>this.Gs(t,e).next((()=>e))))}Gs(t,e){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>this.qs(e,t)))}Qs(t,e,n){return s=e,ot.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.js(t,e.path):oe(e)?this.Ws(t,e,n):this.zs(t,e,n);var s}js(t,e){return this.Ls(t,new ot(e)).next((t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}Ws(t,e,n){const s=e.collectionGroup;let i=nn();return this.indexManager.getCollectionParents(t,s).next((r=>Yn.forEach(r,(r=>{const o=(a=e,u=r.child(s),new ee(u,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,u;return this.zs(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}zs(t,e,n){let s;return this.ds.getAllFromCollection(t,e.path,n).next((n=>(s=n,this.Bs.getAllMutationBatchesAffectingQuery(t,e)))).next((t=>{for(const e of t)for(const t of e.mutations){const n=t.key;let i=s.get(n);null==i&&(i=At.newInvalidDocument(n),s=s.insert(n,i)),Pe(t,i,e.localWriteTime),i.isFoundDocument()||(s=s.remove(n))}})).next((()=>(s.forEach(((t,n)=>{fe(e,n)||(s=s.remove(t))})),s)))}constructor(t,e,n){this.ds=t,this.Bs=e,this.indexManager=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{static Ys(t,e){let n=an(),s=an();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:s=s.add(t.doc.key)}return new fs(t,e.fromCache,n,s)}constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.Hs=n,this.Js=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{initialize(t,e){this.Zs=t,this.indexManager=e,this.Xs=!0}Qs(t,e,n,s){return this.ti(t,e).next((i=>i||this.ei(t,e,s,n))).next((n=>n||this.ni(t,e)))}ti(t,e){return Yn.resolve(null)}ei(t,e,n,s){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||s.isEqual(O.min())?this.ni(t,e):this.Zs.Ks(t,n).next((i=>{const r=this.si(e,i);return this.ii(e,r,n,s)?this.ni(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),de(e)),this.ri(t,r,e,Nt(s,-1)))}))}si(t,e){let n=new Mt(ge(t));return e.forEach(((e,s)=>{fe(t,s)&&(n=n.add(s))})),n}ii(t,e,n,s){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ni(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",de(e)),this.Zs.Qs(t,e,Dt.min())}ri(t,e,n,s){return this.Zs.Qs(t,n,s).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Xs=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{li(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.fi=new ds(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.ui)))}constructor(t,e,n,s){this.persistence=t,this.oi=e,this.M=s,this.ui=new Rt(M),this.ai=new Je((t=>Ut(t)),Ft),this.ci=new Map,this.hi=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.li(n)}}function ms(t,e,n,s){return new gs(t,e,n,s)}async function ys(t,e){const n=E(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let s;return n.Bs.getAllMutationBatches(t).next((i=>(s=i,n.li(e),n.Bs.getAllMutationBatches(t)))).next((e=>{const i=[],r=[];let o=an();for(const t of s){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.fi.Ks(t,o).next((t=>({di:t,removedBatchIds:i,addedBatchIds:r})))}))}))}function vs(t){const e=E(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.fs.getLastRemoteSnapshotVersion(t)))}function ws(t,e,n){let s=an();return n.forEach((t=>s=s.add(t))),e.getEntries(t,s).next((t=>{let s=tn();return n.forEach(((n,i)=>{const r=t.get(n);i.isNoDocument()&&i.version.isEqual(O.min())?(e.removeEntry(n,i.readTime),s=s.insert(n,i)):!r.isValidDocument()||i.version.compareTo(r.version)>0||0===i.version.compareTo(r.version)&&r.hasPendingWrites?(e.addEntry(i),s=s.insert(n,i)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",r.version," Watch version:",i.version)})),s}))}function Es(t,e){const n=E(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.Bs.getNextMutationBatchAfterBatchId(t,e))))}function Ts(t,e){const n=E(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let s;return n.fs.getTargetData(t,e).next((i=>i?(s=i,Yn.resolve(s)):n.fs.allocateTargetId(t).next((i=>(s=new ns(e,i,0,t.currentSequenceNumber),n.fs.addTargetData(t,s).next((()=>s)))))))})).then((t=>{const s=n.ui.get(t.targetId);return(null===s||t.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ui=n.ui.insert(t.targetId,t),n.ai.set(e,t.targetId)),t}))}async function Is(t,e,n){const s=E(t),i=s.ui.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,(t=>s.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Jn(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}s.ui=s.ui.remove(e),s.ai.delete(i.target)}function bs(t,e,n){const s=E(t);let i=O.min(),r=an();return s.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const s=E(t),i=s.ai.get(n);return void 0!==i?Yn.resolve(s.ui.get(i)):s.fs.getTargetData(e,n)}(s,t,ue(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>s.oi.Qs(t,e,n?i:O.min(),n?r:an()))).next((t=>(Ss(s,pe(e),t),{documents:t,_i:r})))))}function Ss(t,e,n){let s=O.min();n.forEach(((t,e)=>{e.readTime.compareTo(s)>0&&(s=e.readTime)})),t.ci.set(e,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{getBundleMetadata(t,e){return Yn.resolve(this.yi.get(e))}saveBundleMetadata(t,e){var n;return this.yi.set(e.id,{id:(n=e).id,version:n.version,createTime:An(n.createTime)}),Yn.resolve()}getNamedQuery(t,e){return Yn.resolve(this.pi.get(e))}saveNamedQuery(t,e){return this.pi.set(e.name,{name:(n=e).name,query:is(n.bundledQuery),readTime:An(n.readTime)}),Yn.resolve();var n}constructor(t){this.M=t,this.yi=new Map,this.pi=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{getOverlay(t,e){return Yn.resolve(this.overlays.get(e))}saveOverlays(t,e,n){return n.forEach(((n,s)=>{this.Xt(t,e,s)})),Yn.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.Ii.get(n);return void 0!==s&&(s.forEach((t=>this.overlays=this.overlays.remove(t))),this.Ii.delete(n)),Yn.resolve()}getOverlaysForCollection(t,e,n){const s=sn(),i=e.length+1,r=new ot(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===i&&t.largestBatchId>n&&s.set(t.getKey(),t)}return Yn.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new Rt(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=sn(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=sn(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=s)););return Yn.resolve(o)}Xt(t,e,n){if(null===n)return;const s=this.overlays.get(n.key);if(null!==s){const t=this.Ii.get(s.largestBatchId).delete(n.key);this.Ii.set(s.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new es(e,n));let i=this.Ii.get(e);void 0===i&&(i=an(),this.Ii.set(e,i)),this.Ii.set(e,i.add(n.key))}constructor(){this.overlays=new Rt(ot.comparator),this.Ii=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{isEmpty(){return this.Ti.isEmpty()}addReference(t,e){const n=new _s(t,e);this.Ti=this.Ti.add(n),this.Ai=this.Ai.add(n)}bi(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Pi(new _s(t,e))}Vi(t,e){t.forEach((t=>this.removeReference(t,e)))}vi(t){const e=new ot(new j([])),n=new _s(e,t),s=new _s(e,t+1),i=[];return this.Ai.forEachInRange([n,s],(t=>{this.Pi(t),i.push(t.key)})),i}Si(){this.Ti.forEach((t=>this.Pi(t)))}Pi(t){this.Ti=this.Ti.delete(t),this.Ai=this.Ai.delete(t)}Di(t){const e=new ot(new j([])),n=new _s(e,t),s=new _s(e,t+1);let i=an();return this.Ai.forEachInRange([n,s],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new _s(t,0),n=this.Ti.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Ti=new Mt(_s.Ei),this.Ai=new Mt(_s.Ri)}}class _s{static Ei(t,e){return ot.comparator(t.key,e.key)||M(t.Ci,e.Ci)}static Ri(t,e){return M(t.Ci,e.Ci)||ot.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.Ci=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{checkEmpty(t){return Yn.resolve(0===this.Bs.length)}addMutationBatch(t,e,n,s){const i=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new Zn(i,e,n,s);this.Bs.push(r);for(const e of s)this.Ni=this.Ni.add(new _s(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Yn.resolve(r)}lookupMutationBatch(t,e){return Yn.resolve(this.ki(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.Mi(n),i=s<0?0:s;return Yn.resolve(this.Bs.length>i?this.Bs[i]:null)}getHighestUnacknowledgedBatchId(){return Yn.resolve(0===this.Bs.length?-1:this.xi-1)}getAllMutationBatches(t){return Yn.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new _s(e,0),s=new _s(e,Number.POSITIVE_INFINITY),i=[];return this.Ni.forEachInRange([n,s],(t=>{const e=this.ki(t.Ci);i.push(e)})),Yn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Mt(M);return e.forEach((t=>{const e=new _s(t,0),s=new _s(t,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([e,s],(t=>{n=n.add(t.Ci)}))})),Yn.resolve(this.Oi(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;ot.isDocumentKey(i)||(i=i.child(""));const r=new _s(new ot(i),0);let o=new Mt(M);return this.Ni.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===s&&(o=o.add(t.Ci)),!0)}),r),Yn.resolve(this.Oi(o))}Oi(t){const e=[];return t.forEach((t=>{const n=this.ki(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){w(0===this.Fi(e.batchId,"removed")),this.Bs.shift();let n=this.Ni;return Yn.forEach(e.mutations,(s=>{const i=new _s(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)})).next((()=>{this.Ni=n}))}_n(t){}containsKey(t,e){const n=new _s(e,0),s=this.Ni.firstAfterOrEqual(n);return Yn.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.Bs.length,Yn.resolve()}Fi(t,e){return this.Mi(t)}Mi(t){return 0===this.Bs.length?0:t-this.Bs[0].batchId}ki(t){const e=this.Mi(t);return e<0||e>=this.Bs.length?null:this.Bs[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.Bs=[],this.xi=1,this.Ni=new Mt(_s.Ei)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,r=this.$i(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Yn.resolve(n?n.document.mutableCopy():At.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():At.newInvalidDocument(t))})),Yn.resolve(n)}getAllFromCollection(t,e,n){let s=tn();const i=new ot(e.child("")),r=this.docs.getIteratorFrom(i);for(;r.hasNext();){const{key:t,value:{document:i}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||kt(_t(i),n)<=0||(s=s.insert(i.key,i.mutableCopy()))}return Yn.resolve(s)}getAllFromCollectionGroup(t,e,n,s){v()}Bi(t,e){return Yn.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Rs(this)}getSize(t){return Yn.resolve(this.size)}constructor(t){this.$i=t,this.docs=new Rt(ot.comparator),this.size=0}}class Rs extends ls{applyChanges(t){const e=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?e.push(this.Kn.addEntry(t,s)):this.Kn.removeEntry(n)})),Yn.waitFor(e)}getFromCache(t,e){return this.Kn.getEntry(t,e)}getAllFromCache(t,e){return this.Kn.getEntries(t,e)}constructor(t){super(),this.Kn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{forEachTarget(t,e){return this.Li.forEach(((t,n)=>e(n))),Yn.resolve()}getLastRemoteSnapshotVersion(t){return Yn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Yn.resolve(this.Ui)}allocateTargetId(t){return this.highestTargetId=this.Ki.next(),Yn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Ui&&(this.Ui=e),Yn.resolve()}Tn(t){this.Li.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ki=new hs(e),this.highestTargetId=e),t.sequenceNumber>this.Ui&&(this.Ui=t.sequenceNumber)}addTargetData(t,e){return this.Tn(e),this.targetCount+=1,Yn.resolve()}updateTargetData(t,e){return this.Tn(e),Yn.resolve()}removeTargetData(t,e){return this.Li.delete(e.target),this.qi.vi(e.targetId),this.targetCount-=1,Yn.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Li.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Li.delete(r),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),s++)})),Yn.waitFor(i).next((()=>s))}getTargetCount(t){return Yn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Li.get(e)||null;return Yn.resolve(n)}addMatchingKeys(t,e,n){return this.qi.bi(e,n),Yn.resolve()}removeMatchingKeys(t,e,n){this.qi.Vi(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach((e=>{i.push(s.markPotentiallyOrphaned(t,e))})),Yn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.qi.vi(e),Yn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.qi.Di(e);return Yn.resolve(n)}containsKey(t,e){return Yn.resolve(this.qi.containsKey(e))}constructor(t){this.persistence=t,this.Li=new Je((t=>Ut(t)),Ft),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Ui=0,this.qi=new Ns,this.targetCount=0,this.Ki=hs.gn()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Cs,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Gi[t.toKey()];return n||(n=new Ds(e,this.referenceDelegate),this.Gi[t.toKey()]=n),n}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const s=new Ms(this.es.next());return this.referenceDelegate.ji(),n(s).next((t=>this.referenceDelegate.Wi(s).next((()=>t)))).toPromise().then((t=>(s.raiseOnCommittedEvent(),t)))}zi(t,e){return Yn.or(Object.values(this.Gi).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.Gi={},this.overlays={},this.es=new R(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new Ls(this),this.indexManager=new os,this.ds=new ks((t=>this.referenceDelegate.Qi(t))),this.M=new ss(e),this._s=new As(this.M)}}class Ms extends Qn{constructor(t){super(),this.currentSequenceNumber=t}}class Vs{static Yi(t){return new Vs(t)}get Xi(){if(this.Ji)return this.Ji;throw v()}addReference(t,e,n){return this.Hi.addReference(n,e),this.Xi.delete(n.toString()),Yn.resolve()}removeReference(t,e,n){return this.Hi.removeReference(n,e),this.Xi.add(n.toString()),Yn.resolve()}markPotentiallyOrphaned(t,e){return this.Xi.add(e.toString()),Yn.resolve()}removeTarget(t,e){this.Hi.vi(e.targetId).forEach((t=>this.Xi.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Xi.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ji(){this.Ji=new Set}Wi(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Yn.forEach(this.Xi,(n=>{const s=ot.fromPath(n);return this.Zi(t,s).next((t=>{t||e.removeEntry(s,O.min())}))})).next((()=>(this.Ji=null,e.apply(t))))}updateLimboDocument(t,e){return this.Zi(t,e).next((t=>{t?this.Xi.delete(e.toString()):this.Xi.add(e.toString())}))}Qi(t){return 0}Zi(t,e){return Yn.or([()=>Yn.resolve(this.Hi.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.zi(t,e)])}constructor(t){this.persistence=t,this.Hi=new Ns,this.Ji=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{nr(t){this.activeTargetIds=this.activeTargetIds.add(t)}sr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}er(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=hn()}}class Os{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Ur.nr(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Ur.sr(t)}isLocalQueryTarget(t){return this.Ur.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(t){return this.Ur.activeTargetIds.has(t)}start(){return this.Ur=new Ps,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Ur=new Ps,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{Kr(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{Kr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Wr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static vt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{Xr(t){this.Zr=t}eo(t){this.no=t}onMessage(t){this.so=t}close(){this.Yr()}send(t){this.Jr(t)}io(){this.Zr()}ro(t){this.no(t)}oo(t){this.so(t)}constructor(t){this.Jr=t.Jr,this.Yr=t.Yr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends class{co(t,e,n,s,i){const r=this.ho(t,e);p("RestConnection","Sending: ",r,n);const o={};return this.lo(o,s,i),this.fo(t,r,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,s,i){return this.co(t,e,n,s,i)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+l,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=qs[t];return`${this.uo}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.uo=e+"://"+t.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{fo(t,e,n,s){return new Promise(((i,r)=>{const o=new u.XhrIo;o.listenOnce(u.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case u.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case u.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),r(new I(T.DEADLINE_EXCEEDED,"Request time out"));break;case u.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(e)>=0?e:T.UNKNOWN}(t.status);r(new I(e,t.message))}else r(new I(T.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new I(T.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(s);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const s=[this.uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=u.createWebChannelTransport(),r=u.getStatEventTarget(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new u.FetchXmlHttpFactory({})),this.lo(o.initMessageHeaders,e,n),a.isMobileCordova()||a.isReactNative()||a.isElectron()||a.isIE()||a.isUWP()||a.isBrowserExtension()||(o.httpHeadersOverwriteParam="$httpHeaders");const h=s.join("");p("Connection","Creating WebChannel: "+h,o);const c=i.createWebChannel(h,o);let l=!1,d=!1;const f=new Bs({Jr:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),c.open(),l=!0),p("Connection","WebChannel sending:",t),c.send(t))},Yr:()=>c.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(c,u.WebChannel.EventType.OPEN,(()=>{d||p("Connection","WebChannel transport opened.")})),g(c,u.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.ro())})),g(c,u.WebChannel.EventType.ERROR,(t=>{d||(d=!0,m("Connection","WebChannel transport errored:",t),f.ro(new I(T.UNAVAILABLE,"The operation could not be completed")))})),g(c,u.WebChannel.EventType.MESSAGE,(t=>{var e;if(!d){const n=t.data[0];w(!!n);const s=n,i=s.error||(null===(e=s[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=We[t];if(void 0!==e)return Ye(e)}(t),n=i.message;void 0===e&&(e=T.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.ro(new I(e,n)),c.close()}else p("Connection","WebChannel received:",n),f.oo(n)}})),g(r,u.Event.STAT_EVENT,(t=>{t.stat===u.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===u.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.io()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ks(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){return new Tn(t,!0)}class $s{reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),s=Math.max(0,e-n);s>0&&p("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,s,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}constructor(t,e,n=1e3,s=1.5,i=6e4){this.Yn=t,this.timerId=e,this.mo=n,this.yo=s,this.po=i,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{ko(){return 1===this.state||5===this.state||this.Mo()}Mo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&null===this.Co&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,(()=>this.Bo())))}Lo(t){this.Uo(),this.stream.send(t)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(t,e){this.Uo(),this.qo(),this.No.cancel(),this.Do++,4!==t?this.No.reset():e&&e.code===T.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):e&&e.code===T.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Ko(),this.stream.close(),this.stream=null),this.state=t,await this.listener.eo(e)}Ko(){}auth(){this.state=1;const t=this.Go(this.Do),e=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Do===e&&this.Qo(t,n)}),(e=>{t((()=>{const t=new I(T.UNKNOWN,"Fetching auth token failed: "+e.message);return this.jo(t)}))}))}Qo(t,e){const n=this.Go(this.Do);this.stream=this.Wo(t,e),this.stream.Xr((()=>{n((()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,(()=>(this.Mo()&&(this.state=3),Promise.resolve()))),this.listener.Xr())))})),this.stream.eo((t=>{n((()=>this.jo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.No.Ro((async()=>{this.state=0,this.start()}))}jo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Go(t){return e=>{this.Yn.enqueueAndForget((()=>this.Do===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,s,i,r,o,a){this.Yn=t,this.Vo=n,this.vo=s,this.So=i,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new $s(t,e)}}class Hs extends zs{Wo(t,e){return this.So.wo("Listen",t,e)}onMessage(t){this.No.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(s=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===s?1:"REMOVE"===s?2:"CURRENT"===s?3:"RESET"===s?4:v(),r=e.targetChange.targetIds||[],o=function(t,e){return t.N?(w(void 0===e||"string"==typeof e),H.fromBase64String(e||"")):(w(void 0===e||e instanceof Uint8Array),H.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(t){const e=void 0===t.code?T.UNKNOWN:Ye(t.code);return new I(e,t.message||"")}(a);n=new pn(i,r,o,u||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Dn(t,s.document.name),r=An(s.document.updateTime),o=new bt({mapValue:{fields:s.document.fields}}),a=At.newFoundDocument(i,r,o),u=s.targetIds||[],h=s.removedTargetIds||[];n=new dn(u,h,a.key,a)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Dn(t,s.document),r=s.readTime?An(s.readTime):O.min(),o=At.newNoDocument(i,r),a=s.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Dn(t,s.document),r=s.removedTargetIds||[];n=new dn([],r,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const s=t.count||0,i=new He(s),r=t.targetId;n=new fn(r,i)}}var s;return n}(this.M,t),n=function(t){if(!("targetChange"in t))return O.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?O.min():e.readTime?An(e.readTime):O.min()}(t);return this.listener.zo(e,n)}Ho(t){const e={};e.database=Ln(this.M),e.addTarget=function(t,e){let n;const s=e.target;return n=qt(s)?{documents:Pn(t,s)}:{query:On(t,s)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=bn(t,e.resumeToken):e.snapshotVersion.compareTo(O.min())>0&&(n.readTime=In(t,e.snapshotVersion.toTimestamp())),n}(this.M,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.M,t);n&&(e.labels=n),this.Lo(e)}Jo(t){const e={};e.database=Ln(this.M),e.removeTarget=t,this.Lo(e)}constructor(t,e,n,s,i,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,r),this.M=i}}class Ws extends zs{get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(t,e){return this.So.wo("Write",t,e)}onMessage(t){if(w(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Yo){this.No.reset();const s=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(w(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?An(t.updateTime):An(e);return n.isEqual(O.min())&&(n=An(e)),new Re(n,t.transformResults||[])}(t,n)))):[]),i=An(t.commitTime);return this.listener.tu(i,s)}var e,n;return w(!t.writeResults||0===t.writeResults.length),this.Yo=!0,this.listener.eu()}nu(){const t={};t.database=Ln(this.M),this.Lo(t)}Zo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Vn(this.M,t)))};this.Lo(e)}constructor(t,e,n,s,i,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,r),this.M=i,this.Yo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends class{}{iu(){if(this.su)throw new I(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.So.co(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(T.UNKNOWN,t.toString())}))}_o(t,e,n){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.So._o(t,e,n,s,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new I(T.UNKNOWN,t.toString())}))}terminate(){this.su=!0}constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.So=n,this.M=s,this.su=!1}}class Qs{au(){0===this.ru&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}lu(t){"Online"===this.state?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.fu(),this.ru=0,"Online"===t&&(this.uu=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}hu(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(g(e),this.uu=!1):p("OnlineStateTracker",e)}fu(){null!==this.ou&&(this.ou.cancel(),this.ou=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=i,this.gu.Kr((t=>{n.enqueueAndForget((async()=>{oi(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=E(t);e.wu.add(4),await Zs(e),e.yu.set("Unknown"),e.wu.delete(4),await Js(e)}(this))}))})),this.yu=new Qs(n,s)}}async function Js(t){if(oi(t))for(const e of t.mu)await e(!0)}async function Zs(t){for(const e of t.mu)await e(!1)}function ti(t,e){const n=E(t);n._u.has(e.targetId)||(n._u.set(e.targetId,e),ri(n)?ii(n):Si(n).Mo()&&ni(n,e))}function ei(t,e){const n=E(t),s=Si(n);n._u.delete(e),s.Mo()&&si(n,e),0===n._u.size&&(s.Mo()?s.$o():oi(n)&&n.yu.set("Unknown"))}function ni(t,e){t.pu.Z(e.targetId),Si(t).Ho(e)}function si(t,e){t.pu.Z(e),Si(t).Jo(e)}function ii(t){t.pu=new mn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t._u.get(e)||null}),Si(t).start(),t.yu.au()}function ri(t){return oi(t)&&!Si(t).ko()&&t._u.size>0}function oi(t){return 0===E(t).wu.size}function ai(t){t.pu=void 0}async function ui(t){t._u.forEach(((e,n)=>{ni(t,e)}))}async function hi(t,e){ai(t),ri(t)?(t.yu.lu(e),ii(t)):t.yu.set("Unknown")}async function ci(t,e,n){if(t.yu.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const s of e.targetIds)t._u.has(s)&&(await t.remoteSyncer.rejectListen(s,n),t._u.delete(s),t.pu.removeTarget(s))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await li(t,n)}else if(e instanceof dn?t.pu.ut(e):e instanceof fn?t.pu._t(e):t.pu.ht(e),!n.isEqual(O.min()))try{const e=await vs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.pu.yt(e);return n.targetChanges.forEach(((n,s)=>{if(n.resumeToken.approximateByteSize()>0){const i=t._u.get(s);i&&t._u.set(s,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t._u.get(e);if(!n)return;t._u.set(e,n.withResumeToken(H.EMPTY_BYTE_STRING,n.snapshotVersion)),si(t,e);const s=new ns(n.target,e,1,n.sequenceNumber);ni(t,s)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await li(t,e)}}async function li(t,e,n){if(!Jn(e))throw e;t.wu.add(1),await Zs(t),t.yu.set("Offline"),n||(n=()=>vs(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.wu.delete(1),await Js(t)}))}function di(t,e){return e().catch((n=>li(t,n,e)))}async function fi(t){const e=E(t),n=Ai(e);let s=e.du.length>0?e.du[e.du.length-1].batchId:-1;for(;pi(e);)try{const t=await Es(e.localStore,s);if(null===t){0===e.du.length&&n.$o();break}s=t.batchId,gi(e,t)}catch(t){await li(e,t)}mi(e)&&yi(e)}function pi(t){return oi(t)&&t.du.length<10}function gi(t,e){t.du.push(e);const n=Ai(t);n.Mo()&&n.Xo&&n.Zo(e.mutations)}function mi(t){return oi(t)&&!Ai(t).ko()&&t.du.length>0}function yi(t){Ai(t).start()}async function vi(t){Ai(t).nu()}async function wi(t){const e=Ai(t);for(const n of t.du)e.Zo(n.mutations)}async function Ei(t,e,n){const s=t.du.shift(),i=ts.from(s,e,n);await di(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await fi(t)}async function Ti(t,e){e&&Ai(t).Xo&&await async function(t,e){if(Qe(n=e.code)&&n!==T.ABORTED){const n=t.du.shift();Ai(t).Fo(),await di(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fi(t)}var n}(t,e),mi(t)&&yi(t)}async function Ii(t,e){const n=E(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const s=oi(n);n.wu.add(3),await Zs(n),s&&n.yu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.wu.delete(3),await Js(n)}async function bi(t,e){const n=E(t);e?(n.wu.delete(2),await Js(n)):e||(n.wu.add(2),await Zs(n),n.yu.set("Unknown"))}function Si(t){return t.Iu||(t.Iu=function(t,e,n){const s=E(t);return s.iu(),new Hs(e,s.So,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{Xr:ui.bind(null,t),eo:hi.bind(null,t),zo:ci.bind(null,t)}),t.mu.push((async e=>{e?(t.Iu.Fo(),ri(t)?ii(t):t.yu.set("Unknown")):(await t.Iu.stop(),ai(t))}))),t.Iu}function Ai(t){return t.Tu||(t.Tu=function(t,e,n){const s=E(t);return s.iu(),new Ws(e,s.So,s.authCredentials,s.appCheckCredentials,s.M,n)}(t.datastore,t.asyncQueue,{Xr:vi.bind(null,t),eo:Ti.bind(null,t),eu:wi.bind(null,t),tu:Ei.bind(null,t)}),t.mu.push((async e=>{e?(t.Tu.Fo(),await fi(t)):(await t.Tu.stop(),t.du.length>0&&(p("RemoteStore",`Stopping write stream with ${t.du.length} pending writes`),t.du=[]))}))),t.Tu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ci{static createAndSchedule(t,e,n,s,i){const r=Date.now()+n,o=new Ci(t,e,r,s,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new I(T.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new b,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Ni(t,e){if(g("AsyncQueue",`${e}: ${t}`),Jn(t))return new I(T.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{static emptySet(t){return new _i(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _i))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,s=n.getNext().key;if(!t.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _i;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||ot.comparator(e.key,n.key):(t,e)=>ot.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new Rt(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{track(t){const e=t.doc.key,n=this.Eu.get(e);n?0!==t.type&&3===n.type?this.Eu=this.Eu.insert(e,t):3===t.type&&1!==n.type?this.Eu=this.Eu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Eu=this.Eu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Eu=this.Eu.remove(e):1===t.type&&2===n.type?this.Eu=this.Eu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Eu=this.Eu.insert(e,{type:2,doc:t.doc}):v():this.Eu=this.Eu.insert(e,t)}Au(){const t=[];return this.Eu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.Eu=new Rt(ot.comparator)}}class ki{static fromInitialDocuments(t,e,n,s){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new ki(t,e,_i.emptySet(e),i,n,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ce(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,s,i,r,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(){this.Ru=void 0,this.listeners=[]}}class Li{constructor(){this.queries=new Je((t=>le(t)),ce),this.onlineState="Unknown",this.bu=new Set}}async function xi(t,e){const n=E(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new Ri),i)try{r.Ru=await n.onListen(s)}catch(t){const n=Ni(t,`Initialization of query '${de(e.query)}' failed`);return void e.onError(n)}n.queries.set(s,r),r.listeners.push(e),e.Pu(n.onlineState),r.Ru&&e.Vu(r.Ru)&&Oi(n)}async function Mi(t,e){const n=E(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),i=0===r.listeners.length)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Vi(t,e){const n=E(t);let s=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Vu(t)&&(s=!0);i.Ru=t}}s&&Oi(n)}function Pi(t,e,n){const s=E(t),i=s.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);s.queries.delete(e)}function Oi(t){t.bu.forEach((t=>{t.next()}))}class Ui{Vu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new ki(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.Su?this.Cu(t)&&(this.vu.next(t),e=!0):this.xu(t,this.onlineState)&&(this.Nu(t),e=!0),this.Du=t,e}onError(t){this.vu.error(t)}Pu(t){this.onlineState=t;let e=!1;return this.Du&&!this.Su&&this.xu(this.Du,t)&&(this.Nu(this.Du),e=!0),e}xu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.ku&&n||t.docs.isEmpty()&&"Offline"!==e)}Cu(t){if(t.docChanges.length>0)return!0;const e=this.Du&&this.Du.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Nu(t){t=ki.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.Su=!0,this.vu.next(t)}constructor(t,e,n){this.query=t,this.vu=e,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fi{constructor(t){this.key=t}}class qi{constructor(t){this.key=t}}class Bi{get ju(){return this.Uu}Wu(t,e){const n=e?e.zu:new Di,s=e?e.Qu:this.Qu;let i=e?e.mutatedKeys:this.mutatedKeys,r=s,o=!1;const a="F"===this.query.limitType&&s.size===this.query.limit?s.last():null,u="L"===this.query.limitType&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal(((t,e)=>{const h=s.get(t),c=fe(this.query,e)?e:null,l=!!h&&this.mutatedKeys.has(h.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;h&&c?h.data.isEqual(c.data)?l!==d&&(n.track({type:3,doc:c}),f=!0):this.Hu(h,c)||(n.track({type:2,doc:c}),f=!0,(a&&this.Gu(c,a)>0||u&&this.Gu(c,u)<0)&&(o=!0)):!h&&c?(n.track({type:0,doc:c}),f=!0):h&&!c&&(n.track({type:1,doc:h}),f=!0,(a||u)&&(o=!0)),f&&(c?(r=r.add(c),i=d?i.add(t):i.delete(t)):(r=r.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,ii:o,mutatedKeys:i}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const s=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const i=t.zu.Au();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==i.length||a?{snapshot:new ki(this.query,t.Qu,s,i,t.mutatedKeys,0===o,a,!1),Xu:r}:{Xu:r}}Pu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Di,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(t){return!this.Uu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.Uu=this.Uu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Uu=this.Uu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=an(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new qi(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new Fi(n))})),e}ta(t){this.Uu=t._i,this.Ku=an();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ea(){return ki.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.qu)}constructor(t,e){this.query=t,this.Uu=e,this.qu=null,this.current=!1,this.Ku=an(),this.mutatedKeys=an(),this.Gu=ge(t),this.Qu=new _i(this.Gu)}}class ji{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ki{constructor(t){this.key=t,this.na=!1}}class Gi{get isPrimaryClient(){return!0===this.da}constructor(t,e,n,s,i,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=r,this.sa={},this.ia=new Je((t=>le(t)),ce),this.ra=new Map,this.oa=new Set,this.ua=new Rt(ot.comparator),this.aa=new Map,this.ca=new Ns,this.ha={},this.la=new Map,this.fa=hs.yn(),this.onlineState="Unknown",this.da=void 0}}async function $i(t,e){const n=hr(t);let s,i;const r=n.ia.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.ea();else{const t=await Ts(n.localStore,ue(e));n.isPrimaryClient&&ti(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);s=t.targetId,i=await zi(n,e,s,"current"===r)}return i}async function zi(t,e,n,s){t._a=(e,n,s)=>async function(t,e,n,s){let i=e.view.Wu(n);i.ii&&(i=await bs(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,i))));const r=s&&s.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,r);return sr(t,e.targetId,o.Xu),o.snapshot}(t,e,n,s);const i=await bs(t.localStore,e,!0),r=new Bi(e,i._i),o=r.Wu(i.documents),a=ln.createSynthesizedTargetChangeForCurrentChange(n,s&&"Offline"!==t.onlineState),u=r.applyChanges(o,t.isPrimaryClient,a);sr(t,n,u.Xu);const h=new ji(e,n,r);return t.ia.set(e,h),t.ra.has(n)?t.ra.get(n).push(e):t.ra.set(n,[e]),u.snapshot}async function Hi(t,e){const n=E(t),s=n.ia.get(e),i=n.ra.get(s.targetId);if(i.length>1)return n.ra.set(s.targetId,i.filter((t=>!ce(t,e)))),void n.ia.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Is(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),ei(n.remoteStore,s.targetId),er(n,s.targetId)})).catch(cs)):(er(n,s.targetId),await Is(n.localStore,s.targetId,!0))}async function Wi(t,e){const n=E(t);try{const t=await function(t,e){const n=E(t),s=e.snapshotVersion;let i=n.ui;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.hi.newChangeBuffer({trackRemovals:!0});i=n.ui;const o=[];e.targetChanges.forEach(((r,a)=>{const u=i.get(a);if(!u)return;o.push(n.fs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.fs.addMatchingKeys(t,r.addedDocuments,a))));let h=u.withSequenceNumber(t.currentSequenceNumber);var c,l,d;e.targetMismatches.has(a)?h=h.withResumeToken(H.EMPTY_BYTE_STRING,O.min()).withLastLimboFreeSnapshotVersion(O.min()):r.resumeToken.approximateByteSize()>0&&(h=h.withResumeToken(r.resumeToken,s)),i=i.insert(a,h),l=h,d=r,(0===(c=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-c.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.fs.updateTargetData(t,h))}));let a=tn();if(e.documentUpdates.forEach((s=>{e.resolvedLimboDocuments.has(s)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,s))})),o.push(ws(t,r,e.documentUpdates).next((t=>{a=t}))),!s.isEqual(O.min())){const e=n.fs.getLastRemoteSnapshotVersion(t).next((e=>n.fs.setTargetsMetadata(t,t.currentSequenceNumber,s)));o.push(e)}return Yn.waitFor(o).next((()=>r.apply(t))).next((()=>n.fi.Gs(t,a))).next((()=>a))})).then((t=>(n.ui=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const s=n.aa.get(e);s&&(w(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?s.na=!0:t.modifiedDocuments.size>0?w(s.na):t.removedDocuments.size>0&&(w(s.na),s.na=!1))})),await or(n,t,e)}catch(t){await cs(t)}}function Xi(t,e,n){const s=E(t);if(s.isPrimaryClient&&0===n||!s.isPrimaryClient&&1===n){const t=[];s.ia.forEach(((n,s)=>{const i=s.view.Pu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=E(t);n.onlineState=e;let s=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Pu(e)&&(s=!0)})),s&&Oi(n)}(s.eventManager,e),t.length&&s.sa.zo(t),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Qi(t,e,n){const s=E(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.aa.get(e),r=i&&i.key;if(r){let t=new Rt(ot.comparator);t=t.insert(r,At.newNoDocument(r,O.min()));const n=an().add(r),i=new cn(O.min(),new Map,new Mt(M),t,n);await Wi(s,i),s.ua=s.ua.remove(r),s.aa.delete(e),rr(s)}else await Is(s.localStore,e,!1).then((()=>er(s,e,n))).catch(cs)}async function Yi(t,e){const n=E(t),s=e.batch.batchId;try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const s=e.batch.keys(),i=n.hi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,s){const i=n.batch,r=i.keys();let o=Yn.resolve();return r.forEach((t=>{o=o.next((()=>s.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);w(null!==r),e.version.compareTo(r)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),s.addEntry(e)))}))})),o.next((()=>t.Bs.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,s)))}))}(n.localStore,e);tr(n,s,null),Zi(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await or(n,t)}catch(t){await cs(t)}}async function Ji(t,e,n){const s=E(t);try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let s;return n.Bs.lookupMutationBatch(t,e).next((e=>(w(null!==e),s=e.keys(),n.Bs.removeMutationBatch(t,e)))).next((()=>n.Bs.performConsistencyCheck(t))).next((()=>n.fi.Ks(t,s)))}))}(s.localStore,e);tr(s,e,n),Zi(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await or(s,t)}catch(t){await cs(t)}}function Zi(t,e){(t.la.get(e)||[]).forEach((t=>{t.resolve()})),t.la.delete(e)}function tr(t,e,n){const s=E(t);let i=s.ha[s.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),s.ha[s.currentUser.toKey()]=i}}function er(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ra.get(e))t.ia.delete(s),n&&t.sa.wa(s,n);t.ra.delete(e),t.isPrimaryClient&&t.ca.vi(e).forEach((e=>{t.ca.containsKey(e)||nr(t,e)}))}function nr(t,e){t.oa.delete(e.path.canonicalString());const n=t.ua.get(e);null!==n&&(ei(t.remoteStore,n),t.ua=t.ua.remove(e),t.aa.delete(n),rr(t))}function sr(t,e,n){for(const s of n)s instanceof Fi?(t.ca.addReference(s.key,e),ir(t,s)):s instanceof qi?(p("SyncEngine","Document no longer in limbo: "+s.key),t.ca.removeReference(s.key,e),t.ca.containsKey(s.key)||nr(t,s.key)):v()}function ir(t,e){const n=e.key,s=n.path.canonicalString();t.ua.get(n)||t.oa.has(s)||(p("SyncEngine","New document in limbo: "+n),t.oa.add(s),rr(t))}function rr(t){for(;t.oa.size>0&&t.ua.size<t.maxConcurrentLimboResolutions;){const e=t.oa.values().next().value;t.oa.delete(e);const n=new ot(j.fromString(e)),s=t.fa.next();t.aa.set(s,new Ki(n)),t.ua=t.ua.insert(n,s),ti(t.remoteStore,new ns(ue(se(n.path)),s,2,R.A))}}async function or(t,e,n){const s=E(t),i=[],r=[],o=[];s.ia.isEmpty()||(s.ia.forEach(((t,a)=>{o.push(s._a(a,e,n).then((t=>{if(t){s.isPrimaryClient&&s.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=fs.Ys(a.targetId,t);r.push(e)}})))})),await Promise.all(o),s.sa.zo(i),await async function(t,e){const n=E(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Yn.forEach(e,(e=>Yn.forEach(e.Hs,(s=>n.persistence.referenceDelegate.addReference(t,e.targetId,s))).next((()=>Yn.forEach(e.Js,(s=>n.persistence.referenceDelegate.removeReference(t,e.targetId,s)))))))))}catch(t){if(!Jn(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.ui.get(e),s=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(s);n.ui=n.ui.insert(e,i)}}}(s.localStore,r))}async function ar(t,e){const n=E(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await ys(n.localStore,e);n.currentUser=e,(s=n).la.forEach((t=>{t.forEach((t=>{t.reject(new I(T.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),s.la.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await or(n,t.di)}var s}function ur(t,e){const n=E(t),s=n.aa.get(e);if(s&&s.na)return an().add(s.key);{let t=an();const s=n.ra.get(e);if(!s)return t;for(const e of s){const s=n.ia.get(e);t=t.unionWith(s.view.ju)}return t}}function hr(t){const e=E(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Wi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ur.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Qi.bind(null,e),e.sa.zo=Vi.bind(null,e.eventManager),e.sa.wa=Pi.bind(null,e.eventManager),e}function cr(t){const e=E(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ji.bind(null,e),e}class lr{async initialize(t){this.M=Gs(t.databaseInfo.databaseId),this.sharedClientState=this.ga(t),this.persistence=this.ya(t),await this.persistence.start(),this.gcScheduler=this.pa(t),this.localStore=this.Ia(t)}pa(t){return null}Ia(t){return ms(this.persistence,new ps,t.initialUser,this.M)}ya(t){return new xs(Vs.Yi,this.M)}ga(t){return new Os}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class dr{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ar.bind(null,this.syncEngine),await bi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Li}createDatastore(t){const e=Gs(t.databaseInfo.databaseId),n=(s=t.databaseInfo,new js(s));var s,i,r;return i=t.authCredentials,r=t.appCheckCredentials,new Xs(i,r,n,e)}createRemoteStore(t){var e,n,s,i,r;return e=this.localStore,n=this.datastore,s=t.asyncQueue,i=t=>Xi(this.syncEngine,t,0),r=Fs.vt()?new Fs:new Us,new Ys(e,n,s,i,r)}createSyncEngine(t,e){return function(t,e,n,s,i,r,o){const a=new Gi(t,e,n,s,i,r);return o&&(a.da=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=E(t);p("RemoteStore","RemoteStore shutting down."),e.wu.add(5),await Zs(e),e.gu.shutdown(),e.yu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{next(t){this.observer.next&&this.Ea(this.observer.next,t)}error(t){this.observer.error?this.Ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Aa(){this.muted=!0}Ea(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new b;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Ni(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=c.UNAUTHENTICATED,this.clientId=x.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function gr(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener((async t=>{s.isEqual(t)||(await ys(e.localStore,t),s=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function mr(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yr(t);p("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener((t=>Ii(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ii(e.remoteStore,n))),t.onlineComponents=e}async function yr(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await gr(t,new lr)),t.offlineComponents}async function vr(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await mr(t,new dr)),t.onlineComponents}function wr(t){return vr(t).then((t=>t.syncEngine))}async function Er(t){const e=await vr(t),n=e.eventManager;return n.onListen=$i.bind(null,e.syncEngine),n.onUnlisten=Hi.bind(null,e.syncEngine),n}function Tr(t,e,n={}){const s=new b;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,s,i){const r=new fr({next:n=>{e.enqueueAndForget((()=>Mi(t,o))),n.fromCache&&"server"===s.source?i.reject(new I(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ui(n,r,{includeMetadataChanges:!0,ku:!0});return xi(t,o)}(await Er(t),t.asyncQueue,e,n,s))),s.promise}const Ir=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e,n){if(!n)throw new I(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Sr(t){if(!ot.isDocumentKey(t))throw new I(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ar(t){if(ot.isDocumentKey(t))throw new I(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Cr(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Nr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new I(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cr(t);throw new I(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _r{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new I(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new I(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,s){if(!0===e&&!0===s)throw new I(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{get app(){if(!this._app)throw new I(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new I(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _r(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return w(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new _(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new I(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ir.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ir.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _r({}),this._settingsFrozen=!1,t instanceof nt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new I(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new nt(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lr(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kr(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Rr{withConverter(t){return new Rr(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Lr extends Rr{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kr(this.firestore,null,new ot(t))}withConverter(t){return new Lr(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,se(n)),this._path=n,this.type="collection"}}function xr(t,e,...n){if(t=a.getModularInstance(t),br("collection","path",e),t instanceof Dr){const s=j.fromString(e,...n);return Ar(s),new Lr(t,null,s)}{if(!(t instanceof kr||t instanceof Lr))throw new I(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return Ar(s),new Lr(t.firestore,null,s)}}function Mr(t,e,...n){if(t=a.getModularInstance(t),1===arguments.length&&(e=x.R()),br("doc","path",e),t instanceof Dr){const s=j.fromString(e,...n);return Sr(s),new kr(t,null,new ot(s))}{if(!(t instanceof kr||t instanceof Lr))throw new I(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(j.fromString(e,...n));return Sr(s),new kr(t.firestore,t instanceof Lr?t.converter:null,new ot(s))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vr{get isShuttingDown(){return this.Ba}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ja(),this.Wa(t)}enterRestrictedMode(t){if(!this.Ba){this.Ba=!0,this.Ka=t||!1;const e=Ks();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Qa)}}enqueue(t){if(this.ja(),this.Ba)return new Promise((()=>{}));const e=new b;return this.Wa((()=>this.Ba&&this.Ka?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.$a.push(t),this.za())))}async za(){if(0!==this.$a.length){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(t){if(!Jn(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.$a.length>0&&this.No.Ro((()=>this.za()))}}Wa(t){const e=this.Fa.then((()=>(this.qa=!0,t().catch((t=>{this.Ua=t,this.qa=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.qa=!1,t))))));return this.Fa=e,e}enqueueAfterDelay(t,e,n){this.ja(),this.Ga.indexOf(t)>-1&&(e=0);const s=Ci.createAndSchedule(this,t,e,n,(t=>this.Ha(t)));return this.La.push(s),s}ja(){this.Ua&&v()}verifyOperationInProgress(){}async Ja(){let t;do{t=this.Fa,await t}while(t!==this.Fa)}Ya(t){for(const e of this.La)if(e.timerId===t)return!0;return!1}Xa(t){return this.Ja().then((()=>{this.La.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.La)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Ja()}))}Za(t){this.Ga.push(t)}Ha(t){const e=this.La.indexOf(t);this.La.splice(e,1)}constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new $s(this,"async_queue_retry"),this.Qa=()=>{const t=Ks();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.No.Po()};const t=Ks();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Qa)}}class Pr extends Dr{_terminate(){return this._firestoreClient||Fr(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Vr,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Or(t=s.getApp()){return s._getProvider(t,"firestore").getImmediate()}function Ur(t){return t._firestoreClient||Fr(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Fr(t){var e;const n=t._freezeSettings(),s=(i=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new et(i,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,r,o,a;t._firestoreClient=new pr(t._authCredentials,t._appCheckCredentials,t._queue,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new I(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new G(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Br{static fromBase64String(t){try{return new Br(H.fromBase64String(t))}catch(t){throw new I(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Br(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr=/^__.*__$/;class $r{toMutation(t,e){return null!==this.fieldMask?new Be(t,this.data,this.fieldMask,e,this.fieldTransforms):new qe(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function zr(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Hr{get path(){return this.settings.path}get ec(){return this.settings.ec}nc(t){return new Hr(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.nc({path:n,ic:!1});return s.rc(t),s}oc(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),s=this.nc({path:n,ic:!1});return s.tc(),s}uc(t){return this.nc({path:void 0,ic:!0})}ac(t){return ro(t,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}tc(){if(this.path)for(let t=0;t<this.path.length;t++)this.rc(this.path.get(t))}rc(t){if(0===t.length)throw this.ac("Document fields must not be empty");if(zr(this.ec)&&Gr.test(t))throw this.ac('Document fields cannot begin and end with "__"')}constructor(t,e,n,s,i,r){this.settings=t,this.databaseId=e,this.M=n,this.ignoreUndefinedProperties=s,void 0===i&&this.tc(),this.fieldTransforms=i||[],this.fieldMask=r||[]}}class Wr{lc(t,e,n,s=!1){return new Hr({ec:t,methodName:e,hc:n,path:G.emptyPath(),ic:!1,cc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.M=n||Gs(t)}}function Xr(t){const e=t._freezeSettings(),n=Gs(t._databaseId);return new Wr(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Qr(t,e,n,s,i,r={}){const o=t.lc(r.merge||r.mergeFields?2:0,e,n,i);eo("Data must be an object, but it was:",o,s);const a=Zr(s,o);let u,h;if(r.merge)u=new $(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const s of r.mergeFields){const i=no(e,s,n);if(!o.contains(i))throw new I(T.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);oo(t,i)||t.push(i)}u=new $(t),h=o.fieldTransforms.filter((t=>u.covers(t.field)))}else u=null,h=o.fieldTransforms;return new $r(new bt(a),u,h)}function Yr(t,e,n,s=!1){return Jr(n,t.lc(s?4:3,e))}function Jr(t,e){if(to(t=a.getModularInstance(t)))return eo("Unsupported field value:",e,t),Zr(t,e);if(t instanceof jr)return function(t,e){if(!zr(e.ec))throw e.ac(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ac(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ic&&4!==e.ec)throw e.ac("Nested arrays are not supported");return function(t,e){const n=[];let s=0;for(const i of t){let t=Jr(i,e.uc(s));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),s++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=a.getModularInstance(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return we(e.M,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:In(e.M,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:In(e.M,n)}}if(t instanceof Kr)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Br)return{bytesValue:bn(e.M,t._byteString)};if(t instanceof kr){const n=e.databaseId,s=t.firestore._databaseId;if(!s.isEqual(n))throw e.ac(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cn(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ac(`Unsupported field value: ${Cr(t)}`)}(t,e)}function Zr(t,e){const n={};return q(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):F(t,((t,s)=>{const i=Jr(s,e.sc(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function to(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof Kr||t instanceof Br||t instanceof kr||t instanceof jr)}function eo(t,e,n){if(!to(n)||("object"!=typeof(s=n)||null===s||Object.getPrototypeOf(s)!==Object.prototype&&null!==Object.getPrototypeOf(s))){const s=Cr(n);throw"an object"===s?e.ac(t+" a custom object"):e.ac(t+" "+s)}var s}function no(t,e,n){if((e=a.getModularInstance(e))instanceof qr)return e._internalPath;if("string"==typeof e)return io(t,e);throw ro("Field path arguments must be of type string or ",t,!1,void 0,n)}const so=new RegExp("[~\\*/\\[\\]]");function io(t,e,n){if(e.search(so)>=0)throw ro(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qr(...e.split("."))._internalPath}catch(s){throw ro(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ro(t,e,n,s,i){const r=s&&!s.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new I(T.INVALID_ARGUMENT,a+t+u)}function oo(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{get id(){return this._key.path.lastSegment()}get ref(){return new kr(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new uo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ho("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}}class uo extends ao{data(){return super.data()}}function ho(t,e){return"string"==typeof e?io(t,e):e instanceof qr?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class lo extends ao{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ho("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,s,i,r){super(t,e,n,s,r),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class fo extends lo{data(t={}){return super.data(t)}}class po{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new fo(this._firestore,this._userDataWriter,n.key,n,new co(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new fo(t._firestore,t._userDataWriter,n.doc.key,n.doc,new co(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const s=new fo(t._firestore,t._userDataWriter,e.doc.key,e.doc,new co(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,r=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:go(e.type),doc:s,oldIndex:i,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=n}}function go(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mo(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new I(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yo{}function vo(t,...e){for(const n of e)t=n._apply(t);return t}class wo extends yo{_apply(t){const e=Xr(t.firestore),n=function(t,e,n,s,i,r,o){let a;if(i.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new I(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){So(o,r);const e=[];for(const n of o)e.push(bo(s,t,n));a={arrayValue:{values:e}}}else a=bo(s,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||So(o,r),a=Yr(n,"where",o,"in"===r||"not-in"===r);const u=Bt.create(i,r,a);return function(t,e){if(e.S()){const n=re(t);if(null!==n&&!n.isEqual(e.field))throw new I(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const s=ie(t);null!==s&&Ao(t,e.field,s)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new I(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new I(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,u),u}(t._query,0,e,t.firestore._databaseId,this._c,this.wc,this.mc);return new Rr(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new ee(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}constructor(t,e,n){super(),this._c=t,this.wc=e,this.mc=n,this.type="where"}}function Eo(t,e,n){const s=e,i=ho("where",t);return new wo(i,s,n)}class To extends yo{_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new I(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new I(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const s=new Yt(e,n);return function(t,e){if(null===ie(t)){const n=re(t);null!==n&&Ao(t,n,e.field)}}(t,s),s}(t._query,this._c,this.gc);return new Rr(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new ee(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}constructor(t,e){super(),this._c=t,this.gc=e,this.type="orderBy"}}function Io(t,e="asc"){const n=e,s=ho("orderBy",t);return new To(s,n)}function bo(t,e,n){if("string"==typeof(n=a.getModularInstance(n))){if(""===n)throw new I(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oe(e)&&-1!==n.indexOf("/"))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(j.fromString(n));if(!ot.isDocumentKey(s))throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return gt(t,new ot(s))}if(n instanceof kr)return gt(t,n._key);throw new I(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cr(n)}.`)}function So(t,e){if(!Array.isArray(t)||0===t.length)throw new I(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new I(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ao(t,e,n){if(!n.isEqual(e))throw new I(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Co{convertValue(t,e="none"){switch(ut(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Q(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Y(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return F(t.fields,((t,s)=>{n[t]=this.convertValue(s,e)})),n}convertGeoPoint(t){return new Kr(Q(t.latitude),Q(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Z(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(tt(t));default:return null}}convertTimestamp(t){const e=X(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=j.fromString(t);w(zn(n));const s=new nt(n.get(1),n.get(3)),i=new ot(n.popFirst(5));return s.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}class _o extends Co{convertBytes(t){return new Br(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new kr(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function Do(t){t=Nr(t,Rr);const e=Nr(t.firestore,Pr),n=Ur(e),s=new _o(e);return mo(t._query),Tr(n,t._query).then((n=>new po(e,s,t,n)))}function ko(t){return Lo(Nr(t.firestore,Pr),[new $e(t._key,Le.none())])}function Ro(t,e){const n=Nr(t.firestore,Pr),s=Mr(t),i=No(t.converter,e);return Lo(n,[Qr(Xr(t.firestore),"addDoc",s._key,i,null!==t.converter,{}).toMutation(s._key,Le.exists(!1))]).then((()=>s))}function Lo(t,e){return function(t,e){const n=new b;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const s=cr(t);try{const t=await function(t,e){const n=E(t),s=P.now(),i=e.reduce(((t,e)=>t.add(e.key)),an());let r;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>n.fi.Ks(t,i).next((i=>{r=i;const o=[];for(const t of e){const e=Oe(t,r.get(t.key));null!=e&&o.push(new Be(t.key,e,St(e.value.mapValue),Le.exists(!0)))}return n.Bs.addMutationBatch(t,s,o,e)})))).then((t=>(t.applyToLocalDocumentSet(r),{batchId:t.batchId,changes:r})))}(s.localStore,e);s.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let s=t.ha[t.currentUser.toKey()];s||(s=new Rt(M)),s=s.insert(e,n),t.ha[t.currentUser.toKey()]=s}(s,t.batchId,n),await or(s,t.changes),await fi(s.remoteStore)}catch(t){const e=Ni(t,"Failed to persist write");n.reject(e)}}(await wr(t),e,n))),n.promise}(Ur(t),e)}!function(t,e=!0){var n;n=s.SDK_VERSION,l=n,s._registerComponent(new r.Component("firestore",((t,{options:n})=>{const s=t.getProvider("app").getImmediate(),i=new Pr(s,new C(t.getProvider("auth-internal")),new k(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),s.registerVersion(h,"3.4.9",t),s.registerVersion(h,"3.4.9","esm2017")}()})),i.register("lW9Fu",(function(n,s){t(n.exports,"createWebChannelTransport",(function(){return as})),t(n.exports,"getStatEventTarget",(function(){return us})),t(n.exports,"ErrorCode",(function(){return hs})),t(n.exports,"EventType",(function(){return cs})),t(n.exports,"Event",(function(){return ls})),t(n.exports,"Stat",(function(){return ds})),t(n.exports,"FetchXmlHttpFactory",(function(){return fs})),t(n.exports,"WebChannel",(function(){return ps})),t(n.exports,"XhrIo",(function(){return gs}));var i,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},o={},a=a||{},u=r||self;function h(){}function c(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,s),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,s){for(var i=Array(arguments.length-2),r=2;r<arguments.length;r++)i[r-2]=arguments[r];return e.prototype[n].apply(t,i)}}function w(){this.s=this.s,this.o=this.o}var E={};w.prototype.s=!1,w.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}(this);delete E[t]}},w.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const T=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const s=t.length,i="string"==typeof t?t.split(""):t;for(let r=0;r<s;r++)r in i&&e.call(n,i[r],r,t)};function b(t){return Array.prototype.concat.apply([],arguments)}function S(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function A(t){return/^[\s\xa0]*$/.test(t)}var C,N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function _(t,e){return-1!=t.indexOf(e)}function D(t,e){return t<e?-1:t>e?1:0}t:{var k=u.navigator;if(k){var R=k.userAgent;if(R){C=R;break t}}C=""}function L(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function x(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(t,e){let n,s;for(let e=1;e<arguments.length;e++){for(n in s=arguments[e],s)t[n]=s[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function P(t){return P[" "](t),t}P[" "]=h;var O,U,F=_(C,"Opera"),q=_(C,"Trident")||_(C,"MSIE"),B=_(C,"Edge"),j=B||q,K=_(C,"Gecko")&&!(_(C.toLowerCase(),"webkit")&&!_(C,"Edge"))&&!(_(C,"Trident")||_(C,"MSIE"))&&!_(C,"Edge"),G=_(C.toLowerCase(),"webkit")&&!_(C,"Edge");function $(){var t=u.document;return t?t.documentMode:void 0}t:{var z="",H=(U=C,K?/rv:([^\);]+)(\)|;)/.exec(U):B?/Edge\/([\d\.]+)/.exec(U):q?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(U):G?/WebKit\/(\S+)/.exec(U):F?/(?:Version)[ \/]?(\S+)/.exec(U):void 0);if(H&&(z=H?H[1]:""),q){var W=$();if(null!=W&&W>parseFloat(z)){O=String(W);break t}}O=z}var X,Q={};function Y(){return function(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=N(String(O)).split("."),n=N("9").split("."),s=Math.max(e.length,n.length);for(let o=0;0==t&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==i[0].length&&0==r[0].length)break;t=D(0==i[1].length?0:parseInt(i[1],10),0==r[1].length?0:parseInt(r[1],10))||D(0==i[2].length,0==r[2].length)||D(i[2],r[2]),i=i[3],r=r[3]}while(0==t)}return 0<=t}))}if(u.document&&q){var J=$();X=J||(parseInt(O,10)||void 0)}else X=void 0;var Z=X,tt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{u.addEventListener("test",h,e),u.removeEventListener("test",h,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function nt(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(K){t:{try{P(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=void 0!==s.clientX?s.clientX:s.pageX,this.clientY=void 0!==s.clientY?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(nt,et);var st={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),rt=0;function ot(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ia=i,this.key=++rt,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ut(t){this.src=t,this.g={},this.h=0}function ht(t,e){var n=e.type;if(n in t.g){var s,i=t.g[n],r=T(i,e);(s=0<=r)&&Array.prototype.splice.call(i,r,1),s&&(at(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function ct(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==s)return i}return-1}ut.prototype.add=function(t,e,n,s,i){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=ct(t,e,s,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ot(e,this.src,r,!!s,i)).fa=n,t.push(e)),e};var lt="closure_lm_"+(1e6*Math.random()|0),dt={};function ft(t,e,n,s,i){if(s&&s.once)return gt(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ft(t,e[r],n,s,i);return null}return n=It(n),t&&t[it]?t.N(e,n,l(s)?!!s.capture:!!s,i):pt(t,e,n,!1,s,i)}function pt(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=Et(t);if(a||(t[lt]=a=new ut(t)),(n=a.add(e,n,s,o,r)).proxy)return n;if(s=function(){function t(n){return e.call(t.src,t.listener,n)}var e=wt;return t}(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)tt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(vt(e.toString()),s);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(s)}return n}function gt(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)gt(t,e[r],n,s,i);return null}return n=It(n),t&&t[it]?t.O(e,n,l(s)?!!s.capture:!!s,i):pt(t,e,n,!0,s,i)}function mt(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)mt(t,e[r],n,s,i);else s=l(s)?!!s.capture:!!s,n=It(n),t&&t[it]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=ct(r=t.g[e],n,s,i))&&(at(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=ct(e,n,s,i)),(n=-1<t?e[t]:null)&&yt(n))}function yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[it])ht(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(vt(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=Et(e))?(ht(n,t),0==n.h&&(n.src=null,e[lt]=null)):at(t)}}}function vt(t){return t in dt?dt[t]:dt[t]="on"+t}function wt(t,e){if(t.ca)t=!0;else{e=new nt(e,this);var n=t.listener,s=t.ia||t.src;t.fa&&yt(t),t=n.call(s,e)}return t}function Et(t){return(t=t[lt])instanceof ut?t:null}var Tt="__closure_events_fn_"+(1e9*Math.random()>>>0);function It(t){return"function"==typeof t?t:(t[Tt]||(t[Tt]=function(e){return t.handleEvent(e)}),t[Tt])}function bt(){w.call(this),this.i=new ut(this),this.P=this,this.I=null}function St(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;V(e=new et(s,t),i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=At(o,s,!0,e)&&i}if(i=At(o=e.g=t,s,!0,e)&&i,i=At(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)i=At(o=e.g=n[r],s,!1,e)&&i}function At(t,e,n,s){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&ht(t.i,o),i=!1!==a.call(u,s)&&i}}return i&&!s.defaultPrevented}v(bt,w),bt.prototype[it]=!0,bt.prototype.removeEventListener=function(t,e,n,s){mt(this,t,e,n,s)},bt.prototype.M=function(){if(bt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)at(n[s]);delete e.g[t],e.h--}}this.I=null},bt.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)},bt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};var Ct=u.JSON.stringify;function Nt(){var t=Mt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var _t,Dt=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new kt),(t=>t.reset()));class kt{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Rt(t){u.setTimeout((()=>{throw t}),0)}function Lt(t,e){_t||function(){var t=u.Promise.resolve(void 0);_t=function(){t.then(Vt)}}(),xt||(_t(),xt=!0),Mt.add(t,e)}var xt=!1,Mt=new class{add(t,e){const n=Dt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Vt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(t){Rt(t)}var e=Dt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xt=!1}function Pt(t,e){bt.call(this),this.h=t||1,this.g=e||u,this.j=m(this.kb,this),this.l=Date.now()}function Ot(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ut(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:u.setTimeout(t,e||0)}function Ft(t){t.g=Ut((()=>{t.g=null,t.i&&(t.i=!1,Ft(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Pt,bt),(i=Pt.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),St(this,"tick"),this.da&&(Ot(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Pt.Z.M.call(this),Ot(this),delete this.g};class qt extends w{l(t){this.h=arguments,this.g?this.i=!0:Ft(this)}M(){super.M(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Bt(t){w.call(this),this.h=t,this.g={}}v(Bt,w);var jt=[];function Kt(t,e,n,s){Array.isArray(n)||(n&&(jt[0]=n.toString()),n=jt);for(var i=0;i<n.length;i++){var r=ft(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Gt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function $t(){this.g=!0}function zt(t,e,n,s){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<i.length;o++)i[o]=""}}}return Ct(n)}catch(t){return e}}(t,n)+(s?" "+s:"")}))}Bt.prototype.M=function(){Bt.Z.M.call(this),Gt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$t.prototype.Aa=function(){this.g=!1},$t.prototype.info=function(){};var Ht={},Wt=null;function Xt(){return Wt=Wt||new bt}function Qt(t){et.call(this,Ht.Ma,t)}function Yt(t){const e=Xt();St(e,new Qt(e,t))}function Jt(t,e){et.call(this,Ht.STAT_EVENT,t),this.stat=e}function Zt(t){const e=Xt();St(e,new Jt(e,t))}function te(t,e){et.call(this,Ht.Na,t),this.size=e}function ee(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return u.setTimeout((function(){t()}),e)}Ht.Ma="serverreachability",v(Qt,et),Ht.STAT_EVENT="statevent",v(Jt,et),Ht.Na="timingevent",v(te,et);var ne={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},se={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ie(){}function re(t){return t.h||(t.h=t.i())}function oe(){}ie.prototype.h=null;var ae,ue={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function he(){et.call(this,"d")}function ce(){et.call(this,"c")}function le(){}function de(t,e,n,s){this.l=t,this.j=e,this.m=n,this.X=s||1,this.V=new Bt(this),this.P=pe,t=j?125:void 0,this.W=new Pt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}v(he,et),v(ce,et),v(le,ie),le.prototype.g=function(){return new XMLHttpRequest},le.prototype.i=function(){return{}},ae=new le;var pe=45e3,ge={},me={};function ye(t,e,n){t.K=1,t.v=qe(Me(e)),t.s=n,t.U=!0,ve(t,null)}function ve(t,e){t.F=Date.now(),Ie(t),t.A=Me(t.v);var n=t.A,s=t.X;Array.isArray(s)||(s=[String(s)]),Ze(n.h,"t",s),t.C=0,n=t.l.H,t.h=new fe,t.g=ts(t.l,n?e:null,!t.s),0<t.O&&(t.L=new qt(m(t.Ia,t,t.g),t.O)),Kt(t.V,t.g,"readystatechange",t.gb),e=t.H?x(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Yt(1),function(t,e,n,s,i,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),u=0;u<a.length;u++){var h=a[u].split("=");if(1<h.length){var c=h[0];h=h[1];var l=c.split("_");o=2<=l.length&&"type"==l[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function we(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ee(t,e,n){let s,i=!0;for(;!t.I&&t.C<n.length;){if(s=Te(t,n),s==me){4==e&&(t.o=4,Zt(14),i=!1),zt(t.j,t.m,null,"[Incomplete Response]");break}if(s==ge){t.o=4,Zt(15),zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}zt(t.j,t.m,s,null),Ne(t,s)}we(t)&&s!=me&&s!=ge&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),zn(e),e.L=!0,Zt(11))):(zt(t.j,t.m,n,"[Invalid Chunked Response]"),Ce(t),Ae(t))}function Te(t,e){var n=t.C,s=e.indexOf("\n",n);return-1==s?me:(n=Number(e.substring(n,s)),isNaN(n)?ge:(s+=1)+n>e.length?me:(e=e.substr(s,n),t.C=s+n,e))}function Ie(t){t.Y=Date.now()+t.P,be(t,t.P)}function be(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ee(m(t.eb,t),e)}function Se(t){t.B&&(u.clearTimeout(t.B),t.B=null)}function Ae(t){0==t.l.G||t.I||Xn(t.l,t)}function Ce(t){Se(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Ot(t.W),Gt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ne(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||on(n.i,t)))if(n.I=t.N,!t.J&&on(n.i,t)&&3==n.G){try{var s=n.Ca.g.parse(e)}catch(t){s=null}if(Array.isArray(s)&&3==s.length){var i=s;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Wn(n),On(n)}$n(n),Zt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ee(m(n.ab,n),6e3));if(1>=rn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Yn(n,11)}else if((t.J||n.g==t)&&Wn(n),!A(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=h[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(s=1.5*c,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=s.i;!r.g&&(_(t,"spdy")||_(t,"quic")||_(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(an(r,r.h),r.h=null))}if(s.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(s.sa=t,Fe(s.F,s.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((s=n).oa=Zn(s,s.H?s.la:null,s.W),o.J){un(s.i,o);var a=o,u=s.K;u&&a.setTimeout(u),a.B&&(Se(a),Ie(a)),s.g=o}else Gn(s);0<n.l.length&&qn(n)}else"stop"!=h[0]&&"close"!=h[0]||Yn(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Yn(n,7):Pn(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}Yt(4)}catch(t){}}function _e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"==typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(c(t)||"string"==typeof t){n=[];for(var s=t.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,t)n[s++]=i;s=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}for(s in e=[],n=0,t)e[n++]=t[s];return e}(t),i=s.length;for(var r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}}function De(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(t)if(t instanceof De)for(n=t.T(),s=0;s<n.length;s++)this.set(n[s],t.get(n[s]));else for(s in t)this.set(s,t[s])}function ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var s=t.g[e];Re(t.h,s)&&(t.g[n++]=s),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Re(i,s=t.g[e])||(t.g[n++]=s,i[s]=1),e++;t.g.length=n}}function Re(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=de.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Rn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const l=Rn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ga()||Ln(this.g)))){this.I||4!=l||7==e||Yt(8==e||0>=d?3:2),Se(this);var n=this.g.ba();this.N=n;e:if(we(this)){var s=Ln(this.g);t="";var i=s.length,r=4==Rn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ce(this),Ae(this);var o="";break e}this.h.i=new u.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,s,i,r,o){t.info((function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!A(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,Zt(12),Ce(this),Ae(this);break t}zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ne(this,n)}this.U?(Ee(this,l,o),j&&this.i&&3==l&&(Kt(this.V,this.W,"tick",this.fb),this.W.start())):(zt(this.j,this.m,o,null),Ne(this,o)),4==l&&Ce(this),this.i&&!this.I&&(4==l?Xn(this.l,this):(this.i=!1,Ie(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),Ce(this),Ae(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=Rn(this.g),e=this.g.ga();this.C<e.length&&(Se(this),Ee(this,t,e),this.i&&4!=t&&Ie(this))}},i.cancel=function(){this.I=!0,Ce(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Yt(3),Zt(17)),Ce(this),this.o=2,Ae(this)):be(this,this.Y-t)},(i=De.prototype).R=function(){ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return ke(this),this.g.concat()},i.get=function(t,e){return Re(this.h,t)?this.h[t]:e},i.set=function(t,e){Re(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);t.call(e,r,i,this)}};var Le=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function xe(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof xe){this.g=void 0!==e?e:t.g,Ve(this,t.j),this.s=t.s,Pe(this,t.i),Oe(this,t.m),this.l=t.l,e=t.h;var n=new Xe;n.i=e.i,e.g&&(n.g=new De(e.g),n.h=e.h),Ue(this,n),this.o=t.o}else t&&(n=String(t).match(Le))?(this.g=!!e,Ve(this,n[1]||"",!0),this.s=Be(n[2]||""),Pe(this,n[3]||"",!0),Oe(this,n[4]),this.l=Be(n[5]||"",!0),Ue(this,n[6]||"",!0),this.o=Be(n[7]||"")):(this.g=!!e,this.h=new Xe(null,this.g))}function Me(t){return new xe(t)}function Ve(t,e,n){t.j=n?Be(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Pe(t,e,n){t.i=n?Be(e,!0):e}function Oe(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ue(t,e,n){e instanceof Xe?(t.h=e,function(t,e){e&&!t.j&&(Qe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ye(this,e),Ze(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=je(e,He)),t.h=new Xe(e,t.g))}function Fe(t,e,n){t.h.set(e,n)}function qe(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Be(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function je(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ke),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ke(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}xe.prototype.toString=function(){var t=[],e=this.j;e&&t.push(je(e,Ge,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(je(e,Ge,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(je(n,"/"==n.charAt(0)?ze:$e,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",je(n,We)),t.join("")};var Ge=/[#\/\?@]/g,$e=/[#\?:]/g,ze=/[#\?]/g,He=/[#\?@]/g,We=/#/g;function Xe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qe(t){t.g||(t.g=new De,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ye(t,e){Qe(t),e=tn(t,e),Re(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Re((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ke(t)))}function Je(t,e){return Qe(t),e=tn(t,e),Re(t.g.h,e)}function Ze(t,e,n){Ye(t,e),0<n.length&&(t.i=null,t.g.set(tn(t,e),S(n)),t.h+=n.length)}function tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Xe.prototype).add=function(t,e){Qe(this),this.i=null,t=tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Qe(this),this.g.forEach((function(n,s){I(n,(function(n){t.call(e,n,s,this)}),this)}),this)},i.T=function(){Qe(this);for(var t=this.g.R(),e=this.g.T(),n=[],s=0;s<e.length;s++)for(var i=t[s],r=0;r<i.length;r++)n.push(e[s]);return n},i.R=function(t){Qe(this);var e=[];if("string"==typeof t)Je(this,t)&&(e=b(e,this.g.get(tn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=b(e,t[n])}return e},i.set=function(t,e){return Qe(this),this.i=null,Je(this,t=tn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var s=e[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;""!==s[r]&&(o+="="+encodeURIComponent(String(s[r]))),t.push(o)}}return this.i=t.join("&")};function en(t){this.l=t||nn,u.PerformanceNavigationTiming?t=0<(t=u.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(u.g&&u.g.Ea&&u.g.Ea()&&u.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function sn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function rn(t){return t.h?1:t.g?t.g.size:0}function on(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function an(t,e){t.g?t.g.add(e):t.h=e}function un(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function hn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return S(t.i)}function cn(){}function ln(){this.g=new cn}function dn(t,e,n){const s=n||"";try{_e(t,(function(t,n){let i=t;l(t)&&(i=Ct(t)),e.push(s+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(s+"type="+encodeURIComponent("_badmap")),t}}function fn(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function gn(t,e){bt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en.prototype.cancel=function(){if(this.i=hn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},cn.prototype.stringify=function(t){return u.JSON.stringify(t,void 0)},cn.prototype.parse=function(t){return u.JSON.parse(t,void 0)},v(pn,ie),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),v(gn,bt);var mn=0;function yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,wn(t)}function wn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=gn.prototype).open=function(t,e){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,wn(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||u).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,wn(this)),this.g&&(this.readyState=3,wn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==u.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vn(this):wn(this),3==this.readyState&&yn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,vn(this))},i.Ta=function(t){this.g&&(this.response=t,vn(this))},i.ha=function(){this.g&&vn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var En=u.JSON.parse;function Tn(t){bt.call(this),this.headers=new De,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=In,this.K=this.L=!1}v(Tn,bt);var In="",bn=/^https?$/i,Sn=["POST","PUT"];function An(t){return"content-type"==t.toLowerCase()}function Cn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nn(t),Dn(t)}function Nn(t){t.D||(t.D=!0,St(t,"complete"),St(t,"error"))}function _n(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Rn(t)||2!=t.ba()))if(t.v&&4==Rn(t))Ut(t.Fa,0,t);else if(St(t,"readystatechange"),4==Rn(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var s;if(s=0===a){var i=String(t.H).match(Le)[1]||null;if(!i&&u.self&&u.self.location){var r=u.self.location.protocol;i=r.substr(0,r.length-1)}s=!bn.test(i?i.toLowerCase():"")}n=s}if(n)St(t,"complete"),St(t,"success");else{t.m=6;try{var o=2<Rn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Nn(t)}}finally{Dn(t)}}}function Dn(t,e){if(t.g){kn(t);const n=t.g,s=t.C[0]?h:null;t.g=null,t.C=null,e||St(t,"ready");try{n.onreadystatechange=s}catch(t){}}}function kn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(u.clearTimeout(t.A),t.A=null)}function Rn(t){return t.g?t.g.readyState:0}function Ln(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case In:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xn(t,e,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=function(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Fe(t,e,n))}function Mn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Vn(t){this.za=0,this.l=[],this.h=new $t,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Mn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Mn("baseRetryDelayMs",5e3,t),this.$a=Mn("retryDelaySeedMs",1e4,t),this.Ya=Mn("forwardChannelMaxRetries",2,t),this.ra=Mn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new en(t&&t.concurrentRequestLimit),this.Ca=new ln,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Pn(t){if(Un(t),3==t.G){var e=t.V++,n=Me(t.F);Fe(n,"SID",t.J),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),jn(t,n),(e=new de(t,t.h,e,void 0)).K=2,e.v=qe(Me(n)),n=!1,u.navigator&&u.navigator.sendBeacon&&(n=u.navigator.sendBeacon(e.v.toString(),"")),!n&&u.Image&&((new Image).src=e.v,n=!0),n||(e.g=ts(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ie(e)}Jn(t)}function On(t){t.g&&(zn(t),t.g.cancel(),t.g=null)}function Un(t){On(t),t.u&&(u.clearTimeout(t.u),t.u=null),Wn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&u.clearTimeout(t.m),t.m=null)}function Fn(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&qn(t)}function qn(t){sn(t.i)||t.m||(t.m=!0,Lt(t.Ha,t),t.C=0)}function Bn(t,e){var n;n=e?e.m:t.V++;const s=Me(t.F);Fe(s,"SID",t.J),Fe(s,"RID",n),Fe(s,"AID",t.U),jn(t,s),t.o&&t.s&&xn(s,t.o,t.s),n=new de(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Kn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),an(t.i,n),ye(n,s,e)}function jn(t,e){t.j&&_e({},(function(t,n){Fe(e,n,t)}))}function Kn(t,e,n){n=Math.min(t.l.length,n);var s=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),r=!1;else try{dn(a,t,"req"+n+"_")}catch(t){s&&s(a)}}if(r){s=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,s}function Gn(t){t.g||t.u||(t.Y=1,Lt(t.Ga,t),t.A=0)}function $n(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ee(m(t.Ga,t),Qn(t,t.A)),t.A++,!0)}function zn(t){null!=t.B&&(u.clearTimeout(t.B),t.B=null)}function Hn(t){t.g=new de(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Me(t.oa);Fe(e,"RID","rpc"),Fe(e,"SID",t.J),Fe(e,"CI",t.N?"0":"1"),Fe(e,"AID",t.U),jn(t,e),Fe(e,"TYPE","xmlhttp"),t.o&&t.s&&xn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=qe(Me(e)),n.s=null,n.U=!0,ve(n,t)}function Wn(t){null!=t.v&&(u.clearTimeout(t.v),t.v=null)}function Xn(t,e){var n=null;if(t.g==e){Wn(t),zn(t),t.g=null;var s=2}else{if(!on(t.i,e))return;n=e.D,un(t.i,e),s=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==s){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;St(s=Xt(),new te(s,n,e,i)),qn(t)}else Gn(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==s&&function(t,e){return!(rn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ee(m(t.Ha,t,e),Qn(t,t.C)),t.C++,0)))}(t,e)||2==s&&$n(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Yn(t,5);break;case 4:Yn(t,10);break;case 3:Yn(t,6);break;default:Yn(t,2)}}function Qn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Yn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var s=m(t.jb,t);n||(n=new xe("//www.google.com/images/cleardot.gif"),u.location&&"http"==u.location.protocol||Ve(n,"https"),qe(n)),function(t,e){const n=new $t;if(u.Image){const s=new Image;s.onload=y(fn,n,s,"TestLoadImage: loaded",!0,e),s.onerror=y(fn,n,s,"TestLoadImage: error",!1,e),s.onabort=y(fn,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=y(fn,n,s,"TestLoadImage: timeout",!1,e),u.setTimeout((function(){s.ontimeout&&s.ontimeout()}),1e4),s.src=t}else e(!1)}(n.toString(),s)}else Zt(2);t.G=0,t.j&&t.j.va(e),Jn(t),Un(t)}function Jn(t){t.G=0,t.I=-1,t.j&&(0==hn(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){let s=function(t){return t instanceof xe?Me(t):new xe(t,void 0)}(n);if(""!=s.i)e&&Pe(s,e+"."+s.i),Oe(s,s.m);else{const t=u.location;s=function(t,e,n,s){var i=new xe(null,void 0);return t&&Ve(i,t),e&&Pe(i,e),n&&Oe(i,n),s&&(i.l=s),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Fe(s,e,t)})),e=t.D,n=t.sa,e&&n&&Fe(s,e,n),Fe(s,"VER",t.ma),jn(t,s),s}function ts(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Tn(new pn({ib:!0})):new Tn(t.qa)).L=t.H,e}function es(){}function ns(){if(q&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function ss(t,e){bt.call(this),this.g=new Vn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!A(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!A(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new os(this)}function is(t){he.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function rs(){ce.call(this),this.status=1}function os(t){this.g=t}(i=Tn.prototype).ea=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ae.g(),this.C=this.u?re(this.u):re(ae),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Cn(this,t)}t=n||"";const i=new De(this.headers);s&&_e(s,(function(t,e){i.set(e,t)})),s=function(t){t:{var e=An;const n=t.length,s="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in s&&e.call(void 0,s[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=u.FormData&&t instanceof u.FormData,!(0<=T(Sn,e))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kn(this),0<this.B&&((this.K=function(t){return q&&Y()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ut(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Cn(this,t)}},i.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,St(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,St(this,"complete"),St(this,"abort"),Dn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dn(this,!0)),Tn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?_n(this):this.cb())},i.cb=function(){_n(this)},i.ba=function(){try{return 2<Rn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),En(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Vn.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new de(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=x(r),V(r,this.P)):r=this.P),null===this.o&&(i.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var s=this.l[n];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(e+=s)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Kn(this,i,e),Fe(n=Me(this.F),"RID",t),Fe(n,"CVER",22),this.D&&Fe(n,"X-HTTP-Session-Id",this.D),jn(this,n),this.o&&r&&xn(n,this.o,r),an(this.i,i),this.Ra&&Fe(n,"TYPE","init"),this.ja?(Fe(n,"$req",e),Fe(n,"SID","null"),i.$=!0,ye(i,n,null)):ye(i,n,e),this.G=2}}else 3==this.G&&(t?Bn(this,t):0==this.l.length||sn(this.i)||Bn(this))},i.Ga=function(){if(this.u=null,Hn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ee(m(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Zt(10),On(this),Hn(this))},i.ab=function(){null!=this.v&&(this.v=null,On(this),$n(this),Zt(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Zt(2)):(this.h.info("Failed to ping google.com"),Zt(1))},(i=es.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},ns.prototype.g=function(t,e){return new ss(t,e)},v(ss,bt),ss.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Lt(m(t.hb,t,e))),Zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),qn(t)},ss.prototype.close=function(){Pn(this.g)},ss.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Fn(this.g,e)}else this.v?((e={}).__data__=Ct(t),Fn(this.g,e)):Fn(this.g,t)},ss.prototype.M=function(){this.g.j=null,delete this.j,Pn(this.g),delete this.g,ss.Z.M.call(this)},v(is,he),v(rs,ce),v(os,es),os.prototype.xa=function(){St(this.g,"a")},os.prototype.wa=function(t){St(this.g,new is(t))},os.prototype.va=function(t){St(this.g,new rs(t))},os.prototype.ua=function(){St(this.g,"b")},ns.prototype.createWebChannel=ns.prototype.g,ss.prototype.send=ss.prototype.u,ss.prototype.open=ss.prototype.m,ss.prototype.close=ss.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,se.COMPLETE="complete",oe.EventType=ue,ue.OPEN="a",ue.CLOSE="b",ue.ERROR="c",ue.MESSAGE="d",bt.prototype.listen=bt.prototype.N,Tn.prototype.listenOnce=Tn.prototype.O,Tn.prototype.getLastError=Tn.prototype.La,Tn.prototype.getLastErrorCode=Tn.prototype.Da,Tn.prototype.getStatus=Tn.prototype.ba,Tn.prototype.getResponseJson=Tn.prototype.Qa,Tn.prototype.getResponseText=Tn.prototype.ga,Tn.prototype.send=Tn.prototype.ea;var as=o.createWebChannelTransport=function(){return new ns},us=o.getStatEventTarget=function(){return Xt()},hs=o.ErrorCode=ne,cs=o.EventType=se,ls=o.Event=Ht,ds=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fs=o.FetchXmlHttpFactory=pn,ps=o.WebChannel=oe,gs=o.XhrIo=Tn}));
//# sourceMappingURL=postpage-spel.1cc68526.js.map
