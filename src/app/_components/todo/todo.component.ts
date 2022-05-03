import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/_models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }
  @Input() todo!: Todo;
  ngOnInit(): void {
  }

}
