document.addEventListener("DOMContentLoaded", (e)=>{

    if(navigator.mediaDevices.getUserMedia){

        let $video = document.getElementById('WebCam');
    
        navigator.mediaDevices.getUserMedia({ audio: true, video: true
        }).then((stream)=>{
            $video.srcObject = stream;
        }).catch((err)=> {
            console.log(err);   
            $video.insertAdjacentHTML("beforebegin", `<h4 data-dark>Permiso bloqueado</h4>`);
        });

    }

})