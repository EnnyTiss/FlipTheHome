import{D as t,r as e,_ as o,e as n,i as s,t as i,n as a,s as r,x as c,P as l,G as d,a0 as h}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";import{c as u,C as p,b as g}from"./c.CyL_D25b.js";import{s as m}from"./c.BqFZjOdP.js";class w{constructor(){this.chunks=""}transform(t,e){this.chunks+=t;const o=this.chunks.split(/\r?\n/);this.chunks=o.pop(),o.forEach((t=>e.enqueue(`${t}\r\n`)))}flush(t){t.enqueue(this.chunks)}}class f{transform(t,e){const o=new Date,n=o.getHours().toString().padStart(2,"0"),s=o.getMinutes().toString().padStart(2,"0"),i=o.getSeconds().toString().padStart(2,"0");e.enqueue(`[${n}:${s}:${i}]${t}`)}}class _{constructor(){this.lastHeader="",this.lastColorReset=""}transform(t,e){const o=t.match(/^(.*?\]:)/);if(o){this.lastHeader=o[1];const n=this.lastHeader.match(/\x1b\[[0-9;]*m/g);this.lastColorReset=n?"[0m":"";let s=t;this.lastColorReset&&!t.endsWith("[0m")&&(s=t+this.lastColorReset),e.enqueue(s)}else if(t.trim()&&t.startsWith(" ")&&this.lastHeader){let o=this.lastHeader+t;this.lastColorReset&&!o.endsWith("[0m")&&(o+=this.lastColorReset),e.enqueue(o)}else e.enqueue(t)}}class y extends HTMLElement{constructor(){super(...arguments),this.allowInput=!0}logs(){var t;return(null===(t=this._console)||void 0===t?void 0:t.logs())||""}connectedCallback(){if(this._console)return;if(this.attachShadow({mode:"open"}).innerHTML=`\n      <style>\n        :host, input {\n          background-color: #1c1c1c;\n          color: #ddd;\n          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,\n            monospace;\n          line-height: 1.45;\n          display: flex;\n          flex-direction: column;\n        }\n        form {\n          display: flex;\n          align-items: center;\n          padding: 0 8px 0 16px;\n        }\n        input {\n          flex: 1;\n          padding: 4px;\n          margin: 0 8px;\n          border: 0;\n          outline: none;\n        }\n        ${u}\n      </style>\n      <div class="log"></div>\n      ${this.allowInput?"<form>\n                >\n                <input autofocus>\n              </form>\n            ":""}\n    `,this._console=new p(this.shadowRoot.querySelector("div")),this.allowInput){const t=this.shadowRoot.querySelector("input");this.addEventListener("click",(()=>{var e;""===(null===(e=getSelection())||void 0===e?void 0:e.toString())&&t.focus()})),t.addEventListener("keydown",(t=>{"Enter"===t.key&&(t.preventDefault(),t.stopPropagation(),this._sendCommand())}))}const t=new AbortController,e=this._connect(t.signal);this._cancelConnection=()=>(t.abort(),e)}async _connect(t){this.logger.debug("Starting console read loop");try{await this.port.readable.pipeThrough(new TextDecoderStream,{signal:t}).pipeThrough(new TransformStream(new w)).pipeThrough(new TransformStream(new _)).pipeThrough(new TransformStream(new f)).pipeTo(new WritableStream({write:t=>{this._console.addLine(t.replace("\r",""))}})),t.aborted||(this._console.addLine(""),this._console.addLine(""),this._console.addLine("Terminal disconnected"))}catch(t){this._console.addLine(""),this._console.addLine(""),this._console.addLine(`Terminal disconnected: ${t}`)}finally{await m(100),this.logger.debug("Finished console read loop")}}async _sendCommand(){const t=this.shadowRoot.querySelector("input"),e=t.value,o=new TextEncoder,n=this.port.writable.getWriter();await n.write(o.encode(`${e}\r\n`)),this._console.addLine(`> ${e}\r\n`),t.value="",t.focus();try{n.releaseLock()}catch(t){console.error("Ignoring release lock error",t)}}async disconnect(){this._cancelConnection&&(await this._cancelConnection(),this._cancelConnection=void 0)}async reset(){this.logger.debug("Triggering reset."),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!0}),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!1}),await new Promise((t=>setTimeout(t,1e3)))}}customElements.define("ewt-console",y);let b=class extends r{constructor(){super(...arguments),this._isPico=!1}render(){return c`
      <mwc-dialog
        open
        .heading=${this.configuration?`Logs ${this.configuration}`:"Logs"}
        scrimClickAction
        @closed=${this._handleClose}
      >
        <ewt-console
          .port=${this.port}
          .logger=${console}
          .allowInput=${!1}
        ></ewt-console>
        <mwc-button
          slot="secondaryAction"
          label="Download Logs"
          @click=${this._downloadLogs}
        ></mwc-button>
        ${this.configuration?c`
              <mwc-button
                slot="secondaryAction"
                dialogAction="close"
                label="Edit"
                @click=${this._openEdit}
              ></mwc-button>
            `:""}
        ${this._isPico?"":c`
              <mwc-button
                slot="secondaryAction"
                label="Reset Device"
                @click=${this._resetDevice}
              ></mwc-button>
            `}
        <mwc-button
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        ></mwc-button>
      </mwc-dialog>
    `}firstUpdated(t){super.firstUpdated(t),this.configuration&&l(this.configuration).then((t=>{this._isPico="RP2040"===t.esp_platform}))}async _openEdit(){this.configuration&&d(this.configuration)}async _handleClose(){await this._console.disconnect(),this.closePortOnClose&&await this.port.close(),this.parentNode.removeChild(this)}async _resetDevice(){await this._console.reset()}_downloadLogs(){h(this._console.logs(),(this.configuration?`${g(this.configuration)}_logs`:"logs")+".txt")}};b.styles=[t,e`
      mwc-dialog {
        --mdc-dialog-max-width: 90vw;
      }
      ewt-console {
        width: calc(80vw - 48px);
        height: calc(90vh - 128px);
      }
    `],o([n()],b.prototype,"configuration",void 0),o([n()],b.prototype,"port",void 0),o([n()],b.prototype,"closePortOnClose",void 0),o([s("ewt-console")],b.prototype,"_console",void 0),o([i()],b.prototype,"_isPico",void 0),b=o([a("esphome-logs-webserial-dialog")],b);
//# sourceMappingURL=c.DOnhDkZK.js.map
