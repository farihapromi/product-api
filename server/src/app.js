const express = require('express');
const connectDB = require('./db');
const cors = require('cors');
const { productRouter, userRouter } = require('./router');
const { configureRouter } = require('./router');
const { logRequestMiddleware, errorHandler } = require('./middlewares');
const config = require('./config');

const app = express();
const port = config.PORT;
app.use(cors(config.CORS));

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
