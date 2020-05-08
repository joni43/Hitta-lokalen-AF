const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var path = require('path');
const expressValidator = require('express-validator');

const officeRoutes = require('./api/routes/offices');
const userRoutes = require('./api/routes/users');
const routes = require('./api/routes/index');

mongoose.connect(
  'mongodb+srv://joni43:' +
    process.env.MONGO_ATLAS_PW +
    '@hitta-lokal-8wgta.mongodb.net/test?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

// Routes which should handle requests
app.use('/addresses', officeRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  const error = new Error('Not  found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;
