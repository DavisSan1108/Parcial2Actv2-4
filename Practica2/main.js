// Inicializar las listas enlazadas para números pares e impares
const listaPares = new ListaEnlazada();
const listaImpares = new ListaEnlazada();

// Función para generar 20 números aleatorios y separarlos en pares e impares
function generarNumeros() {
    // Limpiar las listas anteriores
    listaPares.limpiar();
    listaImpares.limpiar();

    // Generar 20 números aleatorios y agregarlos a la lista enlazada correspondiente
    for (let i = 0; i < 20; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;  // Generar número aleatorio entre 1 y 100
        if (numero % 2 === 0) {
            listaPares.agregarNodo(numero);  // Agregar a lista de pares
        } else {
            listaImpares.agregarNodo(numero);  // Agregar a lista de impares
        }
    }

    // Mostrar las listas actualizadas
    mostrarNumeros(listaPares, 'columnaPares');
    mostrarNumeros(listaImpares, 'columnaImpares');
}

// Función para mostrar los números en la columna correspondiente
function mostrarNumeros(listaNumeros, columnaId) {
    const columna = document.getElementById(columnaId);
    columna.innerHTML = '';  // Limpiar la lista actual

    // Agregar cada número como un elemento de lista
    listaNumeros.iterar(numero => {
        const li = document.createElement('li');
        li.textContent = numero;  // Asignar el número al elemento de lista
        columna.appendChild(li);
    });
}
