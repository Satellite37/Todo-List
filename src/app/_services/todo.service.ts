import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from '../_models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];
  public $todos = new BehaviorSubject<Todo[]>([]);
  constructor() { }
  getTodos(){
    let localItems = localStorage.getItem("todos");
    if(localItems !== null)
    {
      this.todos = JSON.parse(localItems);
    }
    this.$todos.next(this.todos);
  }
  create(todo:Todo)
  {
    todo.created = new Date();
    todo.done = false;
    this.todos.push(todo);
    this.save();
  }
  change(todo:Todo)
  {
    this.todos[this.todos.indexOf(todo)].done = !this.todos[this.todos.indexOf(todo)].done;
    this.save();
  }
  delete(todo:Todo){
    this.todos.splice(this.todos.indexOf(todo),1);
    this.save();
  }
  private save(){
    localStorage.setItem("todos",JSON.stringify(this.todos));
    this.$todos.next(this.todos);
  }

}
