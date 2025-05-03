// ==========================================
// 
// Description: This file contains the routes for managing products in an Express application.
//
// File: routesForProduct.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================




const express = require("express");
const router = express.Router();
const Producto = require("./model");

// Create a product
router.post("/", async (req, res) => {
  try {
    const { nombre, image, descripcion, precio, stock } = req.body;
    const producto = await Producto.create({
      nombre,
      image,
      descripcion,
      precio,
      stock,
    });
    res.status(201).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a product by ID
router.get("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a product
router.put("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Product not found" });
    }

    const { nombre, image, descripcion, precio, stock } = req.body;
    await producto.update({ 
        nombre, 
        image, 
        descripcion, 
        precio, 
        stock 
    });
    res.status(200).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a product
router.delete("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Product not found" });
    }

    await producto.destroy();
    res.status(204).json();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
