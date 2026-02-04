// Clase base Personaje
class Personaje {
  nombre: string;
  nivel: number;
  vida: number;
  experiencia: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.nivel = 1;
    this.vida = 100;
    this.experiencia = 0;
  }

  atacar(objetivo: Personaje): void {
    const daño = Math.floor(Math.random() * 11) + 5; // Daño entre 5 y 15
    objetivo.defender(daño);
    console.log(`${this.nombre} ataca a ${objetivo.nombre} y le hace ${daño} de daño.`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha sido derrotado.`);
      this.ganarExperiencia(20);
    }
  }

  defender(daño: number): void {
    this.vida -= daño;
    console.log(`${this.nombre} recibe ${daño} de daño. Vida restante: ${this.vida}`);
  }

  ganarExperiencia(puntos: number): void {
    this.experiencia += puntos;
    console.log(`${this.nombre} gana ${puntos} puntos de experiencia.`);
  }
}

// Clase hija Guerrero
class Guerrero extends Personaje {
  fuerza: number;
  armadura: string;

  constructor(nombre: string, fuerza: number, armadura: string) {
    super(nombre);
    this.fuerza = fuerza;
    this.armadura = armadura;
  }

  atacar(objetivo: Personaje): void {
    const dañoBase = Math.floor(Math.random() * 11) + 5; // 5 a 15
    const dañoTotal = dañoBase + this.fuerza; // El guerrero hace más daño por su fuerza
    objetivo.defender(dañoTotal);
    console.log(`${this.nombre} (Guerrero) ataca a ${objetivo.nombre} con su espada y le hace ${dañoTotal} de daño.`);

    if (objetivo.vida <= 0) {
      console.log(`${objetivo.nombre} ha sido derrotado por ${this.nombre}.`);
      this.ganarExperiencia(30);
    }
  }

  usarArmadura(): void {
    console.log(`${this.nombre} usa su armadura de ${this.armadura} y reduce el daño recibido.`);
  }

  defender(daño: number): void {
    const reduccion = 5; // La armadura reduce 5 puntos de daño
    const dañoReducido = Math.max(0, daño - reduccion);
    this.vida -= dañoReducido;
    console.log(`${this.nombre} bloquea con su armadura y solo recibe ${dañoReducido} de daño. Vida restante: ${this.vida}`);
  }
}

// --- Ejemplo de combate ---
const heroe = new Personaje("Carlos");
const enemigo = new Guerrero("Thor", 7, "acero");

heroe.atacar(enemigo);
enemigo.atacar(heroe);
heroe.atacar(enemigo);
enemigo.atacar(heroe);
