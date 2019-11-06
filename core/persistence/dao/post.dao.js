const postModel = require("../schemas/post.schema");

module.exports.postPost = function(post){ 
    return new Promise((resolve, reject)=>{ 
        const postAGuardar = new postModel(post);
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