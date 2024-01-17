let to_do_list = [];

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
            updateLocalStorage();
        });

        newTask.appendChild(deleteButton);
        taskList.appendChild(newTask);
        taskInput.value = "";

        to_do_list.push({ task: taskText });
        updateLocalStorage();
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
            updateLocalStorage();
        });

        listContainer.appendChild(editButton);
        listContainer.appendChild(deleteButton);
        listContainer.appendChild(newList);
        savedListItems.appendChild(listContainer);
        listTitleInput.value = "";
        taskList.innerHTML = "";
        to_do_list = [];
        updateLocalStorage();
    }
}

// Function to update local storage
function updateLocalStorage() {
    localStorage.setItem("to_do_list", JSON.stringify(to_do_list));

    // Also save the saved lists to local storage
    const savedListItems = document.getElementById("savedListItems");
    const savedLists = [];

    savedListItems.childNodes.forEach((listContainer) => {
        const list = {
            title: listContainer.querySelector("h2").textContent,
            tasks: Array.from(listContainer.querySelector("ul").children).map((li) => li.textContent),
        };
        savedLists.push(list);
    });

    localStorage.setItem("savedLists", JSON.stringify(savedLists));
}

// Function to load tasks and saved lists from local storage
function loadFromLocalStorage() {
    const storedList = localStorage.getItem("to_do_list");
    if (storedList) {
        to_do_list = JSON.parse(storedList);

        // Add tasks to the taskList
        to_do_list.forEach((item) => {
            const newTask = document.createElement("li");
            newTask.textContent = item.task;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                taskList.removeChild(newTask);
                updateLocalStorage();
            });

            newTask.appendChild(deleteButton);
            taskList.appendChild(newTask);
        });
    }

    const storedLists = localStorage.getItem("savedLists");
    if (storedLists) {
        const savedLists = JSON.parse(storedLists);

        // Add saved lists to the savedListItems
        const savedListItems = document.getElementById("savedListItems");
        savedLists.forEach((list) => {
            const listContainer = document.createElement("div");
            const newList = document.createElement("ul");
            list.tasks.forEach((task) => {
                const newTask = document.createElement("li");
                newTask.textContent = task;

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete";
                deleteButton.addEventListener("click", () => {
                    newList.removeChild(newTask);
                    updateLocalStorage();
                });

                newTask.appendChild(deleteButton);
                newList.appendChild(newTask);
            });

            listContainer.appendChild(document.createElement("h2")).textContent = list.title;
            listContainer.appendChild(newList);

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", () => {
                savedListItems.removeChild(listContainer);
                updateLocalStorage();
            });

            listContainer.appendChild(deleteButton);
            savedListItems.appendChild(listContainer);
        });
    }
}

// Call loadFromLocalStorage on page load
window.addEventListener("load", loadFromLocalStorage);
