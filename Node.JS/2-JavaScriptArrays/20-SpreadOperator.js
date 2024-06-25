
//Agregando elementos a un arreglo sin modificar el arreglo original 20-SpreadOperator.js
const notasIniciales = [7, 8, 4, 9, 6, 9];
const notasFinales = [...notasIniciales];//copea los elementos en un nuevo espacio de memoria 

notasFinales.push(10);
console.log(...notasIniciales);
console.log(...notasFinales);
