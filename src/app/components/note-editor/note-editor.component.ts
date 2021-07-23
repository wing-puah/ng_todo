import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { ListItem } from '@app/types/user-actions.types';
import { NewCard, Card } from '@app/types/common.types';


@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
})
export class NoteEditorComponent implements OnInit {
  @Input() data: Card;
  @Output() addEvent = new EventEmitter<NewCard>();
  @Output() editEvent = new EventEmitter<Card>();

  noteEditorForm = this.fb.group({
    id: [''],
    title: [''],
    value: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get isExisting() {
    return !!this.data?.id;
  }

  initIcons(): ListItem[] {
    return [{
      title: 'test', icon: '<div></div>', onClick: e => console.log(e)
    }];
  }

  get id() {
    return this.noteEditorForm.get('id');
  }
  get title() {
    return this.noteEditorForm.get('title');
  }
  get value() {
    return this.noteEditorForm.get('value');
  }

  getFormValue(): Card | NewCard {
    return this.noteEditorForm.value;
  }

  renderSubmissionMsg() {
    return this.isExisting ? 'Update' : 'Add';
  }

  onSubmit() {
    if (this.isExisting) {
      this.editData();
    } else {
      this.addData();
    }
  }

  addData() {
    this.addEvent.emit(this.getFormValue());
  }

  editData() {
    this.editEvent.emit();
  }
};
