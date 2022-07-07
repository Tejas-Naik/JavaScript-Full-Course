'use strict';
/*

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;      
if (hasDriversLicence) console.log("I can drive...");

// const interface = "Audio";
// const private = 543;

*/

///////////////////////////////
// FUNCTIONS
///////////////////////////////
// Function is also a variable but for multiple lines of code
function logger() {
    console.log("My name is Tejas.");
}

// Invoking / calling / running a function
logger();
logger();
logger();

// Functions with inputs
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    // returns the output so we can store into variable or use other operators
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


