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
