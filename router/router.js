const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");
const AuthController= require("../core/controllers/Auth.controller");
const postController = require("../core/controllers/post.controller");
const conocidoController = require("../core/controllers/conocido.controller");
const middlewares = require("../middleware/middlewares");

router.post("/api/login", AuthController.authenticate);

router.post("/api/user", usuarioController.postUsuario);
router.get("/api/users", usuarioController.getUsuarios);
router.get("/api/user/:idUsuario", usuarioController.getUsuario);
router.put("/api/user/:idUsuario", usuarioController.putUsuario);
router.delete("/api/user/:idUsuario", usuarioController.deleteUsuario);


router.post("/api/conocido/:idUsuario", conocidoController.postConocido);

router.post("/api/post", postController.postPost);
router.get("/api/posts", postController.getPosts);
router.get("/api/posts/:idUsuario", postController.getPostsUser);
/** 
    router.post("/api/user", usuarioController.postUsuario);
    router.get("/api/users",middlewares.tokenMiddlewares, usuarioController.getUsuarios);
    router.get("/api/user/:idUsuario",middlewares.tokenMiddlewares, usuarioController.getUsuario);
    router.put("/api/user/:idUsuario", middlewares.tokenMiddlewares, usuarioController.putUsuario);
    router.delete("/api/user/:idUsuario", middlewares.tokenMiddlewares, usuarioController.deleteUsuario); 
*/
//router.post("/usuario/login", usuarioController.login);

module.exports = router;