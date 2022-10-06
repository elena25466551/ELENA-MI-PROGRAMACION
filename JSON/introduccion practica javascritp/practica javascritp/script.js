// alert("Bienvenido");
// //EJERCICIOS
// //PEDIR AL USUARIO INGRESE SU NOMBRE.GUARDAR ESE NOMBRE EN UNA VARIABLE Y UTILIZAR PARA SALUDAR AL USUARIO(EJEMPLO HOLA SANDRA)
// let nombre=prompt("ingrese el nombre");
// alert("Bienvenido " + nombre);

// //PEDIR AL USUARIO INGRESE 2 NUMERO Y DEVOLVER LAS OPERACIONES BASICAS (SUMA,RESTA,MULT,DIV)
// let num1=parseInt(prompt("Ingrese primer numero"));
// let num2=parseInt(prompt("Ingrese el segundo numero"));
// let resu=num1+num2;
// let resuresta=num1-num2;
// let multi=num1*num2;
// let div=num1/num2;

// alert(`La suma es: ${resu},
// la resta es: ${resuresta},
// La multiplicación es: ${multi},
// La división es: ${div}`);
// // para convertir un string en number
// let string ="1234";
// console.log(typeof(+string));

//pedir al usuario que ingrese su apellido y devolverle el apellido todo en mayuscula
/* let apellido=prompt("Ingrese su apellido en minuscula").toUpperCase();
alert(`Bienvenido ${apellido}`); */
//profe esto se ve en consola/*  */
/* let conversionletra="ejemplo"
console.log(conversionletra.toUpperCase())
console.log(conversionletra.toLowerCase())

 */
// const miArray=["nomb",()=>{},[]];
// console.log(miArray);
// const mifruta=["pera","quiby",3,5];
// const fruta=mifruta[0];
// console.log(fruta);
// // longitud del array
// miArray.length
// console.log(miArray.length);

// //para modificar lo que hay en el array
// miArray[0]="banana";
// console.log(miArray[0]);

// //manipulacion de array

// //PROFE MANIPULACION DE ARRAY
//  const miArray=["nomb",()=>{},[]];
// // console.log(miArray);
// // const arrayEjemplo=["pera","quiguy","manzana",123," "];
// // console.log(arrayEjemplo[1]);
// // //falta 

// //obtener el ultimo elemento
// let ultimoelemento=miArray[miArray.length-1];
// console.log(ultimoelemento);

// //usar la propiedad INDEX OF
// let arraynombre = ["susana","ruth","lautaro"]
// let nombre="Ruben"

// console.log(arraynombre.indexOf("lautaro"))
// //cambiar el valor de un elemento del arreglo sin saber su indice
// let indice =arraynombre.indexOf("lautaro");
// arraynombre[indice]="Ruben";
// console.log(arraynombre);

// //agregar un elemento al final del array
// arraynombre.push("anabel")
// console.log(arraynombre)

// //eliminar el ultimo elemento valor del arraglo
// arraynombre.pop()
// console.log(arraynombre)

// //agregar elemento al principio
// arraynombre.unshift("Pedro")
// console.log(arraynombre)

// //eliminar el primer elemento
// arraynombre.shift()
// console.log(arraynombre)

// //splice para agregar
// arraynombre.slice(1,0,"nombreagregado")

// //Splice para eliminar y agregar uno o mas elementos de un arreglo y agrega uno nuevo
// arraynombre.slice(1,2,'nombreagregado')
// console.log(arraynombre)

// //FUNCIONES
// function validarnombre(nombre){
// return `${nombre} nuevo`
// }
// const validarnombre2=(nombre)=>`${nombre} nuevo`
//hacer una funcion llamada numeros que el primer parametro indique el valor que
//tengo que agregar al arreglo objetosnumericos, y el segundo parametro me indique
//el indice donde sera agregado y ademas, muestra por consola el nuevo arreglo
//let color = prompt("Ingrese color")
//let indice2 = prompt("Ingrese posicion")
//const objetosnumericos = ["rojo","verde","amarillo","violeta","azul","blanco","negro"]

//EJE PROFE DISCO
//let valor
//let indicep
//const objetosnumericos[]
//function numeros (valor,indicep)

//otra forma profe ejemplo de funcion
// function suma1(nump,nums){
// let total=nump+nums
// return total
// //((console.log(total))) 
// }
// suma1(3,4)
// console.log(suma1(3,4))
// otra forma de hacer funcion usamos esto siplifica
// const sumar2=(numpr,numseg)=>{
//     let total= numpr+numseg
//     return total
// }
//console.log(sumar2(7,8))
//otra forma de hacer funcion
//onst sumar=(numpr,numse)=>numpr+numse
//console.log(sumar(2,3))

//clase 17/08/2022
//javascrip lengueje sincronico
//javascrip lenguaje no bloqueante
//javascrip hilo simple
//let miArray1[]

//ejemplo de sincronismo
/*console.log("me despierto")
console.log("me lavo los dientes")
console.log("pongo la cafetera")
for(let tiempo=120;tiempo>0;tiempo--){
    if(tiempo===0)
    console.log("el cafe esta listo")
}
console.log("desayuno")*/
//ejecuta una funcion depués de unos segundos
// setTimeout(()=>{
//     console.log("el cafe esta listo")
// },0)
// console.log("desayuno")
// console.log("voy al IPF")
//ejemplo 2
//A)
console.log("Teresa")
console.log("Hugo")
console.log("Rodrigo")
//B)
//setTimeout(()=>{

//})

//C)
// setTimeout(()=>{
//     console.log("Teresa")
// },0);
// for(index=0;index<=300;index++){
//     console.log(index)
//     if(index===300){}
// }

//ejercicio 3
//funciones
// function primero(fn){
//     setTimeout(()=>{
//     console.log("primero")
//     fn();
// },2000)}
// function segundo(){
//     console.log("segundo")
// }
// primero(segundo);
//ejercicio de foreach
// const arrayNombres=["Hugo","ele","federico"]
// arrayNombres.forEach((nombre,indice)=>{
//     console.log(nombre,":",indice)
// })
// //ejercio filter
// const resul=arrayNombres.filter(word=>word.length>4)
// console.log(resul);

// ejercico de objetos falta me quede
// const objetoejemplo=new objet()
// const objeto2={
//     nombre:"Teresa",
//     edad:25,
//     domicilio:{
//         real:"dom1",
//         leg:"dom2"
//     }
// }
// objeto2.apellido="Gonzales"
// console.log(objeto2["domicilio"].leg)
// console.log(objeto2.domicilio.leg)
// console.log(objeto2["domicilio"]["leg"])
// objeto2.apellido="Diaz"
// console.log(objeto2.domicilio["tercer domicilo"]
// delete.objeto2.edad
//console.log(objeto2)

//otro ejercicio
//crear un objeto user basio
//agregar la propiedad name con el valor John
//agregar la propiedad surname con el valor smith
//cambia el valor de name a Peter
//remuebe la propiedad name del objeto

let user={
    name:"John",
    surname:"smith"
}
user.name="Peter"
console.log(user)
delete user.name
console.log(user)









    









