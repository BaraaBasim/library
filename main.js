const showModal = document.getElementById("showModal");
const modal = document.getElementById("modal");
const submitButton = document.getElementById("submit");
const formBook = document.getElementById("form-book");
const overlay = document.getElementById("overlay");
const myLibrary = [];

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

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook);
    }
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  getBook(title) {
    return this.books.find((book) => book.title === title);
  }

  isInLibrary(newBook) {
    return this.books.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

const createBookCard = (book) => {
  const bookCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const buttonGroup = document.createElement("div");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  bookCard.classList.add("book-card");
  buttonGroup.classList.add("button-group");
  readBtn.classList.add("btn");
  removeBtn.classList.add("btn");
  readBtn.onclick = toggleRead;
  removeBtn.onclick = removeBook;

  title.textContent = `"${book.title}"`;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  removeBtn.textContent = "Remove";

  if (book.isRead) {
    readBtn.textContent = "Read";
    readBtn.classList.add("btn-light-green");
  } else {
    readBtn.textContent = "Not read";
    readBtn.classList.add("btn-light-red");
  }

  bookCard.appendChild(title);
  bookCard.appendChild(author);
  bookCard.appendChild(pages);
  buttonGroup.appendChild(readBtn);
  buttonGroup.appendChild(removeBtn);
  bookCard.appendChild(buttonGroup);
  booksGrid.appendChild(bookCard);
};

const openAddBookModal = () => {
  modal.classList.add("active");
  overlay.classList.add("active");
};

const closeAddBookModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

const resetBooksGrid = () => {
  booksGrid.innerHTML = "";
};

const updateBooksGrid = () => {
  resetBooksGrid();
  for (let book of library.books) {
    createBookCard(book);
  }
};

const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();

  library.addBook(newBook);
  // saveLocal()
  updateBooksGrid();

  closeAddBookModal();
};

const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  return new Book(title, author, pages, isRead);
};

showModal.addEventListener("click", () => {
  openAddBookModal();
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  closeAddBookModal();
});

let theHobbit = new Book("the hobbit", "me", 23, false);
myLibrary.push(theHobbit);
