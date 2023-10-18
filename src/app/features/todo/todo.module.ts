import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoRoutingModule } from './todo-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
        MatIconModule,
        MatButtonModule,
        FormsModule
    ]
})
export class TodoModule { }
