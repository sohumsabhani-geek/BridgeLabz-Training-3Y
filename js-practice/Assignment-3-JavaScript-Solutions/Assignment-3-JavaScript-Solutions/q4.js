// Q4 - Debugging Mystery
"use strict";

// Original code fails because strict mode forbids assigning to an undeclared identifier.
// greeting = "Welcome"; // ReferenceError: greeting is not defined

function showMessage() {
    const greeting = "Welcome"; // Local binding, scoped to this function.
    console.log(greeting);
}
showMessage();

// Debug tip: add greeting to Watch and inspect the Call Stack while paused inside showMessage.
