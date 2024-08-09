// ==UserScript==
// @name        Tiny Attack Bookmarklet
// @version     1.2.2
// @description Adds information about the units of all players to your Tiny Attack games.
// @author      Fex
// @grant       none
// @homepageURL https://ta-bs.github.io/
// @downloadURL https://ta-bs.github.io/bookmarklet/tabm.user.js
// @updateURL   https://ta-bs.github.io/bookmarklet/tabm.meta.js
// @icon        https://ta-bs.github.io/bookmarklet/icon.png
// @namespace   https://www.tinyattack.com/
// @match       https://www.tinyattack.com/game/view.html?gameId=*
// @match       https://www.tinyattack.com/game/test.html?gameId=*
// ==/UserScript==

(()=>{"use strict";const t=document,e=t.createElement.bind(t),s=t.createTextNode.bind(t),i=(t,e)=>t.appendChild(e);class n{t;i;o;h;constructor(t,e,s,i){this.t=t,this.i=e,this.o=s,this.h=i}u(){const t=e("div");return i(t,this.l()),i(t,this.m()),t}l(){const t=e("table");return t.style.marginTop="4px",t.style.marginBottom="8px",i(t,this.p()),this.t.I().forEach((e=>i(t,this.T(e)))),t}p(){const t="#000",s=e("tr");this.o&&i(s,this.k("$","Coins",t)),this.t.v().forEach((t=>{const n=e("td"),r=e("img");r.alt=r.title=this.t._(t),r.width=48,r.height=51,r.src=this.i.O(this.t.P(t)),i(n,r),i(s,n)})),i(s,this.k("INC","Income",t)),i(s,this.k("STR","Army Strength",t)),i(s,this.k("POT","Army Potential",t));const n=this.k("STR/POT","STR/POT",t);return n.innerHTML="<sup>STR</sup>&frasl;<sub>POT</sub>",i(s,n),s}T(t){const s=e("tr");s.style.backgroundColor=this.t.B(t),s.style.border="1px solid black",this.o&&i(s,this.k(this.t.R(t))),this.t.v().forEach((e=>i(s,this.k(this.t.M(t,e)))));const n=this.t.S(t),r=this.t.C(t),a=this.t.L(t);return i(s,this.k(n)),i(s,this.k(Math.round(r))),i(s,this.k(a)),i(s,this.k(0===a?"-":Math.round(100*r/a)+"%")),s}k(t,n,r="#fff"){const a=e("td");n&&(a.title=n),i(a,s("number"==typeof t?t.toLocaleString():t));const o=a.style;return o.color=r,o.fontSize="14px",o.fontWeight="bolder",o.textAlign="center",o.padding="4px 8px",a}m(){const t=e("div");return t.style.color="#ccc",i(t,this.N()),i(t,s(" ")),i(t,this.W()),i(t,s("   1.2.2")),t}N(){const t=e("a");t.href="https://ta-bs.github.io/?cache="+this.t.A(),t.target="_blank",t.classList.add("btn","btn-primary","w-lg-auto");const n=e("span");return n.classList.add("fa","fa-external-link-alt"),i(t,n),i(t,s(" Open Battle Simulator")),t}W(){const t=e("button");t.classList.add("btn","btn-primary","w-lg-auto"),t.addEventListener("click",(()=>{t.disabled=!0,this.h()}));const n=e("span");return n.classList.add("fa","fa-redo"),i(t,n),i(t,s(" Refresh")),t}}const r=(t,e)=>"https://cdn.tinyattack.com/img/skin/"+t+"/"+e+".png?t=0";class a{O(t){return r(t,0)}}class o{O(t){const e=Math.floor(12*Math.random()+1);return r(t,e)}}class c{D;H;constructor(t,e){this.D=t,this.H=e}U(){return this.D.U}A(){return this.D.A}j(){return this.D.j}I(){return this.H.I()}B(t){return this.D.B(t)}R(t){return this.H.J(t)}S(t){let e=this.D.$;return e+=this.H.q(t)*this.D.F,this.H.G(t).forEach((t=>{this.D.K(t.x,t.y)?e+=Math.floor(25*t.V/10):this.D.X(t.x,t.y)&&(e+=Math.floor(75*t.V/10))})),e}C(t){return this.H.units(t).map((t=>{const e=this.D.unitType(t.Y);return e?e.Z*t.V/10:0})).reduce(((t,e)=>t+e),0)}L(t){return this.H.units(t).map((t=>this.D.unitType(t.Y)?.Z??0)).reduce(((t,e)=>t+e),0)}M(t,e){return this.H.M(t,e)}v(){const t=["LandLight","LandHeavy","AirLight","AirHeavy","WaterLight","WaterHeavy","WaterStealth"];return this.D.tt().sort(((e,s)=>{const i=t.indexOf(e.et),n=t.indexOf(s.et);return i===n?e.Z-s.Z:i-n})).map((t=>t.Y)).filter((t=>this.H.M(void 0,t)>0))}_(t){return this.D.unitType(t)?.title??""}P(t){return this.D.unitType(t)?.st??0}}class h{it;constructor(t){this.it=t}nt(){const t=this.it.game.key.indexOf("round");return this.it.game.data[0][t]}rt(){const t=this.it.player.key.indexOf("active");return this.it.player.data.findIndex((e=>!0===e[t]))}I(){const t=this.it.player.data.length;return[1,2,3,4,5,6,7,8,9,10,11,12].slice(0,t)}J(t){const e=this.it.player.key.indexOf("coin");return this.it.player.data[t-1][e]}q(t){const e=this.it.coordinate.key.indexOf("tilePlayer");return this.it.coordinate.data.map((t=>t[e])).filter((e=>e===t)).length}M(t,e){const s=this.it.coordinate.key.indexOf("unitId"),i=this.it.coordinate.key.indexOf("unitPlayer");return this.it.coordinate.data.filter((e=>void 0===t||e[i]===t)).filter((t=>t[s]===e)).length}units(t){const[e,s,i,n,r]=["x","y","unitId","unitHealth","unitPlayer"].map((t=>this.it.coordinate.key.indexOf(t)));return this.it.coordinate.data.filter((e=>void 0===t||e[r]===t)).map((t=>({Y:t[i],ot:t[r],x:t[e],y:t[s],V:t[n]})))}G(t){return this.units(t).filter((t=>40===t.Y))}}const u=(t,e,s)=>{const i=t.match(e);if(null===i)throw Error("problem parsing html for "+s);return JSON.parse(i[1])};class l{ct;constructor(t){this.ct=t}get U(){return this.ct.U}get A(){return this.ct.A}get j(){return this.ct.j}get $(){return this.ct.$}get F(){return this.ct.F}tt(){const[t,e,s,i,n,r]=["unitId","skinId","coin","title","type","weight"].map((t=>this.ct.units.key.indexOf(t)));return this.ct.units.data.map((a=>({Y:a[t],title:a[i],Z:a[s],st:a[e],et:a[n]+a[r]})))}unitType(t){const[e,s,i,n,r,a]=["unitId","skinId","coin","title","type","weight"].map((t=>this.ct.units.key.indexOf(t))),o=this.ct.units.data.find((s=>s[e]===t));if(o)return{Y:o[e],title:o[n],Z:o[i],st:o[s],et:o[r]+o[a]}}B(t){return this.ct.ht[t].hex.darker}K(t,e){return 7===this.ut(t,e)}X(t,e){return 20===this.ut(t,e)}ut(t,e){const s=this.ct.lt.key.indexOf("x"),i=this.ct.lt.key.indexOf("y"),n=this.ct.lt.key.indexOf("tileId"),r=this.ct.lt.data.find((n=>n[s]===t&&n[i]===e));return r?r[n]:void 0}}function d(t){const e=document,s="tabsbm",i=new l(t(e.documentElement.outerHTML));(async t=>(await fetch("https://cdn.tinyattack.com/game/"+t+"/public.json")).json())(i.U).then((r=>{const u=new h(r),l=new c(i,u),m=5===(new Date).getMonth()?new o:new a,p=new n(l,m,176===l.j(),(()=>d(t))).u();p.id=s,p.style.marginBottom="12px",p.style.zIndex="2";const I=e.getElementById(s),g=e.getElementById("game"),y=g?.parentElement;g&&y?(I&&y.removeChild(I),y.insertBefore(p,g)):console.warn("html borked")}))}if(window.location.href.startsWith("https://www.tinyattack.com/game/view.html?gameId="))console.log("tabsbm using normal interface"),d((t=>(t=>({U:u(t,/'gameId': (\d+)/,"gameId"),A:u(t,/'cacheId': (-?\d+)/,"cacheId"),j:u(t,/'playerId': (\d+)/,"playerId"),$:u(t,/'coinTurn': (\d+)/,"coinTurn"),F:u(t,/'coinBase': (\d+)/,"coinBase"),dt:u(t,/, 'tile': (\{[^}]+\}),/,"tile"),lt:u(t,/game.getMap\(\).addCoordinates\((\{[^}]+\}\}?),/,"coordinates"),units:u(t,/, 'unit': (\{[^}]+\}),/,"unit"),ht:u(t,/'colors': (\[[^\]]+\])/,"colors")}))(t)));else if(window.location.href.startsWith("https://www.tinyattack.com/game/test.html?gameId=")){console.log("tabsbm using experimental interface");const t=document;t.getElementById("game").style.position="relative",t.getElementById("game-map").classList.remove("bottom-0"),t.getElementById("game-panel").classList.remove("h-100");const e=t.getElementById("game-hud").firstElementChild;e.classList.remove("h-100"),e.style.height="100vh",d((t=>(t=>({U:u(t,/gameId: (\d+),/,"gameId"),A:u(t,/cacheId: (-?\d+),/,"cacheId"),j:u(t,/playerId: (\d+),/,"playerId"),$:u(t,/coinTurn: (\d+),/,"coinTurn"),F:u(t,/coinBase: (\d+),/,"coinBase"),dt:u(t,/tile: (\{[^}]+\}),/,"tile"),lt:u(t,/data: (\{[^}]+\}),/,"coordinates"),units:u(t,/unit: (\{[^}]+\}),/,"unit"),ht:u(t,/colors: (\[[^\]]+\])/,"colors")}))(t)))}})();
