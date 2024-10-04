"use strict";

const myLibrary = [];

function Books(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let numOfPage = document.getElementById("pages").value;
  let checkBox = document.getElementById("read");
  let isItRead = document.getElementById("isItRead");

  let read = "";
  if (checkBox.checked == true) {
    read = "Yes";
    isItRead.innerHTML = "Unread";
  } else {
    read = "No";
    isItRead.innerHTML = "Read";
  }

  let book = new Books(name, author, numOfPage, read);
  myLibrary.push(book);
  displayBook(name, author, numOfPage, read);
}

const dialog = document.getElementById("dialog");
const form = document.querySelector("form");
const cancel = document.getElementById("cancel");
const addBook = document.getElementById("addBook");
const submit = document.getElementById("submit");
addBook.addEventListener("click", () => {
  dialog.showModal();
});

cancel.addEventListener("click", () => {
  dialog.close();
});

submit.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
  form.reset();
});

function displayBook(name, author, numOfPage, read) {
  const bookCard = document.querySelector(".book-card");
  let clone = bookCard.cloneNode(true);

  clone.classList.add("open");
  let titleBox = clone.querySelector(".book-name");

  let title = document.createElement("p");
  title.innerHTML = name;
  title.classList.add("card-info");
  titleBox.appendChild(title);

  let authorBox = clone.querySelector(".author-name");

  let authorName = document.createElement("p");
  authorName.innerHTML = author;
  authorName.classList.add("card-info");
  authorBox.appendChild(authorName);

  let pagesBox = clone.querySelector(".numOfpages");

  let pages = document.createElement("p");
  pages.innerHTML = numOfPage;
  pages.classList.add("card-info");
  pagesBox.appendChild(pages);

  let readBox = clone.querySelector(".isItRead");

  let isRead = document.createElement("p");
  isRead.innerHTML = read;
  isRead.classList.add("card-info");
  readBox.appendChild(isRead);

  const isItRead = clone.querySelector("#isItRead");
  isItRead.addEventListener("click", () => {
    if (isItRead.innerHTML === "Read") {
      isItRead.innerHTML = "Unread";
      isRead.innerHTML = "Yes";
    } else if (isItRead.innerHTML === "Unread") {
      isItRead.innerHTML = "Read";
      isRead.innerHTML = "No";
    }
  });

  const DeleteBtn = clone.querySelector("#delete");
  DeleteBtn.addEventListener("click", () => {
    deleteBook(clone.dataset.index);
  });

  clone.dataset.index = myLibrary.length - 1;

  const booksContainer = document.querySelector(".books");
  booksContainer.appendChild(clone);
}

function deleteBook(index) {
  myLibrary.splice(index, 1);

  const bookToRemove = document.querySelector(`[data-index="${index}"]`);
  bookToRemove.remove();

  const remainingBooks = document.querySelectorAll(".book-card.open");
  remainingBooks.forEach((book, i) => {
    book.dataset.index = i;
  });
}
