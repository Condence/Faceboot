const usuarioModel = require("../schemas/usuario.schema");
var jwt = require('jsonwebtoken');
const config = require("../../../config");
var bcrypt = require('bcrypt'); 
const tokens = require("../../../middleware/tokens");

module.exports.login = function(body_correo, body_password){
    return new Promise((resolve, reject) => {
        usuarioModel.findOne({'correo': body_correo}, (error, result)=>{
            if(error){
                reject("Trono: correo no encontrado: " + error);
            }else{ 
                if(result){
                    if(result.password == body_password){   
                        const user = {id: result.id};
                        const roles = {id: result.rol};
                        const token = tokens.generateToken(user, roles, body_correo); 
                        resolve({
                            data:{
                                correo: body_correo,
                                token: token
                            }
                        });
                    } else { 
                        reject("Trono: contraseña erronea " + error);
                    } 
                } else {
                    reject("Trono: no se encontro correo: " + error);
                }
            }
        }); 
    });
}