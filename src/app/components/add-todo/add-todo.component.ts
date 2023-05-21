import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../types/todo';
import ShortUniqueId from 'short-unique-id';

const uid = new ShortUniqueId({ length: 10 });

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string = '';
  desc: string = '';
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
      title: this.title,
      desc: this.desc,
      sno: uid(),
      active: true,
    };

    this.todoAdd.emit(todo);
  }
}
