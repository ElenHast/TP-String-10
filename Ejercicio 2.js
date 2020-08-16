/*2. Escriba un script que lea una secuencia de caracteres terminada en “punto” e informe la cantidad de letras 'f' leídas.*/


var string02 = "Mi sabor favorito de helado es la frambuesa.";
var cantidadDeF = 0;
for (var i = 0; i < string02.length; i++) {
  if (string02[i] == "f") {
    cantidadDeF++;
  }
}
console.log("La cantidad de letras F que hay en el string es de -->",cantidadDeF);
