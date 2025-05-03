const Product = require("./model");

// Create a single product
async function createProduct(data) {
  const { name, image, description, price, stock } = data;
  if (!name || !image || !description || price == null || stock == null) {
    throw new Error("All fields are required");
  }

  return await Product.create({ name, image, description, price, stock });
}

// Bulk create products
async function bulkCreateProducts(list) {
  return await Product.bulkCreate(list);
}

// Get all products
async function getAllProducts() {
  return await Product.findAll();
}

// Get product by ID
async function getProductById(id) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");
  return product;
}

// Full update (PUT)
async function updateProductFull(id, data) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");

  const { name, image, description, price, stock } = data;
  if (!name || !image || !description || price == null || stock == null) {
    throw new Error("All fields are required for PUT");
  }

  return await product.update({ name, image, description, price, stock });
}

// Partial update (PATCH)
async function updateProductPartial(id, data) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");

  return await product.update(data);
}

// Delete product
async function deleteProduct(id) {
  const product = await Product.findByPk(id);
  if (!product) throw new Error("Product not found");

  await product.destroy();
}

module.exports = {
  createProduct,
  bulkCreateProducts,
  getAllProducts,
  getProductById,
  updateProductFull,
  updateProductPartial,
  deleteProduct,
};
