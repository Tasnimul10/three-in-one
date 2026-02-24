let time = 0;
let interval = null;
const maxTime = 30;

const display = document.getElementById("display");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
    display.textContent = time;
}

startBtn.addEventListener("click", () => {
    if (interval !== null) return;

    interval = setInterval(() => {
        time += 3;
        updateDisplay();

        if (time >= maxTime) {
            clearInterval(interval);
            interval = null;
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});

resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    time = 0;
    updateDisplay();
});

updateDisplay();

