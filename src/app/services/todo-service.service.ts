import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export  interface Todo{
  taskName:string;
  details:string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  // route state==> Page Visit => route
  // Input Output==> Parent Child
  // Localstorage
  // Subject / Behavious Subject (update+ previous value send kore)
  //reply subject 

  public todoList = new BehaviorSubject<Todo[]>([]);
  constructor() { }

  getTodoList(){
    return this.todoList;
  }
  addTodo(todo:Todo){
    // get pervious
    let getPrev:Todo[] = this.todoList.getValue();
    // add new with previous======= behaviour subject
    let newTodoList = [...getPrev,todo ]
    // update todo
    this.todoList.next(newTodoList);
  }
}
