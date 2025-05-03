// ==========================================
// 
// Description: This file sets up the SQLite database connection using Sequelize.
//
// File: database.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================



const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize({
  dialect: "sqlite",  
  storage: process.env.DB_PATH || "./database.db", // SQLite stores the data in a file
});

module.exports = sequelize;
