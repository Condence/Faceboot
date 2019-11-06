const usuarioDAO = require("../persistence/dao/usuario.dao");

module.exports = {
    getUsuarios(req, res) {        
        try{
            usuarioDAO.getUsuarios().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    getUsuario(req, res){
        let idUsuario = req.params.idUsuario;
        usuarioDAO.getUsuario(idUsuario).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    postUsuario(req, res){
        let usuario = req.body;
        usuarioDAO.postUsuario(usuario).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    putUsuario(req, res){
        let usuario = req.body;
        let idUsuario = req.params.idUsuario;
        usuarioDAO.putUsuario(idUsuario, usuario).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });   
    },
    deleteUsuario(req, res){
        let idUsuario = req.params.idUsuario;
        try{
            usuarioDAO.deleteUsuario(idUsuario).then((result)=>{
                res.status(200).json("Usuario eliminado");
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }
    }
};