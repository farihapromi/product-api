const express = require('express');

const { productRouterMiddleware } = require('../middlewares');
const { productController } = require('../controllers');
const { ProductSchema } = require('../schema');
const { validatePayload } = require('../middlewares');
const productRouter = express.Router();

//send data

// productRouter.post('/', productRouterMiddleware, (req, res) => {
//   // console.log(req.body);

//   res.status(201).json(productServices.createProduct(req.body));
//   res.send('product added sucesfully');
// });
// productRouter.post('/', productController.createProduct);
productRouter.post(
  '/',
  validatePayload(ProductSchema.omit({ _id: true })),
  productController.createProduct
);
productRouter.get('/', productController.getProducts);

//single product
productRouter.get('/:id', productController.getProductById);

//update
// productRouter.put('/:id', productController.updateProducts);
productRouter.put(
  '/:id',
  validatePayload(ProductSchema.partial()),
  productController.updateProducts
);

//deleted product
// productRouter.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   productServices.deleteProducts(id);
//   throw new Error('product has been deleted');
// });
productRouter.delete('/:id', productController.deleteProducts);

module.exports = productRouter;
