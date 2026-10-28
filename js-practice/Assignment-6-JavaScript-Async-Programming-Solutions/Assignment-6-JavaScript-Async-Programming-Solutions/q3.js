// Q3 - Bug Tracker: Callback to Promise Migration
"use strict";

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3; // Randomly simulate API failure.
            if (apiFailed) {
                reject(new Error("Bug tracker API request failed"));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bugs returned by API:");
        console.table(bugs.map((description, index) => ({ number: index + 1, description })));
    })
    .catch(error => {
        console.error(`Could not fetch bugs: ${error.message}`);
    });
