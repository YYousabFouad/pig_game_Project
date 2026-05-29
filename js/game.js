'use strict';

const diceRollBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const diceIMG = document.querySelector('.dice');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const current0 = document.querySelector('#current--0');
const current1 = document.querySelector('#current--1');

let currentScore, activePlayer, isPlaying, score;

const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isPlaying = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  document.querySelector('#score--0').textContent = 0;
  document.querySelector('#score--1').textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
diceRollBtn.addEventListener('click', function () {
  if (isPlaying) {
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
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (isPlaying) {
    //hold the score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //check if it >=100 or not
    if (score[activePlayer] >= 50) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceIMG.classList.add('hidden');
      isPlaying = false;
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', init);
