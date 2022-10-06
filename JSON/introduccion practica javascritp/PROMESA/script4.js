//PROMESAS

// function pagarConTarjeta(precio) {
//     const limite = 10000;

//     //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
//     for (let index = 0; index <= 10000; index++)  {
//         console.log("Conectando...");            
//     }

//     if(precio <= limite) console.log("Compra Aprobada")
//     console.log("Compra Rechazada")

// }

// const pago = 15000;
// pagarConTarjeta(pago)


//2 CASO: SIMULAMOS EL SERVIDOR CON UN SETTIMEOUT

// function pagarConTarjeta(precio) {
//     const limite = 10000;

//     //SIMULAR LA DEMORA DEL SERVIDOR DEL BANCO
    
//     console.log("Conectando.....")
//     setTimeout(() => {
        
//         if(precio <= limite) console.log("Compra Aprobada");
//         else console.log("Compra Rechazada")
//     }, 2000);    
    
// }

// const pago = 15000;
// pagarConTarjeta(pago)

//USO DE PROMESAS

//3 ESTADOS: PENDIENTE - RESUELTO - RECHAZADO

//3° EJEMPLO

// const pagarConTarjeta = (precio)=> new Promise((resolve, reject)=>{

//         const limite = 10000;

//         if(precio <= limite) resolve("Compra Aprobada");
//         else reject("Compra Rechazada")

//     });

// const pago = 15000;
// console.log(pagarConTarjeta(pago));

//4° EJEMPLO
//AGREGAMOS ALGO DE COMPLEJIDAD CON UN PARAMETRO MAS PARA VERIFICAR SI
//ESTA CONECTADO O NO

// const pagarConTarjeta = (precio, estaConectado)=> 
// new Promise((resolve, reject)=>{
    
//     if(!estaConectado) return;
    
//     const limite = 10000;

//     if(precio <= limite) resolve("Compra Aprobada");
//     else reject("Compra Rechazada")

// });

// const pago = 5000;
// console.log(pagarConTarjeta(pago, true));

//5° EJEMPLO SIMULAMOS SERVIDOR CON SETTIMEOUT
// const pagarConTarjeta = (precio, estaConectado)=> 
// new Promise((resolve, reject)=>{    
//     if(!estaConectado) return;    
//     const limite = 10000;
//     setTimeout(() => {        
//         if(precio <= limite) resolve("Compra Aprobada");
//         else reject("Compra Rechazada")
//     }, 3000);
// });
// const pago = 15000;
// console.log(pagarConTarjeta(pago, true).then((respuesta)=>{
//     console.log(respuesta);
// }).catch((error)=>{
//     console.log(error)
// }));

// console.log("otra tarea1")
// console.log("otra tarea2")


//ASYNC - AWAIT

//6° EJEMPLO

// const pagarConTarjeta = (precio, estaConectado)=> 
// new Promise((resolve, reject)=>{    
//     if(!estaConectado) return;    
//     const limite = 10000;
//     setTimeout(() => {        
//         if(precio <= limite) resolve("Compra Aprobada");
//         else reject("Compra Rechazada")
//     }, 3000);
// });



// const procesarPago = ()=>{
//     const respuesta = pagarConTarjeta(1000, true);
//     console.log(respuesta)
// }

//procesarPago()

//console.log("otra tarea")

//ASYNC FUNCTION

/* const procesarPago = async ()=>{
    try{
        const respuesta = await pagarConTarjeta(1000, true)
        console.log(respuesta)

    }catch(error){
        console.log(error)
    }
}

procesarPago()
 */


//OBJETOS JSON

const obj={
    name: "Peter",
    apellido: "desconocido",
    edad: 27
}
//convierte el objeto javascript a JSON , por ejemplo 
//para realizar POST
console.log(JSON.stringify(obj))
const objJson = JSON.stringify(obj)
//CONVERTIR EL JSON a objeto javascript
console.log(JSON.parse(objJson))
const datos = async() => {

    await fetch("https://db-remaf.herokuapp.com/api").then(
        response => response.json()).
        then(data=>console.log(data))
        
    console.log("otra linea")
    console.log("ultima linea")
   
    
}
console.log(datos())


