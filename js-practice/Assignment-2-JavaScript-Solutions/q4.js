// Q4: Array Performance Analyzer
// Generate 8 random whole-number scores from 30 to 100.
const scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedScores = scores.filter(score => score >= 50);

console.log(`Student Score Summary
Scores: ${scores.map(score => score).join(", ")}
Highest score: ${highestScore}
Lowest score: ${lowestScore}
Average score: ${averageScore.toFixed(2)}
Students passed: ${passedScores.length} out of ${scores.length}`);
