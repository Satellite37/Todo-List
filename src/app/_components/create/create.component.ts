import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { of, takeUntil } from 'rxjs';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  text = new FormControl('');
  todoForm = this.formBuilder.group({
    text: new FormControl('', Validators.required)
  });
  constructor(private formBuilder: FormBuilder,private todoService: TodoService) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void
  {
    of(this.todoService.create(this.todoForm.value)).pipe(
      takeUntil(this.todoService.$todos)
    ).subscribe(res => console.log(res));
    this.todoForm.reset();
  }
}
