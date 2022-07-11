'use strict';

/*
// Basics of selecting the elements using QuerySlector
console.log(
    document.querySelector('.message').textContent
);

// To change the value of an element
document.querySelector('.message').textContent = "🎉 Correct Number";
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// To get the value of an element
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');

let score = 20;

document.querySelector('.number').textContent = secretNumber;

// Reacting to the click events
document.querySelector('.check').addEventListener('click',
    function () {
        let guess = Number(document.querySelector('.guess').value);
        // document.querySelector('.number').textContent = guess;
        console.log(guess, typeof guess);

        // No Input
        if (!guess) {
            messageEl.textContent = '⛔ NO Number!'
        }
        // When player wins
        else if (guess === secretNumber) {
            messageEl.textContent = "🎉 Correct Number";
            // changing styles of an element
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem"
        }
        // When player guesses higher
        else if (guess > secretNumber) {
            if (score > 1) {
                messageEl.textContent = "🔻Guess Lower";
                score--
                scoreEl.textContent = score;
            } else {
                scoreEl.textContent = 0;
                messageEl.textContent = '💥 You lost the game'
            }
        }
        // When player guessed lower
        else if (guess < secretNumber) {
            if (score > 1) {
                messageEl.textContent = "🔼 Guess Higher";
                score--
                scoreEl.textContent = score;
            } else {
                scoreEl.textContent = 0;
                messageEl.textContent = '💥 You lost the game'
            }
        }
    }
);
