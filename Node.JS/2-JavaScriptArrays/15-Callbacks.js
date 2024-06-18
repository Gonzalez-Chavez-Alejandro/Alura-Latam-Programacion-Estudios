const lstNombres=['Diego','Maria','Leonardo'];
//funcion anonima
lstNombres.forEach(function(nombre){
    console.log(nombre);
});
console.log('----Funcion  flecha----');
//Funcion  flecha arrow
lstNombres.forEach((nombre)=> {
    console.log(nombre);
});

//funcion reducida
lstNombres.forEach((nombre)=> console.log(nombre));

//Declaracion de funcion 
console.log('Declaracion funcion')

function imprimeNombres(nombres){
    console.log(nombres);
}

//Llamar la funcion 
lstNombres.forEach(imprimeNombres);

//Ejecucion de funcion 