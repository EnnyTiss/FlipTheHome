import{D as o,r as i,_ as t,e,t as s,n as a,s as n,x as c,y as d,G as l}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";import{c as r}from"./c.CAJ3Ydmf.js";let p=class extends n{constructor(){super(...arguments),this._showCopied=!1}render(){return c`
      <mwc-dialog
        open
        heading=${`API key for ${this.configuration}`}
        scrimClickAction
        @closed=${this._handleClose}
      >
        ${void 0===this._apiKey?"Loading…":null===this._apiKey?c`Unable to automatically extract API key. It may not be set.
                Open the configuration and look for <code>api:</code>.`:c`
                <div class="key" @click=${this._copyApiKey}>
                  <code>${this._apiKey}</code>
                  <mwc-button ?disabled=${this._showCopied}
                    >${this._showCopied?"Copied!":"Copy"}</mwc-button
                  >
                </div>
              `}
        ${null===this._apiKey?c`
              <mwc-button
                @click=${this._editConfig}
                no-attention
                slot="secondaryAction"
                dialogAction="close"
                label="Open configuration"
              ></mwc-button>
            `:""}

        <mwc-button
          no-attention
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        ></mwc-button>
      </mwc-dialog>
    `}firstUpdated(o){super.firstUpdated(o),d(this.configuration).then((o=>{this._apiKey=o}))}_copyApiKey(){r(this._apiKey),this._showCopied=!0,setTimeout((()=>this._showCopied=!1),2e3)}_editConfig(){l(this.configuration)}_handleClose(){this.parentNode.removeChild(this)}};p.styles=[o,i`
      .key {
        position: relative;
        display: flex;
        align-items: center;
      }
      code {
        word-break: break-all;
      }
      .key mwc-button {
        margin-left: 16px;
      }
      .copied {
        font-weight: bold;
        color: var(--alert-success-color);

        position: absolute;
        background-color: var(--mdc-theme-surface, #fff);
        padding: 10px;
        right: 0;
        font-size: 1.2em;
      }
    `],t([e()],p.prototype,"configuration",void 0),t([s()],p.prototype,"_apiKey",void 0),t([s()],p.prototype,"_showCopied",void 0),p=t([a("esphome-show-api-key-dialog")],p);
//# sourceMappingURL=c.CHcprIGG.js.map
