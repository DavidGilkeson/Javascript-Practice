// COnstructor

function Book(title, author, year) {

    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function () {
        return `${book1.title} was written by ${book1.author} in ${book1.year}`;

    }

}


// Instantiate an object

const book1 = new Book('Book One', 'John Doe', '2013');
const book2 = new Book('Book Two', 'Jane Doe', '2020');

console.log(book1.getSummary(), book2);