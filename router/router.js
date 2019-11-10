const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");
const AuthController= require("../core/controllers/Auth.controller");
const postController = require("../core/controllers/post.controller");
const conocidoController = require("../core/controllers/conocido.controller");
const comentarioController = require("../core/controllers/comentario.controller");
const middlewares = require("../middleware/middlewares");

// AUTH
router.post("/api/login", AuthController.login);

// USUARIOS
router.post("/api/user", usuarioController.postUsuario); 
router.get("/api/user/:idUsuario", usuarioController.getUsuario);
router.put("/api/user/:idUsuario", usuarioController.putUsuario);
router.delete("/api/user/:idUsuario", usuarioController.deleteUsuario); 
router.get("/api/users", usuarioController.getUsuarios); 

// CONOCIDOS
router.post("/api/conocido/:idUsuario", conocidoController.postConocido);

// POSTS
router.post("/api/post", middlewares.tokenMiddleware, postController.postPost);
router.get("/api/posts/tags/:tag", postController.getPostsFind);
router.get("/api/post/:postid", postController.getPostsID);
router.get("/api/posts", middlewares.tokenMiddleware, postController.getPosts);
router.get("/api/posts/:idUsuario", postController.getPostsUser);
router.delete("/api/post/:postid", middlewares.tokenMiddleware, postController.deletePost); 

//Comentarios 
router.post("/api/comment/:postid", comentarioController.postComment); 
 

module.exports = router;