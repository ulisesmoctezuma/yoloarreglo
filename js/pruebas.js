function correr() {
    function domTest() {
        let contenedorCotizador = document.createElement("div");
        contenedorCotizador.innerHTML = `<h2>Cotización de limpieza residencial</h2>
                                        <h4>Cliente:</h4>
                                        <p id="nombre-cliente">Ulises Moctezuma</p><br>
        
        `;
        document.getElementById('cotizador').appendChild(contenedorCotizador);
    }

    domTest();
}