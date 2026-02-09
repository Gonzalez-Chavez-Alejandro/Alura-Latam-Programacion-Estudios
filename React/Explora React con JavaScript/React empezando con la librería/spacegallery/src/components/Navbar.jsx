import Busqueda from "./Busqueda"

const Navbar = () => {
  return (
    <div>
       <div className="header">
            <img src="img/logo.png" alt="Logo de Space App"/>
            <Busqueda></Busqueda>
        </div>
    </div>
  )
}

export default Navbar

