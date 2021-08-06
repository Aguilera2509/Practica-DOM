let voices = [];

document.addEventListener("DOMContentLoaded", (e)=>{
    
    const $speechSelect = document.getElementById('speech-select'),
        message = new SpeechSynthesisUtterance();

    window.speechSynthesis.addEventListener("voiceschanged", (e)=>{

        voices = speechSynthesis.getVoices();

        voices.forEach((voice) =>{
            const $option = document.createElement('option');

            $option.value = voice.name;
            $option.textContent = `${voice.name} ---- ${voice.lang}`;

            $speechSelect.appendChild($option);
        })
    })

    document.addEventListener("change",(e)=>{
    
        if(e.target === $speechSelect){
            message.voice = voice.find(voice => voice.name === e.target.value);
        }
    
    })
})


document.addEventListener("click",(e)=>{

    const $btn = document.getElementById('voz-btn');

    if(e.target.matches('#voz-btn')){

        const $value_input = document.getElementById('leer').value;

        speechSynthesis.speak(new SpeechSynthesisUtterance($value_input));

        $btn.disabled = true;
        document.getElementById('reconocimiento-voz-btn').disabled = true;

        setTimeout(()=>{
            $btn.disabled = false;
            document.getElementById('reconocimiento-voz-btn').disabled = false;
        }, 3000);
    }

})
