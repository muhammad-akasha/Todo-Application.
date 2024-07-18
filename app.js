"use strict";
let taskForm = document.getElementById("task-form");
let tasksContainer = document.getElementById("tasks-container");
taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    addTodo();
});
function addTodo() {
    let taskInp = document.getElementById("task");
    if (taskInp.value === "") {
        alert("Please Enter Task");
        return;
    }
    else {
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
function forUpd(ele) {
    let parentDiv = ele.parentElement.parentElement;
    let iconDiv = parentDiv.querySelector(".icons");
    let inpDiv = ele.parentElement;
    let boldElement = parentDiv.querySelector("strong");
    let inputElement = parentDiv.querySelector("input");
    boldElement.innerText = inputElement.value;
    boldElement.style.display = "block";
    inputElement.value = "";
    inpDiv.classList.add("hide");
    iconDiv.classList.remove("hide");
}
function forEdit(ele) {
    let iconDiv = ele.parentElement;
    let parentDiv = ele.parentElement.parentElement;
    let inpDiv = parentDiv.querySelector(".inp-box");
    let boldElement = parentDiv.querySelector("strong");
    let inputElement = parentDiv.querySelector("input");
    boldElement.style.display = "none";
    iconDiv.classList.add("hide");
    inpDiv.classList.remove("hide");
    inputElement.value = boldElement.innerText;
}
function forDelete(ele) {
    let taskInp = ele.parentElement.parentElement;
    taskInp.remove();
}
