import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoListPageRoutingModule } from './todo-list-routing.module';

import { TodoListPage } from './todo-list.page';
import { HeaderModule } from 'src/app/component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    TodoListPageRoutingModule
  ],
  declarations: [TodoListPage]
})
export class TodoListPageModule {}
