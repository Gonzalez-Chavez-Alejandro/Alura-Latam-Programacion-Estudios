const nombre= "harland"
const apellido = "lohora"

const usuario={
    nombre:"Harland",
    apellido:"Lohara",
    edad:28,
    soltero:true,
    comidasFaoritas:["Tacos","Tacos al pastor"]
}
console.log(usuario.apellido.length)


if(usuario.edad>+18){
    console.log("Permitido");
}