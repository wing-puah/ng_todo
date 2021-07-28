import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { HelperBarModule } from '@shared/helper-bar/helper-bar.module';
import { CardModule } from '@shared/card/card.module';
import { NoteEditorModule } from '@shared/note-editor/note-editor.module';
import { IconButtonModule } from '@shared/icon-button/icon-button.module';

import { RenderPropsDirective } from '@directives/render-props.directive';
import { NotesComponent } from './notes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
  },
];

@NgModule({
  declarations: [NotesComponent, RenderPropsDirective],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NoteEditorModule,
    HelperBarModule,
    IconButtonModule,
  ],
})
export class NotesModule {}
