// Q6 - Employee Management System
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) throw new RangeError("Bonus percent cannot be negative.");
        this.salary += this.salary * percent / 100;
    }
}

const employees = [
    new Employee(1, "Aarav", "IT", 45000),
    new Employee(2, "Diya", "HR", 38000),
    new Employee(3, "Kabir", "Finance", 52000),
    new Employee(4, "Mira", "IT", 48000),
    new Employee(5, "Rohan", "Operations", 41000)
];

employees[0].applyBonus(10);
employees.forEach(employee => {
    console.log(`${employee.name} (${employee.department}) - Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`);
});
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual payout: ₹${totalAnnualPayout.toFixed(2)}`);
