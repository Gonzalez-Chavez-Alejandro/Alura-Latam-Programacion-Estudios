//Obtener la media Aritmetica de 3 secciones 19-Reduce.js
//recorrer todo el arreglo y obtener una variable por medio de call back, la sumatoria

const lstSecA = [9, 8, 6, 5, 7, 9];
const lstSecB = [4, 9, 2, 9, 7, 6, 9];
const lstSecC = [9, 8, 9, 7, 2, 3, 6, 7];

const sumaSeccion = (lst) => {
    return lst.reduce((prev, act) => prev + act, 0);//el 0 es el valor inicial; 
}
//---------------------------------------------------------------------------
sumaTotal = sumaSeccion(lstSecA) + sumaSeccion(lstSecB) + sumaSeccion(lstSecC);
totalElementos = lstSecA.length + lstSecB.length + lstSecC.length;
const valorMedia1 = sumaTotal / totalElementos;
console.log(`El valor de la media de las 3 secciones es:${valorMedia1.toFixed(2)}`);


console.log('**********************************************************************')
const valorMedia2 = (sumaSeccion(lstSecA) + sumaSeccion(lstSecB) + sumaSeccion(lstSecC)) / (lstSecA.length + lstSecB.length + lstSecC.length)
console.log(`El valor de la media de las 3 secciones es:${valorMedia2.toFixed(2)}`); 


