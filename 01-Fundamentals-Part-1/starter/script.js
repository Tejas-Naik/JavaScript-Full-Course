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


///////////////////////////////////
// 3 TYPES WE CAN DECLARE A VARIABLE. (LET, CONST, VAR)
///////////////////////////////////
let age = 16;
age = 17;   // mutable
console.log(age)

const birthYear = 2005;
// birthYear = 2004;  // immutable
console.log(birthYear);

var job = "Programmer";
job = "Engineer";

lastName = "Naik";
console.log(lastName);

*/

/*
///////////////////////////////////
// BASIC OPERATORS
///////////////////////////////////
// Mathematical Operators...
const now = 2022;
const ageTejas = now - 2005;
const ageSarah = now - 2007;
console.log(ageTejas, ageSarah);

console.log(ageTejas * 2); 
console.log(ageTejas / 2);
console.log("Power:", 2 ** 3);

const firstName = "Tejas";
const lastName = "Naik";
console.log(firstName + " " + lastName);

// Assignment Operators... (=, +=, -=, *=, /=)
let x = 10 + 5;
x += 10;            // x = x + 10 = 25;
x *= 4;             // x = x * 4 = 100;
x++                 // x + 1
x--                 // x - 1
console.log(x);


// Comparison operator 👉 Boolean ( > , < , => , =< , ==, === )
console.log(10 < 1);
console.log(ageTejas > ageSarah);
console.log(ageTejas >= 18);
*/

/*
///////////////////////////////////
// OPERATOR PRECEDENCE
///////////////////////////////////
// so there are some operators that have more precedence value than 
// others so they ecevute before the less precedence values

// Search MDN Operator precedence

console.log(2022 - 2005 > 2022 - 2006);
// In the above case we see that the mathematical operators have 
//      more precedence than comparison operator

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

console.log(2022 - 2005);

const avarageAge =
    ((2022 - 2005) + (2022 - 2005)) / 2
    ;

console.log(avarageAge);

*/
/*
///////////////////////////////////
// STRINGS & TEMPLATE LITERALS
///////////////////////////////////
const firstName = "Tejas";
const job = "Programmer";
const birthYear = 2005;
const year = 2022;

const tejas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(tejas);

// Template literals
const tejasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(tejasNew);

console.log(`Just a regular string...`);

// Multi-line string
console.log("string with \n\
multiple\n\
lines...");

console.log(`String with
multiple 
lines....`)
*/

/*
///////////////////////////////////
// IF / ELSE statements
///////////////////////////////////
const age = 17;

if (age >= 18) {
    console.log("Sarah can drive 🚗");
} else {
    console.log(`Sarah is too young. wait for another ${18 - age} year(s) :)`);
}

const birthYear = 2005;

let century;
if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}

console.log(century);
*/

/*
///////////////////////////////////
// TYPE CONVERSION / COERcION
///////////////////////////////////
// type conversion = manually chance the data type, 

const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));       // Not a Number
console.log(typeof NaN);            // number but invalid

console.log(String(23));

// type coercion = when javascript changes the data type
console.log('23' + '10' + 3);       // +  will convert to strings
console.log('23' - '10' - 3);       // -  will convert to numbers
console.log('23' * '10');       // /  will convert to numbers
console.log('23' / '10');       // *  will convert to numbers

console.log('23' + '10' - 3);

*/

/*
///////////////////////////////////
// TRUTHY AND FALSY VALUES
///////////////////////////////////
// falsy values are not falsy but they become falsy when we try to convert them to boolean

// 5 FALSY VALUES : NULL, UNDEFINED, 0, "", NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(NaN));

console.log(Boolean("Tejas"));
console.log(Boolean({}));

// implicitly javascript converting to boolean
const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}


let height;
if (height) {
    console.log("Height is defined!");
}
else {
    console.log("Height is UNDEFINED!")
}
*/

/*
///////////////////////////////////
// Equality Operators: == vs. ===
///////////////////////////////////
const age = 18;
// Strict equality doesnt perform type coercion
if (age === 18) console.log("You are an adult now (strict)");

// Loose equality does perform type coersion
if (age == '18') console.log("You are an adult now (loose)");

const favorite = Number(prompt("What's your favorite number? "));

// Loose
if (favorite == 23) {
    console.log('Cool! 23 is an awesome number! (loose)');
}
// strict
if (favorite === 23) {
    console.log('Cool! 23 is an awesome number!');
} else if (favorite === 7) {
    console.log("Amazing, 7 is great number!");
} else if (favorite === 9) {
    console.log("Amazing, 9 is great number!");
} else {
    console.log("Number is not 23 or 7 or 9");
}

// not
if (favorite !== 7) {
    console.log("Why not 7??... ;)")
}

if (!favorite) {
    console.log("Hey hey not a correct answer ;)")
}
*/

///////////////////////////////////
// Equality Operators: == vs. ===
///////////////////////////////////

// logical operators:
// AND
// only true if all the values are true otherwise its false

// OR
// only false when all the values are false otherwise true

// NOT
// it reverses the boolean values if true then not true is false and wise versa

const hasDriversLicence = true;
const hasGoodVision = true;

console.log(hasDriversLicence && hasGoodVision);
console.log(hasDriversLicence || hasGoodVision);
console.log(!hasDriversLicence);


// if (hasDriversLicence && hasGoodVision) {
//     console.log("Sarah is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false;
console.log(hasDriversLicence && hasGoodVision && !isTired);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
} else {
    console.log("Someone else should drive...");
}