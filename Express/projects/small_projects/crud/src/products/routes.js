const express = require("express");
const router = express.Router();
const controller = require("./controller");

// POST - Create one or more products
router.post("/", async (req, res) => {
  try {
    const body = req.body;
    const result = Array.isArray(body)
      ? await controller.bulkCreateProducts(body)
      : await controller.createProduct(body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET - All products
router.get("/", async (_req, res) => {
  try {
    const products = await controller.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - Product by ID
router.get("/:id", async (req, res) => {
  try {
    const product = await controller.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
});

// PUT - Full update
router.put("/:id", async (req, res) => {
  try {
    const product = await controller.updateProductFull(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 400;
    res.status(status).json({ error: err.message });
  }
});

// PATCH - Partial update
router.patch("/:id", async (req, res) => {
  try {
    const product = await controller.updateProductPartial(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 400;
    res.status(status).json({ error: err.message });
  }
});

// DELETE - Remove product
router.delete("/:id", async (req, res) => {
  try {
    await controller.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 500;
    res.status(status).json({ error: err.message });
  }
});

module.exports = router;


