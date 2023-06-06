import createBookElement from './bookView.js';

const renderBookList = (books) => {
  books.forEach((book) => {
    createBookElement(book);
  });
};

const loadBooksFromLocalStorage = () => {
  const dataSaved = localStorage.getItem('books');
  if (dataSaved) {
    const books = JSON.parse(dataSaved);
    renderBookList(books);
  }
};

const addClass = (elt, className) => {
  if (!elt.classList.contains(className)) {
    elt.classList.add(className);
  }
};

export { loadBooksFromLocalStorage, addClass };