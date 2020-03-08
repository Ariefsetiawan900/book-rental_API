const express = require('express')
const route = express.Router()
const book = require('../controller/book')
const auth = require('../helper/auth')

route 
    // .all('*',auth.authInfo)
    .get('/',book.getBook) // pagination
    .get('/sortdate',book.sortDate) //sorting by date
    .get('/sortgenre',book.sortGenre) //sorting by genre
    .get('/sorttitle',book.sortTitle) //sorting by title
    .get('/:booktitle',book.searchBookTitle) //search
    .get('/sortavailable',book.sortAvailable)
    .get('/:id',book.getBookById)
    
    
    .post('/addbook', book.addBook) // ADD BOOK

    .patch('/:idbook',book.updateBook)
    .patch('/return/:idbook',book.returnBook)  // return
    .patch('/rent/:idbook',book.rentBook) // borrow book

    .delete('/:idbook', book.deleteBook)

module.exports = route