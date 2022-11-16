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