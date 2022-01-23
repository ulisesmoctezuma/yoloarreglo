function correr() {

    class Hogar {
        constructor(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza) {
            this.nombre = nombre;
            this.tipo = tipo;
            this.habitaciones = habitaciones;
            this.banos = banos;
            this.otrosEspaciosLimpiar = otrosEspaciosLimpiar;
            this.otrosEspaciosLimp = otrosEspaciosLimp;
            this.habitantes = habitantes;
            this.mascotas = mascotas;
            this.frequenciaLimpieza = frequenciaLimpieza;
        }

        mostrarDatos() {
            alert("Datos ingresados:" + "\n" + "\n" + "Solicitante: " + this.nombre + "\n" +
                "Tipo de hogar: " + this.tipo + "\n" + "Habitaciones: " + this.habitaciones + "\n" + "Baños: " + this.banos + "\n" +
                "Otros espacios a limpiar: " + this.otrosEspaciosLimpiar + "\n" +
                "Habitantes: " + this.habitantes + "\n" + "Mascotas: " + this.mascotas + "\n" +
                "Frequencia mensual de limpieza: " + this.frequenciaLimpieza);
        };

        cotizarLimpieza() {

            // Precios base en pesos mexicanos
            let baseHabitacion = 40;
            let baseBanos = 80;
            let baseHabitantes = 15;
            let baseMascotas = 25;
            let PrecioOtrosEspacios;
            const baseOtrosEspaciosLimp = []
            for (let otrosEspacios of this.otrosEspaciosLimp) {
                switch (otrosEspacios) {
                    case "cocina":
                        PrecioOtrosEspacios = 65;
                        baseOtrosEspaciosLimp.push(PrecioOtrosEspacios);
                        break;
                    case "comedor":
                        PrecioOtrosEspacios = 48;
                        baseOtrosEspaciosLimp.push(PrecioOtrosEspacios);
                        break;
                    case "sala":
                        PrecioOtrosEspacios = 55;
                        baseOtrosEspaciosLimp.push(PrecioOtrosEspacios);
                        break;
                    case "oficina":
                        PrecioOtrosEspacios = 40;
                        baseOtrosEspaciosLimp.push(PrecioOtrosEspacios);
                        break;
                    case "cuarto de lavado":
                        PrecioOtrosEspacios = 30;
                        baseOtrosEspaciosLimp.push(PrecioOtrosEspacios);
                        break;
                }
            }

            let SumPrecioOtrosEspacios = 0; // Summar precios base de array para dar precio total de otros espacios a limpiar
            for (let i of baseOtrosEspaciosLimp) {
                SumPrecioOtrosEspacios += i;
            }
            let precioHabitacion;
            let precioBanos;
            let precioXhabitantes;
            let precioXmascotas;
            let precioXotrosEspacios;

            switch (this.tipo) {
                case "Casa":
                    precioHabitacion = baseHabitacion;
                    precioBanos = baseBanos;
                    precioXhabitantes = baseHabitantes;
                    precioXmascotas = baseMascotas;
                    precioXotrosEspacios = SumPrecioOtrosEspacios;
                    break;
                case "Departamento":
                    precioHabitacion = baseHabitacion * 1.12;
                    precioBanos = baseBanos * 1.12;
                    precioXhabitantes = baseHabitantes * 1.12;
                    precioXmascotas = baseMascotas * 1.12;
                    precioXotrosEspacios = SumPrecioOtrosEspacios * 1.12;
                    break;
            }

            // Calcular subtotal

            let subtotal = this.frequenciaLimpieza * ((precioHabitacion * this.habitaciones) + (precioBanos * this.banos) +
                (precioXhabitantes * this.habitantes) + (precioXmascotas * this.mascotas) + precioXotrosEspacios);

            // Calcular subtotal

            let totalCotizacion = (subtotal * 1.16).toFixed(2); //IVA 16%

            alert("Gracias por cotizar con nosotros, el total de tu cotización de acuerdo a los datos ingresados es de $ " + totalCotizacion + " con IVA incluido.")
        }

        despedir() {
            alert(this.nombre + ", esperamos pronto tener noticias tuyas, si deseas contratar nuestros servicios llama al 01800....")
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
        let respuestaOtroEspacio = prompt(`¿Deseas que limpiemos tu ${espacios}?\nResponde si/no`).toLowerCase();
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
    hogar.cotizarLimpieza();
    hogar.despedir();

}