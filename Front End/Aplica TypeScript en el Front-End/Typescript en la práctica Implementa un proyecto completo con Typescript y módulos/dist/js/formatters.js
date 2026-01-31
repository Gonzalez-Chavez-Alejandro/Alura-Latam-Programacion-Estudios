function formatearMoneda(valor) {
    return valor.toLocaleString("en-US", { currency: "USD", style: "currency" });
}
function formatearValorFecha(fecha) {
    return fecha.toLocaleDateString("es-ES", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
