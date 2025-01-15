//convertir todos los nombres de los alumnos a mayusculas 17-MapString.js

const alumnos=['Leonardo Jose','diego','Alejandro',]

const alumnosCorregidos = alumnos.map((alumno,i)=>{
    console.log(i);
    return alumno.toUpperCase();
});

console.log(alumnosCorregidos);








