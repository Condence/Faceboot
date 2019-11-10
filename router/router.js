const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");
const AuthController= require("../core/controllers/Auth.controller");
const postController = require("../core/controllers/post.controller");
const conocidoController = require("../core/controllers/conocido.controller");
const comentarioController = require("../core/controllers/comentario.controller");
const middlewares = require("../middleware/middlewares");

const config = require("../config"); 

// AUTH
router.post("/api/login", AuthController.login); // Publico

// User
router.post(`/api/${config.api.version}/user`, usuarioController.postUsuario);  // Publico
router.get(`/api/${config.api.version}/user/:idUsuario`, middlewares.tokenMiddleware, usuarioController.getUsuario); // Privado
router.put(`/api/${config.api.version}/user/:idUsuario"`, middlewares.tokenMiddleware, usuarioController.putUsuario); // Privado
router.delete(`/api/${config.api.version}/user/:idUsuario`, middlewares.tokenMiddleware, usuarioController.deleteUsuario); // Privado
router.get(`/api/${config.api.version}/users`, middlewares.tokenMiddleware, usuarioController.getUsuarios); // Privado

// CONOCIDOS
router.post(`/api/${config.api.version}/conocido/:idUsuario`, middlewares.tokenMiddleware, conocidoController.postConocido); // Privado

// POSTS
router.post("/api/post", middlewares.tokenMiddleware, postController.postPost);
router.get("/api/posts/tags/:tag", middlewares.tokenMiddleware, postController.getPostsFind);
router.get("/api/post/:postid", middlewares.tokenMiddleware, postController.getPostsID);
router.get("/api/posts", middlewares.tokenMiddleware, postController.getPosts);
router.get("/api/posts/:idUsuario", middlewares.tokenMiddleware, postController.getPostsUser);
router.delete("/api/post/:postid", middlewares.tokenMiddleware, postController.deletePost); 

//Comentarios 
router.post("/api/comment/:postid", middlewares.tokenMiddleware, comentarioController.postComment); 
router.delete("/api/comment/:commentid", middlewares.tokenMiddleware, comentarioController.deleteComment); 

module.exports = router;