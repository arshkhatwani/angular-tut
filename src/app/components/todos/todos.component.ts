import { Component } from '@angular/core';
import { Todo } from 'src/app/types/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      {
        sno: 3,
        title: 'Get groceries',
        desc: 'grocery grocery grocery grocery',
        active: true,
      },
      {
        sno: 4,
        title: 'Get books',
        desc: 'books books books books',
        active: true,
      },
      {
        sno: 2,
        title: 'Go gym',
        desc: 'gym gym gym gym',
        active: true,
      },
      {
        sno: 6,
        title: 'Read book',
        desc: 'Read Read Read Read',
        active: true,
      },
    ];
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
