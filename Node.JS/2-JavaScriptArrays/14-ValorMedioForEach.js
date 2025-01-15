const lstNotas=[7,5,9,8,7.5,4,10,9,8,10];
let sumaNotas=0;
lstNotas.forEach(function(nota){
    console.log(nota);
    sumaNotas+=nota;//checar el obj del programa ojo 
});
const valorMedio = sumaNotas/ lstNotas.length;
console.log(`el valor de la media aritmetica usando For Each es  ${valorMedio.toFixed(2)}`);