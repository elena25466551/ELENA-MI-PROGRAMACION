const mongoose=require("mongoose");
const dbConnect = () =>{
    try{
        mongoose.connect(`mongodb+srv://castroelena:25466551@cluster010.hig89ej.mongodb.net/?retryWrites=true&w=majority`,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    
console.log("Se ha conectado a la base de datos con exito")

} catch (error){
    console.log("Error al conectar a la base de datos")
    console.log(error.menssage)
}
}
module.exports = dbConnect;
