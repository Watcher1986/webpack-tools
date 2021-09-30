import { onCreateTask } from './createTask';
// import { onDeleteTask } from './deleteData.js';
import { onToggleTask } from './updateTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);

  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);

  // todoListElem.addEventListener('click', onDeleteTask);
};
