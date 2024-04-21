const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5, // limit each IP to 3 requests per windowMs
  message: {'message':'Too many requests, please try again later.'},
});

module.exports = limiter;