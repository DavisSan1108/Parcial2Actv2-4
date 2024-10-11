// Definir la clase de lista enlazada
class ListaEnlazada {
  constructor() {
    this.head = null; // Nodo inicial (cabeza de la lista)
  }

  // Método para agregar productos a la lista enlazada
  agregarProducto(producto) {
    const nuevoNodo = new Nodo(producto);
    if (!this.head) {
      this.head = nuevoNodo; // Si la lista está vacía, el nuevo producto es la cabeza
    } else {
      let actual = this.head;
      while (actual.next) {
        actual = actual.next; // Recorrer la lista hasta el último nodo
      }
      actual.next = nuevoNodo; // Agregar el nuevo nodo al final
    }
  }

  // Método para eliminar productos de la lista enlazada por clave
  eliminarProducto(clave) {
    if (!this.head) return null;

    // Si el producto a eliminar es el primero
    if (this.head.data.clave === clave) {
      this.head = this.head.next;
      return;
    }

    let actual = this.head;
    while (actual.next) {
      if (actual.next.data.clave === clave) {
        actual.next = actual.next.next;
        return;
      }
      actual = actual.next;
    }
  }

  // Método para recorrer la lista y ejecutar una función callback
  recorrer(callback) {
    let actual = this.head;
    while (actual) {
      callback(actual.data);
      actual = actual.next;
    }
  }

  // Método para ordenar los productos por nombre (sin usar arreglos)
  ordenarPorNombre() {
    if (!this.head || !this.head.next) return; // Si la lista está vacía o tiene un solo nodo, no se hace nada

    let cambiado;
    do {
      cambiado = false;
      let actual = this.head;

      while (actual.next) {
        if (actual.data.nombre.localeCompare(actual.next.data.nombre) > 0) {
          // Intercambiar los datos entre nodos
          const temp = actual.data;
          actual.data = actual.next.data;
          actual.next.data = temp;
          cambiado = true;
        }
        actual = actual.next;
      }
    } while (cambiado);
  }

  // Método para calcular el costo total de los productos
  calcularCostoTotal() {
    let total = 0;
    this.recorrer(producto => {
      total += producto.precio;
    });
    return total;
  }
}
