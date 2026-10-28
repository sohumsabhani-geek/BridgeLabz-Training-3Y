// Q9 - Debugging the Event Loop
"use strict";

// Predicted output:
// Script start
// Script end
// Promise callback
// Timeout callback
//
// Actual order is the same: synchronous logs run first; Promise reactions are
// microtasks and run before timer callbacks (macrotasks) after the script ends.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
