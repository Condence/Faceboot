const usuarioModel = require("../schemas/usuario.schema");

module.exports.postConocido = function(conocidoid){
    return new Promise((resolve, reject)=>{ 
        //usuarioModel.findByIdAndUpdate(idUsuario, {$push: {nombre: "David"}}, (error, result)=>{
        usuarioModel.findByIdAndUpdate(idUsuario, {$push: {conocidos: {conocidoid}}}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 