/*4. Hacer un script que permita leer una secuencia de caracteres terminada en “punto” e informe la cantidad de palabras que tiene. */



var string04 = "Hola mundo.";
var i = 0;
var palabras = 0;
while (string04[i] != ".") {
  while (string04[i] == " ") {i++;}
  while (string04[i] != " " && string04[i] != ".") {i++;}
  palabras++;
}
console.log("La cantidad de palabras es de:", palabras);
