/*6. Hacer un programa que permita contar la cantidad de palabras que
comienzan con “P” de una cadena de caracteres.*/

//Todavia sin terminar
var string06 = "Hola Pedro, como estas? pelando papas?.";
var i = 0;
var palabrasConP = 0;
while (string06 > i) {
  if(string06[i] == "p"){palabrasConP++;}else{i++;}
}

// Una prueba de como podria ser.
let unTexto = "Vamos a ver si ahora el programa funcion bien por las dudasp";
let i = 0;
let palabras = 0;
let caracteres = 0;
while(i < unTexto.length){
    while(unTexto[i] == " "){
        i++;
    }
    while(unTexto[i-1] == " "){
        if(unTexto[i] == "p" || unTexto[i] == "P"){
           palabras++;}
        i++;
    }
    i++;
}
console.log(palabras);
