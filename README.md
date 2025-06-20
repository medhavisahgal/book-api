# 📚 Book Manager API

A simple full-stack Book Management application built with **Node.js**, **Express**, **MongoDB (Mongoose)**, and a basic **HTML/CSS/JS frontend**. This project allows you to add, view, edit, and delete books through both a RESTful API and a clean user interface.

---

## 🚀 Features

- ✅ **Create, Read, Update, Delete** books  
- 🧾 **Bulk insert support**  
- 🎨 **Simple UI** for managing books  
- 🔧 **RESTful API** with clear structure  

---

## 📁 Folder Structure

```
book-api/
├── models/
│   └── Book.js
├── routes/
│   └── books.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── index.js
├── package.json
├── .gitignore
├── README.md
└── docs/
    └── API.md
```

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/book-api.git
cd book-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure MongoDB Connection

In `index.js`, replace: with your actual MongoDB URI. 
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

## 📖 API Documentation

Complete API documentation is available in: `docs/API.md`
