const getWinner = () =>{
    
    const $players = document.querySelectorAll('.player'),
        random = Math.floor(Math.random() * $players.length),
        winner = $players[random];

    return `El ganador es: ${winner.textContent}`;
};

document.addEventListener("click", (e)=>{

    if(e.target.matches('#winner-btn')){
        let result = getWinner();
        alert(result);
    }
})