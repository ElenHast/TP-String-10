/*6. Hacer un programa que permita contar la cantidad de palabras que
comienzan con “P” de una cadena de caracteres.*/

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
