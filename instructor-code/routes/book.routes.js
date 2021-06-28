// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router(); // This is the Router class inside the Express library

// ********* require Book model in order to use it *********
const Book = require('../models/Book.model');

// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/', (req, res) => { // What URL does this answer?
  Book.find()
  .then(allBooks => {
    console.log(allBooks)
    res.render('books', {allBooks})})
   // You have to continue coding the route
});

// This answers to the /books/add URL
router.post('/add', (req, res)=>{
  const title = req.body.title
  const description = req.body.description
  const author = req.body.author
  const rating = req.body.rating

  Book.create( {title, description, author, rating} )
  .then( createdBook => console.log(createdBook))
})



// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************

router.get('/books/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
   // You have to continue coding the route
});

module.exports = router;
