// Q10 - Async Delivery Pipeline
"use strict";

function runDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.floor(Math.random() * 1000);
        setTimeout(() => {
            if (Math.random() < 0.15) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");
    try {
        await runDeliveryStep("takeOrder", "Step 1: Order taken");
        await runDeliveryStep("prepare", "Step 2: Food prepared");
        await runDeliveryStep("pack", "Step 3: Package ready");
        await runDeliveryStep("dispatch", "Step 4: Out for delivery");
        await runDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        console.error("Pipeline failed!");
        console.error(`Details: ${error.message}`);
    }
}

// Each await pauses this async function until its Promise settles; other event-loop
// work can continue while the timer is pending. A rejection jumps to catch.
runPipeline();
