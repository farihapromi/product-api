const express = require('express');

const { productServices } = require('../service');
const { productRouterMiddleware } = require('../middlewares');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
  res.send(productServices.getAllProducts());
});

//send data

// productRouter.post('/', productRouterMiddleware, (req, res) => {
//   // console.log(req.body);

//   res.status(201).json(productServices.createProduct(req.body));
//   res.send('product added sucesfully');
// });
productRouter.post('/', (req, res) => {
  res.status(201).json(productServices.createProduct(req.body));
});

//update
productRouter.put('/:id', (req, res) => {
  const { id } = req.params;
  const updatedProducts = productServices.updateProducts(id, req.body);
  res.status(201).json(updatedProducts);
});

//deleted product
productRouter.delete('/:id', (req, res) => {
  const { id } = req.params;
  productServices.deleteProducts(id);
  throw new Error('product has been deleted');
});

module.exports = productRouter;
