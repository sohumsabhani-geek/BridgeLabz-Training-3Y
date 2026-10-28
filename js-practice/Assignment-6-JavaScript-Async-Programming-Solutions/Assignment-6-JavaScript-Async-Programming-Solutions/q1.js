// Q1 - Async Coffee Maker
"use strict";

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function step(name) {
    return wait(1000 + Math.floor(Math.random() * 1000)).then(() => {
        // Simulate a random failure so the .catch() path can be observed.
        if (Math.random() < 0.15) throw new Error(`${name} failed`);
        console.log(`${name} complete`);
    });
}

step("Boiling water")
    .then(() => step("Brewing coffee"))
    .then(() => step("Pouring coffee into a cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch(error => console.log(`Coffee process failed: ${error.message}`));
