const btnCotizar = document.getElementById('btnCotizadorYLA');
const btnLimpiar = document.getElementById('btnLimpiarYLA')

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
                    precioOtroEspacio.nombreEspacio = precioOtroEspacio.nomEspacios;
                    precioOtroEspacio.precioEspacio = precioOtroEspacio.precioEspacio * 1.12;
                    precioOtrosEspacios.push(precioOtroEspacio);
                } else {
                    precioOtroEspacio.nombreEspacio = precioOtroEspacio.nomEspacios;
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

            document.getElementById("cotizador").innerHTML =
                `<div id="tablaCotizacion"><h2 style="margin-bottom: 50px !important; margin-top: 50px !important; ">Cotizaci??n de limpieza residencial</h2>
            <h4>Cliente:</h4>
            <p id="nombre-cliente">${nombre}</p><br>
            <p style="margin-bottom: 20px !important;"> A continuaci??n se desglosa la cotizaci??n solicitada para la limpieza de tu <strong>${tipo.toLowerCase()}</strong> ${frequenciaLimpieza} veces al mes.</p>
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
                            <th scope="row">Limpieza de ba??os</th>
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
            </div>
            `;

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
                `<th scope="row" colspan="3" style="text-align: right">Total por ocasi??n</th>
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

    }

    let nombre = document.getElementById("nombreCotizar").value;
    let tipo = document.getElementById("tipoHogarCotizar").value;
    let frequenciaLimpieza = document.getElementById("frequenciaCotizar").value;
    let habitaciones = document.getElementById("habitacionesCotizar").value;
    let banos = document.getElementById("banosCotizar").value;
    let habitantes = document.getElementById("habitantesCotizar").value;
    let mascotas = document.getElementById("mascotasCotizar").value;
    const arrayEspaciosLimp = [];

    $("input:checkbox[name=ckOtros]:checked").each(function () {
        arrayEspaciosLimp.push($(this).val());
    });

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
                precioEsp: nombreEsp,
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
    const otrosEspaciosLimpiar = otrosEspaciosLimp.join(", "); // Devuelve array con espacio para que se muestre claramente en el promt
    const hogar = new Hogar(nombre, tipo, habitaciones, banos, otrosEspaciosLimpiar, habitantes, mascotas, frequenciaLimpieza);
    hogar.cotizarLimpieza();
}

function limpiarCotizador() {
    document.getElementById("formulario-yla").reset();
    let limpiarTabla = document.getElementById('tablaCotizacion');
    limpiarTabla.parentNode.removeChild(limpiarTabla);
}

btnCotizar.addEventListener("click", activarCotizador);
btnLimpiar.addEventListener("click", limpiarCotizador);