'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
//for (let i = 0; i < btnsOpenModal.length; i++)
//    btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

////////////////////////////////////
// How DOM works?? BTS
////////////////////////////////////
// DOM is an interface between JS Code and the browser
// DOM creates DOM Tree for every HTML Document
// DOM is an API(complex) -> .addEventListener(), .querySelector(), .createElement(), .innerHTML etc... 
// WALCH LECTURE ON Udemy

//////////////////////////////////////////
// Selecting, Creating, Deleting Elements
//////////////////////////////////////////
// SELECTING ELEMENTS
console.log(document.documentElement);    // selecting the entire doc
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

// Selecting elements
document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");   // returns HTMLCollection.
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));          // returns HTMLCollection

// CREATING & INSERTING ELEMENTS
// .insertAdjacentHTML(html)
// write code for ...

// createElement();
const message = document.createElement("div");              // DOM object
message.classList.add("cookie-message");
// message.textContent = "Allow All Cookies"                   // for setting the text only
message.innerHTML = "We use cookies for improved performance and functionality. <button class='btn btn--close-cookie'>Got it!</button>"                   // innerHTML to set HTML & Text

// Add to the DOM
// header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
header.after(message);

// when we create the HTML code and add to the DOM then we can only insert it at one place
// but if you want to place it at two places then you have to make a clone of it

// Delete Elements
document.querySelector(".btn--close-cookie").addEventListener("click", function () {
  message.remove();
});

