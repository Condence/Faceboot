const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");

//router.get("/getVideojuego", VideojuegoController.getVideojuego);

//router.get("/getVideojuegoID/:id", VideojuegoController.getVideojuegoID);

router.post("/usuario/login", usuarioController.login);

//router.put("/updateVideojuego/:id", VideojuegoController.putVideojuego);

module.exports = router;