
let validacionName = true,validacionAdress = true,validacionTitle = true,validacionComment = true;

document.addEventListener("DOMContentLoaded", (e)=>{
    document.getElementById('enviar-btn').disabled = true;
})

document.addEventListener("keyup", (e)=>{
    
    const $name = document.getElementById('exampleFormControlInput1').value,
        $correo = document.getElementById('exampleFormControlInput2').value,
        $titulo = document.getElementById('exampleFormControlInput3').value,
        $comentario = document.getElementById('exampleFormControlTextarea1').value;
    
    let expresionName = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/, 
        expresionAdress = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i,
        expresionTitle = /^[\w'\-,.][^?÷?¿/\\+=@#$%ˆ*(){}|~<>;:[\]]{2,}$/,
        expresionComment = /^[\w'\-,.][^÷\ˆ]{2,300}$/;

    document.getElementById('enviar-btn').disabled = false;

    if(expresionName.test($name) === false){
        validacionName = false;
        document.getElementById('exampleFormControlInput1').style.border = 'red solid 2px';
    }else{
        validacionName = true;
        document.getElementById('exampleFormControlInput1').style.border = 'green solid 2px';
    }


    if(expresionAdress.test($correo) === false){
        validacionAdress= false;
        document.getElementById('exampleFormControlInput2').style.border = 'red solid 2px';
    }else{
        validacionAdress = true;
        document.getElementById('exampleFormControlInput2').style.border = 'green solid 2px';
    }


    if(expresionTitle.test($titulo) === false){
        validacionTitle = false;
        document.getElementById('exampleFormControlInput3').style.border = 'red solid 2px';
    }else{
        validacionTitle = true;
        document.getElementById('exampleFormControlInput3').style.border = 'green solid 2px';
    }
        

    if(expresionComment.test($comentario) === false){
        validacionComment = false;
        document.getElementById('exampleFormControlTextarea1').style.border = 'red solid 2px';
    }else{
        validacionComment = true;
        document.getElementById('exampleFormControlTextarea1').style.border = 'green solid 2px';   
    }

})

document.addEventListener("submit", (e)=>{

    if((validacionName === true) && (validacionAdress === true) && (validacionTitle === true) && (validacionComment === true)){
        const $form = document.getElementById('content-form'),
            $nice = document.getElementById('nice'),
            $loaded = document.getElementById('load');

        $loaded.classList.remove('none');
        alert("Hola. Falta más, esta en construcción como tu vida, animo, crack : D");
        document.getElementById('enviar-btn').disabled = true;

        const $permiso = document.querySelectorAll('#content-form [required]');
        
        setTimeout(()=>{
            $permiso.forEach((el) => el.disabled=true); 
        },10);
        
        setTimeout(()=>{
            $loaded.classList.add('none');
            $nice.classList.remove('none');
        
            setTimeout(()=>{
                $form.reset();
                $nice.classList.add('none');
                $permiso.forEach((el) => el.disabled=false);
            },5000);
            
        },3000);

    }else{
        alert("No ha sido aprobada su solicitud");
    }

})