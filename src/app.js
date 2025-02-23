require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { productRouter, userRouter } = require('./router');
const { configureRouter } = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middlewares');

const app = express();
const port = 5000;
const MONGO_URI = process.env.MONGO_URI;
const MONGO_DB_NAME = process.env.MONGO_DB;

const connectDB = () => {
  console.log('Connecting mongodb..');
  mongoose
    .connect(MONGO_URI, {
      dbName: MONGO_DB_NAME,
    })
    .then(() => {
      console.log('Mongodb connected successfully');
    })
    .catch((err) => console.log(err));
};
connectDB();

app.use(express.json()); // Enables parsing of JSON request bodies

app.get('/', (req, res) => {
  res.send('hello world');
});

//middleware
app.use(logRequestMiddleware);
configureRouter(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`app listeing on port ${port}`);
});
