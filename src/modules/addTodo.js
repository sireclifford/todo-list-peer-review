import Todo from './Todo.js';

const addTodo = (title, completed = false) => {
  const todo = new Todo();
  const newTodo = {
    id: todo.TodoList.length,
    title,
    completed,
  };
  todo.TodoList.push(newTodo);
  localStorage.setItem('todoList', JSON.stringify(todo.TodoList));
};

export default addTodo;