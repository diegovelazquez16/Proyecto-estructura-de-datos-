class VistaBebida {
    constructor() {
        this.botonAgregar = document.getElementById('botonAgregar');
        this.botonBuscar = document.getElementById('botonBuscar');
        this.botonPrecioMinimo = document.getElementById('botonPrecioMinimo');
        this.botonPrecioMaximo = document.getElementById('botonPrecioMaximo');
        this.botonImprimirTodas = document.getElementById('botonImprimirTodas');

        this.nombre = document.getElementById('nombre');
        this.precio = document.getElementById('precio');
        this.cantidad = document.getElementById('cantidad');
        this.mililitros = document.getElementById('mililitros');
        this.nombreBuscar = document.getElementById('nombreBuscar');
        
        this.resultadoBusqueda = document.getElementById('resultadoBusqueda');
        this.resultadoPrecioMinimo = document.getElementById('resultadoPrecioMinimo');
        this.resultadoPrecioMaximo = document.getElementById('resultadoPrecioMaximo');
        this.resultadoTodasBebidas = document.getElementById('resultadoTodasBebidas');
        
        this.modal = document.getElementById('modalFuncional');
        this.modalClose = document.querySelector('.modal-close');

        this.modalClose.addEventListener('click', () => {
            this.modal.style.display = 'none';
        });
    }

    bindAgregarBebida(handler) {
        this.botonAgregar.addEventListener('click', () => {
            handler(
                this.nombre.value,
                parseFloat(this.precio.value),
                parseInt(this.cantidad.value),
                parseFloat(this.mililitros.value)
            );
        });
    }

    bindBuscarBebida(handler) {
        this.botonBuscar.addEventListener('click', () => {
            handler(this.nombreBuscar.value);
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

    mostrarResultadoBusqueda(bebida) {
        this.resultadoBusqueda.innerHTML = bebida ? `
            <p>Nombre: ${bebida.nombre}</p>
            <p>Precio: ${bebida.precio}</p>
            <p>Cantidad: ${bebida.cantidad}</p>
            <p>Mililitros: ${bebida.mililitros}</p>
        ` : '<p>Bebida no encontrada</p>';
    }

    mostrarResultadoPrecioMinimo(bebida) {
        this.resultadoPrecioMinimo.innerHTML = bebida ? `
            <p>Nombre: ${bebida.nombre}</p>
            <p>Precio: ${bebida.precio}</p>
            <p>Cantidad: ${bebida.cantidad}</p>
            <p>Mililitros: ${bebida.mililitros}</p>
        ` : '<p>No hay bebidas en el inventario</p>';
    }

    mostrarResultadoPrecioMaximo(bebida) {
        this.resultadoPrecioMaximo.innerHTML = bebida ? `
            <p>Nombre: ${bebida.nombre}</p>
            <p>Precio: ${bebida.precio}</p>
            <p>Cantidad: ${bebida.cantidad}</p>
            <p>Mililitros: ${bebida.mililitros}</p>
        ` : '<p>No hay bebidas en el inventario</p>';
    }

    mostrarTodasBebidas(bebidas) {
        this.resultadoTodasBebidas.innerHTML = '';
        for (const bebida of bebidas) {
            this.resultadoTodasBebidas.innerHTML += `
                <p>Nombre: ${bebida.nombre}</p>
                <p>Precio: ${bebida.precio}</p>
                <p>Cantidad: ${bebida.cantidad}</p>
                <p>Mililitros: ${bebida.mililitros}</p>
                <hr>
            `;
        }
    }

    mostrarModalExito() {
        this.modal.style.display = 'block';
    }
}

export default VistaBebida;
