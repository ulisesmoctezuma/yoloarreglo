class Tienda {
    constructor(nombre, direccion, propietario, rubro) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

let ingresados = '';
for (let index = 0; index < 5; index++) {
    let tienda = new Tienda(prompt("NOMBRE"),
        prompt("DIRECCION"),
        prompt("PROPIETARIO"),
        prompt("RUBRO"));

    ingresados += "Tienda: " + tienda.nombre + " " +
        "Direccion: " + tienda.direccion + " " +
        "Propitario: " + tienda.propietario + " " +
        "rubro: " + tienda.rubro + "\n";
}
alert(ingresados);