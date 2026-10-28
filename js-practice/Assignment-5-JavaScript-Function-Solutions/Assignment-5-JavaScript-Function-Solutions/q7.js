// Q7 - Closure-based multiplier
"use strict";

function makeMultiplier(multiplier) {
    // The returned function retains access to this multiplier variable.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Closure: even after makeMultiplier has returned, the inner function remembers
// the multiplier value from the outer function's lexical environment.
const double = makeMultiplier(2);
console.log(double(5)); // 10
