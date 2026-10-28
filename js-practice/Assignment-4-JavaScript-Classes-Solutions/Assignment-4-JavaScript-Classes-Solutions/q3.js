// Q3 - Library Management System
"use strict";

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return false;
        }
        this.isIssued = true;
        console.log(`Issued "${this.title}".`);
        return true;
    }

    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" was not issued.`);
            return false;
        }
        this.isIssued = false;
        console.log(`Returned "${this.title}".`);
        return true;
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001"),
    new Book("Anxious People", "Fredrik Backman", "ISBN002"),
    new Book("Silent Patient", "Alex Michaelides", "ISBN003", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => console.log(`${book.title} by ${book.author}`));

function issueByISBN(isbn) {
    const book = books.find(item => item.ISBN === isbn);
    if (!book) {
        console.log(`No book found for ISBN ${isbn}.`);
        return;
    }
    book.issueBook();
}
issueByISBN("ISBN002");
