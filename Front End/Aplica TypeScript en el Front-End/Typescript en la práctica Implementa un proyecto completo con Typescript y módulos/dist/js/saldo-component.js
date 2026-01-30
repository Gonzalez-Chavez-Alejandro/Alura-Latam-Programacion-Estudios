let saldo = 3000;
const elementoFecha = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toLocaleString("en-US", { currency: "USD", style: "currency" });
}
if (elementoFecha) {
    const fechaAcceso = new Date();
    elementoFecha.textContent = fechaAcceso.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
