function correr() {

    class Hogar {
        constructor(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.habitaciones = habitaciones;
            this.banos = banos;
            this.otrosEspaciosLimpiar = otrosEspaciosLimpiar;
            this.habitantes = habitantes;
            this.mascotas = mascotas;
            this.frequenciaLimpieza = frequenciaLimpieza;
        }

        mostrarDatos() {
            alert("A continuación te mostramos los datos que ingresaste para tu cotización." + "\n" + "\n" + "Solicitante: " + this.nombre + "\n" +
                "Tipo de hogar: " + this.tipo + "\n" + "Habitaciones: " + this.habitaciones + "\n" + "Baños: " + this.banos + "\n" +
                "Otros espacios a limpiar: " + this.otrosEspaciosLimpiar + "\n" +
                "Habitantes: " + this.habitantes + "\n" + "Mascotas: " + this.mascotas + "\n" +
                "Frequencia mensual de limpieza: " + this.frequenciaLimpieza);
        };

        despedir() {
            alert(this.nombre + " gracias por cotizar con nosotros, esperamos pronto tener noticias tuyas, si deseas contratar nuestros servicios llama al 01800....")
        }
    }

    function capitalize(str) {
        const lower = str.toLowerCase();
        return str.charAt(0).toUpperCase() + lower.slice(1);
    }

    let preguntar = true;
    let nombre;
    let tipo;
    let habitaciones;
    let banos;
    let habitantes;
    let mascotas;
    let frequenciaLimpieza;
    const otrosEspacios = [
        "cocina",
        "comedor",
        "sala",
        "oficina",
        "cuarto de lavado"
    ];

    alert("Bienvenido, para cotizar con nosotros por favor ingresa los datos solicitados a continuación.");

    while (preguntar) {
        nombre = capitalize(prompt("Ingresa tu nombre:"));
        if (nombre != "") {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    while (preguntar) {
        tipo = capitalize(prompt("Quiero cotizar la limpieza de mi (casa o departamento):"));
        if ((tipo == "Casa") || (tipo == "Departamento")) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    while (preguntar) {
        habitaciones = parseInt(prompt(`¿Cuantas habitaciones tiene tu ${tipo.toLowerCase()}?`));
        if (habitaciones >= 1) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    while (preguntar) {
        banos = parseInt(prompt(`¿Cuantos baños tiene tu ${tipo.toLowerCase()}?`));
        if (banos >= 1) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    while (preguntar) {
        habitantes = parseInt(prompt(`¿Cuantas personas viven en tu ${tipo.toLowerCase()}?`));
        if (habitantes >= 1) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    while (preguntar) {
        mascotas = parseInt(prompt(`¿Cuantas mascotas viven en tu ${tipo.toLowerCase()}?`));
        if (mascotas >= 0) {
            break;
        } else {
            alert("Ingresa un número, sino tienes mascotas ingresa 0.");
            continue;
        }
    }

    while (preguntar) {
        frequenciaLimpieza = parseInt(prompt(`¿Cuantas veces al mes deseas que limpiemos tu ${tipo.toLowerCase()}?`));
        if (frequenciaLimpieza >= 1) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    const otrosEspaciosLimp = [];

    for (let espacios of otrosEspacios) {
        let respuestaOtroEspacio = prompt(`¿Deseas que limpiemos tu ${espacios}?\nResponde si/no`);
        if ((respuestaOtroEspacio == "si") || (respuestaOtroEspacio == "sí")) {
            let respuesta = espacios;
            otrosEspaciosLimp.push(respuesta);
        } else {
            continue;
        }
    }

    const otrosEspaciosLimpiar = otrosEspaciosLimp.join(", "); // Devuelve array con espacio para que se muestre claramente en el promt

    const hogar = new Hogar(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza);

    hogar.mostrarDatos();
    hogar.despedir();

}


// // Precios
// const costoAdicionalDpto = 0.15; // Porcentaje adicional a cobrar en caso de ser departamento
// let costoXPersonas = 15;
// let costoXMascotas = 20;
// let costoXBano = 80;
// let costoXHabitaciones = 65;
// let tipoHogar = "";
// let IVA = 0.16; // IVA 16% sobre el costo total

// function precioAplicado(costo1, costo2, costo3, costo4, costo5) {
//     if (tipoHogar == "casa") {
//         costoXPersonas = costo1;
//         costoXMascotas = costo2;
//         costoXBano = costo3;
//         costoXHabitaciones = costo4;
//     } else {
//         costoXPersonas = (costo1 + (costo1 * costo5));
//         costoXMascotas = (costo2 + (costo2 * costo5));
//         costoXBano = (costo3 + (costo3 * costo5));
//         costoXHabitaciones = (costo4 + (costo4 * costo5));
//     }
// }

// // Solicitar datos al usuario

// alert("Bienvenido, para cotizar con nosotros por favor ingresa los datos solicitados a continuación.");

// while (true) {
//     tipoHogar = prompt("Quiero cotizar la limpieza de mi (casa o departamento):").toLowerCase();

//     if ((tipoHogar == "casa") || (tipoHogar == "departamento")) {
//         break;
//     } else {
//         alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
//         continue;
//     }
// }

// precioAplicado(costoXPersonas, costoXMascotas, costoXBano, costoXHabitaciones, costoAdicionalDpto);

// let frequenciaLimpieza = 0;
// let personas = 0;
// let mascotas = 0;
// let banos = 0;
// let habitaciones = 0;

// while (isNaN(frequenciaLimpieza = parseInt(prompt(`¿Cuantas veces al mes deseas que limpiemos tu ${tipoHogar}?`)))) {
//     alert("Solo puedes ingresar números");
// }

// while (isNaN(personas = parseInt(prompt(`¿Cuantas personas viven en tu ${tipoHogar}?`)))) {
//     alert("Solo puedes ingresar números");
// }

// while (isNaN(mascotas = parseInt(prompt(`¿Cuantas mascotas viven en tu ${tipoHogar}?`)))) {
//     alert("Solo puedes ingresar números");
// }

// while (isNaN(banos = parseInt(prompt(`¿Cuantos baños tiene tu ${tipoHogar}?`)))) {
//     alert("Solo puedes ingresar números");
// }

// while (isNaN(habitaciones = parseInt(prompt(`¿Cuantas habitaciones tiene tu ${tipoHogar}?`)))) {
//     alert("Solo puedes ingresar números");
// }

// let resultadoSubtotal = 0;

// function calcularSubtotal(dato1, costo1, dato2, costo2, dato3, costo3, dato4, costo4, dato5) {
//     resultadoSubtotal = dato5 * ((dato1 * costo1) + (dato2 * costo2) + (dato3 * costo3) + (dato4 * costo4));
// }

// let resultadoTotal = 0;

// function calcularTotal(dato1, dato2) {
//     resultadoTotal = dato1 + (dato1 * dato2);
// }

// calcularSubtotal(personas, costoXPersonas, mascotas, costoXMascotas, banos, costoXBano, habitaciones, costoXHabitaciones, frequenciaLimpieza);
// calcularTotal(resultadoSubtotal, IVA);

// alert(`Gracias por cotizar con nosotros. La limpieza de tu ${tipoHogar} ${frequenciaLimpieza} veces al mes tiene un costo de $${resultadoSubtotal} antes de impuestos y un total de $${resultadoTotal} con IVA incluido.`);