import { loadBooksFromLocalStorage, addClass } from './modules/functions.js';
import { saveFormSubmit } from './modules/book.js';
import addBookForm from './modules/variables.js';
import createBookElement from './modules/bookView.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';

// event listener to the form
addBookForm.addEventListener('submit', (e) => {
  const newBook = saveFormSubmit(e);
  createBookElement(newBook);
});

// DATE
const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.querySelector('.todayDate').innerText = now;

//! Navigate Between pages

const navMenu = document.querySelector('.navMenu');
const sectionBookList = document.querySelector('.books_list');
const sectionAddBook = document.querySelector('.book_addForm');
const sectionContactUs = document.querySelector('.book_contactUs');

navMenu.addEventListener('click', (e) => {
  const targetElementId = e.target.parentElement.id;

  switch (targetElementId) {
    case 'menu_list':
      sectionBookList.classList.remove('hidden');
      addClass(sectionAddBook, 'hidden');
      addClass(sectionContactUs, 'hidden');
      break;
    case 'menu_add_book':
      addClass(sectionBookList, 'hidden');
      sectionAddBook.classList.remove('hidden');
      addClass(sectionContactUs, 'hidden');
      break;
    case 'menu_contact':
      addClass(sectionBookList, 'hidden');
      addClass(sectionAddBook, 'hidden');
      sectionContactUs.classList.remove('hidden');
      break;
    default:
  }
});

window.onload = () => {
  loadBooksFromLocalStorage();
};