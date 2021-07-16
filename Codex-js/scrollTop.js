const w = window;

w.addEventListener("scroll", (e) =>{
    
    const $btn = document.getElementById('visible'),
        botonY = w.pageYOffset;

    if(botonY > 900){
        $btn.classList.add("hidden");
    }
    else{
        $btn.classList.remove("hidden");
    }
})



//------------------------------ MODO OSCURO ------------------------------------

document.addEventListener("click",(e) =>{

    const $body = document.getElementById('cuerpo'),
        $dataDark = document.querySelectorAll("[data-dark]"),
        $icono = document.getElementById('oscuro');

    let moon = "🌙",
        sun = "☀";

    if(e.target.matches('.modo-oscuro')){

        if($icono.textContent === moon){
            $body.classList.add('oscuro-body');
            $dataDark.forEach((el) => el.classList.add('titulos-visibles'));
            $icono.textContent = sun;
        }
        else{
            $body.classList.remove('oscuro-body');
            $dataDark.forEach((el) => el.classList.remove('titulos-visibles'));
            $icono.textContent = moon;
        }

    }


//---------------------------- MENU DE HAMBURGUESA ------------------------------


    const $btnRed = document.getElementById('btn-activator'),
        $secciones = document.getElementById('secciones');

    if(e.target.matches('#btn-activator') || e.target.matches('.hamburger-box')){
        $btnRed.classList.toggle('is-active');
        $secciones.classList.toggle('is-active');
    }

    

})