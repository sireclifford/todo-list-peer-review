class Todo {
  constructor() {
    this.TodoList = JSON.parse(localStorage.getItem('todoList'))
      ? JSON.parse(localStorage.getItem('todoList'))
      : [];
  }
}
export default Todo;
