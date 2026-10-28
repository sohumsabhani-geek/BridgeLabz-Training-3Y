// Q2: Multi-Type Data Summary
const userName = "Sohum";
const age = 20;
const isStudent = true;
const subjects = ["JavaScript", "HTML", "CSS"];
const user = { city: "Mathura", course: "B.Tech" };
const middleName = null;
let phoneNumber;

const report = [
    { label: "User Name", value: userName, type: typeof userName },
    { label: "Age", value: age, type: typeof age },
    { label: "Student", value: isStudent, type: typeof isStudent },
    { label: "Subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "User Object", value: JSON.stringify(user), type: typeof user },
    { label: "Middle Name", value: middleName, type: middleName === null ? "null" : typeof middleName },
    { label: "Phone Number", value: phoneNumber, type: typeof phoneNumber }
];

console.table(report);
