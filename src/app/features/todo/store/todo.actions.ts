import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo.model";

export const addTodo = createAction(
    '[Todo Page] Add Todo',
    props<{ todo: Todo }>()
);

export const removeTodo = createAction(
    '[Todo Page] Remove Todo',
    props<{ id: string }>()
)

export const loadTodos = createAction('[Todo Page] Load Todos');

export const loadTodosSuccess = createAction(
    '[Todo API] Load Todos Success',
    props<{ todos: Todo[] }>()
);

export const loadTodosFailure = createAction(
    '[Todo API] Load Todos Failure',
    props<{ error: string }>()
);