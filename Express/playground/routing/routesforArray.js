// ==========================================
// 
// Description: This file contains the routes for the products API.
//
// File: routes.js
// Author: Anthony Bañon
// Created: 2025-05-02
// Last Updated: 2025-05-02
// ==========================================


const express = require("express");
const router = express.Router();
const Producto = require("./model");

// Create one or more products
router.post("/", async (req, res) => {
  try {
    const body = req.body;

    if (Array.isArray(body)) {
      // Bulk upload of products
      const productos = await Producto.bulkCreate(body);
      res.status(201).json(productos);
    } else {
      // Individual load
      const { nombre, image, descripcion, precio, stock } = body;
      if (!nombre || !image || !descripcion || precio == null || stock == null) {
        return res.status(400).json({ error: "All fields are required" });
      }

      const producto = await Producto.create({
        nombre,
        image,
        descripcion,
        precio,
        stock,
      });
      res.status(201).json(producto);
    }
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
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(producto);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Full update with PUT (requires all fields)
router.put("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Product not found" });
    }

    const { nombre, image, descripcion, precio, stock } = req.body;

    if (!nombre || !image || !descripcion || precio == null || stock == null) {
      return res.status(400).json({ error: "All fields are required for PUT" });
    }

    await producto.update({
      nombre,
      image,
      descripcion,
      precio,
      stock,
    });

    res.status(200).json(producto);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Partial update with PATCH (only some fields)
router.patch("/:id", async (req, res) => {
  try {
    const producto = await Producto.findByPk(req.params.id);
    if (!producto) {
      return res.status(404).json({ error: "Product not found" });
    }

    await producto.update(req.body); // Sequelize handles which fields to update
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
    res.status(204).send(); // No content
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
