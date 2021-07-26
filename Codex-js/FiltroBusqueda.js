document.addEventListener("keyup", (e)=>{
    
    if(e.target.matches('#buscar')){

        const $buscar = document.getElementById('buscar').value.toLowerCase(),
            $filtrar = document.querySelectorAll('.card');

        $filtrar.forEach(el =>{
           el.textContent.toLowerCase().includes($buscar)
            ? el.classList.remove('filter')
            : el.classList.add('filter')
        })

    }
})