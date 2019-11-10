const usuarioModel = require("../schemas/usuario.schema");
module.exports.postConocido = function(idUsuario, conocidoid){
    return new Promise((resolve, reject) => {
        usuarioModel.find({_id: idUsuario, 'conocidos._id': conocidoid}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{ 
                usuarioModel.findByIdAndUpdate(idUsuario, {$push: {conocidos: conocidoid}}, (error, result)=>{
                    if(error){
                        reject("Trono: " + error);
                    }else{
                        resolve(result);
                    }
                }); 
                
            }
        });
    });
    /**
    console.log("Dwd");
    var query = {'_id':idUsuario};
    return new Promise((resolve, reject)=>{
        usuarioModel.findOneAndUpdate(query, {$push: {conocidos: conocidoid}}, {upsert:true}),function(error, result){
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
                 
                usuarioModel.findByIdAndUpdate(idUsuario, {$push: {conocidos: conocidoid}}, (error, result)=>{
                    if(error){
                        reject("Trono: " + error);
                    }else{
                        resolve(result);
                    }
                });  
            }
        } 
    });
    */
} 