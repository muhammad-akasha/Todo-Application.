"use strict";
import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getAnalytics
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

let taskForm = document.getElementById("task-form");
let tasksContainer = document.getElementById("tasks-container");
taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo();
});

document.addEventListener("DOMContentLoaded", async () => {
  // Fetch and display all tasks
  await displayAllTasks();
});
async function addTodo() {
  let taskInp = document.getElementById("task");
  if (taskInp.value === "") {
    alert("Please Enter Task");
    return;
  } else {
    try {
      const docRef = await addDoc(collection(db, "todo-lists"), {
        todo: taskInp.value
      });
      displayAllTasks();
      console.log("Document written with ID: ", docRef.id);
      taskInp.value = "";

    } catch (error) {
      console.log(error)
    }
  }
}

async function displayAllTasks() {
  const querySnapshot = await getDocs(collection(db, "todo-lists"));
  tasksContainer.innerHTML = "";
  querySnapshot.forEach((doc) => {
    let myTask = doc.data().todo;
    let docId = doc.id;
    let todoTask = `
      <div class="task-div" data-id="${docId}">
        <strong class="for-bold">${myTask}</strong>
      <div class="inp-box hide">
      <div class="input-group input-group-sm">
    <input type="text" class="form-control upd-inp" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
      </div>
      <div>
          <button onclick="forUpd(this)" class="upd-btn submit-btn"> update </button>
      </div>
        </div>
        <div class="icons">
          <i onclick="forEdit(this)" class="fa-solid fa-pen-to-square edit"></i>
          <i onclick="forDelete(this)" class="fa-solid fa-trash delete"></i>
        </div>
      </div>
      `;
    tasksContainer.innerHTML += todoTask;
  });
}

async function forUpd(ele) {
  let parentDiv = ele.parentElement.parentElement.parentElement;
  let iconDiv = parentDiv.querySelector(".icons");
  let inpDiv = ele.parentElement.parentElement;
  let boldElement = parentDiv.querySelector("strong");
  let inputElement = parentDiv.querySelector("input");
  let id = parentDiv.getAttribute("data-id");
  boldElement.innerText = inputElement.value;

  const todotask = doc(db, "todo-lists", id);

  // update the task in firestore
  try {
    await updateDoc(todotask, {
      todo: inputElement.value
    });
    displayAllTasks();
  } catch (error) {
    console.log(error)
  }
  inpDiv.classList.add("hide");
  boldElement.style.display = "block";
  iconDiv.classList.remove("hide");
  inputElement.value = "";
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
async function forDelete(ele) {
  let taskInp = ele.parentElement.parentElement;
  let id = taskInp.getAttribute("data-id");
  try{
    await deleteDoc(doc(db, "todo-lists", id));
    displayAllTasks();
  }catch(err){
    console.log(err)
  }
}

window.forDelete = forDelete;
window.forEdit = forEdit;
window.forUpd = forUpd;
