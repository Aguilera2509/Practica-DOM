const d = document;
let y = 0,
    x = 0;

//Eventos Casuales de aprendizaje "básico".
d.addEventListener("keydown",(e) =>{

    if(e.key === "a" && e.altKey === true)
    {
        alert("Secreto, Uy!");
    }

    if(e.key === "p" && e.altKey === true)
    {
        prompt("Ingresa tu nombre, para buscarte y aniquilarte");
    }

    if(e.key === "c" && e.altKey === true)
    {
        confirm("Quieres que bese tus labios hasta que tu boca sienta celos?");
    }

});


//Evento MOVER La Pelota Amarilla.
d.addEventListener("keydown", (e) =>{
    
    const $entorno = d.querySelector(".entorno"),
        $ball = d.querySelector(".ball"),
        limitsBall = $ball.getBoundingClientRect(),
        limitsEntorno = $entorno.getBoundingClientRect();   

    switch (e.keyCode) {
        case 38:
            e.preventDefault();
            //Mover("Up");
            if(limitsBall.top > limitsEntorno.top) y--;
            break;

        case 40:
            e.preventDefault();
            //Mover("Down");
            if(limitsBall.bottom < limitsEntorno.bottom) y++;
            break;

        case 37:
            e.preventDefault();
            //Mover("Left");
            if(limitsBall.left > limitsEntorno.left) x--;
            break;

        case 39:
            e.preventDefault();
            //Mover("Right");
            if(limitsBall.right < limitsEntorno.right) x++;
            break;
        default:
            break;
    }

    $ball.style.transform = `translate(${x * 10}px,${y * 10}px)`;
})