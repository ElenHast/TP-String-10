/*3. Escriba un script que lea una secuencia de caracteres terminada en “punto” e informe la cantidad de letras 'v' leídas seguidas por una 'a'. */


var string03 = "Ahi va mi valija en ese avion.";
var i = 0;
var cantidad = 0;
while (string03[i] != ".") {
  if (string03[i] == "v") {
    if (string03[i+1] == "a") {
      cantidad++;
    }
  }
  i++; //incremento el indice
}
console.log("la cantidad de caracteres v seguidos de a",cantidad);
