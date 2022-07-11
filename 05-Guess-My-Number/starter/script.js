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


// Reacting to the click events
document.querySelector('.check').addEventListener('click',
    function () {
        let guess = Number(document.querySelector('.guess').value);
        document.querySelector('.number').textContent = guess;
        console.log(guess, typeof guess);

        if (!guess) {
            document.querySelector('.message').textContent = '⛔ NO Number!'
        };
    }
);
