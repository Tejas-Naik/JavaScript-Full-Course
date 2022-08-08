'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = `${mov > 0 ? "deposit" : "withdrawal"}`;
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            ${i + 1} ${type}
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">${mov}</div>
        </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
/////////////////////////////////////////////////
// Some more array method
/////////////////////////////////////////////////
let arr = ["a", "b", "c", "d", "e"];

// .slice() method (doesnt change the original)
console.log(arr.slice(2));  // c,d,e
console.log(arr.slice(2, 4));  // c,d
console.log(arr.slice(-2));  // d,e
console.log(arr.slice(-1));  // e last element of an array
console.log(arr.slice(1, -2));  // b,c

console.log(arr.slice());   // Copy array

// .splice() method (changes original)
// splice is same as slice but it changes the original array
console.log(arr.splice(2)); // it extracts the original array
console.log(arr);        // a,b

arr.splice(-1) // Remove last element
console.log(arr);

// .reverse() method  (changes original)
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());
console.log(arr2);

// .concat() method (doesnt change original)
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// .join() method
// join method joins the arrays child with the cahr we pass
console.log(letters.join(" - "));
*/
/*
// .at() method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// gettin' the last element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
*/
/*
//////////////////////////////////////////////
// FOR-EACH METHOD
//////////////////////////////////////////////
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
}

// forEach method
console.log("---------FOR EACH---------");
movements.forEach(function (movement) {
  if (movement > 0) console.log(`You deposited ${movement}`);
  else console.log(`You withdrew ${Math.abs(movement)}`);
});

// With Index
for (const [i, movement] of movements.entries()) {
  if (movement > 0) console.log(`Movement ${i + 1}: You deposited ${movement}`);
  else console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
};

// The forEach method passes 3 parameters to the callback function
// Element, Index, Array
movements.forEach(function (movement, index, array) {
  console.log(movement, index, array)
})

movements.forEach(function (movement, index, array) {
  if (movement > 0) console.log(`Movement ${index + 1} : deposited ${movement}`);
  else console.log(`Movement ${index + 1} : withdrew ${Math.abs(movement)}`);
})

// When to use for-of and for-each well there is one difference between that is : break and continue doesnt work on foreach
// forEach with maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
  ['INR', 'Indian National Rupee']
]);

// map.forEach(function(value, key, map))
currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

// forEach with sets
const currenciesSet = new Set(["INR", "USD", "EUR", "GBP"]);
console.log(currenciesSet);
currenciesSet.forEach(function (value, _, set) {
  console.log(`${value}, ${_}, ${set}`);
})
*/
