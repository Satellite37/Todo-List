import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { Todo } from './_models/todo';
import { TodoService } from './_services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo-List';
  $todos = new Observable<Todo[]>();

  constructor(private todoService: TodoService){
  }
  ngOnInit(): void {
    this.todoService.getTodos();
    this.$todos = this.todoService.$todos;
  }
  trackByDate(index:number,item:Todo){
    return item.created
  }
}
