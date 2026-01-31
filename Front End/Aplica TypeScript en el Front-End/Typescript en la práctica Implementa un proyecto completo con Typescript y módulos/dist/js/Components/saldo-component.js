import { FormatoFecha } from "../types/FormatoFecha.js";
import { formatearMoneda, formatearValorFecha } from "../utils/formatters.js";
let saldo = 3000;
const elementoFecha = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = formatearMoneda(saldo);
}
if (elementoFecha) {
    const fechaAcceso = new Date();
    elementoFecha.textContent = formatearValorFecha(fechaAcceso, FormatoFecha.DIA_SEMANA_DIA_MES_YEAR);
}
