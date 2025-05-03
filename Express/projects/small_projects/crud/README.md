# 🛠️ Product CRUD with Express, Sequelize & SQLite

This project implements a **basic RESTful API** using **Node.js**, **Express**, and **Sequelize** with **SQLite** as the local database. The initial goal is to build a full **product CRUD** from the **admin's perspective**, with future plans to scale into a full-featured **e-commerce platform**.

---

## 🚀 Project Goals

- Implement full CRUD operations for products (Create, Read, Update, Delete).
- Use Sequelize as the ORM and SQLite as the local development database.
- Manage configuration through environment variables.
- Follow a clean, scalable folder structure.
- Prepare the backend for future MySQL integration and frontend connectivity.

---

## 📁 Project Structure

```plaintext
crud/
├── config/              # Database and Sequelize configuration
│   └── db.js
├── controllers/         # Business logic for routes
│   └── controller.js
├── models/              # Sequelize models
│   └── model.js
├── routes/              # Express route definitions
│   └── routes.js
├── middlewares/         # Custom middlewares (logging, error handling)
│   └── logger.js
├── .env                 # Environment variables
├── .gitignore           # Files and folders to ignore in Git
├── index.js             # Main entry point of the app
├── package.json         # Project metadata and dependencies
└── README.md            # Project documentation

```

## 📦 Main Dependencies

|Package	|Purpose|
|---|---|
|express	|Web framework for building the REST API|
|sequelize	|ORM for database operations|
|sqlite3	|Local relational database engine|
|dotenv	|Manage environment variables|
|cors	|Allow cross-origin requests|
|morgan	|HTTP request logging during development|
|nodemon	|Auto-restart server in development mode|


## 📌 Expected Endpoints (v1)

|Method	|Route	|Description|
|---|---|---|
|GET	|/api/products	|Retrieve all products|
|GET	|/api/products/:id	|Retrieve product by ID|
|POST	|/api/products	|Create a new product|
|PUT	|/api/products/:id	|Update an existing product|
|DELETE	|/api/products/:id	|Delete a product|


## 🧩 Scalability Path

- Switch from SQLite to MySQL with minimal changes via Sequelize.
- Future frontend integration (React, Vue, etc.).
- Add user management, authentication, and admin dashboard.

## 🧑‍💻 Author

Developed by Anthony Banion as part of learning and backend practice to scale toward professional web applications.

📎 LinkedIn
📎 Dev.to

## 📜 License
This project is licensed under the MIT License. Free to use, modify, and distribute.

📝 License