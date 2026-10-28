// Q9 - JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];
const cleanData = [];

for (let index = 0; index < rawData.length; index++) {
    try {
        const parsed = JSON.parse(rawData[index]);
        if (!Object.prototype.hasOwnProperty.call(parsed, "user") ||
            !Object.prototype.hasOwnProperty.call(parsed, "age")) {
            throw new Error("Missing required key: user or age");
        }

        const age = Number(parsed.age);
        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number");
        }
        if (age >= 18) {
            cleanData.push({ user: String(parsed.user), age });
        } else {
            console.log(`Line ${index + 1}: filtered out (under 18)`);
        }
    } catch (error) {
        console.log(`Line ${index + 1} error: ${error.message}`);
    }
}
console.log("Clean data (age 18+):", cleanData);
// Debug tip: pause in catch and inspect index, rawData[index], and error to follow error flow.
