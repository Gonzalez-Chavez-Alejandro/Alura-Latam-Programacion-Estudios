let valor =3000;

valor=22;

let nombre:string="Juan";

let isPago:boolean=true;

let cualquiera:any="22";

cualquiera="comida";

const lista:number[]=[];

//arrays

lista.push(22, 55, 22, 44, 66);
 
//Tipos personalizados (typebank.ts)
//Restringir los tipos de datos y que nombres espesificos deben de tener las propiedades de un objeto.

enum TipoTransaccion{
    DEPOSITO="Depósito",
    TRANSFERENCIA ="Transferencia",
    PAGO_FACTURA="Pagamento de Boleto"
}
type Transaccion={
    tipoTransaccion:TipoTransaccion,
    fecha:Date,
    valor:number
}

const nuevaTransaccion :Transaccion = {
    tipoTransaccion:TipoTransaccion.DEPOSITO,
    fecha:new Date(),
    valor:0,
}
console.log(nuevaTransaccion);


