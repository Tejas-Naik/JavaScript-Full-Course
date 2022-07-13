'use strict';

const modalEl = document.querySelector('.modal');
const overlayEl = document.querySelector('.overlay');
const closeModalBtn = document.querySelector('.close-modal');
const showModalBtn = document.querySelectorAll('.show-modal');
console.log(showModalBtn);


const openModal = function () {
    modalEl.classList.toggle("hidden");
    overlayEl.classList.toggle("hidden");
}

const closeModal = function () {
    modalEl.classList.toggle("hidden");
    overlayEl.classList.toggle("hidden");
}

for (let i = 0; i < showModalBtn.length; i++) {
    showModalBtn[i].addEventListener('click', openModal)
};

closeModalBtn.addEventListener('click', closeModal)
// modalEl.classList.add("hidden");
// modalEl.classList.remove("hidden");

overlayEl.addEventListener('click', closeModal)

document.addEventListener("keyup", function (e) {
    /*
    so the action that happens in addeventlistener function 
    like click hover keypress it returns the action as an 
    object and we can access that object from callback function
    */

    if (e.code === "Escape") {
        closeModal();
    }
});