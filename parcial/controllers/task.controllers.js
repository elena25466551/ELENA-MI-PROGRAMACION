// const Task = require("../src/models/tareas");
// const ctrlTask={};
// //controlador para obtener todas las tareas de la base de datos
// // async para que espere respuesta de la BD
// ctrlTask.getTask = async (req,res)=>{
//     // consultan todos los documentos de la BD
//     //await esperar respuesta de BD
//     //find()buscar tarea
//     const tasks = await Task.find();

// //se devuelve al cliente un arreglo con todos los datos de las tareas
// return res.json(tasks)
// };
// //controlador para crear nuevo tarea en la BD
// //request  (req) lo que le envio al servidor (petición)
// // response (res) lo que devuelve el servidor al usuario (respuesta)
// ctrlTask.postTask = async(req,res)=>{
//     // se obtienen los datos enviados por el metodo POST
//     const {titulo,descripcion, userId} = req.body;
//     //se instancia un nuevo documento MongoDB para luego guardarlo
//     const newTask = new Task({
//         titulo,
//         descripcion,
//         userId
//     });
//     //se almacena en la BD con metodo asincrono .save
//     try {node
//         const task = await newTask.save()
//         //se devuelve una respuesta al cliente con un mensaje y los datos de la tarea  creada
//         return res.json ({
//             msg:"tarea creada correctamente",
//             task
//         })
//     } catch (error) {console.log(error)}
// }
// // Controlador para actualizar una tarea, requiere que se envíe ID  de la tarea.
// ctrlTask.putTask = async(req,res)=>{
//    return res.json ({
//        msg:"La tarea  a sido actualizado con exito"
//    })
// };
// //controlador para eliminar tarea requiere ID de la tarea
// ctrlTask.deleteTask = async(req,res)=>{
//     return res.json({
//         msg:" La tarea fue eliminado con exito"
//     })
// }
// module.exports=ctrlTask;

const Tasks = require("../src/models/tareas");

ctrlTasks = {};

// Controlador para consultar las tareas
ctrlTasks.getTasks = async (req, res) => {
    const iduser = req.user._id
    console.log(iduser)
    const tasks = await Tasks.find({ isActive: true,userId:iduser });
   
    res.json({tasks})
};

// Controlador para crear una nueva tarea
ctrlTasks.postTasks = async (req, res) => {
    const { titulo, descripcion } = req.body;// Obtengo las varaiables del cuerpo de la página de Postman

    // Instanciar una nueva tarea
    const nuevaTarea = new Tasks({
        titulo,
        descripcion,
        //agrego para el token
        userId: req.user._id
    });

    try {
        // Guardar tarea en la base de datos
        const tarea = await nuevaTarea.save();// save metodo de mongoose patra guardar un documento
        return res.json('La tarea fue guardada con éxito');
    } catch (error) {
        console.log(error)
    }
};

// Controlador para actualizar una tarea
ctrlTasks.putTasks = async (req, res) => {
    const id = req.params.id;
    const { titulo, descripcion, ...otroDatos } = req.body;
// error del cliente
    if (!id || !descripcion || !titulo) {
        return res.status(400).json({
            msg: 'No viene id en la petición',
        });
    };

    try {
        //const tareaActualizada = await Tasks.findByIdAndUpdate(id, { titulo, descripcion })
//modifique
const searchTask =  await Tasks.findOne({_id:id, userId:req.user._id, isActive:true})
//modifique
await Tasks.findByIdAndUpdate(searchTask._id,{titulo,descripcion,...otroDatos })
        return res.json({
            msg: 'Tarea actualizada correctamente',
            searchTask
        });
    } catch (error) {
        console.log(error.message);
        //500 error en el servidor
        return res.status(500).json({
            msg: 'Error al actualizar la tarea'
        })
    }
};

// Controlador para eliminar una tarea (Eliminación lógica)	
ctrlTasks.deleteTasks = async (req, res) => {
    const id = req.params.id;
    try {
        //modifique
        const deletedTask =  await Tasks.findOne({_id:id, userId:req.user._id})
        //modifique
        await Tasks.findByIdAndUpdate(deletedTask._id, { isActive: false })
        return res.json({
            msg: 'Tarea borrada correctamente'
        });
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea',
            _id: req.user_id
        });
    }
};
ctrlTasks.isEstado = async (req, res) => {
    const id = req.params.id;
    const {isEstado} = req.body
    try {
        await Tasks.findByIdAndUpdate(id, { isEstado: isEstado})
        if (isEstado == true)
        {
            return res.json({
                msg: "Tarea completada"
            })
        }
        else{
            return res.json({
                msg: "Tarea en curso"
            })   
        }
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
}
module.exports = ctrlTasks;

