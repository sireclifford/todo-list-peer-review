import Todo from './Todo.js';

const removeTodo = (id) => {
  const todo = new Todo();
  todo.TodoList = todo.TodoList.filter((todo) => todo.id !== id);
  localStorage.setItem('todoList', JSON.stringify(todo.TodoList));
};

export default removeTodo;