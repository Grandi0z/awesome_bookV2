import { Book } from './book.js';

const bookList = document.querySelector('.books_list');

// A table that will contain all books
const tableOfBooks = document.createElement('table');

const createBookElement = (book) => {
  // Create a tableRow as books list
  const tableRow = document.createElement('tr');
  const bookDetailsContainer = document.createElement('td');
  const removeBtnContainer = document.createElement('td');
  bookDetailsContainer.classList.add('book_details');
  removeBtnContainer.classList.add('remove_btn_container');
  // Create book's elements
  const removeBtn = document.createElement('button');
  removeBtn.appendChild(document.createTextNode('remove'));
  const removeBtnId = book.id.replace('book', 'removeBtn');
  removeBtn.setAttribute('id', removeBtnId);
  const bookDetails = document.createTextNode(`"${book.title}" by ${book.author}`);
  // append elment on their parents
  bookDetailsContainer.appendChild(bookDetails);
  removeBtnContainer.appendChild(removeBtn);
  tableRow.appendChild(bookDetailsContainer);
  tableRow.appendChild(removeBtnContainer);

  removeBtn.addEventListener('click', () => {
    Book.removeBook(book.id);
    tableRow.remove();
  });
  tableOfBooks.appendChild(tableRow);
  bookList.appendChild(tableOfBooks);
};

export default createBookElement;