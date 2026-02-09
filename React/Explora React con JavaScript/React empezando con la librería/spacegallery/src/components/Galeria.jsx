import React from 'react'
import Banner from './Banner'
import Imagen from './Imagen'

const Galeria = () => {
  return (
    <section className='galeria' >
      <Banner titulo={'La galeria mas completa de fotos del espacio'}></Banner>
      <h2 className='subtitulo'>Navega por la galeria </h2>
      <section className='imagenes'>
        <Imagen archivoImagen="img/Card_1.png" titulo="Imagen 1"></Imagen>
        <Imagen archivoImagen="img/Card_2.png" titulo="Imagen 2"></Imagen>
        <Imagen archivoImagen="img/Card_3.png" titulo="Imagen 3"></Imagen>
        <Imagen archivoImagen="img/Card_4.png" titulo="Imagen 4"></Imagen>
        <Imagen archivoImagen="img/Card_5.png" titulo="Imagen 5"></Imagen>
        <Imagen archivoImagen="img/Card_6.png" titulo="Imagen 6"></Imagen>
      </section>
    </section>
  )
}

export default Galeria
