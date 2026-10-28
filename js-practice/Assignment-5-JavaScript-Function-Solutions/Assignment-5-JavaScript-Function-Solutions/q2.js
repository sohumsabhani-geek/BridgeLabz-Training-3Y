// Q2 - Higher-order function with callbacks
"use strict";

function applyOperation(numbers, operation) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        results.push(operation(numbers[i]));
    }
    return results;
}

const numbers = [1, 2, 3, 4];
const doubled = applyOperation(numbers, number => number * 2);
const squared = applyOperation(numbers, number => number * number);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Squared:", squared);
