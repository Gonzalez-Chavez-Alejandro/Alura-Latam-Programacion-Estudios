import { TipoTransaccion } from "./TipoTransaccion.js";
let saldo = 3000;
function debitar(valor) {
    if (valor <= 0) {
        throw new Error("El valor a se debitado debe de ser mayor que cero");
    }
    if (valor > saldo) {
        throw new Error("Saldo insuficiente");
    }
    saldo -= valor;
}
function depositar(valor) {
    if (valor <= 0) {
        throw new Error("El valor a ser depositado debe de ser mayor que cero");
    }
    saldo += valor;
}
const Cuenta = {
    getSaldo() {
        return saldo;
    },
    getFechaDeAcceso() {
        return new Date();
    },
    registrarTransaccion(nuevaTransaccion) {
        if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.DEPOSITO) {
            depositar(nuevaTransaccion.valor);
        }
        else if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.TRANSFERENCIA || nuevaTransaccion.tipoTransaccion == TipoTransaccion.PAGO_FACTURA) {
            debitar(nuevaTransaccion.valor);
        }
        else {
            throw new Error("Tipo de transacción invalido");
        }
        console.log("Transacción registrada con éxito", nuevaTransaccion);
    }
};
export default Cuenta;
