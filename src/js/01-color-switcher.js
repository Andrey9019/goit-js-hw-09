function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);

startBtn.addEventListener(`click`, handlerStart);
stopBtn.addEventListener(`click`, handlerStop);

let timerID = null;

function handlerStart() {
  if (timerID) return;
  timerID = setInterval(changeColor, 1000);
  startBtn.disabled = true;
}

function changeColor() {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
}

function handlerStop() {
  clearInterval(timerID);
  timerID = null;
  startBtn.disabled = false;
}
