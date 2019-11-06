const jwt = require("jsonwebtoken");
const scretPhrase = "1ts0nW3bTok3N";

exports.generateToken = function(user){
    return jwt.sign(user, scretPhrase, {expiresIn: "5m"})
}

exports.validateToken = async function(token){
    const decoded = jwt.verify(token, scretPhrase);
    return decoded;
    /**
    return new Promise((resolve, reject) => {
        jwt.verify(token, scretPhrase, (err, decode)=>{
            if(err){
                reject(`Token validation error`);
            } else {
                resolve();
            }
        });
    });
    */
}