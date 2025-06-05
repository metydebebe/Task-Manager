const tasks = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
];

const taskList = document.getElementById('taskList');
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');

// Render initial tasks
renderTasks();

taskForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskTitle = taskInput.value;
    addTask(taskTitle);
    taskInput.value = '';
});

function addTask(title) {
    const taskId = Date.now();
    const task = { id: taskId, title, completed: false };
    tasks.push(task);
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('li');
        taskItem.className = `list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`;
        taskItem.innerHTML = `
            <span onclick="toggleTask(${task.id})" class="cursor-pointer">${task.title}</span>
            <button onclick="deleteTask(${task.id})" class="btn btn-danger btn-sm">Delete</button>
        `;
        taskList.appendChild(taskItem);
    });
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    task.completed = !task.completed;
    renderTasks();
}

function deleteTask(id) {
    const index = tasks.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    renderTasks();
}