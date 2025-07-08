# 📚 Library Management System (Express + TypeScript + MongoDB)

A full-featured REST API for managing books and borrow records in a library, built using **Express**, **TypeScript**, and **Mongoose**.

## 🔧 Technologies Used

- **Node.js** + **Express.js**
- **TypeScript**
- **MongoDB** (via **Mongoose**)
- ** Mongoose Validation** (for schema validation)



## ✅ Features

- 🔐 Schema-level validations for all models
- 📖 Full CRUD operations for books
- 📦 Borrowing books with business rules enforced
- 📊 Aggregation pipeline for borrow summaries
- 🧠 Custom instance methods
- 🔄 Middleware (pre hooks)
- 🔍 Filtering, sorting, and limiting support



## 📂 API Endpoints

### POST `/api/books` – Create Book  
### GET `/api/books` – Get All (with filter/sort)  
### GET `/api/books/:id` – Get by ID  
### PUT `/api/books/:id` – Update  
### DELETE `/api/books/:id` – Delete  

### POST `/api/borrow` – Borrow Book  
- Validates availability  
- Updates `copies` and `available`  
- Uses instance/static methods  

### GET `/api/borrow` – Borrow Summary  
- Uses aggregation to return total quantity borrowed per book


