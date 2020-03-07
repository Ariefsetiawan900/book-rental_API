const express = require('express')
const route = express.Router()
const genres = require('../controller/genres')
const auth = require('../helper/auth')

route 
    // .all('*',auth.authInfo)
    .get('/',genres.getGenres)
    .post('/addgenre', genres.addGenres)

    .patch('/:idgenres',genres.updateGenres)
    .delete('/:idgenres', genres.deleteGenres)

module.exports = route