document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-task-form");
    const taskList = document.querySelector("#tasks");
    const sortButton = document.querySelector("#button");
    let sortAscending = true;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const task = document.querySelector("#new-task-description").value;
        const priority = document.querySelector("#new-task-priority").value;

        if (task.trim() === "") {
            alert("Please enter a task");
            return;
        }

        const taskItem = document.createElement("li");
        taskItem.textContent = task;
        taskItem.style.color = getPriorityColor(priority);

        // Create Delete Button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => taskItem.remove());
        taskItem.appendChild(deleteButton);

        // Create Edit Button
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => {
            const newTask = prompt("Edit task", taskItem.textContent.replace("DeleteEdit", ""));
            if (newTask) {
                taskItem.firstChild.nodeValue = newTask;
            }
        });
        taskItem.appendChild(editButton);

        taskList.appendChild(taskItem);
        form.reset();
    });

    sortButton.addEventListener("click", () => {
        const tasks = Array.from(taskList.children);
        tasks.sort((a, b) => {
            return sortAscending 
                ? a.textContent.localeCompare(b.textContent) 
                : b.textContent.localeCompare(a.textContent);
        });

        taskList.innerHTML = "";
        tasks.forEach(task => taskList.appendChild(task));
        
        sortAscending = !sortAscending;
        sortButton.textContent = sortAscending ? "Sort Descending" : "Sort Ascending";
    });

    function getPriorityColor(priority) {
        switch (priority) {
            case "high": return "red";
            case "medium": return "orange";
            case "low": return "green";
            default: return "black";
        }
    }
});
