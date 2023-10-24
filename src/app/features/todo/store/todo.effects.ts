import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import { addTodo } from "./todo.actions";

@Injectable()
export class TodosEffects {
    constructor(private actions$: Actions) { }

    addTodo$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addTodo),
                tap(action => {
                    console.log(`Todo with ID ${action.todo.id} added.`);
                })
            ),
        { dispatch: false }
    );
}