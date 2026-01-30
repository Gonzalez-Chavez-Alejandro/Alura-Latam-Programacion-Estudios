const elementoFormulario = document.querySelector(".block-nueva-transaccion form");
const campos = elementoFormulario.querySelectorAll(".campo-input");
campos.forEach(campo => campo.classList.remove("campo-error"));
elementoFormulario.addEventListener("submit", function (event) {
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
    if (tipoTransaccion == TipoTransaccion.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransaccion == TipoTransaccion.TRANSFERENCIA || tipoTransaccion == TipoTransaccion.PAGO_FACTURA) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transacción invalida");
        return;
    }
    elementoSaldo.textContent = saldo.toLocaleString("en-US", { currency: "USD", style: "currency" });
    const nuevaTransaccion = {
        tipoTransaccion: tipoTransaccion,
        valor: valor,
        fecha: fecha,
    };
    console.log(nuevaTransaccion);
    elementoFormulario.reset();
});
