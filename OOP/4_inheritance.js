// Constructor

function Book(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;


};



// getSummary

Book.prototype.getSummary = function () {
    return `${book1.title} was written by ${book1.author} in ${book1.year}`;
}

// Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(ths, title, author, year);

    this.month = month;

}

// Instantiate Magazine Object

const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);