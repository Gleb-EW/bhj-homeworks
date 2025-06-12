document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('task-input');
  const tasksContainer = document.getElementById('tasks-container');

  function createTask(text) {
    const taskDiv = document.createElement('div');
    taskDiv.className = 'task';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'task__title';
    titleDiv.textContent = text;

    const removeLink = document.createElement('a');
    removeLink.href = '#';
    removeLink.className = 'task__remove';
    removeLink.textContent = '×';

    removeLink.addEventListener('click', (event) => {
      event.preventDefault();
      taskDiv.remove();
    });

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(removeLink);

    return taskDiv;
  }

  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const text = input.value.trim();
      if (text) {
        const task = createTask(text);
        tasksContainer.appendChild(task);
        input.value = '';
      }
    }
  });
});
