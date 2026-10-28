// Q5 - Hoisting Lab: The Sequence Trap
"use strict";

// Original order:
// console.log(score); // undefined: var declaration is hoisted, initialization is not.
// announce();         // Works: function declaration is hoisted.
// var score = 50;
// let status = "ready";
// startGame();        // In the original code, status is still in its TDZ when called here.
// function startGame() { console.log(status); }

// Fixed version: initialize bindings before calling functions that use them.
const score = 50;
const status = "ready";

function announce() {
    console.log("Game started");
}
function startGame() {
    console.log(status);
}
console.log(score);
announce();
startGame();

// Arrow functions are expressions, not hoisted like function declarations.
// They must be initialized before they are called.
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = () => console.log(status);
announceArrow();
startGameArrow();
