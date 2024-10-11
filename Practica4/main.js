// Inicializar la lista enlazada para productos
const listaProductos = new ListaEnlazada();

// Función para agregar un producto con su precio
function agregarProducto() {
  const nombre = document.getElementById('nombreProducto').value.trim();
  const precio = parseFloat(document.getElementById('precioProducto').value);
  const clave = Math.floor(Math.random() * 10000); // Generar clave aleatoria

  // Validar que el nombre y el precio no estén vacíos
  if (nombre === '' || isNaN(precio) || precio <= 0) {
    alert('Por favor ingresa un nombre y un precio válidos.');
    return;
  }

  // Crear un nuevo producto y agregarlo a la lista
  const nuevoProducto = { nombre, precio, clave };
  listaProductos.agregarProducto(nuevoProducto);

  // Limpiar los campos de entrada
  document.getElementById('nombreProducto').value = '';
  document.getElementById('precioProducto').value = '';

  // Actualizar la interfaz de usuario
  actualizarUI();
}

// Función para eliminar un producto por clave
function eliminarProducto() {
  const clave = parseInt(document.getElementById('claveEliminar').value);
  if (isNaN(clave)) {
    alert('Por favor ingresa una clave de producto válida.');
    return;
  }

  listaProductos.eliminarProducto(clave);
  document.getElementById('claveEliminar').value = '';
  actualizarUI();
}

// Función para ordenar productos por nombre
function ordenarProductos() {
  listaProductos.ordenarPorNombre();
  actualizarUI();
}

// Función para actualizar la interfaz de usuario
function actualizarUI() {
  const listaProductosElem = document.getElementById('listaProductos');
  const costoTotalElem = document.getElementById('costoTotal');

  listaProductosElem.innerHTML = '';

  listaProductos.recorrer(producto => {
    const li = document.createElement('li');
    li.textContent = `Nombre: ${producto.nombre} - Precio: $${producto.precio.toFixed(2)} - Clave: ${producto.clave}`;
    listaProductosElem.appendChild(li);
  });

  const costoTotal = listaProductos.calcularCostoTotal();
  costoTotalElem.textContent = `$${costoTotal.toFixed(2)}`;
}

// Inicializar la interfaz de usuario
actualizarUI();
