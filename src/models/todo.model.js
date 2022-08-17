import { isArray } from 'lodash';

class TodoModel {
  constructor({ userId = 0, id = 0, title = '', completed = false }) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  static parseListTodoFromResponse(response) {
    const { data } = response;
    if (isArray(data)) {
      return data.map((el) => {
        const newTodo = new TodoModel(el);
        return newTodo;
      });
    }

    return [];
  }
}

export default TodoModel;
