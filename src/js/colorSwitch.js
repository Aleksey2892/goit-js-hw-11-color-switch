const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  Body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// console.log(randomIntegerFromInterval(0, colors.length - 1));

console.log(refs.startBtn);
console.log(refs.stopBtn);
console.log(refs.Body);

// ADD EVENT LISTENERS
refs.startBtn.addEventListener('click', startBtn);
refs.stopBtn.addEventListener('click', stopBtn);

// BUTTONS FN
function startBtn() {
  console.log('hi');
}

function stopBtn() {
  console.log('bye');
}

function setColors() {
  let timerId = setInterval(() => {
    console.log(randomIntegerFromInterval(0, colors.length - 1));
  }, 1000);
}

// setColors();
