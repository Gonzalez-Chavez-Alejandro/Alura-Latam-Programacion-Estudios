const lstNotas=[7,5,9,8,7.5,4,10,9,8,10];
let sumaNotas=0;
for(let nota of lstNotas){
   console.log(nota);
    sumaNotas+=nota;
}
const valorMedio = sumaNotas/ lstNotas.length;
console.log(`el valor de la media aritmetica usando For of es  ${valorMedio.toFixed(2)}`);