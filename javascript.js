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

}

const theHobbit = new Book("The Hobbit", "JRR Tolkien", "295", "not read yet");