// Q1 - Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", "                     ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];
    const numberValue = Number(value);
    const booleanValue = Boolean(value);
    const stringValue = String(value);

    console.log(`Item ${i + 1}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String="${stringValue}"`);

    // Blank strings convert to 0 with Number(), so treat whitespace-only input as invalid.
    const isBlank = typeof value === "string" && value.trim() === "";
    if (value === null || value === undefined || isBlank || Number.isNaN(numberValue) ||
        (typeof value === "string" && value.trim() === "100px")) {
        invalidNumbers.push(value);
        console.log("  -> INVALID numeric value");
    } else {
        validNumbers.push(numberValue);
        console.log("  -> VALID numeric value");
    }
}
console.log("\\nValid numeric values:", validNumbers);
console.log("Invalid values:", invalidNumbers);
