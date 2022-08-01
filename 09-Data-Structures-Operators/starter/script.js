'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const openingHours = {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal
  openingHours,
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  // },
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address = "..." }) {
    console.log(`Recieved Order! ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here's your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  }
};

/*
// Destructing Objects
// Order doesnt matter in objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);
// giving default values.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Deefault values
const { main = [], starterMenu: starters = [] } = restaurant;
console.log(main, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
console.log(a, b);

({ a, b } = obj);
console.log(a, b);

// Nested Objects
// To get objects from nested objects we use :{}
const { fri: { open, close } } = (hours);

console.log(open, close);

// Destructuring objects in the function parameter
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  time: "22:30",
  address: "Examba, Main street - 591244"
})
*/

/*
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
*/

/*
/////////////////////////////
// SPREAD OPERATOR
/////////////////////////////
// We can use spread operator to spread its all elements
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

// spread operator
const goodNewArray = [1, 2, ...arr]
console.log(goodNewArray);
console.log(...goodNewArray);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu)

// two usecases of Spread Operator:

// 1. Copy Array
const mainMenuCopy = [...restaurant.mainMenu]

const orArray = ["a", "b", "c"];
const copyArray = [...orArray];
copyArray.push("Test");
console.log(orArray, copyArray)

// 2. Add 2 arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];
const arrCombined = [...arr1, ...arr2];
console.log(arrCombined);

// Spread operators work on any iterables
// Iterables : Arrays, Strings, Maps, Sets.
// console.log(..."Tejas");
// Only works when creating new arrays or passing arguements in function
const str = "Tejas";
const letters = [...str, " ", "Naik"];
console.log(letters);
console.log(...str);
const pastaIngredients = ["Flour", "Salt", "Eggs"]
restaurant.orderPasta(...pastaIngredients);
// doest work with template literals
// console.log(`${...str}`)

// Objects
const newRestaurant = { ...restaurant, founder: "Anonymous :|" }
console.log(newRestaurant);

// Copying objects
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Restoranto Roma"

console.log(restaurant.name, restaurantCopy.name);
*/

/*

////////////////////////////////
// Rest Pattern and Parameters
////////////////////////////////

// 1) Destructuring

// spread operator bcz, after =
const arr = [1, 2, ...[3, 4]];

// Rest pattern bcz, before =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

// Collecting pizza & risotto from the menu
const [pizza, , risotto, ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFoods);

// Objects
// creating an object for open and closing times for weekdays (thurs, fri) and separate for sat
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat, weekdays)

// 2) Functions
// With the rest parameters we can pass any number of values into functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}

add(1, 2);
add(1, 2, 4);
add(5, 2, 8, 6, 12);
add(5, 2, 8, 6, 12, 45);

const x = [45, 67, 4];
add(...x)

// Using in restaurant obj
restaurant.orderPizza("Mushrooms", "Onion", "Olives", "Spinach");
restaurant.orderPizza("Mushrooms");
*/

/*
//////////////////////////////
// SHORT CIRCUITING (&& ||)
//////////////////////////////
console.log("-----------OR------------")
console.log(7 || "Tejas");
console.log("" || "Tejas");
console.log(true || 0);
console.log(undefined || null);
console.log("" || 0 || undefined || "Hi." || null || false)

// restaurant.numGuests = 87;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1);

// With || short-circuiting
const guests2 = restaurant.numGuests || 10;

console.log(guests2);


// AND
// the and operator ends the iteration when there is a falsy value
console.log("-----------AND------------");
console.log(0 && "Tejas");
console.log(7 && "Tejas");

console.log("Hello" && 7 && null && [1] && { a: 12 });

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza("Mushroom", "Onion", "Spinach");
}

restaurant.orderPizza && restaurant.orderPizza("Mushroom", "Onion", "Spinach");

/*
OR Operator : set default values
AND Operator: Check if something exists or not
*/

/*
///////////////////////////////////////
// The Nullish Coalescing Operator (??)
///////////////////////////////////////

restaurant.numGuests = 0;
// OR
const guests = restaurant.numGuests || 10;
console.log(guests)
// NULLISH : null, undefined
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

*/

/*

////////////////////////////////
// Logical assignemnet operator
////////////////////////////////
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
}

const rest2 = {
  name: "La Piazza",
  owner: "Giovanna Rossi"
}

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// ||= doesnt work with 0
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;

console.log("OR", rest1.numGuests);
console.log("OR", rest2.numGuests);

// ??=
// rest1.numGuests = rest1.numGuests ?? 10;
// rest2.numGuests = rest2.numGuests ?? 10;
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log("Nullish ??", rest1.numGuests);
console.log("Nullish ??", rest2.numGuests);

// &&=
// rest1.owner = rest1.owner && "Anonymous";
// rest2.owner = rest2.owner && "Anonymous";

rest1.owner &&= "Anonymous";
rest2.owner &&= "Anonymous";

console.log(rest1.owner);
console.log(rest2.owner);
*/

/*
/////////////////////////////////////
// Looping arrays : FOR-OF Loop
/////////////////////////////////////
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

for (const item of menu) {
  console.log(item);
};

// To get indexes
for (const [index, item] of menu.entries()) {
  // console.log(item);
  // console.log(`${item[0] + 1} : ${item[1]}`);
  console.log(`${index + 1} : ${item}`);
}
*/
/*
////////////////////////
// Optionsl Chaining
////////////////////////

// this doesn't exists
// console.log(restaurant.openingHours.mon.open)

if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// Optional Chaining
// Optional chaining returns undefined if a method doesnt exists
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open) // if opening hours doesnt exist it will end there

// Example
// Arrays
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? "Closed";
  console.log(`On ${day} we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(1, 0) ?? "Method doesn't exists");
console.log(restaurant.orderBurger?.(1, 0) ?? "Method doesn't exists");

// check Array is empty
const users = [{
  name: "Tejas",
  email: "tejas@email.com",
}]

console.log(users[0]?.name);
console.log(users[1]?.name ?? "User not found");
*/
/*
////////////////////////////////////////
// Looping Objects : Key, Value, Entry
////////////////////////////////////////
// Using For In Loop
console.log("---------FOR-IN Loop ----------");
for (const key in restaurant) {
  console.log(
    `restaurant.${key} = ${restaurant[key]}`
  );
}

console.log("--------- KEYS ----------");
for (const day of Object.keys(openingHours)) {
  console.log(day);
  console.log(openingHours[day]);
}

console.log("--------- VALUES ----------");
for (const time of Object.values(openingHours)) {
  console.log(time);
}

console.log("--------- KEY & VALUE ----------");

for (const [day, { open, close }] of Object.entries(openingHours)) {
  console.log(`On ${day} we open at ${open} and close at ${close}`)
}
*/
/*
/////////////////////////////////
// SETS
/////////////////////////////////
// - Set is an array of no-duplicate values

const orderSet = new Set([
  "Pasta",
  "Rice",
  "Pizza",
  "Pizza",
  "Rice",
  "Pasta",
  "Rosotto"
]);
console.log(orderSet);

// Sets are iterables
for (const item of orderSet) {
  console.log(item)
}

// Strings are also iterables
console.log(new Set("Tejas"))
console.log(new Set("A quick brown fox jumped over the lazy dog"));

// Methods on sets
// size
console.log(orderSet.size)

// check if it has some element
console.log(orderSet.has("Rice"));
console.log(orderSet.has("Bread"));

// Add
orderSet.add("Garlic Bread");
console.log(orderSet);

// Delete
orderSet.delete("Rice");
console.log(orderSet);

// clear the set
orderSet.clear();

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef"];
console.log(staff);

const staffPositions = new Set(staff);
console.log(staffPositions);

// converting a set into an array
const staffArray = [...staffPositions];
console.log(staffArray);
*/
/*
////////////////////////////
// MAPS : Fundamentals
////////////////////////////
// we use maps to map valeus to keys
// maps are objects that can store any type of value (Not just primitives)

const restMap = new Map();
// returns new map
restMap.set("name", "Classico Italiano");
restMap.set("owner", "RN Tejas");
restMap.set(1, "Firentze, Italy");
restMap.set(2, "Lisbon, Portugal");
restMap.set("categories", ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed")
  ;

console.log(restMap);
console.log(restMap.get("name"));
console.log(restMap.get(true));

const time = 21;
console.log(
  restMap.get(
    restMap.get("open") < time && time < restMap.get("close")
  )
);


// Methods on MAPS:
// .has()
console.log(restMap.has('categories'));

// .delete(<property>)
console.log(restMap.delete('owner'));
console.log(restMap);

// .size
console.log(restMap.size);

// .clear()
// restMap.clear()

// Using arrays,objects as keys
const testArray = [1, 2]
restMap.set(testArray, "Test");

const testObject = { a: 1, b: 2 };
restMap.set(testObject, "Test OBJECT...")

console.log(restMap.get(testArray));
console.log(restMap.get(testObject));

console.log(restMap);

// DOM as KEYS
restMap.set(document.querySelector('h1'), "Heading")
console.log(restMap);

// returns arrays of key,values
// for (const [key, value] of restMap) {
//   console.log(`${key} : ${value}`);
//}
*/
/*
// MAPS ITERTATION / LOOPING
const question = new Map([
  ["question", "Whats the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Python"],
  [4, "JavaScript"],
  ["correct", 4],
  [true, "Correct 🎉"],
  [false, "Try Again"]
]);

console.log(question)
// Converting objects to maps
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap);

// QUIZ APP
// Looping over the map
console.log(question.get("question"));
for (const [key, value] of question) {
  typeof key === "number" ? console.log(key, value) : "";
}
// const userAnswer = prompt("Whats the answer?");
const userAnswer = 4;

// if (userAnswer == question.get("correct")) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

console.log(question.get(userAnswer == question.get("correct")));

// Convert Map to Array
const questionArr = new Array([...question]);
console.log(questionArr);
console.log(question.entries());
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
console.log([...question.values()]);
*/

/////////////////////////////
// STRINGS : 
/////////////////////////////
const airline = "TAP Air Portugal";
const plane = "A320";

// Getting the letter from index
console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(plane[3])

console.log("B737"[0]);
console.log(plane.length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

// SLICING
console.log(airline.slice(4));   // start(4)
console.log(airline.slice(4, 7));   // start(4), end(7)
// first word
console.log(airline.slice(0, airline.indexOf(" ")));
// last word
console.log(airline.slice(airline.lastIndexOf(" ") + 1));
// Slicing negatively
console.log(airline.slice(-2));

const checkMiddleSeat = function (seat) {
  // Seat = 11B, 12E, 10A - B&E are middle seats
  const result = seat.slice(-1) === "B" || seat.slice(-1) === "E" ? "Middle seat" : "Not Middle Seat";
  console.log(result);
}

checkMiddleSeat("10A");
checkMiddleSeat("10B");
checkMiddleSeat("10E");

// String methods
// changing case
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalixation in name
const fname = "tEjAS"   // Tejas
const fixedName = fname[0].toUpperCase() + fname.slice(1).toLowerCase()
console.log(fixedName);

// check email
const email = "example@abc.com";
const loginEmail = "   Example@ABC.cOm \n";

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);

console.log(email === normalizedEmail);

