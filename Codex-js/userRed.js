document.addEventListener("offline", (e)=>{
    
    swal({
        icon: 'error',
        text: 'Ha perdido la conección',
        closeOnClickOutside: false
    });

})

document.addEventListener("online", (e)=>{
    
    swal({
        icon: 'success',
        text: 'Conexión Estable',
        closeOnClickOutside: false
    });

})
