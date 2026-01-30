let valor = 3000;
valor = 22;
let nombre = "Juan";
let isPago = true;
let cualquiera = "22";
cualquiera = "comida";
const lista = [];
//arrays
lista.push(22, 55, 22, 44, 66);
//Tipos personalizados (typebank.ts)
//Restringir los tipos de datos y que nombres espesificos deben de tener las propiedades de un objeto.
var TipoTransaccion;
(function (TipoTransaccion) {
    TipoTransaccion["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransaccion["TRANSFERENCIA"] = "Transferencia";
    TipoTransaccion["PAGO_FACTURA"] = "Pagamento de Boleto";
})(TipoTransaccion || (TipoTransaccion = {}));
const nuevaTransaccion = {
    tipoTransaccion: TipoTransaccion.DEPOSITO,
    fecha: new Date(),
    valor: 0,
};
console.log(nuevaTransaccion);
