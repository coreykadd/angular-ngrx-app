import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable, map } from 'rxjs';
import { Todo } from './todo.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    todos$: Observable<Todo[]>;
    newTodo = '';

    constructor(private todoService: TodoService) {
        this.todos$ = this.todoService.getTodos();
    }

    onNewTodoSubmit() {
        console.log('new todo > ', this.newTodo);

        this.todos$ = this.todos$.pipe(
            map((todo) => [...todo, { id: 3, title: this.newTodo, done: false }])
        );
    }
}
