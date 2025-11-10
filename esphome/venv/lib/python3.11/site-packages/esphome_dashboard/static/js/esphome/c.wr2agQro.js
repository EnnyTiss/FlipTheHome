import{a as e,b as t,M as c,_ as o,i,t as r,e as a,c as d,d as n,h as s,j as l,F as m,R as h,x as p,k as b,l as u,m as _,r as k,n as g,p as f,B as x,q as v,s as y,o as w,u as $,v as C,y as S,z as R,A as E,C as P,D as z,E as A}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";import{o as B,c as T}from"./c.D8wUDrsi.js";import{s as D,a as F,b as H,m as I,c as L}from"./c.BD-J2WFT.js";import{g as O,f as N}from"./c.qwLJRoD0.js";import{S as U,a as M,c as j,s as W}from"./c.BF-Oh_fI.js";import{c as q}from"./c.CAJ3Ydmf.js";import{s as K}from"./c.BqFZjOdP.js";const Y=Symbol("selection controller");class X{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class V{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",(e=>{this.keyDownHandler(e)})),e.addEventListener("mousedown",(()=>{this.mousedownHandler()})),e.addEventListener("mouseup",(()=>{this.mouseupHandler()}))}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let c=t[Y];return void 0===c&&(c=new V(t),t[Y]=c),c}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),c=t.indexOf(e),o=t[c-1]||t[t.length-1];return this.select(o),o}selectNext(e){const t=this.getOrdered(e),c=t.indexOf(e),o=t[c+1]||t[0];return this.select(o),o}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),c=this.focusedSet;this.focusedSet=t,c!=t&&t.selected&&t.selected!=e&&t.selected.focus()}isAnySelected(e){const t=this.getSet(e.name);for(const e of t.set)if(e.checked)return!0;return!1}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort(((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0))),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new X),this.sets[e]}register(e){const t=e.name||e.getAttribute("name")||"",c=this.getSet(t);c.set.add(e),c.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(this.updating)return;this.updating=!0;const t=this.getSet(e.name);if(e.checked){for(const c of t.set)c!=e&&(c.checked=!1);t.selected=e}if(this.isAnySelected(e))for(const e of t.set){if(void 0===e.formElementTabIndex)break;e.formElementTabIndex=e.checked?0:-1}this.updating=!1}}var G={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},J={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},Q=function(c){function o(e){return c.call(this,t(t({},o.defaultAdapter),e))||this}return e(o,c),Object.defineProperty(o,"cssClasses",{get:function(){return J},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return G},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!1,configurable:!0}),o.prototype.setDisabled=function(e){var t=o.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(t):this.adapter.removeClass(t)},o}(c);class Z extends m{constructor(){super(...arguments),this._checked=!1,this.useStateLayerCustomProperties=!1,this.global=!1,this.disabled=!1,this.value="on",this.name="",this.reducedTouchTarget=!1,this.mdcFoundationClass=Q,this.formElementTabIndex=0,this.focused=!1,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new h((()=>(this.shouldRenderRipple=!0,this.ripple.then((e=>{this.rippleElement=e})),this.ripple)))}get checked(){return this._checked}set checked(e){var t,c;const o=this._checked;e!==o&&(this._checked=e,this.formElement&&(this.formElement.checked=e),null===(t=this._selectionController)||void 0===t||t.update(this),!1===e&&(null===(c=this.formElement)||void 0===c||c.blur()),this.requestUpdate("checked",o),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}renderRipple(){return this.shouldRenderRipple?p`<mwc-ripple unbounded accent
        .internalUseStateLayerCustomProperties="${this.useStateLayerCustomProperties}"
        .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=V.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},b(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleClick(){this.formElement.focus()}handleBlur(){this.focused=!1,this.formElement.blur(),this.rippleHandlers.endFocus()}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}render(){const e={"mdc-radio--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-radio--disabled":this.disabled};return p`
      <div class="mdc-radio ${u(e)}">
        <input
          tabindex="${this.formElementTabIndex}"
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          aria-label="${_(this.ariaLabel)}"
          aria-labelledby="${_(this.ariaLabelledBy)}"
          .checked="${this.checked}"
          .value="${this.value}"
          ?disabled="${this.disabled}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}changeHandler(){this.checked=this.formElement.checked}}o([i(".mdc-radio")],Z.prototype,"mdcRoot",void 0),o([i("input")],Z.prototype,"formElement",void 0),o([r()],Z.prototype,"useStateLayerCustomProperties",void 0),o([a({type:Boolean})],Z.prototype,"global",void 0),o([a({type:Boolean,reflect:!0})],Z.prototype,"checked",null),o([a({type:Boolean}),d((function(e){this.mdcFoundation.setDisabled(e)}))],Z.prototype,"disabled",void 0),o([a({type:String}),d((function(e){this._handleUpdatedValue(e)}))],Z.prototype,"value",void 0),o([a({type:String})],Z.prototype,"name",void 0),o([a({type:Boolean})],Z.prototype,"reducedTouchTarget",void 0),o([a({type:Number})],Z.prototype,"formElementTabIndex",void 0),o([r()],Z.prototype,"focused",void 0),o([r()],Z.prototype,"shouldRenderRipple",void 0),o([n("mwc-ripple")],Z.prototype,"ripple",void 0),o([s,a({attribute:"aria-label"})],Z.prototype,"ariaLabel",void 0),o([s,a({attribute:"aria-labelledby"})],Z.prototype,"ariaLabelledBy",void 0),o([l({passive:!0})],Z.prototype,"handleRippleTouchStart",null);const ee=k`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:calc((40px - 20px) / 2)}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:calc(-1 * (40px - 20px) / 2);left:calc(-1 * (40px - 20px) / 2);width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:calc((40px - 40px) / 2);right:calc((40px - 40px) / 2);left:calc((40px - 40px) / 2);width:40px;height:40px}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:GrayText}.mdc-radio.mdc-radio--disabled [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio.mdc-radio--disabled .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:GrayText}}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:calc((40px - 48px) / 2);right:calc((40px - 48px) / 2);left:calc((40px - 48px) / 2);width:48px;height:48px}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring{border-color:CanvasText}}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__focus-ring::after,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__focus-ring::after{border-color:CanvasText}}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;let te=class extends Z{};te.styles=[ee],te=o([g("mwc-radio")],te);var ce={ROOT:"mdc-form-field"},oe={LABEL_SELECTOR:".mdc-form-field > label"},ie=function(c){function o(e){var i=c.call(this,t(t({},o.defaultAdapter),e))||this;return i.click=function(){i.handleClick()},i}return e(o,c),Object.defineProperty(o,"cssClasses",{get:function(){return ce},enumerable:!1,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return oe},enumerable:!1,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{activateInputRipple:function(){},deactivateInputRipple:function(){},deregisterInteractionHandler:function(){},registerInteractionHandler:function(){}}},enumerable:!1,configurable:!0}),o.prototype.init=function(){this.adapter.registerInteractionHandler("click",this.click)},o.prototype.destroy=function(){this.adapter.deregisterInteractionHandler("click",this.click)},o.prototype.handleClick=function(){var e=this;this.adapter.activateInputRipple(),requestAnimationFrame((function(){e.adapter.deactivateInputRipple()}))},o}(c);class re extends x{constructor(){super(...arguments),this.alignEnd=!1,this.spaceBetween=!1,this.nowrap=!1,this.label="",this.mdcFoundationClass=ie}createAdapter(){return{registerInteractionHandler:(e,t)=>{this.labelEl.addEventListener(e,t)},deregisterInteractionHandler:(e,t)=>{this.labelEl.removeEventListener(e,t)},activateInputRipple:async()=>{const e=this.input;if(e instanceof m){const t=await e.ripple;t&&t.startPress()}},deactivateInputRipple:async()=>{const e=this.input;if(e instanceof m){const t=await e.ripple;t&&t.endPress()}}}}get input(){var e,t;return null!==(t=null===(e=this.slottedInputs)||void 0===e?void 0:e[0])&&void 0!==t?t:null}render(){const e={"mdc-form-field--align-end":this.alignEnd,"mdc-form-field--space-between":this.spaceBetween,"mdc-form-field--nowrap":this.nowrap};return p`
      <div class="mdc-form-field ${u(e)}">
        <slot></slot>
        <label class="mdc-label"
               @click="${this._labelClick}">${this.label}</label>
      </div>`}click(){this._labelClick()}_labelClick(){const e=this.input;e&&(e.focus(),e.click())}}o([a({type:Boolean})],re.prototype,"alignEnd",void 0),o([a({type:Boolean})],re.prototype,"spaceBetween",void 0),o([a({type:Boolean})],re.prototype,"nowrap",void 0),o([a({type:String}),d((async function(e){var t;null===(t=this.input)||void 0===t||t.setAttribute("aria-label",e)}))],re.prototype,"label",void 0),o([i(".mdc-form-field")],re.prototype,"mdcRoot",void 0),o([f("",!0,"*")],re.prototype,"slottedInputs",void 0),o([i("label")],re.prototype,"labelEl",void 0);const ae=k`.mdc-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}:host{display:inline-flex}.mdc-form-field{width:100%}::slotted(*){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}::slotted(mwc-switch){margin-right:10px}[dir=rtl] ::slotted(mwc-switch),::slotted(mwc-switch[dir=rtl]){margin-left:10px}`;let de=class extends re{};de.styles=[ae],de=o([g("mwc-formfield")],de);class ne extends m{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.name="",this.value="on",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new h((()=>(this.shouldRenderRipple=!0,this.ripple.then((e=>this.rippleElement=e)),this.ripple)))}createAdapter(){return{}}update(e){const t=e.get("indeterminate"),c=e.get("checked"),o=e.get("disabled");if(void 0!==t||void 0!==c||void 0!==o){const e=this.calculateAnimationStateName(!!c,!!t,!!o),i=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${e}-${i}`}super.update(e)}calculateAnimationStateName(e,t,c){return c?"disabled":t?"indeterminate":e?"checked":"unchecked"}renderRipple(){return this.shouldRenderRipple?this.renderRippleTemplate():""}renderRippleTemplate(){return p`<mwc-ripple
        .disabled="${this.disabled}"
        unbounded></mwc-ripple>`}render(){const e=this.indeterminate||this.checked,t={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-ripple-upgraded--background-focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},c=this.indeterminate?"mixed":void 0;return p`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${u(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              name="${_(this.name)}"
              aria-checked="${_(c)}"
              aria-label="${_(this.ariaLabel)}"
              aria-labelledby="${_(this.ariaLabelledBy)}"
              aria-describedby="${_(this.ariaDescribedBy)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this.handleChange}"
              @focus="${this.handleFocus}"
              @blur="${this.handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}setFormData(e){this.name&&this.checked&&e.append(this.name,this.value)}handleFocus(){this.focused=!0,this.handleRippleFocus()}handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}handleChange(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}}o([i(".mdc-checkbox")],ne.prototype,"mdcRoot",void 0),o([i("input")],ne.prototype,"formElement",void 0),o([a({type:Boolean,reflect:!0})],ne.prototype,"checked",void 0),o([a({type:Boolean})],ne.prototype,"indeterminate",void 0),o([a({type:Boolean,reflect:!0})],ne.prototype,"disabled",void 0),o([a({type:String,reflect:!0})],ne.prototype,"name",void 0),o([a({type:String})],ne.prototype,"value",void 0),o([s,a({type:String,attribute:"aria-label"})],ne.prototype,"ariaLabel",void 0),o([s,a({type:String,attribute:"aria-labelledby"})],ne.prototype,"ariaLabelledBy",void 0),o([s,a({type:String,attribute:"aria-describedby"})],ne.prototype,"ariaDescribedBy",void 0),o([a({type:Boolean})],ne.prototype,"reducedTouchTarget",void 0),o([r()],ne.prototype,"animationClass",void 0),o([r()],ne.prototype,"shouldRenderRipple",void 0),o([r()],ne.prototype,"focused",void 0),o([n("mwc-ripple")],ne.prototype,"ripple",void 0),o([l({passive:!0})],ne.prototype,"handleRippleTouchStart",null);const se=k`.mdc-checkbox{padding:calc((40px - 18px) / 2);padding:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);margin:calc((40px - 40px) / 2);margin:calc((var(--mdc-checkbox-touch-target-size, 40px) - 40px) / 2)}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}.mdc-checkbox:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-surface--hover .mdc-checkbox__ripple::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:0.12;opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:var(--mdc-ripple-press-opacity, 0.12)}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-ripple-color, var(--mdc-theme-secondary, #018786))}.mdc-checkbox .mdc-checkbox__background{top:calc((40px - 18px) / 2);top:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2);left:calc((40px - 18px) / 2);left:calc((var(--mdc-checkbox-ripple-size, 40px) - 18px) / 2)}.mdc-checkbox .mdc-checkbox__native-control{top:calc((40px - 40px) / 2);top:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);right:calc((40px - 40px) / 2);right:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);left:calc((40px - 40px) / 2);left:calc((40px - var(--mdc-checkbox-touch-target-size, 40px)) / 2);width:40px;width:var(--mdc-checkbox-touch-target-size, 40px);height:40px;height:var(--mdc-checkbox-touch-target-size, 40px)}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{pointer-events:none;border:2px solid transparent;border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring{border-color:CanvasText}}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{content:"";border:2px solid transparent;border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__focus-ring::after,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__focus-ring::after{border-color:CanvasText}}@media all and (-ms-high-contrast: none){.mdc-checkbox .mdc-checkbox__focus-ring{display:none}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin:calc((48px - 40px) / 2);margin:calc((var(--mdc-checkbox-state-layer-size, 48px) - var(--mdc-checkbox-state-layer-size, 40px)) / 2)}.mdc-checkbox--touch .mdc-checkbox__native-control{top:calc((40px - 48px) / 2);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);right:calc((40px - 48px) / 2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);left:calc((40px - 48px) / 2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 48px)) / 2);width:48px;width:var(--mdc-checkbox-state-layer-size, 48px);height:48px;height:var(--mdc-checkbox-state-layer-size, 48px)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-flex;-webkit-tap-highlight-color:transparent}:host([checked]),:host([indeterminate]){--mdc-ripple-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;let le=class extends ne{};le.styles=[se],le=o([g("mwc-checkbox")],le);let me=class extends y{constructor(){super(...arguments),this._busy=!1,this._platform="ESP32",this._board=this._platformData().defaultBoard,this._useRecommended=!0,this._hasWifiSecrets=void 0,this._data={type:"basic",ssid:`!secret ${M}`,psk:`!secret ${U}`},this._state=D?"pick_new_config_type":"ask_esphome_web",this._installed=!1,this._isDraggingOverConfigUpload=!1,this._cleanSSIDBlur=e=>{const t=e.target;t.value=t.value.trim()}}_platformData(){return F[this._platform]}render(){let e,t,c=!1;return"ask_esphome_web"===this._state?[e,t,c]=this._renderAskESPHomeWeb():"pick_new_config_type"===this._state?[e,t,c]=this._renderPickNewConfigType():"basic_config"===this._state?[e,t,c]=this._renderBasicConfig():"empty_config"===this._state?[e,t,c]=this._renderEmptyConfig():"pick_platform"===this._state?(e="Select your device type",t=this._renderPickPlatform()):"pick_board"===this._state?(e=this._platformData().showInPickerTitle?`Select your ${this._platformData().label} board`:"Select your board",t=this._renderPickBoard()):"connect_webserial"===this._state?(e="Installation",t=this._renderConnectSerial()):"connecting_webserial"===this._state?(t=this._renderProgress("Connecting"),c=!0):"prepare_flash"===this._state?(t=this._renderProgress("Preparing installation"),c=!0):"flashing"===this._state?(t=void 0===this._writeProgress?this._renderProgress("Erasing"):this._renderProgress(p`
                Installing<br /><br />
                This will take
                ${"ESP8266"===this._platform?"a minute":"2 minutes"}.<br />
                Keep this page visible to prevent slow down
              `,this._writeProgress>3?this._writeProgress:void 0),c=!0):"wait_come_online"===this._state?(t=this._renderProgress("Finding device on network"),c=!0):"done"===this._state&&(t=this._renderDone()),p`
      <mwc-dialog
        open
        heading=${e}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${c}
        >${t}</mwc-dialog
      >
    `}_renderProgress(e,t){return p`
      <div class="center">
        <div>
          <mwc-circular-progress
            active
            ?indeterminate=${void 0===t}
            .progress=${void 0!==t?t/100:void 0}
            density="8"
          ></mwc-circular-progress>
          ${void 0!==t?p`<div class="progress-pct">${t}%</div>`:""}
        </div>
        ${e}
      </div>
    `}_renderMessage(e,t,c){return p`
      <div class="center">
        <div class="icon">${e}</div>
        ${t}
      </div>
      ${c?p`
            <mwc-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            ></mwc-button>
          `:""}
    `}_renderAskESPHomeWeb(){return["New device",p`
      <div>
        A device needs to be connected to a computer using a USB cable to be
        added to ESPHome. Once added, ESPHome will interact with the device
        wirelessly.
      </div>
      <div>
        ${H?"Your browser does not support WebSerial.":"You are not browsing the ESPHome Device Builder over a secure connection (HTTPS)."}
        This prevents ESPHome from being able to install this on devices
        connected to this computer.
      </div>
      <div>
        You will still be able to install ESPHome by connecting the device to
        the computer that runs the ESPHome Device Builder.
      </div>
      <div>
        Alternatively, you can use ESPHome Web to prepare a device for being
        used with ESPHome using this computer.
      </div>

      <mwc-button
        slot="primaryAction"
        label="Continue"
        @click=${()=>{this._state="pick_new_config_type"}}
      ></mwc-button>

      <a
        slot="secondaryAction"
        href=${"https://web.esphome.io/?dashboard_wizard"}
        target="_blank"
        rel="noopener"
      >
        <mwc-button
          no-attention
          dialogAction="close"
          label="Open ESPHome Web"
        ></mwc-button>
      </a>
    `,!1]}_renderPickNewConfigType(){return["Create configuration",p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}
      <div
        @dragover=${e=>{e.preventDefault(),this._isDraggingOverConfigUpload=!0}}
        @dragleave=${e=>{e.preventDefault(),this._isDraggingOverConfigUpload=!1}}
        @drop=${e=>{var t,c;e.preventDefault(),this._isDraggingOverConfigUpload=!1;const o=null===(c=null===(t=e.dataTransfer)||void 0===t?void 0:t.files)||void 0===c?void 0:c[0];if(o){if(!o.name.endsWith(".yaml")&&!o.name.endsWith(".yml"))return void console.error("Invalid file type. Please provide a .yaml or .yml file.");this._configFileInput.files=e.dataTransfer.files,this._handleConfigFileUpload()}}}
        class="${u({"dragging-over":this._isDraggingOverConfigUpload})}"
      >
        <input
          type="file"
          accept=".yaml,.yml"
          style="display: none;"
          id="config-file-input"
          @change=${this._handleConfigFileUpload}
        />
        <p>How would you like to create your configuration?</p>
        <mwc-list>
          <mwc-list-item
            twoline
            hasMeta
            @click=${()=>{this._state="basic_config"}}
          >
            <span>New Device Setup</span>
            <span slot="secondary">A guided process to get you started.</span>
            ${I}
          </mwc-list-item>
          <mwc-list-item
            twoline
            hasMeta
            @click=${()=>{this._configFileInput.click()}}
          >
            <span>Import from File</span>
            <span slot="secondary"
              >Use an existing ESPHome configuration (.yaml).</span
            >
            ${I}
          </mwc-list-item>
          <mwc-list-item
            twoline
            hasMeta
            @click=${()=>{this._state="empty_config"}}
          >
            <span>Empty Configuration</span>
            <span slot="secondary"
              >For manually writing or pasting a configuration.</span
            >
            ${I}
          </mwc-list-item>
        </mwc-list>
        <small>You can also drag and drop your .yaml file here</small>
      </div>
    `,!0]}_renderBasicConfig(){if(void 0===this._hasWifiSecrets)return[void 0,this._renderProgress("Initializing"),!0];return[D?"New device":"Create configuration",p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}

      <mwc-textfield label="Name" name="name" required></mwc-textfield>

      ${this._hasWifiSecrets?p`
            <div>
              This device will be configured to connect to the Wi-Fi network
              stored in your secrets.
            </div>
          `:p`
            <div>
              Enter the credentials of the Wi-Fi network that you want your
              device to connect to.
            </div>
            <div>
              This information will be stored in your secrets and used for this
              and future devices. You can edit the information later by editing
              your secrets at the top of the page.
            </div>

            <mwc-textfield
              label="Network name"
              name="ssid"
              required
              @blur=${this._cleanSSIDBlur}
            ></mwc-textfield>

            <mwc-textfield
              label="Password"
              name="password"
              type="password"
              helper="Leave blank if no password"
            ></mwc-textfield>
          `}

      <mwc-button
        slot="primaryAction"
        label="Next"
        @click=${this._handleBasicConfigSubmit}
      ></mwc-button>

      <mwc-button
        no-attention
        slot="secondaryAction"
        dialogAction="close"
        label="Cancel"
      ></mwc-button>
    `,!1]}_renderEmptyConfig(){this._data.type="empty";return["Create empty configuration",p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}

      <mwc-textfield label="Name" name="name" required></mwc-textfield>

      <mwc-button
        slot="primaryAction"
        label="Next"
        @click=${this._handleEmptyConfigSubmit}
      ></mwc-button>

      <mwc-button
        no-attention
        slot="secondaryAction"
        dialogAction="close"
        label="Cancel"
      ></mwc-button>
    `,!1]}_renderPickPlatform(){return p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}

      <div>
        Select the type of device that this configuration will be installed on.
      </div>

      <mwc-list class="platforms">
        ${Object.keys(F).map((e=>F[e].showInDeviceTypePicker?p`
                  <mwc-list-item
                    hasMeta
                    .platform=${e}
                    @click=${this._handlePickPlatformClick}
                  >
                    <span>${F[e].label}</span>
                    ${I}
                  </mwc-list-item>
                `:p``))}
      </mwc-list>

      <mwc-formfield class="footer-left" label="Use recommended settings">
        <mwc-checkbox
          name="use-recommended"
          @change=${this._handleUseRecommendedCheckbox}
          ?checked=${this._useRecommended}
        ></mwc-checkbox>
      </mwc-formfield>

      <mwc-button
        no-attention
        slot="primaryAction"
        dialogAction="close"
        label="Cancel"
      ></mwc-button>
    `}_renderPickBoard(){const e=this._platformData().defaultBoard;let t=null;if(e&&this._supportedBoards)for(let c of this._supportedBoards)if(e in c.items){t=c.items[e];break}return p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}
      ${this._supportedBoards?p`
            <select
              @change=${this._handlePickBoardSelect}
              size="15"
              style="width: 100%;"
            >
              ${e&&t?p`<option value="${e}" selected>
                      ${t} (default)
                    </option>
                    <option disabled>------</option>`:""}
              ${this._supportedBoards.map((t=>{const c=Object.keys(t.items).map((c=>c===e?p``:p`<option value="${c}">${t.items[c]}</option>`));return t.title?p`<optgroup label="${t.title}">${c}</optgroup>`:c}))}
            </select>
          `:p`<div>Loading board list...</div>`}

      <mwc-button
        slot="primaryAction"
        label="Next"
        @click=${this._handlePickBoardSubmit}
        ?disabled=${null===this._board}
      ></mwc-button>
      <mwc-button
        no-attention
        slot="secondaryAction"
        label="Back"
        @click=${()=>this._state="pick_platform"}
      ></mwc-button>
    `}_renderConnectSerial(){return p`
      ${this._error?p`<div class="error">${this._error}</div>`:""}

      <div>
        ESPHome will now create your configuration and install it on your
        device.
      </div>

      <div>
        Connect your ESP8266 or ESP32 with a USB cable to your computer and
        click on connect. You need to do this once. Later updates install
        wirelessly.
        <a
          href="https://esphome.io/guides/getting_started_hassio.html#webserial"
          target="_blank"
          >Learn more</a
        >
      </div>

      <div>
        Skip this step to install it on your device later or if you are using a
        Raspberry Pi Pico.
      </div>

      <mwc-button
        slot="primaryAction"
        label="Connect"
        .disabled=${this._busy}
        @click=${this._handleConnectSerialSubmit}
      ></mwc-button>
      <mwc-button
        no-attention
        slot="secondaryAction"
        label="Skip this step"
        .disabled=${this._busy}
        @click=${this._handleConnectSerialSkip}
      ></mwc-button>
    `}_renderDone(){return this._error?this._renderMessage("👀",this._error,!0):p`
      ${this._renderMessage("🎉","Configuration created!",!1)}
      ${this._installed?"":p`
            <div>
              You can now install the configuration to your device. The first
              time this requires a cable.
            </div>
            <div>
              Once the device is installed and connected to your network, you
              will be able to manage it wirelessly.
            </div>
          `}
      ${this._apiKey?p`
            <p>
              Each ESPHome device has a unique encryption key to talk to other
              devices. You will need this key to include your device in Home
              Assistant. You can find the key later in the device menu.
            </p>
            <div class="api-key-container">
              <mwc-textfield
                label="Encryption key"
                readonly
                name="api_key"
                value=${this._apiKey}
                @click=${this._handleCopyApiKey}
              ></mwc-textfield>
              <div class="api-key-banner">Copied!</div>
            </div>
          `:""}
      ${this._installed?p`
            <mwc-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            ></mwc-button>
          `:p`
            <mwc-button
              slot="primaryAction"
              dialogAction="ok"
              label="Install"
              @click=${()=>w(this._configFilename)}
            ></mwc-button>
            <mwc-button
              no-attention
              slot="secondaryAction"
              dialogAction="close"
              label="Skip"
            ></mwc-button>
          `}
    `}firstUpdated(e){super.firstUpdated(e),j().then((e=>{this._hasWifiSecrets=e}))}updated(e){if(super.updated(e),e.has("_state")||e.has("_hasWifiSecrets")){const e=this.shadowRoot.querySelector("mwc-textfield, mwc-radio, mwc-button");e&&e.updateComplete.then((()=>e.focus()))}if("pick_board"==this._state){if(e.has("_state")){(e=>v(`./boards/${e}`))(this._platform.toLowerCase()).then((e=>{this._supportedBoards=e,this._busy=!1}))}if(e.has("_busy")&&!this._busy){const e=this.shadowRoot.querySelector("select");e&&e.focus()}}}async _handleBasicConfigSubmit(){const e=this._inputName,t=e.reportValidity(),c=!!this._hasWifiSecrets||this._inputSSID.reportValidity();if(!t)return void e.focus();if(!c)return void this._inputSSID.focus();const o=e.value;this._data.name=o,this._hasWifiSecrets||(this._wifi={ssid:this._inputSSID.value,password:this._inputPassword.value}),setTimeout((()=>{this._state=D&&H?"connect_webserial":"pick_platform"}),0)}async _handleEmptyConfigSubmit(){const e=this._inputName;if(e.reportValidity()){this._busy=!0,this._data.type="empty",this._data.name=e.value;try{const e=await $(this._data);this._configFilename=e.configuration,C(),this._dialog.close()}catch(e){this._error=e.message||e}finally{this._busy=!1}}else e.focus()}_encodeToBase64(e){const t=(new TextEncoder).encode(e);let c="";for(let e=0;e<t.length;e++)c+=String.fromCharCode(t[e]);return btoa(c)}async _handleConfigFileUpload(){var e;const t=null===(e=this._configFileInput.files)||void 0===e?void 0:e[0];try{const e=await $({type:"upload",name:null==t?void 0:t.name.replace(/\.ya?ml$/,""),file_content:this._encodeToBase64(t?await t.text():"")});this._configFilename=e.configuration,C(),this._state="done"}catch(e){console.error("err was",e.message),this._error=e.message||e}finally{this._busy=!1}}_handleUseRecommendedCheckbox(e){this._useRecommended=e.target.checked}_handlePickBoardSelect(e){this._board=e.target.value}async _handlePickPlatformClick(e){this._supportedBoards=void 0,this._platform=e.currentTarget.platform,this._board=this._platformData().defaultBoard,this._useRecommended&&null!==this._board?await this._handlePickBoardSubmit():(this._busy=!0,this._state="pick_board")}async _handlePickBoardSubmit(){if(this._board&&"basic"===this._data.type){this._data.board=this._board,this._busy=!0;try{this._wifi&&await W(this._wifi.ssid,this._wifi.password);const e=await $(this._data);this._configFilename=e.configuration,C(),this._apiKey=await S(this._configFilename),this._state="done"}catch(e){this._error=e.message||e}finally{this._busy=!1}}}_handleConnectSerialSkip(){this._error=void 0,this._state="pick_platform"}async _handleConnectSerialSubmit(){var e;let t;this._busy=!0,this._error=void 0;let c=!1;if("basic"===this._data.type)try{let o,i;try{o=await navigator.serial.requestPort()}catch(e){return console.error(e),void("NotFoundError"===e.name?B():this._error=e.message||String(e))}t=T(o),this._state="connecting_webserial";try{await t.main(),await t.flashId()}catch(e){return console.error(e),this._state="connect_webserial",void(this._error="Failed to initialize. Try resetting your device or holding the BOOT button while selecting your serial port until it starts preparing the installation.")}this._state="prepare_flash";const r=t.chip.CHIP_NAME;if(!(r in L))return this._state="connect_webserial",void(this._error=`Unable to identify the connected device (${t.chip.CHIP_NAME}).`);i=L[r],this._data.board=null!==(e=F[i].defaultBoard)&&void 0!==e?e:void 0;try{const{configuration:e}=await $(this._data);this._configFilename=e}catch(e){return console.error(e),this._state="connect_webserial",void(this._error="Unable to create the configuration")}c=!0;try{await R(this._configFilename)}catch(e){return console.error(e),this._state="connect_webserial",void(this._error="Unable to compile the configuration")}this._state="flashing";try{const e=await O(this._configFilename);await N(t,e,!0,(e=>{this._writeProgress=e}))}catch(e){return console.error(e),this._state="connect_webserial",void(this._error="Error installing the configuration")}c=!1,this._installed=!0,await(async e=>{await e.setRTS(!0),await K(100),await e.setRTS(!1)})(t.transport),this._state="wait_come_online";try{await new Promise(((e,t)=>{const c=E((t=>{t[this._configFilename]&&(c(),clearTimeout(o),e(void 0))})),o=setTimeout((()=>{c(),t("Timeout")}),2e4)}))}catch(e){console.error(e),this._error="Configuration created but unable to detect the device on the network"}this._state="done"}finally{this._busy=!1,t&&(console.log("Closing port"),await t.transport.disconnect()),c&&await P(this._configFilename)}}async _handleClose(){this.parentNode.removeChild(this)}async _handleCopyApiKey(){var e;q(this._apiKey),this._inputApiKeyBanner.style.setProperty("display","flex"),await K(3e3),null===(e=this._inputApiKeyBanner)||void 0===e||e.style.setProperty("display","none")}};me.styles=[z,A,k`
      :host {
        --mdc-dialog-max-width: 490px;
      }
      .center {
        text-align: center;
      }
      mwc-circular-progress {
        margin-bottom: 16px;
      }
      .progress-pct {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
      }
      .icon {
        font-size: 50px;
        line-height: 80px;
        color: black;
      }
      .error {
        color: var(--alert-error-color);
        margin-bottom: 16px;
      }
      .api-key-container {
        position: relative;
      }
      .api-key-banner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--mdc-theme-primary);
        color: white;
        display: none;
        align-items: center;
        justify-content: center;
        margin: 0 !important;
        font-weight: bold;
        border-radius: 2px;
      }
      .footer-left {
        position: absolute;
        left: 0;
        bottom: 4px;
        z-index: 1;
      }
      .dragging-over {
        outline: 2px dashed var(--mdc-theme-primary);
        background-color: rgba(0, 0, 0, 0.05);
      }
    `],o([r()],me.prototype,"_busy",void 0),o([r()],me.prototype,"_board",void 0),o([r()],me.prototype,"_useRecommended",void 0),o([r()],me.prototype,"_hasWifiSecrets",void 0),o([r()],me.prototype,"_writeProgress",void 0),o([r()],me.prototype,"_state",void 0),o([r()],me.prototype,"_error",void 0),o([i("mwc-textfield[name=name]")],me.prototype,"_inputName",void 0),o([i("mwc-textfield[name=ssid]")],me.prototype,"_inputSSID",void 0),o([i("mwc-textfield[name=password]")],me.prototype,"_inputPassword",void 0),o([i(".api-key-banner")],me.prototype,"_inputApiKeyBanner",void 0),o([i("mwc-dialog")],me.prototype,"_dialog",void 0),o([r()],me.prototype,"_isDraggingOverConfigUpload",void 0),o([i("#config-file-input")],me.prototype,"_configFileInput",void 0),me=o([g("esphome-wizard-dialog")],me);export{me as ESPHomeWizardDialog};
//# sourceMappingURL=c.wr2agQro.js.map
