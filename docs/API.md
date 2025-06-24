# 📚 Book Manager API Documentation

This is the documentation for the custom Book Manager API that allows clients to perform CRUD operations (Create, Read, Update, Delete) on books stored in a MongoDB database.

## 🔗 Base URL
`http://localhost:3000/api/books`

---

## 📖 Endpoints

### 1. 🔍 Get All Books
- **Method**: `GET`
- **Endpoint**: `/api/books`
- **Description**: Fetch all books from the database.

#### ✅ Sample Response:
```json
[
  {
    "_id": "60df3b8a2f8fb814c8d5a123",
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "year": 1937
  }
]
````

### 2. ➕ Add a New Book

* **Method**: `POST`
* **Endpoint**: `/api/books`
* **Description**: Add a new book to the database.

#### Request Body:

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

#### ✅ Sample Response:

```json
{
  "_id": "60df3d3a2f8fb814c8d5a456",
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "year": 1988
}
```

---

### 3. 🛠️ Update a Book

* **Method**: `PUT`
* **Endpoint**: `/api/books/:id`
* **Description**: Update the information of an existing book.
* **Request Params**: `id` – The ID of the book to update.

#### Request Body:

```json
{
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho",
  "year": 1989
}
```

#### ✅ Sample Response:

```json
{
  "_id": "60df3d3a2f8fb814c8d5a456",
  "title": "The Alchemist (Updated)",
  "author": "Paulo Coelho",
  "year": 1989
}
```

---

### 4. 🗑️ Delete a Book

* **Method**: `DELETE`
* **Endpoint**: `/api/books/:id`
* **Description**: Delete a book by ID.
* **Request Params**: `id` – The ID of the book to delete.

#### ✅ Sample Response:

```json
{
  "message": "Book deleted successfully"
}
```

---

### 5. 📥 Bulk Insert Books

* **Method**: `POST`
* **Endpoint**: `/api/books/bulk`
* **Description**: Add multiple books at once.

#### Request Body:

```json
[
  {
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "year": 1932
  }
]
```

#### ✅ Sample Response:

```json
[
  {
    "_id": "60df3f1a2f8fb814c8d5a789",
    "title": "1984",
    "author": "George Orwell",
    "year": 1949
  },
  {
    "_id": "60df3f1a2f8fb814c8d5a790",
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "year": 1932
  }
]
```

---

## ⚠️ Error Responses

* `400 Bad Request`: Invalid input
* `404 Not Found`: Book not found
* `500 Internal Server Error`: Server/database error

---

## 🛠️ Tech Stack

* **Backend**: Node.js + Express
* **Database**: MongoDB Atlas
* **ODM**: Mongoose

---

## 🧪 Testing

This project includes robust testing using:

* ✅ **Unit Testing** – for individual components and services
* ✅ **Integration Testing** – verifying how modules work together
* ✅ **API Testing** – end-to-end testing of all API endpoints

### 🔧 Tools Used:

* **[Jest](https://jestjs.io/)** – JavaScript Testing Framework
* **[Supertest](https://github.com/visionmedia/supertest)** – HTTP assertions for API endpoints

To run the test suite:

```bash
npm test
```

---

## 🙋 Author

Created by **Medhavi Sahgal**
