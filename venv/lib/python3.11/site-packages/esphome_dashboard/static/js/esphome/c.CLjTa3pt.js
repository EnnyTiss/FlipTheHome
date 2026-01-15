import{H as t,I as e,T as o,J as i,r as s,_ as r,e as a,n,s as l,l as c,K as p,L as d,N as h,O as u,x as m,D as _,E as v,t as g,P as w,z as y,Q as f}from"./index-Bt5Cdm1t.js";import{g as b}from"./c.CTjnSiQo.js";import"./c.BU1vbuah.js";import{o as $,c as S}from"./c.D8wUDrsi.js";import{m as P,s as x,b as k}from"./c.BD-J2WFT.js";import{o as C}from"./c.DNcqQXn0.js";class E{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class j{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){var t;null!==(t=this.Y)&&void 0!==t||(this.Y=new Promise((t=>this.Z=t)))}resume(){var t;null===(t=this.Z)||void 0===t||t.call(this),this.Y=this.Z=void 0}}const H=t=>!i(t)&&"function"==typeof t.then,W=1073741823;const D=t(class extends e{constructor(){super(...arguments),this._$C_t=W,this._$Cwt=[],this._$Cq=new E(this),this._$CK=new j}render(...t){var e;return null!==(e=t.find((t=>!H(t))))&&void 0!==e?e:o}update(t,e){const i=this._$Cwt;let s=i.length;this._$Cwt=e;const r=this._$Cq,a=this._$CK;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$C_t);t++){const o=e[t];if(!H(o))return this._$C_t=t,o;t<s&&o===i[t]||(this._$C_t=W,s=0,Promise.resolve(o).then((async t=>{for(;a.get();)await a.get();const e=r.deref();if(void 0!==e){const i=e._$Cwt.indexOf(o);i>-1&&i<e._$C_t&&(e._$C_t=i,e.setValue(t))}})))}return o}disconnected(){this._$Cq.disconnect(),this._$CK.pause()}reconnected(){this._$Cq.reconnect(this),this._$CK.resume()}}),I=(t,e)=>{import("./c.DKEICw-p.js");const o=document.createElement("esphome-compile-dialog");o.configuration=t,o.platformSupportsWebSerial=e,document.body.append(o)},T=async(t,e)=>{import("./c.LyjYJtbF.js");let o=t.port;if(o)await o.close();else try{o=await navigator.serial.requestPort()}catch(o){return void("NotFoundError"===o.name?$((()=>T(t,e))):alert(`Unable to connect: ${o.message}`))}const i=S(o);e&&e();const s=document.createElement("esphome-install-web-dialog");s.params=t,s.esploader=i,document.body.append(s)},A={info:u,warning:h,error:d,success:p};let B=class extends l{constructor(){super(...arguments),this.title="",this.alertType="info",this.rtl=!1}render(){return m`
      <div
        class="issue-type ${c({rtl:this.rtl,[this.alertType]:!0})}"
        role="alert"
      >
        <div class="icon ${this.title?"":"no-title"}">
          <slot name="icon">
            <esphome-svg-icon
              .path=${A[this.alertType]}
            ></esphome-svg-icon>
          </slot>
        </div>
        <div class="content">
          <div class="main-content">
            ${this.title?m`<div class="title">${this.title}</div>`:""}
            <slot></slot>
          </div>
          <div class="action">
            <slot name="action"> </slot>
          </div>
        </div>
      </div>
    `}};B.styles=s`
    .issue-type {
      position: relative;
      padding: 8px;
      display: flex;
      padding-left: var(--esphome-alert-padding-left, 8px);
    }
    .issue-type.rtl {
      flex-direction: row-reverse;
    }
    .issue-type::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.12;
      pointer-events: none;
      content: "";
      border-radius: 4px;
    }
    .icon {
      z-index: 1;
    }
    .icon.no-title {
      align-self: center;
    }
    .issue-type.rtl > .content {
      flex-direction: row-reverse;
      text-align: right;
    }
    .content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .action {
      z-index: 1;
      width: min-content;
      --mdc-theme-primary: var(--primary-text-color);
    }
    .main-content {
      overflow-wrap: anywhere;
      word-break: break-word;
      margin-left: 8px;
      margin-right: 0;
    }
    .issue-type.rtl > .content > .main-content {
      margin-left: 0;
      margin-right: 8px;
    }
    .title {
      margin-top: 2px;
      font-weight: bold;
    }
    .action mwc-button,
    .action ha-icon-button {
      --mdc-theme-primary: var(--primary-text-color);
      --mdc-icon-button-size: 36px;
    }
    .issue-type.info > .icon {
      color: var(--alert-info-color);
    }
    .issue-type.info::after {
      background-color: var(--alert-info-color);
    }

    .issue-type.warning > .icon {
      color: var(--alert-warning-color);
    }
    .issue-type.warning::after {
      background-color: var(--alert-warning-color);
    }

    .issue-type.error > .icon {
      color: var(--alert-error-color);
    }
    .issue-type.error::after {
      background-color: var(--alert-error-color);
    }

    .issue-type.success > .icon {
      color: var(--alert-success-color);
    }
    .issue-type.success::after {
      background-color: var(--alert-success-color);
    }
  `,r([a()],B.prototype,"title",void 0),r([a({attribute:"alert-type"})],B.prototype,"alertType",void 0),r([a({type:Boolean})],B.prototype,"rtl",void 0),B=r([n("esphome-alert")],B);const q=(t,e)=>{import("./c.CfZD6Eke.js");const o=document.createElement("esphome-download-type-dialog");o.configuration=t,o.platformSupportsWebSerial=e,document.body.append(o)};let U=class extends l{constructor(){super(...arguments),this._ethernet=!1,this._isPico=!1,this._shouldDownloadFactory=!1,this._state="pick_option"}get _platformSupportsWebSerial(){return!this._isPico}render(){let t,e;if("pick_option"===this._state)t=`How do you want to install ${this.configuration} on your device?`,e=m`
        <mwc-list-item
          twoline
          hasMeta
          .port=${"OTA"}
          @click=${this._handleLegacyOption}
        >
          <span>${this._ethernet?"Via the network":"Wirelessly"}</span>
          <span slot="secondary">Requires the device to be online</span>
          ${P}
        </mwc-list-item>

        ${this._error?m`<div class="error">${this._error}</div>`:""}

        <mwc-list-item
          twoline
          hasMeta
          ?disabled=${!this._platformSupportsWebSerial}
          @click=${this._handleBrowserInstall}
        >
          <span>Plug into this computer</span>
          <span slot="secondary">
            ${this._platformSupportsWebSerial?"For devices connected via USB to this computer":"Installing this via the web is not supported yet for this device"}
          </span>
          ${P}
        </mwc-list-item>

        <mwc-list-item twoline hasMeta @click=${this._handleServerInstall}>
          <span>Plug into the computer running ESPHome Device Builder</span>
          <span slot="secondary">
            ${"For devices connected via USB to the server"+(this._isPico?" and running ESPHome":"")}
          </span>
          ${P}
        </mwc-list-item>

        <mwc-list-item
          twoline
          hasMeta
          @click=${()=>{this._isPico?this._state="download_instructions":this._handleCompileDialog()}}
        >
          <span>Manual download</span>
          <span slot="secondary">
            Install it yourself
            ${this._isPico?"by copying it to the Pico USB drive":"using ESPHome Web or other tools"}
          </span>
          ${P}
        </mwc-list-item>

        <mwc-button
          no-attention
          slot="secondaryAction"
          dialogAction="close"
          label="Cancel"
        ></mwc-button>
      `;else if("pick_server_port"===this._state)t="Pick Server Port",e=void 0===this._ports?this._renderProgress("Loading serial devices"):m`
              ${this._isPico?m`
                    <esphome-alert type="warning">
                      Installation via the server requires the Pico to already
                      run ESPHome.
                    </esphome-alert>
                  `:""}
              ${0===this._ports.length?this._renderMessage("👀",m`
                      No serial devices found.
                      <br /><br />
                      This list automatically refreshes if you plug one in.
                    `,!1):m`
                    ${this._ports.map((t=>m`
                        <mwc-list-item
                          twoline
                          hasMeta
                          .port=${t.port}
                          @click=${this._handleLegacyOption}
                        >
                          <span>${t.desc}</span>
                          <span slot="secondary">${t.port}</span>
                          ${P}
                        </mwc-list-item>
                      `))}
                  `}
              <mwc-button
                no-attention
                slot="primaryAction"
                label="Back"
                @click=${()=>{this._state="pick_option"}}
              ></mwc-button>
            `;else if("download_instructions"===this._state){let o;const i=D(this._compileConfiguration,m`<a download disabled href="#">Download project</a>
          preparing&nbsp;download…
          <mwc-circular-progress
            density="-8"
            indeterminate
          ></mwc-circular-progress>`);this._isPico?(t="Install ESPHome via the USB drive",o=m`
          <div>
            You can install your ESPHome project ${this.configuration} on your
            device via your file explorer by following these steps:
          </div>
          <ol>
            <li>Disconnect your Raspberry Pi Pico from your computer</li>
            <li>
              Hold the BOOTSEL button and connect the Pico to your computer. The
              Pico will show up as a USB drive named RPI-RP2
            </li>
            <li>${i}</li>
            <li>
              Drag the downloaded file to the USB drive. The installation is
              complete when the drive disappears
            </li>
            <li>Your Pico now runs your ESPHome project 🎉</li>
          </ol>
        `):(t="Install ESPHome via the browser",o=m`
          <div>
            ESPHome can install ${this.configuration} on your device via the
            browser if certain requirements are met:
          </div>
          <ul>
            <li>ESPHome is visited over HTTPS</li>
            <li>Your browser supports WebSerial</li>
          </ul>
          <div>
            Not all requirements are currently met. The easiest solution is to
            download your project and do the installation with ESPHome Web.
            ESPHome Web works 100% in your browser and no data will be shared
            with the ESPHome project.
          </div>
          <ol>
            <li>${i}</li>
            <li>
              <a href=${"https://web.esphome.io/?dashboard_install"} target="_blank" rel="noopener"
                >Open ESPHome Web</a
              >
            </li>
          </ol>
        `),e=m`
        ${o}

        <mwc-button
          no-attention
          slot="secondaryAction"
          label="Back"
          @click=${()=>{this._state="pick_option"}}
        ></mwc-button>
        <mwc-button
          no-attention
          slot="primaryAction"
          dialogAction="close"
          label="Close"
        ></mwc-button>
      `}return m`
      <mwc-dialog
        open
        heading=${t}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${!1}
      >
        ${e}
      </mwc-dialog>
    `}_renderProgress(t,e){return m`
      <div class="center">
        <div>
          <mwc-circular-progress
            active
            ?indeterminate=${void 0===e}
            .progress=${void 0!==e?e/100:void 0}
            density="8"
          ></mwc-circular-progress>
          ${void 0!==e?m`<div class="progress-pct">${e}%</div>`:""}
        </div>
        ${t}
      </div>
    `}_renderMessage(t,e,o){return m`
      <div class="center">
        <div class="icon">${t}</div>
        ${e}
      </div>
      ${o?m`
            <mwc-button
              slot="primaryAction"
              dialogAction="ok"
              label="Close"
            ></mwc-button>
          `:""}
    `}firstUpdated(t){super.firstUpdated(t),this._updateSerialPorts(),w(this.configuration).then((t=>{this._ethernet=t.loaded_integrations.includes("ethernet"),this._isPico="RP2040"===t.esp_platform,this._shouldDownloadFactory="ESP32"===t.esp_platform}))}async _updateSerialPorts(){this._ports=await b()}willUpdate(t){super.willUpdate(t),t.has("_state")&&"download_instructions"===this._state&&!this._compileConfiguration&&(this._abortCompilation=new AbortController,this._compileConfiguration=y(this.configuration).then((()=>this._shouldDownloadFactory?m`<a
                  download
                  href="${f(this.configuration)}"
                  >Download project</a
                >`:m`<button
                  class="link"
                  @click=${()=>{q(this.configuration,this._platformSupportsWebSerial)}}
                  >Download project</a
                >`),(()=>m`
            <a download disabled href="#">Download project</a>
            <span class="prepare-error">preparation failed:</span>
            <button
              class="link"
              dialogAction="close"
              @click=${()=>{I(this.configuration,this._platformSupportsWebSerial)}}
            >
              see what went wrong
            </button>
          `)).finally((()=>{this._abortCompilation=void 0})))}updated(t){if(super.updated(t),t.has("_state"))if("pick_server_port"===this._state){const t=async()=>{await this._updateSerialPorts(),this._updateSerialInterval=window.setTimeout((async()=>{await t()}),5e3)};t()}else"pick_server_port"===t.get("_state")&&(clearTimeout(this._updateSerialInterval),this._updateSerialInterval=void 0)}_storeDialogWidth(){this.style.setProperty("--mdc-dialog-min-width",`${this.shadowRoot.querySelector("mwc-list-item").clientWidth+4}px`)}_handleServerInstall(){this._storeDialogWidth(),this._state="pick_server_port"}_handleCompileDialog(){I(this.configuration,this._platformSupportsWebSerial),this._close()}_handleLegacyOption(t){C(this.configuration,t.currentTarget.port),this._close()}_handleBrowserInstall(){if(!x||!k)return this._storeDialogWidth(),void(this._state="download_instructions");T({configuration:this.configuration},(()=>this._close()))}_close(){this.shadowRoot.querySelector("mwc-dialog").close()}async _handleClose(){var t;null===(t=this._abortCompilation)||void 0===t||t.abort(),this._updateSerialInterval&&(clearTimeout(this._updateSerialInterval),this._updateSerialInterval=void 0),this.parentNode.removeChild(this)}};U.styles=[_,v,s`
      mwc-list-item {
        margin: 0 -20px;
      }
      .center {
        text-align: center;
      }
      mwc-circular-progress {
        margin-bottom: 16px;
      }
      li mwc-circular-progress {
        margin: 0;
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
      .show-ports {
        margin-top: 16px;
      }
      .error {
        padding: 8px 24px;
        background-color: #fff59d;
        margin: 0 -24px;
      }
      .prepare-error {
        color: var(--alert-error-color);
      }
      ul,
      ol {
        padding-left: 24px;
      }
      li {
        line-height: 2em;
      }
      li a {
        display: inline-block;
        margin-right: 8px;
      }
      a[disabled] {
        pointer-events: none;
        color: #999;
      }
      ol {
        margin-bottom: 0;
      }
      a.bottom-left {
        z-index: 1;
        position: absolute;
        line-height: 36px;
        bottom: 9px;
      }
      esphome-alert {
        color: black;
        margin: 0 -24px;
        display: block;
        --esphome-alert-padding-left: 20px;
      }
    `],r([a()],U.prototype,"configuration",void 0),r([g()],U.prototype,"_ethernet",void 0),r([g()],U.prototype,"_isPico",void 0),r([g()],U.prototype,"_shouldDownloadFactory",void 0),r([g()],U.prototype,"_ports",void 0),r([g()],U.prototype,"_state",void 0),r([g()],U.prototype,"_error",void 0),U=r([n("esphome-install-choose-dialog")],U);var O=Object.freeze({__proto__:null});export{I as a,T as b,O as i,q as o};
//# sourceMappingURL=c.CLjTa3pt.js.map
