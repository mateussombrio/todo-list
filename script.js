const inputText = document.querySelector(".input-text");
const divTask = document.querySelector(".div_tasks");
const divTaskList = document.querySelector(".div_task_list");
const arrow = document.querySelector(".arrows");
const divCheckbox = document.querySelector(".div_checkbox");
const divValue = document.querySelector(".div_value");
const urlCheckboxDone = "assets/done.png";
const urlCheckboxNotDone = "assets/not-done.png";
const clear = document.querySelector(".clear");
const img_garbage = "assets/garbage.png";
const searchDiv = document.querySelector('.div-search')

function toggleTaskDiv() {
  if (divTask.style.display === "none" || divTask.style.display === "") {
    divTask.style.display = "flex";
    arrow.src = "assets/arrow-up.png";
  } else {
    divTask.style.display = "none";
    arrow.src = "assets/arrow-down.png";
  }
}

function createTaskElement(taskText) {
  const taskIndex = localStorage.length;
  localStorage.setItem(`task${taskIndex}`, taskText);
  createTask(taskText, taskIndex);
}

function createTask(taskText, taskIndex) {
  const cardDiv = document.createElement("div");
  cardDiv.className = "div_cards";

  const checkboxDiv = document.createElement("div");
  checkboxDiv.className = "div_checkbox";

  const valueDiv = document.createElement("div");
  valueDiv.className = "div_value";

  const garbageDiv = document.createElement("div");
  garbageDiv.className = "garbage";

  const garbageImage = document.createElement("img");
  garbageImage.src = img_garbage;
  garbageImage.className = "img_garbage";

  const checkboxImage = document.createElement("img");
  checkboxImage.className = "img_checkbox";
  checkboxImage.src = urlCheckboxNotDone;

  const taskParagraph = document.createElement("p");
  taskParagraph.textContent = taskText;

  checkboxDiv.appendChild(checkboxImage);
  valueDiv.appendChild(taskParagraph);
  garbageDiv.appendChild(garbageImage);
  cardDiv.appendChild(checkboxDiv);
  cardDiv.appendChild(valueDiv);
  cardDiv.appendChild(garbageDiv);
  divTask.appendChild(cardDiv);

  checkboxImage.addEventListener("click", function () {
    taskDone(checkboxImage, taskParagraph);
  });
  garbageDiv.addEventListener("click", function () {
    removeTask(cardDiv, taskIndex);
  });
  searchDiv.addEventListener('click', function (){
    search(cardDiv, taskText)
  })
}

function handleEnterKey(event) {
  if (event.key === "Enter") {
    const taskText = inputText.value.trim();
    if (taskText) {
      createTaskElement(taskText);
      inputText.value = "";
    }
  }
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
      const taskIndex = parseInt(key.replace("task", ""));
      createTask(taskText, taskIndex);
    }
  }
}

function removeTask(cardDiv, taskIndex) {
  cardDiv.remove();
  localStorage.removeItem(`task${taskIndex}`);
}

function search(cardDiv, taskText){
  for (taskText of cardDiv){
    if (taskText == inputText.value){
      createTask(cardDiv,taskText)
    }
  }
}


// Adiciona os event listeners
divTaskList.addEventListener("click", toggleTaskDiv);
inputText.addEventListener("keypress", handleEnterKey);

loadTask();
