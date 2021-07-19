const w = window,
    miStorage = localStorage;

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
    
    const darkMode = () =>{
        $body.classList.add('oscuro-body');
        $dataDark.forEach((el) => el.classList.add('titulos-visibles'));
        $icono.textContent = sun;
        miStorage.setItem("theme","dark");
    }
    
    const lightMode = () =>{
        $body.classList.remove('oscuro-body');
        $dataDark.forEach((el) => el.classList.remove('titulos-visibles'));
        $icono.textContent = moon;
        miStorage.setItem("theme","light");
    }

    if(e.target.matches('.modo-oscuro')){

        if($icono.textContent === moon){
            darkMode();
        }else{
            lightMode();
        }
    }
    

//---------------------------- MENU DE HAMBURGUESA ------------------------------


    const $btnRed = document.getElementById('btn-activator'),
        $secciones = document.getElementById('secciones');

    if((e.target.matches('#btn-activator')) || (e.target.matches('.hamburger-inner')) || (e.target.matches('.hamburger-box'))){
        $btnRed.classList.toggle('is-active');
        $secciones.classList.toggle('is-active');
    }

    if(e.target.matches("[data-link]")){
        $btnRed.classList.remove('is-active');
        $secciones.classList.remove('is-active');
    }
    

})

document.addEventListener("DOMContentLoaded",(e)=>{

    const $body = document.getElementById('cuerpo'),
    $dataDark = document.querySelectorAll("[data-dark]"),
    $icono = document.getElementById('oscuro');

    const darkMode = () =>{
        $body.classList.add('oscuro-body');
        $dataDark.forEach((el) => el.classList.add('titulos-visibles'));
        $icono.textContent = sun;
        miStorage.setItem("theme","dark");
    }

    const lightMode = () =>{
        $body.classList.remove('oscuro-body');
        $dataDark.forEach((el) => el.classList.remove('titulos-visibles'));
        $icono.textContent = moon;
        miStorage.setItem("theme","light");
    }

    if(miStorage.getItem("theme") === null) miStorage.setItem("theme","light");
    if(miStorage.getItem("theme") === "light") lightMode();
    if(miStorage.getItem("theme") === "dark") darkMode();
})

