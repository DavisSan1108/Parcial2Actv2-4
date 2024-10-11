// Definir la clase de lista enlazada para los productos
class ListaEnlazada {
  constructor() {
      this.head = null;  // Nodo inicial (cabeza de la lista)
  }

  // Método para agregar nodos a la lista
  agregarNodo(data) {
      const nuevoNodo = new Nodo(data);
      if (!this.head) {
          this.head = nuevoNodo;  // Si la lista está vacía, el nuevo nodo es la cabeza
      } else {
          let actual = this.head;
          while (actual.next) {
              actual = actual.next;  // Recorre hasta el final
          }
          actual.next = nuevoNodo;  // Añadir el nodo al final
      }
  }

  // Método para eliminar nodos de la lista
  eliminarNodo(id) {
      if (!this.head) return null;

      // Si el nodo a eliminar es el primero
      if (this.head.data.id === id) {
          const eliminado = this.head;
          this.head = this.head.next;
          return eliminado.data;
      }

      let actual = this.head;
      while (actual.next) {
          if (actual.next.data.id === id) {
              const eliminado = actual.next;
              actual.next = actual.next.next;
              return eliminado.data;
          }
          actual = actual.next;
      }
      return null;
  }

  // Método para iterar sobre la lista enlazada
  iterar(callback) {
      let actual = this.head;
      while (actual) {
          callback(actual.data);
          actual = actual.next;
      }
  }

  // Obtener la longitud de la lista enlazada
  longitud() {
      let actual = this.head;
      let contador = 0;
      while (actual) {
          contador++;
          actual = actual.next;
      }
      return contador;
  }

  // Obtener el precio total de los productos
  obtenerPrecioTotal() {
      let actual = this.head;
      let total = 0;
      while (actual) {
          total += parseFloat(actual.data.precio);
          actual = actual.next;
      }
      return total.toFixed(2); // Retornar el total formateado con dos decimales
  }
}
