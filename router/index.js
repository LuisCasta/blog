const express = require('express')
const ComentarioRouter = require('./ComentarioRouter');
const EntradaRouter = require('./EntradaRouter');


const apiRouter = () => {
    const routes = express.Router();

    const entradaRouter = EntradaRouter();
    const comentarioRouter = ComentarioRouter();
    
    /**
     * @openapi
     * /api/v1/entrada:
     *   get:
     *     summary: Obtenet entrada por id
     *     tags: 
     *      - entrada
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_entrada:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                    type: object
     *       400:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *
     *   post:
     *     summary: Crear entrada
     *     tags: 
     *      - entrada
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                titulo: 
     *                  type: string
     *                cuerpo:
     *                  type: string
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 data:
     *                    type: object
     *       400:
     *         description: error 
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *
     * 
     *   put:
     *     summary: Actualizar entrada
     *     tags: 
     *      - entrada
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_entrada:
     *                  type: integer
     *                titulo: 
     *                  type: string
     *                cuerpo:
     *                  type: string
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 data:
     *                    type: object
     *       400:
     *         description: error query
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *
     * 
     *   delete:
     *     summary: Elininar entrada
     *     tags: 
     *      - entrada
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_entrada:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 data:
     *                    type: object
     *       400:
     *         description: error query
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *
     * get:
     *     summary: Enlistar todas las entradas
     *     tags: 
     *      - entrada
     *     requestBody:
     *       required: true
     *       content:
     *          application/json:
     *            schema:
     *              type: object
     *              properties:
     *                id_entrada:
     *                  type: integer
     *     responses:
     *       200:
     *         description: ok
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 data:
     *                    type: object
     *       400:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     *       500:
     *         description: error
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 status:
     *                    type: integer
     *                 message:
     *                    type: string
     * 
     */
    
    routes.use("/entrada",entradaRouter);
    routes.use("/comentario",comentarioRouter);

    return routes;
};

module.exports = apiRouter;