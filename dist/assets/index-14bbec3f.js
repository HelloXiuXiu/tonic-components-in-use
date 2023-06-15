var dt=Object.defineProperty;var pt=(r,t,e)=>t in r?dt(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var C=(r,t,e)=>(pt(r,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();class ht{constructor(t){this.name=t}appendComponent(t){let i=new DOMParser().parseFromString(this.html,"text/html");console.log(i);let o=document.getElementById(t);o.innerHTML=i.body.innerHTML}}let B=new ht("accordion");B.html=`
<tonic-accordion id="my-accordion">
  <tonic-accordion-section
    name="bucket-test-1"
    id="bucket-test-1"
    data="preview"
    label="Accordion Test 1">
    Whatever
  </tonic-accordion-section>
  <tonic-accordion-section
    name="bucket-test-2"
    id="bucket-test-2"
    label="Accordion Test 2">
    Some Content
  </tonic-accordion-section>
  <tonic-accordion-section
    name="bucket-test-3"
    id="bucket-test-3"
    label="Accordion Test 3">
    The visual design includes features intended to help users understand that the accordion provides enhanced keyboard navigation functions. When an accordion header button has keyboard focus, the styling of the accordion container and all its header buttons is changed.
  </tonic-accordion-section>
</tonic-accordion>
`;console.log(B);B.appendComponent("accordeon_wrap");class P{constructor(t,e,i){this.isTonicTemplate=!0,this.unsafe=i,this.rawText=t,this.templateStrings=e}valueOf(){return this.rawText}toString(){return this.rawText}}const h=class extends window.HTMLElement{static get version(){return"15.1.1"}static get SPREAD(){return/\.\.\.\s?(__\w+__\w+__)/g}static get ESC(){return/["&'<>`/]/g}static get AsyncFunctionGenerator(){return async function*(){}.constructor}static get AsyncFunction(){return async function(){}.constructor}static get MAP(){return{'"':"&quot;","&":"&amp;","'":"&#x27;","<":"&lt;",">":"&gt;","`":"&#x60;","/":"&#x2F;"}}constructor(){super();const t=h._states[super.id];delete h._states[super.id],this._state=t||{},this.preventRenderOnReconnect=!1,this.props={},this.elements=[...this.children],this.elements.__children__=!0,this.nodes=[...this.childNodes],this.nodes.__children__=!0,this._events()}get isTonicComponent(){return!0}static _createId(){return`tonic${h._index++}`}static _normalizeAttrs(t,e={}){return[...t].forEach(i=>e[i.name]=i.value),e}_checkId(){const t=super.id;if(!t){const e=this.outerHTML.replace(this.innerHTML,"...");throw new Error(`Component: ${e} has no id`)}return t}get state(){return this._checkId(),this._state}set state(t){this._state=(this._checkId(),t)}_events(){const t=Object.getOwnPropertyNames(window.HTMLElement.prototype);for(const e of this._props)t.indexOf("on"+e)!==-1&&this.addEventListener(e,this)}_prop(t){const e=this._id,i=`__${e}__${h._createId()}__`;return h._data[e]=h._data[e]||{},h._data[e][i]=t,i}_placehold(t){const e=this._id,i=`placehold:${e}:${h._createId()}__`;return h._children[e]=h._children[e]||{},h._children[e][i]=t,i}static match(t,e){return t.matches||(t=t.parentElement),t.matches(e)?t:t.closest(e)}static getTagName(t){return t.match(/[A-Z][a-z0-9]*/g).join("-").toLowerCase()}static getPropertyNames(t){const e=[];for(;t&&t!==h.prototype;)e.push(...Object.getOwnPropertyNames(t)),t=Object.getPrototypeOf(t);return e}static add(t,e){if(!(e||t.name&&t.name.length>1))throw Error("Mangling. https://bit.ly/2TkJ6zP");if(e||(e=h.getTagName(t.name)),!h.ssr&&window.customElements.get(e))throw new Error(`Cannot Tonic.add(${t.name}, '${e}') twice`);if(!t.prototype||!t.prototype.isTonicComponent){const o={[t.name]:class extends h{}}[t.name];o.prototype.render=t,t=o}return t.prototype._props=h.getPropertyNames(t.prototype),h._reg[e]=t,h._tags=Object.keys(h._reg).join(),window.customElements.define(e,t),typeof t.stylesheet=="function"&&h.registerStyles(t.stylesheet),t}static registerStyles(t){if(h._stylesheetRegistry.includes(t))return;h._stylesheetRegistry.push(t);const e=document.createElement("style");h.nonce&&e.setAttribute("nonce",h.nonce),e.appendChild(document.createTextNode(t())),document.head&&document.head.appendChild(e)}static escape(t){return t.replace(h.ESC,e=>h.MAP[e])}static unsafeRawString(t,e){return new P(t,e,!0)}dispatch(t,e=null){const i={bubbles:!0,detail:e};this.dispatchEvent(new window.CustomEvent(t,i))}html(t,...e){const i=s=>{if(s&&s.__children__)return this._placehold(s);if(s&&s.isTonicTemplate)return s.rawText;switch(Object.prototype.toString.call(s)){case"[object HTMLCollection]":case"[object NodeList]":return this._placehold([...s]);case"[object Array]":return s.every(a=>a.isTonicTemplate&&!a.unsafe)?new P(s.join(`
`),null,!1):this._prop(s);case"[object Object]":case"[object Function]":case"[object Set]":case"[object Map]":case"[object WeakMap]":return this._prop(s);case"[object NamedNodeMap]":return this._prop(h._normalizeAttrs(s));case"[object Number]":return`${s}__float`;case"[object String]":return h.escape(s);case"[object Boolean]":return`${s}__boolean`;case"[object Null]":return`${s}__null`;case"[object HTMLElement]":return this._placehold([s])}return typeof s=="object"&&s&&s.nodeType===1&&typeof s.cloneNode=="function"?this._placehold([s]):s},o=[];for(let s=0;s<t.length-1;s++)o.push(t[s],i(e[s]));o.push(t[t.length-1]);const n=o.join("").replace(h.SPREAD,(s,a)=>{const c=h._data[a.split("__")[1]][a];return Object.entries(c).map(([u,l])=>{const b=u.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();return l===!0?b:l?`${b}="${h.escape(String(l))}"`:""}).filter(Boolean).join(" ")});return new P(n,t,!1)}scheduleReRender(t){return this.pendingReRender?this.pendingReRender:(this.pendingReRender=new Promise(e=>setTimeout(()=>{if(!this.isInDocument(this.shadowRoot||this))return;const i=this._set(this.shadowRoot||this,this.render);if(this.pendingReRender=null,i&&i.then)return i.then(()=>{this.updated&&this.updated(t),e(this)});this.updated&&this.updated(t),e(this)},0)),this.pendingReRender)}reRender(t=this.props){const e={...this.props};return this.props=typeof t=="function"?t(e):t,this.scheduleReRender(e)}handleEvent(t){this[t.type](t)}_drainIterator(t,e){return e.next().then(i=>{if(this._set(t,null,i.value),!i.done)return this._drainIterator(t,e)})}_set(t,e,i=""){this.willRender&&this.willRender();for(const o of t.querySelectorAll(h._tags)){if(!o.isTonicComponent)continue;const n=o.getAttribute("id");!n||!h._refIds.includes(n)||(h._states[n]=o.state)}if(e instanceof h.AsyncFunction)return e.call(this,this.html,this.props).then(o=>this._apply(t,o));if(e instanceof h.AsyncFunctionGenerator)return this._drainIterator(t,e.call(this));e===null?this._apply(t,i):e instanceof Function&&this._apply(t,e.call(this,this.html,this.props)||"")}_apply(t,e){if(e&&e.isTonicTemplate?e=e.rawText:typeof e=="string"&&(e=h.escape(e)),typeof e=="string"){if(this.stylesheet&&(e=`<style nonce=${h.nonce||""}>${this.stylesheet()}</style>${e}`),t.innerHTML=e,this.styles){const n=this.styles();for(const s of t.querySelectorAll("[styles]"))for(const a of s.getAttribute("styles").split(/\s+/))Object.assign(s.style,n[a.trim()])}const i=h._children[this._id]||{},o=(n,s)=>{if(n.nodeType===3){const c=n.textContent.trim();i[c]&&s(n,i[c],c)}const a=n.childNodes;if(a)for(let c=0;c<a.length;c++)o(a[c],s)};o(t,(n,s,a)=>{for(const c of s)n.parentNode.insertBefore(c,n);delete h._children[this._id][a],n.parentNode.removeChild(n)})}else t.innerHTML="",t.appendChild(e.cloneNode(!0))}connectedCallback(){this.root=this.shadowRoot||this,super.id&&!h._refIds.includes(super.id)&&h._refIds.push(super.id);const t=e=>e.replace(/-(.)/g,(i,o)=>o.toUpperCase());for(const{name:e,value:i}of this.attributes){const o=t(e),n=this.props[o]=i;if(/__\w+__\w+__/.test(n)){const{1:s}=n.split("__");this.props[o]=h._data[s][n]}else if(/\d+__float/.test(n))this.props[o]=parseFloat(n,10);else if(n==="null__null")this.props[o]=null;else if(/\w+__boolean/.test(n))this.props[o]=n.includes("true");else if(/placehold:\w+:\w+__/.test(n)){const{1:s}=n.split(":");this.props[o]=h._children[s][n][0]}}if(this.props=Object.assign(this.defaults?this.defaults():{},this.props),this._id=this._id||h._createId(),this.willConnect&&this.willConnect(),!!this.isInDocument(this.root)){if(!this.preventRenderOnReconnect){this._source?this.innerHTML=this._source:this._source=this.innerHTML;const e=this._set(this.root,this.render);if(e&&e.then)return e.then(()=>this.connected&&this.connected())}this.connected&&this.connected()}}isInDocument(t){const e=t.getRootNode();return e===document||e.toString()==="[object ShadowRoot]"}disconnectedCallback(){this.disconnected&&this.disconnected(),delete h._data[this._id],delete h._children[this._id]}};let d=h;C(d,"_tags",""),C(d,"_refIds",[]),C(d,"_data",{}),C(d,"_states",{}),C(d,"_children",{}),C(d,"_reg",{}),C(d,"_stylesheetRegistry",[]),C(d,"_index",0);class ut extends d{defaults(){return{multiple:!1}}static stylesheet(){return`
      tonic-accordion {
        display: block;
        border: 1px solid var(--tonic-border, black);
        border-radius: 2px;
      }
    `}qs(t){return this.querySelector(t)}qsa(t){return[...this.querySelectorAll(t)]}setVisibility(t){const e=document.getElementById(t);if(!e)return;const i=this.hasAttribute("data-allow-multiple"),o=e.getAttribute("aria-expanded")==="true";if(!o&&!i){const a=this.qsa(".tonic--accordion-header button"),c=this.qsa(".tonic--accordion-panel");a.forEach(u=>u.setAttribute("aria-expanded","false")),c.forEach(u=>u.setAttribute("hidden",""))}const n=e.getAttribute("aria-controls")||`tonic--accordion-panel-${e.id}`;if(o){e.setAttribute("aria-expanded","false");const a=document.getElementById(n);a&&a.setAttribute("hidden",""),this.state.selected=null;return}e.setAttribute("aria-expanded","true");const s=document.getElementById(n);this.state.selected=t,s&&s.removeAttribute("hidden")}click(t){const e=d.match(t.target,"button");e&&this.setVisibility(e.id)}keydown(t){if(!d.match(t.target,"button.tonic--title"))return;const i=t.ctrlKey,o=t.code==="PageUp",n=t.code==="PageDown",s=t.code==="ArrowUp",a=t.code==="ArrowDown",c=t.metaKey&&t.code==="ArrowDown",u=t.metaKey&&t.code==="ArrowUp",l=i&&(o||n),b=this.qsa("button.tonic--title");if(s||a||l){const p=b.indexOf(t.target),m=n||a?1:-1,f=b.length,v=(p+f+m)%f;b[v].focus(),t.preventDefault()}if(u||c){switch(t.key){case u:b[0].focus();break;case c:b[b.length-1].focus();break}t.preventDefault()}}connected(){const t=this.state.selected||this.props.selected;t&&setTimeout(()=>this.setVisibility(t),0)}render(){const{multiple:t}=this.props;return t&&this.setAttribute("data-allow-multiple",""),this.html`
      ${this.nodes}
    `}}class ft extends d{static stylesheet(){return`
      tonic-accordion-section {
        display: block;
      }

      tonic-accordion-section:not(:last-of-type) {
        border-bottom: 1px solid var(--tonic-border, black);
      }

      tonic-accordion-section .tonic--accordion-header {
        display: flex;
        margin: 0;
      }

      tonic-accordion-section .tonic--accordion-panel[hidden] {
        display: none;
      }

      tonic-accordion-section .tonic--accordion-panel {
        padding: 10px 50px 20px 20px;
      }

      tonic-accordion-section .tonic--accordion-header button {
        font-size: 14px;
        text-align: left;
        padding: 20px;
        position: relative;
        background: transparent;
        color: var(--tonic-primary);
        font-weight: bold;
        border: 0;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        outline: none;
        width: 100%;
      }

      tonic-accordion-section .tonic--accordion-header button:focus {
        outline: none;
      }

      tonic-accordion-section .tonic--accordion-header button:focus .tonic--label {
        border-bottom: 2px solid var(--tonic-accent);
      }

      tonic-accordion-section .tonic--accordion-header .tonic--arrow {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 50px;
      }

      tonic-accordion-section .tonic--accordion-header .tonic--arrow:before {
        content: "";
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        -moz-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        transform: translateY(-50%) translateX(-50%) rotate(135deg);
        border-top: 1px solid var(--tonic-primary, #333);
        border-right: 1px solid var(--tonic-primary, #333);
      }

      tonic-accordion-section .tonic--accordion-header button[aria-expanded="true"] .tonic--arrow:before {
        -webkit-transform: translateY(-50%) translateX(-50%) rotate(315deg);
        -moz-transform: translateY(-50%) translateX(-50%) rotate(315deg);
        transform: translateY(-50%) translateX(-50%) rotate(315deg);
        margin-top: 3px;
      }
    `}render(){const{id:t,name:e,label:i}=this.props;return this.html`
      <div class="tonic--accordion-header" role="heading">
        <button
          class="tonic--title"
          id="tonic--accordion-header-${t}"
          name="${e}"
          aria-expanded="false"
          aria-controls="tonic--accordion-panel-${t}">
          <span class="tonic--label">${i}</span>
          <span class="tonic--arrow"></span>
        </button>
      </div>
      <div
        class="tonic--accordion-panel"
        id="tonic--accordion-panel-${t}"
        aria-labelledby="tonic--accordion-header-${t}"
        role="region"
        hidden>
        ${this.nodes}
      </div>
    `}}class bt extends d{defaults(){return{count:0}}get value(){return this.state.count}set value(t){this.state.count=t,this.reRender()}static stylesheet(){return`
      tonic-badge * {
        box-sizing: border-box;
      }

      tonic-badge .tonic--notifications {
        width: 40px;
        height: 40px;
        text-align: center;
        padding: 10px;
        position: relative;
        background-color: var(--tonic-background, #fff);
        border: 1px solid var(--tonic-input-border, transparent);
        border-radius: 8px;
      }

      tonic-badge span:after {
        content: '';
        width: 8px;
        height: 8px;
        display: none;
        position: absolute;
        top: 7px;
        right: 6px;
        background-color: var(--tonic-notification, #f66);
        border: 2px solid var(--tonic-background, #fff);
        border-radius: 50%;
      }

      tonic-badge .tonic--notifications.tonic--new span:after {
        display: block;
      }

      tonic-badge span {
        color: var(--tonic-primary, #333);
        font: 15px var(--tonic-subheader, 'Arial', sans-serif);
        letter-spacing: 1px;
        text-align: center;
      }
    `}willConnect(){this.state.count=this.props.count}render(){const{theme:t}=this.props;let e=this.state.count;typeof e>"u"&&(e=this.props.count),t&&this.classList.add(`tonic--theme--${t}`);const i=e>99?"99":String(e),o=["tonic--notifications"];return e>0&&o.push("tonic--new"),this.html`
      <div ... ${{class:o.join(" ")}}>
        <span>${i}</span>
      </div>
    `}}class mt extends d{get value(){return this.props.value}get form(){return this.querySelector("button").form}get disabled(){return this.querySelector("button").hasAttribute("disabled")}set disabled(t){t=String(t),this.props.disabled=t;const e=this.querySelector("button");t==="true"?(e.setAttribute("disabled","true"),this.setAttribute("disabled","true")):(e.removeAttribute("disabled"),this.removeAttribute("disabled"))}defaults(){return{height:this.props.type==="icon"?"100%":"34px",width:this.props.type==="icon"?"100%":"140px",margin:"0px",autofocus:"false",async:!1,radius:"2px",borderWidth:"0px",textColorDisabled:"var(--tonic-disabled)",backgroundColor:"transparent"}}static stylesheet(){return`
      tonic-button {
        display: inline-block;
        user-select: none;
        -webkit-user-select: none;
      }

      tonic-button button {
        color: var(--tonic-button-text, var(--tonic-primary, rgba(54, 57, 61, 1)));
        width: auto;
        font: 12px var(--tonic-subheader, 'Arial', sans-serif);
        font-weight: bold;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 6px;
        position: relative;
        background-color: var(--tonic-button-background, transparent);
        transition: background 0.3s ease, color 0.3s ease;
        box-shadow: 0 1px 2px var(--tonic-button-shadow);
        appearance: none;
      }

      tonic-button[type="icon"] button {
        background: none;
        box-shadow: none;
      }

      tonic-button[type="icon"] tonic-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      tonic-button button:focus {
        background-color: var(--tonic-button-background-focus, rgba(247, 247, 245, 1));
        outline: none;
      }

      tonic-button button[disabled],
      tonic-button button.tonic--active {
        color: var(--tonic-medium, rgba(153, 157, 160, 1));
        background-color: var(--tonic-button-background-disabled, rgba(247, 247, 245, 1));
      }

      tonic-button button[disabled],
      tonic-button button:active {
        animation-duration: .2s;
        animation-name: tonic--button--activate;
        transition-timing-function: ease;
      }

      @keyframes tonic--button--activate {
        0% {
          transform: scale(1);
        }

        50% {
          transform: scale(0.95);
        }

        100% {
          transform: scale(1);
        }
      }

      tonic-button button:not([disabled]):hover,
      tonic-button:not(.tonic--loading) button:hover {
        background-color: var(--tonic-button-background-hover, rgba(54, 57, 61, 1)) !important;
        cursor: pointer;
      }

      tonic-button.tonic--loading {
        pointer-events: none;
      }

      tonic-button[disabled="true"],
      tonic-button[disabled="true"] button,
      tonic-button button[disabled] {
        user-select: none;
        background-color: transparent
      }

      tonic-button.tonic--loading button {
        color: transparent !important;
        transition: all 0.3s ease-in;
        pointer-events: none;
      }

      tonic-button.tonic--loading button:hover {
        color: transparent !important;
        background: var(--tonic-medium, rgba(153, 157, 160, 1)) !important;
      }

      tonic-button.tonic--loading button:before {
        margin-top: -8px;
        margin-left: -8px;
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 50%;
        opacity: 1;
        transform: translateX(-50%) translateY(-50%);
        border: 2px solid var(--tonic-button-text, var(--tonic-primary, black));
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s linear 0s infinite;
        transition: opacity 0.3s ease;
      }

      tonic-button button:before {
        content: '';
        width: 14px;
        height: 14px;
        opacity: 0;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}loading(t){this.classList[t?"add":"remove"]("tonic--loading")}click(t){const e=this.props.disabled==="true",i=this.props.async==="true",o=this.props.href;if(i&&!e&&this.loading(!0),o){const n=this.getAttribute("target");n&&n!=="_self"?window.open(o):window.open(o,"_self")}e&&(t.preventDefault(),t.stopPropagation())}styles(){const{width:t,height:e,margin:i,radius:o,borderWidth:n}=this.props;return{button:{width:t,height:e,borderRadius:o,borderWidth:n},wrapper:{width:t,height:e,margin:i}}}render(){const{value:t,type:e,disabled:i,autofocus:o,active:n,async:s,fill:a,tabindex:c,size:u,symbolId:l}=this.props;let b=[];n&&b.push("tonic--active"),b=b.join(" "),c&&this.removeAttribute("tabindex");let p="";return e==="icon"?p=this.html`
        <tonic-icon
          size="${u||"18px"}"
          fill="${a||"var(--tonic-primary)"}"
          symbol-id="${l}"
        ></tonic-icon>
      `:p=this.childNodes,this.html`
      <div class="tonic--button--wrapper" styles="wrapper">
        <button ... ${{styles:"button",async:String(s),disabled:i&&i!=="false",autofocus:o==="true"?"autofocus":"",value:t,type:e,tabindex:c,class:b}}>${p}</button>
      </div>
    `}}class gt extends d{static stylesheet(){return`
      tonic-chart {
        display: inline-block;
        position: relative;
      }

      tonic-chart canvas {
        display: inline-block;
        position: relative;
      }
    `}get library(){return this.Chart}set library(t){this.Chart=t}draw(t={},e={}){const i=this.querySelector("canvas"),o=this.props.type||e.type;if(!this.Chart){console.error("No chart constructor found");return}return new this.Chart(i,{type:o,options:e,data:t})}async redraw(){return this.connected()}async fetch(t,e={}){if(!t)return{};try{return{data:await(await window.fetch(t,e)).json()}}catch(i){return{err:i}}}async connected(){let t=null;if(this.props.library&&(this.Chart=this.props.library),!this.Chart)return;const e={...this.props,...this.props.options},i=this.props.src;if(typeof i=="string"){const o=await this.fetch(i);o.err?(console.error(o.err),t={}):t=o.data}if(i===Object(i)&&(t=i),t&&t.chartData)throw new Error("chartData propery deprecated");t&&this.draw(t,e)}render(){const{width:t,height:e}=this.props;return this.style.width=t,this.style.height=e,this.html`
      <canvas ...${{width:t,height:e}}>
      </canvas>
    `}}class vt extends d{constructor(){super(),this._modified=!1}get value(){const t=this.state,e=this.props,i=typeof e.checked<"u"?e.checked:e.value,o=typeof t.checked<"u"?t.checked:t.value;let n;return this._modified?n=typeof o<"u"?o:i:n=typeof i<"u"?i:o,n===!0||n==="true"}set value(t){this._setValue(t)}async _setValue(t){this._modified=!0,this.state._changing=!0;const e=t===!0||t==="true";this.state.checked=e,this.props.checked=e,await this.reRender()}defaults(){return{disabled:!1,size:"18px"}}static stylesheet(){return`
      tonic-checkbox .tonic--checkbox--wrapper {
        display: inline-block;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      tonic-checkbox > div {
        height: auto;
        padding: 6px;
      }

      tonic-checkbox input[type="checkbox"] {
        display: none;
      }

      tonic-checkbox input:checked + label:after {
        content: '';
        display: block;
        position: absolute;
        top: 2px;
        left: 6px;
        width: 3px;
        height: 8px;
        border: solid var(--tonic-primary);
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
      }

      tonic-checkbox input[type="checkbox"][disabled] + label {
        opacity: 0.35;
      }

      tonic-checkbox label {
        color: var(--tonic-medium, #333);
        font: 12px var(--tonic-subheader, 'Arial', sans-serif);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        display: inline;
        vertical-align: middle;
      }

      tonic-checkbox .tonic--icon {
        position: absolute;
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 1px solid var(--tonic-border, #fff);
        background-size: contain;
        background-color: var(--tonic-input-background);
        border-radius: 2px;
        margin: 4px;
      }

      tonic-checkbox input[type="checkbox"][disabled] + .tonic--icon {
        background-color: transparent;
      }

      tonic-checkbox label:nth-of-type(2) {
        display: inline-block;
        line-height: 22px;
        margin: 2px 2px 2px 30px;
      }
    `}change(t){this.props.virtual===!0||this.props.virtual==="true"||this.state._changing||(t.stopPropagation(),this._setValue(!this.value))}updated(){if(this.state._changing){const t=new window.Event("change",{bubbles:!0});this.dispatchEvent(t),delete this.state._changing}}styles(){return{icon:{width:this.props.size,height:this.props.size}}}renderLabel(){let{id:t,label:e}=this.props;return this.props.label||(e=this.nodes),this.html`
      <label
        styles="label"
        for="tonic--checkbox--${t}"
      >${e}</label>
    `}async keydown(t){t.code==="Space"&&(await this._setValue(!this.value),this.querySelector(".tonic--checkbox--wrapper").focus())}render(){const{id:t,disabled:e,theme:i,title:o,tabindex:n}=this.props,s=this.value;return typeof this.state.checked>"u"&&(this.state.checked=s),n&&this.removeAttribute("tabindex"),i&&this.classList.add(`tonic--theme--${i}`),this.html`
      <div tabindex="0" class="tonic--checkbox--wrapper">
        <input ... ${{type:"checkbox",id:`tonic--checkbox--${t}`,checked:s,disabled:e===!0||e==="true",title:o,tabindex:n}}/>
        <label
          for="tonic--checkbox--${t}"
          styles="icon"
          class="tonic--icon"
        >
        </label>
        ${this.renderLabel()}
      </div>
    `}}const yt=100;let X=!0,Y=null;window.addEventListener("blur",()=>{clearTimeout(Y),X=!1});window.addEventListener("focus",()=>{clearTimeout(Y),Y=setTimeout(()=>{X=!0},yt)});class tt extends d{constructor(){if(super(),this.classList.add("tonic--dialog"),this.setAttribute("hidden",!0),!document.querySelector(".tonic--dialog--overlay")){const s=document.createElement("div");s.classList="tonic--dialog--overlay",s.textContent=" ",document.body.appendChild(s)}this.closeIcon=document.createElement("div"),this.closeIcon.className="tonic--dialog--close";const t="http://www.w3.org/2000/svg",e="http://www.w3.org/1999/xlink",i=document.createElementNS(t,"svg"),o=document.createElementNS(t,"use");this.closeIcon.appendChild(i),i.appendChild(o),o.setAttributeNS(e,"href","#close"),o.setAttributeNS(e,"xlink:href","#close");const n="var(--tonic-primary, #333)";o.setAttribute("color",n),o.setAttribute("fill",n)}defaults(){return{width:"450px",height:"auto",overlay:!0,backgroundColor:"rgba(0, 0, 0, 0.5)"}}_getZIndex(){return Array.from(document.querySelectorAll("body *")).map(t=>parseFloat(window.getComputedStyle(t).zIndex)).reduce((t,e=Number.MIN_SAFE_INTEGER)=>isNaN(t)||t<e?e:t)}static stylesheet(){return`
      .tonic--dialog {
        box-shadow: 0px 6px 35px 3px rgba(0, 0, 0, 0.2);
        background: var(--tonic-window);
        border: 1px solid var(--tonic-border);
        border-radius: 6px;
        position: absolute;
        overflow: hidden;
        top: 50%;
        left: 50%;
        z-index: -1;
        opacity: 0;
        transition: z-index .25s;
        transform: translate(-50%, -50%) scale(0.88);
      }

      .tonic--dialog.tonic--show {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
        animation-duration: .25s;
        animation-name: tonic--dialog--show;
        transition-timing-function: ease;
      }

      .tonic--dialog.tonic--hide {
        transform: translate(-50%, -50%) scale(0.88);
        opacity: 0;
        animation-duration: .2s;
        animation-name: tonic--dialog--hide;
        transition-timing-function: ease;
      }

      .tonic--dialog > .tonic--dialog--close {
        width: 25px;
        height: 25px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
      }

      .tonic--dialog > .tonic--dialog--close svg {
        width: inherit;
        height: inherit;
      }

      @keyframes tonic--dialog--show {
        from {
          transform: translate(-50%, -50%) scale(0.88);
          opacity: 0;
        }

        to {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }

      @keyframes tonic--dialog--hide {
        from {
          transform: translate(-50%, -50%) scale(1);
          opacity: 1;
        }

        to {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.88);
        }
      }

      .tonic--dialog--overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        z-index: -1;
        transition: all 0.2s;
        background: var(--tonic-overlay);
      }

      .tonic--dialog--overlay.tonic--show {
        opacity: 1;
      }
    `}show(){const t=this._getZIndex();if(this.appendChild(this.closeIcon),this.removeAttribute("hidden"),this.props.overlay!=="false"){const e=document.querySelector(".tonic--dialog--overlay");e.classList.add("tonic--show"),e.style.zIndex=t}return this.style.zIndex=t+100,new Promise(e=>{this.props.widthMobile&&document.body.clientWidth<500&&(this.props.width=this.props.widthMobile),this.style.width=this.props.width,this.style.height=this.props.height;const i=()=>{clearTimeout(o),e()},o=setTimeout(i,512);this.addEventListener("animationend",i,{once:!0}),this.classList.remove("tonic--hide"),this.classList.add("tonic--show"),this._escapeHandler=n=>{X&&n.keyCode===27&&this.hide()},document.addEventListener("keyup",this._escapeHandler)})}hide(){const t=document.querySelector(".tonic--dialog--overlay");return t.classList.remove("tonic--show"),t.style.zIndex=-1,new Promise(e=>{this.style.zIndex=-1,document.removeEventListener("keyup",this._escapeHandler);const i=()=>{clearTimeout(o),this.setAttribute("hidden",!0),e()},o=setTimeout(i,512);this.addEventListener("animationend",i,{once:!0}),this.classList.remove("tonic--show"),this.classList.add("tonic--hide")})}event(t){const e=this;return{then(i){const o=s=>{s.keyCode===27&&i({})},n=s=>{const a=d.match(s.target,".tonic--dialog--close"),c=d.match(s.target,"[value]");if((a||c)&&(e.removeEventListener(t,n),document.removeEventListener("keyup",o)),a)return i({});c&&i({[s.target.value]:!0})};document.addEventListener("keyup",o),e.addEventListener(t,n)}}}click(t){d.match(t.target,".tonic--dialog--close")&&this.hide()}updated(){this.appendChild(this.closeIcon)}render(){return this.html`
      ${this.children}
    `}}const q={type:"TonicForm_NON_EXISTANT"};class z extends d{static isNumber(t){return!isNaN(Number(t))}static getPropertyValue(t,e){if(!e)return q;const i=e.split(".");let o=t;for(const n of i){if(!o)return q;o=o[n]}return o}static setPropertyValue(t,e,i){if(!e)return;const o=e.split(".");let n=t;const s=o.pop();if(s){for(let a=0;a<o.length;a++){const c=o[a],u=o[a+1]||s;n[c]||(n[c]=z.isNumber(u)?[]:{}),n=n[c]}return n[s]=i,t}}setData(t){this.state=t}getData(){return this.value}getElements(){return[...this.querySelectorAll("[data-key]")]}get value(){const t=this.getElements();for(const e of t)z.setPropertyValue(this.state,e.dataset.key,e.value);return this.state}reset(t={}){const e=this.getElements();this.state=t;for(const i of e)i.value="",i.state.edited&&(i.state.edited=!1,i.removeAttribute("edited"));return this.state}set value(t){if(typeof t!="object")return;const e=this.getElements();for(const i of e){const o=z.getPropertyValue(t,i.dataset.key);o!==q&&(i.value=o||"")}this.state=t}setValid(){const t=this.getElements();for(const e of t)e.setValid&&(e.state.edited=!1,e.removeAttribute("edited"),e.setValid())}input(t){this.change(t)}change(t){const e=d.match(t.target,"[data-key]");e&&z.setPropertyValue(this.state,e.dataset.key,e.value)}validate({decorate:t=!0}={}){this.getData();const e=this.getElements();let i=!0;for(const o of e){if(!o.setInvalid)continue;let n="";o.tagName==="TONIC-INPUT"?n="input":o.tagName==="TONIC-TEXTAREA"?n="textarea":o.tagName==="TONIC-SELECT"?n="select":(o.tagName==="TONIC-CHECKBOX"||o.tagName==="TONIC-TOGGLE")&&(n="checkbox");const s=n?o.querySelector(n):o;if(s.checkValidity){s.checkValidity();for(const a in s.validity){if(a==="valid"||a==="customError"||!s.validity[a]){t&&o.setValid();continue}t&&o.setInvalid(o.props.errorMessage||"Required"),i=!1}}}return i}connected(){if(!this.props.fill)return;const t=this.getElements();for(const e of t){const i=e.dataset.key;let o=z.getPropertyValue(this.state,i);o===q&&(o=""),e.value=o||e.value||""}}render(){return this.html`
      ${this.childNodes}
    `}}z.NON_EXISTANT=q;class xt extends d{defaults(){return{size:"25px",fill:"var(--tonic-primary, #333)"}}static stylesheet(){return`
      tonic-icon {
        vertical-align: middle;
      }

      tonic-icon svg path {
        fill: inherit;
      }
    `}styles(){const{size:t}=this.props;return{icon:{width:t,height:t}}}render(){const{symbolId:t,size:e,fill:i,theme:o,src:n,tabindex:s}=this.props;return s&&this.removeAttribute("tabindex"),o&&this.classList.add(`tonic--theme--${o}`),this.html`
      <svg ... ${{styles:"icon",tabindex:s}}>
        <use ... ${{href:`${n||""}#${t}`,"xlink:href":`${n||""}#${t}`,width:e,fill:i,color:i,height:e}}>
      </svg>
    `}}class wt extends d{constructor(){super(),this._modified=!1}defaults(){return{type:"text",placeholder:"",color:"var(--tonic-primary)",spellcheck:!1,ariaInvalid:!1,invalid:!1,radius:"3px",disabled:!1,position:"left"}}get form(){return this.querySelector("input").form}get value(){return this._modified?typeof this.state.value=="string"?this.state.value:this.props.value:typeof this.props.value=="string"?this.props.value:this.state.value}set value(t){this._modified=!0,this.querySelector("input").value=t,this.state.value=t}setValid(){const t=this.querySelector("input");t&&(t.setCustomValidity(""),t.removeAttribute("invalid"))}setInvalid(t){const e=this.querySelector("input");if(!e)return;this.setAttribute("edited",!0),this.state.edited=!0,t=t||this.props.errorMessage,e.setCustomValidity(t),window.requestAnimationFrame(()=>{e.setAttribute("invalid",t)});const i=this.querySelector(".tonic--invalid span");if(!i)return;i.textContent=t;const o=this.querySelector(".tonic--invalid");o.style.display="block"}input(t){this.setValid(),t.target.checkValidity()||this.setInvalid(this.props.errorMessage)}static stylesheet(){return`
      tonic-input .tonic--wrapper {
        position: relative;
      }

      tonic-input[symbol-id] .tonic--right tonic-icon,
      tonic-input[src] .tonic--right tonic-icon {
        right: 6px;
      }

      tonic-input[symbol-id] .tonic--right input,
      tonic-input[src] .tonic--right input {
        padding-right: 40px;
      }

      tonic-input[symbol-id] .tonic--left tonic-icon,
      tonic-input[src] .tonic--left tonic-icon {
        left: 6px;
      }

      tonic-input[symbol-id] .tonic--left input,
      tonic-input[src] .tonic--left input {
        padding-left: 40px;
      }

      tonic-input[symbol-id] tonic-icon,
      tonic-input[src] tonic-icon {
        position: absolute;
        bottom: 8px;
      }

      tonic-input label {
        color: var(--tonic-medium, #999);
        font-weight: 500;
        font: 12px/14px var(--tonic-subheader, 'Arial', sans-serif);
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-bottom: 10px;
        display: block;
        user-select: none;
        -webkit-user-select: none;
      }

      tonic-input input {
        color: var(--tonic-primary, #333);
        font: 14px var(--tonic-monospace, 'Andale Mono', monospace);
        padding: 8px;
        margin: 0;
        background-color: var(--tonic-input-background, var(--tonic-background, transparent));
        border: 1px solid var(--tonic-border, #ccc);
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      tonic-input input:focus {
        background-color: var(--tonic-input-background-focus, rgba(241, 241, 241, 0.75));
        outline: none;
      }

      tonic-input[edited] input[invalid]:focus,
      tonic-input[edited] input:invalid:focus,
      tonic-input[edited] input[invalid],
      tonic-input[edited] input:invalid {
        border-color: var(--tonic-error, #f66);
      }

      tonic-input[edited] input[invalid] ~ .tonic--invalid,
      tonic-input[edited] input:invalid ~ .tonic--invalid {
        transform: translate(-50%, 0);
        visibility: visible;
        opacity: 1;
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 1s ease 0s;
      }

      tonic-input input[disabled] {
        background-color: transparent;
      }

      tonic-input[label] .tonic--invalid {
        margin-bottom: -13px;
      }

      tonic-input .tonic--invalid {
        font-size: 14px;
        text-align: center;
        margin-bottom: 13px;
        position: absolute;
        bottom: 100%;
        left: 50%;
        width: fit-content;
        transform: translateY(-10px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s ease 1s;
        visibility: hidden;
        opacity: 0;
        z-index: 1;
      }

      tonic-input .tonic--invalid span {
        color: white;
        padding: 10px;
        background-color: var(--tonic-error, #f66);
        border-radius: 2px;
        position: relative;
        display: inline-block;
        margin: 0 auto;
      }

      tonic-input .tonic--invalid span:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid var(--tonic-error, #f66);
      }
    `}renderLabel(){return this.props.label?this.html`
      <label
        for="tonic--input_${this.props.id}"
      >${this.props.label}</label>
    `:""}renderIcon(){if(!this.props.src&&!this.props.symbolId)return"";const t={};return this.props.src?t.src=this.props.src:this.props.symbolId&&(t.symbolId=this.props.symbolId),this.props.color&&(t.color=this.props.color),this.props.fill&&(t.fill=this.props.fill),t.size="20px",this.html`
      <tonic-icon ...${t}>
      </tonic-icon>
    `}setFocus(t){const e=this.querySelector("input");e.focus();try{e.setSelectionRange(t,t)}catch(i){console.warn(i)}}setupEvents(){const t=this.querySelector("input"),e=o=>{this.dispatchEvent(new window.CustomEvent(o,{bubbles:!0}))};t.addEventListener("focus",o=>{this.state.focus=!0,e("focus")}),t.addEventListener("blur",o=>{this.state.rerendering||(this.state.focus=!1,e("blur"))}),t.addEventListener("input",o=>{this._modified=!0,this.state.edited=!0,this.setAttribute("edited",!0),this.state.value=o.target.value,this.state.pos=o.target.selectionStart});const i=this.state;i.focus&&this.setFocus(i.pos)}updated(){this.setupEvents(),setTimeout(()=>{this.props.invalid?this.setInvalid(this.props.errorMessage):this.setValid()},32),this.state.rerendering=!1}async reRender(...t){return this.state.rerendering=!0,super.reRender(...t)}connected(){this.updated()}styles(){const{width:t,height:e,radius:i,padding:o}=this.props;return{wrapper:{width:t},input:{width:"100%",height:e,borderRadius:i,padding:o}}}render(){const{ariaInvalid:t,ariaLabelledby:e,disabled:i,height:o,label:n,max:s,maxlength:a,min:c,minlength:u,name:l,pattern:b,placeholder:p,position:m,readonly:f,required:v,spellcheck:x,tabindex:g,theme:w,title:I,type:A}=this.props;e&&this.removeAttribute("ariaLabelledby"),o&&(this.style.height=o),l&&this.removeAttribute("name"),g&&this.removeAttribute("tabindex"),w&&this.classList.add(`tonic--theme--${w}`);const $=this.value,M=this.props.errorMessage||this.props.errorMessage||"Invalid",k=["tonic--wrapper"];m&&k.push(`tonic--${m}`);const S=this.elements.length?this.props.id+"_datalist":null,L={ariaInvalid:t,ariaLabel:n,"aria-labelledby":e,disabled:i==="true",max:s,maxlength:a,min:c,minlength:u,name:l,pattern:b,placeholder:p,position:m,readonly:f==="true",required:v==="true",spellcheck:x,tabindex:g,title:I,value:$,list:S};this.state.edited&&this.setAttribute("edited",!0);let N="";return S&&(N=this.html`
        <datalist id="${S}">
          ${this.elements}
        </datalist>
      `),this.html`
      <div class="${k.join(" ")}" styles="wrapper">
        ${this.renderLabel()}
        ${this.renderIcon()}

        <input ... ${{styles:"input",type:A,id:`tonic--input_${this.props.id}`,...L}}/>

        <div class="tonic--invalid">
          <span id="tonic--error-${this.props.id}">${M}</span>
        </div>

        ${N}
      </div>
    `}}class kt extends d{constructor(){super(),this.attachShadow({mode:"open"}),this.setAttribute("id",Math.random().toString(16).slice(2,-8))}stylesheet(){return`
      .outer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      .inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    `}render(){let t=this.props.timeout||"128";return t==="-1"&&(t="indefinite"),this.html`
      <div class="outer">
        <div class="inner">
          <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
          <path opacity="0.2" fill="var(--tonic-primary)" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
            s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
            c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
          <path fill="var(--tonic-primary)" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
            C22.32,8.481,24.301,9.057,26.013,10.047z">
            <animateTransform attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 20 20"
              to="360 20 20"
              dur="0.8s"
              repeatCount="${t}"/>
            </path>
          </svg>
        </div>
      </div>
    `}}class At extends tt{constructor(){super(),this.classList.add("tonic--panel")}defaults(){return{position:"right"}}stylesheet(){const{width:t,position:e}=this.props,i=[0,t];return e!=="right"&&(i[1]=`-${t}`),`
      .tonic--dialog.tonic--panel,
      .tonic--dialog.tonic--show.tonic--panel {
        left: unset;
        border-radius: 0;
        top: 0;
        width: ${t};
        bottom: 0;
        ${e}: 0;
        transform: translateX(${i[0]});
        animation-name: tonic--panel--show;
      }

      .tonic--dialog.tonic--hide.tonic--panel {
        opacity: 0;
        transform: translateX(${t});
        animation-name: tonic--panel--hide;
      }

      @keyframes tonic--panel--show {
        from {
          opacity: 0;
          transform: translateX(${i[1]});
        }

        to {
          opacity: 1;
          transform: translateX(${i[0]});
        }
      }

      @keyframes tonic--panel--hide {
        from {
          opacity: 1;
          transform: translateX(${i[0]});
        }

        to {
          opacity: 0;
          transform: translateX(${i[1]});
        }
      }
    `}}class $t extends d{constructor(){super();const t=this.getAttribute("for"),e=document.getElementById(t);e.addEventListener("click",i=>this.show(e))}defaults(t){return{width:"auto",height:"auto",padding:"15px",margin:10,position:"bottomleft"}}static stylesheet(){return`
      tonic-popover .tonic--overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        display: none;
        z-index: 0;
        background-color: rgba(0,0,0,0);
      }

      tonic-popover .tonic--popover {
        position: absolute;
        top: 30px;
        background: var(--tonic-window, #fff);
        border: 1px solid var(--tonic-border, #ccc);
        border-radius: 2px;
        visibility: hidden;
        z-index: -1;
        opacity: 0;
        -webkit-transform: scale(0.75);
        ms-transform: scale(0.75);
        transform: scale(0.75);
        transition: transform 0.1s ease-in-out, opacity 0s ease 0.1s, visibility 0s ease 0.1s, z-index 0s ease 0.1s;
      }

      tonic-popover .tonic--popover.tonic--show {
        box-shadow: 0px 30px 90px -20px rgba(0, 0, 0, 0.3);
        -webkit-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        visibility: visible;
        transition: transform 0.15s ease-in-out;
        opacity: 1;
        z-index: 1;
      }

      tonic-popover .tonic--show ~ .tonic--overlay {
        display: block;
        opacity: 1;
      }

      tonic-popover .tonic--popover--top {
        transform-origin: bottom center;
      }

      tonic-popover .tonic--popover--topleft {
        transform-origin: bottom left;
      }

      tonic-popover .tonic--popover--topright {
        transform-origin: bottom right;
      }

      tonic-popover .tonic--popover--bottom {
        transform-origin: top center;
      }

      tonic-popover .tonic--popover--bottomleft {
        transform-origin: top left;
      }

      tonic-popover .tonic--popover--bottomright {
        transform-origin: top right;
      }

    `}styles(){const{width:t,height:e,padding:i,margin:o,position:n}=this.props;return{popover:{width:t,height:e,padding:i,margin:o,position:n}}}show(t){const e=this.querySelector(".tonic--popover");let i=t.parentNode;for(;!(!i||i.tagName==="BODY"||window.getComputedStyle(i).overflow==="scroll");)i=i.parentNode;const o=parseInt(this.props.margin,10);let{top:n,left:s}=t.getBoundingClientRect(),a=n+i.scrollTop;switch(s-=i.offsetLeft,this.props.position){case"topleft":a-=e.offsetHeight+o;break;case"topright":a-=e.offsetHeight+o,s+=t.offsetWidth-e.offsetWidth;break;case"top":a-=e.offsetHeight+o,s+=t.offsetWidth/2-e.offsetWidth/2;break;case"bottomleft":a+=t.offsetHeight+o;break;case"bottomright":a+=t.offsetHeight+o,s+=t.offsetWidth-e.offsetWidth;break;case"bottom":a+=t.offsetHeight+o,s+=t.offsetWidth/2-e.offsetWidth/2;break}e.style.top=`${a}px`,e.style.left=`${s}px`,window.requestAnimationFrame(()=>{e.className=`tonic--popover tonic--show tonic--popover--${this.props.position}`;const c=new window.Event("show");this.dispatchEvent(c)})}hide(){const t=this.querySelector(".tonic--popover");t&&t.classList.remove("tonic--show")}connected(){if(!this.props.open)return;const t=this.getAttribute("for");this.show(document.getElementById(t))}click(t){if(d.match(t.target,".tonic--overlay"))return this.hide()}render(){const{theme:t}=this.props;return t&&this.classList.add(`tonic--theme--${t}`),this.html`
      <div class="tonic--popover" styles="popover">
        ${this.nodes}
      </div>
      <div class="tonic--overlay"></div>
    `}}class R extends d{get value(){return this.state.data||this.props.src}defaults(){return{src:R.svg.default(),size:"50px",radius:"5px"}}static stylesheet(){return`
      tonic-profile-image {
        display: inline-block;
      }

      tonic-profile-image .tonic--wrapper {
        position: relative;
        overflow: hidden;
      }

      tonic-profile-image .tonic--image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }

      tonic-profile-image .tonic--overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        transition: opacity 0.2s ease-in-out;
        visibility: hidden;
        opacity: 0;
        display: flex;
      }

      tonic-profile-image .tonic--overlay .tonic--icon {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
      }

      tonic-profile-image .tonic--overlay .tonic--icon svg {
        width: inherit;
        height: inherit;
      }

      tonic-profile-image .tonic--wrapper.tonic--editable:hover .tonic--overlay {
        visibility: visible;
        opacity: 1;
        cursor: pointer;
      }
    `}styles(){const{src:t,size:e,border:i,radius:o}=this.props;return{background:{backgroundImage:`url('${t}')`},hidden:{display:"none"},wrapper:{width:e,height:e,border:i,borderRadius:o}}}getPictureData(t,e){const i=new window.FileReader;i.onerror=o=>e(o),i.onload=o=>e(null,o.target.result),i.readAsDataURL(t)}click(t){if(this.props.editable){if(this.props.editable==="false")return;this.getElementsByTagName("input")[0].click()}}change(t){const i=this.getElementsByTagName("input")[0].files[0];if(t.data)return;t.stopPropagation();const{size:o,type:n,path:s,lastModifiedDate:a}=i;this.getPictureData(i,(c,u)=>{if(c){const p=new window.Event("error");p.message=c.message,this.dispatchEvent(p);return}const l=this.querySelector(".tonic--image");this.state.size=o,this.state.path=s,this.state.time=n,this.state.mtime=a,this.state.data=u,l.style.backgroundImage='url("'+u+'")';const b=new window.Event("change",{bubbles:!0});b.data=!0,this.dispatchEvent(b)})}render(){const{theme:t,editable:e}=this.props;t&&this.classList.add(`tonic--theme--${t}`);const i=["tonic--wrapper"];return e==="true"&&i.push("tonic--editable"),this.html`
      <div
        class="${i.join(" ")}"
        styles="wrapper">

        <div
          class="tonic--image"
          styles="background">
        </div>

        <input type="file" styles="hidden"/>

        <div class="tonic--overlay">
          <div class="tonic--icon">
            <svg>
              <use
                href="#edit"
                xlink:href="#edit"
                color="#fff"
                fill="#fff">
              </use>
            </svg>
          </div>
        </div>
      </div>
    `}}R.svg={};R.svg.toURL=r=>`data:image/svg+xml;base64,${window.btoa(r)}`;R.svg.default=()=>R.svg.toURL(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <rect fill="#F0F0F0" width="100" height="100"></rect>
    <circle fill="#D6D6D6" cx="49.3" cy="41.3" r="21.1"></circle>
    <path fill="#D6D6D6" d="M48.6,69.5c-18.1,0-33.1,13.2-36,30.5h72C81.8,82.7,66.7,69.5,48.6,69.5z"></path>
  </svg>
`);class Et extends d{set value(t){this.setProgress(t)}get value(){return typeof this.state.progress<"u"?this.state.progress:this.props.progress}defaults(){return{width:"280px",height:"15px",progress:0}}static stylesheet(){return`
      tonic-progress-bar {
        display: inline-block;
        user-select: none;
        -webkit-user-select: none;
      }

      tonic-progress-bar .tonic--wrapper {
        position: relative;
        background-color: var(--tonic-background, #fff);
      }

      tonic-progress-bar .tonic--wrapper .tonic--progress {
        background-color: var(--tonic-accent, #f66);
        width: 0%;
        height: 100%;
      }
    `}styles(){const t=this.state.progress||this.props.progress;return{wrapper:{width:this.props.width,height:this.props.height},progress:{width:t+"%",backgroundColor:this.props.color||"var(--tonic-accent, #f66)"}}}setProgress(t){this.state.progress=t,this.reRender()}render(){return this.props.theme&&this.classList.add(`tonic--theme--${this.props.theme}`),this.style.width=this.props.width,this.style.height=this.props.height,this.html`
      <div class="tonic--wrapper" styles="wrapper">
        <div class="tonic--progress" styles="progress"></div>
      </div>
    `}}class St extends d{defaults(){return{width:"250px",disabled:!1,min:"0",max:"100",value:"50"}}get value(){return this.state.value}set value(t){this.querySelector("input").value=t,this.setValue(t)}setValue(t){const e=this.props.min,i=this.props.max,o=this.querySelector("input");if(this.props.label){const n=this.querySelector("label");n.textContent=this.getLabelValue(t)}o.style.backgroundSize=(t-e)*100/(i-e)+"% 100%",this.state.value=t}input(t){this.setValue(t.target.value||this.props.value)}static stylesheet(){return`
      tonic-range  {
        position: relative;
        display: -webkit-flex;
        display: flex;
        height: 50px;
        padding: 20px 0;
      }

      tonic-range.tonic--no-label {
        height: 30px;
      }

      tonic-range label {
        font: 13px var(--tonic-subheader, 'Arial', sans-serif);
        letter-spacing: 1px;
        text-align: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
      }

      tonic-range input[type="range"] {
        margin: auto;
        padding: 0;
        width: 50%;
        height: 4px;
        background-color: var(--tonic-secondary, #fff);
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, var(--tonic-accent, #f66)), color-stop(100%, var(--tonic-accent, #f66)));
        background-image: -webkit-linear-gradient(var(--tonic-accent, #f66), var(--tonic-accent, #f66));
        background-image: -moz-linear-gradient(var(--tonic-accent, #f66), var(--tonic-accent, #f66));
        background-image: -o-linear-gradient(var(--tonic-accent, #f66), var(--tonic-accent, #f66));
        background-image: linear-gradient(var(--tonic-accent, #f66), var(--tonic-accent, #f66));
        background-size: 50% 100%;
        background-repeat: no-repeat;
        border-radius: 0;
        cursor: pointer;
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]:focus {
        outline-offset: 4px;
      }

      tonic-range input[type="range"]:disabled {
        background-image: -webkit-gradient(linear, 50% 0%, 50% 100%, color-stop(0%, var(--tonic-border, #ccc)), color-stop(100%, var(--tonic-border, #ccc)));
        background-image: -webkit-linear-gradient(var(--tonic-border, #ccc), var(--tonic-border, #ccc));
        background-image: -moz-linear-gradient(var(--tonic-border, #ccc), var(--tonic-border, #ccc));
        background-image: -o-linear-gradient(var(--tonic-border, #ccc), var(--tonic-border, #ccc));
        background-image: linear-gradient(var(--tonic-border, #ccc), var(--tonic-border, #ccc));
      }

      tonic-range input[type="range"]::-webkit-slider-runnable-track {
        box-shadow: none;
        border: none;
        background: transparent;
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]::-moz-range-track {
        box-shadow: none;
        border: none;
        background: transparent;
      }

      tonic-range input[type="range"]::-moz-focus-outer {
        border: 0;
      }

      tonic-range input[type="range"]::-webkit-slider-thumb {
        width: 18px;
        height: 18px;
        border: 0;
        background: var(--tonic-border);
        border-radius: 100%;
        box-shadow: 0 0 3px 0px rgba(0,0,0,0.25);
        -webkit-appearance: none;
      }

      tonic-range input[type="range"]::-moz-range-thumb {
        width: 18px;
        height: 18px;
        border: 0;
        background: var(--tonic-border);
        border-radius: 100%;
        box-shadow: 0 0 1px 0px rgba(0,0,0,0.1);
      }
    `}getLabelValue(t){return this.setLabel?this.setLabel(t):this.props.label?this.props.label.replace(/%\w/,t):t}renderLabel(){if(!this.props.label)return"";const t=this.props.value;return this.html`<label>${this.getLabelValue(t)}</label>`}styles(){const{width:t}=this.props;return{width:{width:t}}}connected(){this.setValue(this.state.value)}render(){const{width:t,height:e,disabled:i,theme:o,min:n,max:s,step:a,label:c,id:u,tabindex:l}=this.props;t&&(this.style.width=t),e&&(this.style.width=e),o&&this.classList.add(`tonic--theme--${o}`),c||this.classList.add("tonic--no-label"),l&&this.removeAttribute("tabindex");const b=this.props.value||this.state.value;return typeof this.state.value>"u"&&(this.state.value=b),this.html`
      ${this.renderLabel()}
      <div class="tonic--wrapper" styles="width">
        <input ... ${{type:"range",styles:"width",id:u,value:b,tabindex:l,step:a,min:n,max:s,disabled:i==="true"}}/>
      </div>
    `}}const Z=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],J=["January","February","March","April","May","June","July","August","September","October","November","December"];function T(r){return`0${r}`.slice(-2)}function j(r,t){const e=r.getDay(),i=r.getDate(),o=r.getMonth(),n=r.getFullYear(),s=r.getHours(),a=r.getMinutes(),c=r.getSeconds();return t.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,u=>{let l;switch(u[1]){case"%":return"%";case"a":return Z[e].slice(0,3);case"A":return Z[e];case"b":return J[o].slice(0,3);case"B":return J[o];case"c":return r.toString();case"d":return T(i);case"e":return String(i);case"H":return T(s);case"I":return T(j(r,"%l"));case"l":return String(s===0||s===12?12:(s+12)%12);case"m":return T(o+1);case"M":return T(a);case"p":return s>11?"PM":"AM";case"P":return s>11?"pm":"am";case"S":return T(c);case"w":return String(e);case"y":return T(n%100);case"Y":return String(n);case"Z":return l=r.toString().match(/\((\w+)\)$/),l?l[1]:"";case"z":return l=r.toString().match(/\w([+-]\d\d\d\d) /),l?l[1]:""}return""})}function W(r){let t;return function(){if(t)return t;if("Intl"in window)try{return t=new Intl.DateTimeFormat(void 0,r),t}catch(e){if(!(e instanceof RangeError))throw e}}}let D=null;const Lt=W({day:"numeric",month:"short"});function Ct(){if(D!==null)return D;const r=Lt();return r?(D=!!r.format(new Date(0)).match(/^\d/),D):!1}let O=null;const _t=W({day:"numeric",month:"short",year:"numeric"});function It(){if(O!==null)return O;const r=_t();return r?(O=!!r.format(new Date(0)).match(/\d,/),O):!0}function Mt(r){return new Date().getUTCFullYear()===r.getUTCFullYear()}function zt(r,t){if("Intl"in window&&"RelativeTimeFormat"in window.Intl)try{return new Intl.RelativeTimeFormat(r,t)}catch(e){if(!(e instanceof RangeError))throw e}}function Tt(r){const t=r.closest("[lang]");return t instanceof window.HTMLElement&&t.lang?t.lang:"default"}class Rt{constructor(t,e){this.date=t,this.locale=e}toString(){const t=this.timeElapsed();if(t)return t;const e=this.timeAhead();return e||`on ${this.formatDate()}`}get value(){return this.date}timeElapsed({date:t=this.date,locale:e=this.locale}={}){const i=new Date().getTime()-t.getTime(),o=Math.round(i/1e3),n=Math.round(o/60),s=Math.round(n/60),a=Math.round(s/24);return i>=0&&a<30?this.timeAgoFromMs({ms:i,date:t,locale:e}):null}timeAhead({date:t=this.date,locale:e=this.locale}={}){const i=t.getTime()-new Date().getTime(),o=Math.round(i/1e3),n=Math.round(o/60),s=Math.round(n/60),a=Math.round(s/24);return i>=0&&a<30?this.timeUntil({date:t,locale:e}):null}timeAgo({date:t=this.date,locale:e=this.locale}={}){const i=new Date().getTime()-t.getTime();return this.timeAgoFromMs({ms:i,date:t,locale:e})}timeAgoFromMs({ms:t,locale:e=this.locale}={}){const i=Math.round(t/1e3),o=Math.round(i/60),n=Math.round(o/60),s=Math.round(n/24),a=Math.round(s/30),c=Math.round(a/12);return t<0||i<10?y(e,0,"second"):i<45?y(e,-i,"second"):i<90||o<45?y(e,-o,"minute"):o<90||n<24?y(e,-n,"hour"):n<36||s<30?y(e,-s,"day"):a<12?y(e,-a,"month"):(a<18,y(e,-c,"year"))}timeUntil({date:t=this.date,locale:e=this.locale}={}){const i=t.getTime()-new Date().getTime();return this.timeUntilFromMs({ms:i,locale:e})}timeUntilFromMs({ms:t,locale:e=this.locale}={}){const i=Math.round(t/1e3),o=Math.round(i/60),n=Math.round(o/60),s=Math.round(n/24),a=Math.round(s/30),c=Math.round(a/12);return a>=18||a>=12?y(e,c,"year"):s>=45||s>=30?y(e,a,"month"):n>=36||n>=24?y(e,s,"day"):o>=90||o>=45?y(e,n,"hour"):i>=90||i>=45?y(e,o,"minute"):i>=10?y(e,i,"second"):y(e,0,"second")}formatDate({date:t=this.date}={}){let e=Ct()?"%e %b":"%b %e";return Mt(t)||(e+=It()?", %Y":" %Y"),j(t,e)}formatTime({date:t=this.date}={}){const e=Vt();return e?e.format(t):j(t,"%l:%M%P")}}function y(r,t,e){const i=zt(r,{numeric:"auto"});return i?i.format(t,e):Nt(t,e)}function Nt(r,t){if(r===0)switch(t){case"year":case"quarter":case"month":case"week":return`this ${t}`;case"day":return"today";case"hour":case"minute":return`in 0 ${t}s`;case"second":return"now"}else if(r===1)switch(t){case"year":case"quarter":case"month":case"week":return`next ${t}`;case"day":return"tomorrow";case"hour":case"minute":case"second":return`in 1 ${t}`}else if(r===-1)switch(t){case"year":case"quarter":case"month":case"week":return`last ${t}`;case"day":return"yesterday";case"hour":case"minute":case"second":return`1 ${t} ago`}else if(r>1)switch(t){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return`in ${r} ${t}s`}else if(r<-1)switch(t){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return`${-r} ${t}s ago`}throw new RangeError(`Invalid unit argument for format() '${t}'`)}class qt extends d{render(){let t=this.props.date||"";const e=this.props.locale||Tt(this);return typeof t=="string"&&(t=this.props.date=new Date(this.props.date)),t.toString()==="Invalid Date"&&(t=new Date),this.props.refresh&&(clearInterval(this.interval),this.interval=setInterval(()=>{this.reRender(o=>({...o,date:t}))},+this.props.refresh)),new Rt(t,e).toString()}}const Vt=W({hour:"numeric",minute:"2-digit"});class E extends d{constructor(){if(super(),E.patched)return;E.patched=!0;const t=function(e){const i=window.history[e];return function(...o){const n=i.call(this,...o);return window.dispatchEvent(new window.Event(e.toLowerCase())),E.route(),n}};window.addEventListener("popstate",e=>E.route()),window.history.pushState=t("pushState"),window.history.replaceState=t("replaceState")}static route(t,e){t=t||[...document.getElementsByTagName("tonic-router")];const i=[];let o=null,n=!1;E.props={};for(const s of t){const a=s.getAttribute("path");if(s.removeAttribute("match"),!a){o=s,o.reRender&&o.reRender();continue}const u=E.matcher(a,i).exec(window.location.pathname);u?(s.setAttribute("match",!0),n=!0,u.slice(1).forEach((l,b)=>{E.props[i[b].name]=l})):s.removeAttribute("match"),e||s.reRender&&s.reRender()}!e&&!n&&o&&(o.setAttribute("match",!0),o.reRender&&o.reRender())}willConnect(){const t=this.getAttribute("id");this.id=t||this.getAttribute("path"),this.template=document.createElement("template"),this.template.innerHTML=this.innerHTML,E.route([this],!0)}updated(){this.hasAttribute("match")&&this.dispatchEvent(new window.Event("match"))}render(){return this.hasAttribute("match")?(this.state=E.props,this.template.content):""}}E.matcher=(()=>{const r="/",t="./",e=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");function i(p,m){const f=[];let v=0,x=0,g="";const w=m&&m.delimiter||r,I=m&&m.delimiters||t;let A=!1,$;for(;($=e.exec(p))!==null;){const M=$[0],k=$[1],S=$.index;if(g+=p.slice(x,S),x=S+M.length,k){g+=k[1],A=!0;continue}let L="";const N=p[x],nt=$[2],st=$[3],rt=$[4],V=$[5];if(!A&&g.length){const F=g.length-1;I.indexOf(g[F])>-1&&(L=g[F],g=g.slice(0,F))}g&&(f.push(g),g="",A=!1);const at=L!==""&&N!==void 0&&N!==L,ct=V==="+"||V==="*",lt=V==="?"||V==="*",U=L||w,G=st||rt;f.push({name:nt||v++,prefix:L,delimiter:U,optional:lt,repeat:ct,partial:at,pattern:G?n(G):"[^"+o(U)+"]+?"})}return(g||x<p.length)&&f.push(g+p.substr(x)),f}function o(p){return p.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function n(p){return p.replace(/([=!:$/()])/g,"\\$1")}function s(p){return p&&p.sensitive?"":"i"}function a(p,m){if(!m)return p;const f=p.source.match(/\((?!\?)/g);if(f)for(let v=0;v<f.length;v++)m.push({name:v,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,pattern:null});return p}function c(p,m,f){const v=[];for(let x=0;x<p.length;x++)v.push(b(p[x],m,f).source);return new RegExp("(?:"+v.join("|")+")",s(f))}function u(p,m,f){return l(i(p,f),m,f)}function l(p,m,f){f=f||{};const v=f.strict,x=f.end!==!1,g=o(f.delimiter||r),w=f.delimiters||t,I=[].concat(f.endsWith||[]).map(o).concat("$").join("|");let A="",$=p.length===0;for(let M=0;M<p.length;M++){const k=p[M];if(typeof k=="string")A+=o(k),$=M===p.length-1&&w.indexOf(k[k.length-1])>-1;else{const S=o(k.prefix),L=k.repeat?"(?:"+k.pattern+")(?:"+S+"(?:"+k.pattern+"))*":k.pattern;m&&m.push(k),k.optional?k.partial?A+=S+"("+L+")?":A+="(?:"+S+"("+L+"))?":A+=S+"("+L+")"}}return x?(v||(A+="(?:"+g+")?"),A+=I==="$"?"$":"(?="+I+")"):(v||(A+="(?:"+g+"(?="+I+"))?"),$||(A+="(?="+g+"|"+I+")")),new RegExp("^"+A,s(f))}function b(p,m,f){return p instanceof RegExp?a(p,m):Array.isArray(p)?c(p,m,f):u(p,m,f)}return b})();class Dt extends d{defaults(){return{disabled:!1,invalid:!1,width:"250px",radius:"2px"}}static stylesheet(){return`
      tonic-select .tonic--wrapper {
        position: relative;
      }

      tonic-select .tonic--wrapper:before {
        content: '';
        width: 14px;
        height: 14px;
        opacity: 0;
        z-index: 1;
      }

      tonic-select.tonic--loading {
        pointer-events: none;
        transition: background 0.3s ease;
      }

      tonic-select.tonic--loading select {
        color: transparent;
        background-color: var(--tonic-window, #fff);
        border-color: var(--tonic-border, #ccc);
      }

      tonic-select .tonic--select {
        position: relative;
        border: 1px solid var(--tonic-border, #ccc);
        border-radius: 2px;
        background-color: var(--tonic-input-background, var(--tonic-background, #f66));
      }

      tonic-select.tonic--loading .tonic--wrapper:before {
        margin-top: -8px;
        margin-left: -8px;
        display: block;
        position: absolute;
        bottom: 10px;
        left: 50%;
        opacity: 1;
        transform: translateX(-50%);
        border: 2px solid var(--tonic-medium, #999);
        border-radius: 50%;
        border-top-color: transparent;
        animation: spin 1s linear 0s infinite;
        transition: opacity 0.3s ease;
      }

      tonic-select .tonic--arrow {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        width: 38px;
        z-index: 1;
      }

      tonic-select .tonic--arrow:before {
        content: "";
        width: 6px;
        height: 6px;
        position: absolute;
        top: 46%;
        left: 50%;
        -webkit-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        -moz-transform: translateY(-50%) translateX(-50%) rotate(135deg);
        transform: translateY(-50%) translateX(-50%) rotate(135deg);
        border-top: 1px solid var(--tonic-primary, #333);
        border-right: 1px solid var(--tonic-primary, #333);
      }

      tonic-select select {
        color: var(--tonic-primary, #333);
        font: 14px var(--tonic-monospace, 'Andale Mono', monospace);
        background-color: transparent;
        border: none;
        width: 100%;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        position: relative;
        z-index: 2;
        margin: 0;
        outline: none;
      }

      tonic-select select:focus ~ .tonic--background {
        content: " ";
        position: absolute;
        top: 0; left: 0; right: 0; bottom: 0;
        background-color: var(--tonic-input-background-focus, rgba(241, 241, 241, 0.75));
      }

      tonic-select[edited] select[invalid],
      tonic-select[edited] select:invalid,
      tonic-select[edited] select[invalid]:focus,
      tonic-select[edited] select:invalid:focus {
        border-color: var(--tonic-error, #f66);
      }

      tonic-select[edited] select[invalid] ~ .tonic--invalid,
      tonic-select[edited] select:invalid ~ .tonic--invalid {
        transform: translate(-50%, 0);
        visibility: visible;
        opacity: 1;
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 1s ease 0s;
      }

      tonic-select[label] .tonic--invalid {
        margin-bottom: -13px;
      }

      tonic-select .tonic--invalid {
        font-size: 14px;
        text-align: center;
        margin-bottom: 13px;
        position: absolute;
        bottom: 100%;
        left: 50%;
        width: fit-content;
        transform: translateY(-10px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s ease 1s;
        visibility: hidden;
        opacity: 0;
      }

      tonic-select .tonic--invalid span {
        color: white;
        padding: 10px;
        background-color: var(--tonic-error, #f66);
        border-radius: 2px;
        position: relative;
        display: inline-block;
        margin: 0 auto;
      }

      tonic-select .tonic--invalid span:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid var(--tonic-error, #f66);
      }

      tonic-select select:not([multiple]) {
        padding: 8px 30px 8px 8px;
      }

      tonic-select select[disabled] {
        background-color: transparent;
      }

      tonic-select label {
        color: var(--tonic-medium, #999);
        font: 12px/14px var(--tonic-subheader, 'Arial', sans-serif);
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-bottom: 10px;
        display: block;
      }

      tonic-select[multiple] select {
        background-image: none !important;
      }

      tonic-select[multiple] select option {
        padding: 6px 8px;
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    `}setValid(){const t=this.querySelector("select");if(!t)return;t.setCustomValidity(""),t.removeAttribute("invalid");const e=this.querySelector(".tonic--invalid");e&&Object.assign(e.style,{visibility:"",display:"",opacity:""})}setInvalid(t){const e=this.querySelector("select");if(!e)return;this.setAttribute("edited",!0),t=t||this.props.errorMessage,e.setCustomValidity(t),window.requestAnimationFrame(()=>{e.setAttribute("invalid",t)});const i=this.querySelector(".tonic--invalid span");if(!i)return;i.textContent=t;const o=this.querySelector(".tonic--invalid");o&&Object.assign(o.style,{visibility:"visible",display:"block",opacity:1})}get value(){const t=this.querySelector("select");return this.props.multiple==="true"?[...t.options].filter(i=>i.selected).map(i=>i.getAttribute("value")):t.value}selectOptions(t){[...this.querySelector("select").options].forEach(o=>{o.selected=t.findIndex(n=>n===o.value)>-1})}set value(t){const e=this.props.multiple==="true"&&Array.isArray(t),i=this.root.querySelector("select");e?this.selectOptions(t):t?i.value=t:(t=i.selectedIndex,i.selectedIndex=0)}get option(){const t=this.querySelector("select");return t.options[t.selectedIndex]}get selectedIndex(){return this.querySelector("select").selectedIndex}set selectedIndex(t){const e=this.querySelector("select");e.selectedIndex=t}loading(t){const e=t?"add":"remove";this.classList[e]("tonic--loading")}renderLabel(){return this.props.label?this.html`
      <label
        for="tonic--select_${this.props.id}"
      >${this.props.label}</label>
    `:""}styles(){const{padding:t,radius:e}=this.props;return{wrapper:{width:"100%"},select:{borderRadius:e,padding:t}}}setupEvents(){this.querySelector("select").addEventListener("change",e=>{this.setAttribute("edited",!0)})}updated(){this.setupEvents()}connected(){const t=this.props.value;if(Array.isArray(t))this.selectOptions(t);else if(t){const e=this.querySelector("option[selected]");e&&e.removeAttribute("selected");const i=this.querySelector(`option[value="${t}"]`);i&&i.setAttribute("selected",!0)}}render(){const{width:t,height:e,disabled:i,required:o,multiple:n,theme:s,name:a,size:c,tabindex:u}=this.props;t&&(this.style.width=t),e&&(this.style.width=e),s&&this.classList.add(`tonic--theme--${s}`),a&&this.removeAttribute("name"),u&&this.removeAttribute("tabindex");const l=this.props.errorMessage||this.props.errormessage||"Invalid";return this.html`
      <div class="tonic--wrapper" styles="wrapper">
        ${this.renderLabel()}
        <div class="tonic--select">
          <select ... ${{styles:"select",width:"100%",height:"100%",disabled:i==="true",multiple:n==="true",name:a,tabindex:u,required:o,size:c,id:`tonic--select_${this.props.id}`}}>
            ${this.childNodes}
          </select>
          <div class="tonic--arrow"></div>
          <div class="tonic--background"></div>
        </div>

        <div class="tonic--invalid">
          <span id="tonic--error-${this.props.id}">${l}</span>
        </div>
      </div>
    `}}class Ot extends d{static stylesheet(){return`
      tonic-sprite svg {
        visibility: hidden;
        height: 0;
      }
    `}render(){return this.html`
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">

        <symbol id="close" viewBox="0 0 100 100">
          <title>Close</title>
          <desc>Close Icon</desc>
          <path fill="currentColor" d="M70.7,22.6l-3.5-3.5c-0.1-0.1-0.3-0.1-0.4,0L50,45.9L23.2,19.1c-0.1-0.1-0.3-0.1-0.4,0l-3.5,3.5c-0.1,0.1-0.1,0.3,0,0.4
            l26.8,26.8L19.3,76.6c-0.1,0.1-0.1,0.3,0,0.4l3.5,3.5c0,0,0.1,0.1,0.2,0.1s0.1,0,0.2-0.1L50,53.6l25.9,25.9c0.1,0.1,0.3,0.1,0.4,0
            l3.5-3.5c0.1-0.1,0.1-0.3,0-0.4L53.9,49.8l26.8-26.8C80.8,22.8,80.8,22.7,80.7,22.6z"/>
        </symbol>

        <symbol id="danger" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.1,6.7C26.3,6.7,6.9,26.2,6.9,50s19.4,43.2,43.2,43.2c23.8,0,43.2-19.5,43.2-43.3C93.3,26.1,74,6.7,50.1,6.7z M53.9,76.4h-7.6V68h7.6V76.4z M53.9,60.5h-7.6V25.6h7.6V60.5z"/>
        </symbol>

        <symbol id="warning" viewBox="0 0 100 100">
          <path fill="currentColor" d="M98.6,86.6l-46-79.7c-1.2-2-4-2-5.2,0l-46,79.7c-1.2,2,0.3,4.5,2.6,4.5h92C98.3,91.1,99.8,88.6,98.6,86.6z M53.9,80.4h-7.6V72h7.6V80.4z M53.9,64.5h-7.6V29.6h7.6V64.5z"/>
        </symbol>

        <symbol id="success" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.1,6.7C26.3,6.7,6.9,26.2,6.9,50s19.4,43.2,43.2,43.2c23.8,0,43.2-19.5,43.2-43.3C93.3,26.1,74,6.7,50.1,6.7z M43.4,71.5L22,50.1l4.8-4.8L43.4,62l28.5-28.5l4.8,4.8L43.4,71.5z"/>
        </symbol>

        <symbol id="info" viewBox="0 0 100 100">
          <path fill="currentColor" d="M50.1,6.7C26.3,6.7,6.9,26.2,6.9,50s19.4,43.2,43.2,43.2c23.8,0,43.2-19.5,43.2-43.3C93.3,26.1,74,6.7,50.1,6.7z M54.1,75.5h-8.1v-7.8h8.1V75.5z M64.1,47.6c-0.8,1.1-2.4,2.7-4.8,4.5L57,54c-1.4,1.1-2.3,2.3-2.7,3.7c-0.3,0.8-0.4,2-0.4,3.6h-8c0.1-3.4,0.5-5.8,1-7.1c0.5-1.3,2-2.9,4.3-4.7l2.4-1.9c0.8-0.6,1.5-1.3,2-2.1c0.9-1.3,1.4-2.8,1.4-4.3c0-1.8-0.5-3.4-1.6-4.9c-1.1-1.5-3-2.3-5.8-2.3c-2.7,0-4.7,0.9-5.9,2.8c-1,1.6-1.6,3.3-1.7,5.1h-8.6c0.4-5.9,2.5-10.1,6.4-12.6l0,0c2.5-1.6,5.7-2.5,9.4-2.5c4.9,0,9,1.2,12.2,3.5c3.2,2.3,4.8,5.7,4.8,10.3C66.2,43.4,65.5,45.7,64.1,47.6z"/>
        </symbol>

        <symbol id="profileimage" viewBox="0 0 100 100">
          <rect fill="#F0F0F0" width="100" height="100"></rect>
          <circle fill="#D6D6D6" cx="49.3" cy="41.3" r="21.1"></circle>
          <path fill="#D6D6D6" d="M48.6,69.5c-18.1,0-33.1,13.2-36,30.5h72C81.8,82.7,66.7,69.5,48.6,69.5z"></path>
        </symbol>

        <symbol id="edit" viewBox="0 0 100 100">
          <path fill="currentColor" d="M79.8,32.8L67.5,20.5c-0.2-0.2-0.5-0.2-0.7,0L25.2,62.1c-0.1,0.1-0.1,0.1-0.1,0.2L20.8,79c0,0.2,0,0.4,0.1,0.5c0.1,0.1,0.2,0.1,0.4,0.1c0,0,0.1,0,0.1,0l16.6-4.4c0.1,0,0.2-0.1,0.2-0.1l41.6-41.6C79.9,33.3,79.9,33,79.8,32.8z M67.1,25.8l7.3,7.3L36.9,70.7l-7.3-7.3L67.1,25.8z M33,72.4l-6.8,1.8l1.8-6.9L33,72.4z"/>
        </symbol>

        <symbol id="checked" viewBox="0 0 100 100">
          <path fill="currentColor" d="M79.7,1H21.3C10.4,1,1.5,9.9,1.5,20.8v58.4C1.5,90.1,10.4,99,21.3,99h58.4c10.9,0,19.8-8.9,19.8-19.8V20.8C99.5,9.9,90.6,1,79.7,1z M93.3,79.3c0,7.5-6.1,13.6-13.6,13.6H21.3c-7.5,0-13.6-6.1-13.6-13.6V20.9c0-7.5,6.1-13.6,13.6-13.6V7.2h58.4c7.5,0,13.6,6.1,13.6,13.6V79.3z"/>
          <polygon points="44,61.7 23.4,41.1 17.5,47 44,73.5 85.1,32.4 79.2,26.5 "/>
        </symbol>

        <symbol id="download" viewBox="0 0 100 100">
          <path fill="currentColor" d="M49.5,64.2c0.1,0.1,0.2,0.1,0.4,0.1s0.3-0.1,0.4-0.1l12.4-12.4c0.1-0.1,0.1-0.2,0.1-0.4s-0.1-0.3-0.1-0.4l-2.1-2.1
            c-0.2-0.2-0.5-0.2-0.7,0l-7.9,7.9V27c0-0.3-0.2-0.5-0.5-0.5h-3c-0.3,0-0.5,0.2-0.5,0.5v29.8L40,48.9c-0.1-0.1-0.2-0.1-0.4-0.1
            s-0.3,0.1-0.4,0.1l-2.1,2.1c-0.2,0.2-0.2,0.5,0,0.7L49.5,64.2z"/>
          <path fill="currentColor" d="M68.9,69h-38c-0.3,0-0.5,0.2-0.5,0.5v3c0,0.3,0.2,0.5,0.5,0.5h38c0.3,0,0.5-0.2,0.5-0.5v-3C69.4,69.2,69.2,69,68.9,69z"/>
        </symbol>

        <symbol id="unchecked" viewBox="0 0 100 100">
          <path fill="currentColor" d="M79.7,99H21.3C10.4,99,1.5,90.1,1.5,79.2V20.8C1.5,9.9,10.4,1,21.3,1h58.4c10.9,0,19.8,8.9,19.8,19.8v58.4C99.5,90.1,90.6,99,79.7,99z M21.3,7.3c-7.5,0-13.6,6.1-13.6,13.6v58.4c0,7.5,6.1,13.6,13.6,13.6h58.4c7.5,0,13.6-6.1,13.6-13.6V20.8c0-7.5-6.1-13.6-13.6-13.6H21.3V7.3z"/>
        </symbol>

      </svg>
    `}}class et extends d{render(){return this.props.width&&(this.style.width=this.props.width),this.html`
      ${this.elements}
    `}}class it extends d{render(){return this.props.height&&(this.style.height=this.props.height),this.html`
      ${this.elements}
    `}}class Ft extends et{}class Pt extends it{}class Yt extends d{constructor(){super(),this.left=null,this.right=null,this.top=null,this.bottom=null,this.handleId=`tonic--handle-${Math.random().toString().slice(2)}`,this.state.meta={}}static stylesheet(){return`
      tonic-split {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      }

      tonic-split > tonic-split-top,
      tonic-split > tonic-split-bottom,
      tonic-split > tonic-split-left,
      tonic-split > tonic-split-right {
        position: absolute;
        overflow: hidden;
      }

      tonic-split > tonic-split-left,
      tonic-split > tonic-split-right {
        top: 0;
        bottom: 0;
      }

      tonic-split > tonic-split-left {
        left: 0;
        right: unset;
        width: 60%;
      }

      tonic-split > tonic-split-right {
        right: 0;
        left: unset;
        width: 40%;
      }

      tonic-split > tonic-split-top,
      tonic-split > tonic-split-bottom {
        left: 0;
        height: 50%;
        right: 0;
      }

      tonic-split > tonic-split-bottom {
        bottom: 0;
        top: unset;
      }

      tonic-split > tonic-split-top {
        top: 0;
        bottom: unset;
        z-index: 4;
      }

      tonic-split > tonic-split-right {
        right: 0;
        left: unset;
        width: 40%;
      }

      tonic-split .tonic--split-handle {
        position: absolute;
        z-index: 1;
        user-select: none;
        -webkit-user-select: none;
        background-color: transparent;
        transition: background .1s ease;
      }

      #split-query > div {
        z-index: 101;
        margin-top: -5px;
      }

      tonic-split .tonic--split-vertical {
        top: 0;
        bottom: 0;
        left: 60%;
        width: 5px;
        border-left: 1px solid var(--tonic-border);
        cursor: ew-resize;
      }

      tonic-split .tonic--split-horizontal {
        left: 0;
        right: 0;
        height: 5px;
        top: 50%;
        border-bottom: 1px solid var(--tonic-border);
        cursor: ns-resize;
      }

      tonic-split[dragging] > .tonic--split-handle,
      tonic-split .tonic--split-handle:hover {
        background: var(--tonic-accent);
      }

      tonic-split[dragging],
      tonic-split[dragging] * {
        cursor: -webkit-grabbing;
        cursor: -moz-grabbing;
        cursor: grabbing;
      }

      tonic-split[dragging] * {
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
      }
    `}start(){this.dragging=!0,this.setAttribute("dragging",!0)}cancel(){this.dragging=!1,this.removeAttribute("dragging")}willConnect(){this.updated()}hide(t){this[t].hidden||this.toggle(t,!1)}show(t){this[t].hidden&&this.toggle(t,!0)}toggle(t,e){const{meta:i}=this.state;typeof e=="boolean"&&e===!1&&delete i[t];const o=i[t];let n="",s="";if(this.props.type==="vertical"?(n=t==="left"?"right":"left",s="width"):(n=t==="top"?"bottom":"top",s="height"),!o&&!e){i[t]={[t]:this[t].style[s],[t+"visibility"]:this[t].style.visibility,[n]:this[n].style[s],[n+"visibility"]:this[n].style.visibility,handle:this.handle.style.display},this[t].style[s]=0,this[t].style.visibility="hidden",this[n].style[s]="100%",this[n].style.visibility="inherit",this.handle.style.display="none";return}o&&(this[t].style[s]=o[t],this[t].style.visibility=o[t+"visibility"],this[n].style[s]=o[n],this[n].style.visibility=o[n+"visibility"],this.handle.style.display=o.handle,delete i[t])}connected(){this.handle=this.querySelector(`#${this.handleId}`),this.props.type==="vertical"?(this.left=this.elements[0],this.right=this.elements[1],this.handle.style.left=this.left.getAttribute("width")):(this.top=this.elements[0],this.bottom=this.elements[1],this.handle.style.top=this.top.getAttribute("height"))}afterResize(){clearTimeout(this.timeout),this.timeout=setTimeout(()=>{this.dispatchEvent(new window.CustomEvent("resize",{bubbles:!0}))},64)}updated(){this.cancel()}disconnected(){this.handle=null,this.left=null,this.right=null,this.top=null,this.bottom=null}mousemove(t){if(!this.dragging)return;const{x:e,y:i}=this.getBoundingClientRect(),o=this.offsetWidth,n=this.offsetHeight;this.lastX=t.clientX+1,this.lastY=t.clientY-1;const s=parseInt(this.props.max,10)||25,a=parseInt(this.props.min,10)||25;if(this.props.type==="vertical"){this.left=this.elements[0],this.right=this.elements[1];let l=t.clientX-e;l>=o-s&&(l=o-s),l<=a&&(l=a);const b=l/o*100;this.left.style.width=b+"%",this.handle.style.left=b+"%",this.right.style.width=100-b+"%",this.afterResize();return}this.top=this.elements[0],this.bottom=this.elements[1];let c=t.clientY-i;c>=n-s&&(c=n-s),c<=a&&(c=a);const u=c/n*100;u<=100-5&&(this.top.style.height=u+"%",this.handle.style.top=u+"%",this.bottom.style.height=100-u+"%",this.afterResize())}mouseenter(t){t.buttons===0&&this.cancel()}mouseleave(t){t.buttons===0&&this.cancel()}mousedown(t){const e=d.match(t.target,".tonic--split-handle");e&&e.parentElement===this&&(this.handle=e,this.start())}mouseup(t){this.cancel()}render(){const t=["tonic--split-handle",`tonic--split-${this.props.type}`].join(" ");return this.html`
      ${this.elements[0]}

      <div class="${t}" id="${this.handleId}">
      </div>

      ${this.elements[1]}
    `}}const K=window.CustomEvent;class jt extends d{constructor(t){super(t),this._setVisibilitySynchronously=!1,this.panels={}}static stylesheet(){return`
      tonic-tabs .tonic--tab {
        -webkit-appearance: none;
        -webkit-user-select: none;
        user-select: none;
      }

      tonic-tab a:focus {
        outline: none;
        background-color: var(--tonic-input-background);
      }
    `}get value(){const t=this.querySelector('[aria-selected="true"]');if(t)return t.parentNode.id}set selected(t){const e=document.getElementById(t);e&&this.setVisibility(e.id,e.getAttribute("for"))}get selected(){return this.value}willConnect(){this.panels=this.panels||{}}async setVisibility(t,e){const i=this.props.renderAll==="true",o=this.props.detatchOnHide,n=this.querySelectorAll("tonic-tab");for(const s of n){const a=s.getAttribute("for"),c=s.querySelector("a");if(!a)throw new Error(`No "for" attribute found for tab id "${s.id}".`);const u=this.panels[a];let l=document.getElementById(a);if(!l&&u&&(l=u.node),!l||!c){if(this._setVisibilitySynchronously)return setTimeout(()=>this.setVisibility(t,e));throw new Error(`No tonic-panel found that matches the id (${a})`)}s.id===t||a===e?(l.removeAttribute("hidden"),s.id===t?c.setAttribute("aria-selected","true"):c.setAttribute("aria-selected","false"),l.visible||(l.visible=!0,l.parentElement&&l.reRender&&o&&await l.reRender()),!l.parentElement&&o&&(u.parent.appendChild(l),l.preventRenderOnReconnect&&l.reRender&&l.children.length===0&&await l.reRender()),this.state.selected=t,this._setVisibilitySynchronously||this.dispatchEvent(new K("tabvisible",{detail:{id:t},bubbles:!0}))):(!l.visible&&i&&o&&(l.visible=!0,l.parentElement&&l.reRender&&await l.reRender()),l.setAttribute("hidden",""),o&&l.parentElement&&!i&&(this.panels[l.id]={parent:l.parentElement,node:l},l.remove()),c&&c.setAttribute("aria-selected","false"),this._setVisibilitySynchronously||this.dispatchEvent(new K("tabhidden",{detail:{id:t},bubbles:!0})))}}click(t){const e=d.match(t.target,".tonic--tab");e&&(t.preventDefault(),this.setVisibility(e.parentNode.id,e.getAttribute("for")))}keydown(t){const e=[...this.querySelectorAll(".tonic--tab")];switch(t.code){case"ArrowLeft":case"ArrowRight":{const i=e.indexOf(t.target),o=t.code==="ArrowLeft"?-1:1,n=e.length,s=(i+n+o)%n;e[s].focus(),t.preventDefault();break}case"Space":{const i=d.match(t.target,".tonic--tab:focus");if(!i)return;t.preventDefault();const o=i.parentNode.getAttribute("id");this.setVisibility(o,i.getAttribute("for"));break}}}connected(){const t=this.state.selected||this.props.selected;if(!t)throw new Error("missing selected property.");this._setVisibilitySynchronously=!0,this.setVisibility(t),this._setVisibilitySynchronously=!1}render(){return this.setAttribute("role","tablist"),this.html`${this.childNodes}`}}class Ht extends d{static stylesheet(){return`
      tonic-tab-panel {
        display: block;
      }

      tonic-tab-panel[hidden] {
        display: none;
      }
    `}constructor(t){super(t),this.visible=this.visible||!1,this.__originalChildren=this.nodes,this.visible||this.setAttribute("hidden",""),this.setAttribute("role","tabpanel")}connected(){const t=document.querySelector(`.tonic--tab[for="${this.props.id}"]`);if(t){const e=t.getAttribute("id");this.setAttribute("aria-labelledby",e)}}disconnected(){this.props.detatch&&(this.preventRenderOnReconnect=!0)}render(){return!this.visible&&this.props.detatch?"":this.props.detatch?this.html`${this.__originalChildren}`:this.html`${this.childNodes}`}}class Bt extends d{render(){const t=this.props.for;return this.html`
      <a
        id="${this.id}-anchor"
        for="${this.props.for}"
        class="tonic--tab"
        href="#"
        role="tab"
        aria-controls="${t}"
        aria-selected="false"
      >
        ${this.childNodes}
      </a>
    `}}class Xt extends d{mutate(t){const{width:e,height:i}=t.target.style;this.state={...this.state,width:e,height:i}}defaults(){return{placeholder:"",spellcheck:!0,disabled:!1,required:!1,readonly:!1,autofocus:!1,width:"100%",radius:"2px"}}static stylesheet(){return`
      tonic-textarea {
        display: block;
        position: relative;
      }

      tonic-textarea textarea {
        color: var(--tonic-primary, #333);
        width: 100%;
        font: 14px var(--tonic-monospace, 'Andale Mono', monospace);
        padding: 10px;
        background-color: var(--tonic-input-background, var(--tonic-background, transparent));
        border: 1px solid var(--tonic-border, #ccc);
        transition: border 0.2s ease-in-out;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }

      tonic-textarea textarea:invalid {
        border-color: var(--tonic-danger, #f66);
      }

      tonic-textarea textarea:focus {
        outline: none;
        background-color: var(--tonic-input-background-focus, rgba(241, 241, 241, 0.75));
      }

      tonic-textarea textarea[disabled] {
        background-color: transparent;
      }

      tonic-textarea label {
        color: var(--tonic-medium, #999);
        font-weight: 500;
        font: 12px/14px var(--tonic-subheader,  'Arial', sans-serif);
        text-transform: uppercase;
        letter-spacing: 1px;
        padding-bottom: 10px;
        display: block;
      }

      tonic-textarea[edited] textarea[invalid],
      tonic-textarea[edited] textarea:invalid,
      tonic-textarea[edited] textarea[invalid]:focus,
      tonic-textarea[edited] textarea:invalid:focus {
        border-color: var(--tonic-error, #f66);
      }

      tonic-textarea[edited] textarea[invalid] ~ .tonic--invalid,
      tonic-textarea[edited] textarea:invalid ~ .tonic--invalid {
        transform: translate(-50%, 0);
        visibility: visible;
        opacity: 1;
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 1s ease 0s;
      }

      tonic-textarea textarea[disabled] {
        background-color: var(--tonic-background, #fff);
      }

      tonic-textarea[label] .tonic--invalid {
        margin-bottom: 13px;
      }

      tonic-textarea .tonic--invalid {
        font-size: 14px;
        text-align: center;
        margin-bottom: 13px;
        position: absolute;
        bottom: 100%;
        left: 50%;
        width: fit-content;
        transform: translateY(-10px);
        transition: opacity 0.2s ease, transform 0.2s ease, visibility 0s ease 1s;
        visibility: hidden;
        opacity: 0;
      }

      tonic-textarea .tonic--invalid span {
        color: white;
        padding: 2px 6px;
        background-color: var(--tonic-error, #f66);
        border-radius: 2px;
        position: relative;
        display: inline-block;
        margin: 0 auto;
      }

      tonic-textarea .tonic--invalid span:after {
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid var(--tonic-error, #f66);
      }

    `}styles(){const{width:t=this.state.width,height:e=this.state.height,radius:i,resize:o}=this.props;return{textarea:{width:t,height:e,borderRadius:i,resize:o}}}get value(){return this.querySelector("textarea").value}set value(t){this.querySelector("textarea").value=t}setValid(){const t=this.querySelector("textarea");t&&(t.setCustomValidity(""),t.removeAttribute("invalid"))}setInvalid(t){const e=this.querySelector("textarea");if(!e)return;this.setAttribute("edited",!0),this.state.edited=!0,e.setCustomValidity(t),window.requestAnimationFrame(()=>{e.setAttribute("invalid",t)});const i=this.querySelector(".tonic--invalid span");i&&(i.textContent=t)}renderLabel(){return typeof this.props.label>"u"?"":this.html`
      <label
        for="tonic--textarea_${this.props.id}"
      >${this.props.label}</label>
    `}willConnect(){const{value:t,persistSize:e}=this.props;if(this.props.value=typeof t>"u"?this.textContent:t,e==="true"){const i=o=>this.mutate(o.pop());this.observer=new window.MutationObserver(i).observe(this,{attributes:!0,subtree:!0,attributeFilter:["style"]})}}disconnected(){this.observer&&this.observer.disconnect()}keyup(t){if(!this.props.pattern)return;this.regex||(this.regex=new RegExp(this.props.pattern)),t.target.value.trim().match(this.regex)?this.setValid():this.setInvalid("Invalid")}render(){const{ariaLabelledby:t,autofocus:e,cols:i,height:o,disabled:n,label:s,maxlength:a,minlength:c,name:u,placeholder:l,readonly:b,required:p,rows:m,spellcheck:f,tabindex:v,theme:x,width:g}=this.props;t&&this.removeAttribute("ariaLabelled"),g&&(this.style.width=g),o&&(this.style.height=o),v&&this.removeAttribute("tabindex"),x&&this.classList.add(`tonic--theme--${x}`),u&&this.removeAttribute("name");const w=this.props.errorMessage||"Invalid";return this.props.value==="undefined"&&(this.props.value=""),this.state.edited&&this.setAttribute("edited",!0),this.html`
      <div class="tonic--wrapper">
        ${this.renderLabel()}
        <textarea ... ${{styles:"textarea",id:`tonic--textarea_${this.props.id}`,"aria-label":s,"aria-labelledby":t,cols:i,disabled:n==="true",maxlength:a,minlength:c,name:u,placeholder:l,rows:m,spellcheck:f,tabindex:v,autofocus:e,required:p,readonly:b}}>${this.props.value}</textarea>
        <div class="tonic--invalid">
          <span id="tonic--error-${this.props.id}">${w}</span>
        </div>
      </div>
    `}}class _ extends d{connected(){const t=this.props.for,e=document.getElementById(t),i=n=>{clearTimeout(_.timers[t]),_.timers[t]=setTimeout(()=>this.hide(),256)},o=n=>{clearTimeout(_.timers[t]),this.show(e)};if(!e){console.warn("Broken tooltip for: "+t);return}e.addEventListener("mouseleave",i),e.addEventListener("mousemove",o),e.addEventListener("mouseenter",o),this.addEventListener("mouseenter",n=>{clearTimeout(_.timers[t])}),this.addEventListener("mouseleave",i)}defaults(t){return{width:"auto",height:"auto"}}static stylesheet(){return`
      tonic-tooltip .tonic--tooltip {
        color: var(--tonic-primary, #333);
        position: fixed;
        background: var(--tonic-window, #fff);
        visibility: hidden;
        z-index: -1;
        opacity: 0;
        border: 1px solid var(--tonic-border, #ccc);
        border-radius: 2px;
        transition: visibility 0.2s ease, opacity 0.2s ease, z-index 0.2s ease, box-shadow 0.2s ease;
        willchange: visibility, opacity, box-shadow, z-index;
      }

      tonic-tooltip .tonic--tooltip.tonic--show {
        visibility: visible;
        opacity: 1;
        z-index: 1;
        box-shadow: 0px 30px 90px -20px rgba(0, 0, 0, 0.3);
      }

      tonic-tooltip .tonic--tooltip .tonic--tooltip-arrow {
        width: 12px;
        height: 12px;
        position: absolute;
        z-index: -1;
        background-color: var(--tonic-window, #fff);
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        left: 50%;
      }

      tonic-tooltip .tonic--tooltip .tonic--tooltip-arrow {
        border: 1px solid transparent;
        border-radius: 2px;
        pointer-events: none;
      }

      tonic-tooltip .tonic--top .tonic--tooltip-arrow {
        margin-bottom: -6px;
        bottom: 100%;
        border-top-color: var(--tonic-border, #ccc);
        border-left-color: var(--tonic-border, #ccc);
      }

      tonic-tooltip .tonic--bottom .tonic--tooltip-arrow {
        margin-top: -6px;
        position: absolute;
        top: 100%;
        border-bottom-color: var(--tonic-border, #ccc);
        border-right-color: var(--tonic-border, #ccc);
      }
    `}show(t){clearTimeout(_.timers[t.id]),_.timers[t.id]=setTimeout(()=>{const e=this.querySelector(".tonic--tooltip"),i=this.querySelector(".tonic--tooltip-arrow");let{top:o,left:n}=t.getBoundingClientRect();n+=t.offsetWidth/2,n-=e.offsetWidth/2;const s=t.offsetHeight+i.offsetHeight/2;o<window.innerHeight/2?(e.classList.remove("tonic--bottom"),e.classList.add("tonic--top"),o+=s):(e.classList.remove("tonic--top"),e.classList.add("tonic--bottom"),o-=s+e.offsetHeight),e.style.top=`${o}px`,e.style.left=`${n}px`,window.requestAnimationFrame(()=>{e.classList.add("tonic--show")}),window.addEventListener("mousewheel",a=>{this.hide()},{once:!0})},64)}hide(t){this.firstElementChild.classList.remove("tonic--show")}styles(){const{width:t,height:e}=this.props;return{tooltip:{width:t,height:e}}}render(){return this.props.theme&&this.classList.add(`tonic--theme--${this.props.theme}`),this.html`
      <div class="tonic--tooltip" styles="tooltip">
        ${this.nodes}
        <span class="tonic--tooltip-arrow"></span>
      </div>
    `}}_.timers={};class Wt extends d{defaults(){return{display:"true"}}static stylesheet(){return`
      tonic-toaster-inline > div > .tonic--close svg,
      tonic-toaster-inline > div > .tonic--icon svg {
        width: inherit;
        height: inherit;
      }

      tonic-toaster-inline .tonic--notification {
        max-height: 0;
        background-color: var(--tonic-window, #fff);
        border: 1px solid var(--tonic-border, #ccc);
        border-radius: 3px;
        transform: translateY(-50%);
        transition: all 0.1s ease-in-out;
        opacity: 0;
        z-index: -1;
        position: absolute;
      }

      tonic-toaster-inline .tonic--notification.tonic--show {
        max-height: 100%;
        margin: 10px 0;
        transform: translateY(0);
        transition: all 0.1s ease-in-out;
        opacity: 1;
        z-index: 1;
        position: relative;
      }

      tonic-toaster-inline[animate="false"] .tonic--notification,
      tonic-toaster-inline[animate="false"] .tonic--notification.tonic--show {
        transition: none;
      }

      tonic-toaster-inline .tonic--notification.tonic--close {
        padding-right: 50px;
      }

      tonic-toaster-inline .tonic--notification.tonic--alert {
        padding-left: 35px;
      }

      tonic-toaster-inline .tonic--main {
        padding: 17px 18px 15px 18px;
      }

      tonic-toaster-inline.tonic--dismiss .tonic--main {
        margin-right: 40px;
      }

      tonic-toaster-inline .tonic--title {
        color: var(--tonic-primary, #333);
        font: 14px/18px var(--tonic-subheader, 'Arial', sans-serif);
      }

      tonic-toaster-inline .tonic--message {
        font: 14px/18px var(--tonic-subheader, 'Arial', sans-serif);
        color: var(--tonic-medium, #999);
      }

      tonic-toaster-inline .tonic--notification .tonic--icon {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      tonic-toaster-inline .tonic--close {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
      }
    `}show(){this.querySelector(".tonic--notification").classList.add("tonic--show")}hide(){this.querySelector(".tonic--notification").classList.remove("tonic--show")}click(t){d.match(t.target,".tonic--close")&&this.hide()}connected(){this.updated()}updated(){const{display:t,duration:e}=this.props;t==="true"&&window.requestAnimationFrame(()=>this.show()),e&&setTimeout(()=>this.hide(),e)}renderClose(){return this.props.dismiss!=="true"?"":(this.classList.add("tonic--dismiss"),this.html`
      <div class="tonic--close">
        <svg>
          <use
            href="#close"
            xlink:href="#close"
            color="var(--tonic-primary, #333)"
            fill="var(--tonic-primary, #333)">
          </use>
        </svg>
      </div>
    `)}renderIcon(){const t=this.props.type;return t?this.html`
      <div class="tonic--icon">
        <svg>
          <use
            href="#${t}"
            xlink:href="#${t}"
            color="var(--tonic-${t}, #f66)"
            fill="var(--tonic-${t}, #f66)">
          </use>
        </svg>
      </div>
    `:""}styles(){return{type:{"border-color":`var(--tonic-${this.props.type}, #f66)`}}}render(){const{title:t,type:e,message:i,theme:o}=this.props;o&&this.setAttribute("theme",o);const n=["tonic--notification"];return e&&n.push("tonic--alert",`tonic--${e}`),this.html`
      <div ... ${{class:n.join(" "),styles:e?"type":""}}>
        ${this.renderIcon()}
        ${this.renderClose()}
        <div class="tonic--main">
          <div class="tonic--title">
            ${t}
          </div>
          <div class="tonic--message">
            ${i||this.childNodes}
          </div>
        </div>
      </div>
    `}}class Ut extends d{defaults(){return{position:"center"}}static stylesheet(){return`
      tonic-toaster * {
        box-sizing: border-box;
      }

      tonic-toaster svg {
        width: 100%;
        height: 100%;
        position: absolute;
      }

      tonic-toaster .tonic--wrapper {
        -webkit-user-select: none;
        user-select: none;
        position: fixed;
        top: 10px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        visibility: hidden;
        z-index: 102;
      }

      @media (max-width: 850px) tonic-toaster .tonic--wrapper {
        width: 90%;
      }

      tonic-toaster .tonic--wrapper.tonic--show {
        visibility: visible;
      }

      tonic-toaster .tonic--wrapper.tonic--center {
        left: 50%;
        align-items: center;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
      }

      tonic-toaster .tonic--wrapper.tonic--left {
        align-items: flex-start;
        left: 10px;
      }

      tonic-toaster .tonic--wrapper.tonic--right {
        align-items: flex-end;
        right: 10px;
      }

      tonic-toaster .tonic--notification {
        width: auto;
        max-width: 600px;
        margin-top: 10px;
        position: relative;
        background-color: var(--tonic-window);
        box-shadow: 0px 10px 40px -20px rgba(0,0,0,0.4), 0 0 1px #a2a9b1;
        border-radius: 3px;
        -webkit-transform: translateY(-100px);
        -ms-transform: translateY(-100px);
        transform: translateY(-100px);
        transition: opacity 0.2s ease, transform 0s ease 1s;
        z-index: 1;
        opacity: 0;
      }

      tonic-toaster .tonic--notification.tonic--show {
        opacity: 1;
        -webkit-transform: translateY(0);
        -ms-transform: translateY(0);
        transform: translateY(0);
        transition: transform 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
      }

      tonic-toaster .tonic--notification.tonic--close {
        padding-right: 50px;
      }

      tonic-toaster .tonic--notification.tonic--alert {
        padding-left: 35px;
      }

      tonic-toaster .tonic--main {
        padding: 17px 15px 15px 15px;
      }

      tonic-toaster .tonic--title {
        color: var(--tonic-primary);
        font: 14px/18px var(--tonic-subheader);
      }

      tonic-toaster .tonic--message {
        color: var(--tonic-medium);
        font: 14px/18px var(--tonic-body);
      }

      tonic-toaster .tonic--notification > .tonic--icon {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
      }

      tonic-toaster .tonic--notification > .tonic--close {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
        cursor: pointer;
      }
    `}_getZIndex(){return Array.from(document.querySelectorAll("body *")).map(t=>parseFloat(window.getComputedStyle(t).zIndex)).reduce((t,e=Number.MIN_SAFE_INTEGER)=>isNaN(t)||t<e?e:t)}create(t){const e=JSON.stringify(t);if(this.lastToaster===e)return;this.lastToaster=e,t=t||{};const{message:i,title:o,duration:n,type:s}=t;let a=t.dismiss;const c=document.createElement("div");c.className="tonic--notification",c.dataset.sig=e;const u=this.querySelector(".tonic--wrapper");u.style.zIndex=this._getZIndex()+100;const l=document.createElement("div");l.className="tonic--main",s&&(c.dataset.type=s,c.classList.add("tonic--alert"));const b=document.createElement("div");b.className="tonic--title",b.textContent=o||this.props.title;const p=document.createElement("div");p.className="tonic--message";const m=i||this.props.message;if(i.isTonicTemplate?p.innerHTML=m:p.textContent=m,typeof a=="string"&&(a=a==="true"),a!==!1){const f=document.createElement("div");f.className="tonic--close",c.appendChild(f),c.classList.add("tonic--close");const v="http://www.w3.org/2000/svg",x="http://www.w3.org/1999/xlink",g=document.createElementNS(v,"svg"),w=document.createElementNS(v,"use");f.appendChild(g),g.appendChild(w),w.setAttributeNS(x,"href","#close"),w.setAttributeNS(x,"xlink:href","#close"),w.setAttribute("color","var(--tonic-primary)"),w.setAttribute("fill","var(--tonic-primary)")}if(s){const f=document.createElement("div");f.className="tonic--icon",c.appendChild(f);const v="http://www.w3.org/2000/svg",x="http://www.w3.org/1999/xlink",g=document.createElementNS(v,"svg"),w=document.createElementNS(v,"use");f.appendChild(g),g.appendChild(w),w.setAttributeNS(x,"href",`#${s}`),w.setAttributeNS(x,"xlink:href",`#${s}`),w.setAttribute("color",`var(--tonic-${s})`),w.setAttribute("fill",`var(--tonic-${s})`)}c.appendChild(l),l.appendChild(b),l.appendChild(p),this.querySelector(".tonic--wrapper").appendChild(c),this.show(),setTimeout(()=>{c&&c.classList.add("tonic--show")},64),n&&setTimeout(()=>{c&&this.destroy(c)},n)}destroy(t){t.classList.remove("tonic--show"),t.addEventListener("transitionend",e=>{t&&t.parentNode&&t.parentNode.removeChild(t),this.lastToaster===t.dataset.sig&&(this.lastToaster=null)})}show(){this.querySelector(".tonic--wrapper").classList.add("tonic--show")}hide(){this.querySelector(".tonic--wrapper").classList.remove("tonic--show")}click(t){const e=d.match(t.target,".tonic--close");if(!e)return;const i=e.closest(".tonic--notification");i&&this.destroy(i)}render(){const{theme:t,position:e}=this.props;t&&this.classList.add(`tonic--theme--${t}`);const i=["tonic--wrapper"];return e&&i.push(`tonic--${e}`),this.html`
      <div class="${i.join(" ")}">
      </div>
    `}}class Gt extends d{constructor(){super(),this._modified=!1}get value(){const t=this.state,e=this.props,i=typeof e.checked<"u"?e.checked:e.value,o=typeof t.checked<"u"?t.checked:t.value;let n;return this._modified?n=typeof o<"u"?o:i:n=typeof i<"u"?i:o,n===!0||n==="true"}_setValue(t){this._modified=!0;const e=t===!0||t==="true";this.state.checked=e}set value(t){this._setValue(t),this.reRender()}static stylesheet(){return`
      tonic-toggle .tonic--toggle--wrapper {
        height: 30px;
        position: relative;
      }

      tonic-toggle .tonic--toggle--wrapper > label {
        color: var(--tonic-medium, #999);
        font-weight: 500;
        font: 12px/14px var(--tonic-subheader, 'Arial', sans-serif);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-left: 58px;
        padding-top: 6px;
        display: block;
        user-select: none;
        -webkit-user-select: none;
      }

      tonic-toggle .tonic--switch {
        position: absolute;
        left: 0;
        top: 0;
      }

      tonic-toggle .tonic--switch label:before {
        font: bold 12px var(--tonic-subheader, 'Arial', sans-serif);
        text-transform: uppercase;
      }

      tonic-toggle .tonic--toggle {
        position: absolute;
        opacity: 0;
        outline: none;
        user-select: none;
        -webkit-user-select: none;
        z-index: 1;
      }

      tonic-toggle .tonic--toggle + label {
        width: 42px;
        height: 24px;
        padding: 2px;
        display: block;
        position: relative;
        background-color: var(--tonic-border, #ccc);
        border-radius: 60px;
        transition: background 0.2s ease-in-out;
        cursor: default;
      }

      tonic-toggle .tonic--toggle:focus + label {
        outline: -webkit-focus-ring-color auto 5px;
        outline-offset: 4px;
      }

      tonic-toggle .tonic--toggle + label:before {
        content: '';
        line-height: 29px;
        text-indent: 29px;
        position: absolute;
        top: 1px;
        left: 1px;
        right: 1px;
        bottom: 1px;
        display: block;
        border-radius: 60px;
        transition: background 0.2s ease-in-out;
        padding-top: 1px;
        font-size: 0.65em;
        letter-spacing: 0.05em;
        background-color: var(--tonic-border, #ccc);
      }

      tonic-toggle .tonic--toggle + label:after {
        content: '';
        width: 16px;
        position: absolute;
        top: 4px;
        left: 4px;
        bottom: 4px;
        background-color: var(--tonic-window, #fff);
        border-radius: 52px;
        transition: background 0.2s ease-in-out, margin 0.2s ease-in-out;
        display: block;
        z-index: 2;
      }

      tonic-toggle .tonic--toggle:disabled {
        cursor: default;
      }

      tonic-toggle .tonic--toggle:disabled + label {
        cursor: default;
        opacity: 0.5;
      }

      tonic-toggle .tonic--toggle:disabled + label:before {
        content: '';
        opacity: 0.5;
      }

      tonic-toggle .tonic--toggle:disabled + label:after {
        background-color: var(--tonic-window, #fff);
      }

      tonic-toggle .tonic--toggle:checked + label {
        background-color: var(--tonic-accent, #f66);
      }

      tonic-toggle .tonic--toggle:checked + label:before {
        background-color: var(--tonic-accent, #f66);
        color: var(--tonic-background);
      }

      tonic-toggle .tonic--toggle:checked + label:after {
        margin-left: 18px;
        background-color: var(--tonic-background, #fff);
      }
    `}change(t){this._setValue(t.target.checked)}renderLabel(){const{id:t,label:e}=this.props;return e?this.html`<label for="tonic--toggle--${t}">${e}</label>`:""}render(){const{id:t,disabled:e,theme:i,tabindex:o}=this.props;o&&this.removeAttribute("tabindex"),i&&this.classList.add(`tonic--theme--${i}`);const n=this.value;return typeof this.state.checked>"u"&&(this.state.checked=n),this.html`
      <div class="tonic--toggle--wrapper">
        <div class="tonic--switch">
          <input ... ${{type:"checkbox",class:"tonic--toggle",id:`tonic--toggle--${t}`,disabled:e===!0||e==="true",tabindex:o,checked:n}}/>
          <label for="tonic--toggle--${t}"></label>
        </div>
        ${this.renderLabel()}
      </div>
    `}}const H=d.version,Zt=H?H.split(".")[0]:"0";if(H&&parseInt(Zt,10)<12)throw console.error("Out of date dependency. Try `npm install @socketsupply/tonic@12`."),new Error("Invalid Tonic version. requires at least v12");let Q=!1;ot.Tonic=d;function ot(r){Q||(Q=!0,r.add(ut,"tonic-accordion"),r.add(ft,"tonic-accordion-section"),r.add(bt,"tonic-badge"),r.add(mt,"tonic-button"),r.add(gt,"tonic-chart"),r.add(vt,"tonic-checkbox"),r.add(tt,"tonic-dialog"),r.add(z,"tonic-form"),r.add(wt,"tonic-input"),r.add(xt,"tonic-icon"),r.add(kt,"tonic-loader"),r.add(At,"tonic-panel"),r.add($t,"tonic-popover"),r.add(R,"tonic-profile-image"),r.add(Et,"tonic-progress-bar"),r.add(St,"tonic-range"),r.add(qt,"tonic-relative-time"),r.add(E,"tonic-router"),r.add(Dt,"tonic-select"),r.add(Ot,"tonic-sprite"),r.add(Yt,"tonic-split"),r.add(et,"tonic-split-left"),r.add(Ft,"tonic-split-right"),r.add(it,"tonic-split-top"),r.add(Pt,"tonic-split-bottom"),r.add(Ht,"tonic-tab-panel"),r.add(Bt,"tonic-tab"),r.add(jt,"tonic-tabs"),r.add(Xt,"tonic-textarea"),r.add(_,"tonic-tooltip"),r.add(Wt,"tonic-toaster-inline"),r.add(Ut,"tonic-toaster"),r.add(Gt,"tonic-toggle"))}ot(d);
