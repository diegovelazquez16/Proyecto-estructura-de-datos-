import Bebida from './Bebida.js';
import BST from './BST.js';

class Inventario {
    constructor() {
        this.arbol = new BST();
    }

    agregarBebida(bebida) {
        this.arbol.agregar(bebida);
    }

    buscarBebida(nombre) {
        return this.arbol.buscar(nombre);
    }

    obtenerPrecioMinimo() {
        return this.arbol.obtenerPrecioMinimo();
    }

    obtenerPrecioMaximo() {
        return this.arbol.obtenerPrecioMaximo();
    }

    obtenerTodasLasBebidas() {
        return this.arbol.obtenerTodasLasBebidas();
    }
}

export default Inventario;
//ok