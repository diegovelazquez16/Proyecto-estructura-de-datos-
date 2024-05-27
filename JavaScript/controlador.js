class ControladorBebida {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        if (document.getElementById('botonAgregar')) {
            this.vista.bindAgregarBebida(this.manejarAgregarBebida);
        }

        if (document.getElementById('botonBuscar')) {
            this.vista.bindBuscarBebida(this.manejarBuscarBebida);
            this.vista.bindObtenerPrecioMinimo(this.manejarObtenerPrecioMinimo);
            this.vista.bindObtenerPrecioMaximo(this.manejarObtenerPrecioMaximo);
            this.vista.bindImprimirTodas(this.manejarImprimirTodas);
        }
    }

    manejarAgregarBebida = (nombre, precio, cantidad, mililitros) => {
        const bebida = new Bebida(nombre, precio, cantidad, mililitros);
        this.modelo.agregarBebida(bebida);
    }

    manejarBuscarBebida = (nombre) => {
        const bebida = this.modelo.buscarBebidaPorNombre(nombre);
        this.vista.mostrarResultadoBusqueda(bebida);
    }

    manejarObtenerPrecioMinimo = () => {
        const bebida = this.modelo.obtenerBebidaMenorPrecio();
        this.vista.mostrarResultadoPrecioMinimo(bebida);
    }

    manejarObtenerPrecioMaximo = () => {
        const bebida = this.modelo.obtenerBebidaMayorPrecio();
        this.vista.mostrarResultadoPrecioMaximo(bebida);
    }

    manejarImprimirTodas = () => {
        const bebidas = [];
        this.modelo.recorrerInOrder(bebida => bebidas.push(bebida));
        this.vista.mostrarTodasBebidas(bebidas);
    }
}

const modeloBebida = new ModeloBebida();
const vistaBebida = new VistaBebida();
const controladorBebida = new ControladorBebida(modeloBebida, vistaBebida);
