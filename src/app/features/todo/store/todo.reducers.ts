import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todo.model";
import { addTodo, loadTodos, loadTodosFailure, loadTodosSuccess, removeTodo } from "./todo.actions";

export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
    todos: [],
    error: '',
    status: 'pending'
};

export const todoReducer = createReducer(
    initialState,
    on(addTodo, (state, { todo }) => ({
        ...state,
        todos: [...state.todos, todo]
    })),
    on(removeTodo, (state, { id }) => ({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== id)
    })),
    on(loadTodos, (state) => ({
        ...state,
        status: 'loading' as const
    })),
    on(loadTodosSuccess, (state, { todos }) => ({
        ...state,
        todos,
        error: '',
        status: 'success' as const
    })),
    on(loadTodosFailure, (state, { error }) => ({
        ...state,
        error,
        status: 'error' as const
    }))
);
