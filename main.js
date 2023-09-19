function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = function () {
    return [title, author, pages, isRead];
  };
}

let theHobbit = new Book("the hobbit", "me", 23, false);

console.log(Object.prototype.hasOwnProperty("valueOf")); // true);
