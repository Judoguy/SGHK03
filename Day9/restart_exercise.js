// 1. Access the elements needed from HTML
const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskError = document.getElementById('taskError');
const taskList = document.getElementById('taskList');
const button = document.getElementById("btn");
const container = document.getElementsByClassName("container");
const li = document.createElement("li");

// 2. Add an event listener for form submission
form.addEventListener('submit', handleSubmit);

// 3. Create a function to add a Task.
//   When the user enters a task in the input field and clicks the "Add" button, the task should be added to the list of tasks displayed on the webpage.
//    Hint: The event listener call the function to add a Task

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

button.addEventListener('click', addTaskItem)

function addtask() {
    li.setAttribute('id', taskInput.value);
    li.appendChild(document.createTextNode(taskInput.value));
    taskList.appendChild(li); 
}





// 4. Display task: Each task should be displayed as a list item (<li>) inside an unordered list (<ul>).

// 5. Removing Tasks: Include a "Remove" button next to each task. When the "Remove" button is clicked, the corresponding task should be removed from the list. -->