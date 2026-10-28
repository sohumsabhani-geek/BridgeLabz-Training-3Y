// Q4 - DevOps Delay: Async Timeout Race
"use strict";

function serverResponse(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} failed`));
            } else {
                resolve(`${serverName} responded`);
            }
        }, delay);
    });
}

const serverA = serverResponse("Server A", 2000);
const serverB = serverResponse("Server B", 3000);

// allSettled is used for a complete summary even if one server rejects.
Promise.allSettled([serverA, serverB])
    .then(results => {
        const failures = results.filter(result => result.status === "rejected");
        if (failures.length) {
            failures.forEach(result => console.log(`Server error: ${result.reason.message}`));
        } else {
            console.log("Deployment completed for all servers");
        }
    })
    .catch(error => console.error(`Deployment error: ${error.message}`));

// Promise.race settles with the first server to resolve OR reject.
Promise.race([
    serverResponse("Server A", 2000),
    serverResponse("Server B", 3000)
])
    .then(result => console.log(`Fastest response: ${result}`))
    .catch(error => console.error(`Fastest response failed: ${error.message}`));
