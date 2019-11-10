const postModel = require("../schemas/post.schema");
const tokenM = require("../../../middleware/middlewares");

module.exports.postPost = function(post){ 
    return new Promise((resolve, reject)=>{ 
        const postAGuardar = new postModel(post);  
        console.log(tokenM.id);
        postAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}
module.exports.getPosts = function(){ 
    return new Promise((resolve, reject) => {  
        postModel.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.getPostsID = function(postid){ 
    return new Promise((resolve, reject) => {  
        postModel.findById(postid, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.getPostsUser = function(idUsuario){
    return new Promise((resolve, reject) => {
        postModel.find({postedBy: idUsuario,public:true}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.getPostsFind = function(tags){
    return new Promise((resolve, reject) => {
        postModel.find({ tags: { $in: [tags] }, public:true}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.deletePost = function(postid) {   
    return new Promise((resolve, reject) => {
        postModel.findById(postid, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{ 
                if(result.postedBy == respuesta.id){
                    postModel.findByIdAndUpdate(postid,{activo: false}, (error, result)=>{ 
                        if(error){
                            reject("Trono: " + error);
                        }else{
                            resolve(result);
                        }
                    });
                } else {
                    reject("Trono: " + error);
                } 
            }
        });
         
    });
} 
