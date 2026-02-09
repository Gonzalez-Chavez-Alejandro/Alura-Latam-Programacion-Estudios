

const Imagen = ({archivoImagen, titulo}) => {
  return (
    <figure className="imagenGaleria">
         <img src={archivoImagen} alt="imagen" />
         <figcaption>
            <h3>{titulo}</h3>
         </figcaption>
    </figure>
      
   
  )
}

export default Imagen
