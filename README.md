# 📚 Book Manager API

A simple full-stack Book Management application built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and a basic **HTML/CSS/JS frontend**. This project allows you to add, view, edit, and delete books through both a RESTful API and a clean user interface.

---

## 🚀 Features

- ✅ **Create, Read, Update, Delete** books  
- 🧾 **Bulk insert support**  
- 🎨 **Simple UI** for managing books  
- 🔧 **RESTful API** with clear structure  
- 🧪 **Comprehensive Testing** (unit, integration, and API)

---

## 📁 Folder Structure

```

book-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── tests/
│   ├── unit/
│   │   └── bookModel.test.js
│   ├── integration/
│   │   └── booksRoutes.test.js
│   └── api/
│       └── booksApi.test.js
├── index.js
├── package.json
├── .gitignore
├── README.md
└── docs/
└── API.md

````

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/medhavisahgal/book-api.git
cd book-api
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MongoDB Connection

In `index.js`, replace the MongoDB URI placeholder with your actual URI.
Make sure your IP is whitelisted in MongoDB Atlas.

```js
mongoose.connect('YOUR_MONGODB_URI', { ... });
```

### 4. Run the Backend Server

```bash
node index.js
```

Server runs at: [http://localhost:3000](http://localhost:3000)

### 5. Open the Frontend

Open `public/index.html` directly in your browser or use the **Live Server** extension in VS Code.

---

## 🧪 Testing

This project includes complete test coverage using **Jest** and **Supertest**.

### ✅ Test Output (Terminal)
![Test Results](./assets/test-results.png)

### 📊 Code Coverage Report
![Coverage Report](./assets/coverage-report.png)

### 🧾 HTML Test Report
![HTML Report](./assets/html-test-report1.png)
### 🧪 Test Types:

* **Unit Tests** (`tests/unit/bookModel.test.js`)
  Test the Book schema/model functionality in isolation.

* **Integration Tests** (`tests/integration/booksRoutes.test.js`)
  Test the Express route handlers and their interaction with the database.

* **API Tests** (`tests/api/booksApi.test.js`)
  End-to-end testing of the RESTful API using HTTP assertions.

### 🧪 Run All Tests:

```bash
npm test
```

---

## 📖 API Documentation

Full API reference with request/response samples is available in [`docs/API.md`](docs/API.md).

---

## 🙋 Author

Created by **Medhavi Sahgal**

