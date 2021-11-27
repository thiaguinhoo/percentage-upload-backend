const express = require('express');

const uploadsRoutes = require('./routes/uploads.routes');

// application express
const application = express();

// routes
application.use('/uploads', uploadsRoutes);

module.exports = application;
