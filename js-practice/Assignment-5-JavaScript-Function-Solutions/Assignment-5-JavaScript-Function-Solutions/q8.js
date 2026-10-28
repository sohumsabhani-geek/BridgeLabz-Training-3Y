// Q8 - Custom Array.prototype.myMap()
"use strict";

// Add a map-like method. The callback receives value, index, and original array.
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback, thisArg) {
        if (typeof callback !== "function") {
            throw new TypeError("myMap callback must be a function");
        }

        const result = [];
        for (let index = 0; index < this.length; index++) {
            // Match built-in map behavior by skipping empty array slots.
            if (Object.prototype.hasOwnProperty.call(this, index)) {
                result[index] = callback.call(thisArg, this[index], index, this);
            }
        }
        return result;
    };
}

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([10, 20, 30].myMap((number, index) => number + index)); // [10, 21, 32]
