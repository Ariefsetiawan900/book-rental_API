const book = require('../model/book')
const response = require ('../helper/response')
module.exports ={
    getBook : (req,res)=>{
        const page = parseInt(req.query.page) || 1
        const limit = parseInt(req.query.limit) || 10
        const offset = (page - 1) * limit

        //pagination 
        book.getBookCount().then(result => {
          console.log(result)
            book.getAllBook(offset, limit)
            .then((result)=>{
                console.log(result)
                if (result[0] !== undefined) {
                    response.response(res,result,200,null)
                } else {
                    response.response(res,null,404,"Data not found")
                }
               
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Data not found")
            })
        }) .catch ((err)=>{
            console.log(err)
            response.response(res,null,404,"Data not found")
        }) 
        // end of pagination

    },
    // search
    searchBookTitle : (req,res)=>{
        const booktitle = req.params.booktitle
        console.log(booktitle)
        book.searchAllBook(booktitle)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    // end of search
    sortAvailable : (req,res)=>{
        book.sortAvailablelAllBook()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    sortTitle : (req,res)=>{
        book.sortTitleAllBook()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    sortGenre : (req,res)=>{
        book.sortGenreAllBook()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    sortDate : (req,res)=>{
        book.sortDateAllBook()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    addBook : (req,res) =>{
        let data = {
            title : req.body.title,
            image : req.body.image,
            description : req.body.description,
            datereleased : req.body.datereleased,
            genre : req.body.genre,
            available : req.body.available

        } 

        console.log(data)
        
        book.addBook(data)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,401,"Something Wrong")
                
            })
    },
    updateBook : (req,res)=>{
        const idbook = req.params.idbook
        const data = {
            title : req.body.title,
            image : req.body.image,
            description : req.body.description,
            datereleased : req.body.datereleased,
            genre : req.body.genre,
            available : req.body.available
        }
        // console.log(data)
        book.updateBook(data,Number(idbook))
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id Book No found")
            })
    },
    returnBook : (req,res)=>{
        const idbook = req.params.idbook
        const data = {
           
            available : req.body.available
        }
        // console.log(data)
        book.returnBook(data,Number(idbook))
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id Book No found")
            })
    },
    rentBook : (req,res)=>{
        const idbook = req.params.idbook
       
        book.getBookByID(idbook).then(result=>{
            if (result[0].available!=="false"){
                const data = {
           
                    available : req.body.available
                }
                book.returnBook(data,Number(idbook))
                .then((result)=>{
                    response.response(res,result)
                })
                .catch((err)=>{
                    console.log(err)
                    response.response(res,null,404,"Id Book No found")
                })
            }else {
                response.response(res,result,200,null,"book already borrowed")
                console.log("book already borrowed");
              
            }
           
        }).catch((err)=>{
            console.log(err)
            response.response(res,null,404,"Id Book No found")
        })
        // console.log(data)
        
    },
    deleteBook : (req,res)=>{
        const idbook = req.params.idbook
        console.log(idbook)
        book.deleteBook(Number(idbook))
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id Book No found")
            })
    },
    getBookById : (req,res)=>{
        const id= req.params.id;
        book.getBookByID(id)
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
}