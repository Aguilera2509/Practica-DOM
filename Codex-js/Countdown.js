var end = new Date('09/25/2021 1:30 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'Feliz cumpleaños, Choco!!! :D';

            return;
        }
        let days = ("0" + Math.floor(distance / _day)).slice(-2);
        let hours = ("0" + Math.floor((distance % _day) / _hour)).slice(-2);
        let minutes = ("0" + Math.floor((distance % _hour) / _minute)).slice(-2);
        let seconds =  ("0" + Math.floor((distance % _minute) / _second)).slice(-2);

        document.getElementById('countdown').innerHTML = days + ' dias, ';
        document.getElementById('countdown').innerHTML += hours + ' horas, ';
        document.getElementById('countdown').innerHTML += minutes + ' minutos y ';
        document.getElementById('countdown').innerHTML += seconds + ' segundos, eso falta para mi cumpleaños';
    }

    timer = setInterval(showRemaining, 1000);