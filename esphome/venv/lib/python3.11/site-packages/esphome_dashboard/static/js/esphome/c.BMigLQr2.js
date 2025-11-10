import{D as o,_ as t,e as i,n as s,s as e,x as n,G as a,o as l}from"./index-Bt5Cdm1t.js";import"./c.CyL_D25b.js";import"./c.BU1vbuah.js";let c=class extends e{render(){return n`
      <esphome-process-dialog
        .heading=${`Clean ${this.configuration}`}
        .type=${"clean"}
        .spawnParams=${{configuration:this.configuration}}
        @closed=${this._handleClose}
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
    `}_openEdit(){a(this.configuration)}_openInstall(){l(this.configuration)}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],t([i()],c.prototype,"configuration",void 0),c=t([s("esphome-clean-dialog")],c);
//# sourceMappingURL=c.BMigLQr2.js.map
