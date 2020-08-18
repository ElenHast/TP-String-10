/*6. Hacer un programa que permita contar la cantidad de palabras que
comienzan con “P” de una cadena de caracteres.*/

// Una prueba de como podria ser.
function contarLetraP(texto){
  let i = 0;
  let palabrasConP = 0;
  let palabras;
  while(texto[i] != "."){
    while (texto[i] == " "){
      i++;
    }
    palabras = "";
    while(texto[i]!=" " && texto[i]!="."){
      palabras = palabras+texto[i];
      i++;
    }
    if (palabras.length > 0 && palabras[0]=="p" || palabras[0]=="P"){
      palabrasConP++;
    }
  }
  return palabrasConP;
}

console.log(contarLetraP("Comiendo papas estaba el papa amigo de mi Papa."));
