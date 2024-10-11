// Inicializar las listas enlazadas para productos disponibles y retirados
const productosDisponibles = new ListaEnlazada();
const productosRetirados = new ListaEnlazada();

// Contador para los nombres de productos
let contadorProductos = 1;

// Función para agregar productos
function agregarProducto() {
    const nombreProducto = `Producto${contadorProductos++}`;
    const cantidad = Math.floor(Math.random() * 20) + 1;  // Cantidad aleatoria entre 1 y 20
    const precio = (Math.random() * 50 + 1).toFixed(2);   // Precio aleatorio entre 1 y 50

    const nuevoProducto = {
        id: Date.now(),  // ID único basado en el tiempo actual
        nombre: nombreProducto,
        cantidad: cantidad,
        precio: precio
    };

    productosDisponibles.agregarNodo(nuevoProducto);
    actualizarUI();
}

// Función para eliminar un producto
function eliminarProducto(idProducto) {
    const productoEliminado = productosDisponibles.eliminarNodo(idProducto);
    if (productoEliminado) {
        productosRetirados.agregarNodo(productoEliminado);
        actualizarUI();
    }
}

// Función para actualizar la interfaz de usuario
function actualizarUI() {
    const listaProductosElem = document.getElementById('listaProductos');
    const listaProductosRetiradosElem = document.getElementById('listaProductosRetirados');
    const totalProductosElem = document.getElementById('totalProductos');
    const productosRetiradosElem = document.getElementById('productosRetirados');
    const precioTotalElem = document.getElementById('precioTotal');

    // Limpiar las listas
    listaProductosElem.innerHTML = '';
    listaProductosRetiradosElem.innerHTML = '';

    // Mostrar productos disponibles
    productosDisponibles.iterar(producto => {
        const li = document.createElement('li');
        li.innerHTML = `ID: ${producto.id} - ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio} 
                        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>`;
        listaProductosElem.appendChild(li);
    });

    // Mostrar productos retirados
    productosRetirados.iterar(producto => {
        const li = document.createElement('li');
        li.textContent = `ID: ${producto.id} - ${producto.nombre} - Cantidad: ${producto.cantidad} - Precio: $${producto.precio}`;
        listaProductosRetiradosElem.appendChild(li);
    });

    // Actualizar contadores de productos
    totalProductosElem.textContent = `Productos disponibles: ${productosDisponibles.longitud()}`;
    productosRetiradosElem.textContent = `Productos retirados: ${productosRetirados.longitud()}`;

    // Mostrar precio total de los productos disponibles
    precioTotalElem.textContent = `Precio total: $${productosDisponibles.obtenerPrecioTotal()}`;
}

// Inicializar la interfaz de usuario
actualizarUI();
