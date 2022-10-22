import { Component, OnInit } from '@angular/core';
import { Todo, TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  constructor(private commonService: TodoServiceService) { }

  ngOnInit() {
    this.getTodos()
  }

  public addtodo(){
    let todo :Todo={'taskName':'Biye kora','details':'Korbo toh obossoi !'}; 
      this.commonService.addTodo(todo)
  }

  public getTodos() {
    this.commonService.getTodoList().subscribe((res: Todo[]) => {
      console.log("getting Todos", res);

    })
  }
}
