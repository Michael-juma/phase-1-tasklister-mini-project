document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('create-task-form');
  const taskDescriptionInput = document.getElementById('new-task-description');
  const dueDateInput = document.getElementById('due-date');
  const userInput = document.getElementById('user');
  const priorityInput = document.getElementById('new-task-priority');
  const tasksList = document.getElementById('tasks');
  const deleteButton = document.getElementById('delete');
  const editButton = document.getElementById('edit');
  const sortButton = document.getElementById('sort');
  
  let tasks = [];
  
  
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const taskDescription = taskDescriptionInput.value;
    const dueDate = dueDateInput.value;
    const user = userInput.value;
    const priority = priorityInput.value;

    if (taskDescription === '') {
      alert('Please provide a task description');
      return;
    }

    const task = {
      description: taskDescription,
      dueDate: dueDate,
      user: user,
      priority: priority,
    };

    tasks.push(task);
    taskDescriptionInput.value = '';
    dueDateInput.value = '';
    userInput.value = '';
    renderTasks();
  });


  function renderTasks() {
    tasksList.innerHTML = '';
    tasks.forEach((task, index) => {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
        ${task.description} - ${task.dueDate} - ${task.user} - ${task.priority} 
        <button class="edit-task" data-index="${index}">Edit</button>
        <button class="delete-task" data-index="${index}">Delete</button>
      `;
      tasksList.appendChild(taskItem);
    });

    
    const deleteButtons = document.querySelectorAll('.delete-task');
    deleteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const taskIndex = e.target.dataset.index;
        tasks.splice(taskIndex, 1);
        renderTasks();
      });
    });

    const editButtons = document.querySelectorAll('.edit-task');
    editButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const taskIndex = e.target.dataset.index;
        const taskToEdit = tasks[taskIndex];
        taskDescriptionInput.value = taskToEdit.description;
        dueDateInput.value = taskToEdit.dueDate;
        userInput.value = taskToEdit.user;
        priorityInput.value = taskToEdit.priority;
        tasks.splice(taskIndex, 1);
        renderTasks();
      });
    });
  }

  
  sortButton.addEventListener('click', () => {
    tasks.sort((a, b) => {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    renderTasks();
  });
});
