const jwt = require("jsonwebtoken"); 
const config = require("../config");
const secretPhrase = "f4c3b0oTw3Bt0k3n";

exports.generateToken = function(user){
    return jwt.sign(user, secretPhrase,{expiresIn: "20m" });
}
 
exports.validateToken = async function(token) {
    const respuesta = await jwt.verify(token, secretPhrase);
    return respuesta; 
}