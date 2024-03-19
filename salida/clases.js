"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.saludo = () => {
            return `Hola ${this.nombre} edad: ${this.edad}`;
        };
    }
}
class OtraPersona {
    constructor(nombre, edad) {
        this.saludo = () => {
            return `Hola ${this.nombre} edad: ${this.edad}`;
        };
        this.edad = edad;
        this.nombre = nombre;
    }
}
const persona1 = new OtraPersona("Maria Juana", 420);
const persona2 = new Persona("Sexy Tony", 69);
console.log(persona1.saludo(), "\n", persona2.saludo());
//# sourceMappingURL=clases.js.map