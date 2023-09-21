const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("book-dialog");
const output = document.querySelector("output");
const myLibrary = [];

showButton.addEventListener("click", () => {
  dialog.showModal();
});

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return [title, author, pages, isRead];
  };
}

function addBookToLibrary() {}

let theHobbit = new Book("the hobbit", "me", 23, false);
