import Nodo from './Nodo.js';
class BST {
    constructor() {
        this.raiz = null;
    }

    insertar(dato) {
        const nuevoNodo = new Nodo(dato);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.insertarNodo(this.raiz, nuevoNodo);
        }
    }

    insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.dato.nombre < nodo.dato.nombre) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this.insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    buscar(dato) {
        return this.buscarNodo(this.raiz, dato);
    }

    buscarNodo(nodo, dato) {
        if (nodo === null) {
            return null;
        }
        if (dato.nombre < nodo.dato.nombre) {
            return this.buscarNodo(nodo.izquierda, dato);
        } else if (dato.nombre > nodo.dato.nombre) {
            return this.buscarNodo(nodo.derecha, dato);
        } else {
            return nodo.dato;
        }
    }

    obtenerNodoMinimo(nodo = this.raiz) {
        while (nodo && nodo.izquierda !== null) {
            nodo = nodo.izquierda;
        }
        return nodo;
    }

    obtenerNodoMaximo(nodo = this.raiz) {
        while (nodo && nodo.derecha !== null) {
            nodo = nodo.derecha;
        }
        return nodo;
    }

    inOrden() {
        let resultado = [];
        this.inOrdenRecursivo(this.raiz, resultado);
        return resultado;
    }

    inOrdenRecursivo(nodo, resultado) {
        if (nodo !== null) {
            this.inOrdenRecursivo(nodo.izquierda, resultado);
            resultado.push(nodo.dato);
            this.inOrdenRecursivo(nodo.derecha, resultado);
        }
    }
}

export default BST;
