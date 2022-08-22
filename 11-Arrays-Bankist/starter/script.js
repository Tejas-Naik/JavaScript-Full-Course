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

// DOM Manipulation
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
          <div class="movements__value">${mov}€</div>
        </div>`
    containerMovements.insertAdjacentHTML('afterbegin', html);
    // containerMovements.insertAdjacentHTML('beforeend', html);
  });
};

// displayMovements(account1.movements);

const calcDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc += mov, 0)
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

// calcDisplayBalance(account1.movements)

const calcDisplaySummary = function (acc) {
  const income = acc.movements.filter((mov) => mov > 0).reduce((acc, mov) => acc + mov);
  labelSumIn.textContent = `${income}€`;

  const outcome = acc.movements.filter((mov) => mov < 0).reduce((acc, mov) => acc + mov);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  // giving 1.2% interest on every deposit
  const interest = movements.filter((mov) => mov > 0)
    .map((deposit) => deposit * (acc.interestRate / 100))
    .filter((int) => int >= 1)
    .reduce((accum, interest) => accum + interest);
  labelSumInterest.textContent = `${interest}€`;
}

// calcDisplaySummary(account1.movements)
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    const user = acc.owner;
    acc.username = user.toLowerCase().split(" ").map(name => name[0]).join("");
  })
}

createUsernames(accounts);

const updateUI = function (currentAcc) {
  // Display Movements
  displayMovements(currentAcc.movements);
  // Display Balance
  calcDisplayBalance(currentAcc);
  // Display Summary
  calcDisplaySummary(currentAcc);
}
// Event Handlers
let currentAccount;
// LOGIN
btnLogin.addEventListener('click', function (e) {
  // prevent page from loading
  e.preventDefault();
  // finding the account from username
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI & welcome message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(" ")[0]}!`
    containerApp.style.opacity = "100%";

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();   // to make it lose its focus (blinking cursor)

    updateUI(currentAccount);
  }
});

// TRANSFER MONEY 
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const transferAmount = Number(inputTransferAmount.value);
  const transferAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  inputTransferAmount.value = inputTransferTo.value = "";

  if (
    transferAmount > 0 &&
    transferAcc,
    transferAmount <= currentAccount.balance &&
    currentAccount?.username !== transferAcc.username
  ) {

    currentAccount.movements.push(-transferAmount);
    transferAcc.movements.push(transferAmount);
    updateUI(currentAccount);
  }
});

// CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const deleteIndex = accounts.findIndex((acc) => acc.username === currentAccount.username);
    accounts.splice(deleteIndex, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = ""
})

// REQUEST LOAN
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const loanAmount = Number(inputLoanAmount.value);
  if (loanAmount > 0) {
    currentAccount.movements.some(mov => mov >= loanAmount * .10);
    currentAccount.movements.push(loanAmount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
})

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
// MAP, FILTER, REDUCE methods for data transformation
// Map is used to create new array with some functionality like *2 every element (same as forEach but new array)
// Filter is used to create new array with filters if the els pass the filter they are added to the array
// Reduce is used to reduce the array's values to a single value -> sum

/*
// MAP METHOD
const euroMovements = movements;
const dollarMovements = euroMovements.map(function (mov, i, arr) {
  return mov * 1.1;
});

console.log(dollarMovements);

//Arrow Map
const dollarMovementsArr = euroMovements.map(mov => mov * 1.1);
console.log(dollarMovementsArr);

// for of
const movementsUSDforof = [];
for (const mov of euroMovements) {
  const movUSD = mov * 1.1
  movementsUSDforof.push(movUSD)
}
console.log(movementsUSDforof);

// index, array
const movementsDescription = movements.map((mov, i, arr) => {
  const type = (mov > 0) ? "deposit" : "withdrawal";
  return `Movement ${i + 1} : ${type} of ${Math.abs(mov)}`;
});
console.log(movementsDescription);

// forEach performs action whereas the map method returns new array
*/
/*
// FILTER METHOD
// Filter method will filter out some elements outta the array to fulfil the condition

const deposits = movements.filter(function (mov) {
  // only the mov's that pass the condition will be stored in the new array
  return mov > 0;   //  return boolean
})
const withdraws = movements.filter(mov => mov < 0);

console.log(deposits);
console.log(withdraws);

// forOf
const depositForOf = []
for (const mov of movements) {
  if (mov > 0) depositForOf.push(mov)
}
console.log(depositForOf);
*/

/*
// REDUCE METHOD
// the reduce method returns a value not an array
// the parameters of the callback functions are(accumulator, current, i, arr)

// funcion expression
const balance = movements.reduce(function (accumulator, current, i, arr) {
  // accumulator is like a snowball we can add to it (a outside var)
  console.log(accumulator);
  return accumulator + current;
}, 0)  // 0 is the starting value of the accumulator
console.log(balance);

// Arrow funcion
const balanceArrow = movements.reduce((acc, mov) => acc += mov)
console.log(balanceArrow);

// Geting maximum from the array using reduce
const maxInMovements = movements.reduce(function (acc, mov) {
  return (mov > acc) ? mov : acc;
}, movements[0])
console.log(maxInMovements)

const maxInMovementsArr = movements.reduce((acc, mov) => (mov > acc) ? acc = mov : acc = acc, movements[0])
console.log(maxInMovementsArr);
*/
/*
///////////////////////////////
// CHAINING (map, filter, reduce)
///////////////////////////////
const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * 1.1)
  .reduce((acc, mov) => acc + mov);
console.log(totalDepositsUSD);
*/
/*
//////////////////////////////////
// FIND METHOD
//////////////////////////////////
// Find method finds the first element in the array that satisfies the condition
// filter vs find
// filter returns new array----------find returns a value
// filter returns all the el that satisfies the condition----------find returns a the first value

const firstWithdrawal = movements.find((mov) => mov < 0);
console.log(firstWithdrawal);

// finding the user Jessica Davis in accounts [] of {}s
const account = accounts.find((acc) => acc.owner == "Jessica Davis");
console.log(account);

// for-of
let accountForOf;
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') accountForOf = acc;
}

console.log(accountForOf);
*/
//////////////////////////////////
// FIND INDEX METHOD
//////////////////////////////////


//////////////////////////////////
// SOME AND EVERY
//////////////////////////////////
// we can use includes for the true/false
console.log(movements);
console.log(movements.includes(-130));

// EQUALITY : SOME
const anyDeposit = movements.some((mov) => mov > 0);
console.log(anyDeposit)
// CONDITION
const anyDeposit50k = movements.some((mov) => mov > 50000);
console.log(anyDeposit50k);

// EQUALITY : EVERY - it will return true/run only when all the passed arguements pass the test/condition
const allDeposits = movements.every(mov => mov > 0);
const allDepositstrue = account4.movements.every(mov => mov > 0);
console.log(allDeposits);
console.log(allDepositstrue);

// separate callback
const callBcFn = function (mov) {
  return mov > 0
}

const allDepositsOutsideFunction = account4.movements.every(callBcFn);
console.log(allDepositsOutsideFunction);
