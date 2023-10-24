import { createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducers";
import { AppState } from "src/app/stores/app.reducers";

export const selectTodos = (state: AppState) => state.todos;

export const selectAllTodos = createSelector(
    selectTodos,
    (state: TodoState) => state?.todos
);
