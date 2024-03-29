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
/*
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
*/
/*
// Coding Challenge #3
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

const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    console.log(`Battery Charged upto ${this.charge}%`);
}

EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed}km/h with ${this.charge}`);
}

const tesla = new EV("Tesla", 140, 23);
tesla.accelerate();
tesla.chargeBattery(100);
tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.brake();
*/
/*
// Inheritance between classes: ES6 Classes
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
class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first.
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`I am ${this.fullName}. I study ${this.course}.`);
    }

    calcAge() {
        console.log(`I am ${2022 - this.birthYear} years old but as a student I feel like ${(2022 - this.birthYear) + 10}`);
    }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
*/
/*
// Inheritance between classes : Object.create()
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
steven.init("Steven", 2002)

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function () {
    console.log(`I am ${this.firstName}. I study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init("Jay", 2010, "Computer Science");
jay.introduce();
jay.calcAge();
*/
/*
// Another Class Example
class Account {
    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this._pin = pin;
        this._movements = [];
        this.locale = navigator.language;

        console.log(`Thank you for opening an account ${this.owner}`)
    }

    // Public Interface
    getMovements() {
        return this._movements;
    }

    deposit(mov) {
        this._movements.push(mov);
    }

    withdraw(mov) {
        this.deposit(-mov);
    }

    _approveLoan(val) {
        return true;
    }

    requestLoan(val) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log("Loan Approved");
        }
    }
}
const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(270);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());
*/
/*
// Encapsulation: Private class fields and methods
// 1. Public Fields
// 2. Private Fields
// 3. Public Methods
// 4. Private Methods
class Account {
    // 1. Public Field (instances not prototype)
    locale = navigator.language;

    // 2. Private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        // protected property
        this.#pin = pin;
        // this._movements = [];
        // this.locale = navigator.language;

        console.log(`Thank you for opening an account ${this.owner}`)
    }

    // Public Methods
    // Public Interface
    getMovements() {
        return this.#movements;
    }

    deposit(mov) {
        this.#movements.push(mov);
        return this;
    }

    withdraw(mov) {
        this.deposit(-mov);
        return this;
    }

    requestLoan(val) {
        // if (this.#approveLoan(val)) {
        if (this._approveLoan(val)) {
            this.deposit(val);
            console.log("Loan Approved");
        }
        return this;
    }
    // 4. Private Methods
    // #approveLoan(val) {
    _approveLoan(val) {
        return true;
    }
    // Static
    static helper() {
        console.log("Helper");
    }
}
const acc1 = new Account("Jonas", "EUR", 1111);
acc1.deposit(270);
acc1.withdraw(140);
acc1.requestLoan(1000);

console.log(acc1);
console.log(acc1.getMovements());

Account.helper();
// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan);


// Chaining Methods
// Simply return this from the methods in the class
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1.getMovements());
*/

// Coding Challenge #4
class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.speed}km/h`);
    }
    brake() {
        this.speed -= 5;
        console.log(`${this.speed}km/h`);
    }

}


class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        console.log(`Battery Charged upto ${this.#charge}%`);
        return this;
    }
    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} is going at ${this.speed}km/h with ${this.#charge}% charge`);
        return this;
    }

    get speedUS() {
        console.log(this.speed * 1.6);
    }
}

const rivian = new EVCl("Rivian", 120, 23);
rivian.accelerate();
rivian.brake();
rivian.brake();
rivian.accelerate().chargeBattery(100).accelerate();
rivian.speedUS;
