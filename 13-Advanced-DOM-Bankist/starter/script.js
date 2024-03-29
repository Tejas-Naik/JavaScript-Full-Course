'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.getElementById("section--1");
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

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
/////////////////////////////////
// Implementing Smooth Scrolling
btnScrollTo.addEventListener("click", function (e) {
  const s1coord = section1.getBoundingClientRect();
  console.log(s1coord);

  console.log(e.target.getBoundingClientRect());

  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // window.scrollTo(
  //   s1coord.left + window.pageXOffset,
  //   s1coord.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coord.left + window.pageXOffset,
  //   top: s1coord.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" })
})

////////////////////////////////////////////////
// Event Delegation : Implementing Page Navigation
// #1 not so good in performance because it creates the callbackFn for all elements
// document
//   .querySelectorAll(".nav__link")
//   .forEach(function (el) {
//     el.addEventListener("click", function (e) {
//       e.preventDefault();
//       const id = this.getAttribute("href");
//       console.log(id);
//       document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//     });
//   })

// Event Delegation
// 1. add event listener to a parent container 
// 2. determine what element originated the event (target)
document
  .querySelector(".nav__links")
  .addEventListener("click", function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains("nav__link")) {
      const id = e.target.getAttribute("href");
      console.log(id);
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  })

// Tabbed component
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // Guard Clause
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  // Active content area
  const currentTab = document.querySelector(`.operations__content--${clicked.getAttribute("data-tab")}`);
  // console.log(currentTab);
  tabsContent.forEach(tContent => tContent.classList.remove("operations__content--active"));
  currentTab.classList.add("operations__content--active")

})

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const linkActive = e.target;
    const siblings = linkActive.closest('.nav')
      .querySelectorAll(".nav__link");
    const logo = linkActive.closest(".nav")
      .querySelector("img");

    siblings.forEach(el => {
      if (el !== linkActive) el.style.opacity = this;
    })
    logo.style.opacity = this;
  }
};

nav.addEventListener("mouseover", handleHover.bind(.5));
// calling with bind
nav.addEventListener("mouseout", handleHover.bind(1));

// // Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// })

// Sticky navbar: Intersection Observer API 
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };
// const obsOptions = {
//   root: null,
//   threshold: .1,
// }
// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1)
const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}
const headerObserver = new IntersectionObserver(stickyNav,
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
  });
headerObserver.observe(header);

// Revealing elements on scroll
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(
  revealSection,
  {
    root: null,
    threshold: .15,
  }
)

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add("section--hidden");
})

// Lazy Image Loading
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
}

const imgObserver = new IntersectionObserver(
  loadImg,
  {
    root: null,
    threshold: 0,
    rootMargin: "200px",
  });
imgTargets.forEach(img => imgObserver.observe(img));

// Slider Component

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const slider = document.querySelector(".slider");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  let curSlide = 0;
  const maxSlide = slides.length;
  const dotContainer = document.querySelector(".dots")

  // Functions
  const createDots = function () {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML('beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`)
    })
  }

  const activeDot = function (slide) {
    document.querySelectorAll(".dots__dot").forEach(dot => dot.classList.remove("dots__dot--active"));
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
  }

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activeDot(curSlide);
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else { curSlide--; }
    goToSlide(curSlide);
    activeDot(curSlide);
  }

  const init = function () {
    createDots();
    activeDot(0);
    goToSlide(0);
  }
  init()

  // Event Handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide(curSlide);
    e.key === "ArrowRight" && nextSlide(curSlide);
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  })
};

slider();
/*
////////////////////////////////////
// LECTURES

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

// STYLES
message.style.backgroundColor = "#37383d";
message.style.width = "100%";

console.log(getComputedStyle(message));
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);    // 40px

message.style.height = Number.parseInt(getComputedStyle(message).height, 10) + 40 + "px";

// CSS Variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');


// ATTRIBUTES
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));

// setting the attributes
logo.alt = "Beautiful minimalist logo"
console.log(logo.setAttribute('company', "Bankist"));

const btnShowModalLink = document.querySelector('.btn--show-modal');
console.log(btnShowModalLink.href);
console.log(btnShowModalLink.getAttribute('href'));

// data attributes
console.log(logo.dataset.versionNumber);

// CLASSES
logo.classList.add("test");
logo.classList.remove("test");
logo.classList.toggle("test");
logo.classList.contains("test");

console.log(logo.classList);

// Types of Events and Handlers
// mouse enter event
const h1 = document.querySelector("h1");

const changeh1 = function (e) {
  h1.style.color = "orangered";

  // removing an event listener once after its executed
  h1.removeEventListener('mouseenter', changeh1);
};

h1.addEventListener("mouseenter", changeh1)

// removing the event listener by time
// setTimeout(() => h1.removeEventListener('click', changeh1), 3000);

// every event has its own methods
// h1.onmouseenter = changeh1;
// h1.onclick = changeh1;
// h1.onmouseover = changeh1;
*/

/*
// Event Propogation : Bubbling and Capturing

/* when you have an event listener at an anchor tag (DOCUMENT=>html=>body=>section=>p=>a)
and event happened at `a` then that eventHandler is created at DOCUMENT and it comes down
to all elements (DOCUMENT to HTML to BODY to SECTION to P to TARGER(A))

so if you have same event handler at 2 places in the inheritence(DOCUMENT=>html=>body=>section=>p=>a)
then that is going to execute 2 times once for a and another one for the el
*

const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randColor = () => `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
console.log(randColor(0, 255));

document
  .querySelector('.nav__link')
  .addEventListener("click", function (e) {
    this.style.backgroundColor = randColor(0, 255);
    console.log("LINK", e.target, e.currentTarget);
    console.log(this === e.currentTarget);

    // Stop Propogation
    // e.stopPropagation();
  })

document
  .querySelector('.nav__links')
  .addEventListener("click", function (e) {
    this.style.backgroundColor = randColor(0, 255);
    console.log("CONTAINER", e.target, e.currentTarget)
  })

  // document
//   .querySelector('.nav__links')
//   .addEventListener("click", function (e) {
//     this.style.backgroundColor = randColor(0, 255);
//     console.log("CONTAINER", e.target, e.currentTarget)
//   }, true)    // true means handle the events in other order parent to child not child to parent

document
.querySelector('.nav')
.addEventListener("click", function (e) {
  this.style.backgroundColor = randColor(0, 255);
  console.log("NAVBAR", e.target, e.currentTarget)
})

*/
/*
// DOM Traversing
const h1 = document.querySelector("h1");

// Going Downwards : child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// Going Upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)'

h1.closest('h1').style.background = 'var(--gradient-primary)'

// Sideways : Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(.5)'
})
*/

// Lifecycle DOM Event
document.addEventListener("DOMContentLoaded", function (e) {
  console.log("HTML parsed and DOM tree created!", e);
})

window.addEventListener('load', function (e) {
  console.log("Page fully loaded", e)
})

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// })