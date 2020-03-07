const express = require('express')
const route = express.Router()
const book = require('../controller/book')
const auth = require('../helper/auth')

route 
    // .all('*',auth.authInfo)
    .get('/',book.getBook) // pagination
    .get('/:booktitle',book.searchBookTitle) //search
    .get('/sortgenre',book.sortGenre)
    .get('/sorttitle',book.sortTitle)
    .get('/sortavailable',book.sortAvailable)
    .get('/sortdate',book.sortDate)
    .get('/:id',book.getBookById)
   
    

    // ADD BOOK
    .post('/addbook', book.addBook)
    .patch('/:idbook',book.updateBook)
        // available
    .patch('/a/:idbook',book.returnBook)
    // borrow book
    .patch('/rent/:idbook',book.rentBook)

    .delete('/:idbook', book.deleteBook)

module.exports = route