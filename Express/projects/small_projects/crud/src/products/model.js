// ==========================================
// 
// Description: This file defines the Producto model for the Sequelize ORM.
//
// File: model.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================



const { DataTypes } = require("sequelize");
const sequelize = require("./database");

// Product model definition
const Product = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Product;
