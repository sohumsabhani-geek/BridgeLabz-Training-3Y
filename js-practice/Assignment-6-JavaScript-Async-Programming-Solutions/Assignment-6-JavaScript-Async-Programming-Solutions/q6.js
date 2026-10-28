// Q6 - E-Commerce Dashboard: Product Card Fetcher (Node.js 18+ or browser)
"use strict";

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const products = await response.json();
        for (const product of products) {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("-----------------------------");
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.");
        console.error(`Details: ${error.message}`);
    }
}

fetchProducts();

// Optional browser bonus: create cards in HTML using document.createElement().
// This Node.js-compatible file focuses on the required console output.
