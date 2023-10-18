import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    constructor() { }

    getTodos(): Observable<Todo[]> {
        console.log('Getting todos');
        const todos = [
            { id: 1, title: 'Start todo app', done: false },
            { id: 2, title: 'Learn ngrx', done: false },
        ];

        return of(todos);
    }
}
