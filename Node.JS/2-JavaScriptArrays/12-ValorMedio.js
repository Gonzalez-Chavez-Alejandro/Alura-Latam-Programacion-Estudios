const lstNotas=[7,5,9,8,7.5,4,10,9,8,10];
let sumaNotas=0;
for(let i =0;   i<lstNotas.length;i++){
    sumaNotas+=lstNotas[i];
   
}
const mediaAritmetica= sumaNotas/lstNotas.length;
console.log(`El valor de la media aritmetica de la lista es ${mediaAritmetica.toFixed(2)}`)