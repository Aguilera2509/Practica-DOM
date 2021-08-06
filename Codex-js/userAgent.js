let rec;

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


    document.addEventListener("click", (e)=>{
    
        if(e.target.matches('#reconocimiento-voz-btn')){
  
            if((isBrowser.chrome()) || (isBrowser.safari()) || (isBrowser.edge())){
    
                rec = new webkitSpeechRecognition();
                rec.lang = "es-AR";
                rec.continuous = true;
                rec.interim = true;
                rec.addEventListener("result", iniciar);

                if(!(navigator.mediaDevices.getUserMedia)) return swal({title: 'error', text: 'No disponible'});

                //CONTROLAR EL ERROR DEL MICROFONO DESACTIVADO. Activación manual del usuario..... 
                navigator.mediaDevices.getUserMedia({audio: true}).then(()=>{
                    rec.start();
                    document.getElementById('reconocimiento-voz-btn').disabled = true;
                    document.getElementById('voz-btn').disabled = true;
                }).catch((err)=>{
                    swal({
                        icon: 'warning',
                        title: 'Microfono desactivado',
                        text: `Active el microfono. Error: ${err}`
                    });
                });
            }else{
                swal({
                    icon: 'error',
                    title: 'Insoportable',
                    text: 'Lo siento si no estas en Chrome, Safari o Edge no se puede correr este código, el nagevador no lo soporta'
                });
            }
    
        }
    
    })
    
})

function iniciar(event){
    for(i = event.resultIndex; i < event.results.length; i++){
        document.getElementById('leer').value = event.results[i][0].transcript;   
    }
    rec.stop();
    document.getElementById('reconocimiento-voz-btn').disabled = false;
    document.getElementById('voz-btn').disabled = false;
}
