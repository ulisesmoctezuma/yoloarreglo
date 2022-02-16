$(document).ready(function () {

    const btnCotizar = document.getElementById('btnCotizadorYLA');
    const btnLimpiar = document.getElementById('btnLimpiarYLA');

    // HTML OPCIONES PARA ELEGIR CIUDAD

    const ubicaciones = ["Cancún", "Tulum", "Playa del Carmen", "Isla Mujeres", "Mérida"];
    let opcionUbicacion = '';
    ubicaciones.forEach((ubicacion, index) => opcionUbicacion += `<option value='${index}'>${ubicacion}</option>`)
    $(`<select id="ubicacionCotizar" class="form-control">${opcionUbicacion}</select>`).insertAfter('#labelUbicacion');

    // HTML OPCIONES PARA ELEGIR TIPO DE HOGAR

    const tiposDeHogar = ["Casa", "Departamento"];
    let opcionTiposHogar = '';
    tiposDeHogar.forEach((tipoDeHogar) => opcionTiposHogar += `<option value='${tipoDeHogar}'>${tipoDeHogar}</option>`)
    $(`<select id="tipoHogarCotizar" class="form-control">${opcionTiposHogar}</select>`).insertAfter('#labelTiposDeHogar');

    // HTML PARA TOTAL PRELIMINAR
    $("#preliminarTotalEstilo").append(`<span id="contenedorTtlPreliminar" style="display: none""><div id="tituloTotalPreliminar">Total:</div>
                                        <span id="plt"></span><span id="monedaSeleccionada" style="color: white"></span><br>
                                        <label class="switch">
                                            <input id="toggleMXNtoUSD" type="checkbox">
                                            <span class="slider round"></span>
                                        </label>
                                        <img id="BanderasMXNnUSD"><span id="convertirA"></span></span>`);

    function activarCotizador() {
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
                let precioOtrosEspacios = [];
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

                console.log(precioOtrosEspacios);

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

                // Mostrar total preliminar y botón recuperarDatos
                $("#contenedorTtlPreliminar").fadeIn("slow", function () {
                    $("#plt").text(`${aMoneda.format(totalCotizacion)}`);
                    $("#btnRecuperarYLA").slideDown("slow");
                });

                // Convertir tipo de moneda
                let monedaSeleccionada = '';
                let convertirA = '';
                if ($("#toggleMXNtoUSD").prop("checked") == false) {
                    monedaSeleccionada = "MXN";
                    convertirA = "Convertir a USD."
                    $("#BanderasMXNnUSD").attr("src", "imagenes/MXN.png");
                } else if ($("#toggleMXNtoUSD").prop("checked") == true) {
                    monedaSeleccionada = "USD";
                    convertirA = "Convertir a MXN."
                    $("#BanderasMXNnUSD").attr("src", "imagenes/USD.png");
                    // Convertir a dolares
                    let URL = `https://v6.exchangerate-api.com/v6/78ebf190f1e57d5cf73fea9e/latest/MXN`
                    let montoAConvertir = totalCotizacion;
                    $.ajax({
                        type: 'GET',
                        url: URL,
                        success: (response) => {
                            let tipo = response.conversion_rates["USD"];
                            let resultadoConvertir = montoAConvertir * tipo;
                            $("#plt").text(`${aMoneda.format(resultadoConvertir)}`);
                        },
                        error: () => {
                            $("#convertirA").text(`Error al procesar la solicitud. Intenta nuevamente.`);
                        }
                    });

                }
                $("#monedaSeleccionada").text(` ${monedaSeleccionada} (IVA Incluido).`);
                $("#convertirA").text(`${convertirA}`);


            }

        }

        // Variables del formulario

        let nombre = document.getElementById("nombreCotizar").value;
        let nombreJSON = JSON.stringify(nombre);
        sessionStorage.setItem("nombre", nombreJSON);

        let ubicacion = document.getElementById("ubicacionCotizar").value;
        let ubicacionJSON = JSON.stringify(ubicacion);
        sessionStorage.setItem("ubicacion", ubicacionJSON);

        let tipo = document.getElementById("tipoHogarCotizar").value;
        let tipoJSON = JSON.stringify(tipo);
        sessionStorage.setItem("tipo", tipoJSON);

        let frequenciaLimpieza = document.getElementById("frequenciaCotizar").value;
        let frequenciaLimpiezaJSON = JSON.stringify(frequenciaLimpieza);
        sessionStorage.setItem("frequenciaLimpieza", frequenciaLimpiezaJSON);

        let habitaciones = document.getElementById("habitacionesCotizar").value;
        let habitacionesJSON = JSON.stringify(habitaciones);
        sessionStorage.setItem("habitaciones", habitacionesJSON);

        let banos = document.getElementById("banosCotizar").value;
        let banosJSON = JSON.stringify(banos);
        sessionStorage.setItem("banos", banosJSON);

        let habitantes = document.getElementById("habitantesCotizar").value;
        let habitantesJSON = JSON.stringify(habitantes);
        sessionStorage.setItem("habitantes", habitantesJSON);

        let mascotas = document.getElementById("mascotasCotizar").value;
        let mascotasJSON = JSON.stringify(mascotas);
        sessionStorage.setItem("mascotas", mascotasJSON);

        const arrayEspaciosLimp = [];
        $("input:checkbox[name=ckOtros]:checked").each(function () {
            arrayEspaciosLimp.push($(this).val());
        });
        const arrayEspaciosLimpJSON = JSON.stringify(arrayEspaciosLimp);
        sessionStorage.setItem("arrayEspaciosLimp", arrayEspaciosLimpJSON);

        const arrayOtrosEspaciosSS = [];
        $(".otrosLugares").each(function () {
            arrayOtrosEspaciosSS.push($(this).prop("checked"));
        });
        const arrayOtrosEspaciosSSJSON = JSON.stringify(arrayOtrosEspaciosSS);
        sessionStorage.setItem("arrayOtrosEspaciosSS", arrayOtrosEspaciosSSJSON);
        console.log(arrayOtrosEspaciosSS);

        const otrosEspaciosLimp = [];
        for (let espacio of arrayEspaciosLimp) {
            if (espacio == "cocina") {
                nombreEsp = "cocina";
                precioEsp = 65;
                otrosEspaciosLimp.push({
                    nomEspacio: nombreEsp,
                    precioEspacio: precioEsp
                });
            } else if (espacio == "comedor") {
                nombreEsp = "comedor";
                precioEsp = 48;
                otrosEspaciosLimp.push({
                    nomEspacio: nombreEsp,
                    precioEspacio: precioEsp
                });
            } else if (espacio == "sala") {
                nombreEsp = "sala";
                precioEsp = 55;
                otrosEspaciosLimp.push({
                    nomEspacio: nombreEsp,
                    precioEspacio: precioEsp
                });
            } else if (espacio == "oficina") {
                nombreEsp = "oficina";
                precioEsp = 40;
                otrosEspaciosLimp.push({
                    nomEspacio: nombreEsp,
                    precioEspacio: precioEsp
                });
            } else if (espacio == "cuarto de lavado") {
                nombreEsp = "cuarto de lavado";
                precioEsp = 30;
                otrosEspaciosLimp.push({
                    nomEspacio: nombreEsp,
                    precioEspacio: precioEsp
                });
            }
        }

        console.log(otrosEspaciosLimp);
        console.log(arrayEspaciosLimp);

        const otrosEspaciosLimpiar = otrosEspaciosLimp.join(", "); // Devuelve array con espacio para que se muestre claramente en el promt
        const hogar = new Hogar(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza);
        hogar.cotizarLimpieza();

        const btnRecuperar = document.getElementById('btnRecuperarYLA');

        function recuperarDatos() {
            document.getElementById("nombreCotizar").value = JSON.parse(sessionStorage.getItem("nombre"));
            document.getElementById("ubicacionCotizar").value = JSON.parse(sessionStorage.getItem("ubicacion"));
            document.getElementById("tipoHogarCotizar").value = JSON.parse(sessionStorage.getItem("tipo"));
            document.getElementById("frequenciaCotizar").value = JSON.parse(sessionStorage.getItem("frequenciaLimpieza"));
            document.getElementById("habitacionesCotizar").value = JSON.parse(sessionStorage.getItem("habitaciones"));
            document.getElementById("banosCotizar").value = JSON.parse(sessionStorage.getItem("banos"));
            document.getElementById("habitantesCotizar").value = JSON.parse(sessionStorage.getItem("habitantes"));
            document.getElementById("mascotasCotizar").value = JSON.parse(sessionStorage.getItem("mascotas"));
            $(".otrosLugares").each(function (index) {
                $(this).prop("checked", JSON.parse(sessionStorage.getItem("arrayOtrosEspaciosSS"))[index]);
            })
            activarCotizador();
        }

        btnRecuperar.addEventListener("click", recuperarDatos);
    }

    function limpiarCotizador() {
        document.getElementById("formulario-yla").reset();
        /*         let limpiarTabla = document.getElementById('tablaCotizacion');
                limpiarTabla.parentNode.removeChild(limpiarTabla); */
        $("#contenedorTtlPreliminar").fadeOut("slow", function () {
            $("#plt").empty();
        });
    }

    $("#frequenciaCotizar, #habitacionesCotizar, #banosCotizar, #habitantesCotizar, #mascotasCotizar, #otros1, #otros2, #otros3, #otros4, #otros5, #toggleMXNtoUSD").change(function () {
        activarCotizador();
    });


    btnLimpiar.addEventListener("click", limpiarCotizador);
})