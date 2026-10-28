// Q1: Scope Conflict Resolver
// The bonus is global and can be read inside calculateSalary().
let bonus = 5000;

function calculateSalary(isPermanent) {
    // salary is local to this function.
    let salary = 40000;
    let totalSalary = salary;

    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

calculateSalary(true);
calculateSalary(false);

// Changing isPermanent changes the calculation, not the global bonus.
console.log(`Global bonus is still: ₹${bonus}`);
