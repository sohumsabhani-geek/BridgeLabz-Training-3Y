// Q8: Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8;
let salary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    salary += salary * annualIncrementRate / 100;
    salary = Math.round(salary);

    salaryReport.push({
        Year: year,
        Salary: salary
    });
}

console.table(salaryReport);
