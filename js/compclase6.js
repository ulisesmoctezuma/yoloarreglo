function correr2() {

    class PlanetaSistemaSolar {
        constructor(nombre, radio, distancia) {
            this.nombre = nombre;
            this.radio = radio;
            this.distancia = distancia;
        }

        mostrarPlanetasRadio() {
            alert("Listado de Planetas de acuerdo a su radio" + "\n" + "\n" + "Nombre: " + this.nombre + "\n" + "Radio: " + this.radio + "\n" + "Distancia desde el Sol: " + this.distancia);
        }

        mostrarPlanetasDistancia() {
            alert("Listado de Planetas de acuerdo a su distancia al Sol" + "\n" + "\n" + "Nombre: " + this.nombre + "\n" + "Radio: " + this.radio + "\n" + "Distancia desde el Sol: " + this.distancia);
        }

        mostrarPlanetasNombre() {
            alert("Listado de Planetas mostrados de la A - Z" + "\n" + "\n" + "Nombre: " + this.nombre + "\n" + "Radio: " + this.radio + "\n" + "Distancia desde el Sol: " + this.distancia);
        }
    }

    const planetas = [];
    planetas.push(new PlanetaSistemaSolar("Mercurio", 2439, 57.91));
    planetas.push(new PlanetaSistemaSolar("Venus", 6051, 108.21));
    planetas.push(new PlanetaSistemaSolar("Tierra", 6371, 149.60));
    planetas.push(new PlanetaSistemaSolar("Marte", 3389, 227.9));
    planetas.push(new PlanetaSistemaSolar("Júpiter", 69911, 778));
    planetas.push(new PlanetaSistemaSolar("Saturno", 58232, 1434));
    planetas.push(new PlanetaSistemaSolar("Urano", 25362, 2871));
    planetas.push(new PlanetaSistemaSolar("Neptuno", 24622, 4495));

    let preguntar = true;
    let ordenarPor = "";

    while (preguntar) {
        ordenarPor = parseInt(prompt(`Bienvenido al listado de Planetas del Sistema Solar \n 
        ¿Cómo desea mostrar el listado de planetas?\n
        Presiona 1 para ordenar por radio (mayor a menor) \n
        Presiona 2 para ordenar por distancia al Sol (mayor a menor) \n
        Presiona 3 para ordenar por abecedario (de la a - z)\n `));;
        if (ordenarPor > 0 && ordenarPor < 4) {
            break;
        } else {
            alert("Has ingresado un dato número incorrecto, por favor intenta nuevamente.");
            continue;
        }
    }

    // let ordenarPor = parseInt(prompt(`Bienvenido al listado de Planetas del Sistema Solar \n 
    // ¿Cómo desea mostrar el listado de planetas?\n
    // Presiona 1 para ordenar por radio (mayor a menor) \n
    // Presiona 2 para ordenar por distancia al Sol (mayor a menor) \n
    // Presiona 3 para ordenar por abecedario (de la a - z)\n `));

    switch (ordenarPor) {
        case 1:
            planetas.sort((a, b) => {
                return a.radio - b.radio;
            });
            for (const planeta of planetas)
                planeta.mostrarPlanetasRadio();
            break;
        case 2:
            planetas.sort((a, b) => {
                return a.distancia - b.distancia;
            });
            for (const planeta of planetas)
                planeta.mostrarPlanetasDistancia();
            break;
        case 3:
            planetas.sort((a, b) => {
                let nombreA = a.nombre.toLowerCase(),
                    nombreB = b.nombre.toLowerCase();

                if (nombreA < nombreB) {
                    return -1;
                }
                if (nombreB < nombreA) {
                    return 1;
                }
                return 0;
            });
            for (const planeta of planetas)
                planeta.mostrarPlanetasNombre();
            break;
        default:
            alert("Error, intente nuevamente.");
    }




    // class Producto {
    //     constructor(nombre, precio) {
    //         this.nombre = nombre.toUpperCase();
    //         this.precio = parseFloat(precio);
    //         this.vendido = false;
    //     }
    //     sumaIva() {
    //         alert(this.precio * 1.21);
    //     }

    //     mostrarProductos() {
    //         alert("Nombre: " + this.nombre + "precio" + this.precio + "Vendido: " + this.vendido)
    //     }
    // }
    // //Declaramos un array de productos para almacenar objetos
    // const productos = [];
    // productos.push(new Producto("fideo", "125"));
    // productos.push(new Producto("arroz", "70"));
    // productos.push(new Producto("pan", "50"));
    // //Iteramos el array con for...of para modificarlos a todos

    // productos.sort((a, b) => {
    //     return a.precio - b.precio;
    // });

    // productos.forEach((e) => {
    //     alert(`${e.nombre} ${e.precio} ${e.vendido}`)
    // })

    // for (const producto of productos)
    //     producto.mostrarProductos();



    // mostrarPlanetas() {
    //     alert("Nombre: " + this.nombre + "\n" + "Radio: " + this.radio + "\n" + "Distancia desde el Sol: " + this.distancia);
    // }
    // planetas.ordenAlfabetico();
}