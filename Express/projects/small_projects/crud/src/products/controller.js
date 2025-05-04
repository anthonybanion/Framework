// service.js
const service = require("./service");

// POST - Create one or more products
const createProducts = async (req, res) => {
  try {
    const body = req.body;
    const result = Array.isArray(body)
      ? await service.bulkCreateProducts(body)
      : await service.createProduct(body);
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET - All products
const getProducts = async (_req, res) => {
  try {
    const products = await service.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET - Product by ID
const getProductsById = async (req, res) => {
  try {
    const product = await service.getProductPartial(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// PUT - Full update
const updateProducts = async (req, res) => {
  try {
    const product = await service.updateProductFull(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 400;
    res.status(status).json({ error: err.message });
  }
};

// PATCH - Partial update
const updateProductsById = async (req, res) => {
  try {
    const product = await service.updateProductPartial(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 400;
    res.status(status).json({ error: err.message });
  }
};

// DELETE - Remove product
const deleteProducts = async (req, res) => {
  try {
    await service.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) {
    const status = err.message === "Product not found" ? 404 : 500;
    res.status(status).json({ error: err.message });
  }
};

// Exporting all the controller functions
module.exports = {
  createProducts,
  getProducts,
  getProductsById,
  updateProducts,
  updateProductsById,
  deleteProducts
};

