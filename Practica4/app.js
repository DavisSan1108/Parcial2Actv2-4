// Listas para almacenar los productos y los eliminados
let productos = [];
let productosEliminados = [];

// Función para generar un código único de al menos 3 dígitos
function generarCodigoUnico() {
    return Math.floor(Math.random() * 9000) + 1000; // Genera un número aleatorio de 4 dígitos entre 1000 y 9999
}

// Función para agregar un producto a la lista
function agregarProducto() {
    const nombre = document.getElementById('nombreProducto').value.trim();
    const precio = parseFloat(document.getElementById('precioProducto').value);

    // Validar que el nombre y el precio no estén vacíos y sean válidos
    if (nombre === '' || isNaN(precio) || precio <= 0) {
        alert('Por favor ingresa un nombre y un precio válidos.');
        return;
    }

    // Generar un código único para el producto
    let codigo;
    do {
        codigo = generarCodigoUnico();
    } while (productos.some(producto => producto.codigo === codigo)); // Asegurarse de que el código sea único

    // Crear un nuevo producto y agregarlo a la lista
    const nuevoProducto = {
        codigo: codigo,  // Asignar el código único
        nombre: nombre,
        precio: precio
    };

    productos.push(nuevoProducto);

    // Limpiar los campos de entrada
    document.getElementById('nombreProducto').value = '';
    document.getElementById('precioProducto').value = '';

    // Actualizar la lista y el costo total
    actualizarUI();
}

// Función para eliminar un producto por su código único
function eliminarProducto() {
    const codigo = parseInt(document.getElementById('codigoEliminar').value);

    // Buscar el producto y moverlo a la lista de eliminados
    const index = productos.findIndex(producto => producto.codigo === codigo);
    if (isNaN(codigo) || index === -1) {
        alert('Por favor ingresa un código de producto válido.');
        return;
    }

    // Mover el producto eliminado a la lista de productos eliminados
    productosEliminados.push(productos.splice(index, 1)[0]);

    document.getElementById('codigoEliminar').value = '';
    actualizarUI();
}

// Función para restaurar un producto de la lista de eliminados a la lista principal
function restaurarProducto(codigo) {
    const index = productosEliminados.findIndex(producto => producto.codigo === codigo);

    // Mover el producto de nuevo a la lista principal
    productos.push(productosEliminados.splice(index, 1)[0]);
    actualizarUI();
}

// Función para ordenar los productos por nombre
function ordenarPorNombre() {
    productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
    actualizarUI();
}

// Función para actualizar la interfaz de usuario
function actualizarUI() {
    const listaProductosElem = document.getElementById('listaProductos');
    const listaEliminadosElem = document.getElementById('listaEliminados');
    const costoTotalElem = document.getElementById('costoTotal');

    listaProductosElem.innerHTML = '';
    listaEliminadosElem.innerHTML = '';

    // Mostrar productos actuales
    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `Código: ${producto.codigo} - ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;
        listaProductosElem.appendChild(li);
    });

    // Mostrar productos eliminados
    productosEliminados.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `Código: ${producto.codigo} - ${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`;
        const restoreButton = document.createElement('button');
        restoreButton.textContent = 'Restaurar';
        restoreButton.onclick = () => restaurarProducto(producto.codigo);
        li.appendChild(restoreButton);
        listaEliminadosElem.appendChild(li);
    });

    // Calcular el costo total
    const costoTotal = productos.reduce((total, producto) => total + producto.precio, 0);
    costoTotalElem.textContent = `$${costoTotal.toFixed(2)}`;
}

// Inicializar la interfaz de usuario
actualizarUI();
