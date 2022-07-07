'use strict';
/*

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriverLicence = true;
if (hasDriversLicence) console.log("I can drive...");

// const interface = "Audio";
// const private = 543;

*/

/*

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

*/

/*

///////////////////////////////
// FUNCTIONS DECLARATION vs EXPRESSION
///////////////////////////////

// function declaration

const age1 = calcAge1(2005);    // you can call declarations before intializing

function calcAge1(birthYear) {
    return 2022 - birthYear;
}

// const age1 = calcAge1(2005);
console.log(age1)

// function expression ==> produces value and stores to a variable
// functions are values...
const calcAge2 = function(birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(2005);
console.log(age2);

*/

/*

///////////////////////////////
// ARROW FUNCTIONS
///////////////////////////////
// function expression

// Arrow Functions
const calcAge3 = (birthYear) => 2022 - birthYear;
const age3 = calcAge3(2005)
console.log(age3);


const yearsUntilRetirement = (firstName, birthYear) => {
    let age = 2022 - birthYear;
    let retirementYears =  65 - age;
    // return retirementYears;
    return `${firstName} retires in ${retirementYears} years.`
}

console.log(yearsUntilRetirement("Tejas", 2005));
console.log(yearsUntilRetirement("Jonas", 1991));

*/

/*

///////////////////////////////
// NESTED FUNCTIONS(calling other functions)
///////////////////////////////

const fruitCutter = function (fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruitCutter(apples);
    const orangePieces = fruitCutter(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces`;
    return juice;
}

console.log(fruitProcessor(1, 1));

*/
///////////////////////////////
// Reviewing FUNCTIONS
///////////////////////////////

const calcAge = birthYear => 2022 - birthYear;

const yearsUntilRetirement = function (firstName, birthYear) {
    let age = calcAge(birthYear);
    let retirementYears = 65 - age;

    if (retirementYears >= 0) {
        console.log(`${firstName} retires in ${retirementYears} years.`)
        return retirementYears
    } else {
        console.log(`${firstName} has already retired.`);
        return -1
    }

}

console.log(yearsUntilRetirement("Tejas", 2005));
console.log(yearsUntilRetirement("Jonas", 1200));
