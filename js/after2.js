/*
//declaración de la función
function saludar () {
    console.log("Hola!");
}
​
//Ejecución de una función
saludar();
*/
​​
/*
//Por qué usar funciones? Para no tener código repetitivo, para reducir el código, para reutilizar el código
var nombreIngresado =prompt("Ingrese su nombre");
alert("El nombre ingresado es "+ nombreIngresado);
​
var nombreIngresado =prompt("Ingrese su nombre");
alert("El nombre ingresado es "+ nombreIngresado);
​
var nombreIngresado =prompt("Ingrese su nombre");
alert("El nombre ingresado es "+ nombreIngresado);
​
​
//Esta función encapsula las instrucciones anteriores y se puede llamar todas las veces necesarias
function solicitarNombre() {
    let nombreIngresado = prompt("Ingrese su nombre");
    console.log("El nombre ingresado es "+ nombreIngresado);
}
*/

/*
//Llamando de manera individual
solicitarNombre();
solicitarNombre();
solicitarNombre();
*/

//Llamando a la función dentro un for, acá puedo hacer 20 iteraciones si quiero, o 1000 (no se los recomiendo jeje)
for (let index = 0; index < 3; index++) {
    solicitarNombre();
}



//Declaración y ejecución de una funcion con parametros
function sumar(numero1, numero2) {
    let resultado = numero1 + numero2;
    console.log(resultado);
}​
sumar(82000, 95000);
sumar(125, 245);

/*
//Acá, una función que hace más de una tarea. Esto no debería pasar
function restarYMostrar(numero1,numero2){
    let resultado = numero1-numero2;
    console.log(resultado);
}
*/

/*
//Acá dividimos las tareas
​
let resultado = 0;
function restar(numero1,numero2){
    resultado = numero1-numero2;
}
​
function mostrar(mensaje) {
    console.log(mensaje);    
}
​
//Ejecución de las funciones
​
restar(5,8);
mostrar(resultado);
*/

/*
//Pasar una variable como parámetro
let numeroA = parseFloat(prompt("Ingrese un numero: "));
restar(numeroA,120);
*/

/*
//Declarar una función con return
function multiplicar(numero1,numero2) {
    return numero1*numero2;
}
​
mostrar(multiplicar(2,3));
*/

/*
//Funciones anónimas (lambda)
const suma = function(num1,num2){return num1+num2};
​
console.log(suma (12,20));
*/
​​
/*
//Funciones flecha (arrow functions)
const resta = (num1,num2) =>{return num1-num2};
​
const multiplicacion = (num1,num2) => num1*num2;
​
console.log(resta(30,10));
*/