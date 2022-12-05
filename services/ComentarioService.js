const {pool} = require("../config/db_config")
var moment = require('moment');

const CreateComment = async(data) => {

    return new Promise(async (resolve,reject) => {

        const entrada = {... data};
        console.log(entrada)
        var create_at = moment().format('YYYY-MM-DD hh:mm:ss');

        const query = `INSERT INTO comentario (id_entrada, nombre, comentario, create_time)
            VALUES ('${entrada?.id_entrada}','${entrada?.nombre}','${entrada?.comentario}','${create_at}')`;

        pool.getConnection(function(err, conn) {
            // Do something with the connection

            if(conn){

                conn.query(query, function(err, rows, fields) {

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

const GetComment = async(data) => {

    return new Promise(async(resolve,reject) => {

        
        var idEntrada = data.id;

        const query = `SELECT * FROM comentario 
            WHERE id = ${idEntrada}`;

        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
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

const GetListComment = async(data) => {

    return new Promise(async(resolve,reject) => {
        
        const query = `SELECT * FROM comentario 
            WHERE id_entrada = '${data}'`;

        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
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

const UpdateComment = async({id_comentario,nombre,comentario}) => {

    return new Promise(async (resolve,reject) => {
        
        let update_time = moment().format('YYYY-MM-DD hh:mm:ss');
        
        const query = `UPDATE comentario SET nombre = '${nombre}', comentario ='${comentario}',
        update_time = '${update_time}' WHERE id = ${id_comentario}`;
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
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

const DeleteComment = async(data) => {

    return new Promise(async (resolve,reject) => {

        
        var delete_at = moment().format('YYYY-MM-DD hh:mm:ss'); 
        //console.log(create_at)
        const query = `UPDATE comentario SET delete_time = '${delete_at}'
            WHERE id = ${data}`; 
        
        pool.getConnection(function(err, conn) {

            if(conn){

                conn.query(query, function(err, rows, fields) {
                    
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
    CreateComment,
    GetComment,
    GetListComment,
    UpdateComment,
    DeleteComment
};