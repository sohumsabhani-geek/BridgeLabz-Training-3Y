// Q9: Odd–Even Number Analyzer
const results = [];

for (let number = 1; number <= 30; number++) {
    let label;

    if (number % 3 === 0 && number % 5 === 0) {
        label = "FizzBuzz";
    } else if (number % 2 === 0) {
        label = "Even";
    } else {
        label = "Odd";
    }

    results.push({ number: number, result: label });
}

console.table(results);
