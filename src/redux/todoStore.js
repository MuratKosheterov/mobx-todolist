import { makeAutoObservable } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  add = (text) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: text,
      done: false,
    };

    this.todos.push(newTodo);
  };

  removeFromTodo = (id) => {
    this.todos = this.todos.filter((item) => {
      return item.id !== id;
    });
  };

  clicked = (id) => {
    const toggle = this.todos.find((item) => {
      return item.id === id;
    });

    toggle.done = !toggle.done;
  };
}

export default new TodoStore();
