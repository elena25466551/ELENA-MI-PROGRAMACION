//funcion 
// //funcion declarativa
// function suma (num1,num2,num3=20){
// return num1+num2+num3
// }
// suma(5,3,6)
// //funcion expresion
// const suma = function(num1,num2){
//     return
// }
// //funcion flecha
// const resta = (num1,num2)=>{
//     return num1-num2
// }
// const suma=(num1,num1)=>{
//     return num1+num2
// }
// //forma implicita solo funcion flecha
// const suma=(num1,num1)=> num1+num2
// //ejercicio crear una funcion para aplicar descuentos del 15% al 30%
// //a productos varios
 const productos1 ={
    nombre:"remera",
    precio:3000
 }
 const producto2={
     nombre:"jean",
    precio:5000
 }
// //funcion de declaracion
// function obtenerPrecios(producto){
//     const precioSinDto=producto.precio;
//     const precioConDto=producto.precio*0.85
//     const precioSuperDto=producto.precio*0.70
//     //return tipo objeto
//     return [precioSinDto,precioConDto,precioSuperDto]
//     //return tipo objeto
// //return {precioSinDto,precioConDto,precioSuperDto}
//     }
//     console.log(obtenerPrecios(productos1));
//   //  console.log(obtenerPrecios(producto2));

//funcion flecha 
//con array
const obtenerPrecios=producto=>{return [producto.precio,producto.precio*0.85,producto.precio*0.70]}
//con objeto
// const obtenerPrecios=producto=>{return{
//     precioSinDto:producto.precio,
//     precioConDto:producto.precio*0.85,
//     precioSuperDto:producto*0.70
// }
// }
console.log(obtenerPrecios(producto2))
