class VistaBebida {
    constructor() {
        this.botonAgregar = document.getElementById('botonAgregar');
        this.botonBuscar = document.getElementById('botonBuscar');
        this.botonPrecioMinimo = document.getElementById('botonPrecioMinimo');
        this.botonPrecioMaximo = document.getElementById('botonPrecioMaximo');
        this.botonImprimirTodas = document.getElementById('botonImprimirTodas');
    }

    bindAgregarBebida(handler) {
        this.botonAgregar.addEventListener('click', () => {
            const nombre = document.getElementById('nombre').value;
            const precio = parseFloat(document.getElementById('precio').value);
            const cantidad = parseInt(document.getElementById('cantidad').value, 10);
            const mililitros = parseInt(document.getElementById('mililitros').value, 10);
            handler(nombre, precio, cantidad, mililitros);
        });
    }

    bindBuscarBebida(handler) {
        this.botonBuscar.addEventListener('click', () => {
            const nombre = document.getElementById('nombreBuscar').value;
            handler(nombre);
        });
    }

    bindObtenerPrecioMinimo(handler) {
        this.botonPrecioMinimo.addEventListener('click', () => {
            handler();
        });
    }

    bindObtenerPrecioMaximo(handler) {
        this.botonPrecioMaximo.addEventListener('click', () => {
            handler();
        });
    }

    bindImprimirTodas(handler) {
        this.botonImprimirTodas.addEventListener('click', () => {
            handler();
        });
    }

    // Métodos para mostrar resultados
    mostrarResultadoBusqueda(bebida) {
        const resultadoBusqueda = document.getElementById('resultadoBusqueda');
        resultadoBusqueda.innerHTML = bebida
            ? `${bebida.nombre} - $${bebida.precio} - ${bebida.cantidad} unidades - ${bebida.mililitros} mL`
            : 'Bebida no encontrada';
    }

    mostrarResultadoPrecioMinimo(bebida) {
        const resultadoPrecioMinimo = document.getElementById('resultadoPrecioMinimo');
        resultadoPrecioMinimo.innerHTML = bebida
            ? `${bebida.nombre} - $${bebida.precio} - ${bebida.cantidad} unidades - ${bebida.mililitros} mL`
            : 'No hay bebidas disponibles';
    }

    mostrarResultadoPrecioMaximo(bebida) {
        const resultadoPrecioMaximo = document.getElementById('resultadoPrecioMaximo');
        resultadoPrecioMaximo.innerHTML = bebida
            ? `${bebida.nombre} - $${bebida.precio} - ${bebida.cantidad} unidades - ${bebida.mililitros} mL`
            : 'No hay bebidas disponibles';
    }

    mostrarTodasBebidas(bebidas) {
        const resultadoTodasBebidas = document.getElementById('resultadoTodasBebidas');
        resultadoTodasBebidas.innerHTML = bebidas.map(bebida => 
            `${bebida.nombre} - $${bebida.precio} - ${bebida.cantidad} unidades - ${bebida.mililitros} mL`
        ).join('<br>');
    }
}
