import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    storageInitialised = false;

    constructor() { }

    getTodos(): Observable<Todo[]> {
        const localTodos = localStorage.getItem('todoList');

        let todos = [];

        if (localTodos) {
            todos = JSON.parse(localTodos);
        } else {
            todos = [
                { id: '1', title: 'Start todo app', done: true },
                { id: '2', title: 'Learn ngrx', done: false }
            ];
        }

        return of(todos);
    }

    updateTodo(todo: Todo): Observable<Todo> {
        const localTodos = JSON.parse(localStorage.getItem('todoList') as string);

        const todoToUpdate: Todo = localTodos.find((item: Todo) => item.id === todo.id);

        if (todoToUpdate) {
            todoToUpdate.done = todo.done
        }

        localStorage.setItem('todoList', JSON.stringify(localTodos));

        return of(todoToUpdate);
    }

    saveTodos(todos: Todo[]): Observable<any> {
        localStorage.setItem('todoList', JSON.stringify(todos));
        return of({});
    }
}
