const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");
const AuthController= require("../core/controllers/Auth.controller");
const middlewares = require("../middleware/middlewares");

router.post("/api/login", AuthController.authenticate);

router.post("/api/user", usuarioController.postUsuario);
router.get("/api/users",middlewares.tokenMiddlewares, usuarioController.getUsuarios);
router.get("/api/user/:idUsuario",middlewares.tokenMiddlewares, usuarioController.getUsuario);
router.put("/api/user/:idUsuario", middlewares.tokenMiddlewares, usuarioController.putUsuario);
router.delete("/api/user/:idUsuario", middlewares.tokenMiddlewares, usuarioController.deleteUsuario);

//router.post("/usuario/login", usuarioController.login);

module.exports = router;