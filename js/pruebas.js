const btnCotizar = document.getElementById('btnCotizadorYLA');
const btnCotizar = document.getElementById('btnCotizadorYLA');


function activarCotizador() {

    /*     const precioOtrosEspacios = [];
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
        } */

    const arrayEspaciosLimp = [];

    $("input:checkbox[name=ckOtros]:checked").each(function () {
        arrayEspaciosLimp.push($(this).val());
    });

    const otrosEspaciosLimp = [];

    for (let espacio of arrayEspaciosLimp) {
        if (espacio == "cocina") {
            nombre = "cocina";
            precio = 65;
            otrosEspaciosLimp.push({
                nomEspacio: nombre,
                precioEspacio: precio
            });
        } else if (espacio == "comedor") {
            nombre = "comedor";
            precio = 48;
            otrosEspaciosLimp.push({
                nomEspacio: nombre,
                precioEspacio: precio
            });
        } else if (espacio == "sala") {
            nombre = "sala";
            precio = 55;
            otrosEspaciosLimp.push({
                nomEspacio: nombre,
                precioEspacio: precio
            });
        } else if (espacio == "oficina") {
            nombre = "oficina";
            precio = 40;
            otrosEspaciosLimp.push({
                nomEspacio: nombre,
                precioEspacio: precio
            });
        } else if (espacio == "cuarto de lavado") {
            nombre = "cuarto de lavado";
            precio = 30;
            otrosEspaciosLimp.push({
                nomEspacio: nombre,
                precioEspacio: precio
            });
        }
    }

    console.log(otrosEspaciosLimp);



    const otroAyy = [{
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

    console.log(otroAyy);



}

btnCotizar.addEventListener("click", activarCotizador);