import saldoComponent from "./saldo-component.js";
import Cuenta from "../types/Cuenta.js";
const elementoFormulario = document.querySelector(".block-nueva-transaccion form");
const campos = elementoFormulario.querySelectorAll(".campo-input");
campos.forEach(campo => campo.classList.remove("campo-error"));
elementoFormulario.addEventListener("submit", function (event) {
    try {
        event.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, rellene todos los campos de la transacción");
            campos.forEach(campo => { if (!campo.checkValidity()) {
                campo.classList.add("campo-error");
            } });
            return;
        }
        const inputTipoTransaccion = elementoFormulario.querySelector("#tipoTransaccion");
        const inputValor = elementoFormulario.querySelector("#valor");
        const inputFecha = elementoFormulario.querySelector("#fecha");
        let tipoTransaccion = inputTipoTransaccion.value;
        let valor = inputValor.valueAsNumber;
        let fecha = new Date(inputFecha.value);
        const nuevaTransaccion = {
            tipoTransaccion: tipoTransaccion,
            valor: valor,
            fecha: fecha,
        };
        Cuenta.registrarTransaccion(nuevaTransaccion);
        saldoComponent.actualizar();
        elementoFormulario.reset();
    }
    catch (error) {
        alert(error.message);
    }
});
