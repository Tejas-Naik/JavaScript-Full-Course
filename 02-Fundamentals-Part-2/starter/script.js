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

/*
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
*/

/*

///////////////////////////////
// INTRO TO ARRAYS
///////////////////////////////
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

const birthYears = new Array(1991, 2005, 2007, 2020, 2022);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends[friends.length - 1])

friends[2] = "Angela";
// friends = ["Alice", "Bob"];
console.log(friends);

const firstName = "Tejas";
const tejas = [firstName, "Naik", 2022 - 2005, "Programmer", friends]

console.log(tejas);


// Exercise
const calcAge = birthYear => 2022 - birthYear;
const years = [1991, 2003, 2005, 2010, 2019];
const ages = [
    calcAge(years[0]),
    calcAge(years[1]),
    calcAge(years[2]),
    calcAge(years[3]),
    calcAge(years[4]),
]

console.log(ages);

*/

/*

///////////////////////////////
// ARRAY METHODS.
///////////////////////////////
// push(), unshift(), shift(), pop(), indexOf(), includes();

const friends = ["Michael", "Steven", "Peter"];

// ADD
// Adding elements ot the end of the array
const newLength = friends.push("Jay");      // returns new length
console.log(friends, newLength);

// adds element to the first of the array
friends.unshift("Alice");                   // returns new length
console.log(friends)


// REMOVE
const removed = friends.pop()   // removes last and returns.
console.log(friends, removed);

friends.shift()                // removes first element.
console.log(friends)

// IndexOf
console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Hiii"));


// includes (strict)
console.log(friends.includes("Steven"));
console.log(friends.includes("Hiii"));

if (friends.includes("Peter")) {
    console.log("You have a friend called Peter");
}

*/

/*

///////////////////////////////
// OBJECTS.
///////////////////////////////
// Array
const tejasArray = [
    "Tejas",
    "Naik",
    2022 - 2005,
    "Programmer",
    ["Peter", "Jonas", "Angela"]
];
console.log(tejasArray);

// Object
// Order doesnt matter
const tejasObject = {
    firstName: "Tejas",
    lastName: "Naik",
    age: 2022 - 2005,
    job: 'Programmer',
    friends: ["Peter", "Steve", "Michael"],
};

console.log(tejasObject);

*/

const tejasObject = {
    firstName: "Tejas",
    lastName: "Naik",
    age: 2022 - 2005,
    job: 'Programmer',
    friends: ["Peter", "Steve", "Michael"],
};
console.log(tejasObject);

// Dot Notation
console.log(tejasObject.lastName);

// Bracket notation
// we can put expression in the bracket notation
console.log(tejasObject['lastName']);

const nameKey = "Name";
console.log(tejasObject["first" + nameKey]);
console.log(tejasObject["last" + nameKey]);

// console.log(tejasObject.'last' + Name);


// const userInput = prompt("What do you wanna know about Tejas? select from options below: (firstName, lastName, age, job, friends.)");
const interestedIn = "location"
if (tejasObject[interestedIn] === undefined) {
    console.log(`Sorry ${interestedIn} is not an option.`)
} else console.log(tejasObject[interestedIn]);

// Adding new properties to the object
tejasObject.location = "Remote";
tejasObject['twitter'] = "@rn_tejas";
console.log(tejasObject);

// Challenge
// Tejas has 3 friends and his best friend is "Steve";
console.log(`${tejasObject.firstName} has ${tejasObject.friends.length} friends and his best friend is ${tejasObject.friends[1]}`);

