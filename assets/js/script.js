var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");
var btn = window.document.querySelector("button");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };
  createTaskEl(taskDataObj);
  
};

var createTaskEl = function (taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

  tasksToDoEl.appendChild(listItemEl);
  listItemEl.appendChild(taskInfoEl);
};

document.querySelector("#save-task");
document.querySelector("button").textContent;
formEl.addEventListener("submit", taskFormHandler);
// console.dir(btn);
