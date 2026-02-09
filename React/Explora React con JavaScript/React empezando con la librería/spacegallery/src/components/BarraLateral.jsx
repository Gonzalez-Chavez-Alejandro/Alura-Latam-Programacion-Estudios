import ItemMenu from "./ItemMenu"


const BarraLateral = () => {
  return (
    <div>
      <aside>
        <nav>
            <ul className="listaMenu">
                <ItemMenu textoMenu="Inicio"></ItemMenu>
                <ItemMenu textoMenu="Mas vistas"></ItemMenu>
                <ItemMenu textoMenu="Favoritas"></ItemMenu>
                <ItemMenu textoMenu="Nuevas"></ItemMenu>
                <ItemMenu textoMenu="Sorprendeme"></ItemMenu>
            </ul>
        </nav>
      </aside>
    </div>
  )
}

export default BarraLateral
