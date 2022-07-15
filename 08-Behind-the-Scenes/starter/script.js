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
