const connection = require('../config/db');

module.exports = {
    getAllBook : (offset, limit) =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents LIMIT ?, ?', [offset,limit], (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },

    sortTitleAllBook : () =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents ORDER BY title;', (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    sortGenreAllBook : () =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents ORDER BY genre;', (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    sortDateAllBook : () =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents ORDER BY datereleased;', (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    sortAvailablelAllBook : () =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents ORDER BY available', (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },

    addBook : (data) =>{
        return new Promise ((resolve,reject)=>{
            connection.query(`INSERT INTO contents SET ?`,data, (err, result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject (new Error (err))
                }
            })
        })
    },
    updateBook : (data,idBook) => {
        
        // console.log(id)
        return new Promise ((resolve, reject)=>{
            connection.query(`UPDATE contents SET ? WHERE id = ?`,[data,idBook],(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    returnBook : (data,idBook) => {
        
        // console.log(id)
        return new Promise ((resolve, reject)=>{
            connection.query(`UPDATE contents SET ? WHERE id = ?`,[data,idBook],(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    rentBook : (data,idBook) => {
        
        // console.log(id)
        return new Promise ((resolve, reject)=>{
            connection.query(`UPDATE contents SET available = ? WHERE id = ?`,[data,idBook],(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    
    deleteBook:(idbook) =>{
        console.log(idbook)
        return new Promise ((resolve, reject)=>{
            connection.query(`DELETE FROM contents WHERE id = ?`,idbook,(err,result)=>{
                if (!err){
                    resolve(result)
                } else{
                    reject (new Error(err))
                }
            })
        })
    },
    
    searchAllBook : (booktitle) =>{
        return new Promise((resolve,reject)=>{
            connection.query("SELECT * FROM contents WHERE title LIKE CONCAT('%',?,'%')",booktitle ,(err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    getBookByID : (id) =>{
        return new Promise((resolve,reject)=>{
            connection.query('SELECT * FROM contents WHERE id = ?',id, (err,result)=>{
                if(!err){
                    resolve(result)
                } else{
                    reject(new Error(err))
                }
            })
        })
    },
    // pagination
    getBookCount : () =>{
        return new Promise((resolve,reject) =>{
            connection.query(`SELECT COUNT(*) as TotalBooks FROM contents`, (error, result) =>{
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    }


}
