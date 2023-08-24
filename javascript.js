const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const bookPages = document.getElementById('bookPages');
const bookRead = document.getElementById('bookRead');
const bookButton = document.getElementById('bookButton');
const bookForm = document.getElementById('bookForm');
const myLibrary = [];
const main = document.getElementById('main');

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

function displayBooks(book) {
    let bookCard = document.createElement("div");
    bookCard.classList.add('bookCard');
    
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add('cardTitle');
    bookCard.appendChild(cardTitle);
    cardTitle.textContent = `Title: ${book.title}`;

    let cardAuthor = document.createElement("p");
    cardAuthor.classList.add('cardAuthor');
    bookCard.appendChild(cardAuthor);
    cardAuthor.textContent = `Author: ${book.author}`;

    let cardPages = document.createElement("p");
    cardPages.classList.add('cardPages');
    bookCard.appendChild(cardPages);
    cardPages.textContent = `Pages: ${book.pages}`;

    let cardReadDiv = document.createElement("div");
    cardReadDiv.classList.add('cardReadDiv');
    bookCard.appendChild(cardReadDiv);

    let cardReadLabel = document.createElement("label");
    cardReadLabel.classList.add('cardReadLabel');
    cardReadDiv.appendChild(cardReadLabel);
    cardReadLabel.textContent = "Check if read:    "

    let cardRead = document.createElement("input");
    cardRead.classList.add('cardRead');
    cardRead.type = "checkbox";
    cardRead.checked = book.read;
    cardReadDiv.appendChild(cardRead);
    cardRead.textContent = "Check if read: "

    main.appendChild(bookCard);
}

bookButton.addEventListener('click', addBookToLibrary);

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", true);
const testBook = new Book("Test Book", "Test Author", "199", false);
const testBook2 = new Book("Test Book 2", "Test Author 2", "2", true);
myLibrary.push(theHobbit, testBook, testBook2);

myLibrary.forEach((book) => {
    displayBooks(book);
});