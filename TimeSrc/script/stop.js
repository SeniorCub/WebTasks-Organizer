let startTime;
let interval;
let running = false;

const display = document.getElementById("display");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function updateTime() {
    const currentTime = new Date().getTime();
    const elapsedTime = new Date(currentTime - startTime);
    const hours = elapsedTime.getUTCHours().toString().padStart(2, "0");
    const minutes = elapsedTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = elapsedTime.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = elapsedTime.getUTCMilliseconds().toString().padStart(3, "0");
    display.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startStop() {
    if (running) {
        clearInterval(interval);
        startStopButton.textContent = "Start";
    } else {
        startTime = new Date().getTime();
        interval = setInterval(updateTime, 10);
        startStopButton.textContent = "Stop";
    }
    running = !running;
}

function reset() {
    clearInterval(interval);
    display.textContent = "00:00:00.000";
    startStopButton.textContent = "Start";
    running = false;
}

startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
