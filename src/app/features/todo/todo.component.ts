import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    ngOnInit() {
        this.getTodos();
    }

    getTodos() {
        this.todoService.getTodos().subscribe((response) => {
            console.log('todo response > ', response);
        });
    }

}
