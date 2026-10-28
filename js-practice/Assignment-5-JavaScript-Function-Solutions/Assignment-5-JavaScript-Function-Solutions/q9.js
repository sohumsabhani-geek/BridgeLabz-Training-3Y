// Q9 - Person -> Student using ES6 classes
"use strict";

class Person {
    constructor(name) {
        this.name = name;
    }

    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Calls the Person constructor and initializes name.
        this.branch = branch;
    }

    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Riya", "Computer Science");
student.printName();
student.printBranch();
console.log("Student inherits Person:", student instanceof Person);

// Same behavior as the constructor/prototype version in q5.js.
