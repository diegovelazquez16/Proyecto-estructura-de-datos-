import Inventario from '../modelo/Inventario.js';
import VistaBebida from '../vista/VistaBebida.js';
import Bebida from '../modelo/Bebida.js';

class ControladorInventario {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;

        this.vista.bindAgregarBebida(this.handleAgregarBebida.bind(this));
        this.vista.bindBuscarBebida(this.handleBuscarBebida.bind(this));
        this.vista.bindObtenerPrecioMinimo(this.handleObtenerPrecioMinimo.bind(this));
        this.vista.bindObtenerPrecioMaximo(this.handleObtenerPrecioMaximo.bind(this));
        this.vista.bindImprimirTodas(this.handleImprimirTodas.bind(this));
    }

    handleAgregarBebida(nombre, precio, cantidad, mililitros) {
        const bebida = new Bebida(nombre, precio, cantidad, mililitros);
        this.modelo.agregarBebida(bebida);
        this.vista.mostrarModalExito();
    }

    handleBuscarBebida(nombre) {
        const bebida = this.modelo.buscarBebida(nombre);
        this.vista.mostrarResultadoBusqueda(bebida);
    }

    handleObtenerPrecioMinimo() {
        const bebida = this.modelo.obtenerPrecioMinimo();
        this.vista.mostrarResultadoPrecioMinimo(bebida);
    }

    handleObtenerPrecioMaximo() {
        const bebida = this.modelo.obtenerPrecioMaximo();
        this.vista.mostrarResultadoPrecioMaximo(bebida);
    }

    handleImprimirTodas() {
        const bebidas = this.modelo.obtenerTodasLasBebidas();
        this.vista.mostrarTodasBebidas(bebidas);
    }
}

export default ControladorInventario;
//ok