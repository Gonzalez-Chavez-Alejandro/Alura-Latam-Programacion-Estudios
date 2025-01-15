
function sumaYPorcentaje(a, b) {
    let c = a + b;
    c*=10/100;
    function multiplicaNumeros(a,b){
       return a*b
    }
    return c+multiplicaNumeros(a,b);
}
function llamarTexto(texto='texto por defecto'){
    console.log(texto)
}
function Hola(){
    console.log('Hola!!')
}

const numero1 = sumaYPorcentaje(5,10);
//Ejecucion argfumentos ingresados
console.log(numero1);
console.log(sumaYPorcentaje(5,10));
Hola();
llamarTexto('Texto')