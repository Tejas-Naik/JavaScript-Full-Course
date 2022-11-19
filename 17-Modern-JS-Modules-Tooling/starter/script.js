// Importing module
// import "./shoppingCart.js";
// import {
//     addToCart,
//     totalPrice as price,
//     totalQuantity
// } from "./shoppingCart.js";
// addToCart("Macbook Pro 13\"", 2);
// console.log(price, totalQuantity);

console.log("Importing Module");
// import * as ShoppingCart from "./shoppingCart.js";

// ShoppingCart.addToCart("Iphone 14 pro max", 4);
// console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.totalQuantity);

// Default exports
// import add, {
//     addToCart,
//     totalPrice as price,
//     totalQuantity
// } from "./shoppingCart.js";

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 5);
add("apple", 4);

console.log(cart);

// Top level await
// Top level await is executing outside async executed synchronously
// console.log("Start Fetching");
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log("Something");

const getLastPost = async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    return { title: data.at(-1).title, text: data.at(-1).body }
}

const lastPost = getLastPost();

// Not very clean
lastPost.then(last => console.log(last));
// Top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);

//The Module pattern
const shoppingCart2 = (function () {
    const cart = [];
    const shoppingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product: quantity });
        console.log(`${quantity} ${product} added to cart`);
    }

    const orderStock = function (product, quantity) {
        console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        orderStock,
        totalPrice,
        totalQuantity
    }
}())

shoppingCart2.addToCart("apple", 2);
shoppingCart2.addToCart("pizza", 4);
console.log(shoppingCart2);
console.log(shoppingCart2.shoppingCost);

// Common JS Modules
// THis doesnt work in the browser but work in the node

// Export
// export.addToCart = function (product, quantity) {
//     cart.push({ product: quantity });
//     console.log(`${quantity} ${product} added to cart`);
// }

// // Import
// const { addToCart } = require('./shoppingCart.js');

// importing cloneDeep
import cloneDeep from "lodash-es";
// Deepclone helps us to copy the nested objects
const state = {
    cart: [
        { product: "bread", quantity: 5 },
        { product: "pizza", quantity: 4 },
    ],
    user: { loggedIn: true }
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);

