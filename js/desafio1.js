function correr() {
    alert("Hola, para cotizar con nosotros por favor llena lo solicitado a continuación.")
    let nombre = prompt("Ingresa tu nombre");
    let apellido = prompt("Ingresa tu apellido");
    let metros = prompt("Metros cuadrados del lugar que arreglaremos");
    let habitaciones = prompt(" Número de habitaciones del lugar que deseas que limpiemos");
    let baños = prompt("Número de baños del lugar que deseas que limpiemos");

    const iva = "0.16"
    //precio expresado en pesos mexicanos
    const precio_metros = "1.5";
    const precio_baño = "80";
    const precio_habitaciones = "40";

    let calculo_total = (precio_metros * metros) + (precio_baño * baños) + (precio_habitaciones * habitaciones);
    let calculo_iva = iva * calculo_total;
    let calculo_servicio = calculo_iva + calculo_total;
    alert(nombre + " " + apellido + ", gracias por cotizar con nosotros, la limpieza de tu hogar tiene un costo calculado de $" + calculo_servicio + " MXN con IVA incluido.");
}