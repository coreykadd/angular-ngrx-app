import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor() { }

    getTodos(): Observable<Todo[]> {
        const todos = [
            { id: 1, title: 'Start todo app', done: false },
        ];

        return of(todos);
    }
}
