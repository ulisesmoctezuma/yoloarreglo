function correr() {
    alert("Hola, para cotizar con nosotros por favor ingresa los datos a continuación. Por promoción tenemos 15% de descuento si contratas 3 o más servicios y 25% de descuento por 6 servicios o más. Queremos que conozcas nuestros servicios, por eso te ofrecemos el 50% adicional si es la primera vez que contratas.");
    let nombre = prompt("Ingresa tu nombre y apellido");
    let tipo_lugar = prompt("Ingresa el tipo de lugar a limpieza (Casa o Departamento)");
    let tipo_cliente = prompt("¿Es la primera vez que contratas con nosotros? responde Sí o No");

    /* PRECIOS EXPRESADOS EN PESOS MEXICANOS y DESCUENTOS*/
    const iva = 0.16;
    const desc_3_a_5 = 0.15; //15 % de descuento al contratar 3 o más servicios al mes
    const desc_6_mas = 0.25; // 25% de descuento al contratar 6 o más servicios al mes
    const desc_50 = 0.50; // 50% de descuento adicional para clientes nuevos
    // precio casa
    const precio_metros_c = 1.2;
    const precio_baño_c = 75;
    const precio_habitaciones_c = 40;
    // precio departamento
    const precio_metros_d = 1.5;
    const precio_baño_d = 85;
    const precio_habitaciones_d = 45;

    /* COTIZADOR DE LIMPIEZA DE CASA */
    if ((tipo_lugar == "casa") || (tipo_lugar == "Casa") || (tipo_lugar == "CASA")) {
        // datos requeridos
        let serviciomensual_c = parseInt(prompt("¿Cuantas veces al mes deseas que limpiemos tu casa?"));
        let metros_c = parseInt(prompt("Metros cuadrados de tu casa"));
        let habitaciones_c = parseInt(prompt("Número de habitaciones en tu casa"));
        let baños_c = parseInt(prompt("Número de baños en tu casa"));

        // calculo
        let calculo_total = ((precio_metros_c * metros_c) + (precio_baño_c * baños_c) + (precio_habitaciones_c * habitaciones_c)) * serviciomensual_c;
        let calculo_iva = iva * calculo_total;
        let calculo_servicio = calculo_iva + calculo_total;

        // aplicacion de descuentos para 6 o mas servicios al mes
        let calculo_con_desc_25 = calculo_servicio - (calculo_servicio * desc_6_mas); //costo con 25% de descuento
        let calculo_con_desc_25_2des = calculo_con_desc_25.toFixed(2);
        let calculo_50_25 = calculo_con_desc_25 - (calculo_con_desc_25 * desc_50); //costo con 25% de descuento y 50% adicional por contratar por primera vez
        let calculo_50_25_2des = calculo_50_25.toFixed(2);

        // aplicacion de descuentos para 3 o mas servicios al mes
        let calculo_con_desc_15 = calculo_servicio - (calculo_servicio * desc_3_a_5); //costo con 15% de descuento
        let calculo_con_desc_15_2des = calculo_con_desc_15.toFixed(2);
        let calculo_50_15 = calculo_con_desc_15 - (calculo_con_desc_15 * desc_50); //costo con 15% de descuento y 50% adicional por contratar por primera vez
        let calculo_50_15_2des = calculo_50_15.toFixed(2);

        // aplicacion de descuentos para 1 o mas servicios al mes
        let calculo_50 = calculo_servicio - (calculo_servicio * desc_50); //costo con 50% de descuento
        let calculo_50_2des = calculo_50.toFixed(2);

        // resultado cotizacion
        if ((serviciomensual_c >= 6) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). Hemos aplicado un 25% por contratar 6 o más servicios al mes y un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_25_2des} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes)`);
        } 
        else if ((serviciomensual_c >= 6) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). Hemos aplicado un 25% por contratar 6 o más servicios al mes. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_con_desc_25_2des} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes)`);
        }
        //-------
        else if ((serviciomensual_c >= 3) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros ${calculo_servicio} ${calculo_con_desc_15_2des} ${calculo_50_15}, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). Hemos aplicado un 15% por contratar 3 o más servicios al mes y un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_15_2des} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes)`);
        }
        else if ((serviciomensual_c >= 3) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). Hemos aplicado un 15% por contratar 3 o más servicios al mes. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_con_desc_15_2des} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes)`);
        }
        //-------
        else if ((serviciomensual_c >= 1) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). Hemos aplicado un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_2des} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes)`);
        }
        else if ((serviciomensual_c >= 1) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu casa cuenta con ${metros_c} m2, ${habitaciones_c} habitacion(nes) y ${baños_c} baño(s). La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_servicio} MXN con IVA incluido (${serviciomensual_c} servicio(s) por mes).`);
        }
        else {
        alert("Error, por favor reinicia el cotizador");
        }
        }
    
    /* COTIZADOR DE LIMPIEZA DE DEPARTAMENTO */
    else if ((tipo_lugar == "departamento") || (tipo_lugar == "Departamento") || (tipo_lugar == "DEPARTAMENTO")) {
        // datos requeridos
        let serviciomensual_d = parseInt(prompt("¿Cuantas veces al mes deseas que limpiemos tu departamento?"));
        let metros_d = parseInt(prompt("Metros cuadrados de tu departamento"));
        let habitaciones_d = parseInt(prompt("Número de habitaciones en tu departamento"));
        let baños_d = parseInt(prompt("Número de baños en tu departamento"));
        
        // calculo
        let calculo_total = ((precio_metros_d * metros_d) + (precio_baño_d * baños_d) + (precio_habitaciones_d * habitaciones_d)) * serviciomensual_d;
        let calculo_iva = iva * calculo_total;
        let calculo_servicio = calculo_iva + calculo_total;
        
        // aplicacion de descuentos para 6 o mas servicios al mes
        let calculo_con_desc_25 = calculo_servicio - (calculo_servicio * desc_6_mas); //costo con 25% de descuento
        let calculo_con_desc_25_2des = calculo_con_desc_25.toFixed(2);
        let calculo_50_25 = calculo_con_desc_25 - (calculo_con_desc_25 * desc_50); //costo con 25% de descuento y 50% adicional por contratar por primera vez
        let calculo_50_25_2des = calculo_50_25.toFixed(2);
        
        // aplicacion de descuentos para 3 o mas servicios al mes
        let calculo_con_desc_15 = calculo_servicio - (calculo_servicio * desc_3_a_5); //costo con 15% de descuento
        let calculo_con_desc_15_2des = calculo_con_desc_15.toFixed(2);
        let calculo_50_15 = calculo_con_desc_15 - (calculo_con_desc_25 * desc_50); //costo con 15% de descuento y 50% adicional por contratar por primera vez
        let calculo_50_15_2des = calculo_50_15.toFixed(2);
        
        // aplicacion de descuentos para 1 o mas servicios al mes
        let calculo_50 = calculo_servicio - (calculo_servicio * desc_50); //costo con 50% de descuento
        let calculo_50_2des = calculo_50.toFixed(2);
    
        // resultado cotizacion
        if ((serviciomensual_d >= 6) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). Hemos aplicado un 25% por contratar 6 o más servicios al mes y un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_25_2des} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        } 
        else if ((serviciomensual_d >= 6) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). Hemos aplicado un 25% por contratar 6 o más servicios al mes. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_con_desc_25_2des} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        }
        //-------
        else if ((serviciomensual_d >= 3) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). Hemos aplicado un 15% por contratar 3 o más servicios al mes y un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_15_2des} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        }
        else if ((serviciomensual_d >= 3) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). Hemos aplicado un 25% por contratar 6 o más servicios al mes. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_con_desc_15_2des} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        }
        //-------
        else if ((serviciomensual_d >= 1) && ((tipo_cliente == "si") || (tipo_cliente == "sí") || (tipo_cliente == "Si") || (tipo_cliente == "Sí") || (tipo_cliente == "SI") || (tipo_cliente == "SÍ"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). Hemos aplicado un 50% adicional por contratar por primera vez. La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_50_2des} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        }
        else if ((serviciomensual_d >= 1) && ((tipo_cliente == "no") || (tipo_cliente == "No") || (tipo_cliente == "NO"))){
            alert(`${nombre}, gracias por cotizar con nosotros, tu departamento cuenta con ${metros_d} m2, ${habitaciones_d} habitacion(nes) y ${baños_d} baño(s). La limpieza de tu hogar tiene un costo calculado mensual de $${calculo_servicio} MXN con IVA incluido (${serviciomensual_d} servicio(s) por mes).`);
        }
        else {
            alert("Error, por favor reinicia el cotizador");
        }
        }
    
    /* RESULTADO SINO SE INGRESA CASA O DEPARTAMENTO */
    else {
        alert("Error, por favor reinicia el cotizador");
    }
}