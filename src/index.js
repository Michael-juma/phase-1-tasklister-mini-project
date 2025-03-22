document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#create-task-form");
    const taskList = document.querySelector("#tasks");
    let sortAscending = true;
  
    //Add Tasks
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const task = document.querySelector("#new-task-description").value;
      const taskList = document.querySelector("#tasks");
      const priority = document.querySelector("#new-task-priority").value;
      if (task.trim() === "") {
        alert("Please enter a task");
        return;
      }
      const taskItem = document.createElement("li");
      taskItem.textContent = task;
      taskItem.style.color = getPriorityColor(priority);
  
      taskList.appendChild(taskItem);
    });
  
    taskList.innerHTML = "";
    taskArrays.forEach(task => taskList.appendChild(task));
  
    sortAscending = !sortAscending;
  
    const sortButton = document.querySelector("#button");
    sortButton.textContent = sortAscending ? "Sort Descending" : "Sort Ascending";
  
    // Add edit and delete buttons
    const deleteButton = document.createElement("button"); // Create a button element
deleteButton.textContent = "Delete"; // Set button text
deleteButton.addEventListener("click", () => taskItem.remove()); // Add click event to remove taskItem

taskItem.appendChild(deleteButton); // Append button to taskItem
taskList.appendChild(taskItem); // Append taskItem to taskList

  
const editButton = document.createElement("button"); // Create a button element
editButton.textContent = "Edit"; // Set button text

editButton.addEventListener("click", () => {
  const taskText = taskItem.querySelector(".task-text"); // Select only the task text
  const newTask = prompt("Edit task", taskText.textContent);
  
  if (newTask) {
    taskText.textContent = newTask; // Update only the task text
  }
});

taskItem.appendChild(editButton); // Append button to taskItem

  
  
    //Function to sort tasks by priority
   document.addEventListener("DOMContentLoaded", () => {
  
    sortButton.addEventListener("click", sortTasks);
  
    const priority = document.querySelector("#new-task-priority").value;
    taskItem.style.color = getPriorityColor(priority);
    Color(priority);
  
  
    //Function to sort tasks color by priority
    function getPriorityColor(priority) {
   document.addEventListener("DOMContentLoaded", () => {
      }
   )}
  
  });
  });

