const myLibrary = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    pages: 180,
    isAvailable: true,
    rating: 4.4,
    id: 1
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    pages: 281,
    isAvailable: false,
    rating: 4.8,
    id: 2
  },
  {
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    pages: 328,
    isAvailable: true,
    rating: 4.6,
    id: 3
  },
];

const bookForm = document.getElementById('bookform');
const libContainer = document.querySelector('section');
const overlay = document.querySelector('.overlay');
const open_form = document.getElementById('open_form');
const close_form = document.getElementById('close_form');
id = 3;
let isClose = true;

function Book(title, author, genre, pages, rating) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.pages = pages;
  this.isAvailable = true;
  this.rating = rating;
  this.id = id;
}

function addBookToLibrary(book) {
  // do stuff here
  myLibrary.push(book);
  id++; // Increment id
  displayBooks();
}

function displayBooks() {
  libContainer.innerHTML = '';
  // Iterate through book array
  myLibrary.forEach((book, index) => {
    const newArticle = document.createElement('article');
    newArticle.classList.add('article')

    const title = document.createElement('h3');
    title.textContent = `Title: ${book.title}`;

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const genre = document.createElement('p');
    genre.textContent = `Genre: ${book.genre}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    const isAvailable = document.createElement('button');
    isAvailable.textContent = `${book.isAvailable ? 'Available' : 'Unavailable'}`;

    isAvailable.addEventListener('click', () => {
      myLibrary.forEach(item => {
        if (myLibrary[index] == item) {
          item.isAvailable = !item.isAvailable;
          displayBooks();
        }
      })
    })

    const rating = document.createElement('p');
    rating.textContent = `Rating: ${book.rating}`;

    newArticle.appendChild(title);
    newArticle.appendChild(author);
    newArticle.appendChild(genre);
    newArticle.appendChild(pages);
    newArticle.appendChild(isAvailable);
    newArticle.appendChild(rating);

    libContainer.appendChild(newArticle);
  })
}

bookForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const genre = document.getElementById('genre').value;
  const pages = document.getElementById('pages').value;
  const rating = document.getElementById('rating').value;

  const book = new Book(title, author, genre, pages, rating);
  addBookToLibrary(book);
})

open_form.addEventListener('click', () => {
  overlay.style.display = 'flex';
  isClose = true;
})

close_form.addEventListener('click', () => {
  overlay.style.display = 'none';
  isClose = false;
})


displayBooks();