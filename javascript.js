const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');
const bookRead = document.getElementById('bookRead');
const bookButton = document.getElementById('bookButton');
const bookForm = document.getElementById('bookForm');
const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addBookToLibrary() {
    let newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.checked);
    myLibrary.push(newBook);
    bookForm.reset();
}

bookButton.addEventListener('click', addBookToLibrary);

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "not read yet");