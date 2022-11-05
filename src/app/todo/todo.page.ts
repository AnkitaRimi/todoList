import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceService } from '../services/todo-service.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
  public todoList:Todo[]=[];

  constructor(private todoService:TodoServiceService) { }

  ngOnInit() {
    this.gettodo();
  }
  gettodo(){
    this.todoService.getTodoList().subscribe((res:any)=>{
    this.todoList=res;
    })
  }

}
