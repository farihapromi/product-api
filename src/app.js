const express = require('express');
const { productRouter, userRouter } = require('./router');
const { configureRouter } = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middlewares');

const app = express();
const port = 5000;
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
