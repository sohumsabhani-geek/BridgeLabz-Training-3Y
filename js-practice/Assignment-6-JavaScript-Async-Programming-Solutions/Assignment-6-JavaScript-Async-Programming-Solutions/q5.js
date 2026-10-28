// Q5 - Frontend Rush: Callback Hell vs async/await
"use strict";

function runStage(name, callback) {
    setTimeout(() => {
        console.log(name);
        callback();
    }, 1000);
}

function runWithNestedCallbacks() {
    console.log("Nested callback pipeline:");
    runStage("design", () => {
        runStage("build", () => {
            runStage("test", () => {
                runStage("deploy", () => {
                    runStage("celebrate", () => console.log("Callback pipeline complete"));
                });
            });
        });
    });
}

function waitForStage(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name);
            resolve();
        }, 1000);
    });
}

async function runWithAsyncAwait() {
    console.log("Async/await pipeline:");
    await waitForStage("design");
    await waitForStage("build");
    await waitForStage("test");
    await waitForStage("deploy");
    await waitForStage("celebrate");
    console.log("Async/await pipeline complete");
}

// Run sequentially to make the two approaches easy to compare.
runWithNestedCallbacks();
setTimeout(() => {
    runWithAsyncAwait();
}, 5500);

// async/await keeps sequential asynchronous logic readable without deeply nested
// callback indentation. Await pauses this async function, not the whole event loop.
