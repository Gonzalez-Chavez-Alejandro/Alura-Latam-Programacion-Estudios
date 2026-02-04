class Persona {
    //atributos los datos que tiene el objeto
    //Atributos:Nombre y edad
    constructor(nombreNuevo, edadNueva) {
        this.nombreNuevo = nombreNuevo;
        this.edadNueva = edadNueva;
    }
    //Metodos
    saludar() {
        console.log(`Hola, me llamo ${this.nombreNuevo} y tengo ${this.edadNueva} años.`);
    }
}
 const juan = new Persona("Juan", 30)
 juan.saludar();

 const eliasna= new Persona("Eliana",20)
 eliasna.saludar();

 class Estudiante extends Persona{
    constructor(nombreNuevo, edadNueva, carreraNueva){
        this.carreraNueva =carreraNueva;
        super(nombreNuevo, edadNueva);//Para acceder y llamar a métodos o al constructor de la clase padre
    }

    estudiar(){
        console.log(`${this.nombreNuevo} en la carrera de ${this.carreraNueva}`);
    }
 }

 const luis = new Estudiante("Luis", 22, "Ingenieria de Sistemas");
 luis.estudiar();//Luis en la carrera de Ingenieria de Sistemas