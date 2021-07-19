function tamanio(){

    let ancho = window.innerWidth;
    let altura = window.innerHeight;
    
    const $video = document.getElementById('video'),
    $mapa = document.getElementById('map');
    
    if((ancho >= 865) && (altura >= 510)){
        $video.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/XPzCY7NDuE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    }else{
        $video.innerHTML = `<a href="https://www.youtube.com/watch?v=XPzCY7NDuE0&t=1s" target="_blank">Ver vídeo</a>`;
    }
    
    if((ancho >= 865) && (altura >= 510)){
        $mapa.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6303592.624861041!2d-103.67269200000001!3d39.516157873902465!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1626711241268!5m2!1ses!2sve" width="560" height="315" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }else{
        $mapa.innerHTML = `<a href="https://www.google.com/maps/@39.5161579,-103.672692,6z?hl=es" target="_blank">Ver mapa</a>`;
    }

}

window.addEventListener("DOMContentLoaded",(e)=>{

tamanio();
    
})

window.addEventListener("resize", (e)=>{

window.onresize=tamanio;

})