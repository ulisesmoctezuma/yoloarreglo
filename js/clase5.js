/*Instanciar un objeto mediante el constructor genérico
const objeto = new Object();
*/

/*Crear un objeto literal

const personaje = {
    nombre: "Leonard Hoffstatder",
    edad: 41,
    ci: 173

}
*/

/*Obtener valores del objeto, mediante notación de punto y de corchete

console.log(personaje.nombre);
console.log(personaje["edad"]);


/*Crear una funcion constructor

function Persona(first, last, age, iq, nicknames) {
    this.nombre = {
        'first': first,
        'last': last
    };
    this.edad = age;
    this.ci = iq;
    this.apodos = nicknames;
}

/*Instanciar un objeto mediante constructor
const persona1 = new Persona("Sheldon", "Cooper", 41, 187, ["Shelly", "Sweetie", "Moonpie", "Dr Dumbass", "The Skinny Weirdo"]);
*/

/*Recuperar valores mediante un for
console.log(persona1.nombre.first,persona1.nombre.last);

for (let i = 0; i < persona1.apodos.length; i++) {
    console.log("A "+persona1.nombre.first+" lo apodan: "+ persona1.apodos[i]);
}
*/

/*Crear una clase

class Auto {


    constructor(marca, nombre, modelo, combustible, puertas, precio) {
        this.marca = marca;
        this.nombre = nombre;
        this.modelo = modelo;
        this.combustible = combustible;
        this.puertas = puertas;
        this.precio = precio;

    }

    arrancar() {
        console.log("Me puse en movimiento");
    }

    frenar() {
        console.log("Me detuve");
    }
    hablar() {
        console.log("Soy un", this.marca, this.nombre, "y cuesto $" + this.precio);
    }

    calcularSegmento() {
        if (this.precio > 1800000) {
            this.segmento = "premium";
            console.log("Soy premium, maestro");
        } else {
            this.segmento = "económico";
            console.log("Soy un auto proletario");
        }
    }
}
*/

/*Instanciar un objeto mediante una clase
const auto1 = new Auto("Volkswagen", "Gol Trend", 2018, "nafta", 5, 2000000);
*/

/*Utilizar métodos del objeto
auto1.arrancar();
auto1.hablar();
//auto1.calcularSegmento();
*/

/* Ejemplo en vivo
class Fruta {

    constructor(nombre, color, textura, peso, sabor, duracion) {
        this.nombre = nombre;
        this.color = color;
        this.textura = textura;
        this.peso = peso;
        this.sabor = sabor;
        this.duracion = duracion;
    }

    pudrirse() {
        if (this.duracion > 5) {
            console.log("Me pudrí, ya no soy comestible");
        }else{
            console.log("Soy comestible");
        }
    }
}

const fruta1 =new Fruta("banana","amarillo", "pastosa",300,"dulce",10);

//fruta1.pudrirse();

fruta1.duracion = parseInt(prompt("Ingrese dias de su fruta"));

fruta1.pudrirse();
*/