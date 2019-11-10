const mongoose = require("mongoose");
const Schema = mongoose.Schema; 
//const generosEnum = require("../enums/generosEnum");
const ObjectId = mongoose.Types.ObjectId;
const uniqueValidator = require('mongoose-unique-validator');

const ComentarioSchema = new Schema({
    activo:{type: Boolean, default:true},
    content:{type:String, required:true, maxlenght:150},  
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Posts'
    }
}, { timestamps: true });  

module.exports = mongoose.model("Comentario", ComentarioSchema, "comentario");

