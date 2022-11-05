import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodoAddPageRoutingModule } from './todo-add-routing.module';

import { TodoAddPage } from './todo-add.page';
import { HeaderModule } from 'src/app/component/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeaderModule,
    ReactiveFormsModule,
    TodoAddPageRoutingModule
  ],
  declarations: [TodoAddPage]
})
export class TodoAddPageModule {}
