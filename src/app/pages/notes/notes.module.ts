import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RenderPropsDirective } from '@directives/render-props.directive';
import { CardComponent } from '@components/card/card.component';
import { NoteEditorComponent } from '@components/note-editor/note-editor.component';
import { HelperBarComponent } from '@components/helper-bar/helper-bar.component';
import { NotesComponent } from './notes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
  },
];

@NgModule({
  declarations: [NotesComponent, NoteEditorComponent, HelperBarComponent, CardComponent, RenderPropsDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class NotesModule { }
