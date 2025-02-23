const { productServices } = require('../service');
const asyncHandler = require('express-async-handler');

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await productServices.createProduct(req.body);
  res.status(201).json(newProduct);
});

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await productServices.getAllProducts();
  res.json(products);
});
const updateProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await productServices.updateProduct(id, req.body);
  res.status(201).json(updatedProduct);
});
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const product = await productServices.getProductById(id);
  res.json(product);
});

const deleteProducts = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await productServices.deleteProducts(id);
  res.status(204).end();
});
module.exports = {
  createProduct,
  getAllProducts,
  updateProducts,
  getProductById,
  deleteProducts,
};
