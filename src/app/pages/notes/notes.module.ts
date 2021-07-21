import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { NotesComponent } from './notes.component';

const appRoutes: Routes = [
  {
    path: "",
    component: NotesComponent,
  },
];

@NgModule({
  declarations: [NotesComponent],
  imports: [
    CommonModule, RouterModule.forChild(appRoutes),
  ]
})
export class NotesModule { }
