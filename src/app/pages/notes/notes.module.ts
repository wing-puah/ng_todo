import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    CommonModule, RouterModule.forChild(appRoutes), MatFormFieldModule, MatInputModule
  ]
})
export class NotesModule { }
