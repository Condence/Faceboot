const comentarioModel = require("../schemas/comentario.schema");
const postModel = require("../schemas/post.schema");
const tokenM = require("../../../middleware/middlewares");

module.exports.postComment = function(post, postid){ 
    return new Promise((resolve, reject)=>{ 
        const comentarioAGuardar = new comentarioModel(post); 
        comentarioAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                if(result.activo == true){ 
                    postModel.findByIdAndUpdate(postid,{$push: {comentarios: result.id}}, (error, result2)=>{ 
                        if(error){
                            reject("Trono: " + error);
                        }else{ 
                            resolve(result2);
                        }
                    }); 
                } else {
                    reject("Trono: el post ya se borro " + error);
                }
            }
        });
        
    });
}
module.exports.deleteComment = function(commentid,postid) {   
    return new Promise((resolve, reject) => {
        comentarioModel.findById(commentid, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{   
                if((result) && (result.postedBy == respuesta.id)){
                    comentarioModel.findByIdAndUpdate(commentid,{activo: false}, (error, result)=>{ 
                        if(error){
                            reject("Trono: " + error);
                        }else{
                            resolve(result);
                        }
                    });
                } else {
                    reject("Tienes que ser dueño del comentario para eliminarlo.");
                } 
            }
        });  
    });
} 
