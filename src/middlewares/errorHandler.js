const { NotFoundError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof NotFoundError) {
    return res.status(400).send(err.message);
  }
  console.error(err.stack);
  res.status(500).send('internal server error');
};
module.exports = { errorHandler };
