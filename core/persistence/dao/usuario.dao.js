const usuarioModel = require("../schemas/usuario.schema");

module.exports.getUsuarios = function(){
    return new Promise((resolve, reject) => {
        usuarioModel.find({}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.getUsuario = function(idUsuario) {
    return new Promise((resolve, reject) => {
        usuarioModel.findById(idUsuario, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.postUsuario = function(usuario){
    return new Promise((resolve, reject)=>{
        const usuarioAGuardar = new usuarioModel(usuario);
        usuarioAGuardar.save((error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 
module.exports.putUsuario = function(idUsuario, usuario){ 
    return new Promise((resolve, reject)=>{ 
        usuarioModel.findByIdAndUpdate(idUsuario,{$set: usuario},{new: true}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
}
module.exports.deleteUsuario = function(idUsuario) {  
    return new Promise((resolve, reject) => {
        usuarioModel.findByIdAndUpdate(idUsuario,{activo: false}, (error, result)=>{ 
            if(error){
                reject("Trono: " + error);
            }else{
                resolve(result);
            }
        });
    });
} 