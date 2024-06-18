var  nombreCompl = "Alejandro"
var ciudadDomicilio ="Mexico"
var fechaNacimiento ="13 de noviembre de 2023"

var fichaTEcnicaMod1='Nombre del producto \n\
Codigo del producto\n\
Valor';

var fichaTEcnicaMod2='Nombre del producto '+
'Codigo del producto'
+'Valor';

var fichaTEcnicaMod3 = `Modo 3: 
Nombre del producto
Codigo del producto
Valor`;//comillas invertidas

console.log(nombreCompl.toLowerCase());                //.toLowerCase() todo minusculas
console.log(ciudadDomicilio.toUpperCase());            //.toUpperCase() mayusculas
console.log(fechaNacimiento.length);                   // cuanta el numero de  caracteres

//console.log(fichaTEcnicaMod1);
//console.log(fichaTEcnicaMod2);
console.log(fichaTEcnicaMod3);
console.log("-----------------------------------------------");

const simboloPeso = '\u0024'
const aMayusculo = '\u0041'
const check = '\u2705'
const hiragana = '\u3041'

console.log(simboloPeso)
console.log(aMayusculo)
console.log(check)
console.log(hiragana)