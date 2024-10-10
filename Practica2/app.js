// Función para generar 20 números aleatorios y separarlos en pares e impares
function generarNumeros() {
    const numerosAleatorios = [];

    // Generar 20 números aleatorios y agregarlos a la lista
    for (let i = 0; i < 20; i++) {
        const numero = Math.floor(Math.random() * 100) + 1; // Generar número aleatorio entre 1 y 100
        numerosAleatorios.push(numero);
    }

    // Separar la lista en pares e impares
    const numerosPares = numerosAleatorios.filter(numero => numero % 2 === 0);
    const numerosImpares = numerosAleatorios.filter(numero => numero % 2 !== 0);

    // Actualizar la interfaz de usuario
    mostrarNumeros(numerosPares, 'columnaPares');
    mostrarNumeros(numerosImpares, 'columnaImpares');
}

// Función para mostrar los números en la columna correspondiente
function mostrarNumeros(listaNumeros, columnaId) {
    const columna = document.getElementById(columnaId);
    columna.innerHTML = ''; // Limpiar la lista

    // Agregar cada número como un elemento de lista
    listaNumeros.forEach(numero => {
        const li = document.createElement('li');
        li.textContent = numero; // Asignar el número al elemento de lista
        columna.appendChild(li);
    });
}
