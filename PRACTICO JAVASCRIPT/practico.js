// 1)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
// SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
// EL RESULTADO


let x=7;
let z=8;

 function operaciones(x,z){
     let resultado;
if (x < z){
 resultado = x/z;
}
else {
    resultado = x*z;
}
 	return resultado
    
 }
 console.log("El resultado es:",operaciones(x,z))
 


// 2)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
// ES (SI ES STRING, NUMBER, BOOLEAN, ETC)
let valor=35;
 function tipodedato(a){
return    typeof(a)
 }
console.log("Su tipo de dato es:",tipodedato(valor))
// 3)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
// - a y b SE SUMAN
// - EL RESULTADO DE LA SUMA SE RESTA CON c
// - LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
// - FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
// - SE RETORNA EL RESULTADO
// - TIP: RECORDAR EL ORDEN
let a=5,b=2,c=3,d=6,e=3,f=2;
let resu;
function combinacionope(a,b,c,d,e,f){
    resu=a+b;
    resu=resu-c;
    resu=(resu*d)/e;
    resu=Math.pow(resu,f);
	return resu
}
console.log(combinacionope(a,b,c,d,e,f));
// 4)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
// ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.
let nombres=["Elena","juan","Gustavo","MIlagros","Pedro","Diamela","Benjamín"]
function vector(nombres){
uno = nombres[nombres.length - 3];
dos = nombres[nombres.length - 2];
tres =nombres[nombres.length - 1];
	return nuevonombre=[uno,dos,tres]
 }
console.log("Los ultimos 3 nombres son:",vector(nombres));
// 5)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
// Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO
let nomorde=["Elena","Milagros","Diamela","Benjamin"];
console.log(nomorde)
function ordenalfa(nomorde){

 	return nomorde.sort()
 }
console.log("Ordenado alfabeticamente de mayor a menor",ordenalfa(nomorde))
// 6)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
// LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
// RETORNAR EL ARRAY FILTRADO
let aa=[1,2,3,2,6,2];
console.log(aa);
let bb=2;
function remover(aa,bb){
    arrayfil=aa.filter(element =>element != bb)
   	return arrayfil
 }
console.log("el filtrado es:",remover(aa,bb));
// 7)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
// RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
// FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.
let num=[1,2,3,4,5,6,7,8,9]
function suma(num){
     let sum=0;
for(i=0;i < num.length;i++){
sum = sum+num[i];
}
 	return sum;
 }
console.log("La suma es:",suma(num));
function promedio(num){
 let pro=suma(num)/num.length
 return pro;
 }
 console.log("El promedio es:",promedio(num))
// 8)---------
// IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
// COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
// AL VALOR DEL STRING DEL ARGUMENTO
let str="domicilio"
obj={
nombre:"Elena",
domicilio:"Barrio 2 de abril"
}
 function objeto(obj,str){
for(const key in obj){
    if(key==str){
        return obj[key]
    }
}
 }
console.log(objeto(obj,str));
// Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
// 	Retorna 'Rosa'

// 9)---------
// IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
// LA SUMA DE TODOS SUS VALORES.

obj2={
    num1:25,
    num2:45
}
 function objeto2(obj2){
     resuobj=obj2.num1+obj2.num2;

 	return resuobj
 }
console.log("La suma de los valores del objeto es:",objeto2(obj2))