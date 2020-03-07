const connection = require('../config/db');

module.exports={
    getAllGenres : ()=>{
        return new Promise((resolve,reject)=>{
            connection.query(`SELECT * FROM genres`, (err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    addGenres : (data)=>{
        return new Promise((resolve,reject)=>{
            connection.query(`INSERT INTO genres SET ?`, data,(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    updateGenres : (data,idGenres) => {
        
        // console.log(id)
        return new Promise ((resolve, reject)=>{
            connection.query(`UPDATE genres SET ? WHERE id = ?`,[data,idGenres],(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    deleteGenres:(idGenres) =>{
        console.log(idGenres)
        return new Promise ((resolve, reject)=>{
            connection.query(`DELETE FROM genres WHERE id = ?`,idGenres,(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
}