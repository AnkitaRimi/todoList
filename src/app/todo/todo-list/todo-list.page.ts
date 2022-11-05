import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo, TodoServiceService } from 'src/app/services/todo-service.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit,OnDestroy {
  private getTodo$:Subscription;
  public todoList:Todo[]=[];

  constructor(private commonService: TodoServiceService) { }

  ngOnInit() {
    this.getTodos()
  }

  public addtodo(){
    let todo :Todo={'taskName':'Ghurte Jabo','details':'jabo toh obossoi !'}; 
      this.commonService.addTodo(todo)
  }

  public getTodos() {
   this.getTodo$= this.commonService.getTodoList().subscribe((res: Todo[]) => {
    this.todoList=res;
      console.log("getting Todos", res);

    })
  }
  ngOnDestroy(){
    console.log("destroy called");
    
    if(this.getTodo$){
      this.getTodo$.unsubscribe()
    }
  }
}
