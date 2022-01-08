function correr() {

    // Precios
    const costoAdicionalDpto = 0.15; // Porcentaje adicional a cobrar en caso de ser departamento
    let costoXPersonas = 15;
    let costoXMascotas = 20;
    let costoXBano = 80;
    let costoXHabitaciones = 65;
    let tipoHogar = "";
    let IVA = 0.16; // IVA 16% sobre el costo total

    function precioAplicado(costo1, costo2, costo3, costo4, costo5) {
        if (tipoHogar == "casa") {
            costoXPersonas = costo1;
            costoXMascotas = costo2;
            costoXBano = costo3;
            costoXHabitaciones = costo4;
        } else {
            costoXPersonas = (costo1 + (costo1 * costo5));
            costoXMascotas = (costo2 + (costo2 * costo5));
            costoXBano = (costo3 + (costo3 * costo5));
            costoXHabitaciones = (costo4 + (costo4 * costo5));
        }
    }

    // Solicitar datos al usuario

    alert("Bienvenido, para cotizar con nosotros por favor ingresa los datos solicitados a continuación.");

    while (true) {
        tipoHogar = prompt("Quiero cotizar la limpieza de mi (casa o departamento):").toLowerCase();

        if ((tipoHogar == "casa") || (tipoHogar == "departamento")) {
            break;
        } else {
            alert("Has ingresado un dato incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    precioAplicado(costoXPersonas, costoXMascotas, costoXBano, costoXHabitaciones, costoAdicionalDpto);

    let frequenciaLimpieza = 0;
    let personas = 0;
    let mascotas = 0;
    let banos = 0;
    let habitaciones = 0;

    while (isNaN(frequenciaLimpieza = parseInt(prompt(`¿Cuantas veces al mes deseas que limpiemos tu ${tipoHogar}?`)))) {
        alert("Solo puedes ingresar números");
    }

    while (isNaN(personas = parseInt(prompt(`¿Cuantas personas viven en tu ${tipoHogar}?`)))) {
        alert("Solo puedes ingresar números");
    }

    while (isNaN(mascotas = parseInt(prompt(`¿Cuantas mascotas viven en tu ${tipoHogar}?`)))) {
        alert("Solo puedes ingresar números");
    }

    while (isNaN(banos = parseInt(prompt(`¿Cuantos baños tiene tu ${tipoHogar}?`)))) {
        alert("Solo puedes ingresar números");
    }

    while (isNaN(habitaciones = parseInt(prompt(`¿Cuantas habitaciones tiene tu ${tipoHogar}?`)))) {
        alert("Solo puedes ingresar números");
    }

    let resultadoSubtotal = 0;

    function calcularSubtotal(dato1, costo1, dato2, costo2, dato3, costo3, dato4, costo4, dato5) {
        resultadoSubtotal = dato5 * ((dato1 * costo1) + (dato2 * costo2) + (dato3 * costo3) + (dato4 * costo4));
    }

    let resultadoTotal = 0;

    function calcularTotal(dato1, dato2) {
        resultadoTotal = dato1 + (dato1 * dato2);
    }

    calcularSubtotal(personas, costoXPersonas, mascotas, costoXMascotas, banos, costoXBano, habitaciones, costoXHabitaciones, frequenciaLimpieza);
    calcularTotal(resultadoSubtotal, IVA);

    alert(`Gracias por cotizar con nosotros. La limpieza de tu ${tipoHogar} ${frequenciaLimpieza} veces al mes tiene un costo de $${resultadoSubtotal} antes de impuestos y un total de $${resultadoTotal} con IVA incluido.`);
}