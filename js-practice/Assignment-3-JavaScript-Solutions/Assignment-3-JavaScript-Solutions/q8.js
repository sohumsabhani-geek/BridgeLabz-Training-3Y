// Q8 - Strict Mode Showdown
// Keep the strict-mode and non-strict examples in separate functions for safe comparison.
function nonStrictDemo(a, a) {
    total = 10; // In non-strict scripts, this may create a global property.
    console.log("Non-strict total:", total);
    // delete total; // Deleting an unqualified identifier is not allowed in strict mode.
}
nonStrictDemo(5, 10);

// Strict-mode version: duplicate parameter names and undeclared assignment are illegal.
function strictDemo() {
    "use strict";
    // function duplicate(a, a) {} // SyntaxError in strict mode.
    let total = 10;
    console.log("Strict-mode total:", total);
    // delete total; // SyntaxError: cannot delete an unqualified identifier.
}
strictDemo();

// Correct ES6-style version: unique parameters, explicit declaration, no delete of local bindings.
function correctDemo(first, second) {
    "use strict";
    const total = first + second;
    console.log(`Correct ES6 version: ${first} + ${second} = ${total}`);
}
correctDemo(5, 10);
