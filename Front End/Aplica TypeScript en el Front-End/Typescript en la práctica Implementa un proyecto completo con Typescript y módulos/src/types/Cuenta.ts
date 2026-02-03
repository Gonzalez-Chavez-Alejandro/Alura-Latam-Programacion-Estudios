import { TipoTransaccion } from "./TipoTransaccion.js";
import { Transaccion } from "./Transaccion.js";

let saldo: number = 3000;

const transacciones: Transaccion[] =JSON.parse(localStorage.getItem("transacciones"),(key:string, value:string)=>{
    if (key == "fecha"){
        return new Date (value);
    }
    return value;
})|| [];

function debitar (valor:number){
    if (valor <= 0) {
        throw new Error("El valor a se debitado debe de ser mayor que cero");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }

    saldo -= valor;
}
function depositar(valor:number){
    if (valor <= 0) {
        throw new Error("El valor a ser depositado debe de ser mayor que cero");
    }
    saldo += valor;
}

const Cuenta={
    getSaldo(){
        return saldo;
    },
    getFechaDeAcceso():Date{
        return new Date();
    },
    registrarTransaccion(nuevaTransaccion:Transaccion):void{
        if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.DEPOSITO) {
                depositar(nuevaTransaccion.valor);
            } else if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.TRANSFERENCIA || nuevaTransaccion.tipoTransaccion == TipoTransaccion.PAGO_FACTURA) {
                debitar(nuevaTransaccion.valor);
            } else {
                throw new Error("Tipo de transacción invalido");
            } 
            console.log("Transacción registrada con éxito", nuevaTransaccion);
            transacciones.push(nuevaTransaccion);
            localStorage.setItem("TRANSACCIONES",JSON.stringify(transacciones))
    }
}
export default Cuenta;