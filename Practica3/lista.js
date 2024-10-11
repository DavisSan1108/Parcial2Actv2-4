// Definir la clase de lista enlazada
class Lista {
  constructor() {
      this.head = null; // Nodo inicial (cabeza de la lista)
  }

  // Método para agregar nodos a la lista enlazada
  agregarNodo(data) {
      const nuevoNodo = new Nodo(data);
      if (!this.head) {
          this.head = nuevoNodo; // Si la lista está vacía, el nuevo nodo es la cabeza
      } else {
          let actual = this.head;
          while (actual.next) {
              actual = actual.next; // Recorrer la lista hasta el último nodo
          }
          actual.next = nuevoNodo; // Agregar el nuevo nodo al final
      }
  }

  // Método para recorrer todos los nodos y aplicar una acción
  recorrer(callback) {
      let actual = this.head;
      while (actual) {
          callback(actual.data); // Aplicar la función callback a cada nodo
          actual = actual.next;
      }
  }

  // Limpiar la lista enlazada
  limpiar() {
      this.head = null; // Eliminar todos los nodos de la lista
  }
}
