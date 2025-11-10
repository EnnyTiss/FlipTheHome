import{D as e,r as t,_ as o,e as a,t as r,i,n as s,s as n,x as l}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";const c=()=>import("./c.DERNq_Ar.js");let m=class extends n{constructor(){super(...arguments),this._cleanNameInput=e=>{this._error=void 0;const t=e.target;t.value=t.value.toLowerCase().replace(/[ \._]/g,"-").replace(/[^a-z0-9-]/g,"")},this._cleanNameBlur=e=>{const t=e.target;t.value=t.value.replace(/^-+/,"").replace(/-+$/,"")}}render(){return l`
      <mwc-dialog
        open
        heading=${`Rename ${this.configuration}`}
        scrimClickAction
        @closed=${this._handleClose}
      >
        ${this._error?l`<div class="error">${this._error}</div>`:""}

        <mwc-textfield
          label="New Name"
          name="name"
          required
          dialogInitialFocus
          spellcheck="false"
          pattern="^[a-z0-9-]+$"
          helper="Lowercase letters (a-z), numbers (0-9) or dash (-)"
          @input=${this._cleanNameInput}
          @blur=${this._cleanNameBlur}
        ></mwc-textfield>

        <mwc-button
          no-attention
          slot="secondaryAction"
          dialogAction="close"
          label="Close"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          label="Rename"
          @click=${this._handleRename}
        ></mwc-button>
      </mwc-dialog>
    `}firstUpdated(e){super.firstUpdated(e);this._inputName.value=this.suggestedName}async _handleRename(e){c();const t=this._inputName;if(!t.reportValidity())return void t.focus();const o=t.value;o!==this.suggestedName&&((e,t)=>{c();const o=document.createElement("esphome-rename-process-dialog");o.configuration=e,o.newName=t,document.body.append(o)})(this.configuration,o),this.shadowRoot.querySelector("mwc-dialog").close()}_handleClose(){this.parentNode.removeChild(this)}};m.styles=[e,t`
      .error {
        color: var(--alert-error-color);
        margin-bottom: 16px;
      }
    `],o([a()],m.prototype,"configuration",void 0),o([r()],m.prototype,"_error",void 0),o([i("mwc-textfield[name=name]")],m.prototype,"_inputName",void 0),m=o([s("esphome-rename-dialog")],m);
//# sourceMappingURL=c.BtEEN235.js.map
