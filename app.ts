let todoBox = document.querySelector(".todo-box")! as HTMLDivElement;
let taskForm = document.getElementById("task-form") as HTMLFormElement;
let taskInp = document.getElementById("task") as HTMLInputElement;
taskForm.addEventListener("submit", (ele : Event) => {
  ele.preventDefault();
});
let createDiv : HTMLDivElement;
let createInp: HTMLInputElement;
let iconsDiv : HTMLDivElement ;
let createBold : HTMLElement;
let editButton : HTMLElement;
let deleteButton : HTMLElement;
let updBtn: HTMLButtonElement;

function addTask () {
  if (taskInp.value === ""){
    alert("Please Enter Task");
    return;
  }

  createDiv = document.createElement("div");
  createInp = document.createElement("input");
  iconsDiv = document.createElement("div");
  iconsDiv.classList.add("icons");

  updBtn = document.createElement("button");
  createBold = document.createElement("b");

  editButton = document.createElement("i");
  deleteButton = document.createElement("i");

  createInp.style.display = "none";
  updBtn.style.display = "none";

  updBtn.innerText = "update";
  updBtn.classList.add("upd-btn");
  updBtn.setAttribute("onclick" , "forUpd(this)");

  createDiv.classList.add("task-div");
  createInp.style.padding = "4px 10px";

  createBold.classList.add("for-bold");
  editButton.classList.add("fa-solid", "fa-pen-to-square", "edit");
  editButton.setAttribute("onclick", "forEdit(this)");
  deleteButton.classList.add("fa-solid", "fa-trash", "delete");
  deleteButton.setAttribute("onclick", "forDelete(this)");

  createBold.innerHTML = taskInp.value;

  todoBox.appendChild(createDiv);
  createDiv.appendChild(createInp);
  createDiv.appendChild(updBtn);
  iconsDiv.appendChild(editButton);
  createDiv.appendChild(createBold);
  createDiv.appendChild(iconsDiv);
  iconsDiv.appendChild(deleteButton);

  taskInp.value = "";
}


function forUpd(ele : HTMLElement) {
  let parentDiv = ele.parentElement! as HTMLDivElement;
  let boldElement = parentDiv.querySelector("b") as HTMLElement;
  let inputElement = parentDiv.querySelector("input") as HTMLInputElement;
  let updBtn = parentDiv.querySelector("button") as HTMLButtonElement; 
  boldElement.innerText = inputElement.value;
  inputElement.value = "";

  inputElement.style.display = "none";
  updBtn.style.display = "none"

}
