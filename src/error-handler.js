const { NODE_ENV } = require('./config');
const logger = require('./logger');

// error handler middleware

function errorHandler(error, req, res, next) { // eslint-disable-line no-unused-vars
  let response;
  if(NODE_ENV === 'production'){
    response = {error: {message: 'server error'}};
  }else{
    console.error(error); // eslint-disable-line no-console
    logger.error(error.message);
    response = {message: error.message, error};
  }
  res.status(500).json(response);
}

module.exports = errorHandler;