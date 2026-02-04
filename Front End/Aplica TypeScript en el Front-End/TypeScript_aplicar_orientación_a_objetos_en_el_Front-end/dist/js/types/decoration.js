var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MayorDeEdad(constructor) {
    constructor.prototype.esMayorDeEdad = function () {
        return this.edad >= 18;
    };
}
let Persona = class Persona {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    esMayorDeEdad() {
        return this.edad >= 18;
    }
};
Persona = __decorate([
    MayorDeEdad
], Persona);
const persona1 = new Persona("Juan", 30);
console.log(persona1.esMayorDeEdad()); // true
