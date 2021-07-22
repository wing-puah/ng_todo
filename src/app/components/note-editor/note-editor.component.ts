import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { ListItem } from '@services/user-actions-service';
import { NewCard, Card } from '@app/types/common.types';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent implements OnInit {
  @Input() data: Card;
  @Output() addEvent = new EventEmitter<NewCard>();
  @Output() editEvent = new EventEmitter<Card>();

  myForm = this.fb.group({
    id: [''],
    title: [''],
    value: [''],
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.myForm = this.fb.group({
    //   id: [this.data?.id],
    //   title: [this.data?.title],
    //   value: [this.data?.value],
    // });
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
    return this.myForm.get('id');
  }
  get title() {
    return this.myForm.get('title');
  }
  get value() {
    return this.myForm.get('value');
  }

  getFormValue(): Card | NewCard {
    return this.myForm.value;
  }

  addData() {
    console.log('addding', this.myForm.value);
    this.addEvent.emit(this.getFormValue());
  }

  editData() {
    console.log('editData', this.myForm.value);
    this.editEvent.emit();
  }
};
