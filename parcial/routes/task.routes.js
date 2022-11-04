//el metodo Router nos permite crear rutas
const router = require("express").Router();
const {getTasks,postTasks,putTasks,deleteTasks, isEstado}=require("../controllers/task.controllers")

const validarJWT = require('../src/middlewares/validar-jwt');
const { route } = require("./user.routes");

//router.get("/",getTask)
//ruta para obtener todas las tareas
router.get("/task",[validarJWT],getTasks)
//crear nueva tarea
router.post("/task",[validarJWT],postTasks)
//editar tarea requiere id de tarea
router.put("/task/:id",[validarJWT],putTasks)
router.put("/taskestado/:id",isEstado)
//eliminar tarea
router.delete("/task/:id", [validarJWT],deleteTasks)
// se exporta el objeto router que contiene todas las rutas
module.exports = router;