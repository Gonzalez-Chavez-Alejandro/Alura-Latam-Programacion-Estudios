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