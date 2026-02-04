function MayorDeEdad(constructor: Function) {
    constructor.prototype.esMayorDeEdad = function () {
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
//decorador de metodo
function RegistrarLlamada(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const metodooriginal = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Llamando al método ${propertyKey} fue llamado }`)
        return metodooriginal.apply(this, args);
    }
}
    class Vehiculo {
        marca: string;
        constructor(marca: string) {
            this.marca = marca;
        }
        @RegistrarLlamada
        arrancar() {
        console.log("${this.marca} ha arrancado");
    }
}
const miVehiculo = new Vehiculo("Toyota");
miVehiculo.arrancar();
//consola :
// Llamando al método arrancar fue llamado
// Toyota ha arrancado

