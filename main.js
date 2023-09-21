const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("book-dialog");
const output = document.querySelector("output");
const submitButton = document.getElementById("submit");
const formBook = document.getElementById("form-book");
const myLibrary = [];

showButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", (e) => {
  output.value =
    dialog.returnValue === "default"
      ? "No return value."
      : `ReturnValue: ${dialog.returnValue}.`; // Have to check for "default" rather than empty string
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

// loop through the library and display the books cards
function displayBooks() {}

function addBookToLibrary() {}

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  dialog.close();
});

let theHobbit = new Book("the hobbit", "me", 23, false);
