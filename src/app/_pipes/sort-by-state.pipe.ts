import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Todo } from '../_models/todo';

@Pipe({
  name: 'sortByState'
})
export class SortByStatePipe implements PipeTransform {

  transform(todos: Observable<Todo[]>): Observable<Todo[]> {
    return todos.pipe(map(todos => todos.sort((a,b) => Number(a.done) - Number(b.done))));

  }

}
