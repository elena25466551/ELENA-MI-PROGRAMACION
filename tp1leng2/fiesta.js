//cargo vector
let invitados=["Lucas","Matias", "Jose", "Pedro", "Martina","Marcelo","Esteban","Marcela","Martin"];
//muestro vector
console.log(invitados);
// muestra longitud del vector
invitados.length;
console.log("Los invitados son:",invitados.length);
//imprimir el ultimo elemento del array
let ultimoinv=invitados[invitados.length-1];
console.log("el untimo invitado es:",ultimoinv);
//crea y carga un vector en otro nuevo
let confirmados=invitados.map(nom=>nom);
//capturo el indice de lo que quiero borrar del vector
let indice=confirmados.indexOf("Pedro");
console.log("Pedro se encuentra en la posición:",indice)
//borro un elemento del arreglo SPLICE
confirmados.splice(indice,1)
console.log(confirmados);
//Agrego a Pedro al final del arreglo
confirmados.push("Pedro");
console.log(confirmados);
//busco el indice en que esta lo que quiero borrar
let indice1=confirmados.indexOf("Marcela");
console.log("Marcela se encuentra en la posición",indice1);
//borro un elemento del arreglo
confirmados.splice(indice1,1);
console.log("Estos son los invitados confirmados:",confirmados);
//for(i=0;i<confirmados.length-1;i++) {
//console.log(confirmados[i],"Orden",i);
//}
//creo un nuevo vector con los mismos elementos del vector anterior y le agrego el orden
console.log(confirmados.map((e,i)=>{return `${e} orden: ${i+1}`}));
//ordenar alfabeticamente el vector
confirmados.sort();
console.log(confirmados);


