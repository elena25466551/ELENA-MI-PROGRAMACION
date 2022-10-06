//1)crear un proigrama que pida al usuario que ingrese un numero y
// le devuelva un mensaje indicando si el numero es positivo o si es
// cero el numero es negativo.
//let num1=parseInt(prompt("Ingrese primer numero"));
// let num1=prompt("Ingrese un numero:");
// //isNan intenta covertir un parametro en numero por eso lo niego
// if (!isNaN(num1)){
// if (num1>0){
//     alert("El numero es positivo");
//     ;
// }
// else if(num1===0){
//     alert("El numero es cero");
// }
//    else {
//        alert("El numero es negativo")
//    }
// }
// else{
//     alert("Error no es un numero")
// }
//2)crean un programa que pida al usuario ingrese un 
//numero y que le diga al usuario si es par o no

 let num2=parseInt(prompt("Ingrese un numero:"));
if(!isNaN(num2))
{
 if(num2%2===0){
alert("El numero ingresado es par");
 }
 }
 else{
 alert("El numero no es un número")
 }