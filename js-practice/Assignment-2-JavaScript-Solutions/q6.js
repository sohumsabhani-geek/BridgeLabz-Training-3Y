// Q6: Event-Based Counter Simulation
let count = 0;

function increment() {
    count++;
    console.log(`Count: ${count}`);
}

function decrement() {
    count--;
    console.log(`Count: ${count}`);
}

function runCounterDemo() {
    // The nested function can access and update the outer count variable.
    function resetAndReport() {
        count = 0;
        console.log(`Counter reset to: ${count}`);
    }

    increment(); // Simulate an increment click
    increment();
    decrement(); // Simulate a decrement click
    resetAndReport();
}

runCounterDemo();
