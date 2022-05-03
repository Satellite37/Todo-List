import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/_services/todo.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  text = new FormControl('');
  todoForm = this.formBuilder.group({
    text: new FormControl('',Validators.required)
  });
  constructor(private formBuilder: FormBuilder,private todoService: TodoService) { }

  ngOnInit(): void {
  }
  
  onSubmit(): void
  {
    this.todoService.create(this.todoForm.value);
    this.todoForm.reset();
  }
}
