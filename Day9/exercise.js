// 1. Access the elements needed from HTML

const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskError = document.getElementById('taskError');
const taskList = document.getElementById('taskList');


// 2. Add an event listener for form submission
form.addEventListener('submit', handleSubmit);

// 3. Create a function to add a Task.

function handleSubmit(event){
    event.preventDefault();
    const isValid = validateForm();

    if (isValid){
        console.log('Task successfully logged.')
        form.reset();
        taskError.textContent = '';
    }
}

function validateForm(){
    const taskValue = taskInput.value.trim();
    let isValid = true;
    
    if (taskValue === ""){
        taskError.textContent = "Please enter a task for the list."
        isValid = false;
    } else{
        taskError.textContent = '';
    }
}

const button = document.getElementById("btn");
button.addEventListener('click', addTaskItem)

function addTaskItem(){
    const newTaskItem = document.createElement('li');
    newTaskItem.textContent = taskInput.value;
    console.log(taskInput.value)
    
    //document.getElementById("tasklist").appendChild(newTaskItem)
}