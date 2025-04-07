let timer;

function startTimer() {
    const input = document.getElementById("timeInput");
    let duration = parseInt(input.value) * 60;
    let display = document.getElementById('timer');
    const gong = document.getElementById('gong');

    clearInterval(timer);

    timer = setInterval(function () {
        let minutes = Math.floor(duration / 60);
        let seconds = duration % 60;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--duration < 0) {
            clearInterval(timer);
            display.textContent = "¡Tiempo!";
            gong.play();
        }
    }, 1000);
}
