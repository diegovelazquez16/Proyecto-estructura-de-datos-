class Bebida {
    constructor(nombre, precio, cantidad, mililitros) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.mililitros = mililitros;
    }
}

class NodoBebida {
    constructor(bebida) {
        this.bebida = bebida;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ModeloBebida {
    constructor() {
        this.raiz = null;
    }

    agregarBebida(bebida) {
        const nuevoNodo = new NodoBebida(bebida);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this.#insertarNodo(this.raiz, nuevoNodo);
        }
    }

    #insertarNodo(nodo, nuevoNodo) {
        if (nuevoNodo.bebida.nombre < nodo.bebida.nombre) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this.#insertarNodo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this.#insertarNodo(nodo.derecha, nuevoNodo);
            }
        }
    }

    recorrerInOrder(callback) {
        this.#inOrder(this.raiz, callback);
    }

    #inOrder(nodo, callback) {
        if (nodo !== null) {
            this.#inOrder(nodo.izquierda, callback);
            callback(nodo.bebida);
            this.#inOrder(nodo.derecha, callback);
        }
    }

    buscarBebidaPorNombre(nombre) {
        return this.#buscarNodo(this.raiz, nombre);
    }

    #buscarNodo(nodo, nombre) {
        if (nodo === null) {
            return null;
        } else if (nombre < nodo.bebida.nombre) {
            return this.#buscarNodo(nodo.izquierda, nombre);
        } else if (nombre > nodo.bebida.nombre) {
            return this.#buscarNodo(nodo.derecha, nombre);
        } else {
            return nodo.bebida;
        }
    }

    obtenerBebidaMenorPrecio() {
        if (this.raiz === null) {
            return null;
        }
        let nodo = this.raiz;
        while (nodo.izquierda !== null) {
            nodo = nodo.izquierda;
        }
        return nodo.bebida;
    }

    obtenerBebidaMayorPrecio() {
        if (this.raiz === null) {
            return null;
        }
        let nodo = this.raiz;
        while (nodo.derecha !== null) {
            nodo = nodo.derecha;
        }
        return nodo.bebida;
    }
}
