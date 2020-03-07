const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = 3009;
const book = require('./src/route/book')
const user = require('./src/route/user')
const logger = require('morgan')
const genres =require('./src/route/genres')



app.use(
    bodyParser.urlencoded({
        extended : true
    })
)
app.use(logger('dev'))
app.use(bodyParser.json())
app.listen(port,()=>{
console.log("Server on using port ",port)
})

app.use('/api/v1/genre',genres)
app.use('/api/v1',book)
// app.use('/api/v1/user',user)