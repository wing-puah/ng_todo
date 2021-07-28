import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

import { EditorFooter, NoteEditorComponent } from './note-editor.component';

@NgModule({
  declarations: [EditorFooter, NoteEditorComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  exports: [EditorFooter, NoteEditorComponent],
})
export class NoteEditorModule {}
