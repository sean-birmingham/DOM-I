let digits = document.querySelectorAll('.digit');
let msTens = document.querySelector('#msTens');
let msHundreds = document.querySelector('#msHundreds');
let secondOnes = document.querySelector('#secondOnes');
let secondTens = document.querySelector('#secondTens');
let colon = document.querySelector('#colon');
let startButton = document.querySelector('#start');
let restartButton = document.querySelector('#restart');

let timerReset = () =>
  digits.forEach((digit) => {
    if (digit !== colon) digit.textContent = 0;
  });

let redDigits = () => {
  digits.forEach((digit) => digit.classList.add('redDigit'));
};

let removeRedDigits = () => {
  digits.forEach((digit) => digit.classList.remove('redDigit'));
};

let timer = timerReset();
let timerStarted = false;

function start() {
  if (timerStarted === false) {
    timer = setInterval(msTen, 10);
    timerStarted = true;
    startButton.textContent = 'Pause Timer';
  } else {
    timer = clearInterval(timer);
    startButton.textContent = 'Start Timer';
    timerStarted = false;
  }
}

function restart() {
  clearInterval(timer);
  timerReset();
  removeRedDigits();
  startButton.disabled = false;
  startButton.textContent = 'Start Timer';
  timerStarted = false;
}

function secTens() {
  if (secondTens.textContent === '0') {
    secondTens.textContent = 1;
    redDigits();
    clearInterval(timer);
    startButton.textContent = 'Timer Done';
    startButton.disabled = true;
  } else {
    secondTens.textContent = parseInt(secondTens.textContent) + 1;
  }
}

function secOnes() {
  if (secondOnes.textContent === '9') {
    secondOnes.textContent = 0;
    secTens();
  } else {
    secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
  }
}

function msHund() {
  if (msHundreds.textContent === '9') {
    msHundreds.textContent = 0;
    secOnes();
  } else {
    msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
  }
}

function msTen() {
  if (msTens.textContent === '9') {
    msTens.textContent = 0;
    msHund();
  } else {
    msTens.textContent = parseInt(msTens.textContent) + 1;
  }
}
