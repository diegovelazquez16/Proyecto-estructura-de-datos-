import Bebida from './Bebida.js';

class Inventario {
    constructor() {
        this.bebidas = [];
    }

    agregarBebida(bebida) {
        this.bebidas.push(bebida);
    }

    buscarBebida(nombre) {
        return this.bebidas.find(bebida => bebida.nombre.toLowerCase() === nombre.toLowerCase());
    }

    obtenerPrecioMinimo() {
        if (this.bebidas.length === 0) return null;
        return this.bebidas.reduce((min, bebida) => bebida.precio < min.precio ? bebida : min);
    }

    obtenerPrecioMaximo() {
        if (this.bebidas.length === 0) return null;
        return this.bebidas.reduce((max, bebida) => bebida.precio > max.precio ? bebida : max);
    }

    obtenerTodasLasBebidas() {
        return this.bebidas;
    }
}

export default Inventario;
