import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/todo';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }
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

}
