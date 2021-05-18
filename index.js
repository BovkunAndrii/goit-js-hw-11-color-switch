const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];



const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]'), 
}

const INTERVAL_DELAY = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', onBtnStart);

function onBtnStart() {
    refs.startBtn.setAttribute('disabled', true);

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
    }, INTERVAL_DELAY);

    refs.stopBtn.addEventListener('click', onBtnStop);
}

function onBtnStop() {
    refs.startBtn.removeAttribute('disabled');
    clearInterval(intervalId);
    
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };