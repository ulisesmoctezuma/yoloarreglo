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

        cotizarLimpieza() {

            //Formato pesos mexicanos

            let aMoneda = new Intl.NumberFormat('es-MX', {
                style: 'currency',
                currency: 'MXN',
            });

            // Precios base en pesos mexicanos
            let baseHabitacion = 40;
            let baseBanos = 80;
            let baseHabitantes = 15;
            let baseMascotas = 25;
            const precioOtrosEspacios = [];
            for (let precioOtroEspacio of this.otrosEspaciosLimp) {
                if (tipo == "Departamento") {
                    precioOtroEspacio.nomEspacio = precioOtroEspacio.nomEspacio;
                    precioOtroEspacio.precioEspacio = precioOtroEspacio.precioEspacio * 1.12;
                    precioOtrosEspacios.push(precioOtroEspacio);
                } else {
                    precioOtroEspacio.nomEspacio = precioOtroEspacio.nomEspacio;
                    precioOtroEspacio.precioEspacio = precioOtroEspacio.precioEspacio;
                    precioOtrosEspacios.push(precioOtroEspacio);
                }
            }

            let SumPrecioOtrosEspacios = 0; // Summar precios base de array para dar precio total de otros espacios a limpiar
            for (let i of precioOtrosEspacios) {
                SumPrecioOtrosEspacios += i.precioEspacio;
            }
            let precioHabitacion;
            let precioBanos;
            let precioXhabitantes;
            let precioXmascotas;

            switch (this.tipo) {
                case "Casa":
                    precioHabitacion = baseHabitacion;
                    precioBanos = baseBanos;
                    precioXhabitantes = baseHabitantes;
                    precioXmascotas = baseMascotas;
                    break;
                case "Departamento":
                    precioHabitacion = baseHabitacion * 1.12;
                    precioBanos = baseBanos * 1.12;
                    precioXhabitantes = baseHabitantes * 1.12;
                    precioXmascotas = baseMascotas * 1.12;
                    break;
            }

            // Calcular subtotal

            let subtotalHabitaciones = precioHabitacion * this.habitaciones;
            let subtotalBanos = precioBanos * this.banos;
            let subtotalHabitantes = precioXhabitantes * this.habitantes;
            let subtotalMascotas = precioXmascotas * this.mascotas;

            let subtotal = (precioHabitacion * this.habitaciones) + (precioBanos * this.banos) +
                (precioXhabitantes * this.habitantes) + (precioXmascotas * this.mascotas) + SumPrecioOtrosEspacios;

            let iva = subtotal * .16;

            let totalxOcasion = subtotal + iva;

            // Calcular total

            let totalCotizacion = (totalxOcasion * this.frequenciaLimpieza);

            let contenedorCotizador = document.createElement("div");
            contenedorCotizador.className = "encabezado-cotizar";
            contenedorCotizador.innerHTML =
                `<h2 style="margin-bottom: 50px !important;">Cotización de limpieza residencial</h2>
            <h4>Cliente:</h4>
            <p id="nombre-cliente">${nombre}</p><br>
            <p style="margin-bottom: 20px !important;"> A continuación se desglosa la cotización solicitada para la limpieza de tu <strong>${tipo.toLowerCase()}</strong>.</p>
            <table class="table table-striped text-white">
                        <thead>
                            <tr style="color: #f5d104;">
                                <th scope="col">Concepto</th>
                                <th scope="col">Precio unitario</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio total</th>
                            </tr>
                        </thead>
                        <tbody id="bodyCotizador";>
                            <tr>
                                <th scope="row">Limpieza de habitaciones</th>
                                <td>${aMoneda.format(precioHabitacion)}</td>
                                <td>${this.habitaciones}</td>
                                <td>${aMoneda.format(subtotalHabitaciones)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Limpieza de baños</th>
                                <td>${aMoneda.format(precioBanos)}</td>
                                <td>${this.banos}</td>
                                <td>${aMoneda.format(subtotalBanos)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cargo por habitantes</th>
                                <td>${aMoneda.format(precioXhabitantes)}</td>
                                <td>${this.habitantes}</td>
                                <td>${aMoneda.format(subtotalHabitantes)}</td>
                            </tr>
                            <tr>
                                <th scope="row">Cargo por mascotas</th>
                                <td>${aMoneda.format(precioXmascotas)}</td>
                                <td>${this.mascotas}</td>
                                <td>${aMoneda.format(subtotalMascotas)}</td>
                        </tr>
                        </tbody>
                    </table>
            `;
            document.getElementById('cotizador').appendChild(contenedorCotizador);


            for (let otrosEspacios of precioOtrosEspacios) {
                let filasOtrosEspacios = document.createElement("tr");
                filasOtrosEspacios.innerHTML =
                    `<th scope="row">Limpieza de ${otrosEspacios.nomEspacio}</th>
                    <td>${aMoneda.format(otrosEspacios.precioEspacio)}</td>
                    <td>1</td>
                    <td>${aMoneda.format(otrosEspacios.precioEspacio)}</td>
                    `;
                document.getElementById('bodyCotizador').appendChild(filasOtrosEspacios);
            }

            let filaSubtotaleCotizador = document.createElement("tr");
            filaSubtotaleCotizador.innerHTML =
                `<th scope="row" colspan="3" style="text-align: right">Subtotal</th>
                <td>${aMoneda.format(subtotal)}</td>`
            document.getElementById('bodyCotizador').appendChild(filaSubtotaleCotizador);

            let filaIVACotizador = document.createElement("tr");
            filaIVACotizador.innerHTML =
                `<th scope="row" colspan="3" style="text-align: right">IVA 16%</th>
                <td>${aMoneda.format(iva)}</td>`
            document.getElementById('bodyCotizador').appendChild(filaIVACotizador);

            let filaTotalOcasion = document.createElement("tr");
            filaTotalOcasion.innerHTML =
                `<th scope="row" colspan="3" style="text-align: right">Total por ocasión</th>
                <td>${aMoneda.format(totalxOcasion)}</td>`
            document.getElementById('bodyCotizador').appendChild(filaTotalOcasion);

            let filaFrequencia = document.createElement("tr");
            filaFrequencia.innerHTML =
                `<th scope="row" colspan="3" style="text-align: right">Frequencia mensual</th>
                <td>${this.frequenciaLimpieza}</td>`
            document.getElementById('bodyCotizador').appendChild(filaFrequencia);

            let filaTotal = document.createElement("tr");
            filaTotal.innerHTML =
                `<th scope="row" colspan="3" style="text-align: right">Total mensual</th>
                <td>${aMoneda.format(totalCotizacion)}</td>`
            document.getElementById('bodyCotizador').appendChild(filaTotal);
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

    const otrosEspacios = [{
            nomEspacio: "cocina",
            precioEspacio: 65
        },
        {
            nomEspacio: "comedor",
            precioEspacio: 48
        },
        {
            nomEspacio: "sala",
            precioEspacio: 55
        },
        {
            nomEspacio: "oficina",
            precioEspacio: 40
        },
        {
            nomEspacio: "cuarto de lavado",
            precioEspacio: 30
        },
    ];

    const otrosEspaciosLimp = [];

    for (let espacios of otrosEspacios) {
        let respuestaOtroEspacio = prompt(`¿Deseas que limpiemos tu ${espacios.nomEspacio}?\nResponde si/no`).toLowerCase();
        if ((respuestaOtroEspacio == "si") || (respuestaOtroEspacio == "sí")) {
            let respuesta = espacios;
            otrosEspaciosLimp.push(respuesta);
        } else {
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

    const otrosEspaciosLimpiar = otrosEspaciosLimp.join(", "); // Devuelve array con espacio para que se muestre claramente en el promt

    const hogar = new Hogar(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza);


    function eliminarBtn() {
        let btn = document.getElementById('sec-btn');
        btn.parentNode.removeChild(btn);
    }

    eliminarBtn();
    hogar.cotizarLimpieza();
}