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

function createTaskELement(taskText) {
  const taskIndex = localStorage.length;
  localStorage.setItem(`task${taskIndex}`, taskText);
  createTask(taskText);
}

function createTask(taskText) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "div_cards";

  const checkboxDiv = document.createElement("div");
  checkboxDiv.className = "div_checkbox";

  const valueDiv = document.createElement("div");
  valueDiv.className = "div_value";

  const checkboxImage = document.createElement("img");
  checkboxImage.className = "img_checkbox";
  checkboxImage.src = urlCheckboxNotDone;

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = taskText;

  checkboxDiv.appendChild(checkboxImage);
  valueDiv.appendChild(taskParagraph);
  cardDiv.appendChild(checkboxDiv);
  cardDiv.appendChild(valueDiv);
  divTask.appendChild(cardDiv);

  checkboxImage.addEventListener("click", function () {
    taskDone(checkboxImage, taskParagraph);
  });
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    const taskText = inputText.value.trim();
    if (taskText) {
      createTaskELement(taskText);
      inputText.value = "";
    }
  }
}

function clearLocalStorage() {
  localStorage.clear();
}

function taskDone(checkboxImage, taskParagraph) {
  if (checkboxImage.src.endsWith(urlCheckboxNotDone)) {
    checkboxImage.src = urlCheckboxDone;
    taskParagraph.style.textDecoration = "line-through";
    taskParagraph.style.opacity = "50%";
  } else {
    checkboxImage.src = urlCheckboxNotDone;
    taskParagraph.style.textDecoration = "none";
    taskParagraph.style.opacity = "100%";
  }
}

function loadTask() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("task")) {
      const taskText = localStorage.getItem(key);
      createTask(taskText);
    }
  }
}

// Adiciona os event listeners
divTaskList.addEventListener("click", toggleTaskDiv);
inputText.addEventListener("keypress", handleEnterKey);
clear.addEventListener("click", clearLocalStorage);

loadTask();
