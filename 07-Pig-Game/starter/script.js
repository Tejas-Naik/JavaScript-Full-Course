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

let scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer == 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active')
}
// Rolling Dice functionality
btnRollEl.addEventListener('click', function () {
    if (playing) {
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
            switchPlayer();
        }
    }
});

btnHoldEl.addEventListener('click', function () {
    if (playing) {
        //1. add currentScore = active players score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
        //2. check if player's score >= 100;
        // Finish the game
        if (scores[activePlayer] >= 100) {
            playing = false;
            diceEl.classList.toggle("hidden")
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // 3. Switch to the next player
            switchPlayer()
        }

    }
});

btnNewEl.addEventListener('click', function () {

})