'use strict';

// Overview of JavaScript
/*
JavaScript is a High Level, Garbage-collected, Interpreted or just-in-time
compiled, Multi Paradigm, Prototype based Object oriented programming languge
with First Class Function, Dynamically Typed, single threaded non-blocking
event loop
*/

// JavaScript Engine and Runtime
/*
JavaScript Engine is a program that executes JavaScript Code

*/

// Scope and Scope Chain
/*
Scoping controls how our program variables are organized and accessed.
- Where do the variables live?

Lexical Scoping
- Scoping controlled by placement of functions and blocks in code;
- Nested functions have access to the parent functions variables.
- global variables are accessed by everywhere.
*/

/*
// Scoping in practice
function calcAge(birthYear) {
    const age = 2022 - birthYear;
    // console.log(firstName);

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1991) {
            const str = `Oh, you are a millenial ${firstName}`
            console.log(str)
        }
    }

    printAge();
    return age;
}

const firstName = "Tejas";
calcAge(1986);

*/

// Variable Environment and Temporal Dead Zone(TDZ)
/*
    HOISTING : make some variables accessable before they are initialized
             - code is scanned for variable declaration before execution
    
    Let and Const variables are TDZ(Temporal Dead Zone)
*/

// Hoistins and TDZ

// Variables
console.log(me);        // returns undefined
// console.log(year);   // referenceerror
// console.log(job);    // referenceerror   
var me = "Tejas";
let job = "Programmer";
const year = 2005;

// Functions
console.log(addDecl(1, 2))
// console.log(addExpr(1, 2))
// console.log(addArr(1, 2))

function addDecl(a, b) {
    return a + b;
}

const addExpr = function (a, b) {
    return a + b;
}

var addArr = (a, b) => a + b;

/*
- We can only use function declarations before init
- var/let/const can be called before init
*/

// Example
// Don't do this because variables with var are undefined
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
    console.log("All Products deleted");
}

// see window in console
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);