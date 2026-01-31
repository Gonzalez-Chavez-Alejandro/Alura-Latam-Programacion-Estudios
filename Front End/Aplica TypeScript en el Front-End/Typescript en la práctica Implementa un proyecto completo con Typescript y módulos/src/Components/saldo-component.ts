import { FormatoFecha } from "../types/FormatoFecha.js";
import { formatearMoneda, formatearValorFecha } from "../utils/formatters.js";
import Cuenta from "../types/Cuenta.js";

const elementoFecha = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;

if (elementoFecha) {
    elementoFecha.textContent = formatearValorFecha(Cuenta.getFechaDeAcceso(), FormatoFecha.DIA_SEMANA_DIA_MES_YEAR);
}

renderizarSaldo();

export function renderizarSaldo(): void {
    if (elementoSaldo != null) {
        elementoSaldo.textContent = formatearMoneda(Cuenta.getSaldo());
    }
}  

const saldoComponent={
    actualizar(){
        renderizarSaldo();
    }
}
export default saldoComponent;