import{D as e,r as t,_ as o,e as i,n as a,s as n,x as l,C as s,f as r}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";let c=class extends n{render(){return l`
      <mwc-dialog
        .heading=${`Delete ${this.name}`}
        @closed=${this._handleClose}
        open
      >
        <div>Are you sure you want to delete ${this.name}?</div>
        <mwc-button
          slot="primaryAction"
          class="warning"
          label="Delete"
          dialogAction="close"
          @click=${this._handleDelete}
        ></mwc-button>
        <mwc-button
          slot="secondaryAction"
          no-attention
          label="Cancel"
          dialogAction="cancel"
        ></mwc-button>
      </mwc-dialog>
    `}_handleClose(){this.parentNode.removeChild(this)}async _handleDelete(){await s(this.configuration),r(this,"deleted")}};c.styles=[e,t`
      .warning {
        --mdc-theme-primary: var(--alert-error-color);
      }
    `],o([i()],c.prototype,"name",void 0),o([i()],c.prototype,"configuration",void 0),c=o([a("esphome-delete-device-dialog")],c);
//# sourceMappingURL=c.qeAQOfM_.js.map
