let to_do_list = []

// Function to add a task to the list
function addTask() {
const taskText = taskInput.value.trim();
const timeToComplete = parseInt(document.getElementById("time-to-complete").value)
const minOrSec = document.getElementById("min-or-sec").value

if (taskText !== "") {
     const newTask = document.createElement("li");
     if(isNaN(timeToComplete))
          newTask.textContent = `${taskText} - should finish in ${0} ${minOrSec}`
     else
          newTask.textContent = `${taskText} - should finish in ${timeToComplete} ${minOrSec}`

     const deleteButton = document.createElement("button");
     deleteButton.textContent = "Delete";
     deleteButton.addEventListener("click", () => {
          taskList.removeChild(newTask);
     });

     let millisecondsFinish = 0

     switch (minOrSec) {
          case "hours":
               millisecondsFinish = (timeToComplete * 60 * 60 * 1000) + Date.now()
               break;
          case "minutes":
               millisecondsFinish = (timeToComplete * 60 * 1000) + Date.now()
               break;
          case "seconds":
               millisecondsFinish = (timeToComplete * 1000) + Date.now()
               break;
          default:
               millisecondsFinish = timeToComplete
               break;
     }

     to_do_list.push({task:taskText,finishingtime:timeToComplete,min_or_sec:minOrSec,millisecondsFinish:millisecondsFinish})

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

          let localstorage = window.localStorage
          let prevTodos = localstorage.getItem("to-dos")
          if(prevTodos != null && prevTodos != ""){
               let parsedPrevTodos = JSON.parse(prevTodos)
               parsedPrevTodos.push({todo_title:listTitle,todoTasks:to_do_list})
               localstorage.removeItem("to-dos")
               localstorage.setItem("to-dos",JSON.stringify(parsedPrevTodos))
               console.log(prevTodos)
          }
          else{
               let newTodoTitleList = []
               newTodoTitleList.push({todo_title:listTitle,todoTasks:to_do_list})
               localstorage.setItem("to-dos",JSON.stringify(newTodoTitleList))
          }


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
          to_do_list = []
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