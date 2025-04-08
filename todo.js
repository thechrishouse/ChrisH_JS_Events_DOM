const taskInput = document.getElementById('taskInput');
const taskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function createListItem(taskText) {
    const task = document.createElement('li');
    task.textContent = taskText;

    // Click to add style and mark as 'complete'
    task.addEventListener('click', toggleCompleted)

    task.addEventListener('contextmenu', removeTask);
    return task;
}
    
    function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const listItem = createListItem(taskText);
        taskList.append(listItem);
        taskInput.value = "";
    }
}

taskButton.addEventListener('click', addTask);

// Bonus toggleCompleted function

function toggleCompleted() {
    event.target.classList.toggle('taskCompleted');
}


// Function to remove a task
// e is passed when removeTask is attached to listItem in, it is the addTask()
// use addEvent Listener = contextMenu is the event for right click
// inside removeTask, use e.preventDefault - prevents regular right click menu from populating

function removeTask() {
    e.preventDefault();
    e.target.remove();
}