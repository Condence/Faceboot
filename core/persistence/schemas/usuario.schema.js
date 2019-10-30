const moongose = require("mongoose");
const Schema = mongoose.Schema
const ObjectId= moongose.Types.ObjectId;
const generosEnum= require("../enums/generosEnum.enum")



// USUARIOS
// - uid
// - Nombre
// - Edad
// - Sexo
// - Fecha de nacimiento
// - Generosa musicales
// - Musica favorita
// - Posts
//     - uid
//     - PosteadoFecha
//     - CreateAt
//     -  Referencia ( referencia a otra colección donde estarán todos los posts creados)
const UsuarioSchema = new Schema({
      nombre:{type:String, required:true, maxlenght:50},
      edad:{type:Number, required:true, min:0},
      sexo:{type:String,required:true},
      fechaNacimiento:{type:String, required:true},      
      genero:{type: String, required:true, 
        maxlenght:50,enum: generosEnum.getALL()},

        
        postsPublicados:{type:[{
           
            posteadoFecha:{type:Date.now(),required:true},
            creatAt:{timestamps: true},
            refencia:{type:ObjectId,ref:"Posts"}       
            }]
      }
    });

module.exports=moongose.model("usuario",usuarioSchema,"Usuarios")