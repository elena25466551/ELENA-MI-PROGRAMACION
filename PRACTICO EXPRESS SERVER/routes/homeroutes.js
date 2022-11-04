const router=require("express").Router();//creo una variable y requiero el router de la libreria express (para armar las rutas)
const {getHome, postHome,putHome, deleteHome} = require("../controller/controller")
//funcion get hace solicitud muestra "/" ruta de acceso,req pedir res responder mostrar
router.get("/", getHome)
router.get("/user",getHome)
router.post("/user", postHome)
router.put("/user", putHome)
router.delete("/user", deleteHome)

module.exports=router;//exporto todo a index.js