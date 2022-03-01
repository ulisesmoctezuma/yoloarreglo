$(document).ready(function () {

    const btnCotizar = document.getElementById('btnCotizadorYLA');
    const btnLimpiar = document.getElementById('btnLimpiarYLA');

    $("#codigoPostalCotizar").blur(function () {
        if ($("#codigoPostalCotizar").val().length == 5) {
            console.log("el codigo postal tiene la longitud correcta");
            $("#codigoPostalCotizar").removeClass('is-invalid');
            let codigoPostal = $("#codigoPostalCotizar").val();
            console.log(codigoPostal);
            let url = `https://api.copomex.com/query/info_cp/${codigoPostal}?token=pruebas`;
            $("#coloniaMXCotizar").empty()

            fetch(url)
                .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw "Error, no ha ingresado un código postal"
                    }
                })

                .then(responseText => {
                    const infoCodigoPostal = responseText;
                    console.log('Este es el objeto de usuarios', infoCodigoPostal);
                    infoIndividual = $(infoCodigoPostal).get(0);
                    $("#ciudadMXCotizar").html(`<option value='${infoIndividual.response.ciudad}'>${infoIndividual.response.ciudad}</option>`)
                    $("#coloniaMXCotizar").prop("disabled", false);

                    for (let i = 0; i < infoCodigoPostal.length; i++) {
                        $("#coloniaMXCotizar").append(`<option value='${infoCodigoPostal[i].response.asentamiento}'>${infoCodigoPostal[i].response.asentamiento}</option>`)
                        console.log(`${i} asentamiento:${infoCodigoPostal[i].response.asentamiento}, estado:${infoCodigoPostal[i].response.pais}`)
                    }
                })

                .catch(err => {
                    console.log(err);
                });

        } else if ($("#codigoPostalCotizar").val().length < 5) {
            $("#codigoPostalCotizar").addClass('is-invalid');
            console.log("el codigo postal tiene la longitud incorrecta");
        }
    });





    /*     $("#codigoPostalCotizar").on("mouseenter mouseleave", function (event) {
            let codigoPostal = $("#codigoPostalCotizar").val();
            console.log(codigoPostal);
            let url = `https://api.copomex.com/query/info_cp/${codigoPostal}?token=pruebas`;
            $("#coloniaMXCotizar").empty()

            fetch(url)
                .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        throw "Error, no ha ingresado un código postal"
                    }
                })

                .then(responseText => {
                    const infoCodigoPostal = responseText;
                    console.log('Este es el objeto de usuarios', infoCodigoPostal);
                    infoIndividual = $(infoCodigoPostal).get(0);
                    $("#ciudadMXCotizar").html(`<option value='${infoIndividual.response.ciudad}'>${infoIndividual.response.ciudad}</option>`)
                    $("#coloniaMXCotizar").prop("disabled", false);

                    for (let i = 0; i < infoCodigoPostal.length; i++) {
                        $("#coloniaMXCotizar").append(`<option value='${infoCodigoPostal[i].response.asentamiento}'>${infoCodigoPostal[i].response.asentamiento}</option>`)
                        console.log(`${i} asentamiento:${infoCodigoPostal[i].response.asentamiento}, estado:${infoCodigoPostal[i].response.pais}`)
                    }
                })

                .catch(err => {
                    console.log(err);
                });

        }); */

    // HTML OPCIONES PARA ELEGIR TIPO DE HOGAR

    const tiposDeHogar = ["Casa", "Departamento"];
    let opcionTiposHogar = '';
    tiposDeHogar.forEach((tipoDeHogar) => opcionTiposHogar += `<option value='${tipoDeHogar}'>${tipoDeHogar}</option>`)
    $(`<select id="tipoHogarCotizar" class="form-control form-cotizar">${opcionTiposHogar}</select>`).insertAfter('#labelTiposDeHogar');

    // HTML BOTÓN ESPACIOS

    const htmlEspacios = [{
        clase: 'habitaciones',
        titulo: 'Habitaciones'
    }, {
        clase: 'banos',
        titulo: 'Baños'
    }, {
        clase: 'habitantes',
        titulo: 'Habitantes'
    }, {
        clase: 'mascotas',
        titulo: 'Mascotas'
    }];
    let htmlEspacioContenedor = '';
    htmlEspacios.forEach((htmlEspacio) => htmlEspacioContenedor +=
        `<div class="espaciosRow form-group col-lg-3 col-md-6 col-sm-12">
        <div class="espaciosTitulo">${htmlEspacio.titulo}</div>
        <div class="selectoresEspacios">
            <button class="menosEspacios ${htmlEspacio.clase}Click desactivarBtn" data-btn="${htmlEspacio.clase}" type="button">
                <span class="me${htmlEspacio.clase}Span">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                        <path d="m2 16h28"></path>
                    </svg>
                </span>
            </button>
            <div class="conteo${htmlEspacio.clase} conteoEspacios">0</div>
            <button class="masEspacios" data-btn="${htmlEspacio.clase}" type="button">
                <span class="ma${htmlEspacio.clase}Span">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                        <path d="m2 16h28m-14-14v28"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
    `)

    $(".pruebaCrearhtml").append(`${htmlEspacioContenedor}`);

    console.log(htmlEspacios);

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
            constructor(codigoPostal, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza) {
                this.codigoPostal = codigoPostal;
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

                // Convertir tipo de moneda
                let monedaSeleccionada = '';
                let convertirA = '';
                let montoConvertido = '';
                if ($("#toggleMXNtoUSD").prop("checked") == false) {
                    monedaSeleccionada = "MXN";
                    convertirA = "Convertir a USD."
                    montoConvertido = totalCotizacion;
                    $("#plt").text(`${aMoneda.format(montoConvertido)}`);
                    $("#BanderasMXNnUSD").attr("src", "imagenes/MXN.png");
                    console.log(aMoneda.format(montoConvertido));
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
                            montoConvertido = montoAConvertir * tipo;
                            $("#plt").text(`${aMoneda.format(montoConvertido)}`);
                            console.log(aMoneda.format(montoConvertido));
                        },
                        error: () => {
                            $("#convertirA").text(`Error al procesar la solicitud. Intenta nuevamente.`);
                        }
                    });
                }

                // Mostrar total preliminar y botón recuperarDatos
                $("#contenedorTtlPreliminar").fadeIn("slow", function () {
                    $("#btnRecuperarYLA").slideDown("slow");
                });

                $("#monedaSeleccionada").text(` ${monedaSeleccionada} (IVA Incluido).`);
                $("#convertirA").text(`${convertirA}`);
            }

        }

        // Variables del formulario

        let codigoPostal = document.getElementById("codigoPostalCotizar").value;
        let codigoPostJSON = JSON.stringify(codigoPostal);
        sessionStorage.setItem("codigoPostal", codigoPostJSON);

        let ciudadMexico = document.getElementById("ciudadMXCotizar").value;
        let ciudadMexicoJSON = JSON.stringify(ciudadMexico);
        sessionStorage.setItem("ciudad", ciudadMexicoJSON);

        let tipo = document.getElementById("tipoHogarCotizar").value;
        let tipoJSON = JSON.stringify(tipo);
        sessionStorage.setItem("tipo", tipoJSON);

        let frequenciaLimpieza = document.getElementById("frequenciaCotizar").value;
        let frequenciaLimpiezaJSON = JSON.stringify(frequenciaLimpieza);
        sessionStorage.setItem("frequenciaLimpieza", frequenciaLimpiezaJSON);

        let habitaciones = parseInt($(".conteohabitaciones").text());
        /* document.getElementById("habitacionesCotizar").value; */
        let habitacionesJSON = JSON.stringify(habitaciones);
        sessionStorage.setItem("habitaciones", habitacionesJSON);

        let banos = parseInt($(".conteobanos").text());
        /* let banos = document.getElementById("banosCotizar").value; */
        let banosJSON = JSON.stringify(banos);
        sessionStorage.setItem("banos", banosJSON);

        let habitantes = parseInt($(".conteohabitantes").text());
        /* let habitantes = document.getElementById("habitantesCotizar").value; */
        let habitantesJSON = JSON.stringify(habitantes);
        sessionStorage.setItem("habitantes", habitantesJSON);

        let mascotas = parseInt($(".conteomascotas").text());
        /*  let mascotas = document.getElementById("mascotasCotizar").value; */
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
        const hogar = new Hogar(codigoPostal, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza);
        hogar.cotizarLimpieza();

        function recuperarDatos() {
            document.getElementById("codigoPostalCotizar").value = JSON.parse(sessionStorage.getItem("codigoPostal"));
            document.getElementById("ciudadMXCotizar").value = JSON.parse(sessionStorage.getItem("ciudad"));
            document.getElementById("tipoHogarCotizar").value = JSON.parse(sessionStorage.getItem("tipo"));
            document.getElementById("frequenciaCotizar").value = JSON.parse(sessionStorage.getItem("frequenciaLimpieza"));

            const tiposDeEspacios = ["habitaciones", "banos", "habitantes", "mascotas", ];
            for (let i = 0; i < tiposDeEspacios.length; i++) {
                if (JSON.parse(sessionStorage.getItem(`${tiposDeEspacios[i]}`)) >= 1) {
                    $(`.${tiposDeEspacios[i]}Click`).removeClass('desactivarBtn');
                    $(`.conteo${tiposDeEspacios[i]}`).html(JSON.parse(sessionStorage.getItem(`${tiposDeEspacios[i]}`)));
                } else {
                    $(`.conteo${tiposDeEspacios[i]}`).html(JSON.parse(sessionStorage.getItem(`${tiposDeEspacios[i]}`)));
                };
            }

            $(".otrosLugares").each(function (index) {
                $(this).prop("checked", JSON.parse(sessionStorage.getItem("arrayOtrosEspaciosSS"))[index]);
            });
            $(".otrosLugares").each(function (i) {
                if ($(this).is(':checked')) {
                    $(`.imgs-${i}`).show();
                    $(`.imgu-${i}`).hide();
                } else {
                    $(`.imgs-${i}`).hide();
                    $(`.imgu-${i}`).show();
                }
            });

            activarCotizador();

        }

        const btnRecuperar = document.getElementById('btnRecuperarYLA');
        btnRecuperar.addEventListener("click", recuperarDatos);
    }

    function limpiarCotizador() {
        document.getElementById("formulario-yla").reset();
        /* let limpiarTabla = document.getElementById('tablaCotizacion');
        limpiarTabla.parentNode.removeChild(limpiarTabla); */
        $("#contenedorTtlPreliminar").fadeOut("slow", function () {
            $("#plt").empty();
        });
        $(".img-selected").hide();
        $(".img-unselected").show();
        $(".conteoEspacios").text(0);
        $(".menosEspacios").addClass('desactivarBtn');
    }

    $("#frequenciaCotizar, #habitacionesCotizar, #banosCotizar, #habitantesCotizar, #mascotasCotizar, #otros1, #otros2, #otros3, #otros4, #otros5, #toggleMXNtoUSD").change(function () {
        activarCotizador();
    });

    // Toggle iconos otros espacios a limpiar

    $(".otrosLugares").on('click', function (event) {
        let chkId = event.target.dataset.chk;
        if ($(`.ol-${chkId}`).is(':checked')) {
            $(`.img-${chkId}-sel`).show();
            $(`.img-${chkId}`).hide()
        } else {
            $(`.img-${chkId}-sel`).hide()
            $(`.img-${chkId}`).show()
        }
    })

    // BOTON TIPO REDONDO MAS Y MENOS

    $(".menosEspacios").on('click', (event) => {
        let btnId = event.currentTarget.dataset.btn;
        if (parseInt($(`.${btnId}Click`).next().text()) == 1) {
            $(`.conteo${btnId}`).text(parseInt($(`.conteo${btnId}`).text()) - 1);
            $(`.${btnId}Click`).addClass('desactivarBtn');
            activarCotizador();
        } else if (parseInt($(`.${btnId}Click`).next().text()) >= 2) {
            $(`.conteo${btnId}`).text(parseInt($(`.conteo${btnId}`).text()) - 1);
            activarCotizador();
        }
    })

    $(".masEspacios").on('click', (event) => {
        let btnId = event.currentTarget.dataset.btn;
        if (parseInt($(`.${btnId}Click`).next().text()) == 0) {
            $(`.conteo${btnId}`).text(parseInt($(`.conteo${btnId}`).text()) + 1);
            $(`.${btnId}Click`).removeClass('desactivarBtn');
            activarCotizador();
        } else if (parseInt($(`.${btnId}Click`).next().text()) >= 1) {
            $(`.conteo${btnId}`).text(parseInt($(`.conteo${btnId}`).text()) + 1);
            activarCotizador();
        }
    })

    /*     $('.menosHabitaciones').on('click', () => {
            if (parseInt($('.chSpan').text()) >= 1) {
                $(".chSpan").text(parseInt($('.chSpan').text()) - 1);
            }
        }) */

    if (parseFloat($('.chSpan').text()) == 0) {
        $('.menosHabitaciones').toggleClass('desactivarBtn');
    }

    $('.masHabitaciones').on('click', () => {
        if (parseInt($('.chSpan').text()) >= 1) {
            $('.menosHabitaciones').removeClass('desactivarBtn');
        }
    })

    $('.menosHabitaciones').on('click', () => {
        if (parseInt($('.chSpan').text()) == 0) {
            $('.menosHabitaciones').addClass('desactivarBtn');
        }
    })

    $('.menosHabitaciones').on('click', () => {
        valSpan = parseInt($('.chSpan').text());
    })

    $('.masHabitaciones').on('click', () => {
        valSpan = parseInt($('.chSpan').text());
    })

    btnLimpiar.addEventListener("click", limpiarCotizador);
})