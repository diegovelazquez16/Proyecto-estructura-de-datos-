import Bebida from './Bebida.js';
import BST from './BST.js';

class Inventario {
    constructor() {
        this.bebidas = new BST();
    }

    agregarBebida(bebida) {
        this.bebidas.insertar(bebida);
    }

    buscarBebida(nombre) {
        const bebida = new Bebida(nombre, null, null, null);
        return this.bebidas.buscar(bebida);
    }

    obtenerPrecioMinimo() {
        const minNodo = this.bebidas.obtenerNodoMinimo();
        return minNodo ? minNodo.dato : null;
    }

    obtenerPrecioMaximo() {
        const maxNodo = this.bebidas.obtenerNodoMaximo();
        return maxNodo ? maxNodo.dato : null;
    }

    obtenerTodasLasBebidas() {
        return this.bebidas.inOrden();
    }
}

export default Inventario;
