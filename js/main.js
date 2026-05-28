'use strict';

let firstPlayerScore = document.querySelector('#score--0');
let SecondPlayerScore = document.querySelector('#score--1');
let firstPlayerCurrent = document.querySelector('#current--0');
let SecondPlayerCurrent = document.querySelector('#current--1');

const newGameBtn = document.querySelector('.btn--new');
const diceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

const diceIMG = document.querySelector('.dice');

let randomNumber = Math.trunc(Math.random() * 6 + 1);

let firstPlayerCurrentScore = 0;
let firstPlayerTotalScore = 0;
console.log(randomNumber);

const removeHidden = function () {
  diceIMG.classList.remove('hidden');
};

let player1CurrentChange = function () {
  firstPlayerCurrentScore += randomNumber;
  firstPlayerCurrent.textContent = firstPlayerCurrentScore;
};

let switchingDiceIMG = function () {
  switch (randomNumber) {
    case 1:
      diceIMG.src = '../Images/dice-1.png';
      break;
    case 2:
      diceIMG.src = '../Images/dice-2.png';
      break;
    case 3:
      diceIMG.src = '../Images/dice-3.png';
      break;
    case 4:
      diceIMG.src = '../Images/dice-4.png';
      break;
    case 5:
      diceIMG.src = '../Images/dice-5.png';
      break;
    default:
      diceIMG.src = '../Images/dice-6.png';
  }
};
diceBtn.addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 6 + 1);
  removeHidden();
  switchingDiceIMG();
  player1CurrentChange();
});

holdBtn.addEventListener('click', function () {
  firstPlayerScore.textContent = firstPlayerCurrentScore;
  firstPlayerCurrent.textContent = 0;
});
