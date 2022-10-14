'use strict';

/*
What is OOP?
- OOP is a programming paradigm(style) based on concept of objects.
- We use objects to model (describe) real-world or abstract features.
- Objects may contain data(properties) and code(methods).
- in OOP, objects are self-contained pieces/blocks of code.
- Objects are building blocks of applications, and interact with one another
- Interactions happen through a public interface (API): methods that the code
-   outside of the object can access and use to communicate with the object.
- OOP was developed with goal to maintain the code. for more flexibility.

- Objects that are created in OOP are called Classes.
- Classes are blueprints for new objects
- we can create as many objects possible with the bluprint (instances).

How do we design Classes?
- We can create Classes using these 4 fundamental principles
    1. Abstraction
            --> Ignoring and Hiding details that doesnt matter. (High Overview of a function/class).
    2. Encapsulation
            --> Keeping some properties private, they cant be accessed by outside.
    3. Inheritance
            --> Inheritence is the way of making all properties/methods of a class get inherited by other child classes.
            --> Creating new classes from the original one
    4. Polymorphism
            --> Modifying/changing the inherited class's method
            --> (Parent[login-method]) --> Child[login-method] - new login method.

*/

/*
= OOP in JavaScript
- In classical OOP we have classes to create Instances.
- We inherit from the class

- In traditional OOP we have Prototypes to create new Objects/classes
- We inherit from prototype to create new objects --> prototypal inheritance.

=3 ways of implementing Prototypal Inheritance
    1. Constructor Functions
    2. ES6 Classes
    3. Object.create()

*/

// Constructor Functions and the `new` operator.
const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this - because it creates this object for every created obj
    // this.calcAge() = function () {
    //     console.log(2022 - this.birthYear);
    // }
};

/*
1. New {} is created.
2. function is called, this is = {}
3. {} is linked to a prototype
4. function automatically return {}
*/
const tejas = new Person("Tejas", 2005);
console.log(tejas);

const matilda = new Person("Matilda", 1991);
const jack = new Person("Jack", 1976);

console.log(matilda, jack);
const jay = "Jay";

// Checking if is instance
console.log(tejas instanceof Person);
console.log(jay instanceof Person);

// Calling methods
console.log(tejas.calcAge());
