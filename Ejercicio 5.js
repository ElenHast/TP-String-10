/*5. Hacer un script que permita contar la cantidad de palabras que tienen más de tres caracteres. */


var string05 = "Hola pez te muerde el pie cuando los pones en el agua.";
var i = 0;
var words3 = 0;
while (string05[i] !== ".") {
  if(string05[i] !== " " && string05[i] !== "." ){i++;}
  if(string05[i] !== " " && string05[i] !== "."){i++;}
  if(string05[i] !== " " && string05[i] !== "."){}else{words3++;}
  i++;
}

console.log(words3-2);
//Cuenta palabras de 3 maso menos xD

//Hecho funcion esta vez si contando palabras de 3 caracteres o mas como pedia la resolucion del ejercicio.
function texto(texto) {
  let palabras = 0;
  let i = 0;
  let caracteres = 0;
  while (i < texto.length) {
    while(texto[i] == " ") {
      i++;
    }
    while(texto[i] != " " && i < texto.length) {
      i++;
      caracteres++;
    }
    if(caracteres >= 3){
      palabras++;
    }
    caracteres = 0;
  }
  return palabras;
}

console.log(texto("Hola como andas todo bien chamigo"));
