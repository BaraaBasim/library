const showModal = document.getElementById("showModal");
const modal = document.getElementById("modal");
const submitButton = document.getElementById("submit");
const formBook = document.getElementById("form-book");
const overlay = document.getElementById("overlay");
const myLibrary = [];

const addBookModal = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};

// dialog.addEventListener("close", (e) => {});

class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

// loop through the library and display the books cards
function displayBooks() {
  for (let book of myLibrary) {
    console.log(book);
  }
}

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
