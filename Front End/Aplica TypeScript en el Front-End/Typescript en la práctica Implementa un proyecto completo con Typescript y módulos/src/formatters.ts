function formatearMoneda(valor: number): string {
    return valor.toLocaleString("en-US", { currency: "USD", style: "currency" });

}
function formatearValorFecha(fecha: Date, formato: FormatoFecha = FormatoFecha.PATRON): string {
    if (formato === FormatoFecha.DIA_SEMANA_DIA_MES_YEAR) {

        return fecha.toLocaleDateString("es-ES", {
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        });
    }else if (formato === FormatoFecha.DIA_MES) {
        return fecha.toLocaleDateString("es-ES", {
            day: "2-digit",
            month: "2-digit"
        });
    }
    return fecha.toLocaleDateString("es-ES");
}
