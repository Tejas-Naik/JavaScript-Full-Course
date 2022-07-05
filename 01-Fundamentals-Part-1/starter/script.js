/*
///////////////////////////////////
// Hello World...
///////////////////////////////////
console.log("Hello, World");
// alert("Hello, World!");
let js = "amazing";
console.log(js)

if (js == 'amazing') {
    console.log("JavaScript is fun");
}

console.log(40 + 8 - 28 + 15);

///////////////////////////////////
// Brief Introduction to JavaScript
///////////////////////////////////

// What's JavaScript?
// JavaScript is a High level, Multi-Paradigm, OOP language

///////////////////////////////////
// VALUES AND VARIABLES
///////////////////////////////////
// value is a peice of data...
// 'jonas', 10, "Tejas", true
console.log("Tejas");
console.log(10);

// Declaring a variable
let firstName = "Tejas";
console.log(firstName)

// Naming conventions
let lastName = "Naik";

let tejas_matilda = "TM";
let $function = 'reserved'

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Engineer";

// give variables names descriptive...
let job1 = "Programmer";
let job2 = "Engineer";

console.log(myFirstJob);
console.log(myCurrentJob);

///////////////////////////////////
// PRIMITIVE DATA TYPES...
///////////////////////////////////
/*
there are 7 data types in JavaScript:
IMPORTANT:
1. Number 👉 floating point numbers 👉 used for decimals and untegers.
            let age = 17;
2. String 👉 sequence of characters 👉 Used for text
            let fName = "Tejas";
3. Boolean 👉 Logical type 👉 true or false 
            let isAdult = false;

NOT SO IMPORTANT:
4. Undefined 👉 value taken by a variable that is not yet defined 👉 empty value
            let children;
5. Null 👉 alse means empty value;

6. Symbol(ES2015) 👉 value that is unique and cannot be changed.
7. BigInt(ES2022) 👉 Larger integer than Number Data type can hold.

*/

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Tejas");

// dynamic typing = changing the type of the variable
javascriptIsFun = "Yes!";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 2005;
console.log(typeof year);

// BUG IN JS
console.log(typeof null);

