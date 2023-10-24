import { createReducer, on } from "@ngrx/store";
import { Todo } from "../todo.model";
import { addTodo, removeTodo } from "./todo.actions";

export interface TodoState {
    todos: Todo[];
    error: string;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: TodoState = {
    todos: [
        { id: '0', title: 'testing todo', done: false },
    ],
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
    }))
);
