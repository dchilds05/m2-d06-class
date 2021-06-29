// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE, THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router(); // This is the Router class inside the Express library

// ********* require Book model in order to use it *********
const Book = require('../models/Book.model');
const Author = require('../models/Author.model');

// This answers to the /books/add URL
router.post('/add', (req, res)=>{
  console.log(req.body)

  const { title, description, author, rating } = req.body // This is destructuring and does the same as the code below
/*
  const title = req.body.title
  const description = req.body.description
  const author = req.body.author
  const rating = req.body.rating
*/

  Book.create( {title, description, author, rating} )
  .then( createdBook => {
    console.log(createdBook);
    res.redirect('/books'); // This is a mandatory closing condition for our route. i.e. the handler fo the route has to "return" some value to the request
  })
  .catch(err=> console.log(err))
})

router.get('/add', (req, res) => {
  Author.find()
  .then(allAuthors => 
    res.render('book-add', {allAuthors})
  )
})

router.post('/edit/:id', (req, res)=>{
  const id = req.params.id 
  const { title, description, author, rating } = req.body // Destructuring the req.body object
  Book.findByIdAndUpdate(id, {title, description, author, rating})
  .then(updatedBook => res.redirect('/books'))
  .catch(err=> console.log(err))
})

router.get('/edit/:id', (req, res)=>{
  const id = req.params.id
  Book.findById(id)
  .then( bookFromfindById => res.render('book-edit', {book: bookFromfindById}))
})


router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  Book.findByIdAndDelete(id)
  .then( deletedBook => res.redirect("/books"))
  .catch(err=>console.log(err))
});

// ****************************************************************************************
// GET route for displaying the book details page
// ****************************************************************************************

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Book.findById(id)
  //.populate('author')
  .then( bookFromCollection => {
    console.log(bookFromCollection)
    res.render("book-details" , bookFromCollection)
  })
});



// ****************************************************************************************
// GET route to display all the books
// ****************************************************************************************

router.get('/', (req, res) => { // What URL does this answer?
  Book.find()
  .then(allBooks => {
    res.render('books', {allBooks})})
   // You have to continue coding the route
});

module.exports = router;
