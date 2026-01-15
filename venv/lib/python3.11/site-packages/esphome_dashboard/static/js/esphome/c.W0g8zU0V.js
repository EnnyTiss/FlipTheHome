import{D as o,_ as t,e as s,t as e,n as i,s as r,x as n,G as a}from"./index-Bt5Cdm1t.js";import"./c.CyL_D25b.js";import{o as l}from"./c.CRnhmYcb.js";import"./c.BU1vbuah.js";import"./c.CTjnSiQo.js";import"./c.BD-J2WFT.js";let c=class extends r{render(){return n`
      <esphome-process-dialog
        always-show-close
        .heading=${`Logs ${this.configuration}`}
        .type=${"logs"}
        .spawnParams=${{configuration:this.configuration,port:this.target}}
        @closed=${this._handleClose}
        @process-done=${this._handleProcessDone}
      >
        <mwc-button
          slot="secondaryAction"
          dialogAction="close"
          label="Edit"
          @click=${this._openEdit}
        ></mwc-button>
        ${void 0===this._result||0===this._result?"":n`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Retry"
                @click=${this._handleRetry}
              ></mwc-button>
            `}
      </esphome-process-dialog>
    `}_openEdit(){a(this.configuration)}_handleProcessDone(o){this._result=o.detail}_handleRetry(){l(this.configuration,this.target)}_handleClose(){this.parentNode.removeChild(this)}};c.styles=[o],t([s()],c.prototype,"configuration",void 0),t([s()],c.prototype,"target",void 0),t([e()],c.prototype,"_result",void 0),c=t([i("esphome-logs-dialog")],c);
//# sourceMappingURL=c.W0g8zU0V.js.map
