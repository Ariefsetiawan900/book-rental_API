const genres = require('../model/genres')
const response = require ('../helper/response')

module.exports ={
    getGenres : (req,res)=>{
        genres.getAllGenres()
            .then((result)=>{
                response.response(res,result,200,null)
            })
            .catch((err)=>{
                response.response(res,null,404,"Data not found")
            })
    },
    addGenres : (req,res) =>{
        let data = {
            genre_name : req.body.genre_name,
            

        } 

        console.log(data)
        
        genres.addGenres(data)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,401,"Something Wrong")
                
            })
    },
    updateGenres : (req,res)=>{
        const idgenres = req.params.idgenres
        const data = {
            genre_name : req.body.genre_name,
            
        }
        // console.log(data)
        genres.updateGenres(data,idgenres)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id genres No found")
            })
    },
    deleteGenres : (req,res)=>{
        const idgenres = req.params.idgenres
        console.log(idgenres)
        genres.deleteGenres(idgenres)
            .then((result)=>{
                response.response(res,result)
            })
            .catch((err)=>{
                console.log(err)
                response.response(res,null,404,"Id genres No found")
            })
    },

}