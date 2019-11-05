// POSTS
// - uid
// - isPublic (boolean publico privado)
// - Mensaje
// - Tags
// - Status  (  Boolean Posts borrado/bloqueado/eliminado )
// - Comentarios
//     // - Usuario
//     - Fecha

const moongose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId= moongose.Types.ObjectId;
const statusEnum= require("../enums/statusEnum")

const PostSchema = new Schema({
    uid:{type:ObjectId},
    isPublic:{type:Boolean,required:true},
    tags:{type:String},
    status:{type:String, enum:statusEnum.getAll},

   
    comentarios:{type:[{
           
        comentadoFecha:{type:Date,required:true},
        //esto me hace ruido
        usuario:{type:ObjectId,ref:"usuarios"}       
        }]
  }      
      
  });