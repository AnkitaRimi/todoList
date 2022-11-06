import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceService } from 'src/app/services/todo-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.page.html',
  styleUrls: ['./todo-add.page.scss'],
})
export class TodoAddPage implements OnInit {
  name: string = '';
  //desc:string='';
  todoform: FormGroup;
  priorityArray = [
    { id: 1, name: 'low' },
    { id: 2, name: 'medium' },
    { id: 3, name: 'high' },
  ]
  constructor(private todoService: TodoServiceService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.todoform = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      desc: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      priority: [2, [Validators.required]],
      target_Date: [null, [Validators.required]],
      completion: [false, [Validators.required]],
    })
  }

  get title() {
    return this.todoform.get('title')
  }
  get desc() {
    return this.todoform.get('desc')
  }
  get target_Date() {
    return this.todoform.get('target_Date')
  }

  
  onSubmit() {
    // console.log(this.todoform.get('title').value);
    // console.log(this.todoform.valid);
    if (!this.todoform.get('title').value) {
      alert("Vhaiya kichu toh lekh");
      return false;
    }
    if (!this.todoform.valid) {
      alert("Vhaiya Harami !! kichu ki likhbe nah");
      return false;
    } else {
      console.log(this.todoform.value);
      this.todoService.addTodo(this.todoform.value);
    }
  }
}
