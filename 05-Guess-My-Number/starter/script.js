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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const againEl = document.querySelector('.again');
const highscoreEl = document.querySelector('.highscore');


let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    messageEl.textContent = message;
}

// Reacting to the click events
document.querySelector('.check').addEventListener('click',
    function () {
        let guess = Number(document.querySelector('.guess').value);
        // document.querySelector('.number').textContent = guess;
        console.log(guess, typeof guess);

        // No Input
        if (!guess) {
            displayMessage('⛔ NO Number!')
        }
        // When player wins
        else if (guess === secretNumber) {
            messageEl.textContent = "🎉 Correct Number";
            // changing styles of an element
            document.querySelector('body').style.backgroundColor = "#60b347";
            document.querySelector('.number').style.width = "30rem"
            document.querySelector('.number').textContent = secretNumber;

            if (score > highscore) {
                highscore = score;
                highscoreEl.textContent = highscore;
            }
        }
        // When guess is incorrect
        else if (guess !== secretNumber) {
            displayMessage(secretNumber < guess ? "🔻Guess Lower" : "🔼 Guess Higher")
            if (score > 1) {
                score--
                scoreEl.textContent = score;
            } else {
                scoreEl.textContent = 0;
                displayMessage('💥 You lost the game')
                document.body.style.backgroundColor = '#f93919';
            }
        }
    }
);

againEl.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.body.style.backgroundColor = "#222222";
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = "";
    scoreEl.textContent = 20;
    displayMessage("Start guessing...");
})
