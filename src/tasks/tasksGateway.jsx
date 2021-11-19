const baseUrl = 'https://6173dd16110a740017223181.mockapi.io/tasks';

export const createTask = taskData => fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to create task');
    }
  });

export const fetchTasksList = () => fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
    return null
  });

export const updateTask = (taskId, taskData) => fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to updateTask task');
    }
  });

export const deleteTask = taskId => fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete task');
    }
  });
