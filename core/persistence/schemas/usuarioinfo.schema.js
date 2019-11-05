// - uid
// - Correo
// - Contraseña
// - Referencia a usuarios
// - Status (  Boolean usuario borrado/bloqueado/eliminado )

const moongose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId= moongose.Types.ObjectId;
const statusEnum= require("../enums/statusEnum")

const PostSchema = new Schema({
    uidUsuario:{type:ObjectId,required:true},
    correo:{type:String,required:true},
    contraseña:{type:String},
    tags:{type:String},
    statusUsuario:{type:String, enum:statusEnum.getAll},

 
       
      
  });

  //this 
  module.exports=moongose.model("usuario",usuarioSchema,"Usuarios")