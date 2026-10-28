// Q6: Progressive Discount System
// Change purchaseTotal to test different discount levels.
const purchaseTotal = 6500;
let discountRate = 0;

if (purchaseTotal >= 10000) {
    discountRate = 25;
} else if (purchaseTotal >= 5000) {
    discountRate = 15;
} else if (purchaseTotal >= 2000) {
    discountRate = 5;
}

const discountAmount = Math.round(purchaseTotal * discountRate / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Original total: ₹" + Math.round(purchaseTotal));
console.log("Discount: " + discountRate + "%");
console.log("Final price after discount: ₹" + finalPrice);
