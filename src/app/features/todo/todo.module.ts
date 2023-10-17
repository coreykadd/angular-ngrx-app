import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        TodoComponent,
    ],
    imports: [
        CommonModule,
        TodoRoutingModule,
        MatListModule,
        MatInputModule,
        FormsModule
    ]
})
export class TodoModule { }
