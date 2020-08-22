/*8. Hacer un script que dado una cadena de caracteres genera una nueva
cadena con todas las palabras que comienzan con el caracter “A” y finalizan
con el caracter “R”.*/

function cadenaAR(texto) {
  let i = 0;
  let palabra;
  let cantidad = 0;
  let lista = "";
  while (texto[i]!="."){
   while(texto[i]==" "){
     i++;
   }
   palabra = "";
   while(texto[i]!=" "&&texto[i]!="."){
     palabra = palabra+texto[i];
     i++;
   }
   
   if(palabra.endsWith("ar")){
     lista = lista+" "+palabra;
   }
  }
}

let texto = "Afilar y adornar el cuchillo.";
let i = 0;
let palabra;
let cantidad = 0;
let lista = "";
while (texto[i]!="."){
 while(texto[i]==" "){
   i++;
 }
 palabra = "";
 while(texto[i]!=" "&&texto[i]!="."){
   palabra = palabra+texto[i];
   i++;
 }
 
 if(palabra.endsWith("ar")){
   lista = lista+" "+palabra;
    
   console.log(lista);
 }
}
