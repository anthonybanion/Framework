const express = require("express");
const router = express.Router();
const {
  createProducts,
  getProducts,
  getProductsById,
  updateProducts,
  updateProductsById,
  deleteProducts
} = require("./controller");


router.post("/", createProducts);          // POST - Create one or more products
router.get("/", getProducts);              // GET - All products
router.get("/:id", getProductsById);       // GET - Product by ID
router.put("/:id", updateProducts);        // PUT - Full update
router.patch("/:id", updateProductsById);  // PATCH - Partial update
router.delete("/:id", deleteProducts);      // DELETE - Remove product

module.exports = router;


