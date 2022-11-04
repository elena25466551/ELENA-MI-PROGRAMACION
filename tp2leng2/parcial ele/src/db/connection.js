const mongoose = require("mongoose")
const  DBconnection = async () =>{
    try{
        mongoose.connect("mongodb://localhost:27017/parcialele")
        console.log("La base de datos esta conectada")
    }
    catch(error){
        console.log("Se cometio un error al intenrtar conectar a la base de datos" +error)

    }
    
}
module.exports= DBconnection;// exportar la coneccion a app.js