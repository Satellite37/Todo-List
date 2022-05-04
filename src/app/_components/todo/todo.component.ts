import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/todo';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService,private cdr: ChangeDetectorRef) { }
  @Input()
  todo!: Todo;
  ngOnInit(): void {
  }
  changeState()
  {
    this.todoService.change(this.todo);
  }
  delete(){
    this.todoService.delete(this.todo);
  }
  get runChangeDetection() {
    console.log('TodoComponent - Checking the view');
    return true;
  }

}
