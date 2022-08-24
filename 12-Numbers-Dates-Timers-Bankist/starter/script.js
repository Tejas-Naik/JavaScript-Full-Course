'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1
      } ${type}</div>
        <div class="movements__value">${(mov.toFixed(2))}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${(incomes).toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${(Math.abs(out)).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${(interest).toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]
      }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/*
///////////////////////////////////
// Converting and Checking Numbers
///////////////////////////////////

// All numbers are represented as floats in Javascript = a = 2; (a = 2.0); a = 1.2; (a = 1.2);
console.log(23 === 23.0);

// base 10 -> 0-9;
// base 2 -> 0 1;
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);   // error in js
// Converting to number
console.log(Number('7'));
console.log(+"7");    // 7 because of type coersion

// Parsing  -   by parsing you can convert strings that are starting from a number to a string
console.log(Number.parseInt('30px'));   // 30
console.log(Number.parseInt('e23', 10));    // NaN

console.log(Number.parseInt("2.5rem")); // 2;
console.log(Number.parseFloat("2.5rem")); // 2.5;
// console.log(parseFloat("2.5rem")); // 2.5; you can call without Number.

// Number.isNaN(); - checking if value is a NaN
console.log(Number.isNaN(20));
console.log(Number.isNaN("20"));
console.log(Number.isNaN(+"20X"));
console.log(Number.isNaN(10 / 0));    // oo Infinite

// Number.isFinite(); - checking if value is number/!number
console.log(Number.isFinite(20));
console.log(Number.isFinite(20.2));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20X"));
console.log(Number.isFinite(23 / 0));

// Number.isInteger -> checking if a value is an Integer
console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
*/

/////////////////////////////////
// Math & ROUNDING 
/////////////////////////////////
console.log(Math.sqrt(25));   // - square root
console.log(25 ** (1 / 2));   // - Math.sqrt
console.log(Math.cbrt(8));    // - cube root
console.log(8 ** (1 / 3));    // 

console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9));   // returns maximum number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, '9'));   // returns maximum number
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, '9px '));   // returns maximum number


console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9));   // returns minimum number
// finding area of a circle = (PI * R)^2
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Random integer
console.log(Math.random());           // 0-1
console.log(Math.random() * 10);      // 0-10 multiply by any number as we want
console.log(Math.trunc(Math.random() * 6) + 1);   // random dice roll

const generateRandomNumber = function (min, max) {
  // return Math.trunc(Math.random() * (max - min)) + 1 + min;
  return Math.floor(Math.random() * (max - min)) + 1 + min;
}
console.log(generateRandomNumber(1, 6));

// Rounding Integers

// removes the things after decimal
console.log(Math.trunc(23.111));
console.log(Math.trunc(23.999));

// This will try to make it round `O` taking to nearest 10.1 => 10.0 & 10.7 => 11;
console.log(Math.round(23.111));
console.log(Math.round(23.999));

// This will ceil down the package by adding some stuff to make it complete // 23.1 => 24
console.log(Math.ceil(23.111));
console.log(Math.ceil(23.999));

// cleans the floor and removes any extra dirt that is on there // 23.111 => 23
console.log(Math.floor(23.111));
console.log(Math.floor(23.999));

// in negative numbers its better to use floor than trunc

// Rounding floors - returns a string with however many of numbers you want after decimal
console.log((2.787).toFixed(0))   // toFixed(numbersOfDecimalsToReturn)
console.log((2.787).toFixed(2));
console.log(+(2.787).toFixed(2));

