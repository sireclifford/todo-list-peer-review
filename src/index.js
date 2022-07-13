import Todo from './modules/Todo.js';
import clearSelectedTodo from './modules/clearTodoList.js';
import addTodo from './modules/addTodo.js';
import updateTodo from './modules/updateTodo.js';
import './style.css';
import './assets/images/options.png';
import './assets/images/refresh.png';
import './assets/images/return.png';

const loadTodoList = () => {
  const todo = new Todo();
  const itemContainer = document.querySelector('.items');
  itemContainer.innerHTML = '';
  todo.TodoList.forEach((item) => {
    const itemElement = document.createElement('li');
    itemElement.innerHTML = `
              <div class="task-view">
                <input type="checkbox" value="${item.title}" id="${
  item.id
}" name="${item.title}" ${item.completed ? 'checked' : ''} />
                <label for="${item.title}">${item.title}</label>
              </div>
              <div class="input-div" id="${item.id}">
                <input id="${item.id}" class="input-name" value="${item.title}" type="text" />
              </div>
    `;
    itemContainer.appendChild(itemElement);
  });
  const checkBoxes = document.querySelectorAll('input[type=checkbox]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      const { id } = e.target;
      const title = e.target.value;
      const completed = e.target.checked;
      updateTodo(id, title, completed);
    });
  });

  const inputDiv = document.querySelector('.input-div');
  const inputView = document.querySelector('.input-name');
  const taskView = document.querySelector('.task-view');

  // double click to edit
  taskView.addEventListener('dblclick', () => {
    inputDiv.style.display = 'block';
    taskView.style.display = 'none';
    inputDiv.style.backgroundColor = '#f5f5f5';
  });

  inputView.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const newItemValue = inputView.value;
      if (newItemValue) {
        updateTodo(inputView.id, newItemValue, false);
        loadTodoList();
      }
    }
  });
};

window.onload = () => {
  loadTodoList();
};

const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', () => {
  clearSelectedTodo();
  loadTodoList();
});

const newItem = document.querySelector('#new-item');
newItem.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    const newItemValue = newItem.value;
    if (newItemValue) {
      addTodo(newItemValue);
      loadTodoList();
      newItem.value = '';
    }
  }
});
