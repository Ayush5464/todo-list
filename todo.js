let addTaskButton = document.querySelector(".ri-add-box-fill");
let taskInput = document.querySelector("input");
let taskList = document.querySelector(".lists");
let items = document.querySelector(".items");

addTaskButton.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    let li = document.createElement("li");
    let i = document.createElement("i");
    i.className = "ri-delete-bin-line";

    li.className = "lists";
    li.textContent = taskInput.value;
    li.appendChild(i);
    items.appendChild(li);
    i.addEventListener("click", function () {
      items.removeChild(li);
    });
    taskInput.value = "";
  } else {
    alert("Enter your tasks");
  }
});
