document.addEventListener("DOMContentLoaded",(e)=>{

    const $generalInfo = document.getElementById('user-agent');

    let info = navigator.userAgent;
    
    const isMobile = {
        android: ()=> info.match(/android/i),
        ios: ()=> info.match(/iphone|ipad|ipod/i),
        windows: ()=> info.match(/windows phone/i),
        any: function(){
            return this.android() || this.ios() || this.windows();
        }
    };

    const isDesktop = {
        linux: ()=> info.match(/linux/i),
        macOs: ()=> info.match(/mac os/i),
        windows: ()=> info.match(/windows nt/i),
        any: function(){
            return this.linux() || this.macOs() || this.windows();
        }
    };

    const isBrowser = {
        chrome: ()=> info.match(/chrome/i),
        firefox: ()=> info.match(/firefox/i),
        safari: ()=> info.match(/safari/i),
        opera: ()=> info.match(/opera|opera mini/i),
        ie: ()=> info.match(/msie|iemobile/i),
        edge: ()=> info.match(/edge/i),
        any: function(){
            return this.chrome() || this.firefox() || this.safari() || 
            this.opera() || this.ie() || this.edge();
        }
    };


    $generalInfo.innerHTML = `<h4>User Agent: <b>${info}</b> </h4>`;
    $generalInfo.innerHTML += `<h4>Plataforma: <b>${isMobile.any()? isMobile.any():isDesktop.any()}</b></h4>`;
    $generalInfo.innerHTML += `<h4>Navegador: <b>${isBrowser.any()}</b></h4>`;

})