//Ejercicio n 1

// Vamos a simular una carrera entre tres personas, Juan, Mario, Martín. El orden de largada será siempre el siguiente:
// 1- Juan
// 2- Mario
// 3- Martín
// El orden de llegada se determina conforme el nombre de cada uno vaya apareciendo en la consola de modo que el ganador
// será aquel cuyo nombre sea el primero en aparecer.

// Utilizando solamente el setTimeOut y sin alterar el orden de largada escribir el código necesario para obtener 
// los siguientes resultados:
// Vuelta N° 1: Mario, Martín, Juan
// Vuelta N° 2: Juan, Martín, Mario
// Vuelta N° 3: Martín, Juan, Mario
// Vuelta N° 4: Mario, Juan, Martín/

//VUELTA 1
console.log("LARGADA")
console.log("1,Juan")
console.log("2,Mario")
console.log("3,Martín")

 setTimeout(()=>{
     console.log("Juan")
 },10);
 console.log("Mario");
 console.log("Martín");
 //vuelta 2




 //EJERCICIO N 2
 //funcion asingrona
 const lisrepor = async () =>{
     const repo= await fetch ("https://api.github.com/repositories");
    
const jonrespuesta = repo.json()
return jonrespuesta;
 }

 console.log(lisrepor(repo).then)
 lisrepor()
 .then((respuesta)=>
 console.log(respuesta))
 .cach((error) =>
    console.log(`error es${error}`))

//generar una funcion que a partir de la respuesta del punto anterior retorne un array 
//de los nombres de usuarios de los repositorios listados
const nombresArrray = async () =>{
    const respuesta = await lisrepor()
    const newArray = respuesta.map((nombre)=>nombre.owner.login)
    return newArray
};
console,lo