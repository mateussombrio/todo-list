document.querySelector(".input-text").addEventListener("focus", function () {
  document.querySelector(".div_tasks").style.display = "block";
  document.querySelector(".div_tasks").style.transition = "transform 2s ease";
});
