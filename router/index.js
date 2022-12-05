const express = require('express')
const ComentarioRouter = require('./ComentarioRouter');
const EntradaRouter = require('./EntradaRouter');


const apiRouter = () => {
    const routes = express.Router();

    const entradaRouter = EntradaRouter();
    const comentarioRouter = ComentarioRouter();
    
    routes.use("/entrada",entradaRouter);
    routes.use("/comentario",comentarioRouter);

    return routes;
};

module.exports = apiRouter;