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