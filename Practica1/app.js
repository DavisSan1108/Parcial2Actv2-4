// Variables para almacenar los productos disponibles y los retirados
let productosDisponibles = [];
let productosRetirados = [];

// Función para agregar productos a la lista
function agregarProducto() {
    const nombreProducto = `Producto${productosDisponibles.length + 1}`;
    const cantidad = Math.floor(Math.random() * 20) + 1; // Cantidad aleatoria entre 1 y 20
    const precio = (Math.random() * 50 + 1).toFixed(2);  // Precio aleatorio entre 1 y 50

    const nuevoProducto = {
        id: Date.now(), // ID único basado en el tiempo actual
        nombre: nombreProducto,
        cantidad: cantidad,
        precio: precio
    };

    productosDisponibles.push(nuevoProducto);
    actualizarUI();
}

// Función para eliminar un producto específico de la lista de disponibles
function eliminarProducto(id) {
    // Buscar el índice del producto con el ID proporcionado
    const index = productosDisponibles.findIndex(producto => producto.id === id);

    if (index !== -1) {
        // Mover el producto a la lista de retirados
        productosRetirados.push(productosDisponibles[index]);
        // Eliminar el producto de la lista de disponibles
        productosDisponibles.splice(index, 1);
        actualizarUI();
    }
}

// Función para actualizar la interfaz de usuario
function actualizarUI() {
    const listaProductos = document.getElementById('listaProductos');
    const listaProductosRetirados = document.getElementById('listaProductosRetirados');
    const totalProductos = document.getElementById('totalProductos');
    const productosRetiradosElem = document.getElementById('productosRetirados');

    // Actualizar lista de productos disponibles
    listaProductos.innerHTML = '';
    productosDisponibles.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${producto.nombre}</span> - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}
                        <button onclick="eliminarProducto(${producto.id})">Retirar</button>`;
        listaProductos.appendChild(li);
    });

    // Actualizar lista de productos retirados
    listaProductosRetirados.innerHTML = '';
    productosRetirados.forEach(producto => {
        const li = document.createElement('li');
        li.innerHTML = `<span>${producto.nombre}</span> - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}`;
        listaProductosRetirados.appendChild(li);
    });

    // Actualizar contadores de productos
    totalProductos.textContent = `Productos disponibles: ${productosDisponibles.length}`;
    productosRetiradosElem.textContent = `Productos retirados: ${productosRetirados.length}`;
}

// Inicializar la interfaz de usuario al cargar la página
actualizarUI();
