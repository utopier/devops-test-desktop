import { BehaviorSubject, Observable } from 'rxjs';

class TodoServiceController {
  nextId = 3;

  // initial data
  TodoInitData = [
    {
      id: 1,
      text: 'Rxjs',
      done: false,
    },
    {
      id: 2,
      text: 'Nextjs',
      done: true,
    },
  ];

  // private
  data = new BehaviorSubject(this.TodoInitData);

  // readonly
  todoData = this.data.asObservable();

  // add Todo
  addTodo(text) {
    this.TodoInitData = this.TodoInitData.concat({
      text,
      id: this.nextId,
      done: false,
    });
    this.data.next(this.TodoInitData);
    this.nextId++;
  }

  // delete Todo
  deleteTodo(id) {
    this.TodoInitData = this.TodoInitData.filter((v) => v.id !== id);
    this.data.next(this.TodoInitData);
  }

  // Toggle Todo
  toggleTodo(id, done) {
    this.TodoInitData = this.TodoInitData.map((v) => ({
      id: v.id,
      text: v.text,
      done: v.id === id ? !v.done : v.done,
    }));
    this.data.next(this.TodoInitData);
  }

  // 해당 State가 필요없을때 실행
  dispose() {
    this.data.complete();
  }
}

export const TodoService = new TodoServiceController();
