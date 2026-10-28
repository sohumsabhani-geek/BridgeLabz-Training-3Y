// Q10 - Nested Hoisting and Closures
"use strict";

function outer() {
    console.log("outer count before assignment:", count); // undefined: local var is hoisted.
    var count = 5;

    function inner() {
        console.log("inner count before assignment:", count); // undefined: inner var shadows outer.
        var count = 10;
        console.log("inner count after assignment:", count); // 10
    }
    inner();
    console.log("outer count after inner:", count); // 5
}
outer();

// Arrow-function version: arrow functions do not create their own `this`/`arguments`,
// but they still have their own local variables. Here innerCount is distinct from outerCount.
function outerArrowDemo() {
    const outerCount = 5;
    const inner = () => {
        const innerCount = 10;
        console.log("arrow inner count:", innerCount);
        console.log("arrow can access outer count:", outerCount);
    };
    inner();
}
outerArrowDemo();

// Debug tip: inspect the Call Stack: outer -> inner, then step out to outer.
