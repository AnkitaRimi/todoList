import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export  interface Todo{
  title:string;
  desc:string;
  priority:1|2|3;
  target_Date:any;
  completion:boolean;
}
export enum TODO_ALL_TXT{
  TODOLIST = 'TodoList'
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

  // one time get from storage
  initPage(){
    let alreadyHasTodo = this.getLocalStorageData;
    // update todo
    this.todoList.next(alreadyHasTodo);

    console.log("init app:",alreadyHasTodo);
    
  }
  // 
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
    // set localstorage
    this.setLocalStorageData = newTodoList;
  }

  

  // get 
  get getLocalStorageData(){
    let a:Todo[] = []
    return localStorage.getItem(TODO_ALL_TXT.TODOLIST)?JSON.parse(localStorage.getItem(TODO_ALL_TXT.TODOLIST)) as Todo[]:[];
  }
  // set
  set setLocalStorageData(todoArr:Todo[]){
    localStorage.setItem(TODO_ALL_TXT.TODOLIST,todoArr.length>0? JSON.stringify(todoArr):JSON.stringify([]));
  }
}
