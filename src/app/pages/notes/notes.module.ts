import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { RenderPropsDirective } from '@directives/render-props.directive';
import { CardModule } from '@shared/card/card.module';
import { EditorActionsDirective } from '@app/shared/note-editor/note-editor.directive';
import { NoteEditorComponent } from '@app/shared/note-editor/note-editor.component';
import { HelperBarComponent } from '@app/shared/helper-bar/helper-bar.component';
import { IconButtonComponent } from '@app/shared/icon-button/icon-button.component';
import { NotesComponent } from './notes.component';

const appRoutes: Routes = [
  {
    path: '',
    component: NotesComponent,
  },
];

@NgModule({
  declarations: [
    NotesComponent,
    NoteEditorComponent,
    HelperBarComponent,
    IconButtonComponent,
    RenderPropsDirective,
    EditorActionsDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule
  ],
})
export class NotesModule {}
