const express = require('express');
const router=express.Router();

const usuarioController= require("../core/controllers/usuario.controller");

router.post("/api/user", usuarioController.postUsuario);
router.get("/api/users", usuarioController.getUsuarios);
router.get("/api/user/:idUsuario", usuarioController.getUsuario);
router.put("/api/user/:idUsuario", usuarioController.putUsuario);
router.delete("/api/user/:idUsuario", usuarioController.deleteUsuario);

//router.post("/usuario/login", usuarioController.login);

module.exports = router;