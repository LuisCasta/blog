const express = require("express");

const ComentarioController = require("../controllers/ComentarioController");

const ComentarioRouter = () => {
    const router = express.Router();
    const controller = ComentarioController();

    router.route("/")
        .post(controller.CreateComment)
        .get(controller.GetComment)
        .put(controller.UpdateComment)
        .delete(controller.DeleteComment)
    router.route("/entrada")
        .get(controller.GetListComment)

    return router;
}

module.exports = ComentarioRouter;