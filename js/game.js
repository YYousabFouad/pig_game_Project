'use strict';

const diceRollBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const diceIMG = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;
diceRollBtn.addEventListener('click', function () {
  // Generate a random number
  const randomNumber = Math.trunc(Math.random() * 6) + 1;

  console.log(randomNumber);
  //make the dice image cope with the number
  diceIMG.src = `../Images/dice-${randomNumber}.png`;
  diceIMG.classList.remove('hidden');
  //if random is 1 make the current 0 and switch the player else make it count
  if (randomNumber !== 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
});

newGameBtn.addEventListener('click', function () {
  currentScore = 0;
  activePlayer = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  document.getElementById(`score--${activePlayer}`).textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
});
