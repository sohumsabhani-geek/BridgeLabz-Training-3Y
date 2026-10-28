// Q6 - Person -> Faculty -> Professor prototype chain
"use strict";

function Person(name) {
    this.name = name;
}
Person.prototype.introduce = function () {
    console.log(`Person: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}
Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;
Faculty.prototype.teach = function () {
    console.log(`Teaching in ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}
Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;
Professor.prototype.research = function () {
    console.log(`Research subject: ${this.subject}`);
};

const professor = new Professor("Dr. Mehta", "Computer Science", "Artificial Intelligence");
professor.introduce();
professor.teach();
professor.research();
console.log("Person:", professor instanceof Person);
console.log("Faculty:", professor instanceof Faculty);
console.log("Professor:", professor instanceof Professor);
