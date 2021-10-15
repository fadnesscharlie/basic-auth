'use strict';

// 3rd Party Resources
const express = require('express');

// Prepare the express app
const app = express();

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

// Require routes
const loginRoute = require('./routes/login-route.js');
const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

// Routes
app.use(loginRoute);






// Error Handlers - last to be added
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port') }
    app.listen(port, () => console.log(`Listening on ${port}`));
  }
}
