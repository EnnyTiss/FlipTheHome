const e=async e=>{if(navigator.clipboard)try{return void await navigator.clipboard.writeText(e)}catch{}const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)};export{e as c};
//# sourceMappingURL=c.CAJ3Ydmf.js.map
