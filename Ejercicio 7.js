/*7. Hacer un script que permita contar la cantidad de palabras que finalice con
“A” de una cadena de caracteres.*/

let texto = "Gustava la come papa.";
let i = 0;
let palabra;
let palabraA = 0;
while (texto[i]!="."){
  while(texto[i]==" "){
    i++;
  }
  palabra = "";
  while(texto[i]!=" "&&texto[i]!="."){
    palabra = palabra+texto[i];
    i++;
  } 
  //console.log("la palabra procesada es",palabra);
  //console.log(palabra.length-1)
  if(palabra.charAt(palabra.length-1) == "a"){
    palabraA++;
  }
  //console.log(palabraA);
}

console.log("Cuantas palabras terminan en A =",palabraA);
