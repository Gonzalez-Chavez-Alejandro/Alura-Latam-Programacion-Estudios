const lstAlumnos =['Leonardo', 'Jose','diego','Alejandro'];
const lstNotas=[8,5,6,5];
const lstAlumnosReprobados=lstAlumnos.filter((e,i)=>lstNotas[i]<6);
console.log(lstAlumnos);
console.log(lstAlumnosReprobados);