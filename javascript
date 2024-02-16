document.getElementById('priority-filter').addEventListener('change', filterTasks);
document.getElementById('status-filter').addEventListener('change', filterTasks);

function addTask() {
    const taskInput = document.getElementById('task-input');
    if (taskInput.value.trim() === '') return;

    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.textContent = taskInput.value;
    newTask.addEventListener('click', () => toggleComplete(newTask));

    taskList.appendChild(newTask);
    taskInput.value = '';
}

function toggleComplete(task) {
    task.classList.toggle('completed');
}

function filterTasks() {
    const priority = document.getElementById('priority-filter').value;
    const status = document.getElementById('status-filter').value;
    // Implementation for filtering based on the priority and status
    // This requires adding more logic to differentiate tasks by priority and status in the UI and JS
}

// Note: The actual implementation of filtering and categorization by priority, deadline, etc., requires additional logic.
