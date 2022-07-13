import Todo from './Todo.js';

const clearSelectedTodo = () => {
  const todo = new Todo();
  todo.TodoList = todo.TodoList.filter((todo) => todo.completed === false);
  localStorage.setItem('todoList', JSON.stringify(todo.TodoList));
};

export default clearSelectedTodo;