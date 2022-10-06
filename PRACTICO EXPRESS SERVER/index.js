const express = require ("express");//instalo el servidor
const app = express();//instalo el servidor
app.use(express.json())//permite usar archivos json
const port= 3000;//guardo en una variable el puerto del servidor
//funcion get hace solicitud muestra "/" ruta de acceso,req pedir res responder mostrar
app.use(require("./routes/homeroutes.js"))

//listen colocar el puerto
app.listen(port,()=>{
    console.log(`El servidor corriendo en el puerto ${port}`)
})