const fortunes = [
    "Great opportunities are coming your way.",
    "Patience will reward you soon.",
    "A pleasant surprise is waiting for you.",
    "Success begins with self-belief.",
    "Happiness is found in small moments.",
    "You will achieve your goals step by step.",
    "A new adventure is on the horizon.",
    "Your hard work will soon pay off.",
    "Good news will arrive unexpectedly.",
    "True wisdom comes from understanding."
];

const fortuneText = document.getElementById("fortuneText");
const fortuneBox = document.getElementById("fortuneBox");

const fontColorBtn = document.getElementById("fontColorBtn");
const bgColorBtn = document.getElementById("bgColorBtn");
const borderColorBtn = document.getElementById("borderColorBtn");
const fontStyleBtn = document.getElementById("fontStyleBtn");

const colors = ["#e74c3c", "#2ecc71", "#8e44ad", "#f39c12", "#2c3e50"];
const backgrounds = ["#fff8dc", "#e8f8f5", "#fdebd0", "#ebdef0", "#d6eaf8"];
const borders = ["#333", "#16a085", "#c0392b", "#8e44ad", "#2980b9"];
const fonts = ["Georgia, serif", "Courier New, monospace", "Verdana, sans-serif", "Trebuchet MS, sans-serif"];

function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function loadRandomFortune() {
    fortuneText.textContent = randomItem(fortunes);
}

fontColorBtn.addEventListener("click", () => {
    fortuneBox.style.color = randomItem(colors);
});

bgColorBtn.addEventListener("click", () => {
    fortuneBox.style.backgroundColor = randomItem(backgrounds);
});

borderColorBtn.addEventListener("click", () => {
    fortuneBox.style.borderColor = randomItem(borders);
});

fontStyleBtn.addEventListener("click", () => {
    fortuneBox.style.fontFamily = randomItem(fonts);
    fortuneBox.style.fontSize = "20px";
});

loadRandomFortune();