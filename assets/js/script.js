var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var btn = window.document.querySelector("button");

var createTaskHandler = function (event) {
  
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);

  event.preventDefault();
};

var taskItemEl = document.createElement("li");
taskItemEl.textContent = "hello";



// tasksToDoEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";

document.querySelector("#save-task");
document.querySelector("button").textContent;
formEl.addEventListener("submit", createTaskHandler);
// console.dir(btn);
