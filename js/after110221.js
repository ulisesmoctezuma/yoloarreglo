//Realizar un algoritmo donde el usuario cargue algunos productos con las siguientes caracteristicas:
//- nombre del producto.
//- codigo del producto.
//- presentacion del producto.
//- precio del producto.
//Luego dicho algoritmo debe calcular el precio de venta del producto, el cual deber ser mostrado con dichas
//caraceristicas antes de finalizar el mismo.


class Product {
  constructor(nombre, codigo, presentacion, precio) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.presentacion = presentacion;
    this.precio = precio;
  }

  calcularPrecioVenta() {
    let precioVenta = this.precio * 1.21;
    return precioVenta;
  }

  mostrarProducto() {
    alert("Producto: " + this.nombre + "\n" + "Codigo: " + this.codigo + "\n" + "Presentacion: " + this.presentacion + "\n" + "Precio: " + this.precio);
  }

}

let band = true;
let nombreProducto;
let codigoProducto;
let presentacionProducto;
let precioProducto;

function campoVacio(cadena) {
  if (cadena == "") {
    return true;
  } else {
    return false;
  }
}

while (band) {
  nombreProducto = prompt("Ingrese el nombre del producto");
  if (campoVacio(nombreProducto)) {
    alert("Ingrese el dato correctamente");
  } else {
    band = false;
  }
}

band = true

while (band) {
  codigoProducto = prompt("Ingrese el codigo del producto");
  if (campoVacio(codigoProducto)) {
    alert("Ingrese el dato correctamente");
  } else {
    band = false;
  }
}

band = true

while (band) {
  presentacionProducto = prompt("Ingrese la presentacion del producto");
  if (campoVacio(presentacionProducto)) {
    alert("Ingrese el dato correctamente");
  } else {
    band = false;
  }
}

band = true

while (band) {
  precioProducto = Number(prompt("Ingrese el precio del producto"));
  if (campoVacio(precioProducto)) {
    alert("Ingrese el dato correctamente");
  } else {
    band = false;
  }
}

//Instanciación de un nuevo objeto del tipo Product
let nuevoProducto = new Product(nombreProducto, codigoProducto, presentacionProducto, precioProducto);

//Utilizamos el método mostrarProducto del objeto para mostrar los datos ingresados
nuevoProducto.mostrarProducto();

//Calcular el precio final de venta del producto utilizando el otro método
let precioFinal = nuevoProducto.calcularPrecioVenta();
alert("El precio de venta del producto es: $" + precioFinal);