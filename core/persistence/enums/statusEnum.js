module.exports={
    getBorrado(){return"Borrado"},
    getBloqueado(){return"Bloqueado"},
    getEliminado(){return "Eliminado"},

    getAll(){
        return[this.getBorrado,this.getBloqueado,this.getEliminado];
    }
    
}