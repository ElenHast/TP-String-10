/*1. Escriba un script que lea una secuencia de caracteres terminada en “punto” e informe la cantidad de caracteres leídos.*/



var string01 = "Hola mundo.";
var i = 0;
while (string01[i] != ".") {
  i++;
}
console.log("Cuantos caracteres tiene Hola mundo hasta el punt --> ${i}");
