let taskForm = document.getElementById("task-form")! as HTMLFormElement;
let tasksContainer = document.getElementById("tasks-container")! as HTMLDivElement;

taskForm.addEventListener("submit", function (e : Event) :void {
  e.preventDefault();
  addTodo();
});

function addTodo() :void {
  let taskInp = document.getElementById("task")! as HTMLInputElement;
  if (taskInp.value === "") {
    alert("Please Enter Task");
    return;
  } else {
    let todoTask = `
    <div class="task-div">
      <strong class="for-bold">${taskInp.value}</strong>
      <div class="inp-box hide">
        <input style="padding:4px 10px" type="text">
        <button onclick="forUpd(this)" class="upd-btn"> update </button>
      </div>
      <div class="icons">
        <i onclick="forEdit(this)" class="fa-solid fa-pen-to-square edit"></i>
        <i onclick="forDelete(this)" class="fa-solid fa-trash delete"></i>
      </div>
    </div>
    `;
    tasksContainer.innerHTML += todoTask;
    taskInp.value = "";
  }
}

function forUpd(ele : HTMLButtonElement) :void {
  let parentDiv = ele.parentElement!.parentElement  as HTMLDivElement;
  let iconDiv = parentDiv.querySelector(".icons") as HTMLDivElement ;
  let inpDiv = ele.parentElement ! as HTMLDivElement;
  let boldElement = parentDiv.querySelector("strong") ! as HTMLElement;
  let inputElement = parentDiv.querySelector("input") ! as HTMLInputElement;
  boldElement.innerText = inputElement.value;
  boldElement.style.display = "block";
  inputElement.value = "";
  inpDiv.classList.add("hide");
  iconDiv.classList.remove("hide");
}

function forEdit(ele : HTMLElement) :void {
  let iconDiv = ele.parentElement ! as HTMLDivElement;
  let parentDiv = ele.parentElement!.parentElement as HTMLDivElement;
  let inpDiv = parentDiv.querySelector(".inp-box") ! as HTMLDivElement;
  let boldElement = parentDiv.querySelector("strong") ! as HTMLElement;
  let inputElement = parentDiv.querySelector("input")! as HTMLInputElement;
  boldElement.style.display = "none";
  iconDiv.classList.add("hide");
  inpDiv.classList.remove("hide");
  inputElement.value = boldElement.innerText;
}

function forDelete(ele : HTMLElement) {
  let taskInp = ele.parentElement!.parentElement as HTMLDivElement;
  taskInp.remove();
}