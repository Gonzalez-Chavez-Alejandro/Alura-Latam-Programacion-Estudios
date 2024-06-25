
//Remover  los elementos duplicados de un arreglo 21.Repetidos.js
const lstAlumnos=['Jose','Maria','Jose','Luis','Jose','Maria'];

const lstAlumnosUnicos= [...(new Set(lstAlumnos))];
console.log(lstAlumnosUnicos);
//const lstAlumnosCorregida=[...lstAlumnosUnicos];
//console.log(lstAlumnosCorregida);
//El conjunto set maneja datos unicos


