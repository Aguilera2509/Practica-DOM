//BOTTÓN DE RELOJ, INICIO!
let comenzar = () =>{
    let fecha = new Date().toLocaleDateString();
    
    tiempo = setInterval(() =>{
        let hora = new Date().toLocaleTimeString();
        
        document.getElementById("time").innerHTML = `<h3>${hora}</h3>`;
        document.getElementById("date").innerHTML = `<h3>${fecha}</h3>`;
        
    },1000);

    document.getElementById("start-Reloj").disabled = true;
   
};

//BOTTÓN DE RELOJ, DETENER(FIN)!
let finalizar = () =>{

 try{
 
    clearInterval(tiempo);
     
    swal({  
        icon: 'success',
        title: 'Detener tiempo',
        text: 'Ya el tiempo no esta corriendo como puede ver',
        closeOnClickOutside: false
    });

    document.getElementById("start-Reloj").disabled = false;
}

 catch(error){

    swal({
        icon: 'error',
        title: 'Error',
        text: 'No puede detener el tiempo del reloj digital, si no ha comenzado',
        closeOnClickOutside: false
    });

   }

};


//DEFINIR EL AUDIO A SONAR
const $ruidoAlarma = document.createElement('audio');
$ruidoAlarma.src = "Sonido-Alarma/samsung-lg-galaxy-alarm.mp3";

let sonarAlarma = () =>{

    alarma = setInterval(() => {
        
        $ruidoAlarma.play();

    }, 100);

    document.getElementById("start-Alarma").disabled = true;

}

let detenerAlarma = () =>{


 try{

    clearInterval(alarma);
    $ruidoAlarma.pause();
    $ruidoAlarma.currentTime = 0;
    document.getElementById("start-Alarma").disabled = false;

    swal({
        icon: 'success',
        title: 'Detener alarma',
        text: 'Como puede escuchar ya se detuvo la alarma',
        closeOnClickOutside: false,
    });

    }
 catch(error){

    swal({
        icon: 'error',
        tilte: 'Error',
        text: 'No puede detener el ruido de la alarma, si no esta activada la alarma',
        closeOnClickOutside: false
    });

 }
}