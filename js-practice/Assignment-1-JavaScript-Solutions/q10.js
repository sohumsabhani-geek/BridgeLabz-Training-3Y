// Q10: Citizen Eligibility Validator
// Change these sample values to test different cases.
const age = 19;
const isCitizen = true;

if (isCitizen) {
    if (age >= 21) {
        console.log("Eligible for all services.");
    } else if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}

// Note: The assignment wording overlaps for citizens aged 18–20:
// it says both "all services" for age >= 18 and "vote only" for 18–20.
// This code uses 21 as the all-services age so both outcomes can be tested.
