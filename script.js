const addBtn = document.querySelector(".add-btn");
const taskInput = document.querySelector(".taskbar input");
const taskList = document.querySelector(".task-list");
addBtn.addEventListener("click", function() {
    const newTask = document.createElement("div");
    newTask.classList.add("task");

    const newTaskBtn = document.createElement("button");
    newTaskBtn.classList.add("task-btn");
    const newTaskText = document.createElement("p");
    newTaskText.classList.add("task-text");
    newTaskText.innerHTML = taskInput.value;
    const newTaskCross = document.createElement("img");
    newTaskCross.classList.add("task-cross");
    newTaskCross.src = "cross.png";


    newTask.appendChild(newTaskBtn);
    newTask.appendChild(newTaskText);
    newTask.appendChild(newTaskCross);

    taskList.classList.remove("hidden");
    newTask.classList.add("task");
    taskList.appendChild(newTask);

    newTaskBtn.addEventListener("click", function() {
        newTaskText.style.textDecoration = "line-through";
        newTaskBtn.style.background = "#ff7733";
        newTaskBtn.style.color = "white";
        newTaskBtn.innerHTML = "✓";
    })

    newTaskCross.addEventListener("click", function(){
        newTask.remove();
        if (taskList.childNodes.length === 1 && !taskList.classList.contains("hidden"))
            taskList.classList.add("hidden");
    })
})