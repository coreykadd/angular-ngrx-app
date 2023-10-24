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

// export const loadTodos = createAction('[Todo Page] Load Todos');