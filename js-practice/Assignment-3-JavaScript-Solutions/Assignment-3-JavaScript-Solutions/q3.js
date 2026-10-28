// Q3 - Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];
const valid = [];
const invalid = [];

for (let index = 0; index < transactions.length; index++) {
    try {
        const transaction = transactions[index];
        if (transaction === null) {
            const error = new Error("Null transaction entry");
            error.name = "NullEntryError";
            throw error;
        }
        if (transaction.id === undefined || transaction.amount === undefined) {
            const error = new Error("Missing transaction id or amount");
            error.name = "MissingFieldError";
            throw error;
        }
        if (transaction.amount < 0) {
            const error = new Error("Transaction amount cannot be negative");
            error.name = "NegativeAmountError";
            throw error;
        }
        valid.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalid.push({ index: index + 1, type: error.name, message: error.message });
        console.log(`Entry ${index + 1}: ${error.name} - ${error.message}`);
    }
}
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);
// Debug tip: set a breakpoint inside the try block and inspect index, transaction, and both arrays.
