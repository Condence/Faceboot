const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");
const AuthController= require("../core/controllers/Auth.controller");
const postController = require("../core/controllers/post.controller");
const conocidoController = require("../core/controllers/conocido.controller");
const middlewares = require("../middleware/middlewares");

// AUTH
router.post("/api/login", AuthController.login);

// USUARIOS
router.post("/api/user", usuarioController.postUsuario); 
router.get("/api/user/:idUsuario", usuarioController.getUsuario)
router.put("/api/user/:idUsuario", usuarioController.putUsuario)
router.delete("/api/user/:idUsuario", usuarioController.deleteUsuario); 
router.get("/api/users", usuarioController.getUsuarios); 

// CONOCIDOS
router.post("/api/conocido/:idUsuario", conocidoController.postConocido);

// POSTS
router.post("/api/post", middlewares.tokenMiddleware, postController.postPost);
router.get("/api/posts/tags/:tag", postController.getPostsFind);
router.get("/api/posts", middlewares.tokenMiddleware, postController.getPosts);
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