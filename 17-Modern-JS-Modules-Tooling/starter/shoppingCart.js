// Exporting module
console.log("Exporting module");

const shoppingCost = 10;
export const cart = [];

// Named export
export const addToCart = function (product, quantity) {
    cart.push({ product: quantity });
    console.log(`${quantity} ${product} added to cart`);
}

// exporting multiple variables
const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
    cart.push({ product: quantity });
    console.log(`${quantity} ${product} added to cart`);
}