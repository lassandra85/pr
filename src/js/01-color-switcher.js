const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyElement = document.body;
let setIntervalID = null;
/* console.dir(startBtn); */

stopBtn.disabled = true;

const startBtnClickHandler = () => {
  randomBody();
  setIntervalID = setInterval(randomBody, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
};

const stopBtnClickHandler = () => {
  clearInterval(setIntervalID);
  startBtn.disabled = false;
  stopBtn.disabled = true;
};

function randomBody() {
  bodyElement.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

startBtn.addEventListener('click', startBtnClickHandler);
stopBtn.addEventListener('click', stopBtnClickHandler);
