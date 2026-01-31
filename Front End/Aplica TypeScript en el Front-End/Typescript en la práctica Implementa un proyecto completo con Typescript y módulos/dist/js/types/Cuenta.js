import { TipoTransaccion } from "./TipoTransaccion.js";
let saldo = 3000;
const Cuenta = {
    getSaldo() {
        return saldo;
    },
    getFechaDeAcceso() {
        return new Date();
    },
    registrarTransaccion(nuevaTransaccion) {
        if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.DEPOSITO) {
            saldo += nuevaTransaccion.valor;
        }
        else if (nuevaTransaccion.tipoTransaccion == TipoTransaccion.TRANSFERENCIA || nuevaTransaccion.tipoTransaccion == TipoTransaccion.PAGO_FACTURA) {
            saldo -= nuevaTransaccion.valor;
        }
        else {
            alert("Tipo de transacción invalida");
            return;
        }
        console.log("Transacción registrada con éxito", nuevaTransaccion);
    }
};
export default Cuenta;
