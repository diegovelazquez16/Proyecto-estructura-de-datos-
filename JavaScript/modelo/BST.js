import Nodo from './Nodo.js';

class BST {
    constructor() {
        this.raiz = null;
    }

    agregar(bebida) {
        const nuevoNodo = new Nodo(bebida);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.agregarNodo(this.raiz, nuevoNodo);
        }
    }

    agregarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.bebida.nombre.toLowerCase() < nodo.bebida.nombre.toLowerCase()) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.agregarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this.agregarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    buscar(nombre) {
        return this.buscarNodo(this.raiz, nombre.toLowerCase());
    }

    buscarNodo(nodo, nombre) {
        if (nodo === null) {
            return null;
        }
        if (nombre === nodo.bebida.nombre.toLowerCase()) {
            return nodo.bebida;
        }
        if (nombre < nodo.bebida.nombre.toLowerCase()) {
            return this.buscarNodo(nodo.izquierda, nombre);
        } else {
            return this.buscarNodo(nodo.derecha, nombre);
        }
    }

    obtenerPrecioMinimo() {
        if (this.raiz === null) return null;
        let nodoActual = this.raiz;
        while (nodoActual.izquierda !== null) {
            nodoActual = nodoActual.izquierda;
        }
        return nodoActual.bebida;
    }

    obtenerPrecioMaximo() {
        if (this.raiz === null) return null;
        let nodoActual = this.raiz;
        while (nodoActual.derecha !== null) {
            nodoActual = nodoActual.derecha;
        }
        return nodoActual.bebida;
    }

    obtenerTodasLasBebidas() {
        const bebidas = [];
        this.inOrden(this.raiz, bebidas);
        return bebidas;
    }

    inOrden(nodo, bebidas) {
        if (nodo !== null) {
            this.inOrden(nodo.izquierda, bebidas);
            bebidas.push(nodo.bebida);
            this.inOrden(nodo.derecha, bebidas);
        }
    }
}

export default BST;
