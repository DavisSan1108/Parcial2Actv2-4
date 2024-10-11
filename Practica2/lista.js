// Definir la clase de lista enlazada para los números
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

  // Método para iterar sobre la lista enlazada
  iterar(callback) {
      let actual = this.head;
      while (actual) {
          callback(actual.data);
          actual = actual.next;
      }
  }

  // Limpiar la lista enlazada
  limpiar() {
      this.head = null;  // Eliminar todos los nodos de la lista
  }
}
