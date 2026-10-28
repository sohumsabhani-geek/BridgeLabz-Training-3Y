// Q10: Departmental Employee Evaluator
const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let i = 0; i < departments.length; i++) {
    const departmentName = departments[i][0];
    const score = departments[i][1];
    let evaluation;

    if (score >= 90) {
        evaluation = "Excellent";
    } else if (score >= 75) {
        evaluation = "Good";
    } else if (score >= 60) {
        evaluation = "Average";
    } else {
        evaluation = "Needs Improvement";
    }

    console.log(`${departmentName}: ${score} - ${evaluation}`);
}
