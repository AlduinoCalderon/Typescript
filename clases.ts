import { consoleTestResultHandler } from "tslint/lib/test";

class Persona{
    constructor(public nombre: string, public edad: number){}
    saludo=():string=>{
        return `Hola ${this.nombre} edad: ${this.edad}`;
    }
}

class OtraPersona{
    private nombre : string; 
    private edad: number;
    constructor( nombre: string,  edad: number){
        this.edad = edad;
        this.nombre = nombre;
    }
    saludo=():string=>{
        return `Hola ${this.nombre} edad: ${this.edad}`;
    }
}
const persona1 = new OtraPersona("Maria Juana", 420);
const persona2 = new Persona("Sexy Tony", 69);
console.log(persona1.saludo(),"\n",persona2.saludo());
