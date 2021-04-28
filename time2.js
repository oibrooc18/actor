let timerShow = document.getElementById("timer");
document.addEventListener("DOMContentLoaded", function(){
   timeMinut=180;
});
timer = setInterval(function () {
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
}, 1000)

