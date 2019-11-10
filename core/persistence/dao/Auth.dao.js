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
                         const token = tokens.generateToken(user); 
                        resolve(token);
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