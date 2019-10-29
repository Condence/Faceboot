const usuarioDAO = require("../persistence/dao/usuario.dao");

module.exports.login = async function(request, response){
    const usuario = request.body;
    try{
        const result = await usuarioDAO.login(usuario);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error ");
    }
}