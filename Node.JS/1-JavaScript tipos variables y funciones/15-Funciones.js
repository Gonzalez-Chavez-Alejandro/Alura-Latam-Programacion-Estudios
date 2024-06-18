
function sumaYPorcentaje(a, b) {
    let c = a + b;
    c*=10/100;
    function multiplicaNumeros(a,b){
       return a*b
    }
    return c+multiplicaNumeros(a,b);
}

const numero1 = sumaYPorcentaje(5,10);

console.log(numero1);
console.log(sumaYPorcentaje(5,10));
/*
Math.round(): redondea un número de punto flotante al entero más cercano.
Math.round(4.3) devuelve 4
Math.round(3.85) devuelve 4
Math.round(2.5) devuelve 3, cuando el número termina en 0.5 la función redondea hacia arriba
Math.ceil(): Redondea al valor más alto, también conocido como techo (ceil en inglés).
Math.ceil(5.2) devuelve 6
Math.floor(): Redondea hacia abajo al valor más bajo, también conocido como el piso.
Math.floor(5.2) devuelve 5
Math.trunc() : Ignora los números decimales, lo que se conoce como truncamiento.
Math.trunc(4.3) devuelve 4
Math.trunc(4.8) devuelve 4
Math.pow() : Hace la exponenciación de 2 números, cuando es simple, como cuadrado(2) o cubo(3). Se recomienda utilizar la multiplicación ya que es más rápido.
Math.pow(4 , 2) devuelve 4^2 = 16
Math.pow(2.5 , 1.5) devuelve 2.5^(3/2) = 3.9528 ...
Math.sqrt() : Devuelve la raíz cuadrada de un número.
Math.sqrt(64) devuelve 8
Math.min() : Devuelve el valor más pequeño entre los argumentos.
Math.min(0, 150, 30, 20, -8, -200) devuelve -200
Math.max() : Devuelve el valor más grande entre los argumentos.
Math.max(0, 150, 30, 20, -8, -200) devuelve 150
Math.random(): Devuelve un valor aleatorio entre 0 y 1, por lo que no tendremos un valor esperado para recibir.
Math.random() devuelve 0.7456916270759015
Math.random() devuelve 0.15449802102729304
Math.random() devuelve 0.4214269561951203
*/
