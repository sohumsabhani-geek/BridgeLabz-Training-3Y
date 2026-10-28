// Q2: String Manipulation Report
let productName = " wireless headphones PRO ";

// Remove extra spaces, make lowercase, then capitalize each word.
let cleanedTitle = productName.trim().toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace the product suffix as requested.
cleanedTitle = cleanedTitle.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
