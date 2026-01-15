import{_ as e,n as t,$ as o,f as s,D as n,r,e as a,t as l,s as i,x as c,a0 as d}from"./index-Bt5Cdm1t.js";import"./c.BU1vbuah.js";class h{constructor(e){this.targetElement=e,this.state={bold:!1,italic:!1,underline:!1,strikethrough:!1,foregroundColor:null,backgroundColor:null,carriageReturn:!1,lines:[],secret:!1}}logs(){return this.targetElement.innerText}processLine(e){const t=/(?:\x1b|\\033)(?:\[(.*?)[@-~]|\].*?(?:\x07|\x07\\))/g;let o=0;const s=document.createElement("span");s.classList.add("line");const n=e=>{if(""===e)return;const t=document.createElement("span");if(this.state.bold&&t.classList.add("log-bold"),this.state.italic&&t.classList.add("log-italic"),this.state.underline&&t.classList.add("log-underline"),this.state.strikethrough&&t.classList.add("log-strikethrough"),this.state.secret&&t.classList.add("log-secret"),null!==this.state.foregroundColor&&t.classList.add(`log-fg-${this.state.foregroundColor}`),null!==this.state.backgroundColor&&t.classList.add(`log-bg-${this.state.backgroundColor}`),t.appendChild(document.createTextNode(e)),s.appendChild(t),this.state.secret){const e=document.createElement("span");e.classList.add("log-secret-redacted"),e.appendChild(document.createTextNode("[redacted]")),s.appendChild(e)}};for(;;){const s=t.exec(e);if(null===s)break;const r=s.index;if(n(e.substring(o,r)),o=r+s[0].length,void 0!==s[1])for(const e of s[1].split(";"))switch(parseInt(e)){case 0:this.state.bold=!1,this.state.italic=!1,this.state.underline=!1,this.state.strikethrough=!1,this.state.foregroundColor=null,this.state.backgroundColor=null,this.state.secret=!1;break;case 1:this.state.bold=!0;break;case 3:this.state.italic=!0;break;case 4:this.state.underline=!0;break;case 5:this.state.secret=!0;break;case 6:this.state.secret=!1;break;case 9:this.state.strikethrough=!0;break;case 22:this.state.bold=!1;break;case 23:this.state.italic=!1;break;case 24:this.state.underline=!1;break;case 29:this.state.strikethrough=!1;break;case 30:this.state.foregroundColor="black";break;case 31:this.state.foregroundColor="red";break;case 32:this.state.foregroundColor="green";break;case 33:this.state.foregroundColor="yellow";break;case 34:this.state.foregroundColor="blue";break;case 35:this.state.foregroundColor="magenta";break;case 36:this.state.foregroundColor="cyan";break;case 37:this.state.foregroundColor="white";break;case 39:this.state.foregroundColor=null;break;case 41:this.state.backgroundColor="red";break;case 42:this.state.backgroundColor="green";break;case 43:this.state.backgroundColor="yellow";break;case 44:this.state.backgroundColor="blue";break;case 45:this.state.backgroundColor="magenta";break;case 46:this.state.backgroundColor="cyan";break;case 47:this.state.backgroundColor="white";break;case 40:case 49:this.state.backgroundColor=null}}return n(e.substring(o)),s}processLines(){const e=this.targetElement.scrollTop>this.targetElement.scrollHeight-this.targetElement.offsetHeight-50,t=this.state.carriageReturn,o=document.createDocumentFragment();if(0!=this.state.lines.length){for(const e of this.state.lines)this.state.carriageReturn&&"\n"!==e&&o.childElementCount&&o.removeChild(o.lastChild),o.appendChild(this.processLine(e)),this.state.carriageReturn=e.includes("\r");t&&"\n"!==this.state.lines[0]?this.targetElement.replaceChild(o,this.targetElement.lastChild):this.targetElement.appendChild(o),this.state.lines=[],e&&(this.targetElement.scrollTop=this.targetElement.scrollHeight)}}addLine(e){0==this.state.lines.length&&setTimeout((()=>this.processLines()),0),this.state.lines.push(e)}}const g='\n  .log {\n    flex: 1;\n    background-color: #1c1c1c;\n    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,\n      monospace;\n    font-size: 12px;\n    padding: 16px;\n    overflow: auto;\n    line-height: 1.45;\n    border-radius: 3px;\n    white-space: pre-wrap;\n    overflow-wrap: break-word;\n    color: #ddd;\n  }\n\n  .log-bold {\n    font-weight: bold;\n  }\n  .log-italic {\n    font-style: italic;\n  }\n  .log-underline {\n    text-decoration: underline;\n  }\n  .log-strikethrough {\n    text-decoration: line-through;\n  }\n  .log-underline.log-strikethrough {\n    text-decoration: underline line-through;\n  }\n  .log-secret {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  .log-secret-redacted {\n    opacity: 0;\n    width: 1px;\n    font-size: 1px;\n  }\n  .log-fg-black {\n    color: rgb(128, 128, 128);\n  }\n  .log-fg-red {\n    color: rgb(255, 0, 0);\n  }\n  .log-fg-green {\n    color: rgb(0, 255, 0);\n  }\n  .log-fg-yellow {\n    color: rgb(255, 255, 0);\n  }\n  .log-fg-blue {\n    color: rgb(0, 0, 255);\n  }\n  .log-fg-magenta {\n    color: rgb(255, 0, 255);\n  }\n  .log-fg-cyan {\n    color: rgb(0, 255, 255);\n  }\n  .log-fg-white {\n    color: rgb(187, 187, 187);\n  }\n  .log-bg-black {\n    background-color: rgb(0, 0, 0);\n  }\n  .log-bg-red {\n    background-color: rgb(255, 0, 0);\n  }\n  .log-bg-green {\n    background-color: rgb(0, 255, 0);\n  }\n  .log-bg-yellow {\n    background-color: rgb(255, 255, 0);\n  }\n  .log-bg-blue {\n    background-color: rgb(0, 0, 255);\n  }\n  .log-bg-magenta {\n    background-color: rgb(255, 0, 255);\n  }\n  .log-bg-cyan {\n    background-color: rgb(0, 255, 255);\n  }\n  .log-bg-white {\n    background-color: rgb(255, 255, 255);\n  }\n';let u=class extends HTMLElement{logs(){var e;return(null===(e=this._coloredConsole)||void 0===e?void 0:e.logs())||""}connectedCallback(){if(this._coloredConsole)return;const e=this.attachShadow({mode:"open"});e.innerHTML=`\n      <style>\n        :host {\n          display: flex;\n        }\n        ${g}\n      </style>\n      <div class="log"></div>\n    `;const t=new h(e.querySelector("div"));this._coloredConsole=t,this._abortController=new AbortController,o(this.type,this.spawnParams,(e=>{t.addLine(e)}),this._abortController).then((()=>{s(this,"process-done",0)}),(e=>{s(this,"process-done",e.code)}))}disconnectedCallback(){this._abortController&&(this._abortController.abort(),this._abortController=void 0)}};u=e([t("esphome-remote-process")],u);const b=e=>e.replace(/\.[^/.]+$/,"");let p=class extends i{constructor(){super(...arguments),this.alwaysShowClose=!1}render(){return c`
      <mwc-dialog
        open
        heading=${this.heading}
        scrimClickAction
        @closed=${this._handleClose}
      >
        <esphome-remote-process
          .type=${this.type}
          .spawnParams=${this.spawnParams}
          @process-done=${this._handleProcessDone}
        ></esphome-remote-process>

        <mwc-button
          slot="secondaryAction"
          label="Download Logs"
          @click=${this._downloadLogs}
        ></mwc-button>

        <slot name="secondaryAction" slot="secondaryAction"></slot>

        <mwc-button
          slot="primaryAction"
          dialogAction="close"
          .label=${void 0!==this._result||this.alwaysShowClose?"Close":"Stop"}
        ></mwc-button>
      </mwc-dialog>
    `}_handleProcessDone(e){this._result=e.detail}_handleClose(){s(this,"closed")}_downloadLogs(){var e;let t="logs";(null===(e=this.spawnParams)||void 0===e?void 0:e.configuration)&&(t+=`_${b(this.spawnParams.configuration)}`),t+=`_${this.type}.txt`,d(this.shadowRoot.querySelector("esphome-remote-process").logs(),t)}};p.styles=[n,r`
      :host {
        --height-header-footer-padding: 152px;
      }
      mwc-dialog {
        --mdc-dialog-min-width: 95vw;
        --mdc-dialog-max-width: 95vw;
      }

      esphome-remote-process {
        height: calc(90vh - var(--height-header-footer-padding));
      }

      @media only screen and (max-width: 450px) {
        esphome-remote-process {
          height: calc(
            90vh - var(--height-header-footer-padding) - env(
                safe-area-inset-bottom
              )
          );
          margin-left: -24px;
          margin-right: -24px;
        }
      }
    `],e([a()],p.prototype,"heading",void 0),e([a()],p.prototype,"spawnParams",void 0),e([a()],p.prototype,"type",void 0),e([a({type:Boolean,attribute:"always-show-close"})],p.prototype,"alwaysShowClose",void 0),e([l()],p.prototype,"_result",void 0),p=e([t("esphome-process-dialog")],p);export{h as C,b,g as c};
//# sourceMappingURL=c.CyL_D25b.js.map
