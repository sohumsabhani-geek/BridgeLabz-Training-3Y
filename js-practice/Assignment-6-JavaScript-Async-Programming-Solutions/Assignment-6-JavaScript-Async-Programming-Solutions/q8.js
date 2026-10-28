// Q8 - Order Processing Flow: Async Retry Mechanism
"use strict";

function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("Order submitted");
            } else {
                reject(new Error("Submission failed"));
            }
        }, 500);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            const result = await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return result;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }
    throw new Error("Order could not be processed");
}

processOrder()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
