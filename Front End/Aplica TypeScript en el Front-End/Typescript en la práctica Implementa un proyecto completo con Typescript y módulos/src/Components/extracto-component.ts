import { GrupoTransaccion } from "../types/GrupoTransaccion.js";
import Cuenta from "../types/Cuenta.js";
import { formatearMoneda, formatearValorFecha } from "../utils/formatters.js";
import { FormatoFecha } from "../types/FormatoFecha.js";

const elementoRegistroTransaccionesExtracto: HTMLElement = document.querySelector(".extracto .registro-transacciones");
renderizarExtracto();
function renderizarExtracto(): void {
    const gruposTransacciones: GrupoTransaccion[] = Cuenta.getGrupoTransacciones();
    elementoRegistroTransaccionesExtracto.innerHTML = "";

    let htmlRegistroTransaccion: string = "";

    for (let grupoTransaccion of gruposTransacciones) {/*Recorre el for cada grupo */
        let htmlTransaccionItem: string = "";
        for (let transaccion of grupoTransaccion.transacciones) {/*Recorre el for de cada transaccion */
            htmlTransaccionItem += `
            <div class="transaccion-item">
                        <div class="transaccion-info">
                            <span class="tipo">${transaccion.tipoTransaccion}</span>
                            <strong class="valor">${formatearMoneda(transaccion.valor)}</strong>
                        </div>
                        <time class="fecha">${formatearValorFecha(transaccion.fecha, FormatoFecha.DIA_MES)}</time>
            </div>
            `;
        }
        htmlRegistroTransaccion += `
        <div class="transacciones-group">
            <strong class="mes-group">${grupoTransaccion.label}</strong>
            ${htmlTransaccionItem}
        </div>
        `
    }
    if (htmlRegistroTransaccion === "") {
        htmlRegistroTransaccion = "<div>No hay transacciones</div>"
    }
    elementoRegistroTransaccionesExtracto.innerHTML = htmlRegistroTransaccion;

}
const extractoComponent={
    actualizar(){
        renderizarExtracto();
    }
}
export default extractoComponent;