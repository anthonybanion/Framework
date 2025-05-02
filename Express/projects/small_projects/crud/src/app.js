// ==========================================
// 
// Description: This file is the entry point for the Express server.
//
// File: app.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================



const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const productsRoutes = require('./products/routes');

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());  // To be able to receive JSON in requests

// Routes
app.use('/api/products', productsRoutes);

module.exports = app;

