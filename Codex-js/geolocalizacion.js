function onSuccess(position){

    const $lon = document.getElementById('longitud'),
        $lat = document.getElementById('latitud'),
        $link = document.getElementById('link');

    let latitude = position.coords.latitude,
        longitude = position.coords.longitude;

    $lat.innerHTML = `<h4>Latitud: ${latitude}</h4>`;
    $lon.innerHTML = `<h4>Longitud: ${longitude}</h4>`;

    let direccion = "https://maps.google.com/?ll" + latitude + "," + longitude + "&z=14";

    $link.textContent = "Mirar posición en el mapa";
    $link.href = direccion;

}

function onError(){

    const $lon = document.getElementById('longitud');

    $lon.insertAdjacentHTML("beforebegin", "<h4 data-dark>Ocurrio un error o no hay permisos para ver la ubicación</h4>");
}

var config = {
    enableHighAccuracy: true, 
    maximumAge        : 0, 
    timeout           : 27000
};

document.addEventListener("DOMContentLoaded", (e)=>{
    navigator.geolocation.getCurrentPosition(onSuccess,onError,config);
})