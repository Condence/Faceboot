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
router.post(`/api/${config.api.version}/login`, AuthController.login); // Publico

// User
router.post(`/api/${config.api.version}/user`, usuarioController.postUsuario);  // Publico
router.get(`/api/${config.api.version}/user/:idUsuario`, middlewares.tokenMiddleware, usuarioController.getUsuario); // Privado
router.put(`/api/${config.api.version}/user/:idUsuario"`, middlewares.tokenMiddleware, usuarioController.putUsuario); // Privado
router.delete(`/api/${config.api.version}/user/:idUsuario`, middlewares.tokenMiddleware, usuarioController.deleteUsuario); // Privado
router.get(`/api/${config.api.version}/users`, middlewares.tokenMiddleware, usuarioController.getUsuarios); // Privado

// CONOCIDOS
router.post(`/api/${config.api.version}/conocido/:idUsuario`, middlewares.tokenMiddleware, conocidoController.postConocido); // Privado

// POSTS
router.post(`/api/${config.api.version}/post`, middlewares.tokenMiddleware, postController.postPost); // Privado
router.get(`/api/${config.api.version}/posts/tags/:tag`, middlewares.tokenMiddleware, postController.getPostsFind); // Privado
router.get(`/api/${config.api.version}/post/:postid`, postController.getPostsID); // Publico
router.get(`/api/${config.api.version}/posts`, middlewares.tokenMiddleware, postController.getPosts); // Privado
router.get(`/api/${config.api.version}/posts/:idUsuario`, middlewares.tokenMiddleware, postController.getPostsUser); // Privado
router.delete(`/api/${config.api.version}/post/:postid`, middlewares.tokenMiddleware, postController.deletePost); // Privado

//Comentarios 
router.post(`/api/${config.api.version}/comment/:postid`, middlewares.tokenMiddleware, comentarioController.postComment);   // Privado
router.delete(`/api/${config.api.version}/comment/:commentid`, middlewares.tokenMiddleware, comentarioController.deleteComment);  // Privado

module.exports = router;