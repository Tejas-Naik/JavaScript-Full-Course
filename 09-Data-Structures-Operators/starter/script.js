'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
};

// Destructuring arrays
// Destructuring means storing a value from array inside variable
const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = [2, 3, 4];
console.log(x, y, z);

// Getting the first two categories from the array
// 1. we dont need to extract everything
const [first, second] = restaurant.categories   // length=3
const [first1, , third] = restaurant.categories
console.log(first, second);
console.log(first1, third);

// 2. swapping variables
let [main, , secondary] = restaurant.categories;

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log("Main:", main, "Secondary:", secondary);

// with arrays
[main, secondary] = [secondary, main];
console.log(main, secondary);

// RECIEVE 2 RETURN VALUES FROM A FUNCTION
// console.log(restaurant.order(2, 0));
let [starterMeal, mainMeal] = restaurant.order(2, 0)
console.log(starterMeal, mainMeal);


// Nested array destructuring
const nested = [1, 2, 3, [10, 9]];
// const [one, two, , list] = nested;
// console.log(one, two, list);

const [one, two, , [ten, nine]] = nested
console.log(one, two, ten, nine);

// Default values
const [p, q, r = 0] = [8, 9];   // the r value gets default of 0
console.log(p, q, r)

