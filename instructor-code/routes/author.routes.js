const express = require('express');
const router = express.Router();

const Author = require('../models/Author.model');













router.get('/', (req, res) => {
  Author.find()
  .then(allAuthors => {
    res.render('authors', {allAuthors})})
});

module.exports = router;