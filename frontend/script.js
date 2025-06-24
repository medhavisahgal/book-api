const apiUrl = 'http://localhost:3000/api/books';
const form = document.getElementById('bookForm');
const bookList = document.getElementById('bookList');
const bookDetails = document.getElementById('bookDetails');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const yearInput = document.getElementById('year');
let editingId = null;
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const book = {
    title: titleInput.value,
    author: authorInput.value,
    year: yearInput.value
  };
  if (editingId) {
    await fetch(`${apiUrl}/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
    editingId = null;
  } else {
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book)
    });
  }

  form.reset();
  bookDetails.innerHTML = '';
  loadBooks();
});

async function loadBooks() {
  const res = await fetch(apiUrl);
  const books = await res.json();
  bookList.innerHTML = '';

  books.forEach(book => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span><strong>${book.title}</strong> by ${book.author} (${book.year})</span>
      <span>
        <button class="edit">Edit</button>
        <button class="view">View</button>
        <button class="delete">Delete</button>
      </span>
    `;
    // add listeners to each button
    li.querySelector('.edit').addEventListener('click', () => editBook(book));
    li.querySelector('.view').addEventListener('click', () => viewBook(book));
    li.querySelector('.delete').addEventListener('click', () => deleteBook(book._id));

    bookList.appendChild(li);
  });
}

function editBook(book) {
  titleInput.value = book.title;
  authorInput.value = book.author;
  yearInput.value = book.year;
  editingId = book._id;
}

function viewBook(book) {
  bookDetails.innerHTML = `
    <h3>${book.title}</h3>
    <p><strong>Author:</strong> ${book.author}</p>
    <p><strong>Year:</strong> ${book.year}</p>
  `;
  bookDetails.classList.add('active');
}
async function deleteBook(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  loadBooks();
}

loadBooks();
