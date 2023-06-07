import addBookForm from './variables.js';

const saveBooksToLocalStorage = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};
class Book {
  // constructor and properties
  constructor(title, author) {
    // Instance Properties, describes de current state of that object
    // this.*** is about the current object, the object wich es created by a class
    this.id = `book${Math.floor(Math.random() * 100000)}`;
    this.title = title;
    this.author = author;
  }

    // here are the Class's methodes
    static removeBook = (bookId) => {
      const books = JSON.parse(localStorage.getItem('books'));
      const filteredBooks = books.filter((book) => book.id !== bookId);
      saveBooksToLocalStorage(filteredBooks);
    }

    static addBook = (book) => {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      books.push(book);
      saveBooksToLocalStorage(books);
    }
}

const saveFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(addBookForm);
  const title = formData.get('title');
  const author = formData.get('author');
  const newBook = new Book(title, author);
  Book.addBook(newBook);
  addBookForm.reset();
  return newBook;
};

export { Book, saveFormSubmit };