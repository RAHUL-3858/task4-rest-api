# Task 4 - Basic REST API using Node.js and Express

## 📌 Project Overview

This project is a simple REST API built using Node.js and Express.js.

The API performs CRUD (Create, Read, Update, Delete) operations on a User entity.

Each user contains:

- ID
- Name
- Email
- Age

The API was tested using a web browser and REST API testing tools.

---

## 🚀 Technologies Used

- Node.js
- Express.js
- JavaScript
- JSON

---

## 📂 Project Structure

task4-rest-api/
│
├── server.js
├── routes/
│ └── userRoutes.js
│
├── data/
│ └── users.js
│
├── package.json
│
└── README.md

---

## ⚙️ Installation

### 1. Clone Repository

```bash
git clone <repository-url>
```

### 2. Open Project Folder

```bash
cd task4-rest-api
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Server

```bash
node server.js
```

Server runs on:

```bash
http://localhost:5000
```

---

## 📡 API Endpoints

### Get All Users

**GET**

```http
/api/users
```

Example:

```http
http://localhost:5000/api/users
```

Response:

```json
[
  {
    "id": 1,
    "name": "Rahul",
    "email": "rahul@example.com",
    "age": 21
  }
]
```

---

### Get User By ID

**GET**

```http
/api/users/:id
```

Example:

```http
http://localhost:5000/api/users/1
```

---

### Create New User

**POST**

```http
/api/users
```

Request Body:

```json
{
  "name": "John",
  "email": "john@example.com",
  "age": 25
}
```

---

### Update User

**PUT**

```http
/api/users/1
```

Request Body:

```json
{
  "name": "John Updated",
  "email": "john@example.com",
  "age": 26
}
```

---

### Delete User

**DELETE**

```http
/api/users/1
```

Response:

```json
{
  "message": "User deleted successfully"
}
```

---

## 🧪 Testing

The API can be tested using:

- Postman
- Thunder Client (VS Code)
- Browser (GET Requests)

---

## 📚 Learning Outcomes

Through this project, I learned:

- Node.js Fundamentals
- Express.js Framework
- REST API Design
- CRUD Operations
- JSON Data Handling
- API Testing

---

## 👨‍💻 Author

Konchada Rahul

Full Stack Development Intern

SaiKet Systems
