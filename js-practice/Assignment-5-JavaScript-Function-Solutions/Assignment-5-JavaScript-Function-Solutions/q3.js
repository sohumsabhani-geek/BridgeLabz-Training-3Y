// Q3 - Arrow function versus normal method and `this`
"use strict";

const user = {
    name: "Amit",
    // Arrow functions do not get their own `this`; they inherit it lexically.
    showName: () => console.log("Arrow function this.name:", this.name)
};

user.showName(); // In a Node.js CommonJS file, this.name is usually undefined.

// A normal method receives `this` from the object before the dot.
user.showName = function () {
    console.log("Normal function this.name:", this.name);
};
user.showName();
