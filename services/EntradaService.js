var moment = require('moment');
const {pool} = require("../config/db_config")

const CreatePost = async(data) => {

    return new Promise(async (resolve,reject) => {

        const entrada = {... data};

        var create_at = moment().format('YYYY-MM-DD hh:mm:ss');

        const query = `INSERT INTO entrada2 (titulo, cuerpo, create_time)
            VALUES ('${entrada?.titulo}','${entrada?.cuerpo}','${create_at}')`;

        pool.getConnection(function(err, conn) {
            // Do something with the connection

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
        
    })
}

const AddImage = async(data) => {

    return new Promise(async (resolve,reject) => {
        
        const entrada = {...data};
        
        const query = `UPDATE entrada2 SET img = '${entrada.url_image}' WHERE id = ${entrada.id_entrada}`;
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
        
    })
}

const GetPost = async(data) => {

    return new Promise(async(resolve,reject) => {

        
        var idEntrada = data.id;

        const query = `SELECT * FROM entrada2 
            WHERE id = ${idEntrada}`;

        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
    })
}

const GetPostTitle = async(data) => {

    return new Promise(async(resolve,reject) => {
        
        /*const query = `SELECT * FROM entrada 
            WHERE titulo like '%${data}%'`;*/

        const query = `SELECT * FROM entrada2 
            WHERE MATCH (titulo) AGAINST ('${data}')`;

        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
    })
}

const GetListPost = async() => {
    return new Promise(async (resolve,reject) => {
        

        const query = `SELECT * FROM entrada2 WHERE delete_time IS NULL`;
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
    })
}

const UpdatePost = async(data) => {

    return new Promise(async (resolve,reject) => {
        
        const entrada = {...data};

        let update_time = moment().format('YYYY-MM-DD hh:mm:ss');
        
        const query = `UPDATE entrada2 SET titulo = '${entrada?.titulo}', cuerpo ='${entrada?.cuerpo}',
        update_time = '${update_time}' WHERE id = ${entrada.id}`;
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
        
    })
}

const DeletePost = async(data) => {

    return new Promise(async (resolve,reject) => {

        
        var delete_at = moment().format('YYYY-MM-DD hh:mm:ss'); 
        //console.log(create_at)
        const query = `UPDATE entrada2 SET delete_time = '${delete_at}'
            WHERE id = ${data}`; 
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
                    console.log(err)
                    if(err)
                        reject(err)
                    else
                        resolve(rows)
                })
            }
            else
                console.log(`èrrr ${err}`)
        })
        
    })
}

module.exports = {
    CreatePost,
    AddImage,
    GetPost,
    GetPostTitle,
    GetListPost,
    UpdatePost,
    DeletePost
};