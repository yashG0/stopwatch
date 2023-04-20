window.onload = () => {
    let min = 0;
    let sec = 0;
    let tens = 00;

    const appendMin = document.querySelector('#min');
    const appendSec = document.querySelector('#sec');
    const appendTens = document.querySelector('#tens');

    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const resetBtn = document.querySelector('#reset');

    let interval;

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        };
        if (tens > 9) {
            appendTens.innerHTML = tens;
        };
        if (tens > 99) {
            sec++;
            appendSec.innerHTML = '0' + sec;
            tens = 0
            appendTens.innerHTML = '0' + 0;
        };
        if (sec > 9) {
            appendSec.innerHTML = sec
        };
        if(sec > 59){
            min++;
            appendMin.innerHTML = '0' + min;
            sec = 0;
            appendSec.innerHTML = '0' + 0;
        }
    }

    startBtn.onclick = () =>{
        clearInterval(interval);
        interval = setInterval(startTimer,10);
    };

    stopBtn.onclick = () =>{
        clearInterval(interval);
    }

    resetBtn.onclick = () =>{
        clearInterval(interval);
        tens = '00';
        sec = '00';
        min = '00';
        appendTens.innerHTML = tens;
        appendSec.innerHTML = sec;
        appendMin.innerHTML = min;
    }
};