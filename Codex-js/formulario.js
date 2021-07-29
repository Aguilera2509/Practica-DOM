
let validacionName = true,validacionAdress = true,validacionTitle = true,validacionComment = true;


document.addEventListener("keyup", (e)=>{

    const $name = document.getElementById('exampleFormControlInput1').value,
        $correo = document.getElementById('exampleFormControlInput2').value,
        $titulo = document.getElementById('exampleFormControlInput3').value,
        $comentario = document.getElementById('exampleFormControlTextarea1').value;

    let expresionName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, 
        expresionAdress = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
        expresionTitle = /^[\w'\-,.][^?÷?¿/\\+=@#$%ˆ*(){}|~<>;:[\]]{2,}$/,
        expresionComment = /^[\w'\-,.][^÷\ˆ]{2,300}$/;
    

    if(expresionName.test($name) === false){
        validacionName = false;
        document.getElementById('exampleFormControlInput1').style.border = 'red solid 2px';
    }else{
        document.getElementById('exampleFormControlInput1').style.border = 'green solid 2px';
    }


    if(expresionAdress.test($correo) === false){
        validacionAdress= false;
        document.getElementById('exampleFormControlInput2').style.border = 'red solid 2px';
    }else{
        document.getElementById('exampleFormControlInput2').style.border = 'green solid 2px';
    }


    if(expresionTitle.test($titulo) === false){
        validacionTitle = false;
        document.getElementById('exampleFormControlInput3').style.border = 'red solid 2px';
    }else{
        document.getElementById('exampleFormControlInput3').style.border = 'green solid 2px';
    }
        

    if(expresionComment.test($comentario) === false){
        validacionComment = false
        document.getElementById('exampleFormControlTextarea1').style.border = 'red solid 2px';
    }else{
        document.getElementById('exampleFormControlTextarea1').style.border = 'green solid 2px';   
    }

})

document.addEventListener("click", (e)=>{

    if(e.target.matches('#enviar-btn')){

        if((validacionName === true) && (validacionAdress === true) && (validacionTitle === true) && (validacionComment === true)){
            alert("Hola. falta más, esta en construcción, como tu vida, animo, crack : D");
        }else{
            alert("Las que están en rojo estan mal, tienen que estar todsa en verde, todas son requeridas");
        }
    }

})