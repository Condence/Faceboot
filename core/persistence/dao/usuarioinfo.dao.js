const usuarioInfoModel = require("../schemas/usuarioinfo.schema");

module.exports.login = async function(usuarioinfo){ 
    const newUsuarioInfo = new usuarioInfoModel(usuarioinfo);
    const result = await newUsuarioInfo.login();
    return result;
}