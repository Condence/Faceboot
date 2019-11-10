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
router.get("/api/user/:idUsuario", middlewares.tokenMiddleware, usuarioController.getUsuario);
router.put("/api/user/:idUsuario", middlewares.tokenMiddleware, usuarioController.putUsuario);
router.delete("/api/user/:idUsuario", middlewares.tokenMiddleware, usuarioController.deleteUsuario); 
router.get("/api/users", middlewares.tokenMiddleware, usuarioController.getUsuarios); 

// CONOCIDOS
router.post("/api/conocido/:idUsuario", conocidoController.postConocido);

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