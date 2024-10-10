// Listas para almacenar los alumnos aprobados y reprobados
let listaAprobados = [];
let listaReprobados = [];

// Función para agregar un alumno con su calificación
function agregarAlumno() {
    const nombre = document.getElementById('nombre').value.trim();
    const calificacion = parseFloat(document.getElementById('calificacion').value);

    // Validar que el nombre y la calificación no estén vacíos y que la calificación esté en el rango correcto
    if (nombre === '' || isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        alert('Por favor ingresa un nombre válido y una calificación entre 0 y 10.');
        return;
    }

    // Clasificar al alumno como aprobado o reprobado
    if (calificacion >= 7) {
        listaAprobados.push({ nombre, calificacion });
    } else {
        listaReprobados.push({ nombre, calificacion });
    }

    // Limpiar los campos de entrada
    document.getElementById('nombre').value = '';
    document.getElementById('calificacion').value = '';

    // Actualizar la interfaz de usuario
    actualizarUI();
}

// Función para actualizar la lista de aprobados y reprobados en la interfaz
function actualizarUI() {
    const listaAprobadosElem = document.getElementById('listaAprobados');
    const listaReprobadosElem = document.getElementById('listaReprobados');

    // Limpiar las listas
    listaAprobadosElem.innerHTML = '';
    listaReprobadosElem.innerHTML = '';

    // Mostrar lista de aprobados
    listaAprobados.forEach(alumno => {
        const li = document.createElement('li');
        li.classList.add('aprobado'); // Asignar estilo de aprobado
        li.textContent = `${alumno.nombre} - Calificación: ${alumno.calificacion}`;
        listaAprobadosElem.appendChild(li);
    });

    // Mostrar lista de reprobados
    listaReprobados.forEach(alumno => {
        const li = document.createElement('li');
        li.classList.add('reprobado'); // Asignar estilo de reprobado
        li.textContent = `${alumno.nombre} - Calificación: ${alumno.calificacion}`;
        listaReprobadosElem.appendChild(li);
    });
}
