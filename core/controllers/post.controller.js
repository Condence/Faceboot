const postDAO = require("../persistence/dao/post.dao");

module.exports = {
    postPost(req, res){
        let post = req.body;
        postDAO.postPost(post).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    },
    getPosts(req, res) {        
        try{
            postDAO.getPosts().then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
    getPostsUser(req, res) {    
        let idUsuario = req.params.idUsuario;    
        try{
            postDAO.getPostsUser(idUsuario).then((result)=>{
                res.status(200).json(result);
            }).catch((error)=>{
                res.status(500).json(error);
            });  
        }catch(error){
            res.status(500).json(error);
        }                     
    },
};