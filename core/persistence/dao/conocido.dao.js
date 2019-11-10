const usuarioModel = require("../schemas/usuario.schema");
module.exports.postConocido = function(idUsuario, conocidoid){
    return new Promise((resolve, reject) => {
        let agregar = true;
        usuarioModel.find({'_id': idUsuario}, (error, result)=>{
            if(error){
                reject("Trono: " + error);
            }else{ 
                if(result){   
                    for (let index = 0; index < result[0].conocidos.length; index++) {  
                        if(result[0].conocidos[index] == conocidoid){  
                            agregar =  false;
                            break; 
                        }  
                    } 
                    if((agregar) && (conocidoid != idUsuario)){
                        usuarioModel.findByIdAndUpdate(idUsuario, {$push: {conocidos: conocidoid}}, (error, result2)=>{
                            if(error){
                                reject("Trono: " + error);
                            }else{
                                resolve(result2);
                            }
                        });  
                    } else {
                        reject("Trono: Usuario ya existe o eres tu" + error);
                    } 
                }  
            }
        });
    }); 
} 