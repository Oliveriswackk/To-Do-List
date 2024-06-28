document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const buttonGroup = document.createElement('div');

    const completeButton = document.createElement('button');
    completeButton.className = 'btn btn-success btn-sm mr-2';
    completeButton.textContent = 'Completar';
    completeButton.addEventListener('click', function() {
        listItem.classList.add('completed');
        $('#taskCompleteModal').modal('show');
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger btn-sm';
    deleteButton.textContent = 'Borrar';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(listItem);
        $('#taskDeleteModal').modal('show');
    });

    buttonGroup.appendChild(completeButton);
    buttonGroup.appendChild(deleteButton);

    listItem.appendChild(taskSpan);
    listItem.appendChild(buttonGroup);

    taskList.appendChild(listItem);
}
