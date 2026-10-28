// Q8: Dynamic Discount Evaluator
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const finalPrice = product.price - product.price * discountRate;
    discountedTotal += finalPrice;

    console.log(`${product.item}: ₹${product.price} -> ₹${finalPrice.toFixed(2)}`);
}

if (cartTotal > 50000) {
    discountedTotal -= discountedTotal * 0.05;
    console.log("Extra 5% cart discount applied.");
} else {
    console.log("No extra cart discount.");
}

console.log(`Cart total before discounts: ₹${cartTotal.toFixed(2)}`);
console.log(`Final cart total: ₹${discountedTotal.toFixed(2)}`);
