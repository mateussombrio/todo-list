const inputText = document.querySelector(".input-text");
const divTask = document.querySelector(".div_tasks");
const divTaskList = document.querySelector(".div_task_list");
const arrow = document.querySelector(".arrows");

/* Showing and hidding the Task Div */
divTaskList.addEventListener("click", function () {
  if (divTask.style.display == "none") {
    divTask.style.display = "block";
    arrow.src = "assets/arrow-up.png";
  } else {
    divTask.style.display = "none";
    arrow.src = "assets/arrow-down.png";
  }
});

/* Get the input value */
const divCheckbox = document.querySelector(".div_checkbox");
const divValue = document.querySelector(".div_value");

const getInputValue = inputText.addEventListener("keypress", function () {
  let count = 0;
  if (event.key == "Enter") {
    const inputValue = inputText.value;
    /* LocalStorage */
    const setTask = localStorage.setItem("task" + count, inputValue);
    const getTask = localStorage.getItem("task" + count);
    /* Create Div Checkbox and Value */
    const firstDiv = document.createElement("div");
    firstDiv.className = "div_checkbox";
    const secondDiv = document.createElement("div");
    secondDiv.className = "div_value";

    /* Add Div inside the cards div */
    divCheckbox.appendChild(firstDiv);
    divValue.appendChild(secondDiv);

    /* Create and add the value inside the values div */
    const pTask = document.createElement("p");
    const pTaskContent = document.createTextNode(getTask);

    secondDiv.appendChild(pTask);
    pTask.appendChild(pTaskContent);
    count++;
    /* Clean the input after the 'enter' */
    inputText.value = "";
  }
});

/* Creating LocalStorage */

/* Creating the cards of the tasks */
