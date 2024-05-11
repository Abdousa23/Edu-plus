const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minute
  max: 5, // limit each IP to 3 requests per windowMs
  message: {'message':'Too many requests, please try again after 5 min .'},
});

module.exports = limiter;