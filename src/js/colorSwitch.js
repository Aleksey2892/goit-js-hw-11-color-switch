// COLORS DATA
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

// DOM REFS
const refs = {
  Body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

// BODY COLOR SWITCH OBJ
const bodyColor = {
  intervalId: null,
  isActive: false,

  startBtn() {
    if (this.isActive) return;

    this.isActive = true;
    this.intervalId = setInterval(setColor, 1000);
    refs.startBtn.setAttribute('disabled', '');
  },

  stopBtn() {
    this.isActive = false;
    clearInterval(this.intervalId);
    refs.startBtn.removeAttribute('disabled');
  },
};

// ADD EVENT LISTENERS
refs.startBtn.addEventListener('click', bodyColor.startBtn.bind(bodyColor));
refs.stopBtn.addEventListener('click', bodyColor.stopBtn.bind(bodyColor));

// FUNCTIONS
const setColor = () => {
  const randomColor = colors[randomIntegerFromInterval(0, colors.length - 1)];

  refs.Body.style.backgroundColor = randomColor;
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
