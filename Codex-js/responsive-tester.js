var salir;

document.addEventListener("click", (e) =>{
        
    const $sitio = document.getElementById('sitio').value,
        $x = document.getElementById('x').value,
        $y = document.getElementById('y').value;
    
    let configuracion = `width=${$x},height=${$y}`,
        url = true, ancho = true, altura = true;

    if($sitio === "" || $sitio === " ") url = false;
    if($x === "" || $x === " ") ancho = false;
    if($y === "" || $y === " ") altura = false; 


    if(e.target.matches('#abrir-ventana')){

        if((url === true) && (ancho === true) && (altura === true)){
            e.preventDefault()
            salir = window.open($sitio,$sitio,configuracion);
        }else{
            swal({
                icon: 'error',
                title: 'Error',
                text: 'No estas introduciendo todos los datos requeridos o los estas introduciendo mal',
                closeOnClickOutside: false
            });
        }
    }

    if(e.target.matches('#cerrar-ventana')){
        try{
            salir.close();
        }
        catch(error){
            swal({
                icon: 'warning',
                title: 'Warning',
                text: 'No se puede cerrar la ventana si no se abierto posteriormente',
                closeOnClickOutside: false
            });
        }
    }

})

