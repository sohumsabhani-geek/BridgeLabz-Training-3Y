// Q9 - Shopping Cart Total and Coupon Validation
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (!name || !Number.isFinite(price) || price < 0 ||
            !Number.isInteger(quantity) || quantity < 1) {
            throw new Error("Provide a name, non-negative price, and positive whole-number quantity.");
        }
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    applyCoupon(code) {
        // Accept coupon formats such as SAVE20 and DISC10.
        const match = /^(SAVE|DISC)(10|20)$/.exec(code);
        if (!match) {
            console.log("Invalid coupon. Use SAVE10, SAVE20, DISC10, or DISC20.");
            return this.getTotal();
        }
        const discountPercent = Number(match[2]);
        return this.getTotal() * (1 - discountPercent / 100);
    }
}

const cart = new Cart();
cart.addItem("Keyboard", 1500, 1);
cart.addItem("Notebook", 100, 3);
cart.addItem("Headphones", 2200, 1);

console.log("Items:", cart.items);
console.log(`Subtotal: ₹${cart.getTotal().toFixed(2)}`);
const coupon = "SAVE20";
console.log(`Coupon ${coupon} final total: ₹${cart.applyCoupon(coupon).toFixed(2)}`);
