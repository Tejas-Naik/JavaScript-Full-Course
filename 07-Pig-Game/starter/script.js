'use strict';

// Selecting elements
// const scorePlayer0 = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnRollEl = document.querySelector('.btn--roll');
const btnNewEl = document.querySelector('.btn--new');
const btnHoldEl = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice functionality
btnRollEl.addEventListener('click', function () {
    diceEl.classList.remove('hidden');
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
        // add dice to current score.
        currentScore += randomNumber;
        console.log(currentScore);
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        // current0El.textContent = currentScore;
    } else {
        // switch next player
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        activePlayer = activePlayer == 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active')
    }
});

