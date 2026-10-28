// Q2 - Task Scheduler: Microtasks vs Macrotasks
"use strict";

console.log("Start");

setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise.then callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// Expected order:
// Start
// Synchronous log
// End
// Promise.then callback (microtask)
// setTimeout callback (macrotask)
//
// Synchronous code runs first. After the current script finishes, the event loop
// drains the microtask queue before taking the next macrotask such as setTimeout.
