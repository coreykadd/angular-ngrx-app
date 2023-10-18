import { Component } from '@angular/core';
import { TodoService } from './todo.service';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    todos$ = new BehaviorSubject<Todo[]>([]);
    newTodo = '';

    constructor(private todoService: TodoService) {
        this.todoService.getTodos().subscribe((todos: Todo[]) => {
            this.todos$.next(todos);
        })
    }

    onNewTodoSubmit() {
        console.log('new todo > ', this.newTodo);

        const newTodo: Todo = {
            id: this.todos$.value.length + 1,
            title: this.newTodo,
            done: false
        };

        this.todos$.next([...this.todos$.value, newTodo]);
        this.newTodo = '';
    }

    onDeleteTodo(event: Event, todo: Todo,) {
        event.stopPropagation();
        console.log('deleting todo > ', todo);

        const updatedTodo = this.todos$.value.filter((item) => item.id !== todo.id);
        this.todos$.next(updatedTodo);
    }
}
