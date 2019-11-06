var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs'); 
const config = require("../../config");
const usuarioDAO = require("../persistence/dao/usuario.dao");

module.exports = {
    authenticate: (req, res) => {
        const correo = req.body.correo
        const password = req.body.password

        usuarioDAO.findOne({ correo }).then((admin, err) => {
            if (err) {
                return res
                    .status(400)
                    .json({ success: false, error: err })
            }

            if (!admin) {
                return res.status(HttpStatus.notFound).json({
                    success: false,
                    error: `login not found`,
                })
            }

            bcrypt.compare(password, admin.password, function(err, result) {
                if (result === true) {
                    const payload = { admin: admin._id }
                    const token = jwt.sign(payload, config.JWTSecret, {
                        expiresIn: EXPIRES_IN_MINUTES,
                    })

                    admin.password = undefined

                    return res.status(HttpStatus.OK).json({
                        success: true,
                        admin,
                        token,
                        message: 'Admin authenticated!',
                    })
                } else {
                    return res.status(HttpStatus.notAcceptable).json({
                        success: false,
                        error: `Password doesn't match`,
                    })
                }
            })
        })
    },
};