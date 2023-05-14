import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/types/todo';
import { Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() todo: Todo = {};
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  onClick() {
    this.todoDelete.emit(this.todo);
  }
}
