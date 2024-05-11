let todoBox = document.querySelector(".todo-box");
let taskForm = document.getElementById("task-form");
let taskInp = document.getElementById("task");
taskForm.addEventListener("submit", (ele) => {
  ele.preventDefault();
});
let createDiv;
let createInp;
let iconsDiv ;
let createBold;
let editButton;
let deleteButton;
let uptBtn;



function forDelete(ele) {
  let parentDiv = ele.parentElement.parentElement;
  let boldElement = parentDiv.querySelector("b");
  let inputElement = parentDiv.querySelector("input");
  boldElement.innerHTML = "";
  inputElement.value = "";
  parentDiv.style.display = "none";
}

function forEdit(ele) {
  let parentDiv = ele.parentElement.parentElement;
  let boldElement = parentDiv.querySelector("b");
  let inputElement = parentDiv.querySelector("input");
  let updBtn = parentDiv.querySelector("button")
  inputElement.value = boldElement.innerText;
  boldElement.innerText = "";

  inputElement.style.display = "block";
  updBtn.style.display = "block"

}

function forUpd(ele) {
  let parentDiv = ele.parentElement;
  let boldElement = parentDiv.querySelector("b");
  let inputElement = parentDiv.querySelector("input");
  let updBtn = parentDiv.querySelector("button");
  boldElement.innerText = inputElement.value;
  inputElement.value = "";

  inputElement.style.display = "none";
  updBtn.style.display = "none"

}
