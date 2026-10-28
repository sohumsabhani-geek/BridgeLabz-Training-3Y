// Q9: Random Math Quiz Generator
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (operator) {
    case "+":
        answer = firstNumber + secondNumber;
        break;
    case "-":
        answer = firstNumber - secondNumber;
        break;
    case "*":
        answer = firstNumber * secondNumber;
        break;
    case "/":
        answer = firstNumber / secondNumber;
        break;
}

if (operator === "/") {
    answer = answer.toFixed(2);
}

console.log(`Question: ${firstNumber} ${operator} ${secondNumber} = ?`);
console.log("Correct answer:", answer);
