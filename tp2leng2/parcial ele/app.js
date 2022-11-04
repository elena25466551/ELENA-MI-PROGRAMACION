const express = require("express");
const app = express();
app.use(express.json())
const DBconnection = require("./src/db/connection");
DBconnection();
// DEPENDENCIA
 require("dotenv").config() //para guardar variables de entorno
 // es una dependencia debo instalar en terminal npm install nombre de dependencia
// debo crear un archivo .env
//PUERTO
const port= process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`servidor escuchado http://127.0.0.1:${port}`)
})

//app.use(require("./routes/user.routers.js"))