'use strict';
/*
//////////////////////////////////
// Default Parameters
//////////////////////////////////
const bookings = [];
const createBooking = function (flightNumber = "LH123", numPassangers = 1, price = 999 / numPassangers) {
    // // before es6
    // flightNumber = flightNumber || "------";
    // numPassangers = numPassangers || 1;
    // price ||= 199;

    const booking = {
        flightNumber,
        numPassangers,
        price
    }
    console.log(booking);
    bookings.push(booking)
}

createBooking("LF333");
createBooking("LF121", 76, 499);
createBooking();
createBooking("LF121", 16);
createBooking("LF121", 12);
createBooking("LF121", undefined, 12);  // default passangers

*/
/*
///////////////////////////////////////
// How Passing Arguments Works: Value vs. Reference
///////////////////////////////////////
const flight = "LH234";
const tejas = {
    name: "Tejas Naik",
    passport: 234567654,
}

const checkIn = function (flightNum, passanger) {
    flightNum = "LH999";
    passanger.name = "Mr. " + passanger.name

    if (passanger.passport === 234567654) {
        alert("Checked In");
    } else {
        alert("Wrong passport :(");
    }
}

checkIn(flight, tejas);
console.log(flight);
console.log(tejas);


// Is the same as doing
const flightNum = flight;
const passanger = tejas;

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000);
}

newPassport(tejas);
console.log(tejas.passport);
checkIn(flightNum, tejas)

*/

/*
///////////////////////////////////////
// FIRST CLASS /HIGHER ORDER FUNCTIONS
///////////////////////////////////////
// functions are first class citizens that means they are simply values because functions are another type of object and objects are treated as values so vice verse
// Higher order functions are the functions that recieves a function as arguement or returns a function or both
// btnClose.addEventListener('click', greet)
//          higher order func        callback

const oneWord = str => str.replaceAll(" ", "").toLowerCase();

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ")
};

// HIGHER ORDER FUNCTIONS - Functions accepting callback functions
const transformer = function (str, fn) {
    console.log(`Original string : ${str}`);
    console.log(`Transformed string : ${fn(str)}`);
    console.log(`Transformed by : ${fn.name}`);
}

transformer("here we are where we were", upperFirstWord);
transformer("here we are where we were", oneWord);

// Functions returning functions - HIGHER ORDER FUNCTIONS
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

greet("Hey")("Tejas");
const greeter = greet("Hii");
greeter("Tejas");
greeter("Jonas");

const greetArrow = greet => name => console.log(`${greet} ${name}`);
greetArrow("Hii")("Arrow")
*/
/*
////////////////////////////////////////
// CALL & APPLY METHOD
////////////////////////////////////////
const lufthansa = {
    airline: "Lufthansa",
    iataCode: 'LH',
    bookings: [],
    // book : function(){}
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${this.flightNum}`, name: name })
    }
}

lufthansa.book(239, "Tejas Naik");
lufthansa.book(635, "John Smith");

const euroWings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book;
// Doesnt work
// book(244, "Tejas");

// Call method - takes direct arguement.
book.call(euroWings, 239, "Gotham");
console.log(euroWings);
book.call(lufthansa, 112, "Sarah Johns");

const swissAirline = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
}

book.call(swissAirline, 69, "Chill mate")

// Apply Method [takes array of arguements]
const flightData = [696, "Mary Cooper"]
book.apply(swissAirline, flightData);

console.log(swissAirline);

// THE BIND METHOD
// book.call(euroWings, 948, "Bob Mercy");
const bookEW = book.bind(euroWings);// returns function
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swissAirline);
bookEW(1, "Tejas Naik");
bookLH(1, "Tejas Naik");
bookSW(1, "Tejas Naik");

const bookEW23 = book.bind(euroWings, 23)   // setting flightNum=23;
bookEW23("Jake")

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++
    console.log(this.planes);
}

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// In the above example the this keyword is set to the button
// so we want it to be lufthansa so use .bind()


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application - means setting some arguements beforehand
const addTax = (rate, value) => value + value * rate
console.log(addTax(.1, 100));
console.log(addTax(.1, 200));

const addVAT = addTax.bind(null, .23);  // first arg is null bcz its the object so there is no obj to call on
console.log(addVAT(100));

const addGST = addTax.bind(null, .18);
console.log(addGST(100000));

const gst = function (rate) {
    return function (value) {
        return value + value * rate;
    }
}

console.log(gst(.18)(100));
*/
/*
//////////////////////////////////
// Immidiately Invoked Function Expression
//////////////////////////////////
// IIFE means a function that will only run once
// After that it will disappears
const runOnce = function () {
    console.log("This will never run again")
}
runOnce();
runOnce();   // if we do this then we can run this as many times as want


// IIFE
// Declaration
(function () {
    console.log("This will literally never run again");
})();
// Arrow
(() => console.log("This will literally never run again"))()
*/

///////////////////////////////
// CLOSURES
///////////////////////////////
const secureBooking = function () {
    let passangerCount = 0;
    return function () {
        passangerCount++
        console.log(`${passangerCount} passangers`);
    }
};

const booker = secureBooking();
// Closure is a way of remembering all the variables at its birth place no matter what
// Closure allows us to use the variables of securebooking in the booker function even if it is global scoped and variables in side functions are not accessed outside
// Closure has more priority than the global vars
console.dir(booker)
