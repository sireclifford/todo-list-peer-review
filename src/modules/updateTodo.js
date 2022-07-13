import Todo from './Todo.js';

const updateTodo = (id, title, completed) => {
  const todo = new Todo();
  const itemIndex = todo.TodoList.findIndex((todo) => todo.id === Number(id));
  todo.TodoList[itemIndex] = { ...todo.TodoList[itemIndex], title, completed };
  localStorage.setItem('todoList', JSON.stringify(todo.TodoList));
};

export default updateTodo;