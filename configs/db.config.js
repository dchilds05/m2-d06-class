const mongoose = require('mongoose');
const dotenvReturn = require('dotenv').config({path: "../.env" });

const MONGO_DB_NAME = process.env.MONGO_DB_NAME

mongoose
  .connect('mongodb://localhost:27017/' + MONGO_DB_NAME, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch(err => console.error('Error connecting to mongo', err));
