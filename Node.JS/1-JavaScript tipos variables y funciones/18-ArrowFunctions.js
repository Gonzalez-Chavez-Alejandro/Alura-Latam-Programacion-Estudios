
const multiplicaNumeros = function (a, b, c) {
    const resultado = a * b * c
    return resultado;
}
console.log(multiplicaNumeros(1, 2, 3));

//Arrow Functiuon 
const multiplicaArrow = (a, b, c) => a * b * c;

const potenciaDe2 = numero => numero * numero;


const funcion1=()=>{
    //this
    const funcion2=()=>{
        //this
        
    }
}

/*
¿Qué son las funciones? Son pequeñas piezas de código que se pueden ejecutar una o más veces.
Las ventajas de usar una función: con ellas podemos hacer el código más corto y legible, facilitando el mantenimiento.
¿Cómo devolver información desde la función? Usando return, recordando que console.log() solo muestra la información en la terminal y no para otras partes del código.
La utilidad de los argumentos, ya que con ellos podemos pasar variables para que las funciones puedan usar los valores.
Que con el hoisting JavaScript analiza todo el código buscando variables declaradas con var y funciones para llevar dichas declaraciones al principio del código.
Expresiones de función, una forma diferente de construir funciones usando variables de tipo const y llamándolas por su nombre. Recordando que es necesario que el programa pase por la variable antes de que podamos llamarla, ya que no hay soporte para hosting.
Función de flecha, una función declarada de manera más compacta usando una const. La función de flecha tampoco admite hoisting.
*/