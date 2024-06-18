const lstNotasAlumnos=[['Alex','luci','Tobias',"Isac",'Noa'],
[9,8.5,9.5,10]];
const nombreAlumno ='Alex';

if(lstNotasAlumnos[0].includes(nombreAlumno)){
    console.log('Alumno encontrado')
    const poscisionAlumno=lstNotasAlumnos[0].indexOf(nombreAlumno);
    const notaAlumno=lstNotasAlumnos[1] [poscisionAlumno];
    console.log(poscisionAlumno);
    console.log(`la nota final del alumno ${nombreAlumno} es ${notaAlumno}`);
}else{
    console.log('Alumno no encontrado')
}

