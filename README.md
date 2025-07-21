# 📚 Library Management System (Express + TypeScript + MongoDB)

A full-featured REST API for managing books and borrow records in a library, built using **Express**, **TypeScript**, and **Mongoose**.

LIVE LINK :  https://library-management-system-delta-swart.vercel.app/

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




## 🛠️ Local Setup Guide

### 1. Clone the repo

git clone https://github.com/7saffix/Mongoose-A-3.git
cd Mongoose-A-3

### 2. Install dependencies
npm install

### 3. Configure environment variables  


Create a .env file in the root folder and add:


PORT=5000

MONGO_URI=your_mongodb_connection_string  

Replace your_mongodb_connection_string with your actual MongoDB URI (e.g., MongoDB Atlas).

### 4. Start the server
npm run dev



