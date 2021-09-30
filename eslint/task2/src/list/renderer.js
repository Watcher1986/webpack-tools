import { getItem } from './storage';
import './list.scss';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done) {
    return a.done - b.done || new Date(b.finishDate) - new Date(a.finishDate);
  }
  return new Date(b.createDate) - new Date(a.createDate);
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });

  const textElem = document.createElement('span');
  textElem.classList.add('list__item-text');
  textElem.textContent = text;
  if (done) {
    textElem.classList.add('item_done');
  }

  const deleteBtnElem = document.createElement('button');
  deleteBtnElem.classList.add('list__item-delete_btn');
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);

  return listItemElem;
};

export const renderTasks = () => {
  const tasksList = getItem('tasksList') || [];
  console.log(tasksList); // eslint-disable-line
  listElem.innerHTML = '';
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
