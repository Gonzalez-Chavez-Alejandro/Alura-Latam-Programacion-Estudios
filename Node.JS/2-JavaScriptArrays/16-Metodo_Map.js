const notas = [10, 9, 5, 3, 7, 9];

const notasActuales = notas.map((nota) => {
    notaNew = nota / 2;
    if (notaNew < 3)
        notaNew = 3;
    return notaNew;

});
console.log(notasActuales);

//otra forma


const notasActuales2 = notas.map((nota) => {
    notaNew = (nota / 2) < 3 ? 3 : (nota / 2);
    return notaNew;
});
console.log(notasActuales2);

// despues de los : retornamos 3, si no ? retornamos nota/2;
// notaNew = (nota / 2) < 3 ? 3 : (nota / 2);

//Mas  reducido 


const notasActuales3 = notas.map((nota) => (nota / 2) < 3 ? 3 : (nota / 2));
console.log(notasActuales3);





//Funcion de flecha.
//Metodo Map nos permite trasformar un arreglo en otro, procesa una funcion de callback toma un arreglo original y genera un nuevo arreglo.