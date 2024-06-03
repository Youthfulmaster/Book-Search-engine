const mongoose = require('mongoose');
require('dotenv').config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  ssl: true,
  retryWrites: true,
};

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', options);

module.exports = mongoose.connection;
