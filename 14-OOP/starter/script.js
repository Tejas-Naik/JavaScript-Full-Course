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
/*
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

//
// 1. New {} is created.
// 2. function is called, .this = {}
// 3. {} is linked to a prototype
// 4. function automatically return {}
//

const tejas = new Person("Tejas", 2005);
console.log(tejas);

const matilda = new Person("Matilda", 1991);
const jack = new Person("Jack", 1976);

console.log(matilda, jack);
const jay = "Jay";

// Checking if is instance
console.log(tejas instanceof Person);
console.log(jay instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
}

tejas.calcAge();
matilda.calcAge();

// checking which function we have in prototype
console.log(tejas.__proto__);
console.log(tejas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(tejas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = "Homo Sapiens";
console.log(tejas.species, matilda.species);

// hasOwnProperty = defined when the function is created.
console.log(tejas.hasOwnProperty('firstName'));
console.log(tejas.hasOwnProperty('species'));

//
// inheritance - > jonas object to Persom.prototype
// object.prototype
// jonas -> jonas__proto__ -> person.prototype-> object.prototype

//

// Prototypal Inheritance on Built-in Objects.
console.log(tejas.__proto__);
// Object.prototype -> top of the prototype chain
console.log(tejas.__proto__.__proto__);
console.log(tejas.__proto__.__proto__.__proto__);

const arr = [3, 5, 3, 3, 6, 7, 1, 5, 0];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__.__proto__);

// Creating new methods on the array
Array.prototype.unique = function () {
    return [...new Set(this)];
}

console.log([1, 2, 3, 4, 1, 2, 3, 4, 1].unique());

const h1 = document.querySelector("h1");
console.log(h1.__proto__);

console.dir(x => x + 1);

// Coding Challenge #1
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.speed}km/h`);
}
Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.speed}km/h`);
}

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

BMW.accelerate();
BMW.accelerate();
BMW.accelerate();
BMW.brake();
BMW.brake();

Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.brake();
Mercedes.accelerate();

*/
/*

// ES6 Classes

// class expression
// const PersonCl = class= {};

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    // Setting prototypes
    calcAge() {
        console.log(2022 - this.birthYear);
    }   //  no commas between methods

    greet() {
        console.log(`Hii, ${this.fullName}`);
    }

    get age() {
        return 2022 - this.birthYear;
    }

    // Setting a property that already exists we also use getter
    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name`)
    }
    get fullName() {
        return this._fullName;
    }

    // Static Methods (only on original not inherits)
    static hey() {
        console.log("Hey there 👋");
    }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica.__proto__);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hii, ${this.firstName}`);
// }
jessica.greet();
PersonCl.hey();
// 1. Classes are not hoisted (cant call before declaration);
// 2. Classes are also first-class citizens (pass & return from functions)
// 3. Classes are executed in strict mode;

// you can use Contructor functions / classes as per your preference.
// const walter = new PersonCl("Walter", 1996);

// Setters and Getters
const account = {
    owner: "Jonas",
    movements: [1000, -200, 450, 221, -100, 300],

    // `get` = getter
    get latest() {
        return this.movements.at(-1);
    },

    set latest(mov) {
        this.movements.push(mov)
    }
};

// We have to use getter as a property not a method
console.log(account.latest);

// Setting a new value as a property
account.latest = 50;
console.log(account.movements);


// Static Methods
console.log(Array.from(document.querySelectorAll("h1")));
// console.log([1, 2, 3].from());      // from is not a function
// Array.from is a function that is attached to the constructor of the Array Object
*/
/*
// Object.create() - the third way to create an object/class
// No setting prototype, no constructor function and no 'new' keyword

// creating a prototype function
const PersonProto = {
    calcAge() {
        console.log(2022 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
steven.name = "Tejas";
steven.birthYear = 2005;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1979);
sarah.calcAge()
*/
/*
// Coding Challenge #2
class Car {
    constructor(make, speed) {
        this.make = make,
            this.speed = speed
    }

    accelerate() {
        console.log(this.speed += 10);
    }

    brake() {
        console.log(this.speed -= 5);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }

}

const bmw = new Car("BMW", 120);
const mercedese = new Car("Mercedese", 95);

console.log(bmw.speedUS)
bmw.accelerate()
mercedese.accelerate()
// setter
bmw.speedUS = 50;
console.log(bmw);
*/
// Inheritance between "Classes"
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

Person.prototype.calcAge = function () {
    console.log(2022 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
}
// Linking Prototype
// Student.prototype = Person.prototype;
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
    console.log(`I am ${this.firstName}. I study ${this.course}.`);
}

const mike = new Student("Mike", 2005, "Computer Science")
mike.introduce();
mike.calcAge()

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__);
console.log(mike.__proto__.__proto__.__proto__.__proto__);

console.log(mike instanceof Person);
console.log(mike instanceof Student);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor)
