document.addEventListener("DOMContentLoaded", (e)=>{

    const $video = document.querySelectorAll("[data-smart-video]");

    const cb = (entries) =>{

        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            window.addEventListener("visibilitychange", (e)=>{
                document.visibilityState === "visible"
                 ? entry.target.pause()
                 : entry.target.pause()
            })
        });
    };

    const observer = new IntersectionObserver(cb,{ threshold: 0.5 });

    $video.forEach((el) => { observer.observe(el)});

})