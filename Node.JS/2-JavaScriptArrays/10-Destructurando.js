const lstNotasAlumnos=[['Alex','luci','Tobias',"Isac"],
[9,8.5,9.5,10]];
const nombreAlumno ='Alex';

const[lsAlumnos,lstNotas]=lstNotasAlumnos;
console.log(lsAlumnos);
console.log(lstNotas);

console.log('..................................................................');
if(lsAlumnos.includes(nombreAlumno)){
    console.log('Alumno encontrado')
    const poscisionAlumno=lsAlumnos.indexOf(nombreAlumno);
    const notaAlumno=lstNotas[poscisionAlumno];
    console.log(poscisionAlumno);
    console.log(`la nota final del alumno ${nombreAlumno} es ${notaAlumno}`);
}else{
    console.log('Alumno no encontrado');
}

