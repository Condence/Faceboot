const usuarioInfoDAO = require("../persistence/dao/usuarioinfo.dao");

module.exports.login = async function(request, response){
    const usuario = request.body;
    try{
        const result = await usuarioInfoDAO.login(usuario);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error ");
    }
}