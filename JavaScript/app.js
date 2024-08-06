import Inventario from './modelo/Inventario.js';
import VistaBebida from './vista/VistaBebida.js';
import ControladorInventario from './controlador/ControladorInventario.js';

document.addEventListener('DOMContentLoaded', () => {
    const inventario = new Inventario();
    const vistaBebida = new VistaBebida();
    new ControladorInventario(inventario, vistaBebida);
});
//ok