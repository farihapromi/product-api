const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();
const port = 5000;
app.use(express.json());
const products = [
  // {
  //   _id: uuidv4(),
  //   name: 'Wireless Headphones',
  //   image: 'https://via.placeholder.com/150',
  //   type: 'Electronics',
  //   price: 59.99,
  // },
  {
    _id: '9a513cf1-3c85-4dde-bfc5-eaff77dfe04d',
    name: 'Wireless Headphones',
    image: 'https://via.placeholder.com/150',
    type: 'Electronics',
    price: 59.99,
  },
  {
    _id: '2f1a79a0-3442-4cbb-bcf4-f8dda35a73b8',
    name: 'Gaming Laptop',
    image: 'https://via.placeholder.com/150',
    type: 'Computers',
    price: 1299.99,
  },
  {
    _id: 'cf936e56-31bb-4b3e-a8b1-c5a59021dfef',
    name: 'Running Shoes',
    image: 'https://via.placeholder.com/150',
    type: 'Footwear',
    price: 89.99,
  },
  {
    _id: '524d47ba-00f5-455b-b547-b22a8f4063f0',
    name: 'Smart Watch',
    image: 'https://via.placeholder.com/150',
    type: 'Accessories',
    price: 199.99,
  },
];
app.get('/', (req, res) => {
  res.send('hello world');
});
app.listen(port, () => {
  console.log(`app listeing on port ${port}`);
});

app.get('/api/products/', (req, res) => {
  res.send(products);
});

//send data

app.post('/api/products/', (req, res) => {
  // console.log(req.body);
  const newProductData = req.body;
  const newProduct = { _id: uuidv4(), ...newProductData };
  products.unshift(newProduct);
  res.status(201).json(newProduct);
  res.send('product added sucesfully');
});

//update
app.put('/api/products/:id', (req, res) => {
  //destrucring id
  const { id } = req.params;
  const payload = req.body; //updated data
  const updatedProductIndex = products.findIndex(
    (product) => product._id === id
  );
  if (updatedProductIndex === -1) {
    return res.status(400).json({ message: `No product exist with id ${id}` });
  }
  // products[updatedProductIndex].name=payload.name //destructing
  //   This updates the product at updatedProductIndex.
  // ...products[updatedProductIndex] keeps existing data.
  // ...payload updates only the fields provided in the request body.
  products[updatedProductIndex] = {
    ...products[updatedProductIndex],
    ...payload,
  };

  res.status(201).json(products[updatedProductIndex]);
});

//deleted product
app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((product) => product._id === id);
  if (productIndex === -1) {
    return res.status(400).json({ message: `No product exist with id ${id}` });
  }
  //     The splice() method removes 1 item from the products array at productIndex.
  // This permanently deletes the product from the array.
  products.splice(productIndex, 1);
  res.status(201).json({ message: 'product has been deleted' });
});
