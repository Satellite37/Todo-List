import { Pipe, PipeTransform } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Todo } from '../_models/todo';

@Pipe({
  name: 'sortByDate'
})
export class SortByDatePipe implements PipeTransform {

  transform(todos: Observable<Todo[]>): Observable<Todo[]> {
    return todos.pipe(map(todos => todos.sort((a,b) => new Date(a.created).getTime() - new Date(b.created).getTime())));
  }

}
