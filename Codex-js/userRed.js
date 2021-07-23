window.addEventListener("offline", (e)=>{
    
    swal({
        icon: 'error',
        title: 'Se ha perdido la conexión',
        closeOnClickOutside: false
    });

})

window.addEventListener("online", (e)=>{
    
    swal({
        icon: 'success',
        title: 'Se ha reestablecido la conexión',
        closeOnClickOutside: false
    });

})
