const comentarioDao = require("../persistence/dao/comentario.dao");

module.exports = { 
    postComment(req, res){
        let postid = req.params.postid;   
        let post = req.body;  
        comentarioDao.postComment(post, postid).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });        
    }
};