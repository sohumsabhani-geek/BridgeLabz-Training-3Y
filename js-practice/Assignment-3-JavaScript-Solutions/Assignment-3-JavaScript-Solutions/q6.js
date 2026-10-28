// Q6 - Pyramid Pattern Generator
"use strict";

const rawLimit = process.argv[2];
const parsedLimit = rawLimit === undefined ? 5 : Number(rawLimit);
const limit = Number.isInteger(parsedLimit) && parsedLimit > 0 ? parsedLimit : 5;

console.log(`Pyramid height: ${limit}`);
for (let row = 1; row <= limit; row++) {
    let line = "";
    for (let column = 1; column <= row; column++) {
        line += "* ";
    }
    console.log(line.trimEnd());
}

// With var, the loop variable is function-scoped rather than block-scoped.
// This example prints the final value after the loop.
for (var oldRow = 1; oldRow <= 3; oldRow++) {
    console.log(`var loop row: ${oldRow}`);
}
console.log(`After var loop, oldRow = ${oldRow}`);
// Debug tip: step through both loops and watch row/column (let) and oldRow (var).
// Strict mode catches undeclared variables, e.g. "for (i = 0; i < 3; i++)".
