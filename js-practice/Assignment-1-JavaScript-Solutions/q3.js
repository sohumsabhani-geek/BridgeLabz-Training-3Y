// Q3: Monthly Expense Tracker
const expenses = [
    { category: "Food", amount: 4500 },
    { category: "Travel", amount: 1200 },
    { category: "Rent", amount: 7000 },
    { category: "Bills", amount: 1500 },
    { category: "Leisure", amount: 800 }
];

let total = 0;

// Add each category amount to the total.
for (const expense of expenses) {
    total += expense.amount;
}

const average = total / expenses.length;
const taxRate = 0.10;
total += total * taxRate;
const finalAmount = total;

console.log("Total before tax: ₹" + (finalAmount / 1.10).toFixed(2));
console.log("Average expense: ₹" + average.toFixed(2));
console.log("Tax (10%): ₹" + (finalAmount - finalAmount / 1.10).toFixed(2));
console.log("Final amount after tax: ₹" + finalAmount.toFixed(2));
