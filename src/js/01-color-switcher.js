const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStart);
stopBtn.addEventListener('click', onStop);

let timerId = null;

function onStart () {
    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
    timerId = setInterval(() => document.body.style.backgroundColor = getRandomHexColor(), 1000);

}

function onStop () {
    startBtn.removeAttribute('disabled');
    stopBtn.setAttribute('disabled', true);
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
