import { FormatoFecha } from "../types/FormatoFecha.js";
import { formatearMoneda, formatearValorFecha } from "../utils/formatters.js";

let saldo:number = 3000;
const elementoFecha = document.querySelector(".block-saldo time") as HTMLElement;
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatearMoneda(saldo);
}

if (elementoFecha) {
    const fechaAcceso: Date = new Date();
    elementoFecha.textContent = formatearValorFecha(fechaAcceso,FormatoFecha.DIA_SEMANA_DIA_MES_YEAR);
}
