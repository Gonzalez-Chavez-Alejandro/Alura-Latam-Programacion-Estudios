import { TipoTransaccion } from "../types/TipoTransaccion.js";
import { Transaccion } from "../types/Transaccion.js";
import { actualizarSaldo, getSaldo } from "./saldo-component.js";

const elementoFormulario = document.querySelector(".block-nueva-transaccion form") as HTMLFormElement;
const campos = elementoFormulario.querySelectorAll<HTMLInputElement>(".campo-input");

campos.forEach(campo => campo.classList.remove("campo-error"));
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, rellene todos los campos de la transacción");
        campos.forEach(campo => { if (!campo.checkValidity()) { campo.classList.add("campo-error"); } });
        return;
    }

    const inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputFecha = elementoFormulario.querySelector("#fecha") as HTMLInputElement;

    let tipoTransaccion = inputTipoTransaccion.value as TipoTransaccion;
    let valor: number = inputValor.valueAsNumber;
    let fecha: Date = new Date(inputFecha.value);
    let saldo: number = getSaldo();

    if (tipoTransaccion == TipoTransaccion.DEPOSITO) {
        saldo += valor;
    } else if (tipoTransaccion == TipoTransaccion.TRANSFERENCIA || tipoTransaccion == TipoTransaccion.PAGO_FACTURA) {
        saldo -= valor;
    } else {
        alert("Tipo de transacción invalida");
        return;
    }

    actualizarSaldo(saldo);

    const nuevaTransaccion: Transaccion = {
        tipoTransaccion: tipoTransaccion,
        valor: valor,
        fecha: fecha,
    };

    console.log(nuevaTransaccion);
    elementoFormulario.reset();
});