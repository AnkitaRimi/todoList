import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPage,
    children:[
      {
        path: 'todo-list',
        loadChildren: () => import('./todo-list/todo-list.module').then( m => m.TodoListPageModule)
      },
      {
        path: 'todo-details',
        loadChildren: () => import('./todo-details/todo-details.module').then( m => m.TodoDetailsPageModule)
      },
      {
        path: 'todo-add',
        loadChildren: () => import('./todo-add/todo-add.module').then( m => m.TodoAddPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}
