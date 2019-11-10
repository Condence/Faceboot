const jwt = require("jsonwebtoken"); 
const config = require("../config"); 
 
exports.generateToken = function(user){
    return jwt.sign(user, config.auth.secret,{expiresIn: "20m" });
}
 
exports.validateToken = async function(token) { 
    global.respuesta = await jwt.verify(token, config.auth.secret); 
    return respuesta; 
}