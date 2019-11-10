const tokens = require("./tokens");

exports.tokenMiddleware = function(req, res, next){
    let token = req.headers["x-acces-token"]; 
    if(token){
            tokens.validateToken(token).then(result=>{
                next();
            }).catch(err=>{
                res.status(401).json({
                    message:"Token invalid"
                });
            });
    }else{
        res.status(401).json({
            message:"Token not found"
        });
    }
}