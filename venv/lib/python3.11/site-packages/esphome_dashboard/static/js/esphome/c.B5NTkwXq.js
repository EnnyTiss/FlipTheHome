import{D as o,_ as i,e as t,t as s,n as e,s as n,x as a,G as l,o as d}from"./index-Bt5Cdm1t.js";import"./c.CyL_D25b.js";import"./c.BU1vbuah.js";let c=class extends n{render(){const o=void 0===this._valid?"":this._valid?"✅":"❌";return a`
      <esphome-process-dialog
        .heading=${`Validate ${this.configuration} ${o}`}
        .type=${"validate"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="Edit"
          @click=${this._openEdit}
        ></mwc-button>
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="Install"
          @click=${this._openInstall}
        ></mwc-button>
      </esphome-process-dialog>
    `}_openEdit(){l(this.configuration)}_openInstall(){d(this.configuration)}_handleProcessDone(o){this._valid=0==o.detail}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],i([t()],c.prototype,"configuration",void 0),i([s()],c.prototype,"_valid",void 0),c=i([e("esphome-validate-dialog")],c);
//# sourceMappingURL=c.B5NTkwXq.js.map
