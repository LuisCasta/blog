const express = require("express");

const EntradaController = require("../controllers/EntradaController");

const EntradaRouter = () => {
    const router = express.Router();
    const controller = EntradaController();

    router.route("/")
        .post(controller.CreatePost)
        .get(controller.GetPost)
        .put(controller.UpdatePost)
        .delete(controller.DeletePost)
    router.route("/listAll")
    .get(controller.GetListPost)
    router.route("/searchTitle")
    .get(controller.GetPostTitle)
    router.route("/addImage")
    .post(controller.AddImage)

    return router;
}

module.exports = EntradaRouter;