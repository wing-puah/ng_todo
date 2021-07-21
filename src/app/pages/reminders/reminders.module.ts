import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { RemindersComponent } from './reminders.component';

const appRoutes: Routes = [
  {
    path: "",
    component: RemindersComponent,
  },
];

@NgModule({
  declarations: [
    RemindersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ]
})
export class RemindersModule { }
