import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, of, switchMap, tap, withLatestFrom } from "rxjs";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo, updateTodo, updateTodoSuccess, updateTodoFailure } from "./todo.actions";
import { TodoService } from "../todo.service";
import { Store } from "@ngrx/store";
import { selectAllTodos } from "./todo.selectors";
import { AppState } from "src/app/stores/app.reducers";

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions, private store: Store<AppState>, private todoService: TodoService) { }

    loadTodos$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTodos),
            switchMap(() =>
                this.todoService.getTodos().pipe(
                    map((todos) => loadTodosSuccess({ todos })),
                    catchError((error) => of(loadTodosFailure({ error })))
                )
            )
        )
    );

    addTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addTodo, removeTodo),
            withLatestFrom(this.store.select(selectAllTodos)),
            switchMap(([action, todos]) =>
                this.todoService.saveTodos(todos)
            )
        ),
        { dispatch: false }
    );

    updateTodo$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updateTodo),
            switchMap((action) =>
                this.todoService.updateTodo(action.todo).pipe(
                    map((updatedTodo) => updateTodoSuccess({ todo: updatedTodo })),
                    catchError((error) => of(updateTodoFailure({ error })))
                )
            )
        )
    );
}