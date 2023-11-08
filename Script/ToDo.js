// Function to add a task to the list
function addTask() {
const taskText = taskInput.value.trim();
if (taskText !== "") {
     const newTask = document.createElement("li");
     newTask.textContent = taskText;

     const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.addEventListener("click", () => {
          taskList.removeChild(newTask);
     });

     newTask.appendChild(deleteButton);
     taskList.appendChild(newTask);
     taskInput.value = "";
}
}

// Function to save a list
function saveList() {
const listTitleInput = document.getElementById("listTitle");
const taskList = document.getElementById("taskList");
const savedListItems = document.getElementById("savedListItems");

const listTitle = listTitleInput.value.trim();
if (listTitle !== "") {
     const listContainer = document.createElement("div");
     const newList = document.createElement("ul");
     newList.innerHTML = taskList.innerHTML;
     listContainer.appendChild(document.createElement("h2")).textContent = listTitle;

     const editButton = document.createElement("button");
     editButton.textContent = "Edit";
     editButton.addEventListener("click", () => {
          taskList.innerHTML = newList.innerHTML;
          taskInput.value = "";
          listTitleInput.value = listTitle;
          saveListBtn.textContent = "Update List";
          saveListBtn.removeEventListener("click", saveList);
          saveListBtn.addEventListener("click", () => {
               updateList(listContainer);
          });
     });

     const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.addEventListener("click", () => {
          savedListItems.removeChild(listContainer);
     });

     listContainer.appendChild(editButton);
     listContainer.appendChild(deleteButton);
     listContainer.appendChild(newList);
     savedListItems.appendChild(listContainer);
     listTitleInput.value = "";
     taskList.innerHTML = "";
}
}

// Function to update a saved list
function updateList(listContainer) {
const listTitleInput = document.getElementById("listTitle");
const taskList = document.getElementById("taskList");
const saveListBtn = document.getElementById("saveList");

const listTitle = listTitleInput.value.trim();
if (listTitle !== "") {
     listContainer.querySelector("h2").textContent = listTitle;
     const newList = document.createElement("ul");
     newList.innerHTML = taskList.innerHTML;
     listContainer.replaceChild(newList, listContainer.querySelector("ul"));
     listTitleInput.value = "";
     taskList.innerHTML = "";
     saveListBtn.textContent = "Save List";
     saveListBtn.removeEventListener("click", updateList);
     saveListBtn.addEventListener("click", saveList);
}
}