import { Action } from "@ngrx/store";
import { TodoState, initialState, todoReducer } from "../features/todo/store/todo.reducers";

export interface AppState {
    todos: TodoState
}

export const appReducer = (state: AppState = { todos: initialState }, action: Action) => ({
    todos: todoReducer(state?.todos, action),
});
