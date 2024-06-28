document.getElementById('botonAgregar').addEventListener('click', agregarTarea);

function agregarTarea() {
    const entradaTarea = document.getElementById('entradaTarea');

    const textoTarea = entradaTarea.value.trim();

    const listaTareas = document.getElementById('listaTareas');

    const elementoLista = document.createElement('li');

    elementoLista.className = 'list-group-item d-flex justify-content-between align-items-center';
    const tareaSpan = document.createElement('span');
    
    tareaSpan.textContent = textoTarea;

    const grupoBotones = document.createElement('div');

    const botonCompletar = document.createElement('button');
    botonCompletar.className = 'btn btn-success btn-sm mr-2';
    botonCompletar.textContent = 'Completar';
    botonCompletar.addEventListener('click', function() {
        tareaSpan.classList.toggle('completada');
        if (tareaSpan.classList.contains('completada')) {
            botonCompletar.innerHTML = '✓';
        } else {
            botonCompletar.textContent = 'Completar';
        }
    });

    const botonBorrar = document.createElement('button');
    botonBorrar.className = 'btn btn-danger btn-sm';
    botonBorrar.textContent = 'Borrar';
    botonBorrar.addEventListener('click', function() {
        listaTareas.removeChild(elementoLista);
        alert('La tarea fue eliminada con éxito.');
    });

    grupoBotones.appendChild(botonCompletar);
    grupoBotones.appendChild(botonBorrar);
    elementoLista.appendChild(tareaSpan);
    elementoLista.appendChild(grupoBotones);
    listaTareas.appendChild(elementoLista);

    entradaTarea.value = '';
    entradaTarea.focus();
}
