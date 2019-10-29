const usuarioModel = require("../schemas/usuario.schema");

module.exports.login = async function(usuario){ 
    const newUsuario = new usuarioModel(usuario);
    const result = await newUsuario.login();
    return result;
}