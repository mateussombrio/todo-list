const inputText = document.querySelector(".input-text");
const divTask = document.querySelector(".div_tasks");
const divTaskList = document.querySelector(".div_task_list");
const arrow = document.querySelector(".arrows");
const divCheckbox = document.querySelector(".div_checkbox");
const divValue = document.querySelector(".div_value");
const urlCheckboxDone = "assets/done.png";
const urlCheckboxNotDone = "assets/not-done.png";
const clear = document.querySelector(".clear");

function toggleTaskDiv() {
  if (divTask.style.display === "none" || divTask.style.display === "") {
    divTask.style.display = "flex";
    arrow.src = "assets/arrow-up.png";
  } else {
    divTask.style.display = "none";
    arrow.src = "assets/arrow-down.png";
  }
}

function createTask(taskText) {
  const taskIndex = localStorage.length;
  localStorage.setItem(`task${taskIndex}`, taskText);

  const taskDiv = document.createElement("div");
  taskDiv.className = "task-item";

  const checkboxDiv = document.createElement("div");
  
  const taskTextDiv = document.createElement("div");
  taskTextDiv.className = "div_value";

  const checkboxImage = document.createElement("img");
  checkboxImage.className = "img_checkbox";
  checkboxImage.src = urlCheckboxNotDone;

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = taskText;

  checkboxDiv.appendChild(checkboxImage);
  taskTextDiv.appendChild(taskParagraph);
  taskDiv.appendChild(checkboxDiv);
  taskDiv.appendChild(taskTextDiv);

  divCheckbox.appendChild(taskDiv);
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    const taskText = inputText.value.trim();
    if (taskText) {
      createTask(taskText);
      inputText.value = "";
    }
  }
}

function clearLocalStorage() {
  localStorage.clear();
}

function taskDone() {
  if (checkboxImage.src == urlCheckboxNotDone) {
    checkboxImage.src = urlCheckboxDone;
    taskParagraph.style.textDecoration = "line-through";
  } else {
    checkboxImage.src = urlCheckboxNotDone;
  }
}

// Adiciona os event listeners
divTaskList.addEventListener("click", toggleTaskDiv);
inputText.addEventListener("keypress", handleEnterKey);
clear.addEventListener("click", clearLocalStorage);
taskDiv.addEventListener("click", taskDone);
