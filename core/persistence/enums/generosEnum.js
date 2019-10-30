module.exports={
    getBlues(){return"Blues"},
    getCorrido(){return"Corrido"},
    getCountry(){return"Country"},
    getCumbia(){return"Cumbia"},
    getElectronica(){return"Electronica"},
    getMetal(){return"Metal"},
    getRock(){return"Rock"},
    getPop(){return"Pop"},
    getReggaeton(){return"Reggaeton"},
    getRap(){return"Rap"},


    getAll(){
        return[this.getBlues,this.getCorrido,this.getCountry,this.getCumbia,
            this.getElectronica,this.getMetal,this.getPop,this.getRap,this.getReggaeton,this.getRock];
    }
    
    }