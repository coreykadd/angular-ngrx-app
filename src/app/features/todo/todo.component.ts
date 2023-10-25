import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';
import { Store } from '@ngrx/store';
import { addTodo, loadTodos, removeTodo } from './store/todo.actions';
import { selectAllTodos } from './store/todo.selectors';
import { v4 as uuidv4 } from 'uuid';
import { AppState } from 'src/app/stores/app.reducers';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
    todos$: Observable<Todo[]>;
    newTodo = '';

    constructor(private store: Store<AppState>) {
        this.todos$ = this.store.select(selectAllTodos);
        this.todos$.subscribe(data => console.log('Selected todos:', data));
    }

    ngOnInit(): void {
        this.store.dispatch(loadTodos());
    }

    onNewTodoSubmit() {
        console.log('new todo > ', this.newTodo);

        const newTodo: Todo = {
            id: uuidv4(),
            title: this.newTodo,
            done: false
        };

        this.store.dispatch(addTodo({todo: newTodo}))
        this.newTodo = '';
    }

    onDeleteTodo(event: Event, todo: Todo,) {
        event.stopPropagation();
        console.log('deleting todo > ', todo);

        this.store.dispatch(removeTodo({ id: todo.id }));
    }
}
