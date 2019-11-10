var bcrypt = require('bcryptjs'); 
 
const authDAO = require("../persistence/dao/Auth.dao");

module.exports = {
    login(req, res) {
        const correo = req.body.correo;
        const password = req.body.password;
        authDAO.login(correo, password).then((result)=>{
            res.status(200).json(result);
        }).catch((error)=>{
            res.status(500).json(error);
        });  
    }
};