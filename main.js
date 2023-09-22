const showButton = document.getElementById("showDialog");
const dialog = document.getElementById("book-dialog");
const submitButton = document.getElementById("submit");
const formBook = document.getElementById("form-book");
const myLibrary = [];

showButton.addEventListener("click", () => {
  dialog.showModal();
});

dialog.addEventListener("close", (e) => {});

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
function displayBooks() {
  for (let book of myLibrary) {
    console.log(book);
  }
}

// function removeBook(book) {
//   myLibrary.filter((item) => {
//     item.title !== book.title;
//   });
// }

function addBookToLibrary() {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("is-read").value;
  let book = new Book(title, author, pages, isRead);
  myLibrary.push(book);
}

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  addBookToLibrary();
  dialog.close();
  displayBooks();
});

let theHobbit = new Book("the hobbit", "me", 23, false);
myLibrary.push(theHobbit);
