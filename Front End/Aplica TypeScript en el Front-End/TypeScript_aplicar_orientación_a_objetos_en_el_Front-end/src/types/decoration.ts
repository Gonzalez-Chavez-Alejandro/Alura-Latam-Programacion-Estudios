function MayorDeEdad(constructor: Function) {
  constructor.prototype.esMayorDeEdad = function() {
    return this.edad >= 18;
  }
}

@MayorDeEdad
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }
}

const persona1 = new Persona("Juan", 30);
console.log((persona1 as any).esMayorDeEdad()); // true
