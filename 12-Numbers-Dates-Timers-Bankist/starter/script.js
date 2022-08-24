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

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';
  const movements = acc.movements;
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    const displayDate = `${day}/${month}/${year}`;

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__date">${displayDate}</div>
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
  displayMovements(acc);

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
    // current date
    const now = new Date();
    const date = `${now.getDate()}`.padStart(2, 0);
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = `${now.getMinutes()}`.padStart(2, 0);

    labelDate.textContent = `${date}/${month}/${year}, ${hour}:${minute}`;


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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
    receiverAcc.movementsDates.push(new Date().toISOString())

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

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString())
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
  displayMovements(currentAccount, !sorted);
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
/*
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
*/
/*
///////////////////////
// REMAINDER OPERATOR
///////////////////////
console.log(5 % 2);   // returns the remainder of dividing 5 & 2
console.log(5 / 2);

console.log(8 % 3);
console.log(8 / 3);

const evenOrOdd = function (number) {
  return (number % 2 == 0) ? "Even" : "Odd";
}

console.log(evenOrOdd(101));
console.log(evenOrOdd(100));

document.body.addEventListener('click', function () {
  [...document.querySelectorAll(".movements__row")].forEach((rowEl, i) => {
    if (i % 2 == 0) {
      rowEl.style.backgroundColor = "orangered";
    }
  })
})
*/
/*
// Numeric Separators
const diameterEarth = 287460000000;
const diameter = 287_460_000_000;
console.log(diameter);

const price = 349_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;
console.log(transferFee1);
console.log(transferFee2);

console.log(Number("1233"));
console.log(Number("12_33"));
console.log(parseInt("12_33"));
*/
/*
// Workign With BigInt
console.log(2 ** 53 - 1)    // maximum safe number to calculate
console.log(Number.MAX_SAFE_INTEGER);

//  After/  the numbers above this will not be calculated correctly
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 5);

// the biggest safe number that we can use to store numbers in javascript is (2 ** 53 - 1);
// cl(Number(MAX_SAFE_INTEGER)); after this number calculations can be messed up

// for big numbers we use BigInt()
// create a bigInt with `n` suffix after a number
console.log(8765434567898765433456789098765432n);
console.log(BigInt(999999999999));
// console.log(Math.sqrt(16n));
// Operations
console.log(10000n + 10000n);

const huge = 8754334567890987654345678n
const num = 23;
// console.log(huge * num); you cant do math operations with bigInt
// EXCEPTIONS
// you can do Comparison Operations
console.log(20n > 21);
console.log(20n == 20);
console.log(20n === 20);
console.log(typeof 20n)

console.log(huge + " is a really big Number :O");

// Divisions
console.log(10n / 3n);
console.log(10 / 3);
*/
/*
///////////////////////////
// CREATING DATES
///////////////////////////
const now = new Date();
console.log(now);

// its not good idea to pass custom dates to a Date() constructor untl its created by js (API, Database)
console.log(new Date('Aug 02 2021, 18:05'));
console.log(new Date('DECEMBER 25 2005'));
console.log(new Date('25 DECEMBER 2005 00:00:01'));

account1.movementsDates.forEach((date) => console.log(new Date(date)))

// year, month, day, hour, minute, second
console.log(new Date(2022, 8, 19, 18, 30, 0))
console.log(new Date(2022, 8, 45, 18, 30, 0))   // 45th day lol

// UNIX Time - 1,Jan,1970
console.log(new Date(0));
console.log(new Date(3 * 24 * 60 * 60 * 1000));   // 3 days after UNIX date
console.log('---------------------------------');
// Workign with dates (methods)
const future = new Date(2037, 10, 19, 15, 23)
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());     // 0 based 0 = Jan
console.log(future.getDate())
console.log(future.getDay())        // day of the weekday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
// Nice string
console.log(future.toISOString())
// timestamp = milliseconds from UTC till now
console.log(future.getTime());
console.log(new Date(2142237180000));

// Current timeStamp = date.now()
console.log(Date.now());

future.setFullYear(2040);     // also have these for all the methods (day, month, hour...)
console.log(future);

// For More https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/



