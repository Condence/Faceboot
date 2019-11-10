const conocidoDAO = require("../persistence/dao/conocido.dao");

module.exports = {
    postConocido(req, res){
        let conocido = req.body.conocido;    
        let idUsuario = req.params.idUsuario;
        conocidoDAO.postConocido(idUsuario,conocido).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
};